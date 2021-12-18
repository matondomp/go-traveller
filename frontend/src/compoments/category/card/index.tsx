import React from "react";
import { FiCoffee } from "react-icons/fi";
import { 
    Card,
    ItemCard
 } from "./style";

export const Cards=()=>{
    return(

        <Card>
        <ItemCard>
             <div>
               <p>
                 <FiCoffee />
              </p>
              <p> <div></div></p>
             </div>
             <span>
                 Comida e Bebida
             </span>
        </ItemCard>
        <ItemCard>
             <div>
               <p>
                 <FiCoffee />
              </p>
              <p> <div></div></p>
             </div>
             <span>
                 Comida e Bebida
             </span>
        </ItemCard>
        <ItemCard>
             <div>
               <span>
                 <FiCoffee />
              </span>
              <p> <div></div></p>
             </div>
             <span>
                 Comida e Bebida
             </span> 
        </ItemCard>
      
    </Card>
    )
}