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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occured ...</div>;

  return (
    <div>
      <ul>
        {data.map((datum) => (
          <li key={datum.id} className="flex flex-col gap-2 bg-gray-900 p-4">
            <div className="img">
              <img
                src={datum.photo} // issue was src="{}" didn't remove the " "
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
        ))}
      </ul>
    </div>
  );
};

export default Book;
