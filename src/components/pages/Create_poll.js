import React from 'react'
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { Form, Input, Button } from '../../styled/formStyle';

function buttonClicked(){
    let mail = document.getElementById("mail").value.toLowerCase();
    let question = document.getElementById("pollQ").value;

    axios.post('http://localhost:5000/api/v1/poll', {
        pollid: uuid(),
        creatorid: uuid(),
        question:question,
    })
    .then(function(){
        alert("Din poll har blitt registrert!")
    })
    .catch(function(error){
        alert("Det har oppstått en feil, prøv igjen!")
    })
}    

function Create_poll() {
    return (
        <React.Fragment>
            <Form onSubmit={buttonClicked}>
                <label>Din e-post:</label>
                <br/>
                <Input id="mail" type="email" placeholder="name@mail.com"></Input>
                <br/>
                <label>Skriv inn ditt spørsmål:</label>
                <br/>
                <Input id="pollQ" type="text" placeholder="Spørsmål"></Input>
                <br/>
                <Button type="submit">GO</Button>
            </Form>
        </React.Fragment>
    )
}

export default Create_poll