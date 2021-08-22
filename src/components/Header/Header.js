import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderEl from './Header.style';
import {
	Search,
	AddBox,
	Home,
	PowerSettingsNew,
	ExitToApp,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector } from '../../store/store';
import { logout } from '../../store/slices/userSlice';
import { setFilter } from '../../store/slices/blogsSlice';
import defaultPic from '../../assets/profile.png';

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);

	const changeFilter = e => {
		dispatch(setFilter(e.target.value));
	};

	const exit = () => {
		dispatch(logout());
	};

	return (
		<HeaderEl>
			<div className='header-content container'>
				<div className='search-area'>
					<Search className='search-icon' />
					<input
						type='search'
						placeholder='Search for...'
						onChange={changeFilter}
					/>
				</div>

				<div className='user-area'>
					<div className='icons'>
						<Link to='/'>
							<Home />
						</Link>

						<Link to='/addBlog'>
							<AddBox />
						</Link>

						{user ? (
							<PowerSettingsNew onClick={exit} />
						) : (
							<Link to='/login'>
								<ExitToApp />
							</Link>
						)}
					</div>

					<div className='user'>
						<div className='user-img'>
							<img src={user?.profilePic || defaultPic} alt={user?.username} />
						</div>
					</div>
				</div>
			</div>
		</HeaderEl>
	);
};

export default Header;
