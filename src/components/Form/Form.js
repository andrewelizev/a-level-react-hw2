import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    state = { user: '',
              pass: '',
              error: ''
            }

    onClick = (event) => {
        event.preventDefault()

        if (!this.state.user && !this.state.pass) {
            this.setState({ error: 'не заполнены поля' })
        } else if (!this.state.user) {
            this.setState({ error: 'не заполнено поле [user]' })
        } else if (!this.state.pass) {
            this.setState({ error: 'не заполнено поле [pass]' })
        } else {
            console.log(`User: ${this.state.user}, Password: ${this.state.pass}`)
        }
    }

    updateUserValue = (event) => {
        this.setState({
            user: event.target.value
        })
    }

    updatePassValue = (event) => {
        this.setState({
            pass: event.target.value
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="user">User:</label>
                <input type="text" name="user" onChange={this.updateUserValue} />
                <label htmlFor="pass">Password:</label>
                <input type="password" name="pass" onChange={this.updatePassValue} />
                <button type="submit" onClick={this.onClick}>Submit</button>
                <div>{this.state.error}</div>
            </form>
        )
    }


}

export default Form;