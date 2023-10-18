import type { IPlayStyle } from "../types";

const playStyles: IPlayStyle[] = [
  {
    description:
      "Performs finesse shots faster with additional curve and improved accuracy.",
    name: "Finesse Shot",
    relatedAttributes: ["Curve", "Finishing", "Long Shots"],
    type: "Scoring",
  },
  {
    description: "Performs chip shots faster and with greater accuracy.",
    name: "Chip Shot",
    relatedAttributes: ["Finishing"],
    type: "Scoring",
  },
  {
    description: "Performs power shots faster and with increased speed.",
    name: "Power Shot",
    relatedAttributes: ["Shot Power", "Long Shots"],
    type: "Scoring",
  },
  {
    description:
      "Set pieces are delivered with increased speed, curve, and accuracy. Ball trajectory preview line is somewhat longer.",
    name: "Dead Ball",
    relatedAttributes: ["Shot Power", "Free Kick Accuracy"],
    type: "Scoring",
  },
  {
    description: "Performs headers with increased power and accuracy.",
    name: "Power Header",
    relatedAttributes: ["Heading Accuracy"],
    type: "Scoring",
  },
  {
    description:
      "Through Passes are somewhat more accurate, swerve passes are delivered with more curve, and Precision Passes travel faster to the destination.",
    name: "Incisive Pass",
    relatedAttributes: ["Short Passing", "Vision", "Long Passing"],
    type: "Passing",
  },
  {
    description:
      "Passes travel faster along the ground without impacting the trapping difficulty of the receiver.",
    name: "Pinged Pass",
    relatedAttributes: ["Short Passing", "Long Passing"],
    type: "Passing",
  },
  {
    description:
      "Lob and Lofted Through Passes are more accurate, travel faster and are more difficult to intercept.",
    name: "Long Ball Pass",
    relatedAttributes: ["Short Passing", "Long Passing"],
    type: "Passing",
  },
  {
    description:
      "Executes difficult first-time Ground Passes with high accuracy, using backheels when contextually appropriate. Short distance Ground Passes are highly accurate.",
    name: "Tiki Taka",
    relatedAttributes: ["Short Passing"],
    type: "Passing",
  },
  {
    description:
      "All crosses are highly accurate, travel faster and with more curve.",
    name: "Whipped Pass",
    relatedAttributes: ["Curve", "Crossing"],
    type: "Passing",
  },
  {
    description:
      "Increased max speed of Sprint Jockey and improved transition speed from jockey to sprint.",
    name: "Jockey",
    relatedAttributes: ["Defensive Awareness"],
    type: "Defending",
  },
  {
    description:
      "Increased reach when performing blocks and improved ability to make a successful block.",
    name: "Block",
    relatedAttributes: ["Interceptions", "Defensive Awareness", "Stand Tackle"],
    type: "Defending",
  },
  {
    description:
      "Increased reach and improved chances of retaining possession of the ball when performing interceptions",
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
    name: "Anticipate",
    relatedAttributes: ["Defensive Awareness", "Stand Tackle"],
    type: "Defending",
  },
  {
    description:
      "Grants the ability to stop the ball directly at their feet when performing a slide tackle.",
    name: "Slide Tackle",
    relatedAttributes: ["Defensive Awareness", "Slide Tackle"],
    type: "Defending",
  },
  {
    description: "Greater strength when performing physical tackles.",
    name: "Bruiser",
    relatedAttributes: ["Defensive Awareness", "Strength"],
    type: "Defending",
  },
  {
    description:
      "Reaches a higher speed when performing Controlled Sprint and performs wide turns while dribbling with more precision.",
    name: "Technical",
    relatedAttributes: ["Dribbling", "Ball Control"],
    type: "Ball Control",
  },
  {
    description:
      "Reaches a higher sprint speed while dribbling and has reduced chance of an error when sprinting or performing knock-ons.",
    name: "Rapid",
    relatedAttributes: ["Sprint Speed", "Dribbling"],
    type: "Ball Control",
  },
  {
    description:
      "Fancy passes and shots are performed with improved accuracy. Performs Flair animations when contextually appropriate.",
    name: "Flair",
    relatedAttributes: [],
    type: "Ball Control",
  },
  {
    description:
      "Has reduced error when trapping the ball and is able to transition to dribbling faster with greater control.",
    name: "First Touch",
    relatedAttributes: ["Ball Control"],
    type: "Ball Control",
  },
  {
    description:
      "Grants the ability to perform unique ground and flick Skill Moves.",
    name: "Trickster",
    relatedAttributes: ["Dribbling"],
    type: "Ball Control",
  },
  {
    description:
      "Keeps close control of the ball while dribbling at jog speed and can shield the ball more effectively from stronger opponents.",
    name: "Press Proven",
    relatedAttributes: ["Dribbling", "Agility", "Balance"],
    type: "Ball Control",
  },
  {
    description: "Accelerates faster during Explosive Sprint.",
    name: "Quick Step",
    relatedAttributes: ["Sprint Speed", "Acceleration"],
    type: "Physical",
  },
  {
    description:
      "Increases fatigue recovery during during half time and extra time. Increases duration of teammate contain and partial team press.",
    name: "Relentless",
    relatedAttributes: ["Stamina"],
    type: "Physical",
  },
  {
    description: `Contextually triggers "outside of the foot" passes and shots.`,
    name: "Trivela",
    relatedAttributes: ["Short Passing", "Finishing", "Long Passing"],
    type: "Physical",
  },
  {
    description:
      "Performs volleys with improved accuracy and has access to acrobatic volley animations.",
    name: "Acrobatic",
    relatedAttributes: ["Agility", "Volleys"],
    type: "Physical",
  },
  {
    description:
      "Performs throw-ins with increased power to cover a greater distance.",
    name: "Long Throw",
    relatedAttributes: [],
    type: "Physical",
  },
  {
    description:
      "Performs higher jumps and has improved aerial physical presence.",
    name: "Aerial",
    relatedAttributes: ["Strength", "Heading Accuracy"],
    type: "Physical",
  },
  {
    description:
      "Goalkeeper can target players further away with thrown passes. BAG players will have increased reach and handling closer to the end of the match.",
    name: "Far Throw",
    relatedAttributes: ["GK Diving", "Reactions", "GK Handling"],
    type: "Goalkeeper",
  },
  {
    description:
      "Goalkeeper will perform saves with their feet more frequently, allowing for more saves on close-range shots. BAG players will have increased reactions and speed in 1-on-1 situations.",
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
    name: "Cross Claimer",
    relatedAttributes: ["GK Positioning", "GK Handling"],
    type: "Goalkeeper",
  },
  {
    description:
      "Goalkeeper is more aggressive when coming out of the box to gather over-the-top balls or long through balls. BAG players will have increased speed when running.",
    name: "Rush Out",
    relatedAttributes: ["Sprint Speed", "GK Posiotioning", "Acceleration"],
    type: "Goalkeeper",
  },
  {
    description:
      "BAG players are more effective at saving shots from outside the box with increased reach and jumping.",
    name: "Far Reach",
    relatedAttributes: ["GK Diving", "GK Handling"],
    type: "Goalkeeper",
  },
  {
    description:
      "BAG players have increased reflexes and reactions when saving shots from inside the box.",
    name: "Quick Reflexes",
    relatedAttributes: ["Reactions", "GK Reflexes"],
    type: "Goalkeeper",
  },
];

export default playStyles;
