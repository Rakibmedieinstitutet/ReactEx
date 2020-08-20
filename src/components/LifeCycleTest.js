
import React, { Component } from 'react'

export class LifeCycleTest extends Component {

state= {
    
    auth: false
}


loginDummy(){
   this.setState({auth:true})
}
//uppdateras state 
// renderas componentet igen

componentDidMount(){

    // then kör efter render
    //när en component skapas/ constructed 

   //  console.log(" Välkommen till din profil")
      console.log("hey I am running after render ")
}



componentWillUnmount(){

    //när en element    tas bort från component anropas den här 
}


componentDidUpdate(){

    //när används den ?? 


    console.log("  I am updated ")
}






    //constructor 
    render() {
        console.log("I am render")
      
        return (

            <div>
               {this.state.auth ? <div> I am logged in </div> : <div> I'm not logged in</div>} 
                <button onClick= {this.loginDummy.bind(this)}> Login </button>
            </div>
        )
    }

    // componentDidMount 
    // componentWillUnmount
    // componentDidUpdate
}

export default LifeCycleTest


// state -- updatering gör component åter rendering
// När state updateras , component renderas oxå

//componentDidMount direkt efter rendering


// componentWillUnmout : när man tar bort något/DOM från componentet 
//anropas den här metoden


//componentDidUpdate :  när component uppdateras anropas den här 
