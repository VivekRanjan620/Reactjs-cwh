//COMPONENTS
// import './app.css'
// import "./index.css"
// import Card from "./Card";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import Hoks from "./Components/Hoks";

// export function App() {

//   return (
//     <>
//     <Hoks/>
//       {/* <Navbar/>
//       <Footer/>
//       {/* <div className="card"> */}
//       <Card title = 'card 1' description = 'card 1 desc'/>
//       <Card title = 'card 2' description = 'card 2 desc'/>
//       <Card title = 'card 3' description = 'card 3 desc'/>
//       <Card title = 'card 4' description = 'card 4 desc'/> */

//       {/* </div> */}
//     </>
//   )
// }

//COMPONENTS1
import React from 'react'
import "./index.css"
import Navbar1 from './Components1/Navbar1'
import Footer1 from './Components1/Footer1'
import Card1 from './Components1/Card1'

export function App() {
  return(
    <>
    <Navbar1/>
    <div className="cards">
    <Card1 title="card1" description="card1 desc"/>
    <Card1 title="card2" description="card2 desc"/>
    <Card1 title="card3" description="card3 desc"/>
    </div>
    <Footer1/>
    </>
  )
}

