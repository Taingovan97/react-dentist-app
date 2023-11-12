import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import {Home} from './Home/Home'
import {Register} from './Register/Register'

export default function Core() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    )
}