import { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'



export const RegisterForm = () => {
    const saltRounds = 10;

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [description, setDescription] = useState('Hi, there!');

    const onChangeFirstName = event => {
        setFirstName(event.target.value);
    };

    const onChangeSurname = event => {
        setSurname(event.target.value);
    };

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };

    const onChangePassword = event => {
        setPassword(event.target.value);
    };

    const onChangeRepeatPassword = event => {
        setRepeatPassword(event.target.value);
    };

    const onChangeDescription = event => {
        setDescription(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

                axios.post('http://localhost:5000/register', {
                firstName: firstName,
                surname: surname,
                email: email,
                description: description,
                password: password
                })
                .then((response) => {
                window.location.replace("/login");
                })
                .catch((error) => {
                      alert(error);
                });

        // bcrypt.genSalt(saltRounds, (err, salt) => {
        //     bcrypt.hash(password, salt, (err, hash) => {
        //         setPassword(hash);
        //         setRepeatedPassword(hash);

        //         event.preventDefault();

        //         axios.post('http://localhost:5000/register', {
        //         firstName: firstName,
        //         surname: surname,
        //         email: email,
        //         description: description,
        //         password: password
        //         })
        //         .then((response) => {
        //         alert(response.data);
        //         })
        //         .catch((error) => {
        //               alert(error);
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
            <form onSubmit={handleSubmit} className ='form'>
                <h1 className="form__title">Sign-Up</h1>
                <label className='form_group'>
                    First name: 
                    <input type='text' name='firstName' value={firstName} onChange={onChangeFirstName} className='signup-text-input' />
                </label >
                <label className='form_group'>
                    Last name: 
                    <input type='text' name='lastName' value={surname} onChange={onChangeSurname} className='signup-text-input'/>
                </label>
                <label className='form_group'>
                    E-mail address: 
                    <input type='email' name='email' value={email} onChange={onChangeEmail} className='signup-text-input'/>
                </label>
                <label className='form_group'>
                    Password: 
                    <input type='password' name='password' value={password} onChange={onChangePassword} className='signup-text-input'/>
                </label>
                <label className='form_group'>
                    Repeat password: 
                    <input type='password' name='repeatPassword' value={repeatPassword} onChange={onChangeRepeatPassword} className='signup-text-input'/>
                </label>
                <label className='form_group'>
                    Short description about yourself:
                    <textarea rows='4' cols='50' name='description' value={description} onChange={onChangeDescription} className='signup-text-input'>
                        Hi, there!.
                    </textarea>
                </label>
                <input type='submit' value='Continue' className='signup-text-button'/>
            </form>
        </div>
        </div>
        </div>
        
    )
}

export default RegisterForm;