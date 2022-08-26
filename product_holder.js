import './product_holder.css'
import Product from './product'

function ProductHolder(props) {
    let prodList = props.productList;
    return (
        <div className='product-holder'>
            <div className='container'>
                <div className='product-wrapper'>
                    <Product name={prodList[0].name} price={prodList[0].price} details={prodList[0].details} offer={prodList[0].offer} image={prodList[0].image}></Product>
                    <Product name={prodList[1].name} price={prodList[1].price} details={prodList[1].details} offer={prodList[1].offer} image={prodList[1].image}></Product>
                    <Product name={prodList[2].name} price={prodList[2].price} details={prodList[2].details} offer={prodList[2].offer} image={prodList[2].image}></Product>
                    <Product name={prodList[3].name} price={prodList[3].price} details={prodList[3].details} offer={prodList[3].offer} image={prodList[3].image}></Product>

                </div>
            </div>
        </div>
    )
}

export default ProductHolder;