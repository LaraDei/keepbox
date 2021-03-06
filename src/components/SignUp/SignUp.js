import React from 'react'
import Context from '../../context'
import AuthApiService from '../../services/auth-api-service'
import './SignUp.css'

export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            full_name: {
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
            },
            error: null,
        }
    }

    static defaultProps = {
        history: {
          push: () => {}
        }
    }

    static contextType = Context

    updateValue= (value, key) => {
        this.setState({ emailError: null })
        this.setState({ [key]: {value: value, touched: true}})
    }


    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/sign-in')
      }

    handleSubmit = e => {
        e.preventDefault()
        const { full_name, email, password } = e.target
        this.setState({ error: null })
        AuthApiService.postUser({
          email: email.value,
          password: password.value,
          full_name: full_name.value
        })
        .then(user => {
        full_name.value = ''
        email.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
        this.history.push('/sign-in')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    }

    render(){
        const { error } = this.state
        return(
            <div className='SignUp'>
                <div className='form-signup'>
                <header>
                    <h1>Create an Account</h1>
                </header>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div>
                        <label htmlFor="full_name">Full name: </label>
                        <input placeholder='Full Name*' type="text" name='full_name' id='fullName' 
                            
                               required />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name='email' id='email' placeholder='email*' autoComplete='email'
                                onChange={e => this.updateValue(e.target.value, e.target.id)}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                
                        <input type="password" name='password' id='password' placeholder='password*' autoComplete='new-password'
                               onChange={e => this.updateValue(e.target.value, e.target.id)}
                               minLength="8" maxLength = "25"
                               required/>
                    </div>
                        <button type='submit'>Sign Up</button>
                </form>
                <ul className="password">
                            *password must include: 
                            <li>8-25 characters</li>
                            <li>At least one capital letter</li>
                            <li>At least one number</li>
                            <li>no spaces</li>
                        </ul>
                </div>
            </div>
        )
    }
}