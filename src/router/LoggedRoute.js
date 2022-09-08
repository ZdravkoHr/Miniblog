import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../store/store';

export default function LoggedRoute({ component }) {
	const user = useSelector(userSelector);
	return user ? component : <Navigate to='/login' />;
}
