export interface ICelebration {
  command: string;
  name: string;
  type: CelebrationType;
}

export interface IDivision {
  number: number;
  pointsHold?: number;
  pointsPromotion?: number;
  pointsTitle: number;
}

export interface IPage {
  icon: string;
  title: string;
}

export interface IPerk {
  description: string;
  name: string;
  type: PerkType;
}

export interface ISkillMove {
  command: string;
  name: string;
  stars: StarCountType;
}

export type CelebrationType = "Basic" | "Running Moves" | "Finishing Moves";

export type DivisionColorsType = "info" | "success" | "warning";

export type HeadingLevelsType = 1 | 2 | 3 | 4 | 5 | 6;

export type PerkType =
  | "Attacking"
  | "Chance Creation"
  | "Defensive"
  | "Goalkeeper";

export type StarCountType = 1 | 2 | 3 | 4 | 5;
