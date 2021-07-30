import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../custom-button/CustomButton';
import './signIn.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSumbit={this.handleSubmit}>
                   <FormInput name='email' type='email' value={this.state.email} label="email" handleChange={this.handleChange} required />
                   <FormInput name='password' type='password' value={this.state.password} label="password" handleChange={this.handleChange} required />
                   <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
