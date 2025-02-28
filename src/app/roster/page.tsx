import Link from 'next/link';
import { PlayerAPI } from '../data/playerApi';

export default function Roster() {
  const players = PlayerAPI.all();
  return (
    <main>
      <div>
        <h1>Welcome to the Roster Page</h1>
      </div>
      <div>
        <ul>
          {players.map((p) => (
            <li key={p.number}>
              <Link href={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
