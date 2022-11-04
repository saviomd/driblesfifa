import type { ICelebration } from "../types";
import { buttons } from "../utils";
const {
  a,
  b,
  clockwise,
  counterclockwise,
  down,
  lb,
  left,
  lt,
  rb,
  right,
  rs,
  rt,
  up,
  x,
  y,
} = buttons;

const celebrations: ICelebration[] = [
  {
    command: `${a}`,
    name: "Signature Celebration",
    type: "Basic",
  },
  {
    command: `${b}`,
    name: "Random Celebration",
    type: "Basic",
  },
  {
    command: `${lb} + ${rb}`,
    name: "Cancel Celebration",
    type: "Basic",
  },
  {
    command: `Hold ${x}`,
    name: "Thumb Suck",
    type: "Running Moves",
  },
  {
    command: `Tap ${x} then hold ${x}`,
    name: "Arms Out",
    type: "Running Moves",
  },
  {
    command: `Tap ${y} then hold ${y}`,
    name: "Wrist Flick",
    type: "Running Moves",
  },
  {
    command: `Hold ${rs}`,
    name: "Aeroplane",
    type: "Running Moves",
  },
  {
    command: `Hold ${rs} ${up}`,
    name: "Point to Sky",
    type: "Running Moves",
  },
  {
    command: `Hold ${rs} ${down}`,
    name: "Telephone",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${right} then hold ${rs} ${left}`,
    name: "Hands Out",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${left} then hold ${rs} ${right}`,
    name: "Come On!",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${down} then hold ${rs} ${up}`,
    name: "Blow Kisses",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${up} then hold ${rs} ${down}`,
    name: "Double Arm Swing",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${right} then hold ${rs} ${right}`,
    name: "Flying Bird",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${left} then hold ${rs} ${left}`,
    name: "Hand on Head",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${down} then hold ${rs} ${down}`,
    name: "Heart Symbol",
    type: "Running Moves",
  },
  {
    command: `Flick ${rs} ${up} then hold ${rs} ${up}`,
    name: "Arms Pointing Up",
    type: "Running Moves",
  },
  {
    command: `${rs} ${clockwise}`,
    name: "Windmill",
    type: "Running Moves",
  },
  {
    command: `Hold ${lb} Press ${x}`,
    name: "Scissors",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} double tap ${x}`,
    name: "Challenge",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} spin ${rs} ${counterclockwise}`,
    name: "Spinning Frog (Offline Only)",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Press ${rs}`,
    name: "One Eye",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} double tap ${b}`,
    name: "Swagger",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} hold ${rs} ${up}`,
    name: "Nailbiter",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} press ${rs}`,
    name: "Pigeon",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${up} ${up}`,
    name: "Guitar Dance",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} ${rs} Flick ${left} Flick ${left}`,
    name: "Knee Slide",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} ${rs} Flick ${right} Flick ${right}`,
    name: "Speed Walk (Offline Only)",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} spin ${rs} ${clockwise}`,
    name: "Knee Slide Spin",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "Signature Finishing Move",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${down} ${down}`,
    name: "X",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} spin ${rs} ${counterclockwise}`,
    name: "Floor Spin",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} press ${b}`,
    name: "Timber",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} press ${x}`,
    name: "Cell Phone",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} press ${y}`,
    name: "Hypnosis",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} double tap ${b}`,
    name: "Show Respect",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} double tap ${y}`,
    name: "Stir The Pot",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} press ${b}`,
    name: "Point to the Sky",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${up} ${up}`,
    name: "Spanish Dance",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} double tap ${y}`,
    name: "World Beater",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Press ${y}`,
    name: "The Salute",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} hold ${rs} ${up}`,
    name: "Mannequin",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} hold ${rs} ${right}`,
    name: "I Can't Hear You",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} hold ${rs} ${down}`,
    name: "Heart",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} hold ${rs} ${left}`,
    name: "Brick Fall",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${up} ${down}`,
    name: "Pipe",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${left} ${right}`,
    name: "Scorpion",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${right} ${left}`,
    name: "Tea",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${down} ${down}`,
    name: "Neighbourhood",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${left} ${left}`,
    name: "Knee Slide Fail",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${up} ${up}`,
    name: "Mask",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${right} ${right}`,
    name: "Break Dance",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Press ${y}`,
    name: "Riding the Wave",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} hold ${rs} ${left}`,
    name: "Relax (Offline Only)",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} spin ${rs} ${counterclockwise}`,
    name: "Eye of the Storm",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} spin ${rs} ${clockwise}`,
    name: "Uncontrolled Backflip",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} spin ${rs} ${counterclockwise}`,
    name: "Handstand",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} ${rs} Flick ${down} Flick ${down}`,
    name: "Hop & Point",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${down} ${up}`,
    name: "Knee Slide Drag",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} double tap ${x}`,
    name: "KO",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Press ${b}`,
    name: "Right Here Right Now",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${down} ${up}`,
    name: "Surf and Flex",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} ${rs} Hold ${left}`,
    name: "Stand Tall",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} double tap ${b}`,
    name: "Little Brother",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} press ${rs}`,
    name: "Fingers",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} hold ${rs} ${right}`,
    name: "Kiss The Ground",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} hold ${rs} ${down}`,
    name: "Disbelief",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} double tap ${x}`,
    name: "Backflips",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} double tap ${x}`,
    name: "Peace",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} spin ${rs} ${clockwise}`,
    name: "Waddle (Offline Only)",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${left} ${right}`,
    name: "Golf Swing",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${down} ${up}`,
    name: "Matador",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${up} ${down}`,
    name: "Goggles",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${right} ${left}`,
    name: "Dance",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${right} ${left}`,
    name: "Gamer",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} spin ${rs} ${clockwise}`,
    name: "The Worm",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${down} ${down}`,
    name: "Tea For Two",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${up} ${down}`,
    name: "Eyes And Arms",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${right} ${right}`,
    name: "Dance & Spin",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} press ${x}`,
    name: "Picture",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} press ${y}`,
    name: "Cradle Swing",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} double tap ${y}`,
    name: "Kiss The Ring",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} hold ${rs} ${up}`,
    name: "Flying Dive",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} hold ${rs} ${right}`,
    name: "Slide Salute",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} hold ${rs} ${down}`,
    name: "Slide and Flex",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} hold ${rs} ${right}`,
    name: "Big Person",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} hold ${rs} ${left}`,
    name: "The Baby",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${left} ${right}`,
    name: "Walk Like Me",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Press ${rs}`,
    name: "Giddy Up",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} double tap ${y}`,
    name: "Calm Down (Offline Only)",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${up}`,
    name: "Phone It In",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${down}`,
    name: "Motorbike",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${up} ${down}`,
    name: "Hang Loose",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${right} ${left}`,
    name: "Arm Swing",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${right} ${right}`,
    name: "Point",
    type: "Finishing Moves",
  },
];

export default celebrations;
