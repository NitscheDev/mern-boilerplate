import './App.css'
import Logo from './logo.png'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        fetch('/api').then(data => {
            data.json().then(json => {
                console.log(json)
            }) 
        }).catch(error => {
            console.log(error)
        })
    })
    return (
        <div className="app">
            <img src={Logo} alt="React.js" className="logo" />
        </div>
    )
}

export default App