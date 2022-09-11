import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { blogsSelector, userSelector } from '../../../store/store';
import EditButtons from './EditButtons';
import ConfirmModal from '../../ConfirmModal/ConfirmModal';
import NotificationBox from '../../Notifications/NotificationBox';
import SingleBlogEl from './SingleBlog.style';

const SingleBlog = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [loaded, setLoaded] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [errorText, setErrorText] = useState('');

	const { uid: userID } = useSelector(userSelector) || {};

	const blog = useSelector(blogsSelector)?.blogs.filter(
		blog => blog.id === id
	)[0];
	const { title, subtitle, authorName, thumbnail, content } = blog || {};

	const deleteBlog = async () => {
		try {
			await deleteDoc(doc(db, 'blogs', blog.id));
			navigate('/');
		} catch (err) {
			setErrorText(err.message);
		}
	};

	useEffect(() => {
		setLoaded(!!userID && !!blog);
	}, [userID, blog]);

	return (
		<>
			{
				<NotificationBox
					active={errorText !== ''}
					text={errorText}
					fail={true}
				></NotificationBox>
			}

			{loaded && (
				<section className='single-blog-wrapper container'>
					<SingleBlogEl>
						<div className='top-info'>
							<div className='title-row'>
								<h2 className='title'>{title}</h2>
								{userID && userID === blog?.authorID && (
									<EditButtons
										editCb={() => {
											navigate('/blogInfo/' + blog?.id);
										}}
										deleteCb={() => setShowConfirm(true)}
									/>
								)}
							</div>
							<h4 className='subtitle'>{subtitle}</h4>
							<h6 className='author'>Published by: {authorName}</h6>
						</div>

						<div className='thumbnail'>
							<img src={thumbnail} alt={title} />
						</div>

						<div className='content'>
							<pre>{content}</pre>
						</div>
					</SingleBlogEl>
				</section>
			)}

			{showConfirm && (
				<ConfirmModal
					confirmMsg='Are you sure you want to delete this post?'
					confirmClass='btn-red'
					confirmCb={deleteBlog}
					cancelCb={() => setShowConfirm(false)}
				/>
			)}
		</>
	);
};

export default SingleBlog;
