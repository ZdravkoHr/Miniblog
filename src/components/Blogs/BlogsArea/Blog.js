import { Link } from 'react-router-dom';

const Blog = ({ id, thumbnail, title, subtitle, authorName }) => {
	return (
		<Link to={`/blog/${id}`}>
			<article className='blog'>
				<div className='thumbnail'>
					<img src={thumbnail} alt={title} />
				</div>
				<div className='blog-info'>
					<h4>{title}</h4>
					<h6>{subtitle}</h6>
					<p>Posted by: {authorName}</p>
				</div>
			</article>
		</Link>
	);
};

export default Blog;
