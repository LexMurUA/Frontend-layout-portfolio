import './Article.css'

export const Article = ({title,body,link})=>{
    if (title && body && !link ){
        return(
        <div className='container-article'>
        <h2>{title}</h2>
        <p>{body}</p>
        </div>
    )
    }
    else if(title && link && !body){
        return(
        <h4 className='container-link'><a href={link}>{title}</a></h4>
        )
    }
    
}