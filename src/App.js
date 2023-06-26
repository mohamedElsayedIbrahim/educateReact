import { Component } from "react"
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Product from "./Component/Products/Product";




class App extends Component
{

  render(){

    return <div>
      <Navbar/>
      <div className="container">
        <Product />
      </div>
      <Footer/>
    </div>

  }

}

export default App