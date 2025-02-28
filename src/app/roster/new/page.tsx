'use client';
import { PlayerAPI } from '@/app/data/playerApi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddPlayer() {
	const [name, setName] = useState<string | null>(null);
	const [number, setNumber] = useState<number | null>(null);
	const [position, setPosition] = useState<string | null>(null);
	const router = useRouter();

	const handleSubmitPlayerClick = () => {
    if (name !== null && number !== null && position !== null) {
      const player = {
        name, number, position
      }
      PlayerAPI.addPlayer(player);
      router.push('/roster');
    }
	};

	return (
		<div>
			<form>
				<label>Name</label>
				<input
					type='text'
					className='form-control'
					onChange={(event) => setName(event.target.value)}
				/>

				<br />

				<label>Number</label>
				<input
					type='text'
					className='form-control'
					onChange={(event) =>
						setNumber(parseInt(event.target.value, 10))
					}
				/>

				<br />

				<label>Position</label>
				<input
					type='text'
					className='form-control'
					onChange={(event) => setPosition(event.target.value)}
				/>

				<button type='button' onClick={handleSubmitPlayerClick}>
					Submit
				</button>
			</form>

			<Link href='/roster'>Roster</Link>
		</div>
	);
}