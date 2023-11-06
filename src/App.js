import "./App.css";
import {Routes,Route} from "react-router-dom"
import Layout from "./paginas/Layout"
import About from "./paginas/About"
import Home from "./paginas/Home"
import Dashboard from "./paginas/Dashboard"
function App() {
  return <div>

<h1>ROutes</h1>
<Routes>
<Route path="/" element={<Layout></Layout>} > </Route>
<Route path="/home" element={<Home></Home>} > </Route>
<Route path="/dashboard" element={<Dashboard></Dashboard>} > </Route>
<Route path="/about" element={<About></About>} > </Route>

</Routes>
  </div>;
}

export default App;
