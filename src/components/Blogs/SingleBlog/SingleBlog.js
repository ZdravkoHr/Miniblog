import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { blogsSelector, userSelector } from '../../../store/store';
import EditButtons from './EditButtons';
import SingleBlogEl from './SingleBlog.style';

const SingleBlog = () => {
	const { id } = useParams();
	const { uid: userID } = useSelector(userSelector);

	const blog = useSelector(blogsSelector).blogs.filter(
		blog => blog.id === id
	)[0];
	const { title, subtitle, authorName, thumbnail, content } = blog || {};

	return (
		<section className='single-blog-wrapper container'>
			<SingleBlogEl>
				<div className='top-info'>
					<div className='title-row'>
						<h2 className='title'>{title}</h2>
						{console.log(userID, blog, userID === blog.authorID)}
						{userID === blog.authorID && <EditButtons />}
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
	);
};

export default SingleBlog;
