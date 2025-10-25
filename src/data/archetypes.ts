import archetypeTypes from "./archetypeTypes";
import attributeNames from "./attributeNames";
import perkNames from "./perkNames";
import playStyleNames from "./playStyleNames";
import specializationNames from "./specializationNames";
import type { IArchetype } from "../types";
import { getPlayStyleByName } from "../utils";

const { defender, forward, goalkeeper, midfielder } = archetypeTypes;

const archetypes: IArchetype[] = [
  {
    inspiredBy: "Oliver Kahn",
    keyAttributes: [
      attributeNames.acceleration,
      attributeNames.gkDiving,
      attributeNames.gkHandling,
      attributeNames.gkReflexes,
    ],
    name: "Shot stopper",
    signaturePerks: [perkNames.lowShotPower, perkNames.readyToAct],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.footwork),
      getPlayStyleByName(playStyleNames.farReach),
    ],
    specializations: [
      specializationNames.shotStopperPlus,
      specializationNames.spider,
      specializationNames.octopus,
    ],
    type: goalkeeper,
  },
  {
    inspiredBy: "Lev Yashin",
    keyAttributes: [
      attributeNames.longPass,
      attributeNames.gkDiving,
      attributeNames.gkKicking,
      attributeNames.gkPos,
    ],
    name: "Sweeper Keeper",
    signaturePerks: [perkNames.backOption, perkNames.rushSpecialist],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.crossClaimer),
      getPlayStyleByName(playStyleNames.oneVOneCloseDown),
    ],
    specializations: [
      specializationNames.sweeperKeeperPlus,
      specializationNames.launcher,
      specializationNames.extra,
    ],
    type: goalkeeper,
  },
  {
    inspiredBy: "Fernando Hierro",
    keyAttributes: [
      attributeNames.composure,
      attributeNames.longPass,
      attributeNames.defAware,
      attributeNames.standTackle,
    ],
    name: "Progressor",
    signaturePerks: [perkNames.restarter, perkNames.goalkeepersFavourite],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.longBallPass),
      getPlayStyleByName(playStyleNames.anticipate),
    ],
    specializations: [
      specializationNames.progressorPlus,
      specializationNames.pioneer,
      specializationNames.janitor,
    ],
    type: defender,
  },
  {
    inspiredBy: "Nemanja Vidić",
    keyAttributes: [
      attributeNames.strength,
      attributeNames.aggression,
      attributeNames.headingAcc,
      attributeNames.slideTackle,
    ],
    name: "Boss",
    signaturePerks: [perkNames.shuffler, perkNames.boxController],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.aerialFortress),
      getPlayStyleByName(playStyleNames.bruiser),
    ],
    specializations: [
      specializationNames.bossPlus,
      specializationNames.enforcer,
      specializationNames.capitano,
    ],
    type: defender,
  },
  {
    inspiredBy: "Park Ji Sung",
    keyAttributes: [
      attributeNames.stamina,
      attributeNames.interceptions,
      attributeNames.shortPass,
      attributeNames.standTackle,
    ],
    name: "Engine",
    signaturePerks: [perkNames.tracker, perkNames.presser],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.jockey),
      getPlayStyleByName(playStyleNames.relentless),
    ],
    specializations: [
      specializationNames.enginePlus,
      specializationNames.everywhere,
      specializationNames.gadget,
    ],
    type: defender,
  },
  {
    inspiredBy: "Cafu",
    keyAttributes: [
      attributeNames.sprintSpeed,
      attributeNames.stamina,
      attributeNames.crossing,
      attributeNames.slideTackle,
    ],
    name: "Marauder",
    signaturePerks: [perkNames.highSpeedCrosser, perkNames.tackleAndRun],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.whippedPass),
      getPlayStyleByName(playStyleNames.quickStep),
    ],
    specializations: [
      specializationNames.marauderPlus,
      specializationNames.speedster,
      specializationNames.athlete,
    ],
    type: defender,
  },
  {
    inspiredBy: "Michaël Essien",
    keyAttributes: [
      attributeNames.strength,
      attributeNames.interceptions,
      attributeNames.defAware,
      attributeNames.longShots,
    ],
    name: "Recycler",
    signaturePerks: [perkNames.pressAndPass, perkNames.physicalPasser],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.intercept),
      getPlayStyleByName(playStyleNames.pressProven),
    ],
    specializations: [
      specializationNames.recyclerPlus,
      specializationNames.driver,
      specializationNames.thief,
    ],
    type: midfielder,
  },
  {
    inspiredBy: "Tony Kroos",
    keyAttributes: [
      attributeNames.composure,
      attributeNames.vision,
      attributeNames.ballControl,
      attributeNames.longPass,
    ],
    name: "Maestro",
    signaturePerks: [perkNames.flyTrap, perkNames.eagleEyes],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.pingedPass),
      getPlayStyleByName(playStyleNames.tikiTaka),
    ],
    specializations: [
      specializationNames.maestroPlus,
      specializationNames.crasher,
      specializationNames.heartbeat,
    ],
    type: midfielder,
  },
  {
    inspiredBy: "Andrés Iniesta",
    keyAttributes: [
      attributeNames.vision,
      attributeNames.shortPass,
      attributeNames.longShots,
      attributeNames.curve,
    ],
    name: "Creator",
    signaturePerks: [perkNames.grasshopperPasser, perkNames.bullseyePasser],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.incisivePass),
      getPlayStyleByName(playStyleNames.inventive),
    ],
    specializations: [
      specializationNames.creatorPlus,
      specializationNames.architect,
      specializationNames.sniper,
    ],
    type: midfielder,
  },
  {
    inspiredBy: "Luis Figo",
    keyAttributes: [
      attributeNames.acceleration,
      attributeNames.agility,
      attributeNames.ballControl,
      attributeNames.dribbling,
    ],
    name: "Spark",
    signaturePerks: [perkNames.bailOut, perkNames.cutBackSpecialist],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.rapid),
      getPlayStyleByName(playStyleNames.trickster),
    ],
    specializations: [
      specializationNames.sparkPlus,
      specializationNames.joker,
      specializationNames.ace,
    ],
    type: midfielder,
  },
  {
    inspiredBy: "Ronaldinho",
    keyAttributes: [
      attributeNames.acceleration,
      attributeNames.balance,
      attributeNames.finishing,
      attributeNames.curve,
    ],
    name: "Magician",
    signaturePerks: [perkNames.getawayDriver, perkNames.ankleBreaker],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.finesseShot),
      getPlayStyleByName(playStyleNames.technical),
    ],
    specializations: [
      specializationNames.magicianPlus,
      specializationNames.hotshot,
      specializationNames.invader,
    ],
    type: forward,
  },
  {
    inspiredBy: "Alex Morgan",
    keyAttributes: [
      attributeNames.reactions,
      attributeNames.composure,
      attributeNames.finishing,
      attributeNames.volleys,
    ],
    name: "Finisher",
    signaturePerks: [perkNames.fakeToReal, perkNames.oneVOneMaster],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.lowDrivenShot),
      getPlayStyleByName(playStyleNames.firstTouch),
    ],
    specializations: [
      specializationNames.finisherPlus,
      specializationNames.presser,
      specializationNames.hunter,
    ],
    type: forward,
  },
  {
    inspiredBy: "Zlatan Ibrahimović",
    keyAttributes: [
      attributeNames.jumping,
      attributeNames.strength,
      attributeNames.headingAcc,
      attributeNames.shotPower,
    ],
    name: "Target",
    signaturePerks: [perkNames.sixthSense, perkNames.physicalShooter],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.powerShot),
      getPlayStyleByName(playStyleNames.precisionHeader),
    ],
    specializations: [
      specializationNames.targetPlus,
      specializationNames.roamer,
      specializationNames.runner,
    ],
    type: forward,
  },
];

export default archetypes;
