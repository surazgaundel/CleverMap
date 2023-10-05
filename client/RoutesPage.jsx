import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './src/pages/Home';
import Entry from './src/pages/Entry';
import Dashboard from './src/component/Dashboard';
import CreateNew from './src/component/CreateNew';
import LogIn from './src/component/LogIn';
import SignUp from './src/component/SignUp';

export default function RoutesPage() {
    return (
        <>
        <Routes>
            <Route path='/entry' element={<Entry/>}>
                <Route index element={<LogIn/>}/>
                <Route path='login' element={<LogIn/>}/>
                <Route path='register' element={<SignUp/>}/>
            </Route>
            <Route path='/' element={<Home/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='create' element={<CreateNew/>}/>
            </Route>
        </Routes>
        </>
    )
}
