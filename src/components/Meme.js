export default function Meme(props){
    return(
        <div className="imgcon">
            <img src={props.imgURL}></img>
            <div className="top">{props.toptext}</div>
            <div className="bottom">{props.bottomtext}</div>
        </div>
    );
}