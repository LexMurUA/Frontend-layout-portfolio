import './HeaderTitle.css'

export const Title = ({name,paragraf})=>{
    return(
        <div className='title'>
            <h1>{name}</h1>
            <p>{paragraf}</p>
        </div>
    )
}