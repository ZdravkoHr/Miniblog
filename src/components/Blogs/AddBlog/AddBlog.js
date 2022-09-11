import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../store/store';
import { addBlog } from '../../../store/slices/blogsSlice';
import { firebase, db } from '../../../firebase';

import NotificationBox from '../../Notifications/NotificationBox';
import AddBlogEl from './AddBlog.style';
import { serverTimestamp } from 'firebase/firestore';

const AddBlog = () => {
	const dispatch = useDispatch();

	const { username: authorName, uid: authorID } = useSelector(userSelector);

	const initialBlog = {
		title: '',
		subtitle: '',
		thumbnail: '',
		content: '',
		authorName,
		authorID,
	};

	const [blog, setBlog] = useState({ ...initialBlog });
	const [activeSuccess, setActiveSuccess] = useState(false);
	const [deactivateTimeout, setDeactivateTimeout] = useState(null);

	const pushBlog = async () => {
		dispatch(addBlog(blog));
		db.collection('blogs').add({
			...blog,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	const updateUI = () => {
		setBlog({ ...initialBlog });
		setActiveSuccess(true);

		const deactivateTimeout = setTimeout(() => {
			setActiveSuccess(false);
		}, 2000);

		setDeactivateTimeout(deactivateTimeout);
	};

	const submitHandler = e => {
		e.preventDefault();
		clearTimeout(deactivateTimeout);
		pushBlog();
		updateUI();
	};

	return (
		<>
			<NotificationBox
				active={activeSuccess}
				text="You've just published a new blog!"
			></NotificationBox>
			<AddBlogEl>
				<div className='add-blog-container container'>
					<form onSubmit={submitHandler}>
						<div className='form-group title-group'>
							<label htmlFor='title'>Title: </label>
							<input
								type='text'
								name='title'
								id='title'
								required
								value={blog.title}
								onChange={e => setBlog({ ...blog, title: e.target.value })}
							/>
						</div>
						<div className='form-group subtitle-group'>
							<label htmlFor='subtitle'>Subtitle: </label>
							<input
								type='text'
								name='subtitle'
								id='subtitle'
								required
								value={blog.subtitle}
								onChange={e => setBlog({ ...blog, subtitle: e.target.value })}
							/>
						</div>
						<div className='form-group thumbnail-group'>
							<label htmlFor='thumbnail'>Thumbnail URL: </label>
							<input
								type='text'
								name='thumbnail'
								id='thumbnail'
								required
								value={blog.thumbnail}
								onChange={e => setBlog({ ...blog, thumbnail: e.target.value })}
							/>
						</div>
						<div className='form-group content-group'>
							<label htmlFor='content'>Content: </label>
							<textarea
								name='content'
								id='content'
								required
								value={blog.content}
								onChange={e => setBlog({ ...blog, content: e.target.value })}
							></textarea>
						</div>
						<div className='buttons'>
							<button className='btn add-btn'>Add Blog</button>
						</div>
					</form>
				</div>
			</AddBlogEl>
		</>
	);
};

export default AddBlog;
