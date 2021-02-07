import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {getCartItems, removeCartItem} from '../../../_actions/user_actions'
import UserCardBlock from './Sections/UserCardBlock'
import {Empty} from 'antd'

function CartPage(props) {

    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(true)

    const dispatch = useDispatch();
    useEffect(() => {

        //redux UserState Cart 안의 상품 확인
        
        let cartItem = []
        
        if(props.user.userData && props.user.userData.cart){
            if(props.user.userData.cart.length>0){
                props.user.userData.cart.forEach(item=>{
                    cartItem.push(item.id)
                })

                dispatch(getCartItems(cartItem, props.user.userData.cart))
                .then(response=>{calculateTotal(response.payload)})
            }
        }
    }, [props.user.userData])

    let calculateTotal = (cartDetail)=>{
        let total=0;
        cartDetail.map((item)=>{
            total+=parseInt(item.price, 10)*item.quantity
        })
        setTotal(total)
        setShowTotal(true)
    }

    let removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
        .then(response=>{
            if(response.payload.productInfo.length<=0){
                setShowTotal(false)
            }
        })
    }

    return (
        <div style={{width: '85%', margin: '3rem auto'}}>
            <h1>My Cart</h1>
            <div>
                <UserCardBlock products={props.user.cartDetail} removeItem={removeFromCart}/>
            </div>

            {ShowTotal ?
                <div style={{marginTop: '3rem'}}>
                    <h2>Total Amount: ${Total}</h2>
                </div>
            :   
                <>
                <br/>
                <Empty description={false}/>
                </>
            }
        </div>
        
    )
}

export default CartPage
