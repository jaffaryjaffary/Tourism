import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    username: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String },
  },
  { timestamps: true }
);

AdminSchema.index({ username: 1 }, { unique: true, sparse: true });
AdminSchema.index({ email: 1 }, { unique: true, sparse: true });

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
export default Admin;
