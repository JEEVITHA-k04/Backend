import getMovie from "./movie.js";
import { title, director, lead } from './helper.js'
const movie = getMovie();

title(movie);
director(movie);
lead(movie);
