import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  interest: { type: String, required: true },
  model: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
export default Enquiry;
