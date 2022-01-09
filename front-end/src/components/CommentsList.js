import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCard from './CommentCard';

export const CommentsList = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        axios({
            method: 'get',
               url: `http://localhost:5000/comments/post/${postId}`,
               headers: {
               authorization: 'Bearer ' + authToken
               }
               })
          .then((response) => {
            if(JSON.stringify(response.data) !== '{"name":"JsonWebTokenError","message":"jwt malformed"}'){
               setComments(response.data);
            }
          })
          .catch((error) => {
            alert(error);
          }); 
    }, []);

    return (
        <div>
            {comments.length !== 0 &&
            comments.map((comment) => {
                return <CommentCard 
                key={comment.id}
                postId={comment.post_id}
                userId={comment.user_id}
                content={comment.content}
                votes={comment.votes}
                date={comment.date}
                updateDate={comment.update_date} />
            })
            }
        </div>
    )
}

export default CommentsList;
