import { useState } from "react";
import Navbar from "./Navbar";
import Message from "./Message";

const EmployeeDashboard = () => {
  const [message, setMessages] = useState(false);

  const handleMessageState = (data) => {
    setMessages(data);
  };

  return (
    <div className="bg-gray-200 min-h-screen max-h-[90v]">
      <Navbar messageState={handleMessageState} />

      <div className="grid md:grid-cols-4 gap-4 p-4 min-h-screen">
        {/* Left side content */}
        <div className="col-span-1 bg-white rounded-xl p-4 shadow">
          Grid - 1
        </div>

        {/* Main content */}
        <div className={`col-span-3 grid ${message ? "md:grid-cols-3" : ""} gap-4`}>
          <div className={`${message ? "col-span-2" : "col-span-3"} bg-white rounded-xl p-4 shadow`}>
            Grid - 2
          </div>

          {message && (
            <div className="col-span-1 max-w-[400px] bg-white rounded-xl p-4 shadow">
              <Message />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
