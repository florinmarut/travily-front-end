import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '../CommentsList';
import CommentForm from '../CommentForm';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../PostPage.css';

export const PostPage = () => {
    const { postId } = useParams();
    const [location, setLocation] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [updateDate, setUpdateDate] = useState('');

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        axios({
            method: 'get',
               url: `http://localhost:5000/posts/${postId}`,
               headers: {
               authorization: 'Bearer ' + authToken
               }
               })
          .then((response) => {
            if(JSON.stringify(response.data) !== '{"name":"JsonWebTokenError","message":"jwt malformed"}'){
               setLocation(response.data[0].location);
               setContent(response.data[0].content);
               setDate(response.data[0].date);
               setUpdateDate(response.data[0].update_date);
            }
          })
          .catch((error) => {
            alert(error);
          });
    }, []);

    return (
      <div className='no1-container'>
        <div className='no2-container'>
           <div>
          <Card>
            <CardContent>
            <p>Location: {location}</p>
            <p>Content: {content}</p>
            <p>Created at: {date}</p>
            <p>Updated at: {updateDate}</p>
            </CardContent>
          </Card>
            <CommentForm postId={postId}/>
            <CommentsList postId={postId}/>
        </div>
        </div>
      </div>
       
    )
}

export default PostPage;