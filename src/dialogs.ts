import { ICON_ACTION, ICON_BEER, ICON_DECLINE, ICON_DICE, ICON_LOOK, ICON_QUESTION, ICON_START } from "./icons";
import { Action } from "./entities/Action";
import { Condition } from "./entities/Condition";
import { Dialog } from "./entities/Dialog";
import { Phrase } from "./entities/Phrase";
import { Effect } from "./entities/Effect";
import { ACTION_MESSAGE, CLEAR, DIALOG_IMAGE, DIALOG_MESSAGE, INPUT_PHRASE } from "./config";
import { InputPhrase } from "./entities/InputPhrase";
import { InputEffect } from "./entities/InputEffect";
import { applySetClassDialog, gameOverDialog, setClassDialog, startDialog, villageDialog } from "./dialogs/a1StartDialogs";
import { exploreTavernDialog, setDishDialog, tavernDialog, yarikDialog } from "./dialogs/a2TavernDialogs";
import { gnomDialog, gnomNextDialog, nextDayDialog, sleepDialog } from "./dialogs/a4HolidayDialogs";
import { contestChoiseDialog, intellectContestDialog, intellectContestInputDialog, intellectContestVariantsDialog, strengthContestDialog } from "./dialogs/a5ContestDialogs";
import { babkaDialog, epicFailureDialog, failureDialog, halfFailureDialog, successDialog } from "./dialogs/a3BabkaDialogs";
import { orphanDialog } from "./dialogs/a7OrphanDialogs";
import { tokensDialog } from "./dialogs/a6TokensDialogs";
import { chestDialog, stealChestDialog, underAttackDialog } from "./dialogs/a12ChestDialogs";
import { chestAlarmOrGoDialog, chestHelpDialog, chestLookDialog, ebkaClericDialog, ebkaMageDialog, ebkaRogueDialog, ebkaWarDialog } from "./dialogs/a13UnderAttackDialogs";
import { thievActionAbuseDialog, thievAfterActionAbuseDialog, thievAfterPoisonGangDialog, thievFinalDialog, thievGiveUpDialog, thievGoAttackDialog, thievInviteGangDialog, thievOnAttackDialog, thievPathDialog, thievPoisonGangDialog } from "./dialogs/a15ThievPathDialogs";
import { epilogue1, epilogue2, epilogue3, epilogue4 } from "./dialogs/a17Epilogues";
import { villageAfterDialog, villageAmuletAfter1Dialog, villageAmuletAfter2Dialog, villageAmuletDialog, villageCallAbuse2, villageCallAbuse3, villageCallAbuse4, villageCallAbuseCleric, villageCallAbuseDialog, villageCallAbuseMage, villageCallAbuseRogue, villageCallAbuseWarrior, villageHelpDialog, villageHide2Dialog, villageHideDialog, villageLeaveDialog, villageMestnieDialog, villagePalatkiDialog } from "./dialogs/a16VillagePathDialogs";

export const dialogs = [
  startDialog,
  setClassDialog,
  applySetClassDialog,
  villageDialog,

  tavernDialog,
  setDishDialog,
  exploreTavernDialog,
  yarikDialog,

  babkaDialog,
  epicFailureDialog,
  failureDialog,
  halfFailureDialog,
  successDialog,
  
  sleepDialog,
  nextDayDialog,
  gnomDialog,
  gnomNextDialog,

  contestChoiseDialog,
  strengthContestDialog,
  intellectContestDialog,
  intellectContestInputDialog,
  intellectContestVariantsDialog,

  tokensDialog,
  orphanDialog,

  chestDialog,
  underAttackDialog,
  stealChestDialog,
  chestAlarmOrGoDialog,
  chestLookDialog,
  ebkaWarDialog,
  ebkaClericDialog,
  ebkaMageDialog,
  ebkaRogueDialog,
  thievPathDialog,
  thievInviteGangDialog,
  thievGiveUpDialog,
  thievActionAbuseDialog,
  thievAfterActionAbuseDialog,
  thievPoisonGangDialog,
  thievAfterPoisonGangDialog,
  thievOnAttackDialog,
  thievGoAttackDialog,
  thievFinalDialog,
  chestHelpDialog,

  villageLeaveDialog,
  villagePalatkiDialog,
  villageHelpDialog,
  villageMestnieDialog,
  villageAfterDialog,
  villageHideDialog,
  villageHide2Dialog,
  villageCallAbuseDialog,
  villageCallAbuse2,
  villageCallAbuse3,
  villageCallAbuseWarrior,
  villageCallAbuseCleric,
  villageCallAbuseMage,
  villageCallAbuseRogue,
  villageCallAbuse4,
  villageAmuletDialog,
  villageAmuletAfter1Dialog,
  villageAmuletAfter2Dialog,
  
  epilogue1,
  epilogue2,
  epilogue3,
  epilogue4,



  gameOverDialog
]
