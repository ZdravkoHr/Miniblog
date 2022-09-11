import EditButtonsEl from './EditButtons.style';
const EditButtons = ({ deleteCb }) => {
	return (
		<EditButtonsEl>
			<button className='btn btn-green'>Edit</button>
			<button className='btn btn-red' onClick={deleteCb}>
				Delete
			</button>
		</EditButtonsEl>
	);
};

export default EditButtons;
