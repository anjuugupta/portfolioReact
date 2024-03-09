import { useEffect, useState } from "react";
import "./App.css";


import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";

function App() {
  const current_theme =localStorage.getItem('current_theme')
  const[theme, setTheme] = useState(current_theme? current_theme: 'light');


  useEffect(()=>{
      localStorage.setItem('current_item', theme)
  },[theme])
  return (
    <div className={`container ${theme}`}>
      <NavBar  theme={theme} setTheme={setTheme}/>
      <Footer />
    </div>
  );
}

export default App;
