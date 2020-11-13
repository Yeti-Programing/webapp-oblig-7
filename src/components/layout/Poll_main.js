import React, { Component } from 'react';
import { Form, Input, Button } from '../../styled/formStyle';

function buttonClicked(){
    
}

export class Poll_main extends Component {
    render() {
        return (
            <div>
            <Form onSubmit={buttonClicked}>
                    <label>Poll-ID:</label>
                    <br/>
                    <Input type="text" placeholder="ex: 1a2bcd3-45..."></Input>
                    <br/>
                    <label>Din e-post:</label>
                    <br/>
                    <Input type="email" placeholder="name@mail.com"></Input>
                    <br/>
                    <Button type="submit">GO</Button>
            </Form>
            </div>
        )
    }
}

export default Poll_main
