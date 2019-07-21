// this map was create out of necessity, since categories bear no information about themselves
// other than the id itself
// their naming is a pure guesstimation on my part

export const CATEGORIES_MAP = {
    sport: { cid: 1, title: 'sport' },
    business: { cid: 2, title: 'biznes' },
    life: { cid: 3, title: 'życie i media' },
    movies: { cid: 4, title: 'filmy' },
    technology: { cid: 5, title: 'technologia' },
    health: { cid: 6, title: 'zdrowie i uroda' },
    politics: { cid: 7, title: 'polityka' },
    games: { cid: 8, title: 'gry i rozrywka' },
    travel: { cid: 9, title: 'turystyka i podróże' }
}

export const ROUTING_MAP = {
    index: '/',
    article: '/article/:article_slug'
}

