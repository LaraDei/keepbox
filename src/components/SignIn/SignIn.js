import React, { Component } from 'react'
import Context from '../../context'
import  ValidationError from '../ValidationError/ValidationError'
import './SignIn.css'


export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            }
        }
    }

    static defaultProps = {
        history: {
          push: () => {}
        }
    }

    static contextType = Context

    updateValue= (value, key) => {
        this.setState({ [key]: {value: value, touched: true}})
    }

    validateEmail = ()=> {
        const email = this.state.email.value.trim()
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        if (!pattern.test(email)) {
            return "Please enter a valid email"
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }

    render(){
        const emailError = this.validateEmail()
        return(
            <div className="SignIn">
                <h1>Sign In</h1>
                <form className='signin-form' onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="email">Email: </label>
                    <input placeholder='email*' type="text" name='email' id='email'
                           autoComplete='email'
                            onChange={e => this.updateValue(e.target.value, e.target.id)}
                            required
                    />
                    {this.state.email.touched && (<ValidationError message={emailError} />)}
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' id='password'
                            placeholder='password*' autoComplete='current-password'
                            onChange={e => this.updateValue(e.target.value, e.target.id)}
                            required
                    />
                    </div>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
}