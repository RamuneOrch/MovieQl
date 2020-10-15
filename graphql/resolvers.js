import { getMovies } from "./db3"


const resolvers = {
    Query: {
        movies: (_,{rating, limit}) => getMovies(limit,rating)
    }
};

export default resolvers;