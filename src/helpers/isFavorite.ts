import { State } from '../../context/favoritesContext'
import { Product } from '../types/fakeApiTypes'

/**
 * @returns true if product was added to favorites before, false if not.
 */
export const isFavorite = (state: State, product: Product): boolean => {
  const findIndex = state.findIndex((e) => e.id === product.id)
  return findIndex !== -1
}
