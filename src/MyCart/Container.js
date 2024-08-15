import './Container.css'
import Picture from './Pictures/Picture'
import Information from './Information/Information'
//this file containe the  component of the cart 
export default function Container(props) {
    return (
        <div className='Container'>
            <Picture PictureUrl={props.PictureUrl} />
            <Information Information={props.Information} />
        </div>
    );
}