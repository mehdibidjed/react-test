import './Picture.css'
import MyImg from "./Pictures/MyUser.png"
export default function Picture(props) {
    return (
        <div className="Picture">
            <img src={props.PictureUrl} alt="picture"/>
        </div>
    )
}