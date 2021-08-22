import styled from 'styled-components';
const NotificationBoxEl = styled.div`
	& {
		background: var(--green);
		padding: 8px;
		margin: 10px auto;
		border-radius: 5px;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -100%);
		opacity: 0;
		transition: 0.4s ease-in;
	}

	&.fail {
		background-color: #ed4337;
	}

	&.active {
		transform: translate(-50%, 0%);
		opacity: 1;
	}

	h2 {
		text-align: center;
		color: #fff;
		font-size: 0.9rem;
	}
`;

export default NotificationBoxEl;
