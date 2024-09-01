import Tour from "../models/Tour.js";


// create new tour 
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const saveTour = await newTour.save()
        res.status(200).json({ succuss: true, data: saveTour })
    } catch (error) {
        res.status(500).json({ succuss: false, message: "Failed to create" })

    }
}

// Update exist tour 
export const updateTour = async (req, res) => {
    const id = req.params.id

    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ succuss: true, data: updateTour })
    } catch (error) {
        res.status(500).json({ succuss: false, message: "Failed to update", error })
    }
}

// delete exist tour 
export const deleteTour = async (req, res) => {
    const id = req.params.id
    try {
        const deleteTour = await Tour.findByIdAndDelete(id)
        res.status(200).json({ succuss: true, data: deleteTour })
    } catch (error) {
        res.status(500).json({ succuss: false, message: "Failed to delete", error })
    }
}

// get Single tour 
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const singleTour = await Tour.findById(id).populate('reviews')
        res.status(200).json({ succuss: true, data: singleTour })
    } catch (error) {
        res.status(404).json({ succuss: false, message: "Failed to fetch single tour", error })
    }
}

// get All tour 
export const getAllTour = async (req, res) => {

    // pagination 
    const page = parseInt(req.query.page)

    try {
        const allTour = await Tour.find().populate('reviews').skip(page * 8).limit(8)
        res.status(200).json({ succuss: true, count: allTour.length, data: allTour })
    } catch (error) {
        res.status(404).json({ succuss: false, message: "Failed to fetch all tour", error })
    }
}

// get Tour By Search 
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tourBySearch = await Tour.find({
                        city,
                        distance: { $gte: distance },
                        maxGroupSize: { $gte: maxGroupSize }
                    }).populate('reviews');
        res.status(200).json({ success: true, data: tourBySearch });
    } catch (error) {
        res.status(404).json({ success: false, message: "Failed to search tour", error });
    }
};

// get featured tour 
export const getFeaturedTour = async (req, res) => {
    try {
        const featuredTour = await Tour.find({featured:true}).populate('reviews').limit(8)
        res.status(200).json({ succuss: true, count: featuredTour.length, data: featuredTour })
    } catch (error) {
        res.status(404).json({ succuss: false, message: "Failed to fetch featured tour", error })
    }
}

// get tour count
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({ succuss: true, data: tourCount })
    } catch (error) {
        res.status(500).json({ succuss: false, message: "Failed to fetch featured tour", error })
    }
}


