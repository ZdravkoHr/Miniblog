import styled from 'styled-components';

const SingleBlogEl = styled.article`
	& {
		margin: 80px auto;
	}

	img {
		display: block;
		max-width: 600px;
		max-height: 400px;
		margin: 40px auto;
	}

	.top-info {
		line-height: 1.8;
	}

	.title-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 48px;
	}

	.subtitle {
		font-size: 30px;
	}
`;

export default SingleBlogEl;
