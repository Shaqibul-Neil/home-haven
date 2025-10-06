import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-100 px-8 py-2">
        <Navbar />
      </header>
      <main className="flex-1 w-11/12 mx-auto px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
