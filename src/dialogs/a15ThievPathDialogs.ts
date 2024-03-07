import { ACTION_MESSAGE, DIALOG_IMAGE, DIALOG_MESSAGE } from "../config";
import { Action } from "../entities/Action";
import { Condition } from "../entities/Condition";
import { Dialog } from "../entities/Dialog";
import { Effect } from "../entities/Effect";
import { Phrase } from "../entities/Phrase";
import { ICON_ACTION, ICON_DECLINE, ICON_HAMMER, ICON_HIT, ICON_ROGUE, ICON_STEAL } from "../icons";

export const thievPathDialog = new Dialog(
  "thievPath",
  [
    "Вместе с бандитами ты вскрываешь замок сундука и достаешь оттуда увесистый мешочек золота. Неплохая добыча!",
    "Один из твоих подельников предлагает влиться в их банду. Добычи будет еще больше и не только золота, но и артефактов, и чего только душа пожелает. С решением нужно поторопиться, пока защитник деревни сэр Олэйджа Стена не пустился за вами в погоню."
  ],
  [
    new Phrase(
      "Я в деле", "yes", ICON_ACTION,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Тебе уже доводилось бывать в банде, у этого определенно есть свои плюсы. Ну, а о минусах всегда можно позаботиться позже. Сев на оставленных разбойниками неподалеку коней, вы скачите прочь.") ])],
      "inviteGang"
    ),
    new Phrase(
      "Я пас", "no", ICON_DECLINE,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Тебе не улыбается вступать в какую-то банду из захолустья. Убедительно дирижируя кинжалом, ты убеждаешь бандитов отдать тебе долю добычи и, прихватив одного из оставленных ими неподалеку коней, скачешь вперед к горизонту и новым приключениям.") ])],
      "gameover"
    ),
  ]
)

export const thievInviteGangDialog = new Dialog(
  "inviteGang",
  [
    "Спустя несколько часов, вы прибываете в лагерь бандитов, скрытый в лесу. Помимо прочих бандитов, вас встречает рослый, покрытый шрамами и татуировками верзила. Похоже это главарь банды, о котором тебе уже успел рассказать один из подельников - капитан Абьюз, грозный пират. Правда без корабля. Потому что в лесу кораблям делать нечего.",
    "Свирепо глядя на тебя залитыми кровью глазами, он интересуется у своих людей, “какого черта женщина в цепях”. После того как один из бандитов рассказывает о том, что ты им помогла, капитан выхватывает меч и отрубает ему голову",
    "- Заковать ее вместе с остальными женщинами из деревни! Продадим работорговцам на юге.",
    "Только сейчас ты замечаешь, что за спинами разбойников под большим деревом сидят скованные длинной цепью крестьянки. Как же пригодилась бы сейчас та дымовая шашка…",

  ],
  [
    new Phrase(
      "Сдаться", "giveUp", ICON_DECLINE,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Ты понимаешь, что вступить в бой с превосходящим врагом себе дороже. Нужно усыпить их бдительность, а потом действовать. Незаметно пряча отмычку в рукав, ты позволяешь разоружить себя и заковать в кандалы.") ])],
      "thievGiveUp"
    ),
    new Phrase(
      "Вступить в бой", "attack", ICON_HIT,
      [],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Резко толкнув стоящего рядом бандита в сторону Абьюза, ты уходишь вбок ловким пируэтом, попутно разряжая арбалет в капитана.") ])],
      "thievOnAttack"
    ),
  ]
);
 
export const thievGiveUpDialog = new Dialog(
  "thievGiveUp",
  [
    "Через несколько часов уже начинает темнеть и бандиты закатывают пирушку, отмечая удачный налет. В воздухе звенят непотребные песни и витает запах алкоголя. Но для тебя это запах надежды.",
    "Незаметно вытащив отмычку, ты быстро вскрываешь замок и смотришь в сторону капитанского шатра. Ты бы могла просто сбежать, у тебя всегда была такая возможность. Но не сейчас - Абьюзу нужно преподать урок. Глядя на пьяных разбойников, ты обдумываешь план мести."
  ],
  [
    new Phrase(
      "Разобраться с Абъюзом", "attack", ICON_HIT,
      [],
      [],
      "thievActionAbuse"
    ),
    new Phrase(
      "Отравить выпивку бандитов", "poison", ICON_STEAL,
      [],
      [],
      "thievPoisonGang"
    ),
  ]
);


