import attributeNames from "./attributeNames";
import playStyleNames from "./playStyleNames";
import specializationNames from "./specializationNames";
import type { ISpecialization } from "../types";
import { getPlayStylePlusByName } from "../utils";

const specializations: ISpecialization[] = [
  {
    name: specializationNames.ace,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.chipShot),
    unlockCriteria: {
      [attributeNames.finishing]: 92,
      [attributeNames.ballControl]: 90,
      [attributeNames.reactions]: 90,
    },
  },
  {
    name: specializationNames.architect,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.deadBall),
    unlockCriteria: {
      [attributeNames.crossing]: 92,
      [attributeNames.fkAcc]: 90,
      [attributeNames.shotPower]: 90,
    },
  },
  {
    name: specializationNames.athlete,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.bruiser),
    unlockCriteria: {
      [attributeNames.strength]: 92,
      [attributeNames.aggression]: 90,
      [attributeNames.defAware]: 90,
    },
  },
  {
    name: specializationNames.bossPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.slideTackle),
    unlockCriteria: {
      [attributeNames.slideTackle]: 92,
      [attributeNames.aggression]: 90,
      [attributeNames.strength]: 90,
    },
  },
  {
    name: specializationNames.capitano,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.block),
    unlockCriteria: {
      [attributeNames.agility]: 90,
      [attributeNames.reactions]: 90,
      [attributeNames.defAware]: 92,
    },
  },
  {
    name: specializationNames.crasher,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.firstTouch),
    unlockCriteria: {
      [attributeNames.composure]: 92,
      [attributeNames.ballControl]: 90,
      [attributeNames.finishing]: 90,
    },
  },
  {
    name: specializationNames.creatorPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.whippedPass),
    unlockCriteria: {
      [attributeNames.longPass]: 90,
      [attributeNames.crossing]: 90,
      [attributeNames.vision]: 92,
    },
  },
  {
    name: specializationNames.driver,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.enforcer),
    unlockCriteria: {
      [attributeNames.strength]: 90,
      [attributeNames.balance]: 92,
      [attributeNames.sprintSpeed]: 90,
    },
  },
  {
    name: specializationNames.enforcer,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.pressProven),
    unlockCriteria: {
      [attributeNames.composure]: 92,
      [attributeNames.vision]: 90,
      [attributeNames.ballControl]: 90,
    },
  },
  {
    name: specializationNames.enginePlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.intercept),
    unlockCriteria: {
      [attributeNames.aggression]: 90,
      [attributeNames.interceptions]: 92,
      [attributeNames.standTackle]: 90,
    },
  },
  {
    name: specializationNames.everywhere,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.tikiTaka),
    unlockCriteria: {
      [attributeNames.reactions]: 92,
      [attributeNames.ballControl]: 90,
      [attributeNames.shortPass]: 90,
    },
  },
  {
    name: specializationNames.extra,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.pressProven),
    unlockCriteria: {
      [attributeNames.composure]: 90,
      [attributeNames.shortPass]: 90,
      [attributeNames.gkPos]: 92,
    },
  },
  {
    name: specializationNames.finisherPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.chipShot),
    unlockCriteria: {
      [attributeNames.reactions]: 90,
      [attributeNames.composure]: 92,
      [attributeNames.ballControl]: 90,
    },
  },
  {
    name: specializationNames.gadget,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.technical),
    unlockCriteria: {
      [attributeNames.dribbling]: 90,
      [attributeNames.ballControl]: 90,
      [attributeNames.balance]: 92,
    },
  },
  {
    name: specializationNames.heartbeat,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.relentless),
    unlockCriteria: {
      [attributeNames.agility]: 92,
      [attributeNames.stamina]: 90,
      [attributeNames.aggression]: 90,
    },
  },
  {
    name: specializationNames.hotshot,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.powerShot),
    unlockCriteria: {
      [attributeNames.finishing]: 90,
      [attributeNames.shotPower]: 92,
      [attributeNames.longShots]: 90,
    },
  },
  {
    name: specializationNames.hunter,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.gamechanger),
    unlockCriteria: {
      [attributeNames.attPosition]: 90,
      [attributeNames.finishing]: 90,
      [attributeNames.curve]: 92,
    },
  },
  {
    name: specializationNames.invader,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.incisivePass),
    unlockCriteria: {
      [attributeNames.attPosition]: 90,
      [attributeNames.vision]: 90,
      [attributeNames.longPass]: 92,
    },
  },
  {
    name: specializationNames.janitor,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.quickStep),
    unlockCriteria: {
      [attributeNames.acceleration]: 90,
      [attributeNames.sprintSpeed]: 90,
      [attributeNames.slideTackle]: 92,
    },
  },
  {
    name: specializationNames.joker,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.whippedPass),
    unlockCriteria: {
      [attributeNames.attPosition]: 90,
      [attributeNames.crossing]: 92,
      [attributeNames.longPass]: 90,
    },
  },
  {
    name: specializationNames.launcher,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.longBallPass),
    unlockCriteria: {
      [attributeNames.longPass]: 90,
      [attributeNames.gkKicking]: 92,
      [attributeNames.gkReflexes]: 90,
    },
  },
  {
    name: specializationNames.maestroPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.technical),
    unlockCriteria: {
      [attributeNames.balance]: 90,
      [attributeNames.vision]: 92,
      [attributeNames.dribbling]: 90,
    },
  },
  {
    name: specializationNames.magicianPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.firstTouch),
    unlockCriteria: {
      [attributeNames.acceleration]: 90,
      [attributeNames.composure]: 90,
      [attributeNames.ballControl]: 92,
    },
  },
  {
    name: specializationNames.marauderPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.slideTackle),
    unlockCriteria: {
      [attributeNames.sprintSpeed]: 92,
      [attributeNames.aggression]: 90,
      [attributeNames.slideTackle]: 90,
    },
  },
  {
    name: specializationNames.octopus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.deflector),
    unlockCriteria: {
      [attributeNames.strength]: 90,
      [attributeNames.gkDiving]: 92,
      [attributeNames.gkPos]: 90,
    },
  },
  {
    name: specializationNames.pioneer,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.pingedPass),
    unlockCriteria: {
      [attributeNames.dribbling]: 92,
      [attributeNames.longPass]: 90,
      [attributeNames.shortPass]: 90,
    },
  },
  {
    name: specializationNames.presser,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.relentless),
    unlockCriteria: {
      [attributeNames.aggression]: 90,
      [attributeNames.stamina]: 92,
      [attributeNames.agility]: 90,
    },
  },
  {
    name: specializationNames.progressorPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.jockey),
    unlockCriteria: {
      [attributeNames.longPass]: 90,
      [attributeNames.defAware]: 90,
      [attributeNames.standTackle]: 92,
    },
  },
  {
    name: specializationNames.recyclerPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.pingedPass),
    unlockCriteria: {
      [attributeNames.strength]: 90,
      [attributeNames.longPass]: 90,
      [attributeNames.shortPass]: 92,
    },
  },
  {
    name: specializationNames.roamer,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.incisivePass),
    unlockCriteria: {
      [attributeNames.vision]: 90,
      [attributeNames.longPass]: 90,
      [attributeNames.shortPass]: 92,
    },
  },
  {
    name: specializationNames.runner,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.enforcer),
    unlockCriteria: {
      [attributeNames.sprintSpeed]: 92,
      [attributeNames.strength]: 90,
      [attributeNames.attPosition]: 90,
    },
  },
  {
    name: specializationNames.shotStopperPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.crossClaimer),
    unlockCriteria: {
      [attributeNames.jumping]: 90,
      [attributeNames.gkHandling]: 92,
      [attributeNames.gkPos]: 90,
    },
  },
  {
    name: specializationNames.sniper,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.powerShot),
    unlockCriteria: {
      [attributeNames.finishing]: 90,
      [attributeNames.shotPower]: 92,
      [attributeNames.longShots]: 90,
    },
  },
  {
    name: specializationNames.sparkPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.quickStep),
    unlockCriteria: {
      [attributeNames.acceleration]: 90,
      [attributeNames.sprintSpeed]: 90,
      [attributeNames.agility]: 92,
    },
  },
  {
    name: specializationNames.speedster,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.rapid),
    unlockCriteria: {
      [attributeNames.acceleration]: 90,
      [attributeNames.sprintSpeed]: 92,
      [attributeNames.dribbling]: 90,
    },
  },
  {
    name: specializationNames.spider,
    newSignaturePlayStyle: getPlayStylePlusByName(
      playStyleNames.oneVOneCloseDown
    ),
    unlockCriteria: {
      [attributeNames.acceleration]: 90,
      [attributeNames.agility]: 90,
      [attributeNames.gkReflexes]: 92,
    },
  },
  {
    name: specializationNames.sweeperKeeperPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.farThrow),
    unlockCriteria: {
      [attributeNames.vision]: 90,
      [attributeNames.gkDiving]: 92,
      [attributeNames.gkKicking]: 90,
    },
  },
  {
    name: specializationNames.targetPlus,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.acrobatic),
    unlockCriteria: {
      [attributeNames.agility]: 90,
      [attributeNames.jumping]: 92,
      [attributeNames.volleys]: 90,
    },
  },
  {
    name: specializationNames.thief,
    newSignaturePlayStyle: getPlayStylePlusByName(playStyleNames.anticipate),
    unlockCriteria: {
      [attributeNames.interceptions]: 90,
      [attributeNames.defAware]: 90,
      [attributeNames.standTackle]: 92,
    },
  },
];

export default specializations;
