import React from "react"

export default function Post(props) {
    let [bookmarkType, setBookmarkType] = React.useState("bookmark-outline")

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userIcon} />
                    {props.user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.userContent} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmarkType} onClick={savePost}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.userLikes} />
                    <div className="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>{props.likedByCount}</strong>
                    </div>
                </div>

            </div>
        </div>
    )

    function savePost() {
        if(bookmarkType == "bookmark-outline"){
            setBookmarkType("bookmark");
        }else{
            setBookmarkType("bookmark-outline");
        }
    }
}