export const thievActionAbuseDialog = new Dialog(
  "thievActionAbuse",
  [
    "Словно тень, которая прячется в тенях на теневой стороне, ты крадешься в сторону шатра. Внутри, в отсветах костра, различим силуэт здоровенного разбойника.",
    "Прихватив по пути свой кинжал с одной из оружейных стойки, ты наконец незаметно заходишь в шатер.",
    "Вот он - Абьюз. Слегка покачиваясь от выпитого эля, он стоит к тебе спиной, изучая содержимое одного из бочонков. Он даже не поймет, что с ним случится:",
  ],
  [
    new Phrase(
      "Пронзить кинжалом", "attack", ICON_ROGUE,
      [],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Вложив в удар всю силу, ты вгоняешь кинжал по самую рукоятку в спину негодяя. Издав булькающий звук, он удивленно оборачивается и, пробормотав что-то невероятно сексистское, падает прямо в бочку с элем. Алкоголь убивает. И сталь тоже."),
        new Effect("abuseKilled", "=", true)
      ])],
      "thievAfterActionAbuse"
    ),
    new Phrase(
      "Оглушить ударом рукояти", "stun", ICON_HAMMER,
      [],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Ты крепко бьешь уже подпившего бандита по голове, отправляя его в нокаут. Падая он также ударяется лицом прямо о край бочки, к твоему большому удовольствию. Ты связываешь бессознательного противника."),
        new Effect("abuseStunned", "=", true)
      ])],
      "thievAfterActionAbuse"
    ),
  ]
);


export const thievAfterActionAbuseDialog = new Dialog(
  "thievAfterActionAbuse",
  [
    "Выйдя из капитанского  шатра, ты громко объявляешь о том, что капитан Абьюз...",
  ],
  [
    new Phrase(
      "Мертв", "killed", ICON_HIT,
      [ new Condition("abuseKilled", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "...мертв и, по праву силы, ты теперь главарь банды. Видя вытащенное тобой на улицу тело капитана, разбойники испуганно кивают и единогласно признают твое старшинство") ])],
      "thievFinal"
    ),
    new Phrase(
      "Побежден", "stunned", ICON_HIT,
      [ new Condition("abuseStunned", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "...побежден и, по праву силы, ты теперь главарь банды. Видя связанного капитана, разбойники испуганно кивают и единогласно признают твое старшинство.") ])],
      "thievFinal"
    ),
  ]
);

export const thievPoisonGangDialog = new Dialog(
  "thievPoisonGang",
  [
    "Словно тень, которая прячется в тенях на теневой стороне, ты крадешься по лагерю, прячась за бочками с выпивкой. Очень удачно тебе попадается на пути твой вещмешок из которого ты достаешь:",
  ],
  [
    new Phrase(
      "Смертельный яд", "poison", ICON_STEAL,
      [ new Condition("abuseKilled", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Все они заслуживают смерти за то, что пытались продать тебя в рабство. Подсыпав яд в самый крупный бочонок, тебе не приходится долго ждать. После очередного тоста за здоровье капитана, он сам и вся его банда замертво валятся на землю.") ])],
      "thievAfterPoisonGang"
    ),
    new Phrase(
      "Сильнейшее снотворное", "sleep", ICON_STEAL,
      [ new Condition("abuseStunned", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "Все же массовое убийство это чересчур. Куда лучше усыпить их на денек, а после сдать властям за вознаграждение. Подсыпав снотворное в самый крупный бочонок, тебе не приходится долго ждать. После очередного тоста за здоровье капитана, он сам и вся его банда засыпают, громко храпя на весь лес.") ])],
      "thievAfterPoisonGang"
    ),
  ]
);


