import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts";
import { PruebaPage } from "./pages/PruebaPage";

function App() {

  return (
    // Ruta general
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
       <Route path="/" element={<RootLayout/>}>
          <Route path="/prueba" element={<PruebaPage/>}/>
       </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
