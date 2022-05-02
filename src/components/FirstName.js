import React from "react";

function FirstName({nameRef, checkValidation}) {
   
    return <>
        <input type="text" className={'form-control my-3'} onBlur={e => checkValidation(e.currentTarget.value)}
               placeholder={'Введите имя'} ref={nameRef} />
        
    </>
}

export default FirstName;