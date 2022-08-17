import { Card } from '../components/Countries/Countries';
import { useState } from 'react';
import './countries.css';

export const Countries = ({ countr, setValue, setChoseval }) => {
	return (
		<>
			<div className='search-block'>
				<input
					className='search-input '
					onKeyUp={(evt) => {
						if (evt.code === 'Enter') {
							setValue(evt.target.value);
							evt.target.value = null;
						}
					}}
					type='text'
					placeholder='Search for a country'
				/>

				<select
					className='search-select'
					defaultValue=''
					onChange={(evt) => {
						setChoseval(evt.target.value);
					}}>
					<option disabled value=''>
						choose
					</option>
					<option value='Asia'>Asia</option>
					<option value='Europe'>Europe</option>
					<option value='Africa'>Africa</option>
					<option value='Americas'>Americas</option>
					<option value='Oceania'>Oceania</option>
				</select>
			</div>

			{countr.length && (
				<ul>
					{countr.map((e) => (
						<Card key={e.name.official} item={e} />
					))}
				</ul>
			)}
		</>
	);
};
