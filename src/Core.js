import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import {Home} from './Home/Home'

export default function Core() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    )
}