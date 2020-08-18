
import React, {  Component } from "react";
import Product from "./Product";
/* import React from "react"
class ProductList extends React.Component {


} */
//dummy data
const exData = {
    name: " Mobil",
    pris: 8000
}
class ProductList extends Component {
   
    //state : hanterar man data inuti component
    state = {
        productNamn: "Tomt", 
        productPris: 0,
    }
     
//alternative sätt att skriva eventfunktion / funktionen 
// Då behövs inte använda bind(this)
   /*  updateState = ()=>{
        
        this.setState({
            productNamn: exData.name, 
            productPris: exData.pris
        })

    } */
    //egna döpta metod (updateState)
    // du kan döpa vad du vill
    updateState(){
        
        this.setState({
            productNamn: exData.name, 
            productPris: exData.pris
        })

    }


   
    // state deklaration  : state = { stateNamn: " default", flera-andra-state: "Vilken som helst data typer"}

    // state mutation / update state : this.setState( { stateNamn: "nytt värde "}  )

    // state output / skriva ut state :  this.state.stateNamn

    //eventNamn = {this.funktionen.bind(this)}
    //onClick= { this.funktionen.bind(this)  }

    render() {
        return (

            <div >
            
            


             Hello , this is a class component 😊 
             <button onClick={this.updateState.bind(this)}>click me to see update</button>
            
            
              <Product  namn ={this.state.productNamn} 
              pris= {this.state.productPris}/>
       
            </div>
        )

    }

}
export default ProductList;