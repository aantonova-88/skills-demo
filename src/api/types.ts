export interface User {
    id: string;
    fullName: string;
    title: string;
    avatarUrl: string;
    lastUpdated: string;
}

export interface Skill {
    id: string;
    name: string;
}

export interface SkillLevels {
    current: number;
    required: number;
}

export interface MySkill extends Skill, SkillLevels { }


export interface SkillGroup {
    id: string;
    name: string;
    skills: MySkill[];
}



