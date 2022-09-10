import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { blogsSelector } from '../../../store/store';
import SingleBlogEl from './SingleBlog.style';
import { firebase } from '../../../firebase';

const SingleBlog = () => {
	const { id } = useParams();

	const blog = useSelector(blogsSelector).blogs.filter(
		blog => blog.id === id
	)[0];
	const { title, subtitle, authorName, thumbnail, content } = blog || {};

	return (
		<section className='single-blog-wrapper container'>
			<SingleBlogEl>
				<div className='top-info'>
					<h2 className='title'>{title}</h2>
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
