 import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import MealPage from "../pages/MealPage";
import CategoryPage from "../pages/CategoryPage";
import NotFound from "../pages/NotFound";
import Navbar from "./Navbar";
import Random from "../pages/Random";
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories/:name" element={<CategoryPage/>}/>
          <Route path="/meals/:id" element={<MealPage/>}/>
          <Route path="/random" element={<Random/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
