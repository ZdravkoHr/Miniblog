import styled from 'styled-components';

const ConfirmModalEl = styled.div`
	&.modal-wrapper {
		background: rgba(0, 0, 0, 0.6);
		position: fixed;
		inset: 0;
	}

	.modal-body {
		background: #fff;
		width: 60%;
		margin: auto;
		padding: 2rem;
		border-radius: 15px;
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
	}

	h3 {
		margin-bottom: 1.25rem;
	}

	.btn:not(:first-child) {
		margin-left: 15px;
	}
`;

export default ConfirmModalEl;
