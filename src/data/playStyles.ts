import type { IPlayStyle } from "../types";

const playStyles: IPlayStyle[] = [
  {
    description:
      "Performs finesse shots faster with additional curve and improved accuracy.",
    iconPath: "scoring-sm/fc24-scoring-finesse-shot",
    name: "Finesse Shot",
    relatedAttributes: ["Curve", "Finishing", "Long Shots"],
    type: "Scoring",
  },
  {
    description: "Performs chip shots faster and with greater accuracy.",
    iconPath: "scoring-sm/fc24-scoring-cheapshot",
    name: "Chip Shot",
    relatedAttributes: ["Finishing"],
    type: "Scoring",
  },
  {
    description: "Performs power shots faster and with increased speed.",
    iconPath: "scoring-sm/fc24-scoring-power-header-1",
    name: "Power Shot",
    relatedAttributes: ["Shot Power", "Long Shots"],
    type: "Scoring",
  },
  {
    description:
      "Set pieces are delivered with increased speed, curve, and accuracy. Ball trajectory preview line is somewhat longer.",
    iconPath: "scoring-sm/fc24-scoring-deadball",
    name: "Dead Ball",
    relatedAttributes: ["Shot Power", "Free Kick Accuracy"],
    type: "Scoring",
  },
  {
    description: "Performs headers with increased power and accuracy.",
    iconPath: "scoring-sm/fc24-scoring-power-header",
    name: "Power Header",
    relatedAttributes: ["Heading Accuracy"],
    type: "Scoring",
  },
  {
    description:
      "Through Passes are somewhat more accurate, swerve passes are delivered with more curve, and Precision Passes travel faster to the destination.",
    iconPath: "passing/fc24-passing-pinged-pass",
    name: "Incisive Pass",
    relatedAttributes: ["Short Passing", "Vision", "Long Passing"],
    type: "Passing",
  },
  {
    description:
      "Passes travel faster along the ground without impacting the trapping difficulty of the receiver.",
    iconPath: "passing/fc24-passing-incisive-pass",
    name: "Pinged Pass",
    relatedAttributes: ["Short Passing", "Long Passing"],
    type: "Passing",
  },
  {
    description:
      "Lob and Lofted Through Passes are more accurate, travel faster and are more difficult to intercept.",
    iconPath: "passing/fc24-passing-long-ball-pass",
    name: "Long Ball Pass",
    relatedAttributes: ["Short Passing", "Long Passing"],
    type: "Passing",
  },
  {
    description:
      "Executes difficult first-time Ground Passes with high accuracy, using backheels when contextually appropriate. Short distance Ground Passes are highly accurate.",
    iconPath: "passing/fc24-passing-tiki-taka",
    name: "Tiki Taka",
    relatedAttributes: ["Short Passing"],
    type: "Passing",
  },
  {
    description:
      "All crosses are highly accurate, travel faster and with more curve.",
    iconPath: "passing/fc24-passing-whipped-crosser",
    name: "Whipped Pass",
    relatedAttributes: ["Curve", "Crossing"],
    type: "Passing",
  },
  {
    description:
      "Increased max speed of Sprint Jockey and improved transition speed from jockey to sprint.",
    iconPath: "defending/fc24-defending-jockey",
    name: "Jockey",
    relatedAttributes: ["Defensive Awareness"],
    type: "Defending",
  },
  {
    description:
      "Increased reach when performing blocks and improved ability to make a successful block.",
    iconPath: "defending/fc24-defending-block",
    name: "Block",
    relatedAttributes: ["Interceptions", "Defensive Awareness", "Stand Tackle"],
    type: "Defending",
  },
  {
    description:
      "Increased reach and improved chances of retaining possession of the ball when performing interceptions",
    iconPath: "defending/fc24-defending-intercept",
    name: "Intercept",
    relatedAttributes: [
      "Interceptions",
      "Defensive Awareness",
      "Stand Tackle",
      "Ball Control",
    ],
    type: "Defending",
  },
  {
    description:
      "Improved chances of standing tackle success and grants the ability to stop the ball directly at their feet when performing a standing tackle.",
    iconPath: "defending/fc24-defending-anticipate",
    name: "Anticipate",
    relatedAttributes: ["Defensive Awareness", "Stand Tackle"],
    type: "Defending",
  },
  {
    description:
      "Grants the ability to stop the ball directly at their feet when performing a slide tackle.",
    iconPath: "defending/fc24-defending-side-tackle",
    name: "Slide Tackle",
    relatedAttributes: ["Defensive Awareness", "Slide Tackle"],
    type: "Defending",
  },
  {
    description: "Greater strength when performing physical tackles.",
    iconPath: "defending/fc24-defending-bruiser",
    name: "Bruiser",
    relatedAttributes: ["Defensive Awareness", "Strength"],
    type: "Defending",
  },
  {
    description:
      "Reaches a higher speed when performing Controlled Sprint and performs wide turns while dribbling with more precision.",
    iconPath: "ball-control/fc24-ball-control-technical",
    name: "Technical",
    relatedAttributes: ["Dribbling", "Ball Control"],
    type: "Ball Control",
  },
  {
    description:
      "Reaches a higher sprint speed while dribbling and has reduced chance of an error when sprinting or performing knock-ons.",
    iconPath: "ball-control/fc24-ball-control-rapid",
    name: "Rapid",
    relatedAttributes: ["Sprint Speed", "Dribbling"],
    type: "Ball Control",
  },
  {
    description:
      "Fancy passes and shots are performed with improved accuracy. Performs Flair animations when contextually appropriate.",
    iconPath: "ball-control/fc24-ball-control-flair",
    name: "Flair",
    relatedAttributes: [],
    type: "Ball Control",
  },
  {
    description:
      "Has reduced error when trapping the ball and is able to transition to dribbling faster with greater control.",
    iconPath: "ball-control/fc24-ball-control-first-touch",
    name: "First Touch",
    relatedAttributes: ["Ball Control"],
    type: "Ball Control",
  },
  {
    description:
      "Grants the ability to perform unique ground and flick Skill Moves.",
    iconPath: "ball-control/fc24-ball-control-trickster",
    name: "Trickster",
    relatedAttributes: ["Dribbling"],
    type: "Ball Control",
  },
  {
    description:
      "Keeps close control of the ball while dribbling at jog speed and can shield the ball more effectively from stronger opponents.",
    iconPath: "ball-control/fc24-ball-control-press-proven",
    name: "Press Proven",
    relatedAttributes: ["Dribbling", "Agility", "Balance"],
    type: "Ball Control",
  },
  {
    description: "Accelerates faster during Explosive Sprint.",
    iconPath: "physical/fc24-physical-quick-step",
    name: "Quick Step",
    relatedAttributes: ["Sprint Speed", "Acceleration"],
    type: "Physical",
  },
  {
    description:
      "Increases fatigue recovery during during half time and extra time. Increases duration of teammate contain and partial team press.",
    iconPath: "physical/fc24-physical-relentless",
    name: "Relentless",
    relatedAttributes: ["Stamina"],
    type: "Physical",
  },
  {
    description: `Contextually triggers "outside of the foot" passes and shots.`,
    iconPath: "physical/fc24-physical-trivela",
    name: "Trivela",
    relatedAttributes: ["Short Passing", "Finishing", "Long Passing"],
    type: "Physical",
  },
  {
    description:
      "Performs volleys with improved accuracy and has access to acrobatic volley animations.",
    iconPath: "physical/fc24-physical-acrobatic",
    name: "Acrobatic",
    relatedAttributes: ["Agility", "Volleys"],
    type: "Physical",
  },
  {
    description:
      "Performs throw-ins with increased power to cover a greater distance.",
    iconPath: "physical/fc24-physical-long-throw",
    name: "Long Throw",
    relatedAttributes: [],
    type: "Physical",
  },
  {
    description:
      "Performs higher jumps and has improved aerial physical presence.",
    iconPath: "physical/fc24-physical-aerial",
    name: "Aerial",
    relatedAttributes: ["Strength", "Heading Accuracy"],
    type: "Physical",
  },
  {
    description:
      "Goalkeeper can target players further away with thrown passes. BAG players will have increased reach and handling closer to the end of the match.",
    iconPath: "goal-keeper/fc24-goalkeeper-fast-throw",
    name: "Far Throw",
    relatedAttributes: ["GK Diving", "Reactions", "GK Handling"],
    type: "Goalkeeper",
  },
  {
    description:
      "Goalkeeper will perform saves with their feet more frequently, allowing for more saves on close-range shots. BAG players will have increased reactions and speed in 1-on-1 situations.",
    iconPath: "goal-keeper/fc24-goalkeeper-footwork",
    name: "Footwork",
    relatedAttributes: [
      "Sprint Speed",
      "Reactions",
      "Acceleration",
      "GK Reflexes",
    ],
    type: "Goalkeeper",
  },
  {
    description:
      "Goalkeeper will try to intercept a cross if they can get to it slightly before the opponent. BAG players will have increased reflexes and reactions during opposing set pieces.",
    iconPath: "goal-keeper/fc24-goalkeeper-cross-catcher",
    name: "Cross Claimer",
    relatedAttributes: ["GK Positioning", "GK Handling"],
    type: "Goalkeeper",
  },
  {
    description:
      "Goalkeeper is more aggressive when coming out of the box to gather over-the-top balls or long through balls. BAG players will have increased speed when running.",
    iconPath: "goal-keeper/fc24-goalkeeper-rush-out",
    name: "Rush Out",
    relatedAttributes: ["Sprint Speed", "GK Posiotioning", "Acceleration"],
    type: "Goalkeeper",
  },
  {
    description:
      "BAG players are more effective at saving shots from outside the box with increased reach and jumping.",
    iconPath: "goal-keeper/fc24-goalkeeper-fake-reach",
    name: "Far Reach",
    relatedAttributes: ["GK Diving", "GK Handling"],
    type: "Goalkeeper",
  },
  {
    description:
      "BAG players have increased reflexes and reactions when saving shots from inside the box.",
    iconPath: "goal-keeper/fc24-goalkeeper-quick-reflex",
    name: "Quick Reflexes",
    relatedAttributes: ["Reactions", "GK Reflexes"],
    type: "Goalkeeper",
  },
];

export default playStyles;
