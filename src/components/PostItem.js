const PostItem = ({post, setOnePost, onePost}) => {


    const handleClick = ()=> {
        setOnePost(post)
    }


    return(
        <div className="listItem" onClick={handleClick}>
            <h1>{post.title}</h1>
            <p>{post.id}</p>
        </div>
        
    )
}

export default PostItem

