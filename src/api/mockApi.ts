import type { SkillGroup, User } from "./types";
import { skillGroupsDb, userDb } from "../mocks/db";

const API_DELAY_MS = 250;
const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getUser(): Promise<User> {
    await delay(API_DELAY_MS);
    return JSON.parse(JSON.stringify(userDb));
}

export async function getMySkillGroups(): Promise<SkillGroup[]> {
    await delay(API_DELAY_MS);
    return JSON.parse(JSON.stringify(skillGroupsDb));
}

export async function saveMySkills(updatedLevels: Record<string, number>): Promise<void> {
    await delay(API_DELAY_MS);

    skillGroupsDb.forEach((group) => {
        group.skills.forEach((skill) => {
            if (updatedLevels[skill.id] !== undefined) skill.current = updatedLevels[skill.id];
        });
    });

    userDb.lastUpdated = dateFormatter.format(new Date());
}
