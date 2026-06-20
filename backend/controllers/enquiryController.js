import Enquiry from '../models/Enquiry.js';

export const createEnquiry = async (req, res) => {
  try {
    const { fullName, mobile, interest, model, message } = req.body;
    
    if (!fullName || !mobile || !interest || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const newEnquiry = new Enquiry({
      fullName,
      mobile,
      interest,
      model,
      message
    });

    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully!' });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({ error: 'Server error, could not save enquiry' });
  }
};

export const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ error: 'Server error, could not fetch enquiries' });
  }
};
