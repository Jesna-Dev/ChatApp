import React from "react";
import UserList from "../components/ui/UserList";
// import MessageBox from "./MessageBox";
// import UserProfile from "./UserProfile";

const HomeLayout = () => {
  return (
    <div className="bg-gray-100 h-screen flex">
      <div className="w-1/4 p-2 ">
        <UserList />
      </div>

      {/* Center Content - Chat Box */}
      <div className="w-1/2 mx-auto my-4 p-4 bg-yellow-200 rounded shadow-lg">
        {" "}
        {/* Yellow background */}
        <h1 className="text-2xl font-semibold mb-4">Chat Room</h1>
        {/* <MessageBox /> */}
      </div>

      {/* Right Sidebar - User Profile */}
      <div className="w-1/4 p-4 bg-green-300">
        {" "}
        {/* Green background */}
        {/* <UserProfile /> */}
      </div>
    </div>
  );
};

export default HomeLayout;
