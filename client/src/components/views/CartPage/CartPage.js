import React from 'react'
import {useDispatch} from 'react-redux'
import {getCartItems} from '../../../_actions/user_actions'

function CartPage() {

    const dispatch = useDispatch();
    useEffect((props) => {

        //redux UserState Cart 안의 상품 확인
        
        let cartItem
        
        if(props.user.userData && props.user.userData.cart){
            if(props.user.userData.cart.length>0){
                props.user.userData.cart.forEach(item=>{
                    cartItem.push(item.id)
                })

                dispatch(getCartItems(cartItem, props.user.userData.cart))
            }
        }
    }, [props.user.userData])

    return (
        <div>
            
        </div>
    )
}

export default CartPage
