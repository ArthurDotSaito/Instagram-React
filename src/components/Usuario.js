import React from "react"

export default function Usuario() {
    let [name, setName] = React.useState("Catana");
    let [image, setImage] = React.useState("assets/img/catanacomics.svg")

    return (
        <div className="usuario">
            <UserItem user="catanacomics" userName={name} userImage={image}></UserItem>
        </div>
    )

    function UserItem(props) {
        return (
            <>
                <img src={props.userImage} onClick = {changeUserImage}/>
                <div className="texto">
                    <strong>{props.user}</strong>
                    <span>
                    {props.userName}
                        <ion-icon name="pencil" onClick={changeUserName}></ion-icon>
                    </span>
                </div>
            </>
        )
    }
    
    function changeUserName(){
        const changeName = prompt("Digite novo username:")
        setName(changeName);
    }

    function changeUserImage(){
        const changeImage = prompt("Digite o path para nova imagem:")
        setName(changeImage);
    }
}

