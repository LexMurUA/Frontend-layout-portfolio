import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button/Button'
import { ButtonArray } from './components/ButtonArray/ButtonArray'
import { Paragraph } from './components/Paragraph/Paragraph'

function App() {
  const [count, setCount] = useState(0)
  const [line,setLine] = useState([1,2,3,4,5,6,7,8,9,10])


  return (
    <div className='dz2'>
     <Button count={count} onClickHandler={()=>setCount(count=>count = Math.floor(Math.random() * 101))} />
      <ButtonArray line={line} onClickHandler={()=>setLine([...line,Math.floor(Math.random() * 1001)])} />
      <Paragraph />
    </div>
  )
}

export default App
