import PostItem from './PostItem'

const Posts = ({posts, setOnePost, onePost}) => {
    return posts.map((post) => (
        <PostItem post={post} setOnePost={setOnePost} onePost={onePost}/>
    ))
}

export default Posts