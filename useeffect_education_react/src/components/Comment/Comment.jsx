import './Comment.css'

export const Comment = ({name,email,body}) => {
    return (
        <div className='comment'>
            <h2><b>Назва:</b> {name}</h2>
            <p><b>Email:</b> {email}</p>
            <p><b>Коментар: </b><i>{body}</i></p>
        </div>
    )
}