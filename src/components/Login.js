import {React, useRef, useState} from "react";
import { Navigate } from "react-router-dom";
import FirstName from "./FirstName";
import { useDispatch } from "react-redux";
import {setUserNameState} from '../store/dataSlice';

function Login({storeName}){
    const nameRef = useRef(null);
    let [validationPass, setValidationPass] = useState(true);
    const dispatch = useDispatch();    

    function checkValidation(name) {
        setValidationPass(name.trim().length >= 5);
    }

    function registerUser(e) {
        if(storeName == null  && nameRef.current.value.length >= 5) {storeName = nameRef.current.value;
            if (storeName != null) localStorage.setItem('userName', storeName);
            dispatch(setUserNameState(storeName));}
        e.preventDefault();
    }
   // localStorage.removeItem('userName')
    return <div>
    <form id="registration" onSubmit={registerUser}>
        <h1>Login</h1>
        <h5>Введите свое имя</h5>
        <FirstName nameRef={nameRef} checkValidation={checkValidation}/>
        {
            validationPass ? '' : <p className={'text-danger'}>Minimum 5 symbols</p>
        }
        <button className={'btn btn-primary'} type={'submit'}>Далее</button>
    </form>
    {(storeName != null) ? <Navigate to='/products'/>: ''}
</div>;
}


export default Login;