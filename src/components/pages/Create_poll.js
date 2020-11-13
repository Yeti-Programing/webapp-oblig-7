import React from 'react'
import { Form, Input, Button } from '../../styled/formStyle';

function buttonClicked(){
    console.log("Create user button was clicked")
}    

function Create_poll() {
    return (
        <React.Fragment>
            <Form onSubmit={buttonClicked}>
                <label>Din e-post:</label>
                <br/>
                <Input type="email" placeholder="name@mail.com"></Input>
                <br/>
                <label>Skriv inn ditt spørsmål:</label>
                <br/>
                <Input type="text" placeholder="Spørsmål"></Input>
                <br/>
                <Button type="submit">GO</Button>
            </Form>
        </React.Fragment>
    )
}

export default Create_poll