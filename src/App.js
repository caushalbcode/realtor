import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home";
import Offers from "./PAGES/Offers";
import Signin from "./PAGES/Signin";
import Signup from "./PAGES/Signup";
import Forgotpassword from "./PAGES/Forgotpassword";
import Header from "./components/Header";
function App() {
  return (
    <>
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
