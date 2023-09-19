import ReactPlayer from "react-player";
import { useQuery } from "react-query";

const fetchAuthor = async () => {
  const res = await fetch("http://localhost:5000/authors"); // we could use /db.json to get the data diff use case
  console.log("Response:", res);

  const data = await res.json();
  console.log("Data:", data);
  if (!data) {
    throw new Error("Error while fetching the authors");
  }

  return data;
};

const Author = () => {
  const { data, isLoading, isError } = useQuery("authors", fetchAuthor);
  // using books query here rather than author , mistake caught "books"=> changed to authors

  const baseUrl =
    import.meta.env.VITE_APP_IMAGE_BASE_URL || "http://localhost:5000"; // Accessing environment variable

  if (isLoading)
    return (
      <img
        className="w-24 h-24 flex items-center justify-center"
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

  // https://media0.giphy.com/media/vboZVH1oDiLdctj4V3/giphy360p.mp4

  // https://media2.giphy.com/media/km7QNaRa2LW4FxeWDW/200.gif

  return (
    <div>
      <ul>
        {data.map((author) => {
          const imageUrl = `${baseUrl}${author.image}`;

          return (
            <li
              key={author.id}
              className="flex flex-col gap-2 bg-slate-900 p-4 "
            >
              <div className="img">
                <img
                  src={imageUrl} // issue was src="{}" didn't remove the " "
                  alt="/images/osho.jpg"
                  className="h-24 w-24 rounded-full mt-2"
                />
              </div>
              <div className="title flex gap-2">
                <p
                  className="
                      
                      bg-gradient-to-r from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent text-bold text-lg shadow-lg text font-bold"
                >
                  0{author.id}
                </p>
                <span className=" flex-start heading2 text-2xl w-full bg-gradient-to-r from-[#7affd7] to-[#00ffb2] bg-clip-text text-transparent font-bold ">
                  {author.text}
                </span>
              </div>

              <div className=" bg-gradient-to-r from-[#ff7170] to-[#ffe57f]  ml-auto name uppercase bg-clip-text text-transparent text-bold text-lg shadow-lg text font-bold">
                <span>{author.phil}</span>
                {/* one issue  noticed i used ml-auto to resolve that issue , flex flex-row-reverse not giving gradient color */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Author;
