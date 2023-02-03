import React  from "react";
import {Route, Routes, Link , BrowserRouter} from "react-router-dom";

import {logo } from "./assets"
import {Home , CreatePost} from "./pages"

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} className="w-32 object-contain "/>
        </Link>
        <Link to="/createpost" className="px-4 py-2 text-white bg-[#6469ff] rounded-md font-inter">
          Create
        </Link>
      </header>

      <main className="px-4 py-8 sm:px-8 w-full bg-gray-200  min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<CreatePost />} />

          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
