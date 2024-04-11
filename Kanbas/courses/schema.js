import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    name: { type: String },
    number: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    image: { type: String },
  },
  { collection: "courses" }
);
export default courseSchema;
