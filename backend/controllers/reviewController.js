import Review from "../models/Review.js";
import Tour from "../models/Tour.js";

export const createReview = async (req, res) => {
    console.log("createReview");

    const tourId = req.params.tourId;
    console.log("tourId:", tourId); // Debug tourId

    const newReview = new Review({
      ...req.body,
      tour: tourId,  // Assign the tourId to the review
    });

    try {
        const saveReview = await newReview.save();
        console.log("Saved Review:", saveReview); // Debug saved review

        const updatedTour = await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: saveReview._id }
        }, { new: true });

        res.status(200).json({ success: true, data: saveReview });
    } catch (error) {
        console.error("Error:", error); // Log the error
        res.status(500).json({ success: false, message: "Failed to create review", error: error.message });
    }
};
