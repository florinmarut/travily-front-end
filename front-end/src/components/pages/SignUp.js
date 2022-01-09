import { useState } from 'react';
import axios from 'axios';

export const SignUp = () => {
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
                alert(response.data);
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First name: 
                    <input type='text' name='firstName' value={firstName} onChange={onChangeFirstName} />
                </label>
                <label>
                    Last name: 
                    <input type='text' name='lastName' value={surname} onChange={onChangeSurname} />
                </label>
                <label>
                    E-mail address: 
                    <input type='email' name='email' value={email} onChange={onChangeEmail} />
                </label>
                <label>
                    Password: 
                    <input type='password' name='password' value={password} onChange={onChangePassword} />
                </label>
                <label>
                    Repeat password: 
                    <input type='password' name='repeatPassword' value={repeatPassword} onChange={onChangeRepeatPassword} />
                </label>
                <label>
                    <textarea rows='4' cols='50' name='description' value={description} onChange={onChangeDescription}>
                        Hi, there!.
                    </textarea>
                </label>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default SignUp;