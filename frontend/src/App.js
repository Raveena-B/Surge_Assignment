import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Student/Login";
import ResetPassword from "../src/Pages/Student/resetPassword";
import CreateUser from "../src/Pages/Admin/CreateUser";
import DisplayUsers from "../src/Pages/Admin/DisplayUsers";
import EditUser from "../src/Pages/Admin/EditUser";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
          <Route path="/displayusers" element={<DisplayUsers />}></Route>
          <Route path="/edituser" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
