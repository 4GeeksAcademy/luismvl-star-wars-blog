import { fetchDetails, fetchList } from '../utils/apiCalls.js'

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nextCharacters: '',
      nextPlanets: '',
      nextVehicles: '',
      characters: [],
      planets: [],
      vehicles: [],
      favorites: {
        charactersUID: [],
        planetsUID: [],
        vehiclesUID: [],
      },
      readLater: {
        charactersUID: [],
        planetsUID: [],
        vehiclesUID: [],
      },
    },
    actions: {
      loadList: async ({ type, nextPage }) => {
        const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)
        const url = getStore()[`next${capitalizedType}`]
        const response = await fetchList({
          url: nextPage ? url : null,
          type,
        })
        setStore({
          [`next${capitalizedType}`]: response.next,
          [type]: [...getStore()[type], ...response.results],
        })
      },
      loadNextPage: async (type) => {
        const response = await getActions().loadList({
          nextPage: true,
          type,
        })
      },
      loadDetails: async ({ type, id }) => {
        const response = await fetchDetails({ type, id })
        return response
      },
    },
  }
}

export default getState
