import React from 'react';
import HeaderEl from './Header.style';
import { Search, Notifications, AddBox, Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Header = () => {
	// console.log(useHistory());
	// const history = useHistory();

	// const clickHandler = e => {
	// 	console.log('A click has occured');
	// 	history.push('/addBlog');
	// };

	return (
		<HeaderEl>
			<div className='header-content container'>
				<div className='search-area'>
					<Search className='search-icon' />
					<input type='search' placeholder='Search for...' />
				</div>

				<div className='user-area'>
					<div className='icons'>
						<Link to='/'>
							<Home />
						</Link>
						<Notifications />

						<Link to='/addBlog'>
							<AddBox />
						</Link>
					</div>

					<div className='user'>
						<div className='user-img'>
							<img
								src='https://pbs.twimg.com/profile_images/1311375102810959872/6Z8pY8-9_400x400.jpg'
								alt='name'
							/>
						</div>
					</div>
				</div>
			</div>
		</HeaderEl>
	);
};

export default Header;
