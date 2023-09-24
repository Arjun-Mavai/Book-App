import { useState, useEffect } from "react";

export default function Reminder() {
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState("");
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const hoursIn12HrFormat = currentHours % 12 || 12;
    const amOrPm = currentHours >= 12 ? "PM" : "AM";

    const currentTime = `${hoursIn12HrFormat}${currentMinutes}${amOrPm}`;

    for (const rem of reminders) {
      if (rem.time === currentTime) {
        alert(`Reminder : ${rem.text}`);
      }
    }
  }, [reminders]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("reminders")) || [];
    console.log(savedData);
    setReminders(savedData);
  }, []);

  useEffect(
    () => localStorage.setItem("reminders", JSON.stringify(reminders)),
    [reminders]
  );

  const handleAdd = () => {
    if (reminder && time) {
      setReminders([...reminders, { text: reminder, time }]);
      setReminder("");
      setTime("");
    } else {
      alert("Please enter time and date !");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 text-black mx-8 md:mx-0 shadow-lg rounded-2xl overflow-hidden bg-[#010026]">
          <div className="max-w-md mx-auto ">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Reminder Application By Arjun
              </h2>
              <p className="mt-2 text-sm text-white">
                Start editing to see some magic happen!
              </p>
            </div>
            <div className="mt-6">
              <textarea
                className="w-full px-5 py-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                type="text"
                name="name"
                onChange={(e) => setReminder(e.target.value)}
                value={reminder}
                placeholder="Enter your reminder"
              />
              <input
                className="mt-3 w-full px-5 py-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                type="time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
              />
              <button
                className="mt-4 px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleAdd}
              >
                Add Reminder
              </button>
            </div>
            <div className="mt-6 ">
              <h2 className="text-2xl font-bold text-white">Reminders</h2>
              <ul className="mt-2 space-y-2 flex">
                {reminders.map((remind, index) => (
                  <li
                    key={index}
                    className="bg-gray-50 p-2 rounded-md shadow-md flex gap-2 items-center max-w-full"
                  >
                    <p className="text-green-600 font-semibold">{index + 1}</p>
                    <h2 className="mt-1 text-lg font-semibold text-gray-900">
                      {remind.text} at {remind.time}
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Log to console
console.log("Hello console");
