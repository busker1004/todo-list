import styled from "@emotion/styled";
import { HiOutlineSun } from "react-icons/hi";

import { filterType, } from "@/context/FilterContext";
import { useFilter } from "@/hooks/useFilter";
import { useState } from "react";

const filters: filterType[] = ['all', 'active', 'complete']

export default function Header() {
    const {changeFilterMode} = useFilter()
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <Wrapper>
            <DisplayMode>
                <HiOutlineSun />
            </DisplayMode>
            <FilterWrapper>
                {filters.map((f) => {
                    return (
                        <Filter 
                            key={f}
                            isActive={activeIndex === filters.indexOf(f)} 
                            onClick={() => {
                                setActiveIndex(filters.indexOf(f))
                                changeFilterMode(f)
                            }}
                        >{f}</Filter>
                    )
                })}
            </FilterWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 4px;
    justify-content: space-around;
    align-items: center;
`

const DisplayMode = styled.div`
    width: 20px;
    height: 20px;;
`

const FilterWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;
`
const Filter = styled.div<{isActive:boolean}>`
    color: ${({isActive}) => isActive ? 'brown' : 'orange'}; 
    :hover {
        transition: all 0.3s linear;
        color: gold;
        cursor: pointer;
    }
`