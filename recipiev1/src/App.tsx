import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./routes/Layout";
import SignIn from "./routes/Signin";
import Login from "./routes/Login";
import AddEdit from "./routes/AddEdit";
import FindByCategory from "./routes/findByCategory";

function App() {
  return (
    <>
      <h1>The worlds greatest recipes!</h1>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="recipes" element={<h2>TODO</h2>} />
          <Route path="category" element={<FindByCategory/>} />
          <Route path="add-edit" element={<AddEdit/>} />
          <Route
            path="/signin"
            element={<SignIn />}
            errorElement={<p>UPPPPS</p>}
          />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
