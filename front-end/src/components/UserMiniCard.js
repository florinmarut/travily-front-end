import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const UserMiniCard = ({ userId }) => {
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
        <div>
          <Link to={{
            pathname: `/profile/${userId}`,
          }}>
            <p>{firstName}</p>
            <p>{surname}</p>
            <p>{description}</p>
          </Link>
        </div>
    )
}
