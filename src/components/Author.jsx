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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occured ...</div>;

  return (
    <div>
      <ul>
        {data.map((author) => (
          <li key={author.id} className="flex flex-col gap-2 bg-slate-900 p-4 ">
            <div className="img">
              <img
                src={author.image} // issue was src="{}" didn't remove the " "
                alt=""
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
        ))}
      </ul>
    </div>
  );
};

export default Author;
