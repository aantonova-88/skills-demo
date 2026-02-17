import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #64748b;
  font-size: 12px;
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`;

const Dot = styled.span<{ level: "current" | "required" }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background: ${(props) => (props.level === "current" ? "#2563eb" : "transparent")};

  border: 2px solid ${(props) => (props.level === "current" ? "#2563eb" : "#a855f7")};
`;

const Legend = () => {
    return (
        <Wrap>
            <Item>
                <Dot level="current" />
                Current skill level
            </Item>
            <Item>
                <Dot level="required" />
                Required level
            </Item>
        </Wrap>
    );
}

export default Legend;