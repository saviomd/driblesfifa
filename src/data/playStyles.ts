import playStyleTypes from "./playStyleTypes";
import type { IPlayStyle } from "../types";

const { ballControl, defending, goalkeeper, passing, physical, scoring } =
  playStyleTypes;

const playStyles: IPlayStyle[] = [
  {
    description:
      "Performs Finesse Shots faster with additional curve and improved accuracy.",
    iconPath:
      "468u1R1p2k1fA6WBHi0OEn/fb9d49ed2a8fb500cd5a184937b96b34/Finesse_Shot",
    name: "Finesse Shot",
    type: scoring,
  },
  {
    description: "Performs Chip Shots faster and with greater accuracy.",
    iconPath:
      "6Gl08kt7odn1fJNX74CS2P/984feac3cd8d99902f5cb5131d5fd26a/Chip_Shot",
    name: "Chip Shot",
    type: scoring,
  },
  {
    description: "Performs Power Shots faster and with increased speed.",
    iconPath:
      "3ohVoKWSsvT44qgjabWqfV/e536ef26ad854c3c4cbf63ed7954b9cd/Power_Shot",
    name: "Power Shot",
    type: scoring,
  },
  {
    description:
      "Set pieces are delivered with increased speed, curve, and accuracy. Ball trajectory preview line is longer.",
    iconPath:
      "1razu2wcM3XA82VvB7NyUm/eec6b07080e49d6bf2d7a7951a22375f/Dead_Ball",
    name: "Dead Ball",
    type: scoring,
  },
  {
    description:
      "Performs headers with increased accuracy and has access to Precision Header animations.",
    iconPath:
      "3ync8fbblS4zLzF3p1VXmT/7752a5103c2ebd8be5cf1819379c66f4/Precision_Header",
    name: "Precision Header",
    type: scoring,
  },
  {
    description:
      "Performs volleys with improved accuracy and has access to acrobatic volley animations.",
    iconPath:
      "2sRRBHcIe0zrDwYaRI2xG3/d02b8c8855de853470897009e030eb5d/Acrobatic",
    name: "Acrobatic",
    type: scoring,
  },
  {
    description:
      "Enhances a player's ability to perform low driven shots with increased accuracy, faster ball travel, and quicker shot execution.",
    iconPath:
      "1NfyWsEpQ7s9bhWWt92lbn/5b5dbeb0e55c2e9241cdc26c70ee2d2c/Low_Driven_Shot",
    name: "Low Driven Shot",
    type: scoring,
  },
  {
    description:
      "Enables a player to perform Trivela shots. Fancy shots are performed with higher accuracy. Performs Gamechanger animations...",
    iconPath:
      "2v8I0GQrtREaEJzJcyStKe/e46d719e4e5ed88ac5a1f671c7448f4a/Gamechanger",
    name: "Gamechanger",
    type: scoring,
  },
  {
    description:
      "Through Passes are more accurate, swerve passes are delivered with more curve, and Precision Passes travel faster to the...",
    iconPath:
      "2K5BYfVYRnrdjt8F3hwI04/62f147b6a436c107bfa3d042c1d5728d/Incisive_Pass",
    name: "Incisive Pass",
    type: passing,
  },
  {
    description:
      "Passes travel faster along the ground without impacting the trapping difficulty of the receiver.",
    iconPath:
      "1mXBWIBgJSpYoIa1C4r5FX/7220e78a4049530f4e9fa642b1656fa4/Pinged_Pass",
    name: "Pinged Pass",
    type: passing,
  },
  {
    description:
      "Lob and Lofted Through Passes are more accurate, travel faster and are more difficult to intercept.",
    iconPath:
      "7jwRDD4zkOsqRpc821t73d/16d46d57a5dfc7dd5dd5f8de0fd26a99/Long_Ball_Pass",
    name: "Long Ball Pass",
    type: passing,
  },
  {
    description:
      "Executes difficult first-time Ground Passes with high accuracy, using backheels when contextually appropriate. Short distance...",
    iconPath:
      "2tvHC5JQ2sXrN8wUTJWLEA/94b0f6a78d1a9e1348a33c9772f23afd/Tiki_Taka",
    name: "Tiki Taka",
    type: passing,
  },
  {
    description:
      "All crosses are highly accurate, travel faster and with more curve.",
    iconPath:
      "FfTP29PWrRWZjEaiCCVoa/a1b345e4ae7023ed78b1efd68d28f392/Whipped_Pass",
    name: "Whipped Pass",
    type: passing,
  },
  {
    description:
      "Fancy passes, including outside-of-the-foot passes, are performed with improved accuracy. Performs Inventive animations when...",
    iconPath:
      "4fpo31RdL5T0vrzNqcSc4x/f82209bfd51270dcc447d4313b3e61f1/Inventive",
    name: "Inventive",
    type: passing,
  },
  {
    description:
      "Increased max speed of Sprint Jockey and improved transition speed from jockey to sprint.",
    iconPath: "7lHjpOBSghE6Ywt1jgVv1C/21f9914d00f073d79d4b46cac71b9087/Jockey",
    name: "Jockey",
    type: defending,
  },
  {
    description:
      "Increased reach when performing blocks and improved ability to make a successful block.",
    iconPath: "2Rlftzr8lqUdI29suCQVWe/43c6c36e8bd5fa26b88478d4354611a2/Block",
    name: "Block",
    type: defending,
  },
  {
    description:
      "Increased reach and improved chances of retaining possession of the ball when performing interceptions",
    iconPath:
      "5ysv7Iw8jDHl7sp1JXqIa7/d34004fed8c95bde083dcf8257391a70/Intercept",
    name: "Intercept",
    type: defending,
  },
  {
    description:
      "Improved chances of standing tackle success and grants the ability to stop the ball directly at their feet when performing a standing tackle.",
    iconPath:
      "4xPnUcL7thizFB7qmhlwUR/1ade7a0f77d5e875c2db869964540a35/Anticipate",
    name: "Anticipate",
    type: defending,
  },
  {
    description:
      "Grants the ability to stop the ball directly at their feet when performing a slide tackle.",
    iconPath:
      "7mI1lrxE0pv9iJfQFki9OA/8c1ecac325f923e049be72231c8c968a/Slide_Tackle",
    name: "Slide Tackle",
    type: defending,
  },
  {
    description:
      "Performs higher jumps and has improved defensive aerial presence.",
    iconPath:
      "3rsDbUXd3MZX39YTsk6lKe/404db89f2237eeb7466668a730c52a4b/Aerial_Fortress",
    name: "Aerial Fortress",
    type: defending,
  },
  {
    description:
      "Reaches a higher speed when performing Controlled Sprint and performs wide turns while dribbling with more precision.",
    iconPath:
      "5Esx7NK4YBU44O4bo07rvb/69ca9417da7fd07905f6c6956ad93f6d/Technical",
    name: "Technical",
    type: ballControl,
  },
  {
    description:
      "Reaches a higher sprint speed while dribbling and has reduced chance of an error when sprinting or performing knock-ons.",
    iconPath: "1aGsvwKyIFlRG1eoJSS0Ot/a4d3d661ff962795a632fe86439d2146/Rapid",
    name: "Rapid",
    type: ballControl,
  },
  {
    description:
      "Has reduced error when trapping the ball and is able to transition to dribbling faster with greater control.",
    iconPath:
      "3f727XsoDVLbT49oMk0HBu/2787568be8ccb2d5daa2d18fabacad97/First_Touch",
    name: "First Touch",
    type: ballControl,
  },
  {
    description:
      "Grants the ability to perform unique ground and flick Skill Moves.",
    iconPath:
      "47Ygd5ri33RgjIYGiTAJpj/f0723e6f2f89a98fb6e8200c3659c6a9/Trickster",
    name: "Trickster",
    type: ballControl,
  },
  {
    description:
      "Keeps close control of the ball while dribbling at jog speed and can shield the ball more effectively from stronger opponents.",
    iconPath:
      "5rUHwyLJRnvGV53Ba4Pj6M/9a3238695ae8103667ba02af391ac209/Press_Proven",
    name: "Press Proven",
    type: ballControl,
  },
  {
    description: "Accelerates faster during Explosive Sprint.",
    iconPath:
      "1xG25Zp3wvkLA5YewKiZah/f27f5fabd1e899fc0bbb817d2db233b1/Quick_Step",
    name: "Quick Step",
    type: physical,
  },
  {
    description:
      "Increases stamina regeneration speed. Increases the duration of teammate contain and partial team press.",
    iconPath:
      "2vVuRxgvPNaAuFGqZZ9nDY/3e2505addd5a6b353becdeaf7173d187/Relentless",
    name: "Relentless",
    type: physical,
  },
  {
    description:
      "Performs throw-ins with increased power to cover a greater distance.",
    iconPath:
      "51OlohNQvoEwW0aLhknAHh/58fa7d903d10f6d8cfa2622f62ba6b6f/Long_Throw",
    name: "Long Throw",
    type: physical,
  },
  {
    description: "Greater strength when performing physical tackles.",
    iconPath: "7euMJ2jVypFrFPQesWuGGm/14019168b12faac1584a2920d5c2d5d9/Bruiser",
    name: "Bruiser",
    type: physical,
  },
  {
    description: "Greater strength when performing shield dribbles.",
    iconPath:
      "2sNQz8b9dgV0hW8vl7oOvV/d7a503dbd4c73b232055b3ca06aa88eb/Enforcer",
    name: "Enforcer",
    type: physical,
  },
  {
    description:
      "Unique GK throw animations and increased GK throw max distance.",
    iconPath:
      "3CjCz29sjIt1xMZTRDi4vQ/8ecb201b0ae7d6d536d03c847a768ffa/Far_Throw",
    name: "Far Throw",
    type: goalkeeper,
  },
  {
    description:
      "Exclusive foot save animations and increased performance against low trajectory shots.",
    iconPath:
      "1s2muXoHUmP1T0vGYKXSl1/6d265b13804069371f16a58788703a33/Footwork",
    name: "Footwork",
    type: goalkeeper,
  },
  {
    description:
      "Unique punching animations, increased hand strength and ball out speed from punches, prioritization of punch animations in contested ball scenarios, and increased speed for coming out for crosses.",
    iconPath:
      "4Uvgm6UNiSz3say1zZqKDC/51837f53072d5e01063699f6d2b7401a/Cross_Claimer",
    name: "Cross Claimer",
    type: goalkeeper,
  },
  {
    description:
      "Unique reflex/anticipation save animations, increase in rush speed and improved read of close shot trajectories.",
    iconPath:
      "4wwnzFkg1zLTAc4QSsXiWO/5fa897cf739a93bddf3556e2323f9b8b/1v1_Close_Down",
    name: "1v1 Close Down",
    type: goalkeeper,
  },
  {
    description:
      "Unique long diving distance jump animations and increased chances of saving long distance shots.",
    iconPath:
      "7zbtymM2pCbANuM7wKFYZU/698e8ece65867df97e61189ac6666463/Far_Reach",
    name: "Far Reach",
    type: goalkeeper,
  },
  {
    description:
      "Unique animations for push deflect, dive push deflect, and regular deflects. Increase the ball out speed from deflections and improves the...",
    iconPath:
      "6nb9RYWNVuvUaLZDskFao7/0ad930b0874e7c9454b31de942c0d3f1/Deflector",
    name: "Deflector",
    type: goalkeeper,
  },
];

export default playStyles;
