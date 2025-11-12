// 1. GET /api/tamilmovies
export const Details = (req, res) => {
    
    console.log(req.body)

    const movies = [
        { id: 1, title: "Leo", actor: "Vijay", releaseYear: 2023 },
        { id: 2, title: "Vikram", actor: "Kamal Haasan", releaseYear: 2022 }
    ];
    res.status(200).json({movie_data : movies})
}

// GET /api/tamilmovies/:id
export const MovieWithId = (req, res) => {
    console.log(req.params)
    const movies = [
        { id: 1, title: "Leo", actor: "Vijay", releaseYear: 2023 },
        { id: 2, title: "Vikram", actor: "Kamal Haasan", releaseYear: 2022 }
    ];
    const moviesId = parseInt(req.params.id);
    const movie = movies.find((m) => m.id === moviesId);
    if(movie) {
        res.status(200).json({movie});
    }
    else{
        res.status(404).json({ message: "Movie not found" });
    }
}

// POST /api/tamilmovies
export const NewMovie = (req, res) => {
    console.log(req.body)
    const {title, actor} = req.body
    res.status(200).json({movie : title, mainLead : actor})
}

