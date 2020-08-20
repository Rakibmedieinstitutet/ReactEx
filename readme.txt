
cli/react start: 
* create-react-app appnamn  : när vi installerar create-react-app cli i globalt 


* npx create-react-app appnamn : om vi inte har nån cli använder vi den

Jsx: 
man kan använda html i js eller js i html. :Jsx
//const expression= "HEHE"
// const jsx =  <div> inuti html {expression }</div> 

  {  /*   */       }

 //  React.createElement( <div>, inuit html)

  

// const js = true //js 

// const jsx2 = <div>  this is {js} </div>


fragement : <>  </>
 const jsx =  (<> <div> this is a jsx </div> <h1> </h1>  </>)

Glöm ej stänga varje element :  till ex:  <br/>  <input  />
  <br>  <input >  <img src=" " > kommer inte godtas men om man stänger den kommer det funka
  : till ex:  <br />  <input />  <img src=" " />  kommer att funka

State:
     // state deklaration  : state = { stateNamn: " default", flera-andra-state: "Vilken som helst data typer"}

    // state mutation / update state : this.setState( { stateNamn: "nytt värde "}  )

    // state output / skriva ut state :  this.state.stateNamn

    //eventNamn = {this.funktionen.bind(this)}
    //onClick= { this.funktionen.bind(this)}
//alternative sätt att skriva state

constructor(props){
           super(props);

           this.state = {
               stateNamn: ""
           }
     }



Event: 
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


// event: on  
// onClick
// onChange 
// onSubmit 





    //object destructuring 


    const object = { nyckel: "värde", name:" Edvin" }undefined
const { nyckel} = object
undefined
nyckel
"värde"
const { nyckel , name} = object 
VM2116:1 Uncaught SyntaxError: Identifier 'nyckel' has already been declared
const { name} = object 
undefined
name
" Edvin"
const object2 = { elevNamn: "Khaled", klassNamn: "Wie2019" }
undefined
const { elevNamn, klassNamn } = object2
undefined
elevNamn
"Khaled"
klassNamn
"Wie2019"


≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈



