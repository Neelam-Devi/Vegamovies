


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./components/Card";
import GameDetail from "./components/GameDetail";
import AllGamesPage from "./components/AllGamesPage";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/games" element={<AllGamesPage />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;







// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Card from "./components/Card";
// import GameDetail from "./components/GameDetail";
// import AllGamesPage from "./components/AllGamesPage";
// import Contact from "./components/Contact";


// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/cards" element={<Card />} />
//         <Route path="/game/:id" element={<GameDetail />} />
//         <Route path="/games" element={<AllGamesPage />} />
//         <Route path="/contact" element={<Contact />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;

