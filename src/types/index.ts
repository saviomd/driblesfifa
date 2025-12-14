import {
  attributeNames,
  perkNames,
  playStyleTypes,
  quickChatCategories,
} from "../data";

export interface IArchetype {
  inspiredBy: string;
  keyAttributes: typeof attributeNames[keyof typeof attributeNames][];
  name: string;
  signaturePerks: typeof perkNames[keyof typeof perkNames][];
  signaturePlayStyles: IPlayStyle[];
  specializations: ISpecialization[];
  type: string;
}

export interface ICelebration {
  command: string;
  name: string;
  type: CelebrationType;
}

export interface IPage {
  icon: string;
  title: string;
}

export interface IPlayerLevel {
  axpNeeded: number;
  level: number;
  rewards: {
    ap: number;
    cardUpgrade?: 1 | 2 | 3 | 4 | 5;
    newPlayStyleSlot?: boolean;
    newSignaturePerk?: boolean;
    signaturePlayStyleUpgrade?: boolean;
  };
}

export interface IPlayStyle {
  description: string;
  iconPath: string;
  name: string;
  type: typeof playStyleTypes[keyof typeof playStyleTypes];
  unlockCriteria: {
    [key: typeof attributeNames[keyof typeof attributeNames]]: 75 | 80 | 85;
  };
}

export interface IPlayStylePlus {
  iconPath: string;
  name: string;
}

export interface IQuickChat {
  category: typeof quickChatCategories[keyof typeof quickChatCategories];
  messages: {
    command: string;
    name: string;
  }[];
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

export interface ISpecialization {
  name: string;
  newSignaturePlayStyle: IPlayStylePlus;
  unlockCriteria: { [key: string]: 90 | 92 };
}

export type CelebrationType =
  | "Basics"
  | "Running Moves"
  | "Finishing Moves"
  | "Pro Unlockables";

export type DivisionColorsType = "info" | "success" | "warning";

export type HeadingLevelsType = 1 | 2 | 3 | 4 | 5 | 6;

export type StarCountType = 1 | 2 | 3 | 4 | 5;
