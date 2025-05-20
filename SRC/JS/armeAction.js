// SRC/JS/armeAction.js

const armeDescriptions = {
  // TRANCHANT/POINTU
  "couteau": [
    "La victime a été poignardée avec un couteau.",
    "Un couteau ensanglanté traîne près du corps.",
    "Un couteau a été retrouvé à proximité, sans certitude sur son implication.",
    "La lame du couteau est plantée dans le bois d’une table voisine.",
    "Le couteau est posé bien en vue, comme s'il avait été oublié.",
    "On ne sait pas si le couteau a servi… mais il n’est plus à sa place habituelle.",
    "Le couteau a visiblement été lancé à travers la pièce.",
    "Un couteau a glissé sous un meuble, loin de la victime."
  ],
  "couteau de cuisine": [
    "Le couteau de cuisine est taché de sang.",
    "La victime porte une entaille, mais rien ne prouve que le couteau de cuisine ait été utilisé.",
    "Un couteau de cuisine est posé sur le plan de travail, propre.",
    "Le couteau de cuisine a été retrouvé dans l’évier.",
    "Un couteau de cuisine brisé est au sol."
  ],
  "dague rouillée": [
    "La dague rouillée a été retrouvée près du corps.",
    "Des traces de rouille marquent le sol.",
    "La dague rouillée semble avoir glissé sous un meuble.",
    "Personne ne sait depuis quand la dague traîne ici.",
    "La dague est posée à côté d’un livre ancien, sans autre indice."
  ],
  "épée longue": [
    "L'épée longue repose contre le mur.",
    "La victime porte une blessure nette, mais l'épée est restée dans son fourreau.",
    "On retrouve l’épée à l’autre bout de la pièce, comme jetée dans la panique.",
    "L’épée longue est propre, comme si elle n’avait pas servi.",
    "Un éclat métallique dans la lumière attire l’œil vers l’épée."
  ],
  "hache de guerre": [
    "La hache de guerre est plantée dans le sol.",
    "La hache a disparu, mais une trace de son passage demeure sur le bois.",
    "La victime est loin de la hache, qui semble avoir été déplacée.",
    "Une hache de guerre repose, négligemment, contre la porte."
  ],
  "canne-épée": [
    "La canne-épée est posée sur une chaise.",
    "Une trace de frottement laisse penser que la lame a été sortie.",
    "La canne-épée a disparu du porte-parapluie.",
    "La victime tient encore la canne-épée dans la main.",
    "Le fourreau de la canne-épée est vide."
  ],
  "fourche": [
    "La fourche est plantée dans un tas de foin.",
    "Du sang a séché sur une des dents de la fourche.",
    "La fourche a été retrouvée à l’extérieur, loin de la scène.",
    "La victime semble avoir tenté de se défendre avec la fourche."
  ],
  "couteau de récolte": [
    "Un couteau de récolte est enfoncé dans la terre du potager.",
    "La victime porte des marques superficielles.",
    "Le couteau de récolte a été perdu dans la panique.",
    "Personne ne sait qui a touché au couteau de récolte."
  ],
  "broche à viande": [
    "La broche à viande est tombée au sol.",
    "Des traces de graisse rendent la broche glissante.",
    "La broche à viande a disparu.",
    "La broche est encore chaude, comme si elle venait de servir."
  ],
  "flèche empoisonnée": [
    "Une flèche empoisonnée est plantée dans le mur.",
    "Le poison a coulé sur le carrelage.",
    "La flèche empoisonnée a été brisée en deux.",
    "Personne ne sait comment la flèche a atterri là."
  ],
  "arc court": [
    "Un arc court repose à côté d’un carquois vide.",
    "Des flèches sont éparpillées sur le sol.",
    "L’arc a été tendu, puis abandonné.",
    "Le fil de l’arc est rompu."
  ],
  "arbalète": [
    "L’arbalète est posée sur la table.",
    "Un carreau a été tiré récemment.",
    "L’arbalète est vide, sans trace de lutte.",
    "Une corde d’arbalète gît à côté du corps."
  ],
  "sécateur": [
    "Le sécateur est couvert de sève.",
    "Le sécateur est rangé à sa place habituelle.",
    "Un sécateur est tombé dans un parterre de fleurs.",
    "La victime semble avoir utilisé le sécateur avant l’incident."
  ],
  "ciseau à bois": [
    "Un ciseau à bois est planté dans le plancher.",
    "Le ciseau à bois a disparu de la boîte à outils.",
    "Des copeaux de bois recouvrent la scène.",
    "Le ciseau à bois a été oublié sur un établi."
  ],
  "ciseaux": [
    "Des ciseaux sont ouverts sur la table.",
    "La victime porte une coupure légère.",
    "Un ciseau manque à l’appel.",
    "Les ciseaux sont tordus, comme après une lutte."
  ],
  "scalpel": [
    "Le scalpel a roulé sous un meuble.",
    "Un scalpel est posé sur une serviette blanche.",
    "Le scalpel est propre, rangé à sa place.",
    "La victime a peut-être tenté de l’utiliser pour se défendre."
  ],
  "scalpel énergisé": [
    "Le scalpel énergisé clignote encore faiblement.",
    "Des traces de brûlure sont visibles sur le sol.",
    "Le scalpel énergisé est éteint, posé à l’écart.",
    "La victime n’a pas l’air d’y avoir touché."
  ],
  "bistouri": [
    "Un bistouri a été retrouvé dans une poche.",
    "Le bistouri est rouillé.",
    "Le bistouri est tombé à côté du lit.",
    "La victime aurait pu se blesser elle-même."
  ],
  "rasoir": [
    "Le rasoir est fermé, posé sur le lavabo.",
    "Un rasoir a disparu de la trousse de toilette.",
    "Le rasoir a été oublié sur une serviette.",
    "Un rasoir traîne au fond d’un tiroir."
  ],
  "tournevis": [
    "Un tournevis est enfoncé dans une planche.",
    "Le tournevis a été lancé à travers la pièce.",
    "Un tournevis est posé sur le rebord de la fenêtre.",
    "La victime tient un tournevis à la main."
  ],
  "clé": [
    "La clé est tordue, comme si elle avait servi à autre chose.",
    "Une clé a été retrouvée loin de la porte.",
    "La victime porte un trousseau de clés à la ceinture.",
    "Les clés ont glissé sous un meuble."
  ],
  "clé à molette": [
    "La clé à molette est couverte de traces de doigts.",
    "Une clé à molette repose sur l’établi.",
    "La clé à molette a été posée à la va-vite.",
    "Un bruit sourd a retenti quand la clé à molette a été jetée au sol."
  ],

  // CONTONDANT/FRAPPANT
  "masse d'arme": [
    "La masse d'arme est en équilibre précaire contre un mur.",
    "La victime est loin de la masse d’arme.",
    "La masse d’arme porte des traces de boue.",
    "Un bruit de métal a retenti dans la pièce adjacente."
  ],
  "marteau": [
    "Un marteau est posé sur la table.",
    "Le marteau a été oublié sur un chantier.",
    "Un marteau roule au sol, loin du crime.",
    "La victime a peut-être tenté de se défendre avec le marteau."
  ],
  "marteau à viande": [
    "Le marteau à viande est recouvert de graisse.",
    "Un marteau à viande a disparu du tiroir.",
    "Le marteau à viande a atterri dans l’évier.",
    "Un bruit sourd laisse penser à une chute de marteau à viande."
  ],
  "tisonnier": [
    "Le tisonnier est encore chaud.",
    "Un tisonnier repose dans l’âtre.",
    "Le tisonnier a été déplacé récemment.",
    "Des cendres couvrent le tisonnier."
  ],
  "pied de biche": [
    "Le pied de biche est tordu.",
    "Un pied de biche est posé près de la porte.",
    "Le pied de biche a quitté sa place habituelle.",
    "La victime ne semble pas avoir remarqué le pied de biche."
  ],
  "barre de fer": [
    "La barre de fer est couverte de poussière.",
    "Une barre de fer bloque l’accès à la sortie.",
    "La barre de fer a roulé sous le lit.",
    "Des empreintes sont visibles sur la barre de fer."
  ],
  "bâton ferré": [
    "Le bâton ferré est appuyé sur le mur.",
    "Un bâton ferré est posé sur une chaise.",
    "Le bâton ferré a été oublié dans un coin.",
    "La victime n’a pas saisi le bâton ferré."
  ],
  "bâton gravitationnel": [
    "Le bâton gravitationnel flotte lentement dans la pièce.",
    "Le bâton gravitationnel est activé, mais loin de la victime.",
    "Un bruit étrange avait été signalé juste avant.",
    "Le bâton gravitationnel repose sur le sol, intact."
  ],
  "bâton de berger": [
    "Un bâton de berger est adossé à la porte.",
    "Le bâton de berger a glissé dans la paille.",
    "La victime n’est pas loin du bâton de berger.",
    "Le bâton de berger a perdu son embout."
  ],
  "bâton": [
    "Un bâton est brisé en deux.",
    "Le bâton a été lancé à travers la pièce.",
    "Des copeaux de bois jonchent le sol.",
    "Le bâton a été retrouvé près de la scène sans preuve directe d’utilisation."
  ],
  "gourdin": [
    "Le gourdin est couvert de sciure.",
    "Un gourdin a roulé sous la table.",
    "La victime n’a pas de blessure évidente au gourdin.",
    "Le gourdin est utilisé comme cale-porte."
  ],
  "tabouret": [
    "Un tabouret est renversé près du corps.",
    "Le tabouret a une patte brisée.",
    "La victime s’est-elle cognée en tombant du tabouret ?",
    "Le tabouret a été replacé à sa place après l’incident."
  ],
  "pelle": [
    "La pelle est encore couverte de terre.",
    "La pelle a été plantée dans un tas de sable.",
    "La victime n’est pas loin de la pelle.",
    "La pelle a disparu du cabanon."
  ],
  "pioche": [
    "La pioche est posée contre le mur.",
    "Un bruit métallique laisse penser à une chute de pioche.",
    "La pioche a été plantée dans le sol.",
    "Des traces de terre sont visibles sur le manche de la pioche."
  ],
  "rame": [
    "Une rame flotte dans l’eau.",
    "La rame a été retrouvée sur le quai.",
    "La victime semble avoir voulu se défendre avec la rame.",
    "La rame repose contre le mur, bien rangée."
  ],
  "planche": [
    "Une planche est tombée du plafond.",
    "Des échardes de planche sont retrouvées près du corps.",
    "La planche a été déplacée récemment.",
    "La victime n’a pas de blessure évidente liée à la planche."
  ],
  "coupelle": [
    "Une coupelle est brisée au sol.",
    "La coupelle a roulé sous le canapé.",
    "Du liquide a coulé sur la coupelle.",
    "La coupelle manque à l’appel."
  ],
  "brique": [
    "Une brique a été retrouvée sur la scène.",
    "Des traces de poussière de brique sont visibles.",
    "La brique a été déplacée de son emplacement d’origine.",
    "Personne ne sait qui a amené la brique ici."
  ],
  "pot de fleur": [
    "Un pot de fleur est renversé.",
    "Des fleurs fanées jonchent le sol.",
    "Le pot de fleur s’est brisé en tombant.",
    "La victime n'est pas loin du pot de fleur."
  ],
  "statue lourde": [
    "La statue lourde est tombée récemment.",
    "Des marques sur le sol témoignent d'un déplacement de la statue.",
    "La statue lourde est intacte mais mal positionnée.",
    "Personne ne sait qui a touché à la statue lourde."
  ],
  "statue d'ange": [
    "Une statue d’ange est posée à l’envers.",
    "L’ange de pierre est fissuré.",
    "La statue d’ange n’est plus à sa place habituelle.",
    "La victime semble avoir tenté d'éviter la statue."
  ],
  "statue": [
    "Une statue est déplacée.",
    "La statue est couverte de poussière.",
    "Un pan de la statue est manquant.",
    "La statue est appuyée contre la porte."
  ],
  "buste": [
    "Le buste est posé sur le sol.",
    "Des morceaux de buste sont retrouvés dans la pièce.",
    "Le buste a été déplacé.",
    "Personne ne sait qui a pris le buste."
  ],
  "pied de chaise": [
    "Un pied de chaise est cassé.",
    "Le pied de la chaise traîne à côté du meuble.",
    "La chaise manque un pied.",
    "Le pied de chaise a roulé sous la table."
  ],
  "pied de télescope": [
    "Le pied de télescope est tordu.",
    "Le télescope est renversé.",
    "Le pied de télescope est posé sur le bureau.",
    "La victime n’a pas touché au télescope."
  ],
  "pied de lampe": [
    "Le pied de lampe est cabossé.",
    "La lampe est éteinte.",
    "Le pied de lampe a été déplacé.",
    "La victime est loin de la lampe."
  ],
  "balai": [
    "Un balai est posé contre le mur.",
    "Des poils du balai sont éparpillés.",
    "Le balai a été brisé.",
    "Le balai a été utilisé pour bloquer la porte."
  ],
  "tenailles": [
    "Les tenailles sont rouillées.",
    "Une pince traîne sur le sol.",
    "Les tenailles sont couvertes de terre.",
    "La victime n’a pas utilisé les tenailles."
  ],
  "seau": [
    "Un seau est rempli d’eau.",
    "Le seau a été renversé.",
    "Le seau est suspendu à un crochet.",
    "La victime est assise à côté du seau."
  ],
  "pierre sculptée": [
    "Une pierre sculptée est tombée de la corniche.",
    "La pierre est couverte de mousse.",
    "La pierre sculptée a été déplacée.",
    "La victime n’a pas de blessure liée à la pierre."
  ],
  "pierre": [
    "Une pierre roule sur le sol.",
    "Des pierres sont éparpillées dans la pièce.",
    "La pierre a été lancée par la fenêtre.",
    "La victime a trébuché sur une pierre."
  ],
  "caillou": [
    "Un caillou a roulé dans un coin.",
    "Le caillou est enfoncé dans la terre.",
    "Un caillou est posé sur la table.",
    "La victime n’a pas remarqué le caillou."
  ],

  // ... Continue ainsi pour toutes les autres armes de toutes tes époques (voir plus bas pour la suite de la structuration)
};

export { armeDescriptions };
