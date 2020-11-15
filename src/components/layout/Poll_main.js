//import { v4 as uuid } from 'uuid';
import axios from 'axios';
import React, { Component } from 'react';
import { Form, Input, Button } from '../../styled/formStyle';

function checkClicked(){
    let pollsIns = document.getElementById("insPoll").value;
    let pollId = "";

    axios.get(`http://localhost:5000/api/v1/poll/${pollsIns}`)
    .then(function(response)
    {      
        let json = JSON.stringify(response);
        let array = json.split("\"");
        pollId = array[21];
        if(array[21] === "url") {
            alert("vennligst skriv inn en gyldig ID");
            document.getElementById("insPoll").value = "";
        }
        else{
        document.getElementById("melding").innerHTML = pollId;
        }
        
    })
    .catch(function(error){
        if(error.toString() === "Error: Request failed with status code 404"){
            console.error(`ID-en du har skrevet er ikke registrert.\n${error}`);
            document.getElementById("errMelding").innerHTML = `ID-en du har skrevet er ikke registrert.`;
        }
        else{
            console.error(`Det har skjedd en feil, prøv på nytt.\n${error}`);
    }})
}

function buttonClicked(){
    let mail = document.getElementById("email").value.toLowerCase();
    let newuserid = "";
    let svar = document.getElementById("svar").value;
    let newpollid = document.getElementById("insPoll").value;
    


    axios.get(`http://localhost:5000/api/v1/signup/mail/${mail}`)
    .then(function(response)
    {
        let json = JSON.stringify(response);
        let array = json.split("\"");
        newuserid = array[13];

        axios.get(`http://localhost:5000/api/v1/poll/${newpollid}`)
        .then(function(responsePoll)
        {
            let json = JSON.stringify(responsePoll);
            let arrayPoll = json.split("\"");
            let newquestion = arrayPoll[21];
            let newcreatorid = arrayPoll[17];

            axios.post(`http://localhost:5000/api/v1/poll`, {
            pollid: newpollid,
            creatorid: newcreatorid,
            question: newquestion,
            answers: [svar],
            answeredid: [newuserid]
            
           
        })
        .then(function(){
            document.getElementById("melding").innerHTML = `Ditt svar har blir registrert: ${svar} `;
            document.getElementById("email").value = "";
            document.getElementById("svar").value = "";
        })
        .catch(function(error){
            console.error(`Det har skjedd en feil, prøv på nytt.\n${error}`);
        })
           
        })
        .catch(function(error){
            if(error.toString() === "Error: Request failed with status code 404"){
                console.error(`Mailen du har skrevet, er ikke registrert.\n${error}`);
                document.getElementById("melding").innerHTML = `Mailen du har skrevet er ikke registrert.`;
            }
            else{
                console.error(`Det har skjedd en feil, prøv på nytt.\n${error}`);
        }})
    })
    .catch(function(error){
        if(error.toString() === "Error: Request failed with status code 404"){
            console.error(`Mailen du har skrevet, er ikke registrert.\n${error}`);
            document.getElementById("melding").innerHTML = `Mailen du har skrevet er ikke registrert.`;
        }
        else{
            console.error(`Det har skjedd en feil, prøv på nytt.\n${error}`);
    }})
}


export class Poll_main extends Component {
    render() {
        return (
            <div>
            <Form>
                    <label id="errMelding">Poll-ID:</label>
                    <br/>
                    <Input id="insPoll" type="text" placeholder="ex: 1a2bcd3-45..."></Input>
                    <br/>
                    <Button type="button" onClick={checkClicked}>Submit</Button>
                    <br/>
                    <label>Din e-post:</label>
                    <br/>
                    <Input id="email" type="email" placeholder="name@mail.com"></Input>
                    <br/>
                    <label id="melding">Spørsmål blir vist her når Poll-ID er bekreftet</label>
                    <br/>
                    <Input id="svar" type="text" placeholder="Ditt svar"></Input>
                    <br/>
                    <Button type="button" onClick={buttonClicked}>GO</Button>
            </Form>
            </div>
        )
    }
}

export default Poll_main
