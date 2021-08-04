import React from 'react';

const Blog = ({ thumbnail, title, subtitle, author }) => {
	return (
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
	);
};

export default Blog;
