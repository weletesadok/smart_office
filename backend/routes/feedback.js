const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

router.post('/', async (req, res) => {
  try {
    const { email, phoneNumber, message } = req.body;

    const newFeedback = new Feedback({
      email,
      phoneNumber,
      message
    });

    await newFeedback.save();

    res.status(201).json({ message: 'Feedback added successfully' });
  } catch (error) {
    console.error('Error adding feedback:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error retrieving feedbacks:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
