import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Header from './components/Header/Header';
import BlogsArea from './components/Blogs/BlogsArea';
import AddBlog from './components/Blogs/AddBlog/AddBlog';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<Router>
					<Header />
					<Switch>
						<Route path='/' exact>
							<BlogsArea />
						</Route>
						<Route path='/addBlog'>
							<AddBlog />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
