import ReactPlayer from "react-player";
import { useQuery } from "react-query";

const fetchBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();
  if (!data) {
    throw new Error("Error while fetching Books");
  }

  return data;
};

const Book = () => {
  const { data, isLoading, isError } = useQuery("books", fetchBooks);
  const baseUrl =
    import.meta.env.PROD.VITE_APP_IMAGE_BASE_URL || "http://localhost:5000"; // Accessing environment variable

  // if (process.env.REACT_APP_MY_VARIABLE) {
  //   // Access the environment variable
  //   const baseUrl = process.env.REACT_APP_MY_VARIABLE;

  //   // You can now use myVariable in your code
  //   console.log(`My Variable Value: ${myVariable}`);
  // } else {
  //   // Handle the case when the variable is not defined
  //   console.error("REACT_APP_MY_VARIABLE is not defined.");
  // }

  if (isLoading)
    return (
      <img
        className="w-full h-auto rounded-lg max-w-[320px] lg:max-w-[420] overflow-hidden mt-4 flex items-center justify-center"
        src="https://media4.giphy.com/media/cge9nG7e7wKWbMm9cY/giphy.gif?cid=ecf05e47ctuj33xll4tkqn6oq202408knictzr0nj8bprk4t&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt=""
      />
    );
  if (isError)
    return (
      <div className="w-full h-auto rounded-lg max-w-[320px] lg:max-w-[420px] overflow-hidden mt-4">
        <ReactPlayer
          url="https://media0.giphy.com/media/vboZVH1oDiLdctj4V3/giphy360p.mp4"
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
                  "https://media2.giphy.com/media/km7QNaRa2LW4FxeWDW/200.gif",
              },
            },
          }}
        />
      </div>
    );

  return (
    <div>
      <ul>
        {data.map((datum) => {
          const imageUrl = `${baseUrl}${datum.photo}`;

          return (
            <li key={datum.id} className="flex flex-col gap-2 bg-gray-900 p-4">
              <div className="img">
                <img
                  src={imageUrl} // issue was src="{}" didn't remove the " "
                  alt=""
                  className="h-24 w-24 rounded-full mt-2"
                />
              </div>
              <div className="title flex gap-2">
                <p
                  className="
           
           bg-gradient-to-r from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent text-bold text-lg shadow-lg text font-bold"
                >
                  0{datum.id}
                </p>
                <span className=" flex-start heading2 w-full bg-gradient-to-r from-[#7affd7] to-[#00ffb2] bg-clip-text text-transparent font-extrabold ">
                  {datum.title}
                </span>
              </div>

              <div className="summary">
                <span className=" bg-gradient-to-r from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent font-semibold text-lg shadow-lg">
                  {datum.summary}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Book;
