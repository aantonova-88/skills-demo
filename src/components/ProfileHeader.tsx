import styled from "styled-components";
import type { User } from "../api/types";

interface ProfileHeaderProps {
    user: User | null;
    editMode: boolean;
    onEdit: () => void;
    onSave: () => void;
    onCancel: () => void;
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
`;

const Title = styled.div`
  margin-top: 2px;
  color: #64748b;
  font-size: 13px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Meta = styled.div`
  color: #64748b;
  font-size: 12px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: white;
  cursor: pointer;

  &:hover {
    background: #f8fafc;
  }
`;

const PrimaryButton = styled(Button)`
  border-color: #2563eb;
  background: #2563eb;
  color: white;

  &:hover {
    background: #1d4ed8;
  }
`;




const ProfileHeader = ({
    user,
    editMode,
    onEdit,
    onSave,
    onCancel,
}: ProfileHeaderProps) => {
    return (
        <Wrap>
            <Left>
                <Avatar src={user?.avatarUrl} alt={user?.fullName} />
                <div>
                    <Name>{user?.fullName}</Name>
                    <Title>{user?.title}</Title>
                </div>
            </Left>

            <Right>
                <Meta>
                    <div style={{ marginBottom: 6 }}>Last updated: {user?.lastUpdated}</div>
                </Meta>

                {!editMode ? (
                    <PrimaryButton onClick={onEdit}>Edit your skills</PrimaryButton>
                ) : (
                    <>
                        <PrimaryButton onClick={onSave}>Save</PrimaryButton>
                        <Button onClick={onCancel}>Cancel</Button>
                    </>
                )}

            </Right>
        </Wrap>
    );
}
export default ProfileHeader;