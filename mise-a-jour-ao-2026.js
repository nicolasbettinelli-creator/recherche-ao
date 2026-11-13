/* Correctif de transition — Livret AO 2026 V2 (29.10.2026)
 * À charger après data.js et avant script.js.
 * À valider intégralement avant usage opérationnel.
 */
(() => {
  "use strict";
  if (typeof amendes === "undefined" || !Array.isArray(amendes)) {
    console.error("La base data.js n'est pas disponible.");
    return;
  }
  const montants = {
    "326.1":80, "326.2":80, "327.1":100,
    "605.2":40, "617.2":30, "624":40, "625":30
  };
  const libelles = {
    "203.4":"Payer une nouvelle taxe avant la fin du temps autorisé, lorsque c’est interdit.",
    "314.2":"Dépasser par la droite en déboîtant puis en se rabattant sur des routes principales ou secondaires à plusieurs voies.",
    "314.3":"Dépasser par la droite en déboîtant puis en se rabattant sur des autoroutes et des semi-autoroutes à plusieurs voies.",
    "327.1":"Circuler sur une autoroute ou une semi-autoroute avec un motocycle dont la cylindrée n’est pas supérieure à 50 cm³ ou dont la puissance n’excède pas 4 kW.",
    "625":"Dépasser la vitesse maximale autorisée ou signalée sur un cyclomoteur, après déduction de la marge d’erreur fixée par l’OFROU.",
    "6001":"Emprunter une route nationale I ou II sans avoir acheté la vignette nécessaire pour la période de taxation.",
    "6002":"Emprunter une route nationale I ou II sans avoir collé la vignette nécessaire sur le véhicule ou à l’emplacement prescrit, ou avec une vignette endommagée.",
    "7409":"Ne pas observer les signaux d’interdiction A1 à A6 et A10 à A13 de l’annexe 4 ONI ou A.1 à A.3 et A.7 à A.12 de l’annexe B RNC."
  };
  // Le livret 2026 fourni ne présente plus les sous-entrées 201.
  for (let i = amendes.length - 1; i >= 0; --i) {
    if (/^201\./.test(String(amendes[i].numero))) amendes.splice(i, 1);
  }
  for (const item of amendes) {
    if (Object.hasOwn(montants, String(item.numero))) item.montant = montants[item.numero];
    if (Object.hasOwn(libelles, String(item.numero))) item.description = libelles[item.numero];
  }
  const ajouts = [
    ["306.4","circulation","Enfreindre l’ordre de présélection en n’observant pas le principe de la fermeture éclair.",100,["présélection","fermeture éclair"]],
    ["314.4","circulation","Devancer par la droite sur des routes principales ou secondaires à plusieurs voies sans y être autorisé.",100,["droite","devancer"]],
    ["314.5","circulation","Devancer par la droite sur des autoroutes et des semi-autoroutes à plusieurs voies sans y être autorisé.",200,["droite","devancer","autoroute"]],
    ["343","circulation","Contourner par la gauche un îlot, une surface interdite au trafic ou un obstacle au milieu de la chaussée.",100,["îlot","obstacle"]],
    ["626","cyclistes","Contourner par la gauche un îlot, une surface interdite au trafic ou un obstacle au milieu de la chaussée.",30,["vélo","îlot"]],
    ["703.4","cyclistes","Circuler sans le compteur de vitesse prescrit.",20,["cyclomoteur","compteur"]],
    ["3101","autres","Dissimuler son visage dans les lieux publics ou privés accessibles au public, sans qu’une exception légale ne s’applique.",100,["LIDV","dissimulation visage"]],
    ["3102","autres","Dissimuler son visage sans autorisation dans les lieux publics.",100,["LIDV","dissimulation visage"]],
    ["9003.1","autres","Jeter ou abandonner un petit déchet individuel hors des collectes prévues.",80,["déchet","mégot","littering"]],
    ["9003.2","autres","Jeter ou abandonner plusieurs petits déchets, d’un volume total inférieur à 17 litres, hors des collectes prévues.",100,["déchets","17 litres"]],
    ["9003.3","autres","Éliminer des déchets urbains d’un volume de 17 à 35 litres hors des collectes prévues.",150,["déchets","35 litres"]],
    ["9003.4","autres","Éliminer des déchets urbains d’un volume supérieur à 35 litres et allant jusqu’à 110 litres hors des collectes prévues.",250,["déchets","110 litres"]]
  ];
  const titres = {
    circulation:"Véhicules automobiles — circulation",
    cyclistes:"Cyclistes, cyclomotoristes et vélos-taxis électriques",
    autres:"Autres lois fédérales"
  };
  const connus = new Set(amendes.map(a => String(a.numero)));
  for (const [numero,categorie,description,montant,motsCles] of ajouts) {
    if (!connus.has(numero)) {
      amendes.push({numero,categorie,titreCategorie:titres[categorie],description,montant,motsCles});
      connus.add(numero);
    }
  }
  const a12011=amendes.find(a=>String(a.numero)==="12011");
  if (a12011) a12011.remarqueVerification="Montant à contrôler dans la source officielle.";
  console.info("Correctif AO 2026 chargé :",amendes.length,"entrées.");
})();
