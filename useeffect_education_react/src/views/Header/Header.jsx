import { useEffect, useState } from 'react'
import './Header.css'
import './Header.css'

export const Header =()=>{
    const [changeUseEffect,setchangeUseEffect] = useState(0)
    useEffect(()=>(
        console.log(`Останнє змінене значення ${changeUseEffect}`)
        
    ))
    return(
        <header>
            <h2>Завдання 2</h2>
            <button onClick={()=>setchangeUseEffect(changeUseEffect+1)}>{changeUseEffect}</button>
        </header>
    )
}