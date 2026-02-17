import type { SkillGroup, User } from "../api/types";
import { v4 as uuidv4 } from 'uuid';


export const userDb: User = {
    id: uuidv4(),
    fullName: "Anna Antonova",
    title: "Manager, Learning & Development",
    avatarUrl:
        "https://images.ctfassets.net/1d9ajmvjpuhw/gQP1wBsbS9hqiI1YxxiwI/3d8a86661d66668198749643614eda1b/single-stem-pink-peony-3.webp?w=768&h=768&fm=webp&q=75",
    lastUpdated: "Feb 18, 2026",
};

export const skillGroupsDb: SkillGroup[] = [
    {
        id: uuidv4(),
        name: "Focus skills",
        skills: [
            { id: uuidv4(), name: "Business understanding", current: 2, required: 3 },
            { id: uuidv4(), name: "Communication", current: 3, required: 3 },
            { id: uuidv4(), name: "Constructive feedback", current: 2, required: 3 },
            { id: uuidv4(), name: "Design thinking", current: 1, required: 2 },
            { id: uuidv4(), name: "Digitalization of learning", current: 4, required: 4 },
            { id: uuidv4(), name: "Problem solving", current: 3, required: 3 },
            { id: uuidv4(), name: "Remote workshops", current: 2, required: 3 },
            { id: uuidv4(), name: "Time management", current: 2, required: 3 },
        ],
    },
    {
        id: uuidv4(),
        name: "Administrative skills",
        skills: [
            { id: uuidv4(), name: "Planning", current: 2, required: 2 },
            { id: uuidv4(), name: "Reporting", current: 1, required: 2 },
            { id: uuidv4(), name: "Documentation", current: 2, required: 2 },
            { id: uuidv4(), name: "Scheduling", current: 3, required: 2 },
        ],
    },
];
