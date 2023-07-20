import { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();

const FilterProvider =({children}) => {
    const initialState = {
        sort:"",
        is_verified : false,
        searchInput: "",
    }
    const filterReducer = (state,{type,payload}) => {
        switch(type){
            case 'sort':
                return {...state, sort: payload}
            case "search" :
                return {...state, searchInput : payload}
            case "verify" :
                return {...state, is_verified: payload}
            default:
                return state;
        }
    }

    const[{sort, is_verified ,searchInput},dispatch] = useReducer(filterReducer, initialState);
 return (
     <FilterContext.Provider value={{sort, is_verified ,searchInput,dispatch}}>
       {children}
     </FilterContext.Provider>
   )
}

const useFilter =() => useContext(FilterContext)

export {useFilter, FilterProvider}