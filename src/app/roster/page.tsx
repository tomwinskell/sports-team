'use client';
import Link from 'next/link';
import { Player, PlayerAPI } from '@/app/data/playerApi';
import { useState } from 'react';

export default function Roster() {
  const [players] = useState<Player[]>(PlayerAPI.all());

  return (
    <main>
      <div>
        <h1>Welcome to the Roster Page</h1>
      </div>
      <div>
        <ul>
          {players
            ? players.map((p) => (
                <li key={p.number}>
                  <Link href={`/roster/${p.number}`}>{p.name}</Link>
                </li>
              ))
            : 'No players'}
        </ul>
      </div>
      <div>
        <Link href={'/roster/new'}>Add new player</Link>
      </div>
    </main>
  );
}
