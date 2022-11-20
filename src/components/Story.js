export default function Story(props) {
    return (
        <div className="story">
            <div className="image"><img src={props.image}/></div>
            <div className="usuario">{props.user}</div>
        </div>
    )
}