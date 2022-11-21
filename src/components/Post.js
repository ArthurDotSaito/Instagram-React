import React from "react"

export default function Post(props) {
    let [bookmarkType, setBookmarkType] = React.useState("bookmark-outline");
    let [likedPost, setLikedPost] = React.useState(false);
    let [likeCount, setLikeCount] = React.useState(props.likedByCount);

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userIcon} />
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.userContent} onClick={likePostByClickOnPhoto} data-test="post-image"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={likedPost ? "heart": "heart-outline"} 
                        style = {likedPost ? {color:"red"}:{color:"black"}}
                        onClick={likePost}
                        data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmarkType} 
                        onClick={savePost}
                        data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.userLikes} />
                    <div className="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong data-test="likes-number">outras {likeCount.toLocaleString('pt-BR')} pessoas</strong>
                    </div>
                </div>

            </div>
        </div>
    )

    function savePost() {
        if(bookmarkType === "bookmark-outline"){
            setBookmarkType("bookmark");
        }else{
            setBookmarkType("bookmark-outline");
        }
    }

    function likePost(){
        if(likedPost === true){
            setLikedPost(false);
            setLikeCount(likeCount - 1)
        }else{
            setLikedPost(true);
            setLikeCount(likeCount + 1)
        }
    }

    function likePostByClickOnPhoto(event){
        if(likedPost === false && event.detail === 2){
            console.log("double-click");
            setLikedPost(true);
            setLikeCount(likeCount + 1)
        }
    }

}