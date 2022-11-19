export default function Sugestoes() {
    let suggestionsData = [
        { image: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", status: "Segue você" },
        { image: "assets/img/chibirdart.svg", user: "chibirdart", status: "Segue você" },
        { image: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", status: "Novo no Instagram" },
        { image: "assets/img/adorable_animals.svg", user: "adorable_animals", status: "Segue você" },
        { image: "assets/img/smallcutecats.svg", user: "smallcutecats", status: "Segue você" }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionsData = suggestionsData.map((sg) => (
                <div className="sugestao">
                    <div className="usuario">
                        <img src={sg.image} />
                        <div className="texto">
                            <div className="nome">{sg.user}</div>
                            <div className="razao">{sg.status}</div>
                        </div>
                    </div>
                    <div className="seguir">Seguir</div>
                </div>
            ))}
        </div>
    )
}