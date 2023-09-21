// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// const Typewriter = ({ text, delay, infinite, index }) => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     let timeout;

//     if (currentIndex <= text.length) {
//       timeout = setTimeout(() => {
//         setCurrentText((prevText) => prevText + text[currentIndex]);
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       }, delay);
//     } else if (infinite) {
//       // ADD THIS CHECK
//       setCurrentIndex(0);
//       setCurrentText("");
//     }

//     return () => clearTimeout(timeout);
//   }, [currentIndex, delay, infinite, text]);

//   return <span>{currentText}</span>;
// };

// export default Typewriter;

// Typewriter.propType = {
//   text: PropTypes.string.isRequired,
//   delay: PropTypes.number.isRequired,
//   infinite: PropTypes.bool.isRequired,
// };

{
  /* <MyComponent data={[
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]} /> */
}

// function MyComponent(props) {
//   const dataArray = props.data;

//   // Now you can map through the array of objects and render them
//   return (
//     <div>
//       {dataArray.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// // }

// MyComponent.propTypes = {
//     data: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   };
