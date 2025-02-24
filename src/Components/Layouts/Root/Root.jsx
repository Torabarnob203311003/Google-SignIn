import React from 'react'
import { Outlet } from 'react-router-dom'
import SignIn from '../From/SignIn'

import Navbar from '../Navbar/Navbar'



function Root() {
    return (
        <div className='max-w-[1970px]
       mx-auto'>

            <Navbar/>
            <Outlet></Outlet>
            <SignIn/>
          

        </div>
    )
}

export default Root