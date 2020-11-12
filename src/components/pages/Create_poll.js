import React from 'react'

function buttonClicked(){
    console.log("Create user button was clicked")
}    

function Create_poll() {
    return (
        <React.Fragment>
            <form onSubmit={buttonClicked}>
                <label>Din e-post:</label>
                <br/>
                <input type="email" placeholder="name@mail.com"></input>
                <br/>
                <label>Skriv inn ditt spørsmål:</label>
                <br/>
                <input type="text" placeholder="Spørsmål"></input>
                <br/>
                <button type="submit">GO</button>
            </form>
        </React.Fragment>
    )
}

export default Create_poll