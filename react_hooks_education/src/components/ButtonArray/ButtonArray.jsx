import './ButtonArray.css'

export const ButtonArray = ({line,onClickHandler})=>{
    
        
    return (
        <div className='dz1'>
        <h2>Завдання 1</h2>
        <button className='butarr' onClick={onClickHandler}>{line}</button>
        <ul>
            {line.map((element,idx)=>(
                <li key={idx}>{idx}. {element}</li>
            ))}
        </ul>
        <p>Нове додане значення:{line[line.length - 1]}</p>
        </div>
    )
}