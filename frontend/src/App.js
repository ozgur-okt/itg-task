import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

import Control from "./pages/Control";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";



function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/control" element={ <Control/>} />
          <Route exact path="/addproduct" element={<AddProduct /> } />
          <Route exact path="/editproduct/:id" element={<EditProduct />} /> 
          <Route exact path="/login" element={ <LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
