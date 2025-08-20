import './Button.css'

export const Button = ({count,onClickHandler}) =>{
    return(
        <div className='dz2'>
            <h2>Завдання  2</h2>
        <button className='butorigin' onClick={onClickHandler}>{count}</button>
                <p>Нове додане значення:{count}</p>

        </div>
    )
}