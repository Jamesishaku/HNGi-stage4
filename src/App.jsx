import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Header />
        <Form />
      </main>
      <Routes>
      <Route path="/home" element={<App />} />
      </Routes>
    </div>
     
  );
}

export default App;
