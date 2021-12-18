import React from "react";
import {Form} from 'antd'

import { 
        Container,
        Label,
        Input,
        LastInput,
        Colletion,
        CardImg
    } from './style'


export const AddressForm=()=>{
    return(
        <Container>
            <h1>Endereço</h1>
            <div>
                <Form.Item
                   label="Rua"
                   name="street"
                   rules={[
                       {
                           required:true,
                           message:"porfavor digite a rua"
                       }
                   ]}
                >
                    <div style={{width:"700px"}}>
                       <Input  /> 
                     </div>
                </Form.Item>
              
            </div>

            <Colletion>
                <div>
                 
                  <Form.Item
                     label="Bairro"
                     name="neighborhood"
                     rules={[
                        {
                            required:true,
                            message:"porfavor digite a bairro"
                        }
                     ]}

                   > 
                     <div >
                       <Input  /> 
                     </div>
                  </Form.Item>
                </div>
                
                <div >
                    <Form.Item
                        label="Número"
                        name="numbers"
                        rules={[
                            {
                                required:true,
                                message:"porfavor digite a número"
                            }
                        ]}
                    >
                        <div>
                           <LastInput  />
                       </div>
                       
                    </Form.Item>
                </div>
                
            </Colletion>
            
            <CardImg />

    </Container>
    )
}