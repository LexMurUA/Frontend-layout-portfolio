import { InformBlock } from '../../components/InformBlock/InformBlock'
import './Header.css'

export const Header = () =>{
    return(
        <header className='header-container'>
            <InformBlock title="React documentation page" paragraf="learn React" />
        </header>
    )
}