export type Player = {
  number: number;
  name: string;
  position: string;
};

export const PlayerAPI = {
  players: [
    { number: 1, name: 'Ben Blocker', position: 'G' },
    { number: 2, name: 'Dave Defender', position: 'D' },
    { number: 3, name: 'Sam Sweeper', position: 'D' },
    { number: 4, name: 'Matt Midfielder', position: 'M' },
    { number: 5, name: 'William Winger', position: 'M' },
    { number: 6, name: 'Fillipe Forward', position: 'F' },
  ],
  all: function () {
    return this.players;
  },
  get: function (id: number) {
    const isPlayer = (p: Player) => p.number === id;
    return this.players.find(isPlayer);
  },
  addPlayer: function (player: Player) {
    this.players.push(player)
  }
};
