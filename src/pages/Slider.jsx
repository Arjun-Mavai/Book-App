// Importing useState hook from React
import { useState } from "react";

// Sidebar component definition
const ImageCar = () => {
  // State to keep track of hovered item
  // i used the slider name where on rendered it as a slider with o to 100 number on numbe
  const [hover, setHover] = useState(null); // Initialized to null

  // Array of items to be displayed
  // i started using this without putting images in the public folder
  const items = [
    {
      text: "Nature",
      quote:
        "https://i.gifer.com/origin/7c/7c7cf8bd20c8b7f17fae20ade28e7d92_w200.gif",
    },
    {
      text: "Ying",
      quote: "https://i.gifer.com/myX.gif",
    },
    {
      text: "3D",
      quote: "https://i.gifer.com/1YFx.gif",
    },
  ];

  // JSX for the component
  return (
    <div className="flex relative gap-4 p-4 bg-slate-900 h-screen">
      {/* Sidebar section */}
      <div className="sidebar w-1/4">
        {/* Loop through each item */}
        {items.map((item, index) => (
          <div
            // Set hover state on mouse enter
            onMouseEnter={() => setHover(index)}
            // Reset hover state on mouse leave
            onMouseLeave={() => setHover(null)}
            onTouchStart={() => setHover(null)}
            onTouchEnd={() => setHover(index)}
            key={index}
            className="names  m-4 gap-2 w-32 md:w-48 lg:w-64 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            {/* Display the text of the item */}
            {item.text}
          </div>
        ))}
      </div>
      {/* Display area section */}
      <div className="displayArea w-3/4">
        {/* Conditionally render image if hover is not null */}
        {hover !== null && (
          <img
            className="w-full h-auto absolute bottom-[250px] right-1 rounded-lg max-w-[320px] lg:max-w-[420] overflow-hidden mt-4 flex items-center justify-center"
            src={items[hover].quote}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

// Export the Sidebar component
export default ImageCar;
