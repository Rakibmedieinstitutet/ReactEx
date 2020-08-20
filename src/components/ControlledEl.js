import React, { Component } from 'react'

export default class ControlledEl extends Component {


    state = {
        userName: " Your username",
        userPassword: " Your password"
    }

    onChangeUsername(e) {
        this.setState({ userName: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ userPassword: e.target.value })
    }


    onSubmitForm(e){

         console.log(e.target.elements.userName.value)

    }
    render() {
        return (
            <>
                <form onSubmit={this.onSubmitForm.bind(this)}>

                    <input value={this.state.userName} name="userName" onChange={this.onChangeUsername.bind(this)} />
                    <input value={this.state.userPassword} name="userPassword" onChange={this.onChangePassword.bind(this)} />
                    <button>Send</button>
                </form>
            </>
        )
    }
}
