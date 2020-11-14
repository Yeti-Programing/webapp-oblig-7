import React from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import { Form, Input, Button } from '../../styled/formStyle';

function buttonClicked(){
    let mail = document.getElementById("mail").value.toLowerCase();
    axios.post('http://localhost:5000/api/v1/signup', {
        mail: mail,
        userid: uuid()
      })
      .then(function () {
        document.getElementById("mail").value = "";
        document.getElementById("melding").innerHTML = "Du er nå registrert";
      })
      .catch(function (error) {
        if(error.toString() === "Error: Request failed with status code 409"){
          console.error(`Denne mailen eksisterer allerede i systemet.\n${error}`);
          document.getElementById("mail").value = "";
          document.getElementById("melding").innerHTML = "Denne mailen eksisterer allerede i systemet.";

        }
        else if(error.toString() === "Error: Request failed with status code 400"){
          console.error(`Skriv inn en gyldig mail.\n${error}`);
        }
        else{
          console.error(`Noe feil skjedde, prøv på nytt.\n${error}`);
        }
      });
}

export default function Signup() {
    return (
        <React.Fragment>
            <Form>
                <label>Din e-post:</label>
                <br/>
                <Input type="email" placeholder="name@mail.com" id="mail"></Input>
                <br/>
                <label id="melding"></label>
                <br/>
                <Button type="button" onClick={buttonClicked}>GO</Button>
            </Form>
        </React.Fragment>
    )
}
