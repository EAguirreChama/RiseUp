import { Landing, Formulario } from "./componentes/Views/index"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/formulario" element={<Formulario/>}/>
    </Routes>
  )
}