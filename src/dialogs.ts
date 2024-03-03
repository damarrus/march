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
import { babkaDialog } from "./dialogs/a3BabkaDialogs";
import { orphanDialog } from "./dialogs/a7OrphanDialogs";
import { tokensDialog } from "./dialogs/a6TokensDialogs";

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




  gameOverDialog
]
