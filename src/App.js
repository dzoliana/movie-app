import Home from "./components/Pages/Home/Home";
import Discovery from "./components/Pages/Discovery/Discovery";
import MovieDetails from "./components/Pages/MovieDetails/MovieDetails";
import NoMatch from "./components/Pages/NoMatch";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="body">
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
