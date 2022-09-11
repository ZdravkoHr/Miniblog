import EditButtonsEl from './EditButtons.style';
const EditButtons = () => {
	return (
		<EditButtonsEl>
			<button className='btn btn-green'>Edit</button>
			<button className='btn btn-red'>Delete</button>
		</EditButtonsEl>
	);
};

export default EditButtons;
