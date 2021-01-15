import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, Icon, Col, Card, Row} from 'antd';
import Meta from 'antd/lib/card/Meta'

function LandingPage() {

    const [Products, setProducts] = useState([])
    
    useEffect(() => {
        //let body={}
        axios.post('/api/product/products')
            .then(response => {
                if (response.data.success){
                    
                    setProducts(response.data.productInfo)
                }else {
                    alert("상품을 가져오는데 실패했습니다")
                }
            })
    }, [])

    const renderCards = Products.map((product, index)=>{

        console.log('product', product)
        return <Card>
            <Meta />
        </Card>
    })
    
    return (
        <div style={{ width: '75%', margin: '3rem auto'}}>
            <div style={{ textAlign: 'center'}}>
                <h2>Let's Travel Anywhere <Icon type="rocket"/></h2>
            </div>

            {/* Filter */}

            {/* Search */}

            {/* Cards */}
            
            {renderCards}

            <div style={{justifyContent: 'center'}}>
                <Button>더보기</Button>
            </div>
        </div>
    )
}

export default LandingPage
