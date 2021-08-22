import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { login } from '../../store/slices/userSlice';
import { useHistory } from 'react-router-dom';

import NotificationBox from '../Notifications/NotificationBox';

const RegisterPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const userObj = {
		email: '',
		password: '',
		username: '',
		picture: '',
	};

	const [user, setUser] = useState(userObj);
	const [fail, setFail] = useState(false);
	const [closeTimer, setCloseTimer] = useState(null);

	const registerUser = async () => {
		try {
			const userAuth = await auth.createUserWithEmailAndPassword(
				user.email,
				user.password
			);
			await userAuth.user.updateProfile({
				displayName: user.username,
				photoURL: user.picture,
			});

			dispatch(
				login({
					email: user.email,
					password: user.password,
					username: user.username,
					profilePic: user.picture,
					uid: userAuth.user.uid,
				})
			);

			history.push('/');
		} catch (e) {
			console.log(e.message);
		}
	};

	const areValid = (...fields) => {
		return fields.every(field => field.trim());
	};

	const submitHandler = e => {
		e.preventDefault();

		if (areValid(user.email, user.password, user.username)) {
			registerUser();
			return;
		}

		closeTimer && clearTimeout(closeTimer);
		setFail(true);

		const closeTimeout = setTimeout(() => {
			setFail(false);
		}, 2000);

		setCloseTimer(closeTimeout);
	};

	return (
		<>
			<NotificationBox
				active={fail}
				fail={true}
				text='You provided invalid data'
				closeCb={() => setFail(false)}
			></NotificationBox>

			<section className='register-container container'>
				<form className='register-form' onSubmit={submitHandler}>
					<div className='form-group email-group'>
						<label htmlFor='email'>Email: </label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Your email address'
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							reqiured='true'
						/>
					</div>
					<div className='form-group password-group'>
						<label htmlFor='password'>Password: </label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Your password'
							reqiured='true'
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
						/>
					</div>
					<div className='form-group username-group'>
						<label htmlFor='username'>Username: </label>
						<input
							type='text'
							id='username'
							name='username'
							placeholder='Your username'
							reqiured='true'
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
						/>
					</div>
					<div className='form-group picture-group'>
						<label htmlFor='picture'>Profile picture: </label>
						<input
							type='url'
							id='picture'
							name='picture'
							placeholder='URL to your profile picture'
							value={user.picture}
							onChange={e => setUser({ ...user, picture: e.target.value })}
						/>
					</div>
					<div className='buttons'>
						<button
							type='submit'
							className='btn register-btn'
							style={{ marginTop: '10px' }}
						>
							Register
						</button>
					</div>

					<Link to='/login' className='login-link'>
						You already have an accout? Login here.
					</Link>
				</form>
			</section>
		</>
	);
};

export default RegisterPage;
