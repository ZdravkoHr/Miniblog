import { useSelector } from 'react-redux';
import { blogsSelector } from '../../../store/store.js';
import BlogsEl from './BlogsArea.style.js';
import Blog from './Blog';

const BlogsArea = () => {
	let { blogs, filter } = useSelector(blogsSelector);

	blogs = blogs.filter(blog => {
		return (
			blog.title.includes(filter) ||
			blog.subtitle.includes(filter) ||
			blog.content.includes(filter)
		);
	});

	return (
		<main>
			<BlogsEl className='blogs-container container'>
				{!blogs.length && (
					<p className='no-results'>
						Currently, there are no posts to be displayed.
					</p>
				)}

				{blogs.map(blog => {
					return <Blog key={blog.id} {...blog}></Blog>;
				})}
			</BlogsEl>
		</main>
	);
};

export default BlogsArea;
