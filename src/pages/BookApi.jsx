import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function BookApi() {
  const [authors, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(authors.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an API request using fetch with async/await
        const response = await fetch("http://localhost:3000/arjun");

        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response as JSON and store it in 'data'
        const data = await response.json();

        // Ensure 'data' is an array before using 'map'
        if (Array.isArray(data)) {
          // Now you can safely map over the array of books
          setBooks(data);
        } else {
          throw new Error("Data from API is not an array");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div className="text-black">
      {error ? <div>{error}</div> : null}
      {authors
        .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
        .map((book, index) => (
          <div key={index} className="prose">
            <p className="font-bold    wysiwyg wysiwyg-slate lg:wysiwyg-xl">
              Name: {book.name}
            </p>
            <details className="font-semibold max-w-fit rounded-md p-2 text-slate-950 tracking-tight leading-6   bg-gradient-to-r from-rose-400 to-teal-400 bg-opacity-90">
              <summary>
                {book.name}
                {`  Quote`}
                {/* <hr className="text-black border border-green-800" />{" "}
                <hr className="text-black border border-white" />
                <hr className="text-black border border-orange-600" /> */}
              </summary>
              : {book.quotes.join(" ")}
              {/* <details className="prose prose-a:text-blue-600 hover:prose-a:text-blue-500">
                {book.quotes.join(" ")}
              </details> */}
            </details>

            <div className="mt-8"></div>
          </div>
        ))}

      <ReactPaginate
        previousLabel={
          <span className="px-2 mt-[24px] py-1 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 cursor-pointer">
            Previous
          </span>
        }
        nextLabel={
          <span className="px-2 mt-[24px] py-1 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 cursor-pointer">
            Next
          </span>
        }
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex space-x-2"} // Apply 'flex' and 'space-x-2' classes
        subContainerClassName={"pages pagination flex space-x-2"} // Apply 'flex' and 'space-x-2' classes
        activeClassName={"active"}
        pageClassName={"border  rounded-md p-2"}
        previousLabelClassName={"border rounded-md p-2"}
        nextLabelClassName={"border rounded-md p-2"} // Apply custom styles for each pagination item
      />
    </div>
  );
}

export default BookApi;
