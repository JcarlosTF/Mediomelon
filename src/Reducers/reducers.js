
function reducer(state = {}, action) {
	switch (action.type) {
		case 'ENTRAR_TOKEN':{
			return {...state, ...action.payload}
		}
		case 'LISTASERIES':{
			return {...state, ...action.payload}
		}
		case 'LISTASERIES_NOMBRE':{
			return {...state, ...action.payload}
		}
		case 'SERIE_BUSCAR':{
			return {...state, ...action.payload}
		}
		case 'SELECCIONAR_SERIE':{
			return {...state, ...action.payload}
		}
		case 'VERSERIES':{
			return {...state, ...action.payload}
		}
		case 'SERIE_DETALLES':{
			return {...state, ...action.payload}
		}
		case 'EPISODIOS':{
			return {...state, ...action.payload}
		}
		case 'ACTORES':{
			return {...state,...action.payload}
		}

		
		default:
			return state
	}

}

export default reducer;

