
import './user-product.css'
import {useState} from 'react';

import image from './images/choclate piece cake.webp'
function UserInputProducts(props){
    // const[name,setName]=useState("");
    // const[price,setPrice]=useState();
    // const[offer,setOffer]=useState();
    // const[details,setDetails]=useState("");

    const[allValues,setAllValues]=useState(
        {
            name:'',
            price:0,
            details:'',
            offer:0 ,
            image: image
            
        }
    )

    const updateName=(e) =>{
        // console.log(e.target.value); 
        setAllValues({...allValues,name:e.target.value})
    }

    const updatePrice=(e) =>{
        // console.log(e.target.value); 
        setAllValues({...allValues,price:e.target.value})
    }

    const updateOffer=(e) =>{
        // console.log(e.target.value); 
        setAllValues({...allValues,offer:e.target.value})
    }

    const updateDetails=(e) =>{
        // console.log(e.target.value); 
        setAllValues({...allValues,details:e.target.value})
    }

    const updateImage=(e) =>{
        setAllValues({...allValues,image:e.target.value})
    }

    const updateValues=(event) =>{
        event.preventDefault();
        props.updateList(allValues);
    }



    
    return(
        <div className='user-input'>
            <div className='container'>
                <form onSubmit={updateValues}>
                    <div className='form-element'>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' className='name' type='text'  onChange={updateName}></input> 
                    </div>

                    <div className='form-element'>
                    <label htmlFor='price'>Price:</label> <br></br>
                    <input id='price' className='price' type='number'  onChange={updatePrice}></input> 
                    </div>

                    <div className='form-element'>
                    <label htmlFor='details'>Details:</label>
                    <input id='details' className='details' type='text'  onChange={updateDetails}></input> 
                    </div>

                    <div className='form-element'>
                    <label htmlFor='offer'>Offer:</label>
                    <input id='offer' className='offer' type='number'  onChange={updateOffer}></input>
                    </div>

                    <div className='form-element4'>
                        <label htmlFor='image'>Image:</label>
                        <input id='image' className='image' type='file' onChange={updateImage}></input>
                    </div>
                    <button className='buttton' type='submit'>submit</button>

                </form>

            </div>

        </div>
    )

}

export default UserInputProducts;