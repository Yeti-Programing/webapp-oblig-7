import React from 'react';
import {v4 as uuid} from 'uuid';
import Axios from 'axios';

function buttonClicked(){
    var mail = document.getElementById("mail").value.toLowerCase();
    Axios.post('http://localhost:5000/api/v1/signup', {
        mail: mail,
        userid: uuid()
      })
      .then(function () {
        alert("Du er naa registrert");
      })
      .catch(function (error) {
        if(error.toString() === "Error: Request failed with status code 409"){
          alert(`Denne mailen eksisterer allerede i systemet.\n${error}`);
        }
        else if(error.toString() === "Error: Request failed with status code 400"){
          alert(`Skriv inn en gyldig mail.\n${error}`);
        }
        else{
          alert(`Noe feil skjedde, prøv på nytt.\n${error}`);
        }
      });
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
