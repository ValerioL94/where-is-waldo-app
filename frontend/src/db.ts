import { GameMap, Player } from './components/types';

export const scoreboard1: Player[] = [
  { name: 'John', score: '05:20' },
  { name: 'Mary', score: '17:20' },
];
export const scoreboard2: Player[] = [];
export const scoreboard3: Player[] = [
  { name: 'CoolGuy', score: '09:22' },
  { name: 'Princess', score: '11:01' },
];
const map1: GameMap = {
  id: 1,
  name: 'Alien-life',
  image: {
    src: '/assets/images/alien-life-waldo.jpg',
    alt: 'alien life map',
  },
  characters: [
    {
      id: 1,
      name: 'Robo-dog',
      icon: {
        src: '/assets/icons/robo-dog.png',
        alt: 'robot dog',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 2,
      name: 'Alien dad',
      icon: {
        src: '/assets/icons/alien-dad.png',
        alt: 'alien dad',
      },
      found: false,
      position: { x: 100, y: 100 },
    },
    {
      id: 3,
      name: 'Astronaut',
      icon: {
        src: '/assets/icons/astronaut.png',
        alt: 'astronaut',
      },
      found: false,
      position: { x: 200, y: 200 },
    },
  ],
  scoreboard: scoreboard1,
};

const map2: GameMap = {
  id: 2,
  name: 'Hollywood-life',
  image: {
    src: '/assets/images/hollywood-life-waldo.jpg',
    alt: 'hollywood life map',
  },
  characters: [
    {
      id: 1,
      name: '',
      icon: {
        src: '',
        alt: '',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 1,
      name: '',
      icon: {
        src: '',
        alt: '',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 1,
      name: '',
      icon: {
        src: '',
        alt: '',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
  ],
  scoreboard: scoreboard2,
};
const map3: GameMap = {
  id: 3,
  name: 'Medieval-life',
  image: {
    src: '/assets/images/medieval-life-waldo.jpg',
    alt: 'medieval life map',
  },
  characters: [
    {
      id: 1,
      name: '',
      icon: {
        src: '',
        alt: '',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 1,
      name: '',
      icon: {
        src: '',
        alt: '',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
    {
      id: 1,
      name: '',
      icon: {
        src: '',
        alt: '',
      },
      found: false,
      position: { x: 0, y: 0 },
    },
  ],
  scoreboard: scoreboard3,
};

export const gameMaps: GameMap[] = [map1, map2, map3];
