import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/SignUp/SignUp';

import './sign-in-sign-up.scss';

export const signInSignUpPage = () => {
    return (
        <div className='sign-in-sign-up'>
           <SignIn />
           <SignUp />
        </div>
    )
}
 