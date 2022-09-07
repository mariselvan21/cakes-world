import {useState} from 'react';


function Login(props){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');

    const updateEmail=(e) =>{
        setEmail(e.target.value);
        // console.log(email);
    }

    const updatePassword=(event) =>{
        setPassword(event.target.value);
        // console.log(password);
    }

    const updateForm=(e) =>{
        e.preventDefault();
        if(email=='mari20041999@gmail.com' && password=='1234567890'){
            props.login("true");
        }
        else{
            alert('invalid user');
        }
        
    }





    return(
        <div className="login-form">
            <form onSubmit={updateForm}>
                <label htmlFor="mail">e-mail</label>
                <input id="mail" className="e-mail" type='text' onChange={updateEmail} value={email} />
                <label htmlFor='password'>password</label>
                <input id='password' className="password" type='password' onChange={updatePassword} value={password}/>
                <input className="button" type='submit' />

            </form >
        </div>
    )
}

export default Login;