import { useState } from 'react'
import styles from '@styles/globals.scss'
import  { SignIn } from "./Components/Form/SignIn"
import {Routes , Route} from "react-router-dom"
import Dashboard from './Components/Dashboard/Dashboard'
import Users from './Components/Users/Users'
import UserDetails from './Components/UserDetails/UserDetails'
function App() {
  return (
    <div>
    <Routes>
        <Route path="/"
          element={<SignIn/>} />
        <Route path="dashboard"
          element={<Dashboard />} />

        <Route path="users"
                  element={<Users />} />

        <Route path="userdetails"
                  element={<UserDetails />} />
      </Routes>


    </div>
  )
}

export default App
