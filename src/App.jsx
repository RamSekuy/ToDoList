import { Routes,Route } from "react-router-dom"
import ToDoPage from "./pages/todo"
import LoginPage from "./pages/login"

function App() {
  return(
  <>
    <Routes>
      <Route path="/" element={<ToDoPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  </>
  )
}

export default App
