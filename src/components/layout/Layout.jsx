import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "2.5rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
