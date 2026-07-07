import archetypeTypes from "./archetypeTypes";
import attributeNames from "./attributeNames";
import perkNames from "./perkNames";
import playStyleNames from "./playStyleNames";
import specializationNames from "./specializationNames";
import type { IArchetype } from "../types";
import { getPlayStyleByName, getSpecializationByName } from "../utils";

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
    signaturePerks: [perkNames.lowShotSaver, perkNames.readyToAct],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.farReach),
      getPlayStyleByName(playStyleNames.footwork),
      getPlayStyleByName(playStyleNames.longBallPass),
      getPlayStyleByName(playStyleNames.deflector),
    ],
    specializations: [
      getSpecializationByName(specializationNames.shotStopperPlus),
      getSpecializationByName(specializationNames.spider),
      getSpecializationByName(specializationNames.octopus),
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
      getPlayStyleByName(playStyleNames.oneVOneCloseDown),
      getPlayStyleByName(playStyleNames.farReach),
      getPlayStyleByName(playStyleNames.deflector),
      getPlayStyleByName(playStyleNames.farThrow),
    ],
    specializations: [
      getSpecializationByName(specializationNames.sweeperKeeperPlus),
      getSpecializationByName(specializationNames.launcher),
      getSpecializationByName(specializationNames.extra),
    ],
    type: goalkeeper,
  },
  {
    inspiredBy: "Fernando Hierro",
    keyAttributes: [
      attributeNames.longPass,
      attributeNames.composure,
      attributeNames.defAware,
      attributeNames.standTackle,
    ],
    name: "Progressor",
    signaturePerks: [perkNames.restarter, perkNames.goalkeepersFavourite],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.longBallPass),
      getPlayStyleByName(playStyleNames.anticipate),
      getPlayStyleByName(playStyleNames.incisivePass),
      getPlayStyleByName(playStyleNames.intercept),
    ],
    specializations: [
      getSpecializationByName(specializationNames.progressorPlus),
      getSpecializationByName(specializationNames.pioneer),
      getSpecializationByName(specializationNames.janitor),
    ],
    type: defender,
  },
  {
    inspiredBy: "Nemanja Vidić",
    keyAttributes: [
      attributeNames.headingAcc,
      attributeNames.slideTackle,
      attributeNames.strength,
      attributeNames.aggression,
    ],
    name: "Boss",
    signaturePerks: [perkNames.shuffler, perkNames.boxController],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.bruiser),
      getPlayStyleByName(playStyleNames.aerialFortress),
      getPlayStyleByName(playStyleNames.precisionHeader),
      getPlayStyleByName(playStyleNames.anticipate),
    ],
    specializations: [
      getSpecializationByName(specializationNames.bossPlus),
      getSpecializationByName(specializationNames.enforcer),
      getSpecializationByName(specializationNames.capitano),
    ],
    type: defender,
  },
  {
    inspiredBy: "Park Ji Sung",
    keyAttributes: [
      attributeNames.shortPass,
      attributeNames.interceptions,
      attributeNames.standTackle,
      attributeNames.stamina,
    ],
    name: "Engine",
    signaturePerks: [perkNames.tracker, perkNames.presser],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.relentless),
      getPlayStyleByName(playStyleNames.jockey),
      getPlayStyleByName(playStyleNames.anticipate),
      getPlayStyleByName(playStyleNames.rapid),
    ],
    specializations: [
      getSpecializationByName(specializationNames.enginePlus),
      getSpecializationByName(specializationNames.everywhere),
      getSpecializationByName(specializationNames.gadget),
    ],
    type: defender,
  },
  {
    inspiredBy: "Cafu",
    keyAttributes: [
      attributeNames.sprintSpeed,
      attributeNames.crossing,
      attributeNames.slideTackle,
      attributeNames.stamina,
    ],
    name: "Marauder",
    signaturePerks: [perkNames.highSpeedCrosser, perkNames.tackleAndRun],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.quickStep),
      getPlayStyleByName(playStyleNames.whippedPass),
      getPlayStyleByName(playStyleNames.technical),
      getPlayStyleByName(playStyleNames.trickster),
    ],
    specializations: [
      getSpecializationByName(specializationNames.marauderPlus),
      getSpecializationByName(specializationNames.speedster),
      getSpecializationByName(specializationNames.athlete),
    ],
    type: defender,
  },
  {
    inspiredBy: "Michaël Essien",
    keyAttributes: [
      attributeNames.longShots,
      attributeNames.interceptions,
      attributeNames.defAware,
      attributeNames.strength,
    ],
    name: "Recycler",
    signaturePerks: [perkNames.pressAndPass, perkNames.physicalPasser],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.pressProven),
      getPlayStyleByName(playStyleNames.intercept),
      getPlayStyleByName(playStyleNames.powerShot),
      getPlayStyleByName(playStyleNames.tikiTaka),
    ],
    specializations: [
      getSpecializationByName(specializationNames.recyclerPlus),
      getSpecializationByName(specializationNames.driver),
      getSpecializationByName(specializationNames.thief),
    ],
    type: midfielder,
  },
  {
    inspiredBy: "Tony Kroos",
    keyAttributes: [
      attributeNames.vision,
      attributeNames.longPass,
      attributeNames.ballControl,
      attributeNames.composure,
    ],
    name: "Maestro",
    signaturePerks: [perkNames.flyTrap, perkNames.eagleEyes],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.pingedPass),
      getPlayStyleByName(playStyleNames.tikiTaka),
      getPlayStyleByName(playStyleNames.longBallPass),
      getPlayStyleByName(playStyleNames.incisivePass),
    ],
    specializations: [
      getSpecializationByName(specializationNames.maestroPlus),
      getSpecializationByName(specializationNames.crasher),
      getSpecializationByName(specializationNames.heartbeat),
    ],
    type: midfielder,
  },
  {
    inspiredBy: "Andrés Iniesta",
    keyAttributes: [
      attributeNames.longShots,
      attributeNames.vision,
      attributeNames.shortPass,
      attributeNames.curve,
    ],
    name: "Creator",
    signaturePerks: [perkNames.grasshopperPasser, perkNames.bullseyePasser],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.incisivePass),
      getPlayStyleByName(playStyleNames.inventive),
      getPlayStyleByName(playStyleNames.gamechanger),
      getPlayStyleByName(playStyleNames.quickStep),
    ],
    specializations: [
      getSpecializationByName(specializationNames.creatorPlus),
      getSpecializationByName(specializationNames.architect),
      getSpecializationByName(specializationNames.sniper),
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
      getPlayStyleByName(playStyleNames.trickster),
      getPlayStyleByName(playStyleNames.rapid),
      getPlayStyleByName(playStyleNames.inventive),
      getPlayStyleByName(playStyleNames.technical),
    ],
    specializations: [
      getSpecializationByName(specializationNames.sparkPlus),
      getSpecializationByName(specializationNames.joker),
      getSpecializationByName(specializationNames.ace),
    ],
    type: midfielder,
  },
  {
    inspiredBy: "Ronaldinho",
    keyAttributes: [
      attributeNames.acceleration,
      attributeNames.finishing,
      attributeNames.curve,
      attributeNames.balance,
    ],
    name: "Magician",
    signaturePerks: [perkNames.getawayDriver, perkNames.ankleBreaker],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.technical),
      getPlayStyleByName(playStyleNames.finesseShot),
      getPlayStyleByName(playStyleNames.chipShot),
      getPlayStyleByName(playStyleNames.inventive),
    ],
    specializations: [
      getSpecializationByName(specializationNames.magicianPlus),
      getSpecializationByName(specializationNames.hotshot),
      getSpecializationByName(specializationNames.invader),
    ],
    type: forward,
  },
  {
    inspiredBy: "Alex Morgan",
    keyAttributes: [
      attributeNames.finishing,
      attributeNames.volleys,
      attributeNames.reactions,
      attributeNames.composure,
    ],
    name: "Finisher",
    signaturePerks: [perkNames.fakeToReal, perkNames.oneVOneMaster],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.lowDrivenShot),
      getPlayStyleByName(playStyleNames.firstTouch),
      getPlayStyleByName(playStyleNames.quickStep),
      getPlayStyleByName(playStyleNames.acrobatic),
    ],
    specializations: [
      getSpecializationByName(specializationNames.finisherPlus),
      getSpecializationByName(specializationNames.presser),
      getSpecializationByName(specializationNames.hunter),
    ],
    type: forward,
  },
  {
    inspiredBy: "Zlatan Ibrahimović",
    keyAttributes: [
      attributeNames.shotPower,
      attributeNames.headingAcc,
      attributeNames.jumping,
      attributeNames.strength,
    ],
    name: "Target",
    signaturePerks: [perkNames.sixthSense, perkNames.physicalShooter],
    signaturePlayStyles: [
      getPlayStyleByName(playStyleNames.powerShot),
      getPlayStyleByName(playStyleNames.precisionHeader),
      getPlayStyleByName(playStyleNames.tikiTaka),
      getPlayStyleByName(playStyleNames.pressProven),
    ],
    specializations: [
      getSpecializationByName(specializationNames.targetPlus),
      getSpecializationByName(specializationNames.roamer),
      getSpecializationByName(specializationNames.runner),
    ],
    type: forward,
  },
];

export default archetypes;
