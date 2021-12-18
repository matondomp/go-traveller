import React from "react";
import { Link,useNavigate } from 'react-router-dom'

import { IoIosLocate } from 'react-icons/io'
import { FiPower } from 'react-icons/fi'
import { AiFillCompass } from 'react-icons/ai'
import { GrLocation} from 'react-icons/gr'
import { CgMenuGridR } from 'react-icons/cg'
import { BiMessageSquare } from 'react-icons/bi'

import { Asides, Content } from './style'

export const Aside:React.FC=()=>{

    const navegate=useNavigate()

   function logout(){
       localStorage.removeItem("@go-troveller:token")
      localStorage.removeItem("@go-troveller:user")
      navegate('/')
    }

    return(
        <Asides>
            <div>
               <AiFillCompass size={30}/>
            </div>
             <Content>
                 <Link to={'/detail'}>
                    <GrLocation size={20}/>
                 </Link>
                 <Link to={'/detail'}>
                    <CgMenuGridR size={20}/>
                 </Link>
                 <Link to={'/detail'}>
                    <BiMessageSquare size={20}/>
                 </Link>
                   
             </Content>
          
            <footer>
                
               <FiPower  size={20} onClick={logout}/>
            </footer> 
        </Asides>
    )
}