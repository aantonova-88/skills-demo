import styled from "styled-components";
import { LEVEL_LABELS } from "../utils/levels";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  margin-bottom: 6px;
`;

const Labels = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-size: 12px;
  color: #64748b;
  text-align: center;
`;

const LevelHeader = () => {
    return (
        <Grid>
            <div></div>
            <Labels>
                {LEVEL_LABELS.map((level) => (
                    <div key={level}>{level}</div>
                ))}
            </Labels>
        </Grid>
    );
}
export default LevelHeader;