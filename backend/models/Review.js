import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    tour: {  // Changed from productId to tour
      type: mongoose.Types.ObjectId,
      ref: "Tour",
      required: true,  // This should be required to ensure that a review is always linked to a tour
    },
    username: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
