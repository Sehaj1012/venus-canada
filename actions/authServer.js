"use server"

import { loginUser, logOutUser, registerUser } from '@/lib/authUtilities'
import { redirect } from 'next/navigation'

const bcryptjs = require('bcryptjs')

export async function Login(formData){

    const email = await formData.get('email')
    const password = await formData.get('password')

    const response = await loginUser(email,password)

        redirect('/dashboard')

    return true

}

export async function Register(formData){

    const email = await formData.get('email')
    const password = await formData.get('password')
    await registerUser(email, password)

    redirect('/')

    return true
}

export async function Logout(){
    await logOutUser()
    redirect('/')
    return true
}