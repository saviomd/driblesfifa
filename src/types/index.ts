export interface ICelebration {
  command: string;
  name: string;
  type: CelebrationType;
}

export interface IPage {
  icon: string;
  title: string;
}

export interface IPlayStyle {
  description: string;
  iconPath: string;
  name: string;
  relatedAttributes: string[];
  type: PlayStyleType;
}

export interface IReputationLevel {
  fans: number;
  level: number;
  name: string;
  rewards?: string[];
  tier: number;
}

export interface ISkillMove {
  command: string;
  name: string;
  stars: StarCountType;
}

export type CelebrationType =
  | "Basics"
  | "Running Moves"
  | "Finishing Moves"
  | "Pro Unlockables";

export type DivisionColorsType = "info" | "success" | "warning";

export type HeadingLevelsType = 1 | 2 | 3 | 4 | 5 | 6;

export type PlayStyleType =
  | "Ball Control"
  | "Defending"
  | "Goalkeeper"
  | "Passing"
  | "Physical"
  | "Scoring";

export type StarCountType = 1 | 2 | 3 | 4 | 5;
