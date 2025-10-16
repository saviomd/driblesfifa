import { playStyleTypes } from "src/data";

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
  type: typeof playStyleTypes[keyof typeof playStyleTypes];
}

export interface IReputationLevel {
  aiSquadRating: number;
  facilitiesBudget: number;
  fans: number;
  repGroup: number;
  repLevel: number;
  repTier: string;
  stadiumTierReward?: number;
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

export type StarCountType = 1 | 2 | 3 | 4 | 5;
