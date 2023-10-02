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
    type: "Basics",
  },
  {
    command: `${b}`,
    name: "Random Celebration",
    type: "Basics",
  },
  {
    command: `${lb} + ${rb}`,
    name: "Cancel Celebration",
    type: "Basics",
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
    command: `Hold ${rs} ${left}`,
    name: "Can You Hear Me?",
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
    command: `Spin ${rs} ${clockwise}`,
    name: "Windmill",
    type: "Running Moves",
  },
  {
    command: `Hold ${b}`,
    name: "One Arm Raised",
    type: "Running Moves",
  },
  {
    command: `Tap ${b} then hold ${b}`,
    name: "Finger Points",
    type: "Running Moves",
  },
  {
    command: `Press ${a}`,
    name: "Signature Finishing Move",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "Mohamed Salah",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "James Tarkowski",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "Steven Bergwijn",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "Ashley Barnes",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "Finger Swipe Camera (CAM)",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "Cry Baby (CAM)",
    type: "Finishing Moves",
  },
  {
    command: `Press ${a}`,
    name: "Selfie (Next To Adboard)",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} press ${b}`,
    name: "Point to the Sky",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} double tap ${b}`,
    name: "Show Respect",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${up} ${up}`,
    name: "Spanish Dance",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Press ${x}`,
    name: "Flex",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Press ${y}`,
    name: "All Ears",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${down} ${down}`,
    name: "X",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} hold ${rs} ${right}`,
    name: "Big Man",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} hold ${rs} ${left}`,
    name: "Baby Girl",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${down} ${up}`,
    name: "Knee Slide Drag",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${right} ${up}`,
    name: "Walk Like Me",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${up} ${up}`,
    name: "Mask",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} spin ${rs} ${clockwise}`,
    name: "Knee Slide Spin",
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
    command: `Hold ${lt} double tap ${x}`,
    name: "Think",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} double tap ${y}`,
    name: "Stir The Pot",
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
    name: "Heart Symbol",
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
    name: "Who Am I",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${right} ${right}`,
    name: "Neighbourhood",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${left} ${left}`,
    name: "Faking It",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} spin ${rs} ${clockwise}`,
    name: "Tumble",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lt} spin ${rs} ${counterclockwise}`,
    name: "Twist Flip (agile players) or Cartwheel Roll",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Press ${rs}`,
    name: "Rugby",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} double tap ${y}`,
    name: "Elbow",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} double tap ${b}`,
    name: "Kiss The Ring",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Press ${y}`,
    name: "The Salute",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${left} ${left}`,
    name: "Hop & Point",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} double tap ${b}`,
    name: "Push It Down",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${left} ${left}`,
    name: "Glamour Slide",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${up} ${down}`,
    name: "Giant",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rb} spin ${rs} ${counterclockwise}`,
    name: "Eye of the Storm",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${up} ${up}`,
    name: "Eyes And Arms",
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
    command: `Hold ${rb} Flick ${rs} ${right} ${left}`,
    name: "Gamer",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} hold ${rs} ${down}`,
    name: "Happy Walk",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${right} ${left}`,
    name: "Arms Swing",
    type: "Finishing Moves",
  },
  {
    command: `Hold ${rt} hold ${rs} ${up}`,
    name: "Many Bows",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} hold ${rs} ${right}`,
    name: "Kiss The Ground",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} double tap ${x}`,
    name: "Disbelief",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} double tap ${x}`,
    name: "Backflips",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} double tap ${x}`,
    name: "Peace",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} press ${rs}`,
    name: "Cockroach",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${up} ${up}`,
    name: "River Dance",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${right} ${right}`,
    name: "Break Dance",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} hold ${rs} ${left}`,
    name: "Relax (Offline Only)",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} spin ${rs} ${counterclockwise}`,
    name: "Backwards Worm",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} spin ${rs} ${clockwise}`,
    name: "Uncontrolled Backflip",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} spin ${rs} ${counterclockwise}`,
    name: "Handstand",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${up} ${up}`,
    name: "Spin & Fall",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${left} ${left}`,
    name: "Rowing on Knees",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${right} ${right}`,
    name: "Dance & Spin",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} press ${x}`,
    name: "Knee Walk",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} press ${y}`,
    name: "Cradle Swing",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} double tap ${y}`,
    name: "Baby",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} hold ${rs} ${up}`,
    name: "Flying Dive",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} hold ${rs} ${right}`,
    name: "Karate Kicks",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} hold ${rs} ${down}`,
    name: "Jumping Kicks",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${down} ${up}`,
    name: "Ice Skating",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${left} ${right}`,
    name: "Golf Swing",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${down} ${up}`,
    name: "Matador",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${up} ${down}`,
    name: "Dance 2",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${left} ${right}`,
    name: "Dance 3",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rt} Flick ${rs} ${right} ${left}`,
    name: "Dance 4",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} double tap ${x}`,
    name: "KO",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} Press ${b}`,
    name: "Right Here Right Now",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lt} Flick ${rs} ${down} ${up}`,
    name: "Surf and Flex",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} ${rs} Hold ${left}`,
    name: "Stand Tall",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lt} double tap ${b}`,
    name: "Kiss The Wrist",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lt} press ${rs}`,
    name: "Rock On",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} double tap ${y}`,
    name: "Calm Down",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${up}`,
    name: "Phone It In",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} Hold ${rs} ${down}`,
    name: "Motorbike",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${up} ${down}`,
    name: "Hang Loose",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${right} ${left}`,
    name: "Muevelo",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} Flick ${rs} ${right} ${right}`,
    name: "Predator",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${right} ${left}`,
    name: "Push Ups",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} + ${rs} ${clockwise}`,
    name: "Penguin",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${rb} Flick ${rs} ${down} ${down}`,
    name: "Dance",
    type: "Pro Unlockables",
  },
  {
    command: `Hold ${lb} Press ${rs}`,
    name: "Bye",
    type: "Pro Unlockables",
  },
];

export default celebrations;
