import Booking from "../models/Booking.js"

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const saveBooking = await newBooking.save()
        res.status(200).json({ success: true, data: saveBooking });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create booking", error: error.message });
    }
}


// get Single booking 
export const getBooking = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({ succuss: true, data: book })
    } catch (error) {
        res.status(404).json({ succuss: false, message: "Failed to fetch single booking", error })
    }
}

// get All Booking 
export const getAllBooking = async (req, res) => {
    try {
        const allBooking = await Booking.find()
        res.status(200).json({ succuss: true, count: allTour.length, data: allBooking })
    } catch (error) {
        res.status(500).json({ succuss: false, message: "Failed to fetch all allBooking", error })
    }
}