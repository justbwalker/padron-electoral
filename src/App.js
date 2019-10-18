import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Padron electoral</h1>
        <HomePage />
      </header>
      <Footer>Pie</Footer>
    </div>
  );
}

export default App;
