import type { IReputationLevel } from "../types";

const reputationLevels: IReputationLevel[] = [
  {
    fans: 0,
    level: 1,
    name: "Hometown Hero",
    rewards: ["Tier 1 Stadium", "Default Clubs Bundle"],
    tier: 0,
  },
  {
    fans: 1,
    level: 2,
    name: "Hometown Hero",
    rewards: null,
    tier: 0,
  },
  {
    fans: 2,
    level: 3,
    name: "Hometown Hero",
    rewards: ["Golden Falcon", "Golden Falcon Tifo"],
    tier: 0,
  },
  {
    fans: 3.5,
    level: 4,
    name: "Up and Coming",
    rewards: ["Tier 2 Stadium", "The Depths", "The Depths Tifo"],
    tier: 1,
  },
  {
    fans: 5,
    level: 5,
    name: "Up and Coming",
    rewards: ["Creepy Crawlers", "Creep Crawlers Tifo"],
    tier: 1,
  },
  {
    fans: 7.5,
    level: 6,
    name: "Up and Coming",
    rewards: ["The North", "The North Tifo"],
    tier: 1,
  },
  {
    fans: 10,
    level: 7,
    name: "Well Known",
    rewards: ["The Jungle", "The Jungle Tifo"],
    tier: 2,
  },
  {
    fans: 12.5,
    level: 8,
    name: "Well Known",
    rewards: ["Tier 3 Stadium", "The Wilds", "The Wilds Tifo"],
    tier: 2,
  },
  {
    fans: 25,
    level: 9,
    name: "World Renowned",
    rewards: null,
    tier: 3,
  },
  {
    fans: 50,
    level: 10,
    name: "World Renowned",
    rewards: null,
    tier: 3,
  },
];

export default reputationLevels;
