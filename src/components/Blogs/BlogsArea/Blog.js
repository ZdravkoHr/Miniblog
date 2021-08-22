import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ id, thumbnail, title, subtitle, author }) => {
	return (
		<Link to={`/blog/${id}`}>
			<article className='blog'>
				<div className='thumbnail'>
					<img src={thumbnail} alt={title} />
				</div>
				<div className='blog-info'>
					<h4>{title}</h4>
					<h6>{subtitle}</h6>
					<p>Posted by: {author}</p>
				</div>
			</article>
		</Link>
	);
};

export default Blog;
