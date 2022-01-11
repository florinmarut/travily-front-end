import { Link } from "react-router-dom";
import { UserMiniCard } from "./UserMiniCard";
import './PostCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { style } from "@mui/system";



export const PostCard = ({postId, showUser, userId, content, createDate, updateDate, votes, location }) => {
    return (
          <Card sx={{ maxWidth: 500 }} style={{ margin: '25px auto 75px auto'}}>
      <CardContent>
            <div className='postcard'>
        <div >
            <div className="user-profile">
            {showUser && <UserMiniCard userId={userId}/>}
            </div>
            <Link to={{
            pathname: `/post/${postId}`
          }} id="content-details">
            <Typography>
            <p className="location">{location}</p>
            <p className="create-date">Created at: {createDate}</p>
            <p>Content: {content}</p>
            <p>Updated at: {updateDate}</p>
            <div className="votes-section">
                <FontAwesomeIcon icon="fa-solid fa-heart" />
                <p className="votes">Votes: {votes}</p>
            </div>
            </Typography>
            
            </Link>
        </div>
        </div>
      </CardContent>
      
    </Card>

    /*
        <div className='postcard'>
        <div >
            <div className="user-profile">
            {showUser && <UserMiniCard userId={userId}/>}
            </div>
            <Link to={{
            pathname: `/post/${postId}`
          }} id="content-details">
    
            <p className="location">{location}</p>
            <p className="create-date">Created at: {createDate}</p>
            <p>Content: {content}</p>
            <p>Updated at: {updateDate}</p>
            <div className="votes-section">
                <FontAwesomeIcon icon="fa-solid fa-heart" />
                <p className="votes">Votes: {votes}</p>
            </div>
            
            </Link>
        </div>
        </div>
    */
    )
}

export default PostCard;