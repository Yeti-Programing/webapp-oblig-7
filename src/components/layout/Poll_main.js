import React, { Component } from 'react';
import { Form, Input, Button } from '../../styled/formStyle';

function buttonClicked(){
    console.log("GO was clicked");
}

function checkClicked(){
    console.log("Check was clicked");
}

export class Poll_main extends Component {
    render() {
        return (
            <div>
            <Form>
                    <label>Poll-ID:</label>
                    <br/>
                    <Input type="text" placeholder="ex: 1a2bcd3-45..."></Input>
                    <br/>
                    <label>Din e-post:</label>
                    <br/>
                    <Input type="email" placeholder="name@mail.com"></Input>
                    <br/>
                    <Button type="button" onClick={checkClicked}>Sjekk Poll-ID og mail</Button>
                    <br/>
                    <label>Spørsmål blir vist her når Poll-ID er bekreftet</label>
                    <br/>
                    <Input type="text" placeholder="Ditt svar"></Input>
                    <br/>
                    <Button type="button" onClick={buttonClicked}>GO</Button>
            </Form>
            </div>
        )
    }
}

export default Poll_main
