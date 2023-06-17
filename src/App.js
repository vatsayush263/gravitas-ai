import { useState } from "react";
import { Alert } from "./Components/Alert";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Link } from "./Components/Link";
// import { LinkHistory } from "./Components/LinkHistory";
import { Navbar } from "./Components/Navbar";

function App() {
  const [alert, setalert] = useState(false)
  const showAlert = ()=>{
    setalert(true)
    setTimeout(() => {
      setalert(false)
    }, 5000);
  }
  return (
   <div className="flex flex-col relative">
    <Navbar />
    {alert?<Alert />:""}
    <Hero />
    <Link showAlert = {showAlert} />
    <Footer />
   </div>
  );
}

export default App;
