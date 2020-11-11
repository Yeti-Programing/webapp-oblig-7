import React from 'react'
import { createUserButtonClicked } from '../../API/controller/user_controller.js';

function buttonClicked(){
    var mail = document.getElementById("mail").value;
    console.log("Create user button was clicked")
    this.createUserButtonClicked = new createUserButtonClicked(mail);
}

export default function Signup() {
    return (
        <React.Fragment>
            <form onSubmit={buttonClicked}>
                <label>Din e-post:</label>
                <br/>
                <input type="email" placeholder="name@mail.com" id="mail"></input>
                <br/>
                <button type="submit">GO</button>
            </form>
        </React.Fragment>
    )
}
