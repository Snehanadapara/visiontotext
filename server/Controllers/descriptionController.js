const Description = require('../models/Description');


exports.getDescriptionsByUser = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }

    const descriptions = await Description.find({ userEmail: email }).sort({ createdAt: -1 });
    res.status(200).json({ descriptions });
  } catch (error) {
    console.error('Error fetching descriptions:', error);
    res.status(500).json({ message: 'Failed to fetch descriptions.' });
  }
};
