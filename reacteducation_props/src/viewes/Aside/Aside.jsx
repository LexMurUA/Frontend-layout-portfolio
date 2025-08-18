import './Aside.css'
import data from '../../data/legacy.json'
import { Article } from '../../components/Article/Article'

export const Aside = () => {
    return (
        <aside className='aside-container'>
            {data.map((article, index) => (
                <Article key={index} title={article.title} link={article.link} />
            ))}
        </aside>
    )
}