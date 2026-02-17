import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { getUser, getMySkillGroups, saveMySkills } from "../api/mockApi";
import type { SkillGroup, User } from "../api/types";
import ProfileHeader from "../components/ProfileHeader";
import SkillGroupBlock from "../components/SkillGroupBlock";
import Legend from "../components/Legend";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";

const Container = styled.div`
  max-width: 1100px;
  margin: 28px auto;
  font-family: sans-serif;
  padding: 0 16px;
`;

const Header = styled.div`
  font-size: 20px; 
  font-weight: 800;
`;

const SkillsTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 14px 0 10px;
`;

const YourSkillsPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [skillGroups, setSkillGroups] = useState<SkillGroup[]>([]);
    const [editMode, setEditMode] = useState(false);
    const [draft, setDraft] = useState<Record<string, number>>({});
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setIsLoading(true);
            setError(null);
            try {
                const [user, skillGroups] = await Promise.all([getUser(), getMySkillGroups()]);
                setUser(user);
                setSkillGroups(skillGroups);

                setOpenGroups(skillGroups[0] ? { [skillGroups[0].id]: true } : {});

            } catch {
                setError("Failed to load skills data.");
            }
            finally {
                setIsLoading(false);
            }
        }
        load();
    }, []);

    const flatSkills = useMemo(
        () => skillGroups.flatMap((g) => g.skills),
        [skillGroups]
    );

    const startEdit = () => {
        const initial: Record<string, number> = {};
        flatSkills.forEach((s) => (initial[s.id] = s.current));
        setDraft(initial);
        setEditMode(true);
    }

    async function save() {
        try {
            await saveMySkills(draft);
            const [user, groups] = await Promise.all([getUser(), getMySkillGroups()]);
            setUser(user);
            setSkillGroups(groups);
            setEditMode(false);
        } catch {
            setError("Failed to save skills level.");
        }

    }

    const cancel = () => {
        setEditMode(false);
        setDraft({});
    }

    const handleToggle = (id: string) => setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
    const handleDraftChange = (skillId: string, value: number) => setDraft(prev => ({ ...prev, [skillId]: value }));

    if (isLoading) return <div style={{ padding: 24 }}>Loading…</div>;

    if (error) {
        return (
            <ErrorState errorMessage={error} />
        );
    }

    return (
        <Container>
            <ProfileHeader
                user={user}
                editMode={editMode}
                onEdit={startEdit}
                onSave={save}
                onCancel={cancel}
            />

            <SkillsTitleRow>
                <Header>Your skills</Header>
                <Legend />
            </SkillsTitleRow>

            {skillGroups.map((group) => (
                <SkillGroupBlock
                    key={group.id}
                    group={group}
                    isOpen={!!openGroups[group.id]}
                    onToggle={() => handleToggle(group.id)}
                    editMode={editMode}
                    draft={draft}
                    onChangeDraft={(skillId, value) => handleDraftChange(skillId, value)}
                />
            ))}
            {skillGroups.length === 0 && <EmptyState />}
        </Container>
    );
}

export default YourSkillsPage;