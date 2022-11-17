import './Loading.css'
import Pika from '../../images/Pichu.gif'

const Loading = () => {
    return (
        <div id='loading'>
            <img id='loading-img' src={Pika} alt='pika-loading' />
            <p id='loading-text'>Loading...</p>
        </div>
    )
}

export default Loading