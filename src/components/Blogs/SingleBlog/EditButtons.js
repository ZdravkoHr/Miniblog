import EditButtonsEl from './EditButtons.style';
const EditButtons = ({ editCb, deleteCb }) => {
	return (
		<EditButtonsEl>
			<button className='btn btn-green' onClick={editCb}>
				Edit
			</button>
			<button className='btn btn-red' onClick={deleteCb}>
				Delete
			</button>
		</EditButtonsEl>
	);
};

export default EditButtons;
