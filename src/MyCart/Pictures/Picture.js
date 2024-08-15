import './Picture.css'
//This file contains the component of the picture
export default function Picture(props) {
    return (
        <div className="Picture">
            <img src={props.PictureUrl} alt="picture"/>
        </div>
    )
}