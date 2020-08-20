
import React, {  Component } from "react";
import Product from "./Product";
import axios from "axios"; 
import Test from "../components/Test"



/* import React from "react"
class ProductList extends React.Component {


} */
//dummy data
const exData = {
    name: " Mobil",
    pris: 8000
}
class ProductList extends Component {
   
    // constructor ?? 
    // default värde 

    //state : hanterar man data inuti component
    state = {
        productNamn: "Tomt", 
        productPris: 0,
        dataFromDataSrc:" "
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
  async updateState(){
        
       const response=  await axios.get("https://jsonplaceholder.typicode.com/todos")


       console.log(response.data)
      // data src: https://jsonplaceholder.typicode.com/
        this.setState({
            productNamn: exData.name, 
            productPris: exData.pris,
            //dataFromDataSrc: response.data
        })

         response.data.map( e=> 
           this.setState({
               dataFromDataSrc:e.title,

           }) 
            ) 

        //console.log( "response från data källan tillagd till state" , 
       // this.state.dataFromDataSrc)

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
             <button
             
             onClick={this.updateState.bind(this)}>click me to see update</button>
            
         
                 <Test  data= {this.state.dataFromDataSrc}/>

            

           
            
              <Product  namn ={this.state.productNamn} 
                pris= {this.state.productPris}/>
       
            </div>
        )

    }

}
export default ProductList;