import './Main.css'
import data from '../../data/legacy.json'
import { Article } from '../../components/Article/Article'
import { Aside } from '../Aside/Aside'


export const Main = () => {
    return (
        <main>
            <section className='container-main'>
                {data.map((article, index) => (
                    <Article key={index} title={article.title} body={article.body} />
                ))}
                

            </section>
            <Aside />
        </main>
    )
}