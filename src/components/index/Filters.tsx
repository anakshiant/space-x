import React from "react";
import styled from "styled-components";
import FilterButton from "../shared/FilterButton";
import {
  LaunchYears,
  LaunchYear,
  useSelector,
  State,
  useDispatch,
} from "@app/types";

const FiltersWrapper = styled.div`
  background: white;
  border-radius: 3px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const FilterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterSectionHeader = styled.h3`
  font-size: 14px;
  font-weight: 300;
`;

const HorizontalLine = styled.hr`
  width: 40%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  &:nth-child(even) {
    margin-left: 20px;
  }
`;

const Button = styled(FilterButton)`
  flex-basis: auto;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Filters: React.FC = () => {
  const filter = useSelector((state: State) => state.filter);
  const dispatch = useDispatch();

  return (
    <FiltersWrapper>
      <FilterSection>
        <FilterSectionHeader>Launch Year</FilterSectionHeader>
        <HorizontalLine />
        <ButtonContainer>
          {LaunchYears.map((launchYear: LaunchYear) => (
            <Button
              onClick={() =>
                dispatch({ type: "SET_FILTER_LAUNCH_YEAR", launchYear })
              }
              title={launchYear}
              selected={filter.launchYear && filter.launchYear === launchYear}
            />
          ))}
        </ButtonContainer>
      </FilterSection>
      <FilterSection>
        <FilterSectionHeader>Successful Launch</FilterSectionHeader>
        <HorizontalLine />
        <ButtonContainer>
          <Button
            onClick={() =>
              dispatch({ type: "SET_FILTER_SUCCESSFUL_LAUNCH", payload: true })
            }
            title="True"
            selected={filter.successfulLaunch === true}
          />
          <Button
            onClick={() =>
              dispatch({ type: "SET_FILTER_SUCCESSFUL_LAUNCH", payload: false })
            }
            title="False"
            selected={filter.successfulLaunch === false}
          />
        </ButtonContainer>
      </FilterSection>
      <FilterSection>
        <FilterSectionHeader>Successful Landing</FilterSectionHeader>
        <HorizontalLine />
        <ButtonContainer>
          <Button
            onClick={() =>
              dispatch({ type: "SET_FILTER_SUCCESSFUL_LANDING", payload: true })
            }
            title="True"
            selected={filter.successfulLanding === true}
          />
          <Button
            onClick={() =>
              dispatch({ type: "SET_FILTER_SUCCESSFUL_LANDING", payload: false })
            }
            title="False"
            selected={filter.successfulLanding === false}
          />
        </ButtonContainer>
      </FilterSection>
    </FiltersWrapper>
  );
};

export default Filters;
