import React from 'react'
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { Form, Input, Button } from '../../styled/formStyle';

//Er av og til litt treig, så må prøve til du får en alert
function buttonClicked(){
    let mail = document.getElementById("mail").value.toLowerCase();
    let question = document.getElementById("pollQ").value;
    let userid = "";
    let newpollid = "";

    axios.get(`http://localhost:5000/api/v1/signup/mail/${mail}`)
    .then(function(response)
    { 
        let json = JSON.stringify(response);
        let array = json.split("\"");
        userid = array[13];
        newpollid = uuid();
        
        
        axios.post('http://localhost:5000/api/v1/poll', {
            pollid: newpollid,
            creatorid: userid,
            question:question,
            answers: [],
            answeredid: []
        })
        .then(function(){
            document.getElementById("melding").innerHTML = `Din poll har blitt registrert med poll ID: ${newpollid}`;
            document.getElementById("mail").value = "";
            document.getElementById("pollQ").value = "";

        })
        .catch(function(error){
            console.error("Det har oppstått en feil, prøv igjen!")
        })

    })
    .catch(function(error){ 
        if(error.toString() === "Error: Request failed with status code 404"){
            console.error(`Mailen du har skrevet, er ikke registrert.\n${error}`);
            document.getElementById("melding").innerHTML = `Mailen du har skrevet er ikke registrert.`;
            document.getElementById("mail").value = "";
            document.getElementById("pollQ").value = "";
        }
        else{
            console.error(`Noe feil skjedde, prøv på nytt.\n${error}`);
      }})
       
      
}    

function Create_poll() {
    return (
        <React.Fragment>
            <Form>
                <label>Din e-post:</label>
                <br/>
                <Input id="mail" type="email" placeholder="name@mail.com"></Input>
                <br/>
                <label>Skriv inn ditt spørsmål:</label>
                <br/>
                <Input id="pollQ" type="text" placeholder="Spørsmål"></Input>
                <br/>
                <label id="melding"></label>
                <br/>
                <Button type="button" onClick={buttonClicked}>GO</Button>
            </Form>
        </React.Fragment>
    )
}

export default Create_poll