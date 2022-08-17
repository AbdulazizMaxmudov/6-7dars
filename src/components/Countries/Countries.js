import { Link } from 'react-router-dom';
import './countries.css';
export const Card = ({ item }) => {
	return (
		<>
			<li className='country-list'>
				<Link to={'/country/' + item.name.common}>
					<img src={item.flags.png} alt={item.name.official} />
					<h3>{item.name.common}</h3>
					<p>
						Ppopulation: <span> {item.population}</span>
					</p>
					<p>
						Region: <span> {item.region}</span>
					</p>
					<p>
						Capital: <span> {item.capital}</span>
					</p>
				</Link>
			</li>
		</>
	);
};
