import React from "react";


//props.namn 
//props.pris
// {namn, pris}

const Product = (  {namn, pris}    )=> {


    return (

        <div>
           Productnamn: {namn}
           <br/>
           productPris: {pris}
           
        </div>
    )
}


export default Product;