import React, {useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";


function LandingPage() {
    
    useEffect(() => {
        //let body={}
        axios.post('/api/product/products')
            .then(response => {
                if (response.data.success){
                    console.log(response.data)
                }else {
                    alert("상품을 가져오는데 실패했습니다")
                }
            })
    }, [])
    
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
