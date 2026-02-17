import styled from "styled-components";
import type { SkillGroup } from "../api/types";
import SkillRow from "./SkillRow";
import LevelHeader from "./LevelHeader";

interface SkillGroupBlockProps {
    group: SkillGroup;
    isOpen: boolean;
    onToggle: () => void;
    editMode: boolean;
    draft: Record<string, number>;
    onChangeDraft: (skillId: string, value: number) => void;
}


const GroupHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #f8fafc;
  cursor: pointer;
`;

const ExpandIcon = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  transform: rotate(${(props) => (props.$isOpen ? "90deg" : "0deg")});
  transition: transform 120ms ease;
`;

const GroupBody = styled.div`
  padding: 10px 12px 2px 12px;
`;



const SkillGroupBlock = ({
    group,
    isOpen,
    onToggle,
    editMode,
    draft,
    onChangeDraft,
}: SkillGroupBlockProps) => {
    return (
        <div style={{ marginBottom: 12 }}>
            <GroupHeader onClick={onToggle} type="button">
                <ExpandIcon $isOpen={isOpen}>▶</ExpandIcon>
                <div style={{ fontWeight: 700 }}>
                    {group.name} ({group.skills.length})
                </div>
            </GroupHeader>

            {isOpen && (
                <GroupBody>
                    <LevelHeader />
                    {group.skills.map((skill) => (
                        <SkillRow
                            key={skill.id}
                            skill={skill}
                            editMode={editMode}
                            draftValue={draft[skill.id] ?? skill.current}
                            onChange={(value) => onChangeDraft(skill.id, value)}
                        />
                    ))}
                </GroupBody>
            )}
        </div>
    );
}


export default SkillGroupBlock;