const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [
        {
          uid: '1',
          name: 'Luke Skywalker',
          url: 'https://www.swapi.tech/api/people/1',
        },
        {
          uid: '2',
          name: 'C-3PO',
          url: 'https://www.swapi.tech/api/people/2',
        },
        {
          uid: '3',
          name: 'R2-D2',
          url: 'https://www.swapi.tech/api/people/3',
        },
        {
          uid: '4',
          name: 'Darth Vader',
          url: 'https://www.swapi.tech/api/people/4',
        },
      ],
      planets: [
        {
          uid: '1',
          name: 'Tatooine',
          url: 'https://www.swapi.tech/api/planets/1',
        },
        {
          uid: '2',
          name: 'Alderaan',
          url: 'https://www.swapi.tech/api/planets/2',
        },
        {
          uid: '3',
          name: 'Yavin IV',
          url: 'https://www.swapi.tech/api/planets/3',
        },
        {
          uid: '4',
          name: 'Hoth',
          url: 'https://www.swapi.tech/api/planets/4',
        },
        {
          uid: '5',
          name: 'Dagobah',
          url: 'https://www.swapi.tech/api/planets/5',
        },
      ],
      vehicles: [
        {
          uid: '4',
          name: 'Sand Crawler',
          url: 'https://www.swapi.tech/api/vehicles/4',
        },
        {
          uid: '7',
          name: 'X-34 landspeeder',
          url: 'https://www.swapi.tech/api/vehicles/7',
        },
        {
          uid: '6',
          name: 'T-16 skyhopper',
          url: 'https://www.swapi.tech/api/vehicles/6',
        },
        {
          uid: '8',
          name: 'TIE/LN starfighter',
          url: 'https://www.swapi.tech/api/vehicles/8',
        },
        {
          uid: '14',
          name: 'Snowspeeder',
          url: 'https://www.swapi.tech/api/vehicles/14',
        },
        {
          uid: '18',
          name: 'AT-AT',
          url: 'https://www.swapi.tech/api/vehicles/18',
        },
      ],
      favorites: {
        charactersUID: ['1', '2'],
        planetsUID: ['1'],
        vehiclesUID: ['4'],
      },
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, 'green')
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore()

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color
          return elm
        })

        //reset the global store
        setStore({ demo: demo })
      },
    },
  }
}

export default getState
