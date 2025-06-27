import Header from "./static/Header"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Save from "./pages/Save"
import Invest from "./pages/Invest"
import Stories from "./pages/Stories"
import Faq from "./pages/Faq"
import Resources from "./pages/Resources"
  

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Save" element={<Save/>}/>
        <Route/>
        <Route path="/Invest" element={<Invest/>}/>
        <Route path="/Stories" element={<Stories/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/Resources" element={<Resources/>}/>

      </Routes>
      </BrowserRouter>
  
  
    </div>
  )
}

export default App
