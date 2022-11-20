import React from "react"

export default function Usuario() {
    let [name, setName] = React.useState("Catana");
    let [image, setImage] = React.useState("assets/img/catanacomics.svg")

    return (
        <div className="usuario" data-test="user">
            <UserItem user="catanacomics" userName={name} userImage={image}></UserItem>
        </div>
    )

    function UserItem(props) {
        return (
            <>
                <img src={props.userImage} onClick = {changeUserImage} data-test="profile-image"/>
                <div className="texto">
                    <strong>{props.user}</strong>
                    <span data-test="name">
                    {props.userName}
                        <ion-icon name="pencil" 
                        onClick={changeUserName}
                        data-test="edit-name"></ion-icon>
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
        let changeImage = prompt("Digite a URL para nova imagem:")
        checkURL(changeImage);

        function checkURL(string){
            try{
                changeImage = new URL(string)
                setImage(changeImage);
            }catch{
                alert("URL inválida!")
            }
        }
    }
}

