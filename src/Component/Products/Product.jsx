import { Component } from "react";
import Viewprdouct from "../Viewproduct/Viewprdouct";

export default class Product extends Component
{
    state = {
        user: "ali",
        products: [
            {id:0,name:'Toshiba', price: 1200, onSale:true,count:5},
            {id:1,name:'hp', price: 4200, onSale:true,count:12},
            {id:2,name:'samsung', price: 2200, onSale:false,count:9},
            {id:3,name:'dell', price: 5200, onSale:true,count:4},
            {id:4,name:'sony', price: 3200, onSale:false,count:7},
            {id:5,name:'microsoft', price: 7200, onSale:true,count:9},
        ]
    }

    deleteProduct = (id)=>{

        //deep copy of state data

        let copyProducts = [...this.state.products];

        //filter data (process)
                                                    //   5            5
        copyProducts = copyProducts.filter((product)=> product.id !== id);

        //re-call render 

        this.setState({products: copyProducts});


    }

    render(){
        return <>
          <div className="my-3">
            <div className="row g-2">
                {this.state.products.map((product)=><Viewprdouct deleteProduct={this.deleteProduct} productInfo={product}/>)}
                
            </div>
          </div>
        </>
    }
}