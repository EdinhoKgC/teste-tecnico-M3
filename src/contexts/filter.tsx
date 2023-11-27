import { createContext, useState } from "react";

interface ActiveFilter {
  values: string[] | null;
}

interface AvailableFilters {
  'Cores': ActiveFilter
  'Tamanhos': ActiveFilter
  'Faixa de preço': ActiveFilter
}

interface FilterContextData {
  activeFilters: AvailableFilters
  addActiveFilters: (filterName: string, filterValue: string) => void;
  removeActiveFilters: (filterName: string, filterValue: string) => void
}

export const FilterContext = createContext<FilterContextData>(
  {} as FilterContextData
);

export const FilterProvider = ({children}: any) => {
  const [activeFilters, setActiveFilters] = useState<AvailableFilters>({
    'Cores' : {
      values: null
    },
    'Tamanhos': {
      values: null
    },
    'Faixa de preço': {
      values: null
    }
  });

  const addActiveFilters = (filterName: string, filterValue: string) => {
    setActiveFilters((prevState: any) => {
      return {
        ...prevState,
        [filterName]: {
          ...prevState[filterName],
          values: [...(prevState[filterName].values || []), filterValue]
        }
      }
    })
  }

  const removeActiveFilters = (filterName: string, filterValue: string) => {
    setActiveFilters((prevState: any) => {
      return {
        ...prevState,
        [filterName]: {
          ...prevState[filterName],
          values: prevState[filterName].values.filter((value: string) => value !== filterValue)
        }
      }
    })
  }

  return (
    <FilterContext.Provider
      value={{
        activeFilters,
        addActiveFilters,
        removeActiveFilters
      }}>
      {children}
    </FilterContext.Provider>
  )
};

export default FilterContext;