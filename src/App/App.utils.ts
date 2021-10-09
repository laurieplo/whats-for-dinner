export function shuffle(toShuffle: Array<string>) {
    return toShuffle.sort(() => 0.5 - Math.random());
}
