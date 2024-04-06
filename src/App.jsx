import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="w-full min-h-screen bg-white dark:bg-zinc-800 text-black dark:text-white ">
        <Header setmode={setDarkMode} mode={darkMode} />
        <Container className="">
          <Outlet />
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default App;
