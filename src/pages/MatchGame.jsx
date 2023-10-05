import { useState } from "react";
import ReactPaginate from "react-paginate";

const MatchGame = () => {
  const countriesAndCapitals = {
    "United States": "Washington, D.C.",
    Canada: "Ottawa",
    "United Kingdom": "London",
    France: "Paris",
    Germany: "Berlin",
    Italy: "Rome",
    Spain: "Madrid",
    Portugal: "Lisbon",
    Netherlands: "Amsterdam",
    Belgium: "Brussels",
    Switzerland: "Bern",
    Austria: "Vienna",
    Sweden: "Stockholm",
    Norway: "Oslo",
    Denmark: "Copenhagen",
    Finland: "Helsinki",
    Iceland: "Reykjavik",
    Russia: "Moscow",
    China: "Beijing",
    Japan: "Tokyo",
    "South Korea": "Seoul",
    India: "New Delhi",
    Australia: "Canberra",
    "New Zealand": "Wellington",
    Brazil: "Brasília",
    Argentina: "Buenos Aires",
    Mexico: "Mexico City",
    Canada: "Ottawa",
    "South Africa": "Pretoria",
    Egypt: "Cairo",
    Nigeria: "Abuja",
    Kenya: "Nairobi",
    "Saudi Arabia": "Riyadh",
    Turkey: "Ankara",
    Greece: "Athens",
    Egypt: "Cairo",
    Iran: "Tehran",
    Iraq: "Baghdad",
    Jordan: "Amman",
    Lebanon: "Beirut",
    Syria: "Damascus",
    Israel: "Jerusalem",
    Palestine: "Ramallah",
    Qatar: "Doha",
    "United Arab Emirates": "Abu Dhabi",
    Singapore: "Singapore",
    Malaysia: "Kuala Lumpur",
    Thailand: "Bangkok",
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const [data, setData] = useState(
    Object.values(countriesAndCapitals).concat(
      Object.keys(countriesAndCapitals)
    )
  );
  const [selected, setSelected] = useState(null);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Function to shuffle an array in place
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (item) => {
    // Check if something is already selected.
    if (selected) {
      // Check if the current item and the selected item are a valid pair.
      if (
        (countriesAndCapitals[selected] === item ||
          countriesAndCapitals[item] === selected) &&
        data.includes(selected) &&
        data.includes(item)
      ) {
        // Remove the valid pair from the choices.
        setData((prevChoices) =>
          prevChoices.filter((choice) => choice !== item && choice !== selected)
        );

        // Shuffle the data array to randomize the order.
        setData((prevData) => shuffleArray([...prevData]));
      }
      // Reset the selected item.
      setSelected(null);
    } else {
      // Set the current item as selected.
      setSelected(item);
    }
  };

  return (
    <div>
      <div className="main text-black">
        {data
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((item, index) => (
            <button
              key={index}
              className={`${
                selected === item
                  ? "bg-green-800"
                  : "text-black bg-gradient-to-r from-rose-500 to-amber-600 hover:from-purple-500 hover:to-blue-500"
              } m-2 px-6 py-3  text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}

        <div className="paginate flex">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
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
      </div>
    </div>
  );
};

export default MatchGame;
