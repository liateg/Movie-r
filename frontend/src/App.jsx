import Moviecard from "./components/MovieCard"
import {  Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Fav from "./pages/Fav"
import './App.css'

function App() {
  const m=13
  return(
    <>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </main>
    {m===1&& (<Moviecard movie={{title:'mama',release_date:'2020'}} />)}
    {/* <Home /></>  */}
   )
}

export default App
