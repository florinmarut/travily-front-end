import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };

    const onChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

                axios.post('http://localhost:5000/login', {
                email: email,
                password: password
                })
                .then((response) => {
                localStorage.setItem('authToken', response.data);
                alert('Ok');
                })
                .catch((error) => {
                alert(error);
                });

        // bcrypt.genSalt(saltRounds, (err, salt) => {
        //     bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
        //         setPassword(hash);
        //         setRepeatedPassword(hash);

        //         event.preventDefault();

        //         axios.post('http://localhost:5000/login', {
        //         email: email,
        //         password: password
        //         })
        //         .then((response) => {
        //         localStorage.setItem('authToken', response.data);
        //         alert('Ok');
        //         })
        //         .catch((error) => {
        //         alert(error);
        //         });
        //     });
        // });
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    E-mail address: 
                    <input type='email' name='email' value={email} onChange={onChangeEmail} />
                </label>
                <label>
                    Password: 
                    <input type='password' name='password' value={password} onChange={onChangePassword} />
                </label>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default Login;
