import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    order_id: { type: String, required: true },
    payment_id: { type: String, required: true },
  },
  { timestamps: true }
);

const Payment =
  mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
export default Payment;
