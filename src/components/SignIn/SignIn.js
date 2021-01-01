import React, { Component } from 'react'
import Context from '../../context'
import  ValidationError from '../ValidationError/ValidationError'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
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
        location: {},
        history: {
          push: () => {}
        }
    }

    handleLoginSuccess = () => {
        console.log(this.props)
        const { history } = this.props
        const destination = '/user'
        history.push(destination)
    }

    static contextType = Context

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { email, password } = ev.target
        
        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(res => {
               email.value = ''
               password.value = ''
               console.log(res.authToken)
               console.log(this.props)
               TokenService.saveAuthToken(res.authToken)
               this.handleLoginSuccess()
            })
            .catch(res => {
               this.setState({ error: res.error })
            })
    }
        

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
                <form className='signin-form' onSubmit={this.handleSubmitJwtAuth}>
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