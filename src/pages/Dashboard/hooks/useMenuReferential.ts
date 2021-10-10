import { useState } from 'react';
import { menuReferential } from '../data/menuReferential';

function shuffle(toShuffle: Array<string>) {
    return toShuffle.sort(() => 0.5 - Math.random());
}

export function useMenuReferential() {
    const [weekMenu, setWeekMenu] = useState<Array<string>>([]);
    const generateWeekMenu = () => setWeekMenu(shuffle(menuReferential).slice(0, 5));

  return {
      weekMenu,
      generateWeekMenu,
  };
}
