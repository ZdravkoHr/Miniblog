import styled from 'styled-components';

const HeaderEl = styled.header`
	& {
		border-bottom: 1px solid #ccc;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14px 5px;
	}

	.search-area {
		display: flex;
		align-items: center;
		flex-basis: 300px;

		@media (max-width: 520px) {
			flex-basis: 100px;
		}
	}

	.search-area .search-icon {
		cursor: pointer;
	}

	.search-area input {
		width: 100%;
		padding: 3px;
		border-width: 0;
		border-bottom: 1px solid #ccc;
		margin-left: 5px;
		outline: none;
	}

	.icons > * {
		cursor: pointer;
		margin-right: 10px;
	}

	.user-area {
		display: flex;
	}

	.user-img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
	}
`;

export default HeaderEl;
