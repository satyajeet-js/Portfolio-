import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>

          {/* Nested routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;