import './Post.css'
import { Comment } from '../Comment/Comment'
import React, { useState } from 'react'

export const Post = ({ id, title, body, comments }) => {
    const [openCom, setOpenCom] = useState(false)
    console.log(openCom);
    
    return (
        <div className='post-comment'>
            <div className='post'>
                <h2>Пост №{id}</h2>
                <p><b>Заголовок:</b> {title}</p>
                <p><b>Публікація: </b><i>{body}</i></p>
                <button onClick={() => setOpenCom(openCom ? false:true)}>{openCom ? 'Коментарі -':'Коментарі +'}</button>
            </div>
            {openCom && comments.filter(comment => (
                comment.postId === id)).map(element => (
                    <React.Fragment key={element.id}>
                        <Comment  {...element} />
                    </React.Fragment>
                ))

            }

        </div>

    )
}


