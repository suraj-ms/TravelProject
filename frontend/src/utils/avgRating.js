const calculateRating = reviews => {
    const totleRating = reviews?.reduce((acc, item) => acc + item.rating, 0)
    const avgRating =
     totleRating == 0 ? '' : totleRating == 1 ?
     totleRating : (totleRating / reviews?.length).toFixed(1)

     return {totleRating, avgRating}

}

export default calculateRating