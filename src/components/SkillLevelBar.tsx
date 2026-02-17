import styled from "styled-components";
import { MAX_LEVEL } from "../utils/levels";
import type { SkillLevels } from "../api/types";

const Bar = styled.div`
  position: relative;
  height: 32px;
`;

const Track = styled.div`
  position: absolute;
  top: 14px;
  left: 0;
  right: 0;
  height: 4px;
  background: #e5e7eb;
`;

const Fill = styled.div<{ value: number }>`
  position: absolute;
  top: 14px;
  left: 0;
  height: 4px;
  background: #2563eb;
  width: ${(p) => (p.value / MAX_LEVEL) * 100}%;
`;

const Tick = styled.div<{ index: number }>`
  position: absolute;
  top: 8px;
  bottom: 0;
  width: 1px;
  background: #e5e7eb;
  left: ${(p) => (p.index / MAX_LEVEL) * 100}%;
`;

const Marker = styled.div<{ value: number; color: string; $filled?: boolean }>`
  position: absolute;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${(p) => p.color};
  background: ${(p) => (p.$filled ? p.color : "white")};
  transform: translateX(-50%);
  left: ${(p) => (p.value / MAX_LEVEL) * 100}%;
`;


const SkillLevelBar = ({ current, required }: SkillLevels) => {
    return (
        <Bar>
            <Track />
            <Fill value={current} />

            {Array.from({ length: MAX_LEVEL + 1 }, (_, i) => i).map((i) => (
                <Tick key={i} index={i} />
            ))}

            <Marker value={current} color="#2563eb" $filled />

            <Marker value={required} color="#a855f7" />
        </Bar>
    );
}


export default SkillLevelBar;