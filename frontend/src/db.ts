import { GameMap, Player } from './types';

export const scoreboard1: Player[] = [
  { name: 'John', score: '05:20' },
  { name: 'Mary', score: '17:20' },
  { name: '', score: '' },
  { name: '', score: '' },
  { name: '', score: '' },
];
export const scoreboard2: Player[] = [
  { name: '', score: '' },
  { name: '', score: '' },
  { name: '', score: '' },
  { name: '', score: '' },
  { name: '', score: '' },
];
export const scoreboard3: Player[] = [
  { name: 'CoolGuy', score: '09:22' },
  { name: 'Princess', score: '11:01' },
  { name: '', score: '' },
  { name: '', score: '' },
  { name: '', score: '' },
];
const map1: GameMap = {
  id: 1,
  name: 'Dangerous Sea',
  image: {
    src: '/assets/images/wheres-waldo-dangerous-sea.jpg',
    alt: 'dangerous sea map',
  },
  difficulty: 'easy',
  characters: [
    {
      id: 1,
      name: 'Waldo',
      icon: {
        src: '/assets/images/waldo.jpg',
        alt: 'waldo',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 2,
      name: 'Wilma',
      icon: {
        src: '/assets/images/wilma.jpeg',
        alt: 'wilma',
      },
      found: false,
      position: { x: 100, y: 100 },
    },
    {
      id: 3,
      name: 'Wizard',
      icon: {
        src: '/assets/images/wizard.jpeg',
        alt: 'wizard',
      },
      found: false,
      position: { x: 200, y: 200 },
    },
  ],
  scoreboard: scoreboard1,
};

const map2: GameMap = {
  id: 2,
  name: 'Hollywood',
  image: {
    src: '/assets/images/wheres-waldo-hollywood.jpg',
    alt: 'hollywood map',
  },
  difficulty: 'medium',
  characters: [
    {
      id: 1,
      name: 'Wenda',
      icon: {
        src: '/assets/images/wenda.jpg',
        alt: 'wenda',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 2,
      name: 'Waldo',
      icon: {
        src: '/assets/images/waldo.jpg',
        alt: 'waldo',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 3,
      name: 'Odlaw',
      icon: {
        src: '/assets/images/odlaw.jpg',
        alt: 'odlaw',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
  ],
  scoreboard: scoreboard2,
};
const map3: GameMap = {
  id: 3,
  name: 'Amusement Park',
  image: {
    src: '/assets/images/wheres-waldo-amusement-park.jpg',
    alt: 'amusement park map',
  },
  difficulty: 'hard',
  characters: [
    {
      id: 1,
      name: 'Odlaw',
      icon: {
        src: '/assets/images/odlaw.jpg',
        alt: 'odlaw',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 2,
      name: 'Waldo',
      icon: {
        src: '/assets/images/waldo.jpg',
        alt: 'waldo',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 3,
      name: 'Wizard',
      icon: {
        src: '/assets/images/wizard.jpeg',
        alt: 'wizard',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
  ],
  scoreboard: scoreboard3,
};

export const gameMaps: GameMap[] = [map1, map2, map3];
