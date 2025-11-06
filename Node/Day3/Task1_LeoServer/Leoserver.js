// Leoserver.js
import http from "http";
import { URL } from "url";
import { moviesFilePath, readMoviesFile } from "./utils.js";

// server name info (not functional, just a label)
const SERVER_NAME = "Leo Movie Booking";
const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    // build full URL using host header (works for localhost)
    const base = `http://${req.headers.host}`;
    const reqUrl = new URL(req.url, base);
    const pathname = reqUrl.pathname;        // route path like /movies
    const query = Object.fromEntries(reqUrl.searchParams.entries()); // query object

    // set common header for plain text
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    // Route: / or /home
    if (pathname === "/" || pathname === "/home") {
      res.writeHead(200);
      res.end(`${SERVER_NAME}\nWelcome to Leo Movie Booking!\nAvailable routes:\n/home\n/movies\n/booking?movie=MovieName\n/contact\n`);
      return;
    }

    // Route: /movies -> read file and return movies
    if (pathname === "/movies") {
      const movies = await readMoviesFile(); // uses fs/promises inside utils
      res.writeHead(200);
      res.end(`Movies list (from file):\n${movies.join("\n")}\n\nFile path: ${moviesFilePath}`);
      return;
    }

    // Route: /booking?movie=Leo&seat=5
    if (pathname === "/booking") {
      // read query parameters
      const movie = query.movie || "unknown";
      const seat = query.seat || "not specified";

      // simple example: check if movie exists in file
      const movies = await readMoviesFile();
      const exists = movies.includes(movie);

      res.writeHead(200);
      res.end(`Booking request received\nMovie: ${movie}\nSeat: ${seat}\nAvailable: ${exists ? "Yes" : "No (check movie name)"}\n`);
      return;
    }

    // Route: /contact
    if (pathname === "/contact") {
      res.writeHead(200);
      res.end("Contact Leo Movie Booking: leobooking@example.com\nPhone: +91-9000000000");
      return;
    }

    // default 404
    res.writeHead(404);
    res.end("404 Not Found - route does not exist");
  } catch (err) {
    // server-side error handler
    res.writeHead(500);
    res.end("Server error: " + String(err));
  }
});

// start server
server.listen(PORT, () => {
  console.log(`${SERVER_NAME} running at http://localhost:${PORT}`);
});
