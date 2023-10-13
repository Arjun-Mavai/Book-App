import { useCallback, useState } from "react";

export default function MoveToList() {
  const initialLeftList = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [leftList, setLeftList] = useState(initialLeftList);
  const [rightList, setRightList] = useState([]);

  const handleSelect = (item) => {
    // Add the selected item to the right list
    setRightList([...rightList, item]);

    // Remove the selected item from the left list
    setLeftList(leftList.filter((leftItem) => leftItem !== item));
  };

  const handleMoveLeftToRight = useCallback(
    (item) => {
      setRightList((rightList) => [...rightList, item]);
      setLeftList(leftList.filter((leftItem) => leftItem !== item));
    },
    [leftList]
  );

  const handleMoveRightToLeft = useCallback(
    (item) => {
      setRightList(rightList.filter((rightItem) => rightItem !== item));
      setLeftList([...leftList, item]);
    },
    [leftList]
  );

  const handleClear = useCallback(() => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
  }, []);

  return (
    <div className="App text-black h-screen grid grid-cols-1 md:grid-cols-2 gap-20 ">
      <div className="list p-2 border border-black">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600   via-slate-600 to to-green-400 bg-clip-text text-transparent">
          Left List
        </h2>
        <div className="border-b border-green-500 my-4"></div>
        <ul>
          {leftList.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="border bg-gradient-to-r from-red-400 to to-amber-400 border-red-600 w-fit p-2 mb-2 font-bold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="list border p-2 border-black">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-600 to to-green-400 bg-clip-text text-transparent">
          Right List
        </h2>
        <div className="border-b border-pink-500 my-4"></div>
        <ul>
          {rightList.map((item, index) => (
            <li
              key={index}
              onClick={() => handleMoveRightToLeft(item)}
              className="border  bg-gradient-to-r from-rose-400 to to-teal-400 border-teal-400 w-fit p-2 mb-2 font-bold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="btn flex gap-8">
        <div className="top-btn flex flex-col md:flex-row gap-12   ">
          <button
            className="py-2 md:w-[150px] text-white font-bold px-4 h-fit bg-blue-600 hover:bg-blue-500 shadow-md shadow-teal-500 rounded-md"
            onClick={() => setLeftList([])}
          >
            Clear All Left
          </button>
          <button
            className="bg-blue-500 mb-2  md:w-[150px] h-fit shadow-lg shadow-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClear}
          >
            Clear All
          </button>
        </div>
        <div className="bottom-btn flex flex-col md:flex-row gap-8 mr-2">
          <button
            className="py-2  md:w-[150px] px-4 h-fit bg-blue-600 text-white font-bold hover:bg-blue-500 shadow-md shadow-pink-500 rounded-md"
            onClick={() => setRightList([])}
          >
            Clear All Right
          </button>
          <button
            className="py-2  md:w-[150px] px-4 h-fit bg-blue-600 hover:bg-blue-500 shadow-md shadow-yellow-500 font-bold text-white rounded-md"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
