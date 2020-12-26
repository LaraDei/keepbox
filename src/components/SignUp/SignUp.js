import React from 'react'
import Context from '../../context'
import  ValidationError from '../ValidationError/ValidationError'
import './SignUp.css'

export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName: {
                value: '',
                touched: false
            },
            lastName: {
                value: '',
                touched: false
            },
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
            <div className='SignUp'>
                <header>
                    <h3>Create an Account</h3>
                </header>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="first-name">First name: </label>
                        <input placeholder='First Name' type="text" name='first-name' id='firstName' 
                               onChange={e => this.updateValue(e.target.value, e.target.id)} 
                               required />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last name: </label>
                        <input type="text" name='last-name' id='lastName' placeholder='Last Name'
                               onChange={e => this.updateValue(e.target.value, e.target.id)}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name='email' id='email' placeholder='email' autoComplete='email'
                               onChange={e => this.updateValue(e.target.value, e.target.id)}
                               required/>
                        {this.state.email.touched && (<ValidationError message={emailError} />)}
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name='password' id='password' placeholder='password' autoComplete='new-password'
                               onChange={e => this.updateValue(e.target.value, e.target.id)}
                               minLength="8" maxLength = "20"
                               required/>
                    </div>
                        <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}