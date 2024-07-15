import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import authScreenAtom from '../atoms/authAtom'
import { useRecoilValue } from 'recoil'

const AuthPage = () => {

  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState)

  return (
    <>
      {authScreenState === 'login' ? <Login /> : <Signup />};
    </>
  )
}

export default AuthPage