export interface Project {
  title: string;
  description: string;
  tags: { label: string; color: 'green' | 'blue' | 'yellow' }[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Skill {
  label: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  color: 'green' | 'blue' | 'yellow';
  skills: Skill[];
}
