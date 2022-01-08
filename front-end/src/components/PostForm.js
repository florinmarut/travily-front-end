import { useState } from 'react';
import axios from 'axios';
import jwt, { decode } from 'jsonwebtoken';

export const PostForm = () => {
    const ACCESS_TOKEN = '39a9d8fddd9c77b6fe1639b79a28df866832c12904a71e55bf83e3f8ccdd898209e5f64301f6650e1a2cb0f7320fc760d528ea09aca2c0ee9643a1dfab7c67d7';
    const [location, setLocation] = useState('');
    const [content, setContent] = useState('');

    const onChangeLocation = event => {
        setLocation(event.target.value);
    };

    const onChangeContent = event => {
        setContent(event.target.value);
    };

    const handleSubmit = event => {
        const authToken = localStorage.getItem('authToken');
        event.preventDefault();

        jwt.verify(authToken, ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                // err = {
                //   name: 'JsonWebTokenError',
                //   message: 'jwt malformed'
                // }
                console.log(err);
            }
            else{

                axios({
                    method: 'post',
                    url: 'http://localhost:5000/posts',
                    headers: {
                    authorization: 'Bearer ' + authToken
                    },
                    data: {
                        user_id: decoded.id,
                        location: location,
                        content: content
                    }
                })
                .then((response) => {
                alert('Ok');
                })
                .catch((error) => {
                alert(error);
                });
            }
          });
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Location: 
                    <input type='text' name='location' value={location} onChange={onChangeLocation} />
                </label>
                <label>
                    Content: 
                    <textarea cols='40' rows='5' name='content' value={content} onChange={onChangeContent} />
                </label>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default PostForm;