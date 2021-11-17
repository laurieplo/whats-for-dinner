import { useState } from 'react';
import { menuReferential } from '../data/menuReferential';

function shuffle(toShuffle: string[]) {
    return toShuffle.sort(() => 0.5 - Math.random());
}

function excludeFrom(from: string[], toExclude: string[]) {
    return from.filter(entry => !toExclude.includes(entry));
}

export function useMenuReferential() {
    const [weekMenu, setWeekMenu] = useState<Array<string>>([]);
    const generateWeekMenu = (size: number) => setWeekMenu(shuffle(menuReferential).slice(0, size));
    const replaceMenuItem = (label: string) => {
        const [replacedItem] = shuffle(excludeFrom(menuReferential, weekMenu));
        const weekMenuCopy = Array.from(weekMenu)
        weekMenuCopy.splice(weekMenu.indexOf(label), 1, replacedItem);
        setWeekMenu(weekMenuCopy);
    };

  return {
      weekMenu,
      generateWeekMenu,
      replaceMenuItem,
  };
}
