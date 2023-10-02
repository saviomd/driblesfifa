import type { IReputationLevel } from "../types";

const reputationLevels: IReputationLevel[] = [
  {
    fans: 0,
    level: 1,
    name: "Hometown Hero",
    rewards: ["Tier 1 Stadium", "Default Clubs Bundle"],
  },
  {
    fans: 1,
    level: 2,
    name: "Hometown Hero",
    rewards: null,
  },
  {
    fans: 2,
    level: 3,
    name: "Hometown Hero",
    rewards: ["Golden Falcon", "Golden Falcon Tifo"],
  },
  {
    fans: 3.5,
    level: 4,
    name: "Up and Coming",
    rewards: ["Tier 2 Stadium", "The Depths", "The Depths Tifo"],
  },
  {
    fans: 5,
    level: 5,
    name: "Up and Coming",
    rewards: ["Creepy Crawlers", "Creep Crawlers Tifo"],
  },
  {
    fans: 7.5,
    level: 6,
    name: "Up and Coming",
    rewards: ["The North", "The North Tifo"],
  },
  {
    fans: 10,
    level: 7,
    name: "Well Known",
    rewards: ["The Jungle", "The Jungle Tifo"],
  },
  {
    fans: 12.5,
    level: 8,
    name: "Well Known",
    rewards: ["Tier 3 Stadium", "The Wilds", "The Wilds Tifo"],
  },
  {
    fans: 25,
    level: 9,
    name: "World Renowned",
    rewards: null,
  },
  {
    fans: 50,
    level: 10,
    name: "World Renowned",
    rewards: null,
  },
];

export default reputationLevels;
