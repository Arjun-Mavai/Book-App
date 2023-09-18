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
          <li key={datum.id}>{datum.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
