import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Search from "../components/Search";

const App = () => {
  return (
    <Router>
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
