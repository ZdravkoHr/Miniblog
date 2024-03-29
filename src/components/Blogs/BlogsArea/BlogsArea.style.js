import styled from 'styled-components';

const BlogsEl = styled.section`
	& {
		margin-top: 120px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
		grid-gap: 20px;
	}

	.no-results {
		text-align: center;
		grid-column: 1/ 5;
	}

	.blog {
		cursor: pointer;
		border: 1px solid #ccc;
	}

	.blog:hover .blog-info {
		background-color: whitesmoke;
	}

	.blog-info {
		padding: 5px;
		line-height: 1.8;
	}

	.blog-info p {
		font-size: 12px;
	}

	.blog .thumbnail {
		height: 200px;
	}
`;

export default BlogsEl;
