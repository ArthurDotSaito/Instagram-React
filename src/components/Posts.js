export default function Post() {
  let postData = [
    { user: "meowed", userIcon: "assets/img/meowed.svg", userContent: "assets/img/gato-telefone.svg", userLikes: "assets/img/respondeai.svg", likedBy: "respondeai", likedByCount: "outras 101.523 pessoas" },
    { user: "barked", userIcon: "assets/img/barked.svg", userContent: "assets/img/dog.svg", userLikes: "assets/img/adorable_animals.svg", likedBy: "adorable_animals", likedByCount: "outras 99.159 pessoas" }
  ]

  return (
    <div className="posts">
      {postData = postData.map((pd) => (
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src={pd.userIcon} />
              {pd.user}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img src={pd.userContent} />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={pd.userLikes} />
              <div className="texto">
                Curtido por <strong>{pd.likedBy}</strong> e <strong>{pd.likedByCount}</strong>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}