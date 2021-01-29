import React, {useEffect} from 'react';
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    useEffect(() => {
        if(props.detail.images && props.detail.images.length>0){
            let images =[]
            props.detail.images.map(item=>{
                images.push({
                    original:`http://localhost:5000/${item}`,
                    thumbnail:`http://localhost:5000/${item}`
                })
            })
        }       
    }, [])
    const images=[];

    return (
        <div>
            <ImageGallery items={images}/>
        </div>
    )
}

export default ProductImage
