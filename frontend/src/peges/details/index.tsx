import React from "react";
import { FiCamera, FiCoffee, FiCalendar, FiInfo } from 'react-icons/fi'
import { Tabs } from 'antd';

import { Header } from '../../compoments/header'
import { Aside } from '../../compoments/aside'

import details from '../../assets/details.png'
import detailFoto from '../../assets/Foto.png'
import PraiaLogo from '../../assets/Foto.png'




import {
    Container,
    Content,
    Head,
    DivArticle,
    Item,
    DivItemArticle,
    Highlightd,
    Title,
    Section,
    SectionImg,
    TabColletion
} from './style'
import { useEffect } from "react";
import { useState } from "react";

import { api } from '../../service/api'

export const Details = () => {

    const [city,setCity]=useState([])

    useEffect(()=>{
        getCity()
    },[])

    const getCity=async()=>{
        const response= await api.get('/places')
        setCity(response.data.Places)
        console.log(city)
    }

    const { TabPane } = Tabs;

    return (
        <Container>
            <Aside />
            <Content>
                <Header />
                <Head>
                    <img src={details} />
                    <DivArticle>

                        <DivItemArticle>
                            <h1>Florianópolis</h1>
                            <p>
                                Capital do estado de Santa Catarina no sul do Brasil,
                                é maioritariamente constituída pela Ilha de Santa Catarina,
                                com 54 km de comprimento.
                            </p>

                            <span>É famosa pelas suas praias,
                                incluindo estâncias turísticas populares
                                como a Praia dos Ingleses
                                na extremidade norte da ilha.
                            </span>
                        </DivItemArticle>

                        <Item>
                            <div>
                                <FiCamera size={30} />
                            </div>
                            <div>
                                <h1>67</h1>
                                <p>Pontos Turísticos</p>
                            </div>
                        </Item>

                        <Item>
                            <div>
                                <FiCoffee size={30} />
                            </div>
                            <div>
                                <h1>67</h1>
                                <p>Pontos Turísticos</p>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <FiCalendar size={30} />
                            </div>
                            <div>
                                <h1>67</h1>
                                <p>Pontos Turísticos</p>
                            </div>
                        </Item>


                    </DivArticle>

                </Head>
                <Title>
                    Top avaliados
                </Title>
                <Highlightd>

                    <main>
                        {
                            city.map((item:any)=>(
                                <div key={item.id}>
                                <div>
                                    <img src={item.avatar} alt="erro" />
                                </div>
                                <h1>
                                    {item.name}
                                </h1>
                                <footer>
                                    {item.description} <FiCoffee size={30} />
                                </footer>
                               </div>
                            ))
                        }
                       
                  </main>

                </Highlightd>

                <Title>Destaque</Title>

                <SectionImg>
                    <div>
                        <main>
                            <div>
                                <button><FiInfo size={20} />Destaque</button>
                                <span><FiCamera size={30} />Pontos Turísticos</span>
                            </div>
                            <p> Uma parte do paraíso na terra. Frequentemente com águas
                                claras em tons verdes e azuis. Um dos locais mais preferidos
                                por turistas e viajantes.</p>
                        </main>
                        <img src={PraiaLogo} alt="" />
                    </div>
                </SectionImg>

            
                
            </Content>

        </Container>
    )
}