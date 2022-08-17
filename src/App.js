import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Card } from './components/Countries/Countries';
import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Countries } from './pages/Countries';
import { Single } from './pages/Single';

function App() {
	const [countr, setCountr] = useState([]);
	const [value, setValue] = useState('');
	const [theme, setTheme] = useState('light');
	const [choseval, setChoseval] = useState('');
	useEffect(() => {
		if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((data) => setCountr(data))
				.catch((err) => console.log(err));
		} else if (choseval.length) {
			fetch(`https://restcountries.com/v3.1/region/${choseval}`)
				.then((res) => res.json())
				.then((data) => setCountr(data))
				.catch((err) => console.log(err));
		} else {
			fetch('https://restcountries.com/v3.1/all')
				.then((res) => res.json())
				.then((data) => setCountr(data))
				.catch((err) => console.log(err));
		}
	}, [value, choseval]);

	return (
		<div className='App'>
			<Header theme={theme} setTheme={setTheme} />
			<div className={theme} >
      <Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/countries'
					element={
						<Countries
							countr={countr}
							setValue={setValue}
							setChoseval={setChoseval}
						/>
					}
				/>
				<Route path={'/country/:name'} element={<Single />} />
			</Routes>
      </div>
		</div>
	);
}

export default App;
