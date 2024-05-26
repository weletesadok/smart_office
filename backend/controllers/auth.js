const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      department: req.body.department,
      phoneNumber: req.body.phoneNumber
    });

    const savedUser = await user.save();
    if (!savedUser)
      return res.status(400).json({ message: "error while registration" });

      const accessToken = jwt.sign(
          {
              "UserInfo": {
                  "email": savedUser.email,
                  "roles": savedUser.roles
              }
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15m' }
      )

      const refreshToken = jwt.sign(
          { "email": savedUser.email },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: '7d' }
      )

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body

   if (!email || !password) {
       return res.status(400).json({ message: 'All fields are required' })
   }

   const foundUser = await User.findOne({ email }).exec()

   if (!foundUser) {
       return res.status(401).json({ message: 'Unauthorized' })
   }

   const match = await bcrypt.compare(password, foundUser.password)

   if (!match) return res.status(401).json({ message: 'Unauthorized' })

   const accessToken = jwt.sign(
       {
           "UserInfo": {
               "email": foundUser.email,
               "roles": foundUser.roles
           }
       },
       process.env.ACCESS_TOKEN_SECRET,
       { expiresIn: '15m' }
   )

   const refreshToken = jwt.sign(
       { "email": foundUser.email },
       process.env.REFRESH_TOKEN_SECRET,
       { expiresIn: '7d' }
   )

   res.cookie('jwt', refreshToken, {
       httpOnly: true,
       secure: true,
       sameSite: 'None',
       maxAge: 7 * 24 * 60 * 60 * 1000
   })

   res.json({ accessToken })
};

exports.refresh = async (req, res) => {
  const cookies = req.cookies

     if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

     const refreshToken = cookies.jwt

     jwt.verify(
         refreshToken,
         process.env.REFRESH_TOKEN_SECRET,
         async (err, decoded) => {
             if (err) return res.status(403).json({ message: 'Forbidden' })

             const foundUser = await User.findOne({ email: decoded.email }).exec()

             if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })
             const accessToken = jwt.sign(
                 {
                     "UserInfo": {
                         "email": foundUser.email,
                         "roles": foundUser.roles
                     }
                 },
                 process.env.ACCESS_TOKEN_SECRET,
                 { expiresIn: '15m' }
             )

             res.json({ accessToken })
         }
     )
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken");
    res.json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const generateToken = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_EMAIL_PASSWORD,
  },
});

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = generateToken();
    user.passwordResetToken = resetToken;
    user.passwordResetExpires = Date.now() + 3600000;
    await user.save();

    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Password Reset Token",
      text: `Your password reset token is: ${resetToken}`,
    });
    res.json({ message: "Password reset token sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Old password is incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
