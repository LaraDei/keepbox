import React, { Component } from 'react'
import Context from '../../context'
//import  ValidationError from '../ValidationError/ValidationError'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './SignIn.css'


export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            error: null
        }
    }

    static defaultProps = {
        history: {
          push: () => {}
        }
    }
    static contextType = Context

    handleLoginSuccess = () => {
        const { history } = this.props
        history.push('/user')
        TokenService.hasAuthToken()
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { email, password } = e.target
        
        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(res => {
               email.value = ''
               password.value = ''
               TokenService.saveAuthToken(res.authToken)
               this.handleLoginSuccess()
            })
            .catch(res => {
               this.setState({ error: res.error })
            })
    }
        


    render(){
        const { error } = this.state
        return(
            <div className="SignIn">
                <div className='form-signin'>
                <h1>Sign In</h1>
                <form className='signin-form' onSubmit={this.handleSubmitJwtAuth}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                    <div>
                    <label htmlFor="email">Email: </label>
                    <input placeholder='email*' type="text" name='email' id='email'
                           autoComplete='email'
                            required
                    />
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' id='password'
                            placeholder='password*' autoComplete='current-password'
                            required
                    />
                    </div>
                    <button type='submit'>Sign In</button>
                </form>
                </div>
            </div>
        )
    }
}