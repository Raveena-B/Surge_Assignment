import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/Student/ResetPassword";
import CreateUser from "../src/Pages/Admin/CreateUser";
import DisplayUsers from "../src/Pages/Admin/DisplayUsers";
import EditUser from "../src/Pages/Admin/EditUser";
import CreateNotes from "./Pages/Student/CreateNotes";

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
          <Route path="/createnote" element={<CreateNotes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
