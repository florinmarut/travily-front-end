import PostCard from './PostCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const PostsList = (params) => {
    const [posts, setPosts] = useState(params.posts);
    const [showUser, setShowUser] = useState(true);

    useEffect(() => {
        if(params.posts){
           setPosts(params.posts);
           setShowUser(true);
        }
        else if(params.userId){
            const authToken = localStorage.getItem('authToken');
            const userId = params.userId;
            setShowUser(false);

            axios({
                method: 'get',
                   url: `http://localhost:5000/posts/user/${userId}`,
                   headers: {
                   authorization: 'Bearer ' + authToken
                   }
                   })
              .then((response) => {
                if(JSON.stringify(response.data) !== '{"name":"JsonWebTokenError","message":"jwt malformed"}'){
                   setPosts(response.data);
                }
              })
              .catch((error) => {
                alert(error);
              });   
        }
    });

    return (
        <div>
            {posts && posts.map(post => {
                return <PostCard showUser={showUser}
                key={post.id} 
                userId={post.user_id}
                content={post.content}
                location={post.location}
                createDate={post.date}
                updateDate={post.update_date}
                votes={post.votes} />
            })}
        </div>
    )
}

export default PostsList;