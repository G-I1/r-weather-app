import Weather from "./components/weatherComp/Weather";
import Header from "./components/globalComp/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app ">
      <Header />
      <main className="main_content">
        <Routes>
          <Route path="/weather" element={<Weather />}
          />
        </Routes>
      </main>
    </div>
  );
}
export default App;
