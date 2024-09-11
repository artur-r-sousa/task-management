
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/index.js'
import Login from "./pages/Login/index.js";
import { history } from "./utils/history.js";
import PrivateRoute from "./components/Redirect/index.js";

function App() {

  
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
