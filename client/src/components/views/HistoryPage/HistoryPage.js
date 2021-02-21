import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function HistoryPage() {

    const [History, setHistory] = useState([])
    useEffect(() => {
        
        Axios.get('/api/users/history')
        .then(response=>{
            if (response.data.success){

            }else{
                alert('히스토리 정보를 가져오는데 실패하였습니다.')
            }
        })

    }, [])

    return (
        <div>
            HistoryPage
        </div>
    )
}

export default HistoryPage
