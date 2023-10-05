import axios from "axios";
import { useEffect, useState } from "react";

function DisplayPhotos() {
  const [btn, setBtn] = useState(false);
  const [photos, setPhoto] = useState([]); // earlier i was using string but have to use the array
  //   Promise based HTTP client for the browser and node.js : Axios
  //   The state photos should be initialized as an empty array, not an empty string, because you intend to store an array of photos.
  const apiKey = "7wcDtzy5b3rioIKxdmdnOvorYqNRejiaEzLDAqNJA2E";

  useEffect(() => {
    // testing stash
    axios
      .get(
        `https://api.unsplash.com/photos/random/?count=10&query=nature&client_id=${apiKey}`
      )
      //   .then((res) => res.json()) In your .then block after the axios GET request, you're trying to parse the response with res.json(). However, Axios already returns JSON data, so you don't need to parse it again. Remove the .then((res) => res.json()) part:
      .then((res) => setPhoto(res.data))
      .catch((error) => console.error(`Error occured while fetching ${error}`));
  }, [apiKey]);

  //   bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent to better text gradient property classes
  return (
    <div className="main relative  w-full  ">
      <div className="container    text-6xl ">
        {btn && (
          <button
            className="bg-blue-400 hover:bg-blue-600 mt-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2    py-4 px-6 text-2xl rounded-lg shadow-lg    "
            onClick={() => setBtn(!btn)}
          >
            Click for Photos
          </button>
        )}
        {photos?.map((photo) => (
          <div className="container     " key={photo.id}>
            <img
              style={{
                filter: "url('#squiggly-4')",
              }}
              src={photo.urls.regular}
              alt="not found"
              className=" w-full rounded-lg drop-shadow-lg   transition-all duration-300 filter shadow-2xl  object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayPhotos;
