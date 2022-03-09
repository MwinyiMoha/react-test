import { useEffect, useState } from "react"

function CommentList (props) {
    const [comments, setComments] = useState([])

    const fetchComments = async (postId) => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        const response = await fetch(url) 
        return await response.json()
    }

    useEffect(
        async () => {
            const fetchedComments = await fetchComments(props.postId)

            // show fetched comments 
            console.log(fetchedComments)

            setComments(fetchedComments)
        }, 
        [props.postId]
    )

    return (
        <ul>
            {comments && comments.map(comment => (<li key={comment.id}>ID: {comment.id} -- {comment.body}</li>))}
        </ul>
    )

}

export default CommentList