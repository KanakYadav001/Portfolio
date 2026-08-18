import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);
