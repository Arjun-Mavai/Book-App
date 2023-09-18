// export const fetchBooks = async () => {
//   const res = await fetch("http://localhost:5000/books");
//   if (!res.json()) {
//     throw new Error("Error while fetching Books");
//   }

//   return res.json();
// };

// i was missing export keyword , and in the other file where it is being consumed
// we need to import like hooks , import {fetchbooks} from "./api(filename)"

// const fetchAuthor = async () => {
//   const res = await fetch("http://localhost:5000/authors");
//   if (!res.json()) {
//     throw new Error("Error while fetching the authors");
//   }

//   return res.json();
// };
