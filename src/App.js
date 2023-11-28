import NavBar from "./component/navBar";
import Bouquets from "./pages/Bouquets";
import Home from "./pages/Home";
import Compte from "./pages/Compte";
import Fleurs from "./pages/Fleurs";
import Footer from "./component/footer";
import { state } from "./data/state";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useEffect,useState } from "react";
function App() {
  const [mesBouquets, setMesBouquets] = useState([]);
  useEffect(() => {
    fetch('/api/bouquets')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMesBouquets(data);
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home bouquets={state.mesBouquets}/>} />
          <Route path="/bouquets" element={<Bouquets bouquets={state.mesBouquets}/>} />
          <Route path="/fleurs" element={<Fleurs fleurs={state.Fleurs}/>} /> 
          <Route path="/compte" element={<Compte />} /> 
        </Routes>
      <Footer />
      </BrowserRouter>      
   </div>
  );
}

export default App;
