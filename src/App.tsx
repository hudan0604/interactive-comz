import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CommentsListing from "./pages/CommentsListing/CommentsListing.lazy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/comments" />}></Route>
        <Route path="/comments" element={<CommentsListing />}></Route>
      </Routes>
    </>
  );
}

export default App;
