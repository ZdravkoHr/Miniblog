import { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, blogsSelector } from '../../../store/store';
import { addBlog, editBlog } from '../../../store/slices/blogsSlice';
import { firebase, db } from '../../../firebase';

import NotificationBox from '../../Notifications/NotificationBox';
import BlogInfoEl from './BlogInfo.style';

const BlogInfo = () => {
	const { id: initialBlogID } = useParams();

	const dispatch = useDispatch();
	const { username: authorName, uid: authorID } = useSelector(userSelector);
	const blogInfo = useSelector(blogsSelector).blogs.find(currentBlog => {
		return currentBlog.id === initialBlogID;
	});

	const initialBlog = {
		title: '',
		subtitle: '',
		thumbnail: '',
		content: '',
		authorName,
		authorID,
	};

	const blogForUse = blogInfo || initialBlog;
	const mode = blogInfo ? 'edit' : 'publish';
	const successMessage =
		mode === 'edit'
			? "The blog's information has been updated"
			: "You've just published a new blog!";

	const [blog, setBlog] = useState({ ...blogForUse });
	const [activeSuccess, setActiveSuccess] = useState(false);
	const [deactivateTimeout, setDeactivateTimeout] = useState(null);

	const publishBlog = async () => {
		dispatch(addBlog(blog));
		await updateDB();
	};

	const updateDB = async () => {
		await db
			.collection('blogs')
			.doc(blog.id)
			.set({
				...blog,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});
	};

	const saveBlog = async () => {
		dispatch(editBlog(blog));
		await updateDB();
	};

	const updateUI = () => {
		mode === 'publish' && setBlog({ ...initialBlog });
		setActiveSuccess(true);

		const deactivateTimeout = setTimeout(() => {
			setActiveSuccess(false);
		}, 2000);

		setDeactivateTimeout(deactivateTimeout);
	};

	const submitHandler = e => {
		e.preventDefault();
		clearTimeout(deactivateTimeout);
		mode === 'edit' ? saveBlog() : publishBlog();
		updateUI();
	};

	return (
		<>
			<NotificationBox
				active={activeSuccess}
				text={successMessage}
			></NotificationBox>
			<BlogInfoEl>
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
							<button className='btn btn-green'>
								{mode === 'edit' ? 'Save' : 'Publish'} Blog
							</button>
						</div>
					</form>
				</div>
			</BlogInfoEl>
		</>
	);
};

export default BlogInfo;
