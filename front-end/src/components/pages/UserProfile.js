import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostsList from '../PostsList';
import '../UserProfile.css'

export const UserProfile = () => {
    const { userId } = useParams();

    const authToken = localStorage.getItem('authToken');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios({
            method: 'get',
               url: `http://localhost:5000/users/${userId}`,
               headers: {
               authorization: 'Bearer ' + authToken
               }
               })
          .then((response) => {
            if(JSON.stringify(response.data) !== '{"name":"JsonWebTokenError","message":"jwt malformed"}'){
               setFirstName(response.data[0].firstname);
               setSurname(response.data[0].surname);
               setDescription(response.data[0].description);
            }
          })
          .catch((error) => {
            alert(error);
          });
    }, [])

    return (
        <div >
            <div className='container-profile'>
            <div className='display-name'>
              <h2 className='user-name'>{firstName} {surname}</h2>
            </div>

            <div className='display-description'>
            <p>{description}</p>
            </div>

            </div>
            
            <PostsList userId={userId} />
        </div>
    )
}

export default UserProfile;