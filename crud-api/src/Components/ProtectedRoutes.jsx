//Archivo que protegera las rutas

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import storage from '../Storage/storage'

export const ProtectedRoutes = ({children}) => {
    //variable que se almacena en el localStorage
    const authUser = storage.get('authUser');

    //si no hay usuario, redirige al login
    if(!authUser){
        return <Navigate to='/login' />
    }
    return <Outlet/>
  
}

export default ProtectedRoutes