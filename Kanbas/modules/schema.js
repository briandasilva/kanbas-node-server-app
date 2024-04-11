import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    name: { type: String },
    description: { type: String },
    course: { type: String, required: true },
    lessons: {
      type: [
        {
          _id: { type: String },
          name: { type: String },
          description: { type: String },
          module: { type: String, required: true },
        },
      ],
      default: [],
    },
  },
  { collection: "modules" }
);
export default moduleSchema;
