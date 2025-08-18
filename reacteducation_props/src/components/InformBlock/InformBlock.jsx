import './InformBlock.css'

export const InformBlock = ({title, paragraf}) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{paragraf}</p>
        </>
    )
}