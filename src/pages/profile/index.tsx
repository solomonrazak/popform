import React, { useState } from "react";
import { useUser } from "../../context/userContext";

const Profile: React.FC = () => {
  const { name, setName } = useUser();
  const [inputName, setInputName] = useState<string>(name);
  const [email, setEmail] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setName(inputName);
    alert(`User name: ${inputName} and Email: ${email}`);
  };
  return (
    <div>
      <p className="text-2xl font-bold mb-3">My Profile</p>
      <form className="space-y-4" onSubmit={submitHandler}>
        <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={inputName}
            className="border-[1.4px] py-2 rounded-md border-gray-200 pl-5"
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            className="border-[1.4px] py-2 rounded-md border-gray-200 pl-5"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-gray-500 px-5 py-2 font-medium text-[17px] text-white rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
