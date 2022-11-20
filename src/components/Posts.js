import Post from "./Post"

export default function Posts() {

  let postData = [
    {
      user: "meowed", 
      userIcon: "assets/img/meowed.svg", 
      userContent: "assets/img/gato-telefone.svg", 
      userLikes: "assets/img/respondeai.svg", 
      likedBy: "respondeai", 
      likedByCount: "outras 101.523 pessoas"
    },

    {
      user: "barked", 
      userIcon: "assets/img/barked.svg", 
      userContent: "assets/img/dog.svg", 
      userLikes: "assets/img/adorable_animals.svg", 
      likedBy: "adorable_animals", 
      likedByCount: "outras 99.159 pessoas"
    }
  ]

  return (
    <div className="posts">
      {postData.map((post) => 
        <Post username = {post.user} userIcon = {post.userIcon}
        userContent ={post.userContent} userLikes ={post.userLikes}
        likedBy = {post.likedBy} likedByCount ={post.likedByCount}/>)}
    </div>
  )
}