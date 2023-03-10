import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home";
import Offers from "./PAGES/Offers";
import Signin from "./PAGES/Signin";
import Signup from "./PAGES/Signup";
import Forgotpassword from "./PAGES/Forgotpassword";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./PAGES/Profile";
import PrivateRoutes from "./components/PrivateRoutes";
function App() {
  return (
    <>
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<PrivateRoutes />} >
          <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
      </Routes>
    </Router>
    <ToastContainer
         position="bottom-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
    />
    </>
    
  );
}

export default App;
