import styled from 'styled-components';

const AddBlogEl = styled.section`
	& {
		margin-top: 60px;
	}

	.form-group {
		margin-top: 20px;
	}

	label {
		display: block;
		margin-bottom: 8px;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		padding: 8px;
		font-family: sans-serif;
	}

	textarea {
		resize: none;
		height: 300px;
	}

	.buttons {
		display: flex;
		justify-content: flex-end;
	}

	.add-btn {
		margin: 10px 0;
		color: #fff;
		background-color: #53b553;
	}
`;

export default AddBlogEl;
