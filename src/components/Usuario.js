export default function Usuario() {
    return (
        <div className="usuario">
            <UserItem user="catanacomics" userName="Catana" userImage="assets/img/catanacomics.svg"></UserItem>
        </div>
    )
}

function UserItem(props) {
    return (
        <>
            <img src={props.userImage}/>
            <div className="texto">
                <strong>{props.user}</strong>
                <span>
                {props.userName}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </>
    )
}