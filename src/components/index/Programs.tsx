import React from "react";
import styled from "styled-components";
import { useSelector, State, Launch } from "@app/types";
import Card from "../shared/Card";
import theme from "@app/theme";

const ProgramsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > * {
    margin-top: 10px;
  }
`;

const ImageWrapper = styled.div`
  background: ${theme.BACKGROUND_COLOR};
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const MissionCard = styled(Card)`
  max-width: 300px;
`;

const Programs: React.FC = () => {
  const launch = useSelector((state: State) => state.launch);

  return (
    <ProgramsWrapper>
      {launch.launches.map((launch: Launch) => (
        <MissionCard>
          <>
            <ImageWrapper>
              <Image src={launch.patchUrl} />
            </ImageWrapper>
            <h3>{launch.title}</h3>
            <h3>mission ids</h3>
            <ul>
              {launch.missionIds.map((missionId: string) => (
                <li>{missionId}</li>
              ))}
            </ul>
            <h3>Launch Year</h3> : <p>{launch.launchYear}</p>
            <h3>Successful launch</h3>: <p>{launch.successfulLaunch}</p>
            <h3>Successful Landing</h3> : <p>{launch.successfulLanding}</p>
          </>
        </MissionCard>
      ))}
    </ProgramsWrapper>
  );
};

export default Programs;
