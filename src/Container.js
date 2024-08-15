import './Container.css'
import Picture from  './Picture'
import Information from './Information'
 export default function Container(props) {
    return (
        <div className='Container'>
            <Picture PictureUrl={props.PictureUrl}/>
            <Information Information={props.Information}/>
        </div>
    );
}