import './Jobs.css'
//This file contains the component of  the job
export default function Job(props){
    return (
        <div className='Job'>
          {props.Job}
        </div>
    );
}