import * as React from 'react'

export type Dispatch = (action: Action) => void
export type State = { id: number }[]
export type Action = { type: 'addOrRemove'; id: number } | { type: 'setFavorites'; favorites: State }
export type ContextValue = {
  state: State
  dispatch: Dispatch
}
// Create a context object with the createContext method and specify the type for the context value
const FavoriteContext = React.createContext<ContextValue | undefined>(undefined)

const favoriteReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addOrRemove': {
      let currentState = structuredClone(state)
      const findIndex = state.findIndex((e) => e.id === action.id)
      findIndex === -1 ? currentState.push({ id: action.id }) : currentState.splice(findIndex, 1)
      document.getElementById('navbar')!.style.visibility = 'visible'
      setTimeout(() => {
        document.getElementById('navbar')!.style.opacity = '1'
      }) //make navbar visible with fading in animation.
      localStorage.setItem('favorites', JSON.stringify(currentState))
      return currentState
    }
    case 'setFavorites': {
      let currentState = structuredClone(state)
      let localFavorites = JSON.parse(localStorage.getItem('favorites')!)
      if (localFavorites) {
        currentState = localFavorites
      }
      return currentState
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(favoriteReducer, [{ id: 0 }])
  const value = { state, dispatch }

  //get favorites from local storage on first render
  React.useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem('favorites')!)
    if (favorites) dispatch({ type: 'setFavorites', favorites: favorites })
  }, [])

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export function useFavorite() {
  const context = React.useContext(FavoriteContext)
  if (context === undefined) {
    throw new Error('useFavorite must be used within a FavoriteProvider')
  }
  return context
}
