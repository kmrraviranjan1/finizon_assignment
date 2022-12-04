import React from 'react'
import { icons } from '../constants'
import PrimaryButton from './PrimaryButton'
import SectionHeader from './SectionHeader'

const SignupForm = () => {
  return (
    <div>
        <SectionHeader title="Create Account" subTitle="Welcome! enter your details and start creating, collecting and selling NFTs."/>
        <form>
            <div className="relative py-2 text-black">
                <img src={icons.User} className="fixed left-12 mt-6 z-10 w-4" alt="" />
                <input type="text" placeholder='Username' className="w-full px-16 py-4 rounded-3xl" />
            </div>
            <div className="relative py-2">
                <img src={icons.EnvelopeSimple} className="fixed left-12 mt-6 z-10 w-4" alt="" />
                <input type="text" placeholder='Email Address' className="w-full px-16 py-4 rounded-3xl" />
            </div>
            <div className="relative py-2">
                <img src={icons.LockKey} className="fixed left-12 mt-6 z-10 w-4" alt="" />
                <input type="text" placeholder='Password' className="w-full px-16 py-4 rounded-3xl" />
            </div>
            <div className="relative py-2">
                <img src={icons.LockKey} className="fixed left-12 mt-6 z-10 w-4" alt="" />
                <input type="text" placeholder='Confirm Password' className="w-full px-16 py-4 rounded-3xl" />
            </div>
            <div className="relative py-4">
                <PrimaryButton text="Create Account"/>
            </div>
        </form>
    </div>
  )
}

export default SignupForm