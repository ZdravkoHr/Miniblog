import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { login } from '../../store/slices/userSlice';
import NotificationBox from '../Notifications/NotificationBox';

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [fail, setFail] = useState(false);
	const [failTimeout, setFailTimeout] = useState(null);
	const [failMessage, setFailMessage] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const logUser = async () => {
		try {
			const userAuth = await auth.signInWithEmailAndPassword(email, password);

			dispatch(
				login({
					email: userAuth.user.email,
					password: userAuth.user.password,
					username: userAuth.user.displayName,
					profilePic: userAuth.user.photoURL,
					uid: userAuth.user.id,
				})
			);

			navigate('/');
		} catch (e) {
			setFail(true);
			setFailMessage(e.message);
			const timeout = setTimeout(() => {
				setFail(false);
			}, 2000);
			setFailTimeout(timeout);
		}
	};

	const submitHandler = e => {
		e.preventDefault();
		failTimeout && clearTimeout(failTimeout);
		logUser();
	};

	return (
		<>
			<NotificationBox active={fail} fail={true} text={failMessage} />
			<section className='login-container container'>
				<form className='login-form' onSubmit={submitHandler}>
					<div className='form-group email-group'>
						<label htmlFor='email'>Email: </label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Your email address'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='form-group password-group'>
						<label htmlFor='password'>Password: </label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Your password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className='buttons'>
						<button
							type='submit'
							className='btn login-btn'
							style={{ marginTop: '10px' }}
						>
							Login
						</button>
					</div>

					<Link to='/register' className='register-link'>
						You do not have an account? Register here.
					</Link>
				</form>
			</section>
		</>
	);
};

export default LoginPage;
