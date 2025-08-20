import { useState } from 'react'
import './Paragraph.css'



// export const Paragraph = () =>{
//     const [randomColor,setrandomColor] = useState({color:"rgb(0,0,0)"})

//     return(
//         <>
//         <button onClick={()=>setrandomColor({color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`})}>Change</button>
//         <p style={randomColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam nemo sint quasi iste sapiente. Perspiciatis veniam omnis, illo quisquam iusto unde corporis, suscipit in, modi voluptatibus tempora esse ut.</p>
//         </>
//     )
// }


export const Paragraph = () => {
    const [randomColor, setrandomColor] = useState("rgb(0,0,0)")
 
    function randomColorChanger(){
    setrandomColor(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
 }
    return (
        <div className='dz3'>
            <h2>Завдання 3</h2>
            <button onClick={randomColorChanger}>Change</button>
            <p style={{ color: randomColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam nemo sint quasi iste sapiente. Perspiciatis veniam omnis, illo quisquam iusto unde corporis, suscipit in, modi voluptatibus tempora esse ut.</p>
        </div>
    )
}