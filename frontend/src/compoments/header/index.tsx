import React from "react";
import { Head } from './style'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom";

export const Header:React.FC=()=>{
    return(
        <Head>
             <Link to={'/detail'}>
                <FiArrowLeft size={18} />
             </Link>
             <Link to={'/create-city'}>
                 <h1>Adicionar um perfil</h1>
             </Link>
             <span>01 02</span>
        </Head>
    )
}