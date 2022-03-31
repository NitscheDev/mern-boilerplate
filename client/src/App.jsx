import './App.css'
import Logo from './logo.png'
import { useEffect } from 'react'

function App() {
    //fetch backend api on mount -> check console
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await fetch('/api')
                const json = await data.json()
                console.log(json)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    })

    return (
        <div className="app">
            <img src={Logo} alt="React.js" className="logo" />
        </div>
    )
}

export default App