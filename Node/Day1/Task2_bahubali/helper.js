export const title = (movie) => {
    console.log(`Movie name : ${movie.title}`)
}

export const director = (movie) => {
    console.log(`Director name : ${movie.director}`)
}

export const lead = (movie) => {
    console.log(`Lead Actor: ${movie.leadActor.toUpperCase()}`)
}