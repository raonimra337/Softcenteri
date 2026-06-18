import {Routes, Route} from 'react-router-dom'
import Navbar from './ComponentNavbar/Navbar'
import HomePage from './HomeComponents/HomePage'
import Services from './ServicesComponents/Services'
import Technologies from './TechnologiesComponents/Technologies'
import Indusries from './IndustriesComponents/Industries'
import Team from './TeamComponents/Team'
import Portfolio from './PortfolioComponents/Portfolio'
import About from './AboutComponents/About'

import './App.css'

function App() {
 return(
  <div>
    <Navbar />

    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "services" element = {<Services />} />
      <Route path = "technologies" element = {<Technologies />} />
      <Route path = "industries" element = {<Indusries />} />
      <Route path = "team" element = {<Team />} />
      <Route path = "portfolio" element = {<Portfolio />} />
      <Route path = "about" element = {<About />} />
    </Routes>
  </div>
 )
}

export default App
