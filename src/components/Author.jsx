import { useQuery } from "react-query";

const fetchAuthor = async () => {
  const res = await fetch("http://localhost:5000/authors");
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
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Author;
