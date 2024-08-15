import './NameComponent.css'

export default function Name(props){

    return (
        <div className='Name'>
            <div id='first_name'>
                {props.FirstName}
            </div>
            <div id='last_name'>
                {props.LastName}
            </div>
        </div>
    );
}