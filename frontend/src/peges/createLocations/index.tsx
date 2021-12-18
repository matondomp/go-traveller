import React, { FC, useState,useRef, useCallback } from "react";

import { 
     Button as _Button,
     Steps, 
     Button, 
     Form as _form
 } from 'antd';


import 'antd/dist/antd.css'

import { StapOne } from '../../compoments/formStap/stapOne/index'
import { StapTwo } from '../../compoments/formStap/stapTwo'
import { useToast } from '../../hooks/toast'

import {
    Container,
    Content,
    Main
} from "./style";



import { Aside } from "../../compoments/aside";
import { Header } from "../../compoments/header";
import { api } from '../../service/api'
import Avatar from "antd/lib/avatar/avatar";


const { Step } = Steps;

const steps = [
    {
        title: '1º passo',
        content: (fileData:any)=><StapOne feildData={ fileData } />
    },
    {
        title: '2º passo',
        content:  (fileData:any)=><StapTwo feildData={ fileData } />
    },
    {
        title: 'Fim',
        content: (fileData:Object)=><h1>Ola</h1>,
    },
];


export const CreateLocation: FC = () => {

    const [fileList, setFileList] = useState();

    const formRef =useRef()

    const [fileListCity, setFileListCity] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);
    const [current, setCurrent] = useState(0);
    const [city_id,setCity_id]=useState('')
    
    const {addToast} = useToast()
    const [file,setFile]=useState<File |any >()

    const next = () => {
      setCurrent(current + 1);
     /*  addToast({ 
        type:"error",
        title:"Erro na cadastro", 
        desciption:"Ocorreu um erro ao fazer cadastro ,tente novamente"
     }) */
    };


    const getFileFromInput=useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{

        const array=Array.from(e.target.files?e.target.files:[])
        
         setFile(array[0])
    },[])

    const onFinish = async (values: any) => {
        const referenceForm=formRef.current as any
       

        for (let item in values) {
            if (values.hasOwnProperty(item)) {
                 if(referenceForm['__INTERNAL__'].name=="StapOne"){
                     console.log('StapOne')

                     const data=new FormData() 

                     if(file){
                         console.log('file=>',file)
                         data.append('avatar',file)
                      }
                      try {
                         const response= await api.post('/cities',{
                                                       name:values.name,
                                                       description:values.description
                                                    })
                          console.log(response.data)
                          const { id }= response.data.createCityService
                          setCity_id(id)

                           if(response){
                              await api.patch('/cities/avatar/'+id,data)
                            }

                          setCurrent(current + 1);
                          addToast({ 
                            type:"success",
                            title:"cadastrado com sucesso!", 
                            desciption:"Cadastrado com sucesso !"
                        })
                      } catch (error){
                        addToast({ 
                            type:"error",
                            title:"Erro ao cadastar !", 
                            desciption:"Erro ao cadastar !"+error
                        })
                      }
                   
                 }
                 if(referenceForm['__INTERNAL__'].name=="StapTwo"){
                    console.log('StapTwo')

                    const data=new FormData()

                    if(file){
                        data.append('avatar',file)
                     }
                     try {
                        const responseAddress= await api.post('/address',{
                            street:values.street,
                            neighborhood:values.neighborhood,
                            numbers:values.numbers
                         })
                         const { id }= responseAddress.data.createAddressService
                         console.log(id,'/', city_id)
                        const response= await api.post('/places',{
                                                      name:values.name,
                                                      description:values.description,
                                                      address_id:id,
                                                      city_id:city_id
                                                   })
                         console.log(response.data)
                         const { id : place_id }= response.data.Place
                        
                          if(response){
                             await api.patch('/places/avatar/'+place_id,data)
                            }
                         setCurrent(current + 1);
                         addToast({ 
                           type:"success",
                           title:"cadastrado com sucesso!", 
                           desciption:"Cadastrado com sucesso !"
                       })
                     } catch (error){
                       addToast({ 
                           type:"error",
                           title:"Erro ao cadastar !", 
                           desciption:"Erro ao cadastar !"+error
                       })
                     }
                 }
                
             
               
                return
            }
           
        }
       
        
      };
    const prev = () => {
      setCurrent(current - 1);
    };

    const onChange = (fileList: any) => {
        setFileList(fileList.fileList);
        setFile(fileList.fileList)
    };



    const onChangeCity = (fileListCity: any) => {
        setFileListCity(fileListCity.fileList);
    };

    const onPreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        let imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const onPreviewCity = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        let imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
 
    const hendleSubimit=(e:React.FormEvent)=>{
     
      //  e.preventDefault()
    }

    return (
        <Container>

            <Aside />
            <Content>
                <Header />

                <Main>
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    <div className="steps-content"  style={{ 
                            minHeight: '200px',
                            marginTop: '80px',
                            backgroundColor: '#fafafa',
                            border: '1px dashed #e9e9e9',
                            borderRadius: '2px',
                        }}>{steps[current].content({
                                onChange, 
                                onPreview, 
                                fileList,
                                next,
                                onChangeCity,
                                fileListCity,
                                onPreviewCity,
                                hendleSubimit,
                                formRef,
                                onFinish,
                                getFileFromInput
                               })}</div>
                    <div className="steps-action"  style={{ marginTop: '24px',marginBottom:'30px',marginLeft:'30px'}}>
                    
                        {current > 0 && (
                            <Button type="primary" style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
                </Main>

            </Content>


        </Container>
    )
}