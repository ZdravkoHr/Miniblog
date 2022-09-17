import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../store/store';

import LoadingSpinner from '../components/LoadingSpinner';

export default function LoggedRoute({ component }) {
	const user = useSelector(userSelector);
	if (!user) return <LoadingSpinner />;

	return user.logged ? component : <Navigate to='/login' />;
}
