import Layout from "./Layout/layout"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
   
    </>
  )
}

export default App
