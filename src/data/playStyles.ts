import type { IPlayStyle } from "../types";

const playStyles: IPlayStyle[] = [
  {
    description:
      "Performs finesse shots faster with additional curve and improved accuracy.",
    name: "Finesse Shot",
    type: "Scoring",
  },
  {
    description: "Performs chip shots faster and with greater accuracy.",
    name: "Chip Shot",
    type: "Scoring",
  },
  {
    description: "Performs power shots faster and with increased speed.",
    name: "Power Shot",
    type: "Scoring",
  },
  {
    description:
      "Set pieces are delivered with increased speed, curve, and accuracy. Ball trajectory preview line is somewhat longer.",
    name: "Dead Ball",
    type: "Scoring",
  },
  {
    description: "Performs headers with increased power and accuracy.",
    name: "Power Header",
    type: "Scoring",
  },
  {
    description:
      "Through Passes are somewhat more accurate, swerve passes are delivered with more curve, and Precision Passes travel marginally faster to the destination.",
    name: "Incisive Pass",
    type: "Passing",
  },
  {
    description:
      "Passes travel faster along the ground without impacting the trapping difficulty of the receiver.",
    name: "Pinged Pass",
    type: "Passing",
  },
  {
    description:
      "Lob and Lofted Through Passes are more accurate, travel faster and are more difficult to intercept.",
    name: "Long Ball Pass",
    type: "Passing",
  },
  {
    description:
      "Executes difficult first-time Ground Passes with high accuracy, using backheels when contextually appropriate. Short distance Ground Passes are highly accurate.",
    name: "Tiki Taka",
    type: "Passing",
  },
  {
    description:
      "All crosses are highly accurate, travel faster and with more curve.",
    name: "Whipped Pass",
    type: "Passing",
  },
  {
    description:
      "Increased reach when performing blocks and improved ability to make a successful block.",
    name: "Block",
    type: "Defending",
  },
  {
    description: "Greater strength when performing physical tackles.",
    name: "Bruiser",
    type: "Defending",
  },
  {
    description:
      "Increased reach and improved chances of retaining possession of the ball when performing interceptions",
    name: "Intercept",
    type: "Defending",
  },
  {
    description:
      "Increased max speed of Sprint Jockey and improved transition speed from jockey to sprint.",
    name: "Jockey",
    type: "Defending",
  },
  {
    description:
      "Grants the ability to stop the ball directly at their feet when performing a slide tackle.",
    name: "Slide Tackle",
    type: "Defending",
  },
  {
    description:
      "Improved chances of standing tackle success and grants the ability to stop the ball directly at their feet when performing a standing tackle.",
    name: "Anticipate",
    type: "Defending",
  },
  {
    description:
      "Reaches a higher speed when performing Controlled Sprint and performs wide turns while dribbling with more precision.",
    name: "Technical",
    type: "Ball Control",
  },
  {
    description:
      "Reaches a higher sprint speed while dribbling and has reduced chance of an error when sprinting or performing knock-ons.",
    name: "Rapid",
    type: "Ball Control",
  },
  {
    description:
      "Fancy passes and shots are performed with improved accuracy. Performs Flair animations when contextually appropriate.",
    name: "Flair",
    type: "Ball Control",
  },
  {
    description:
      "Has reduced error when trapping the ball and is able to transition to dribbling faster with greater control.",
    name: "First Touch",
    type: "Ball Control",
  },
  {
    description:
      "Grants the ability to perform unique ground and flick Skill Moves.",
    name: "Trickster",
    type: "Ball Control",
  },
  {
    description:
      "Keeps close control of the ball while dribbling at jog speed and can shield the ball more effectively from stronger opponents.",
    name: "Press Proven",
    type: "Ball Control",
  },
  {
    description:
      "Performs volleys with improved accuracy and has access to acrobatic volley animations.",
    name: "Acrobatic",
    type: "Physical",
  },
  {
    description:
      "Performs higher jumps and has improved aerial physical presence.",
    name: "Aerial",
    type: "Physical",
  },
  {
    description: `Contextually triggers "outside of the foot" passes and shots with reduced error.`,
    name: "Trivela",
    type: "Physical",
  },
  {
    description:
      "Reduces fatigue loss during play and increases fatigue recovery during half time.",
    name: "Relentless",
    type: "Physical",
  },
  {
    description: "Accelerates faster during Explosive Sprint.",
    name: "Quick Step",
    type: "Physical",
  },
  {
    description:
      "Performs throw-ins with increased power to cover a greater distance.",
    name: "Long Throw",
    type: "Physical",
  },
  {
    description:
      "General effect: Goalkeeper can target players further away with thrown passes. BAG players will have increased reach and handling closer to the end of the match.",
    name: "Far Throw",
    type: "Goalkeeper",
  },
  {
    description:
      "General effect: Goalkeeper will perform saves with their feet more frequently, allowing for more saves on close-range shots. BAG players will have increased reactions and speed in 1-on-1 situations.",
    name: "Footwork",
    type: "Goalkeeper",
  },
  {
    description:
      "General effect: Goalkeeper will try to intercept a cross if they can get to it slightly before the opponent. BAG players will have increased reflexes and reactions during opposing set pieces.",
    name: "Cross Claimer",
    type: "Goalkeeper",
  },
  {
    description:
      "General effect: Goalkeeper is more aggressive when coming out of the box to gather over-the-top balls or long through balls. BAG players will have increased speed when running.",
    name: "Rush Out",
    type: "Goalkeeper",
  },
  {
    description:
      "BAG players are more effective at saving shots from outside the box with increased reach and jumping.",
    name: "Far Reach",
    type: "Goalkeeper",
  },
  {
    description:
      "BAG players have increased reflexes and reactions when saving shots from inside the box.",
    name: "Quick Reflexes",
    type: "Goalkeeper",
  },
];

export default playStyles;
