import React from 'react';
const ButtonComponent = (prop) => {

    if(prop.content === 'importent'){
        return (
            <button style={{fontWeight:'bold'}}>{prop.content}</button>
        )
    }


    return (

    <button>{prop.content}</button>

    );

}


export default ButtonComponent;