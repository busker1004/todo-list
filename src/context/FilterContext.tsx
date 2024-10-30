import { createContext} from "react";

export type filterType = 'all' | 'active' | 'complete';

export interface FilterContextInterface {
    filterMode: filterType
    changeFilterMode: (mode: filterType) => void
};

export const FilterContext = createContext<FilterContextInterface | undefined>(undefined);