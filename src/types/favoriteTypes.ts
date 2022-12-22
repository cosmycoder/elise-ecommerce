export type FavoriteItem = {
  id: number
}

export const FavoriteDefaultValues = {
  favorites: [{ id: 0 }],
  setFavorites: (favorite: FavoriteItem[]) => {},
}
