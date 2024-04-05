import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
