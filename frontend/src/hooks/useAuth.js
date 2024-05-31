import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isHead = false;
  let isAdmin = false;
  let status = "Employee";

  if (token) {
    const decoded = jwtDecode(token);
    const { email, roles } = decoded.UserInfo;

    isHead = roles.includes("Head");
    isAdmin = roles.includes("Admin");

    if (isHead) status = "Head";
    if (isAdmin) status = "Admin";

    return { email, roles, status, isHead, isAdmin };
  }

  return { email: "", roles: [], isHead, isAdmin, status };
};
export default useAuth;
