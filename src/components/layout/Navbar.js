import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav><a href="/">Hjem</a><a href="/create_poll">Lag poll</a><a href="/signup">Registrer bruker</a></nav>
            </div>
        )
    }
}

export default Navbar
