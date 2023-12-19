import React from "react";

const UserList = () => {
  // Sample user data (you can replace this with actual data)
  const users = [
    {
      id: 1,
      name: "John Doe",
      online: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      online: false,
    },
    {
      id: 3,
      name: "Smith",
      online: false,
    },
    {
      id: 4,
      name: "john Smith",
      online: false,
    },
    {
      id: 5,
      name: "Jane will",
      online: false,
    },
    {
      id: 6,
      name: "Jane Smith",
      online: false,
    },
    {
      id: 7,
      name: "Jane Smith",
      online: false,
    },
  ];

  // Sample user details for the card
  const userDetails = {
    name: "John Doe",
    username: "johndoe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  return (
    <div className="bg-gray-200 p-2 h-full overflow-y-auto">
      {/* User Card */}
      <div className="bg-white p-4 rounded-lg mb-4 shadow">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={userDetails.avatar}
              alt={userDetails.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">{userDetails.name}</p>
            <p className="text-gray-500">@{userDetails.username}</p>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 12h4m10 0h4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* User List */}
      <h2 className="text-lg font-semibold mb-4">User List</h2>
      {users.map((user) => (
        <div key={user.id} className="flex items-center space-x-2 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">{user.name}</p>
            <p
              className={`text-sm ${
                user.online ? "text-green-500" : "text-gray-500"
              }`}
            >
              {user.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
