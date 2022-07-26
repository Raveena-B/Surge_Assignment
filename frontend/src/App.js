import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/Student/ResetPassword";
import CreateUser from "../src/Pages/Admin/CreateUser";
import DisplayUsers from "../src/Pages/Admin/DisplayUsers";
import CreateNotes from "./Pages/Student/CreateNotes";
import DisplayNotes from "./Pages/Student/DisplayNotes";
import EditNote from "./Pages/Student/EditNote";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
          <Route path="/displayusers" element={<DisplayUsers />}></Route>
          <Route path="/createnote" element={<CreateNotes />}></Route>
          <Route path="/displaynotes" element={<DisplayNotes />}></Route>
          <Route path="/editnote" element={<EditNote />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
