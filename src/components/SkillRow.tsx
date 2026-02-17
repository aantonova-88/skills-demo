import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";
import SkillLevelBar from "./SkillLevelBar";
import type { MySkill } from "../api/types";
import { MAX_LEVEL } from "../utils/levels";

interface SkillRowProps {
    skill: MySkill;
    editMode: boolean;
    draftValue?: number;
    onChange: (value: number) => void;
}

const SkillBox = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  align-items: center;
  padding: 8px 0;
`;


const SkillRow = ({ skill, editMode, draftValue, onChange }: SkillRowProps) => {
    return (
        <SkillBox>
            <div>{skill.name}</div>
            {editMode ? (
                <Slider
                    min={0}
                    max={MAX_LEVEL}
                    step={1}
                    value={draftValue}
                    onChange={(value) => onChange(value as number)}
                />
            ) : (
                <SkillLevelBar
                    current={skill.current}
                    required={skill.required}
                />
            )}
        </SkillBox>
    );
}

export default SkillRow;