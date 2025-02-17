import React from 'react'

export default function TtbJsxExpression() {
    // bien
    const name ="Trần Thế Bình";
    // bien doi tuong
    const user = {
        firstName:"Binh",
        lastName:"Gold"
    }
    //ham
    const fullName=(user)=>{
        return  user.firstName + '' + user.lastName;
    }

    //element
    const element =(
        <div>
            {/*Bieu thuc jsx */}
           <h2> {fullName(user)}</h2>
            <hr/>
            <h3>Welcome to, {name}</h3>
        </div>
    );

    //ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3>Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Fit-NTU - K23CNT1</h3>
        }
    }
    return (
        <div>
            <h1>TTB - JSX Epression</h1>
            {/* su dung bien elment*/}
            {element}

            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("Nguyen Thi Thom")}
        </div>
    )
}