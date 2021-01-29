import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductImage from './Section/ProductImage'
import ProductInfo from './Section/ProductInfo'
import {Col, Row} from 'antd'

function DetailProductPage(props) {

    const productId=props.match.params.productId
    const [Product, setProduct] = useState({})

    useEffect(() => {

        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response=>{
                if(response.data.success){
                    console.log('product: ',response.data)
                    setProduct(response.data.product[0])
                }else{
                    alert('상세 정보 가져오기를 실패했습니다.')
                }
            })
       
    },[])

    return (
        <div style={{width: '100%', padding: '3rem 4rem'}}>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <h1>{Product.title}</h1>
            </div>
            <br/>
            <Row gutter={[16,16]}>
                <Col lg={12} sm={24}>
                    {/* Product Image */}
                        <ProductImage detail={Product}/>
                </Col>
                <Col lg={12} sm={24}>
                    {/* Product Info */}
                        <ProductInfo/> 
                </Col> 
            </Row>          
        
        </div>
    )
}

export default DetailProductPage
