import ConfirmModalEl from './ConfirmModal.style';

const ConfirmModal = ({ confirmMsg, confirmClass, confirmCb, cancelCb }) => {
	return (
		<ConfirmModalEl className='modal-wrapper'>
			<div className='modal-body'>
				<h3>{confirmMsg}</h3>

				<div className='confirm-btns'>
					<button className='btn' onClick={cancelCb}>
						Cancel
					</button>
					<button className={`btn ${confirmClass}`} onClick={confirmCb}>
						Confirm
					</button>
				</div>
			</div>
		</ConfirmModalEl>
	);
};

export default ConfirmModal;
