import { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'

export const LoginForm = () => {
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
        <div className='first-container' style={{ 
             backgroundImage: `url(${process.env.PUBLIC_URL + '/images/register-login.jpg'})`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
    
    }}>
             <div className='first-container' style={{height: '100%',
                 width: '100%',
                 backgroundColor: 'rgba(153, 167, 167, 0.5)',}}>
                <div className='container'>
                  <form onSubmit={handleSubmit}>
                    <h1 className="form__title">LogIn</h1>
                     <label>
                         E-mail address: 
                         <input type='email' name='email' value={email} onChange={onChangeEmail} className='signup-text-input'/>
                    </label>
                     <label>
                    Password: 
                         <input type='password' name='password' value={password} onChange={onChangePassword} className='signup-text-input'/>
                     </label>
                  <input type='submit' value='Continue' className='signup-text-button'/>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
