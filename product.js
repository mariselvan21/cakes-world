import './product.css'
import {useState} from 'react'



function Product(props){
     const[price,setPrice]=useState(props.price);
     const[dis,setDisable]=useState(false);
    
    function changePrice(){
        let newPrice=props.price-((props.offer/100)*props.price);
        setPrice(newPrice);
        setDisable(true);
    }

    const [x,setX] = useState("heart")


    
    return(
        <div className='product-box'>
            <div className='product-image'>
                <img src={props.image}></img>   
            </div>
            <div className='product-details'>
                <h2>{props.name}</h2>
                <h2>Rs.{price}</h2>
                <p>{props.detatils}</p>
                <p>{props.offer}%offer</p>
                <button onClick={changePrice} disabled={dis}>click</button>
                <p className={x} onClick={()=>{
                    if(x == "heart"){
                        setX("heart liked")
                    }else{
                        setX("heart")
                    }
                }}>&#9829;</p>
            </div>
        </div>
    )
}
export default Product;