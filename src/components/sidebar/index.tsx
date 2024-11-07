import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div>
      <ul className="flex flex-col gap-4 font-medium text-[17px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive ? "bg-gray-100" : ""
            } hover:bg-gray-100`
          }
        >
          <li>Profile</li>
        </NavLink>

        <NavLink
          to="/workspace"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive ? "bg-gray-100" : ""
            } hover:bg-gray-100`
          }
        >
          <li>Workspace</li>
        </NavLink>

        <NavLink
          to="/billing"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive ? "bg-gray-100" : ""
            } hover:bg-gray-100`
          }
        >
          <li>Billing</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
