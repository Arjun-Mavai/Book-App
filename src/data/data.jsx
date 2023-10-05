const data = [
  ["Home", "/"],
  ["Books", "/books"],
  ["Authors", "/authors"],
  ["Not Found", "*"], // updated from reports to "*" to take all paths
  ["About Project", "/projects"],
  ["Carousel", "/slide"],
  ["Quiz", "/quiz"],
  ["Reminder", "/remind"],
  ["Gallery", "/photo"],
  ["MediaPosts", "/media"],
  ["MatchGame", "/match"],
];

export default data;

// The error you're encountering, "data not defined," likely occurs because you're exporting the `data` array incorrectly. To properly export the `data` array from your `data.js` file, you should use one of the following export methods:

// Method 1: Named Export
// ```javascript
// // data.js
// const data = [
//   ["Home", "/"],
//   ["Books", "/books"],
//   ["Authors", "/authors"],
//   ["Not Found", "*"], // updated from reports to "*" to take all paths
//   ["About Project", "/projects"],
//   ["Carousel", "/slide"],
//   ["Quiz", "/quiz"],
//   ["Reminder", "/remind"],
//   ["Gallery", "/photo"],
//   ["MediaPosts", "/media"],
// ];

// export default data;
// ```

// You can then import the `data` array in another JavaScript file like this:

// ```javascript
// import data from './data';

// // Use the data array as needed
// ```

// Method 2: Named Export with `export`
// If you prefer to export it explicitly, you can do so like this:

// ```javascript
// // data.js
// const data = [
//   ["Home", "/"],
//   ["Books", "/books"],
//   ["Authors", "/authors"],
//   ["Not Found", "*"], // updated from reports to "*" to take all paths
//   ["About Project", "/projects"],
//   ["Carousel", "/slide"],
//   ["Quiz", "/quiz"],
//   ["Reminder", "/remind"],
//   ["Gallery", "/photo"],
//   ["MediaPosts", "/media"],
// ];

// export { data };
// ```

// And then import it as follows:

// ```javascript
// import { data } from './data';

// // Use the data array as needed
// ```

// Either of these methods should work to export and import your `data` array correctly. Make sure the `data.js` file is located in the same directory or in a directory relative to the file where you're importing it.
