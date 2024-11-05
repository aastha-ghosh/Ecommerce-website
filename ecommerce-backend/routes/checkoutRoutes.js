const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: "receipt_order_12345",
    };
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

router.post("/create-order-temp", async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    res.json({ status: false, message: "Payment Failed" });
  }

  res.json({ status: true, message: "payment Successfull" });
});

module.exports = router;
