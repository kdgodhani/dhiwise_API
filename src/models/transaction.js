const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      // ref: "User",
      required: true,
    },
    order_id: {
      type: Schema.Types.ObjectId,
      // ref: "Order",
      required: true,
    },
    txn_amount: {
      type: Number,
      required: true,
    },
    txn_status: {
      type: String,
      enum: ["Pending", "Success", "Failed"],
      default: "Pending",
    },
    payment_method: {
      type: String,
      enum: ["COD", "UPI", "Debit Card", "Credit Card"],
      required: true,
    },
    txn_date: {
      type: Date,
      required: true,
      // default: Date.now
    },
    comment: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
    },
    is_dummy: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
