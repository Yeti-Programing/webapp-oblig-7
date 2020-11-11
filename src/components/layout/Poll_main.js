import React, { Component } from 'react'
import { getPollButtonClicked } from '../../API/controller/poll_controller.js';

function buttonClicked(){
    this.getPollButtonClicked = new getPollButtonClicked();
}

export class Poll_main extends Component {
    render() {
        return (
            <div>
                <form onSubmit={buttonClicked}>
                    <label>Poll-ID:</label>
                    <br/>
                    <input type="text" placeholder="ex: 1a2bcd3-45..."></input>
                    <br/>
                    <label>Din e-post:</label>
                    <br/>
                    <input type="email" placeholder="name@mail.com"></input>
                    <br/>
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Poll_main
