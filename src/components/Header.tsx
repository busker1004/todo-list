import styled from "@emotion/styled";
import { HiOutlineSun } from "react-icons/hi";

import { filterType, } from "@/context/FilterContext";
import { useFilter } from "@/hooks/useFilter";

const filters: filterType[] = ['all', 'active', 'complete']

export default function Header() {
    const {changeFilterMode} = useFilter()

    return (
        <Wrapper>
            <DisplayMode>
                <HiOutlineSun />
            </DisplayMode>
            {filters.map((f) => {
                return (
                    <FilterWrapper>
                        <Filter onClick={() => changeFilterMode(f)}>{f}</Filter>
                    </FilterWrapper>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 4px;
    justify-content: space-around;
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
`
const Filter = styled.div`
    color: orange;
    :hover {
        transition: all 0.3s linear;
        color: gold;
    }
`