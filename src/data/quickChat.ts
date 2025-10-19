import quickChatCategories from "./quickChatCategories";
import type { IQuickChat } from "../types";
import { buttons } from "../utils";

const { down, dpad, left, right, up } = buttons;
const { celebrations, compliments, encouragement, instructions } =
  quickChatCategories;

const quickChat: IQuickChat[] = [
  {
    category: celebrations,
    messages: [
      { command: `${dpad} ${up} ${up}`, name: "GG" },
      { command: `${dpad} ${up} ${right}`, name: "Cold" },
      { command: `${dpad} ${up} ${down}`, name: "Joga bonito" },
      { command: `${dpad} ${up} ${left}`, name: "GOAT" },
    ],
  },
  {
    category: instructions,
    messages: [
      {
        command: `${dpad} ${right} ${up}`,
        name: "Drop back",
      },
      {
        command: `${dpad} ${right} ${right}`,
        name: "Keep it simple",
      },
      {
        command: `${dpad} ${right} ${down}`,
        name: "Passing game",
      },
      {
        command: `${dpad} ${right} ${left}`,
        name: "Keep possession",
      },
    ],
  },
  {
    category: compliments,
    messages: [
      {
        command: `${dpad} ${down} ${up}`,
        name: "What a save",
      },
      {
        command: `${dpad} ${down} ${right}`,
        name: "Golazo",
      },
      {
        command: `${dpad} ${down} ${down}`,
        name: "Thanks",
      },
      {
        command: `${dpad} ${down} ${left}`,
        name: "Let's go",
      },
    ],
  },
  {
    category: encouragement,
    messages: [
      {
        command: `${dpad} ${left} ${up}`,
        name: "Unlucky",
      },
      {
        command: `${dpad} ${left} ${right}`,
        name: "Lock in",
      },
      {
        command: `${dpad} ${left} ${down}`,
        name: "Shake it off",
      },
      {
        command: `${dpad} ${left} ${left}`,
        name: "My bad",
      },
    ],
  },
];

export default quickChat;
