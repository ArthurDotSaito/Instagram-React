import Stories from "./Stories"
import Post from "./Posts"
import SideBar from "./SideBar"

export default function Corpo(){
    return(
        <div className="corpo">
            <div className="esquerda">
                <Stories></Stories>
                <Post></Post>
            </div>
            <SideBar></SideBar>
        </div>
    )
}