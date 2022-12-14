import './product_holder.css'
import Product from './product'
import {useEffect, useState} from 'react'

import UserInputProducts from './user-product';


import image1 from './images/black-forest-cake.webp';
import image2 from './images/butter-scotch-cake.webp';
import image3 from './images/choclate piece cake.webp';
import image4 from './images/valentine-s-heart-red-velvet.jpg';

function ProductHolder() {

    const products=[

        // {
        //   name:"Black forest cake",
        //   price:800,
        //   details:"It's like ice cream cake and expensive cake",
        //   offer:10,
        //   image:image1
      
        // }
        // {
        //   name:"Butter scotch cake",
        //   price:1000,
        //   details:"It's butter flavour cake and very expensive cake",
        //   offer:20,
        //   image:image2
      
        // },
        // {
        //   name:"Choclate piece cake",
        //   price:50,
        //   details:"It's sample single piece cake",
        //   offer:2,
        //   image:image3,
          
      
        // },
        // {
        //   name:"Heart cake",
        //   price:500,
        //   details:"It's heart shape model cake",
        //   offer:30,
        //   image:image4,
      
        // }
      ]

   // let prodList = props.productList;

   let images=[image1,image2,image3,image4];

    const[prodList,setProdList]=useState([...products])


    useEffect(() =>{
        fetch("https://6316ce94cb0d40bc4143c622.mockapi.io/cakes").then((response) =>{
            if(response.ok){
                return response.json();
            }
            return false
        }).then((data) =>{
            data.forEach((obj,i) => {
                obj.image=images[i%images.length];
                console.log(i);
            })
            setProdList(data);
        })
    },[])

    function updateProdList(product){
        setProdList([...prodList,product])
    }

    


    

    return (
        <div className='product-holder'>
            <div className='container'>
                <div className='product-wrapper'>
                    {/* <Product name={prodList[0].name} price={prodList[0].price} details={prodList[0].details} offer={prodList[0].offer} image={prodList[0].image}></Product> */}
      <UserInputProducts updateList={updateProdList}/>
                {
                    prodList.length==0 && <p className='noitem'>No Items Found</p>
                }    
                {
                    
                    
                    prodList.map((product)=>{
                             return(<Product key={Math.random()}name={product.name} price={product.price} details={product.details}offer={product.offer} image={product.image}></Product>)
                    })
                }

                </div>
            </div>
        </div>
    )
}

export default ProductHolder;