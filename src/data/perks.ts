import type { IPerk } from "../types";

const perks: IPerk[] = [
  {
    description:
      "Increases the players normal pass accuracy and speed (Short Pass + Long Pass) and grants players the Swerve and Flair traits and 5 star weak foot ability.",
    name: "Precision Pass",
    type: "Chance Creation",
  },
  {
    description: "Teammates can trap your passes easier.",
    name: "Light Passes",
    type: "Chance Creation",
  },
  {
    description:
      "Increases crossing accuracy and ability when performing a cross and grants the player the Swerve, Flair and Early Crosser traits and a 5 star weak foot ability.",
    name: "Pinpoint cross",
    type: "Chance Creation",
  },
  {
    description:
      "Increases a player's dribbling and skill move abilities when dribbling with a ball while also granting them the Flair trait.",
    name: "Skilled dribbler",
    type: "Chance Creation",
  },
  {
    description:
      "Increases your players abilities during set pieces. Grants you the Giant Throw In, Powerful Driven Free Kicks and Set Play Specialist Traits.",
    name: "Set Piece Specialist",
    type: "Chance Creation",
  },
  {
    description:
      "Boost Passing attributes for a short time (15 mins) after assisting a goal and grants the player the Swerve Pass trait.",
    name: "Assist Streak",
    type: "Chance Creation",
  },
  {
    description: "Grants the Second Wind and Solid Player Traits.",
    name: "Tireless runner",
    type: "Chance Creation",
  },
  {
    description:
      "Increases your ball control, acceleration, and sprint speed. The boost can kick in as the player approaches the ball (e.g. running onto a Through Pass). Grants the flair trait.",
    name: "Active First Touch",
    type: "Chance Creation",
  },
  {
    description:
      "Increases through pass and lofted through pass accuracy (Vision). Grants the player the Swerve and Flair traits and 5 star weak foot ability.",
    name: "Threaded Pass",
    type: "Chance Creation",
  },
  {
    description:
      "Increases your accuracy and power from long distance shots. Grants you the Finesse Shot and Outside Foot Shot traits and 5 star weak foot ability.",
    name: "Distance Shooter",
    type: "Attacking",
  },
  {
    description: "Boost Shooting from inside the box.",
    name: "Poacher",
    type: "Attacking",
  },
  {
    description:
      "Shooting attributes boosted for a short time (15 mins) after you score a goal. Grants you the Finesse Shot, Outside Foot Shot and Power Header Traits and increases your weak foot ability.",
    name: "Hot Streak",
    type: "Attacking",
  },
  {
    description:
      "Increases your finishing and heading ability during first time shots or headers. Grants the Finesse Shot, Flair, Outside Foot Shot and Power Header Traits and increases your weak foot ability.",
    name: "First Time Shot",
    type: "Attacking",
  },
  {
    description:
      "Shooting attributes boosted for a short time (15 mins) after conceding a goal. Grants the Finesse Shot, Outside Foot Shot and Power Header Traits and increases your weak foot ability.",
    name: "Quick Reply",
    type: "Attacking",
  },
  {
    description:
      "Increases your Heading attributes during Set Pieces (Free Kick, Corner Kick, Throw In) for 10 seconds after the ball is in play and grants you the Power Header Trait.",
    name: "Set Piece Beacon",
    type: "Attacking",
  },
  {
    description:
      "Increases your shooting attributes during the last 15 minutes and extra time. Grants the Finesse Shot, Outside Foot Shot and Power Header Traits and increases your weak foot ability.",
    name: "Clutch Finisher",
    type: "Attacking",
  },
  {
    description: "Improves the ability of the player to intercept the ball.",
    name: "Interceptor",
    type: "Defensive",
  },
  {
    description: "Boost Tackling ability when close to the dribbler.",
    name: "Ball Winner",
    type: "Defensive",
  },
  {
    description:
      "Increases the defending attributes in final 15 minutes + extra time of a match.",
    name: "Defensive Closer",
    type: "Defensive",
  },
  {
    description:
      "Defending attributes boosted for short time (15 mins) after your team concedes a goal.",
    name: "Cool Head",
    type: "Defensive",
  },
  {
    description:
      "Boosted strength, ball control, and jumping when jostling, shielding, or heading the ball.",
    name: "Physical Strength",
    type: "Defensive",
  },
  {
    description:
      "Defending attributes boosted for a short time (15 mins) after your team scores a goal.",
    name: "Lock Down",
    type: "Defensive",
  },
  {
    description:
      "Increases your defending attributes when you are the last player back.",
    name: "Last Defender",
    type: "Defensive",
  },
  {
    description:
      "Defender is quicker to recover and chase back when possession changes.",
    name: "Chase Down",
    type: "Defensive",
  },
  {
    description:
      "GK attributes boosted in final 15 minutes + extra time of a match.",
    name: "Clutch Save",
    type: "Goalkeeper",
  },
  {
    description: "GK abilities boosted in one vs one situations.",
    name: "GK One on One",
    type: "Goalkeeper",
  },
  {
    description:
      "GK attributes boosted during Set Pieces (Penalty Kick, Free Kick, Corner Kick, Throw In) for 10 seconds after the ball is in play. + GK Long Throw trait + GK Flat Kick trait.",
    name: "Set Piece Expert",
    type: "Goalkeeper",
  },
  {
    description: "Good at saving Distance Shots.",
    name: "GK Far Reach",
    type: "Goalkeeper",
  },
  {
    description: "GK speed boosted when GK is sprinting or rushing.",
    name: "Fast Rush",
    type: "Goalkeeper",
  },
  {
    description: "GK reflexes and reactions boosted when saving.",
    name: "Quick Reflex",
    type: "Goalkeeper",
  },
];

export default perks;
