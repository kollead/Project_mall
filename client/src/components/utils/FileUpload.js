import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import {Icon} from 'antd';
import axios from 'axios';

//drop-zone 라이브러리 이용 frontend에서 저장할 파일 선택할 수 있게
//frontend>backend로 파일 전달 axios 사용
//multer 라이브러리 이용, backend로 보내진 파일 저장
//저장된 파일 정보 전달 
function FileUpload(props) {

    const [Images, setImages] = useState([])

    const DropHandler=(files)=>{

        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0])

        axios.post('/api/product/image', formData, config)
            .then(response => {
                if(response.data.success){
                    console.log(response.data)

                    setImages([...Images, response.data.filePath])
                    props.refreshFunction([...Images, response.data.filePath])
                }else{
                    console.log(response.data)
                    alert('파일 저장에 실패하였습니다')
                }
            })
    }

    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image)
        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Dropzone onDrop={DropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div
                            style={{
                                width: 300, height: 240, border: '1px solid lightgray',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{fontSize: '3rem'}} />
                        </div>
                    </section>
                )}
            </Dropzone> 

            <div style={{ display: 'flex', width:'350px', height: '240px', overflowX: 'auto', overflowY: 'hidden'}}>
                {Images.map((image, index)=>(
                    <div onClick={()=>deleteHandler(image)} key={index}>
                        <img style={{minWidth:'300px', width:'300px', height:'240px'}}
                            src={`http://localhost:5000/${image}`}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FileUpload
