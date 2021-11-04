import React, { Component } from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import './signIn.scss';


export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

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
                   <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In with Google</CustomButton>
                   </div>
                </form>
            </div>
        )
    }
}
