import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
	return (
		<Oval
			height={80}
			width={80}
			color='#4e4343'
			wrapperStyle={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
			}}
			visible={true}
			ariaLabel='oval-loading'
			secondaryColor='#bebdbd'
			strokeWidth={2}
			strokeWidthSecondary={2}
		/>
	);
};

export default LoadingSpinner;
