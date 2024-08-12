const mongoose=require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/fsd60wd_01_mongoose')



const Movies=mongoose.model("Movies",{
    movieName:{type:String},
    movieSummary:{type:String},
    movieRating:{type:Number},
    moviePoster:{type:String},
    movieTrailer:{type:String}
})


const moviesData=new Movies({
    movieName:"Iron Man 2",
    movieSummary:"Action movie",
    movieRating: " ",
    moviePoster: " ",
    movieTrailer: ""
})




//async await
const connection = async () => {
    try {
        const res = await moviesData.save()
        console.log(res, "We are connected to MongoDB....")
    } catch (error) {
        console.error("Error saving task:", error)
    }
}

connection()