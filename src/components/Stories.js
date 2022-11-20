import Story from "./Story"

export default function Stories() {
    let storyContent = [
        { user: "9gag", image: "assets/img/9gag.svg" },
        { user: "meowed", image: "assets/img/meowed.svg" },
        { user: "barked", image: "assets/img/barked.svg" },
        { user: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" },
        { user: "wawawicomics", image: "assets/img/wawawicomics.svg" },
        { user: "respondeai", image: "assets/img/respondeai.svg" },
        { user: "filomoderna", image: "assets/img/filomoderna.svg" },
        { user: "memeriagourmet", image: "assets/img/memeriagourmet.svg" }
    ]

    return (
        <div className="stories">
            {storyContent.map((story) => <Story image={story.image} user={story.user} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
