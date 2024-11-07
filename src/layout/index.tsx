import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-3 py-3">
      <h1 className="text-4xl pb-7 font-medium">Account & Settings</h1>
      <div className="flex gap-5">
        <aside className="w-[25%]">
          <Sidebar />
        </aside>
        <main className="w-[75%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
