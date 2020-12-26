import React, { Component } from 'react'
import Context from '../../context'
import './SignIn.css'


export default class SignIn extends Component{
    constructor(props){
        super(props);
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

    handleSubmit = e => {
        e.preventDefault();
        console.log('submit')
    }

    render(){
        return(
            <div className="SignIn">
                <h1>Sign In</h1>
                <form className='signin-form' onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="email">Email: </label>
                    <input placeholder='email' type="text" name='email' id='email'
                           autoComplete='email'
                            onChange={e => this.updateValue(e.target.value, e.target.id)}
                            required
                    />
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' id='password'
                            placeholder='password' autoComplete='current-password'
                            onChange={e => this.updateValue(e.target.value, e.target.id)}
                            required
                    />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}