import Home from "./pages/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PlayGame from "./pages/playGame/PlayGame"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-game" element={<PlayGame />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
