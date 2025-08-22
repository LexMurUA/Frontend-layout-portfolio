import React from 'react'
import { Post } from '../../components/Post/Post'
import './Main.css'

export const Main =({posts,comments})=>{
    return(
        <main>
            <h2>Завдання 1</h2>
            <section className='posts'>
                {posts.map(post=>(
                    <React.Fragment key={post.id}>
                    <Post {...post} comments={comments} />
                    </React.Fragment>
                    
                ))}
            </section>
        </main>
    )
}