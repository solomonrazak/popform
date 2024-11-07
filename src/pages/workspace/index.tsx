import React from "react";
import { useUser } from "../../context/userContext";

const Workspace: React.FC = () => {
  const { name } = useUser();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Workspace</h1>
      <p className="font-medium">
        Manage Workspace Settings for{" "}
        <span className="text-blue-500 cursor-pointer">{name}</span>
      </p>
    </div>
  );
};

export default Workspace;
