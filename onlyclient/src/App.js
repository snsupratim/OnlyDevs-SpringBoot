import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SignUP from "./component/registration/SignUP";
import LogIN from "./component/registration/LogIN";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import CreateTask from "./component/tasks/CreateTask";
import BrowseTask from "./component/tasks/BrowseTask";
import CreateApplication from "./component/application/CreateApplication";
import ApplicationsByTask from "./component/application/ApplicationByTask";
import AllApplications from "./component/application/AllApplication";
import EditTask from "./component/tasks/EditTask";
import ShowTask from "./component/tasks/ShowTask";
import ViewApplication from "./component/application/ViewApplication";
import MyApplication from "./component/application/MyApplication";

function App() {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/login" element={<LogIN />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/browseTask" element={<BrowseTask />} />
        <Route
          path="/createApplication/:taskId"
          element={<CreateApplication />}
        />
        <Route
          path="/getApplications/:taskId"
          element={<ApplicationsByTask />}
        />
        <Route path="/all-applications" element={<AllApplications />} />
        <Route path="/my-applications" element={<MyApplication />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
        <Route path="/showtask" element={<ShowTask />} />
        <Route
          path="/view-applications/:taskId"
          element={<ViewApplication />}
        />
      </Routes>
    </Routers>
  );
}

export default App;