export const thievAfterPoisonGangDialog = new Dialog(
  "thievAfterPoisonGang",
  [
    "Банда больше не представляет угрозы и ты освобождаешь пленных крестьянок, которые радостно обнимают тебя и благодарят за спасение. Ты предлагаешь им…",
  ],
  [
    new Phrase(
      "Прихватить добро", "back", ICON_STEAL,
      [ new Condition("abuseKilled", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "...погрузить все добро в лагере на стоящих здесь лошадей и вернуться в деревню. Где тебя, без сомнения, наградят за уничтожение ужасного  Абьюза и его банды.") ])],
      "gameover"
    ),
    new Phrase(
      "Связать разбойников", "sleep", ICON_STEAL,
      [ new Condition("abuseStunned", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "...связать разбойников покрепче и послать за ополченцами и сэром Олэйджей Стеной. А уже они, без сомнения, наградят тебя за победу над ужасным  Абьюзом и его бандой.") ])],
      "gameover"
    ),
  ]
);

export const thievOnAttackDialog = new Dialog(
  "thievOnAttack",
  [
    "Эх, немного промахнулась! Арбалетный болт попадает Абьюзу в плечо и он яростно кричит:",
    "- Все назад! Я сам покажу этой женщине, где ее место!",
    "Да будет так. Зарядив арбалет новым болтом, во вторую ты берешь свой острый кинжал. Подняв над головой меч, капитан яростно орет и бросается на тебя. Начинается танец со смертью под аккомпанемент звона стали, воплей Абьюза и:"
  ],
  [
    new Phrase(
      "Katy Perry - California Girls", "katy", ICON_STEAL,
      [],
      [],
      "thievGoAttack"
    ),
    new Phrase(
      "Dope - Die motherfuker, die!", "dope", ICON_STEAL,
      [],
      [],
      "thievGoAttack"
    ),
    new Phrase(
      "Witcher - Steel for Humans", "witcher", ICON_STEAL,
      [],
      [],
      "thievGoAttack"
    ),
    new Phrase(
      "Kilogramm - Хащ-Хащ", "kilogramm", ICON_STEAL,
      [],
      [],
      "thievGoAttack"
    ),
  ]
);

export const thievGoAttackDialog = new Dialog(
  "thievGoAttack",
  [
    "Здоровяк явно сильнее тебя, но на твоей стороне скорость и ловкость. При очередной атаке бандита ты делаешь через него виртуозное сальто и стреляешь прямо в ступню, пригвоздив его ногу к земле. Абьюз издает вопль боли и падает на одно колено - этой заминки более чем достаточно. Прокрутив в руке кинжал, ты:"
  ],
  [
    new Phrase(
      "Пронзаешь им врага", "attack", ICON_ROGUE,
      [],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Вложив в удар всю силу, ты вгоняешь кинжал по самую рукоятку в горло негодяя. Издав булькающий звук, он удивленно смотрит на тебя и, пробормотав что-то невероятно сексистское, валится на землю."),
        new Effect("abuseKilled", "=", true)
      ])],
      "thievAfterActionAbuse"
    ),
    new Phrase(
      "Оглушаешь врага рукоятью", "stun", ICON_HAMMER,
      [],
      [ new Action([ 
        new Effect(ACTION_MESSAGE, "=", "Ты крепко бьешь бандита по голове, отправляя его в нокаут. Падая он также ударяется лицом прямо о камень, к твоему большому удовольствию. Ты ставишь ногу на бессознательного противника."),
        new Effect("abuseStunned", "=", true)
      ])],
      "thievAfterActionAbuse"
    ),
  ]
);

export const thievFinalDialog = new Dialog(
  "thievFinal",
  [
    "Теперь банда в полном твоем распоряжении. Ты предлагаешь им…"
  ],
  [
    new Phrase(
      "Отпустить крестьянок", "back", ICON_STEAL,
      [ new Condition("abuseKilled", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "...отпустить крестьянок, прежде получив за них выкуп от деревни. Радостные разбойники славят хитрость и смекалку своей новой атаманши.") ])],
      "gameover"
    ),
    new Phrase(
      "Сдать властям Абьюза", "sleep", ICON_STEAL,
      [ new Condition("abuseStunned", "==", true)],
      [ new Action([ new Effect(ACTION_MESSAGE, "=", "...отпустить крестьянок, прежде получив за них выкуп от деревни, а также сдать Абьюза властям за вознаграждение. Радостные разбойники славят хитрость и смекалку своей новой атаманши.") ])],
      "gameover"
    ),
  ]
);
