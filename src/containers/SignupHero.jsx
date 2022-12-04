import React from 'react'
import SignupForm from '../components/SignupForm'
import { images } from '../constants'

const SignupHero = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full">

            <img src={images.signupHero} alt="signupHero" className="w-full" />
            </div>
            <SignupForm />
        </div>
    )
}

export default SignupHero