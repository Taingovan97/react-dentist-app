import {Routes, Route} from 'react-router-dom'
import App from './App'
import {Home} from './Home/Home'

export default function Core() {
    return (
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    )
}