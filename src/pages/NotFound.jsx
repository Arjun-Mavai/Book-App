import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Page not Found ::{" "}
      <span className="bg-gradient-to-r from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent font-extrabold text-lg shadow-lg">
        Welcome To Arjun Gurjar Web App
      </span>
      . Till then enjoy this remove bg photo video
      <div className="w-full h-auto rounded-lg max-w-[320px] lg:max-w-[420px] overflow-hidden mt-4">
        <ReactPlayer
          url="https://sb.kaleidousercontent.com/67418/x/9289c7b8dd/manuel_compressed.mp4"
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          controls={false} // Disable default browser controls
          config={{
            file: {
              attributes: {
                poster:
                  "https://sb.kaleidousercontent.com/67418/840x560/d749ed76de/manuel-poster.jpg",
              },
            },
          }}
        />
      </div>
      <div className="bottom mt-8">
        <h2>Go check it out this website</h2>
        <Link to="https://www.remove.bg/" className=" font-bold">
          Remove Bg
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

{
  /* <video
        preload="auto"
        className="w-full h-auto rounded-4xl max-w-[320px] lg:max-w-[420px]"
        poster="https://sb.kaleidousercontent.com/67418/840x560/d749ed76de/manuel-poster.jpg"
        autoPlay
        playsInline
        loop
        controls
        muted
      >
        <source
          src="https://sb.kaleidousercontent.com/67418/x/9289c7b8dd/manuel_compressed.mp4"
          type="video/mp4"
        />
        {/* Add additional source elements for other video formats if needed */
}
// </video> */}
