import type { ISkillMove } from "../types";
import { buttons } from "../utils";

const {
  a,
  b,
  clockwise,
  down,
  downleft,
  downright,
  lb,
  left,
  ls,
  lt,
  rb,
  right,
  rs,
  rt,
  up,
  upleft,
  upright,
  x,
} = buttons;

const skillMoves: ISkillMove[] = [
  {
    command: `Hold ${lb} + ${rb} + ${rs} Direction`,
    name: "Directional Nutmeg",
    stars: 1,
  },
  {
    command: `${lt} + ${rb} Tap`,
    name: "Ball Juggle (while standing)",
    stars: 1,
  },
  {
    command: `Hold ${lb} + ${x} or ${b} then ${a} + ${ls} ${upleft}`,
    name: "Open Up Fake Shot Left",
    stars: 1,
  },
  {
    command: `Hold ${lb} + ${x} or ${b} then ${a} + ${ls} ${upright}`,
    name: "Open Up Fake Shot Right",
    stars: 1,
  },
  {
    command: `${rs}`,
    name: "Flick Up",
    stars: 1,
  },
  {
    command: `Hold ${lb} + ${rb} + ${ls} ${down}`,
    name: "First Time Feint Turn",
    stars: 1,
  },
  {
    command: `${rs} Flick ${down} ${down}`,
    name: "Feint Forward and Turn",
    stars: 2,
  },
  {
    command: `${rs} Flick ${left}`,
    name: "Body Feint Right",
    stars: 2,
  },
  {
    command: `${rs} Flick ${right}`,
    name: "Body Feint Left",
    stars: 2,
  },
  {
    command: `${rs} ${up} ${upright} ${right}`,
    name: "Stepover Right",
    stars: 2,
  },
  {
    command: `${rs} ${up} ${upleft} ${left}`,
    name: "Stepover Left",
    stars: 2,
  },
  {
    command: `${rs} ${right} ${upright} ${up}`,
    name: "Reverse Stepover Right",
    stars: 2,
  },
  {
    command: `${rs} ${left} ${upleft} ${up}`,
    name: "Reverse Stepover Left",
    stars: 2,
  },
  {
    command: `${rs} Hold ${left}`,
    name: "Ball Roll Left",
    stars: 2,
  },
  {
    command: `${rs} Hold ${right}`,
    name: "Ball Roll Right",
    stars: 2,
  },
  {
    command: `${lb} + ${rb} + ${ls} Flick ${down}`,
    name: "Drag Back",
    stars: 2,
  },
  {
    command: `${rs} Flick ${up} ${down}`,
    name: "Heel Flick",
    stars: 3,
  },
  {
    command: `${rs} ${down} ${downleft} ${left} ${upleft} ${up} ${upright} ${right}`,
    name: "Roulette Right",
    stars: 3,
  },
  {
    command: `${rs} ${down} ${downright} ${right} ${upright} ${up} ${upleft} ${left}`,
    name: "Roulette Left",
    stars: 3,
  },
  {
    command: `${rs} ${left} ${downleft} ${down} ${downright} ${right}`,
    name: "Fake Left & Go Right",
    stars: 3,
  },
  {
    command: `${rs} ${right} ${downright} ${down} ${downleft} ${left}`,
    name: "Fake Right & Go Left",
    stars: 3,
  },
  {
    command: `Hold ${lt} + ${x} or ${b} then ${a} + ${ls} Hold ${left}`,
    name: "Heel Chop Left (while running)",
    stars: 3,
  },
  {
    command: `Hold ${lt} + ${x} or ${b} then ${a} + ${ls} Hold ${right}`,
    name: "Heel Chop Right (while running)",
    stars: 3,
  },
  {
    command: `${rs} ${left} ${downleft} ${down} ${downright} ${right}`,
    name: "Feint Left & Exit Right",
    stars: 3,
  },
  {
    command: `${rs} ${right} ${downright} ${down} ${downleft} ${left}`,
    name: "Feint Right & Exit Left",
    stars: 3,
  },
  {
    command: `Hold ${lt} + ${rs} ${left} ${right} or ${right} ${left}`,
    name: "Stutter Feint",
    stars: 3,
  },
  {
    command: `Hold ${lb} + ${rs}`,
    name: "Ball Hop (while standing)",
    stars: 4,
  },
  {
    command: `Hold ${lb} + ${rs} Flick ${up} Flick ${left} or ${right}`,
    name: "Ball Roll Drag",
    stars: 4,
  },
  {
    command: `Hold ${lt} + ${rs} Hold ${down}`,
    name: "Drag Back Turn",
    stars: 4,
  },
  {
    command: `Hold ${lb} + ${rb} + ${rs} Flick Direction`,
    name: "Flair Nutmegs",
    stars: 4,
  },
  {
    command: `${rs} Flick ${up} ${down}`,
    name: "Heel To Heel",
    stars: 4,
  },
  {
    command: `${rs} Flick ${down} ${up}`,
    name: "Simple Rainbow",
    stars: 4,
  },
  {
    command: `Hold ${lt} + Hold ${rb} + ${rs} ${down} ${downright} ${right} ${upright} ${up} ${upleft} ${left}`,
    name: "Spin Left",
    stars: 4,
  },
  {
    command: `Hold ${lt} + Hold ${rb} + ${rs} ${down} ${downleft} ${left} ${upleft} ${up} ${upright} ${right}`,
    name: "Spin Right",
    stars: 4,
  },
  {
    command: `${rs} Flick ${up} ${rs} Flick ${left}`,
    name: "Stop and Turn Left (while running)",
    stars: 4,
  },
  {
    command: `${rs} Flick ${up} ${rs} Flick ${right}`,
    name: "Stop and Turn Right (while running)",
    stars: 4,
  },
  {
    command: `${rs} Hold ${left} ${ls} Hold ${right}`,
    name: "Ball Roll Cut Left",
    stars: 4,
  },
  {
    command: `${rs} Hold ${right} ${ls} Hold ${left}`,
    name: "Ball Roll Cut Right",
    stars: 4,
  },
  {
    command: `Hold ${rt} + ${x} or ${b} then ${a}`,
    name: "Fake Pass (while standing)",
    stars: 4,
  },
  {
    command: `Hold ${rt} + ${x} or ${b} then ${a} + ${ls} ${upleft}`,
    name: "Fake Pass Exit Left (while standing)",
    stars: 4,
  },
  {
    command: `Hold ${rt} + ${x} or ${b} then ${a} + ${ls} ${upright}`,
    name: "Fake Pass Exit Right (while standing)",
    stars: 4,
  },
  {
    command: `${rs} Hold ${down}`,
    name: "Quick Ball Rolls",
    stars: 4,
  },
  {
    command: `Hold ${lb} + ${rs} Hold ${left}`,
    name: "Lane Change Left",
    stars: 4,
  },
  {
    command: `Hold ${lb} + ${rs} Hold ${right}`,
    name: "Lane Change Right",
    stars: 4,
  },
  {
    command: `Hold ${lt} + ${rs} Flick ${down} Flick ${left}`,
    name: "Three Touch Roulette Left",
    stars: 4,
  },
  {
    command: `Hold ${lt} + ${rs} Flick ${down} Flick ${right}`,
    name: "Three Touch Roulette Right",
    stars: 4,
  },
  {
    command: `${rs} Flick ${down} Flick ${left}`,
    name: "Drag Back Spin Left",
    stars: 4,
  },
  {
    command: `${rs} Flick ${down} Flick ${right}`,
    name: "Drag Back Spin Right",
    stars: 4,
  },
  {
    command: `Hold ${lb} + ${rs} Flick ${down} Flick ${left} or ${right}`,
    name: "Drag To Heel",
    stars: 4,
  },
  {
    command: `Hold ${lb} + ${rs} Flick ${up} Flick ${down}`,
    name: "Heel to Ball Roll",
    stars: 4,
  },
  {
    command: `Hold ${lb} + ${rs} Flick ${down} Flick ${down}`,
    name: "Ball Roll Cut",
    stars: 4,
  },
  {
    command: `${rs} ${right} ${downright} ${down} ${downleft} ${left}`,
    name: "Elastico",
    stars: 5,
  },
  {
    command: `${rs} ${left} ${downleft} ${down} ${downright} ${right}`,
    name: "Reverse Elastico",
    stars: 5,
  },
  {
    command: `${rs} Flick ${down} Hold ${up} Flick ${up}`,
    name: "Advanced Rainbow",
    stars: 5,
  },
  {
    command: `${rs} ${down} ${downleft} ${left} ${rs} ${left} ${downleft} ${down} ${downright} ${right}`,
    name: "Hocus Pocus",
    stars: 5,
  },
  {
    command: `${rs} ${down} ${downright} ${right} ${rs} ${right} ${downright} ${down} ${downleft} ${left}`,
    name: "Triple Elastico",
    stars: 5,
  },
  {
    command: `${rs} Hold ${left} Flick ${up}`,
    name: "Ball Roll & Flick Left (while running)",
    stars: 5,
  },
  {
    command: `${rs} Hold ${right} Flick ${up}`,
    name: "Ball Roll & Flick Right (while running)",
    stars: 5,
  },
  {
    command: `Hold ${lt} + Hold ${rb} + ${rs} Flick ${up} Flick ${down}`,
    name: "Heel Flick Turn",
    stars: 5,
  },
  {
    command: `${rs} Flick ${up} ${up} ${down}`,
    name: "Sombrero Flick (while standing)",
    stars: 5,
  },
  {
    command: `${rs} Flick ${up} Flick ${left}`,
    name: "Turn & Spin Left",
    stars: 5,
  },
  {
    command: `${rs} Flick ${up} Flick ${right}`,
    name: "Turn & Spin Right",
    stars: 5,
  },
  {
    command: `${rs} Hold ${left} then ${rs} Flick ${right}`,
    name: "Ball Roll Fake Left (while standing)",
    stars: 5,
  },
  {
    command: `${rs} Hold ${right} then ${rs} Flick ${left}`,
    name: "Ball Roll Fake Right (while standing)",
    stars: 5,
  },
  {
    command: `Hold ${lt} + ${rs} Flick ${up} Flick ${left} or ${right}`,
    name: "Ball Roll Fake Turn",
    stars: 5,
  },
  {
    command: `Hold ${lt} + ${x} or ${b} then ${a} + ${ls} ${down}`,
    name: "Rabona Fake (while jogging)",
    stars: 5,
  },
  {
    command: `Hold ${lt} + Hold ${rb} + ${rs} ${right} ${downright} ${down} ${downleft} ${left}`,
    name: "Elastico Chop Left",
    stars: 5,
  },
  {
    command: `Hold ${lt} + Hold ${rb} + ${rs} ${left} ${downleft} ${down} ${downright} ${right}`,
    name: "Elastico Chop Right",
    stars: 5,
  },
  {
    command: `Hold ${lt} + Hold ${rb} + ${rs} Flick ${up} Flick ${right}`,
    name: "Spin Flick",
    stars: 5,
  },
  {
    command: `${rs} Hold ${up}`,
    name: "Flick Over",
    stars: 5,
  },
  {
    command: `Hold ${lt} + Hold ${rb} + ${rs} Flick ${up} Flick ${left}`,
    name: "Tornado Spin",
    stars: 5,
  },
  {
    command: `Hold ${lt} + ${rs} ${left} ${right} or ${right} ${left}`,
    name: "Heel Fake",
    stars: 5,
  },
  {
    command: `Hold ${lb} + ${rs} Flick ${down} Flick ${up}`,
    name: "Flair Rainbow",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rb} + ${ls} ${down}`,
    name: "Sombrero Flick Backwards",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rb} + ${ls} ${left}`,
    name: "Sombrero Flick Left",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rb} + ${ls} ${right}`,
    name: "Sombrero Flick Right",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rs} ${clockwise}`,
    name: "Around the World",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rs} Flick ${right} Flick ${left}`,
    name: "In Air Elastico",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rs} Flick ${left} Flick ${right}`,
    name: "Reverse In Air Elastico",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${ls} ${up}`,
    name: "Flick Up",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rs} x2`,
    name: "Chest Flick",
    stars: 5,
  },
  {
    command: `Juggling, Hold ${lt} + ${rs} ${clockwise} then ${rs} Flick ${up}`,
    name: "T. Around the World",
    stars: 5,
  },
];

export default skillMoves;
