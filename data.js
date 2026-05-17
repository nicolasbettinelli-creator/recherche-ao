function ao(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "stationnement",
        titreCategorie: "Véhicules automobiles — stationnement / arrêt",
        description: description,
        montant: montant,
        motsCles: [
            "stationnement",
            "arrêt",
            "parcage",
            "véhicule",
            ...motsClesSupplementaires
        ]
    };
}

function aoc(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "circulation",
        titreCategorie: "Véhicules automobiles — circulation / mouvement",
        description: description,
        montant: montant,
        motsCles: [
            "circulation",
            "véhicule",
            "automobile",
            "mouvement",
            ...motsClesSupplementaires
        ]
    };
}

function aoadmin(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "administratif",
        titreCategorie: "Conducteurs — dispositions administratives",
        description: description,
        montant: montant,
        motsCles: [
            "administratif",
            "conducteur",
            "document",
            "permis",
            ...motsClesSupplementaires
        ]
    };
}

function aoe(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "equipement",
        titreCategorie: "Véhicules automobiles — construction et équipement",
        description: description,
        montant: montant,
        motsCles: [
            "équipement",
            "construction",
            "véhicule",
            "automobile",
            ...motsClesSupplementaires
        ]
    };
}
function aodetenteur(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "detenteur",
        titreCategorie: "Détenteurs de véhicules",
        description: description,
        montant: montant,
        motsCles: [
            "détenteur",
            "véhicule",
            "automobile",
            "mise en circulation",
            ...motsClesSupplementaires
        ]
    };
}
function aocycliste(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "cyclistes",
        titreCategorie: "Cyclistes, cyclomotoristes et vélos-taxis électriques",
        description: description,
        montant: montant,
        motsCles: [
            "cycliste",
            "vélo",
            "cycle",
            "cyclomoteur",
            "vélo-taxi",
            ...motsClesSupplementaires
        ]
    };
}
function aopassager(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "passagers",
        titreCategorie: "Passagers",
        description: description,
        montant: montant,
        motsCles: [
            "passager",
            "véhicule",
            "transport",
            ...motsClesSupplementaires
        ]
    };
}

function aopieton(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "piétons",
        titreCategorie: "Piétons et engins assimilés à des véhicules",
        description: description,
        montant: montant,
        motsCles: [
            "piéton",
            "piétons",
            "engin assimilé",
            "trottinette",
            "chaussée",
            "trottoir",
            ...motsClesSupplementaires
        ]
    };
}
function aoautre(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "autres",
        titreCategorie: "Autres lois fédérales",
        description: description,
        montant: montant,
        motsCles: [
            "autres lois",
            "loi fédérale",
            "contravention",
            ...motsClesSupplementaires
        ]
    };
}
function aonavigation(numero, description, montant, motsClesSupplementaires = []) {
    return {
        numero: numero,
        categorie: "navigation",
        titreCategorie: "Navigation intérieure",
        description: description,
        montant: montant,
        motsCles: [
            "navigation",
            "bateau",
            "lac",
            "port",
            "permis",
            "navigation intérieure",
            ...motsClesSupplementaires
        ]
    };
}

const amendes = [

    ao("200.a", "Dépasser la durée du stationnement autorisée de deux heures au plus.", 40, ["durée", "temps", "zone bleue"]),
    ao("200.b", "Dépasser la durée du stationnement autorisée de plus de deux heures, mais pas plus de quatre heures.", 60, ["durée", "temps", "zone bleue"]),
    ao("200.c", "Dépasser la durée du stationnement autorisée de plus de quatre heures, mais pas plus de dix heures.", 100, ["durée", "temps", "zone bleue"]),

    ao("201.1", "Stationner une deuxième fois sur le même tronçon de route en zone bleue, sans avoir auparavant engagé de nouveau son véhicule dans la circulation.", 40, ["zone bleue", "deuxième fois", "même tronçon"]),
    ao("201.3", "Stationner une deuxième fois sur la même place de parc en zone bleue, sans avoir auparavant engagé de nouveau son véhicule dans la circulation.", 40, ["zone bleue", "même place"]),
    ao("201.5", "Stationner une deuxième fois sur le même tronçon de route, sur une aire de stationnement contre paiement, sans avoir auparavant engagé de nouveau son véhicule dans la circulation.", 40, ["paiement", "parcomètre", "même tronçon"]),
    ao("201.6", "Stationner une deuxième fois sur le même tronçon de route, sur une aire de stationnement à durée limitée, sans avoir auparavant engagé de nouveau son véhicule dans la circulation.", 40, ["durée limitée", "même tronçon"]),
    ao("201.7", "Stationner une deuxième fois sur la même place de parc d’une aire de stationnement contre paiement, sans avoir auparavant engagé de nouveau son véhicule dans la circulation.", 40, ["paiement", "même place"]),
    ao("201.8", "Stationner une deuxième fois sur la même place de parc d’une aire de stationnement à durée limitée, sans avoir auparavant engagé de nouveau son véhicule dans la circulation.", 40, ["durée limitée", "même place"]),

    ao("202.1", "Ne pas placer ou placer de manière peu visible le disque de stationnement sur le véhicule.", 40, ["disque", "zone bleue"]),
    ao("202.2", "Ne pas placer ou placer de manière peu visible le ticket de stationnement sur le véhicule.", 40, ["ticket", "parcomètre", "paiement"]),
    ao("202.3", "Ne pas placer ou placer de manière peu visible la carte de stationnement pour personnes handicapées sur le véhicule.", 40, ["handicapé", "PMR", "carte handicapé"]),

    ao("203.1", "Indiquer une heure d’arrivée fausse sur le disque de stationnement.", 40, ["disque", "fausse heure", "heure arrivée"]),
    ao("203.2", "Changer l’heure d’arrivée sans quitter la place.", 40, ["disque", "changer heure", "zone bleue"]),
    ao("203.3", "Ne pas enclencher le parcomètre.", 40, ["parcomètre", "paiement"]),
    ao("203.4", "Payer la taxe une deuxième fois lorsque c’est interdit.", 40, ["taxe", "paiement"]),
    ao("203.5", "Payer la taxe lorsque la durée du stationnement est écoulée.", 40, ["taxe", "durée écoulée"]),

    ao("204", "S’arrêter à un endroit dépourvu de visibilité, notamment aux abords d’un tournant ou du sommet d’une côte.", 80, ["visibilité", "tournant", "côte"]),
    ao("205", "S’arrêter à un endroit resserré.", 80, ["resserré", "gêne"]),
    ao("206", "S’arrêter à côté d’un obstacle se trouvant sur la chaussée.", 80, ["obstacle", "chaussée"]),

    ao("207.1", "Stationner sur un tronçon servant à la présélection jusqu’à 60 minutes.", 120, ["présélection"]),
    ao("207.2", "S’arrêter sur un tronçon servant à la présélection.", 80, ["présélection"]),

    ao("208.1", "Stationner à côté d’une ligne de sécurité lorsqu’il ne reste pas un passage de 3 m de largeur au moins jusqu’à 60 minutes.", 120, ["ligne sécurité", "3 mètres", "passage"]),
    ao("208.2", "S’arrêter à côté d’une ligne de sécurité lorsqu’il ne reste pas un passage de 3 m de largeur au moins.", 80, ["ligne sécurité", "3 mètres", "passage"]),

    ao("209.1", "Stationner à côté d’une ligne longitudinale continue lorsqu’il ne reste pas un passage de 3 m de largeur au moins jusqu’à 60 minutes.", 120, ["ligne continue", "3 mètres"]),
    ao("209.2", "S’arrêter à côté d’une ligne longitudinale continue lorsqu’il ne reste pas un passage de 3 m de largeur au moins.", 80, ["ligne continue", "3 mètres"]),

    ao("210.1", "Stationner à côté d’une ligne double lorsqu’il ne reste pas un passage de 3 m de largeur au moins jusqu’à 60 minutes.", 120, ["ligne double", "3 mètres"]),
    ao("210.2", "S’arrêter à côté d’une ligne double lorsqu’il ne reste pas un passage de 3 m de largeur au moins.", 80, ["ligne double", "3 mètres"]),

    ao("211.1", "Stationner à une intersection jusqu’à 60 minutes.", 120, ["intersection", "carrefour"]),
    ao("211.2", "S’arrêter à une intersection.", 80, ["intersection", "carrefour"]),

    ao("212.1", "Stationner avant une intersection à moins de 5 m de la chaussée transversale jusqu’à 60 minutes.", 120, ["intersection", "5 mètres", "avant"]),
    ao("212.2", "S’arrêter avant une intersection à moins de 5 m de la chaussée transversale.", 80, ["intersection", "5 mètres", "avant"]),

    ao("213.1", "Stationner après une intersection à moins de 5 m de la chaussée transversale jusqu’à 60 minutes.", 120, ["intersection", "5 mètres", "après"]),
    ao("213.2", "S’arrêter après une intersection à moins de 5 m de la chaussée transversale.", 80, ["intersection", "5 mètres", "après"]),

    ao("214.1", "Stationner sur un passage pour piétons jusqu’à 60 minutes.", 120, ["passage piéton", "zèbre"]),
    ao("214.2", "S’arrêter sur un passage pour piétons.", 80, ["passage piéton", "zèbre"]),

    ao("215.1", "Stationner dans le prolongement d’un passage pour piétons jusqu’à 60 minutes.", 120, ["passage piéton", "prolongement"]),
    ao("215.2", "S’arrêter dans le prolongement d’un passage pour piétons.", 80, ["passage piéton", "prolongement"]),

    ao("216.1", "S’arrêter sur un passage à niveau.", 80, ["passage à niveau", "train"]),
    ao("216.2", "S’arrêter dans un passage sous voies.", 80, ["passage sous voies", "train"]),

    ao("217.1", "Stationner à moins de 10 m avant un panneau indiquant un arrêt des transports publics jusqu’à 60 minutes.", 120, ["TPG", "bus", "tram", "arrêt", "10 mètres"]),
    ao("217.2", "Gêner les transports publics en s’arrêtant à moins de 10 m avant un panneau indiquant un arrêt des transports publics pour laisser monter ou descendre des passagers.", 80, ["TPG", "bus", "tram", "arrêt", "10 mètres"]),
    ao("217.3", "S’arrêter pour charger ou décharger des marchandises à moins de 10 m avant un panneau indiquant un arrêt des transports publics.", 80, ["TPG", "bus", "tram", "chargement", "déchargement"]),

    ao("218.1", "Stationner à moins de 10 m après un panneau indiquant un arrêt des transports publics jusqu’à 60 minutes.", 120, ["TPG", "bus", "tram", "arrêt", "10 mètres"]),
    ao("218.2", "Gêner les transports publics en s’arrêtant à moins de 10 m après un panneau indiquant un arrêt des transports publics pour laisser monter ou descendre des passagers.", 80, ["TPG", "bus", "tram", "arrêt", "10 mètres"]),
    ao("218.3", "S’arrêter pour charger ou décharger des marchandises à moins de 10 m après un panneau indiquant un arrêt des transports publics.", 80, ["TPG", "bus", "tram", "chargement", "déchargement"]),

    ao("220.1", "Stationner devant un local du service du feu ou un dépôt d’engins d’extinction jusqu’à 60 minutes.", 120, ["feu", "pompiers", "service du feu"]),
    ao("220.2", "S’arrêter devant un local du service du feu ou un dépôt d’engins d’extinction pour charger ou décharger des marchandises.", 80, ["feu", "pompiers", "chargement"]),
    ao("220.3", "Gêner le service du feu en s’arrêtant devant un local du service du feu ou un dépôt d’engins d’extinction pour laisser monter ou descendre des passagers.", 80, ["feu", "pompiers", "passagers"]),

    ao("221", "Gêner la circulation en s’arrêtant en double file à côté de véhicules stationnés le long de la route, pour charger ou décharger des marchandises.", 80, ["double file", "chargement", "déchargement"]),

    ao("222.1", "Stationner sur une bande cyclable jusqu’à 60 minutes.", 120, ["bande cyclable", "vélo", "cycliste"]),
    ao("222.2", "S’arrêter sur une bande cyclable en gênant la circulation des cyclistes.", 80, ["bande cyclable", "vélo", "cycliste"]),

    ao("223", "Stationner sur la chaussée contiguë à une bande cyclable jusqu’à 60 minutes.", 120, ["bande cyclable", "chaussée"]),

    ao("224.1", "Stationner sur une voie de tram jusqu’à 60 minutes.", 120, ["tram", "TPG", "voie tram"]),
    ao("224.2", "S’arrêter sur une voie de tram.", 80, ["tram", "TPG", "voie tram"]),

    ao("225.1", "Stationner à moins de 1,5 m du rail de tram le plus proche jusqu’à 60 minutes.", 120, ["tram", "rail", "1.5 mètre"]),
    ao("225.2", "S’arrêter à moins de 1,5 m du rail de tram le plus proche.", 80, ["tram", "rail", "1.5 mètre"]),

    ao("226.1", "Stationner sur la bande d’arrêt d’urgence d’une autoroute jusqu’à 60 minutes.", 120, ["autoroute", "bande d’arrêt d’urgence", "BAU"]),
    ao("226.2", "S’arrêter sur la bande d’arrêt d’urgence d’une autoroute, si ce n’est pour un arrêt de nécessité.", 80, ["autoroute", "bande d’arrêt d’urgence", "BAU"]),

    ao("227.1", "Stationner sur la bande d’arrêt d’urgence d’une semi-autoroute jusqu’à 60 minutes.", 120, ["semi-autoroute", "bande d’arrêt d’urgence", "BAU"]),
    ao("227.2", "S’arrêter sur la bande d’arrêt d’urgence d’une semi-autoroute, si ce n’est pour un arrêt de nécessité.", 80, ["semi-autoroute", "bande d’arrêt d’urgence", "BAU"]),

    ao("228.1", "Stationner sur le trottoir, à moins que des signaux ou des marques ne l’autorisent expressément, s’il ne reste pas un passage d’au moins 1,5 m pour les piétons jusqu’à 60 minutes.", 120, ["trottoir", "piéton", "1.5 mètre"]),
    ao("228.2", "S’arrêter sur le trottoir, s’il ne reste pas un passage d’au moins 1,5 m pour les piétons.", 80, ["trottoir", "piéton", "1.5 mètre"]),

    ao("229.1", "Stationner sur une bande longitudinale pour piétons, en gênant la circulation des piétons jusqu’à 60 minutes.", 120, ["bande longitudinale", "piéton"]),
    ao("229.2", "S’arrêter sur une bande longitudinale pour piétons, en gênant la circulation des piétons.", 80, ["bande longitudinale", "piéton"]),

    ao("230.1", "Stationner à un endroit où une interdiction de s’arrêter est signalée jusqu’à 60 minutes.", 120, ["interdiction de s’arrêter", "arrêt interdit"]),
    ao("230.2", "S’arrêter à un endroit où une interdiction de s’arrêter est signalée.", 80, ["interdiction de s’arrêter", "arrêt interdit"]),

    ao("231.1", "Stationner sur une voie réservée aux bus jusqu’à 60 minutes.", 120, ["bus", "voie bus", "TPG"]),
    ao("231.2", "S’arrêter sur une voie réservée aux bus.", 80, ["bus", "voie bus", "TPG"]),

    ao("232.1", "Stationner sur une place d’évitement jusqu’à 60 minutes.", 120, ["place d’évitement"]),
    ao("232.2", "S’arrêter sur une place d’évitement.", 80, ["place d’évitement"]),

    ao("233.1", "Stationner sur une place d’arrêt pour véhicules en panne jusqu’à 60 minutes.", 120, ["véhicule en panne", "place d’arrêt"]),
    ao("233.2", "S’arrêter sur une place d’arrêt pour véhicules en panne.", 80, ["véhicule en panne", "place d’arrêt"]),

    ao("234.1", "Stationner avant un passage pour piétons, sur la ligne interdisant l’arrêt jusqu’à 60 minutes.", 120, ["passage piéton", "ligne interdisant l’arrêt"]),
    ao("234.2", "S’arrêter avant un passage pour piétons sur la ligne interdisant l’arrêt.", 80, ["passage piéton", "ligne interdisant l’arrêt"]),

    ao("235.1", "Stationner sur la chaussée avant un passage pour piétons, lorsqu’il n’y a pas de ligne interdisant l’arrêt, à moins de 5 m dudit passage jusqu’à 60 minutes.", 120, ["passage piéton", "chaussée", "5 mètres"]),
    ao("235.2", "S’arrêter sur la chaussée avant un passage pour piétons lorsqu’il n’y a pas de ligne interdisant l’arrêt, à moins de 5 m dudit passage.", 80, ["passage piéton", "chaussée", "5 mètres"]),

    ao("236.1", "Stationner sur le trottoir avant un passage pour piétons, à côté de la ligne interdisant l’arrêt jusqu’à 60 minutes.", 120, ["trottoir", "passage piéton", "ligne interdisant l’arrêt"]),
    ao("236.2", "S’arrêter sur le trottoir avant un passage pour piétons, à côté de la ligne interdisant l’arrêt.", 80, ["trottoir", "passage piéton", "ligne interdisant l’arrêt"]),

    ao("237.1", "Stationner sur le trottoir avant un passage pour piétons, lorsqu’il n’y a pas de ligne interdisant l’arrêt, à moins de 5 m avant le passage jusqu’à 60 minutes.", 120, ["trottoir", "passage piéton", "5 mètres"]),
    ao("237.2", "S’arrêter sur le trottoir avant un passage pour piétons, lorsqu’il n’y a pas de ligne interdisant l’arrêt, à moins de 5 m avant le passage.", 80, ["trottoir", "passage piéton", "5 mètres"]),

    ao("238.1", "Stationner sur une surface interdite au trafic jusqu’à 60 minutes.", 120, ["surface interdite", "trafic"]),
    ao("238.2", "S’arrêter sur une surface interdite au trafic.", 80, ["surface interdite", "trafic"]),

    ao("239.1", "Stationner sur une ligne en zigzag jusqu’à 60 minutes.", 120, ["zigzag", "TPG", "transports publics"]),
    ao("239.2", "Gêner les transports publics en s’arrêtant sur une ligne en zigzag pour laisser monter ou descendre des passagers.", 80, ["zigzag", "TPG", "bus", "tram"]),
    ao("239.3", "S’arrêter sur une ligne en zigzag pour charger ou décharger des marchandises.", 80, ["zigzag", "chargement", "déchargement"]),

    ao("240.1", "Stationner un véhicule non autorisé sur une case de stationnement réservée aux personnes handicapées jusqu’à 60 minutes.", 120, ["handicapé", "PMR", "case handicapé"]),
    ao("240.2", "Utiliser sans autorisation la carte de stationnement pour personnes handicapées.", 120, ["handicapé", "PMR", "carte handicapé"]),

    ao("241.1", "Stationner sur une ligne interdisant l’arrêt jusqu’à 60 minutes.", 120, ["ligne interdisant l’arrêt"]),
    ao("241.2", "S’arrêter sur une ligne interdisant l’arrêt.", 80, ["ligne interdisant l’arrêt"]),

    ao("242.a", "Stationner sur une route principale hors des localités jusqu’à deux heures.", 40, ["route principale", "hors localité"]),
    ao("242.b", "Stationner sur une route principale hors des localités pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["route principale", "hors localité"]),
    ao("242.c", "Stationner sur une route principale hors des localités pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["route principale", "hors localité"]),

    ao("243.a", "Stationner sur une route principale dans une localité, lorsque deux voitures automobiles n’auraient plus assez de place pour croiser, jusqu’à deux heures.", 40, ["route principale", "localité", "croiser"]),
    ao("243.b", "Stationner sur une route principale dans une localité, lorsque deux voitures automobiles n’auraient plus assez de place pour croiser, pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["route principale", "localité", "croiser"]),
    ao("243.c", "Stationner sur une route principale dans une localité, lorsque deux voitures automobiles n’auraient plus assez de place pour croiser, pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["route principale", "localité", "croiser"]),

    ao("245.a", "Stationner à moins de 20 m d’un passage à niveau jusqu’à deux heures.", 40, ["passage à niveau", "20 mètres"]),
    ao("245.b", "Stationner à moins de 20 m d’un passage à niveau pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["passage à niveau", "20 mètres"]),
    ao("245.c", "Stationner à moins de 20 m d’un passage à niveau pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["passage à niveau", "20 mètres"]),

    ao("246.a", "Stationner sur un pont jusqu’à deux heures.", 40, ["pont"]),
    ao("246.b", "Stationner sur un pont pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["pont"]),
    ao("246.c", "Stationner sur un pont pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["pont"]),

    ao("247.a", "Stationner devant l’accès à un bâtiment d’autrui jusqu’à deux heures.", 40, ["accès", "bâtiment", "entrée"]),
    ao("247.b", "Stationner devant l’accès à un bâtiment d’autrui pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["accès", "bâtiment", "entrée"]),
    ao("247.c", "Stationner devant l’accès à un bâtiment d’autrui pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["accès", "bâtiment", "entrée"]),

    ao("248.a", "Stationner devant l’accès à un terrain d’autrui jusqu’à deux heures.", 40, ["accès", "terrain", "entrée"]),
    ao("248.b", "Stationner devant l’accès à un terrain d’autrui pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["accès", "terrain", "entrée"]),
    ao("248.c", "Stationner devant l’accès à un terrain d’autrui pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["accès", "terrain", "entrée"]),

    ao("249.a", "Stationner sur le trottoir, à moins que des signaux ou des marques ne l’autorisent expressément, s’il reste un passage d’au moins 1,5 m pour les piétons, jusqu’à deux heures.", 40, ["trottoir", "piéton", "1.5 mètre"]),
    ao("249.b", "Stationner sur le trottoir, à moins que des signaux ou des marques ne l’autorisent expressément, s’il reste un passage d’au moins 1,5 m pour les piétons, pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["trottoir", "piéton", "1.5 mètre"]),
    ao("249.c", "Stationner sur le trottoir, à moins que des signaux ou des marques ne l’autorisent expressément, s’il reste un passage d’au moins 1,5 m pour les piétons, pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["trottoir", "piéton", "1.5 mètre"]),

    ao("250.a", "Stationner à un endroit où une interdiction de parquer est signalée jusqu’à deux heures.", 40, ["interdiction de parquer", "parcage interdit"]),
    ao("250.b", "Stationner à un endroit où une interdiction de parquer est signalée pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["interdiction de parquer", "parcage interdit"]),
    ao("250.c", "Stationner à un endroit où une interdiction de parquer est signalée pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["interdiction de parquer", "parcage interdit"]),

    ao("251.a", "Stationner dans une zone de rencontre, à un endroit non désigné à cet effet, jusqu’à deux heures.", 40, ["zone de rencontre"]),
    ao("251.b", "Stationner dans une zone de rencontre, à un endroit non désigné à cet effet, pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["zone de rencontre"]),
    ao("251.c", "Stationner dans une zone de rencontre, à un endroit non désigné à cet effet, pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["zone de rencontre"]),

    ao("252.a", "Stationner hors des cases ou en dehors d’un revêtement clairement indiqué jusqu’à deux heures.", 40, ["hors case", "case", "revêtement"]),
    ao("252.b", "Stationner hors des cases ou en dehors d’un revêtement clairement indiqué pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["hors case", "case", "revêtement"]),
    ao("252.c", "Stationner hors des cases ou en dehors d’un revêtement clairement indiqué pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["hors case", "case", "revêtement"]),

    ao("253.a", "Stationner un véhicule sur une case de stationnement ou sur un revêtement clairement indiqué si cette aire de stationnement, par ses dimensions, n’est pas destinée à cette catégorie de véhicule, jusqu’à deux heures.", 40, ["case", "dimensions", "catégorie véhicule"]),
    ao("253.b", "Stationner un véhicule sur une case de stationnement ou sur un revêtement clairement indiqué si cette aire de stationnement, par ses dimensions, n’est pas destinée à cette catégorie de véhicule, pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["case", "dimensions", "catégorie véhicule"]),
    ao("253.c", "Stationner un véhicule sur une case de stationnement ou sur un revêtement clairement indiqué si cette aire de stationnement, par ses dimensions, n’est pas destinée à cette catégorie de véhicule, pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["case", "dimensions", "catégorie véhicule"]),

    ao("254.a", "Stationner un véhicule sur une case de stationnement ou sur un revêtement clairement indiqué si cette aire de stationnement, compte tenu de la signalisation, n’est pas destinée à cette catégorie de véhicule, jusqu’à deux heures.", 40, ["case", "signalisation", "catégorie véhicule"]),
    ao("254.b", "Stationner un véhicule sur une case de stationnement ou sur un revêtement clairement indiqué si cette aire de stationnement, compte tenu de la signalisation, n’est pas destinée à cette catégorie de véhicule, pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["case", "signalisation", "catégorie véhicule"]),
    ao("254.c", "Stationner un véhicule sur une case de stationnement ou sur un revêtement clairement indiqué si cette aire de stationnement, compte tenu de la signalisation, n’est pas destinée à cette catégorie de véhicule, pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["case", "signalisation", "catégorie véhicule"]),

    ao("255.a", "Stationner sur une ligne interdisant le parcage jusqu’à deux heures.", 40, ["ligne", "parcage interdit"]),
    ao("255.b", "Stationner sur une ligne interdisant le parcage pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["ligne", "parcage interdit"]),
    ao("255.c", "Stationner sur une ligne interdisant le parcage pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["ligne", "parcage interdit"]),

    ao("256.a", "Stationner sur une case interdite au parcage jusqu’à deux heures.", 40, ["case interdite", "parcage interdit"]),
    ao("256.b", "Stationner sur une case interdite au parcage pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["case interdite", "parcage interdit"]),
    ao("256.c", "Stationner sur une case interdite au parcage pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["case interdite", "parcage interdit"]),

    ao("257.1", "Stationner sur une piste cyclable avec un véhicule non autorisé à l’emprunter, en gênant la circulation jusqu’à 60 minutes.", 120, ["piste cyclable", "vélo", "cycliste"]),
    ao("257.2", "S’arrêter sur une piste cyclable avec un véhicule non autorisé à l’emprunter, en gênant la circulation.", 80, ["piste cyclable", "vélo", "cycliste"]),

    ao("258.1", "Stationner sur un chemin pour piétons avec un véhicule non autorisé à l’emprunter, en gênant la circulation jusqu’à 60 minutes.", 120, ["chemin piéton", "piéton"]),
    ao("258.2", "S’arrêter sur un chemin pour piétons avec un véhicule non autorisé à l’emprunter, en gênant la circulation.", 80, ["chemin piéton", "piéton"]),

    ao("259.a", "Stationner dans une zone piétonne, à un endroit non désigné à cet effet, jusqu’à deux heures.", 40, ["zone piétonne", "piéton"]),
    ao("259.b", "Stationner dans une zone piétonne, à un endroit non désigné à cet effet, pendant plus de deux heures, mais pas plus de quatre heures.", 60, ["zone piétonne", "piéton"]),
    ao("259.c", "Stationner dans une zone piétonne, à un endroit non désigné à cet effet, pendant plus de quatre heures, mais pas plus de dix heures.", 100, ["zone piétonne", "piéton"]),

    aoc("300.1.a", "Dépasser le poids maximal autorisé, après déduction de la marge d’erreur, de 100 kg au plus.", 100, ["poids", "surcharge", "OFROU", "100 kg"]),
    aoc("300.1.b", "Dépasser le poids maximal autorisé, pour les véhicules ou ensembles n’excédant pas 3500 kg, de plus de 100 kg, mais de 5 % au maximum.", 200, ["poids", "surcharge", "3500 kg"]),
    aoc("300.1.c", "Dépasser le poids maximal autorisé, pour les véhicules ou ensembles excédant 3500 kg, de plus de 100 kg jusqu’à 5 %, mais pas plus de 1000 kg.", 250, ["poids", "surcharge", "3500 kg", "1000 kg"]),
    aoc("300.2.a", "Dépasser la charge maximale autorisée par essieu, lorsque le poids autorisé du véhicule ou de l’ensemble de véhicules n’est pas respecté, de 100 kg au plus.", 100, ["charge essieu", "poids", "surcharge"]),
    aoc("300.2.b", "Dépasser la charge maximale autorisée par essieu, pour les véhicules dont le poids total excède 3500 kg, de plus de 100 kg, mais de 2 % au maximum.", 250, ["charge essieu", "poids", "surcharge"]),
    aoc("300.3.a", "Dépasser la charge maximale autorisée par essieu, lorsque le poids autorisé du véhicule et de l’ensemble de véhicules est respecté, de plus de 2 %, mais de 5 % au maximum.", 40, ["charge essieu", "poids", "surcharge"]),
    aoc("300.3.b", "Dépasser la charge maximale autorisée par essieu, lorsque le poids autorisé du véhicule et de l’ensemble de véhicules est respecté, de plus de 5 %.", 100, ["charge essieu", "poids", "surcharge"]),

    aoc("301", "Circuler sur le trottoir avec un motocycle.", 100, ["moto", "motocycle", "trottoir"]),
    aoc("302", "Motocycliste ne restant pas à sa place dans une file de véhicules lorsque la circulation est arrêtée.", 60, ["moto", "motocycle", "file", "circulation arrêtée"]),

    aoc("303.1.a", "Dépasser, à l’intérieur d’une localité, la vitesse maximale signalée de 1 à 5 km/h, après déduction de la marge d’erreur.", 40, ["vitesse", "excès de vitesse", "radar", "localité"]),
    aoc("303.1.b", "Dépasser, à l’intérieur d’une localité, la vitesse maximale signalée de 6 à 10 km/h, après déduction de la marge d’erreur.", 120, ["vitesse", "excès de vitesse", "radar", "localité"]),
    aoc("303.1.c", "Dépasser, à l’intérieur d’une localité, la vitesse maximale signalée de 11 à 15 km/h, après déduction de la marge d’erreur.", 250, ["vitesse", "excès de vitesse", "radar", "localité"]),

    aoc("303.2.a", "Dépasser, hors des localités ou sur une semi-autoroute, la vitesse maximale signalée de 1 à 5 km/h, après déduction de la marge d’erreur.", 40, ["vitesse", "excès de vitesse", "radar", "hors localité", "semi-autoroute"]),
    aoc("303.2.b", "Dépasser, hors des localités ou sur une semi-autoroute, la vitesse maximale signalée de 6 à 10 km/h, après déduction de la marge d’erreur.", 100, ["vitesse", "excès de vitesse", "radar", "hors localité", "semi-autoroute"]),
    aoc("303.2.c", "Dépasser, hors des localités ou sur une semi-autoroute, la vitesse maximale signalée de 11 à 15 km/h, après déduction de la marge d’erreur.", 160, ["vitesse", "excès de vitesse", "radar", "hors localité", "semi-autoroute"]),
    aoc("303.2.d", "Dépasser, hors des localités ou sur une semi-autoroute, la vitesse maximale signalée de 16 à 20 km/h, après déduction de la marge d’erreur.", 240, ["vitesse", "excès de vitesse", "radar", "hors localité", "semi-autoroute"]),

    aoc("303.3.a", "Dépasser, sur une autoroute, la vitesse maximale signalée de 1 à 5 km/h, après déduction de la marge d’erreur.", 20, ["vitesse", "excès de vitesse", "radar", "autoroute"]),
    aoc("303.3.b", "Dépasser, sur une autoroute, la vitesse maximale signalée de 6 à 10 km/h, après déduction de la marge d’erreur.", 60, ["vitesse", "excès de vitesse", "radar", "autoroute"]),
    aoc("303.3.c", "Dépasser, sur une autoroute, la vitesse maximale signalée de 11 à 15 km/h, après déduction de la marge d’erreur.", 120, ["vitesse", "excès de vitesse", "radar", "autoroute"]),
    aoc("303.3.d", "Dépasser, sur une autoroute, la vitesse maximale signalée de 16 à 20 km/h, après déduction de la marge d’erreur.", 180, ["vitesse", "excès de vitesse", "radar", "autoroute"]),
    aoc("303.3.e", "Dépasser, sur une autoroute, la vitesse maximale signalée de 21 à 25 km/h, après déduction de la marge d’erreur.", 260, ["vitesse", "excès de vitesse", "radar", "autoroute"]),

    aoc("304.1", "Ne pas observer le signal de prescription « Interdiction générale de circuler dans les deux sens ».", 100, ["signal", "interdiction générale", "circuler"]),
    aoc("304.2", "Ne pas observer le signal de prescription « Accès interdit ».", 100, ["signal", "accès interdit", "sens interdit"]),
    aoc("304.3", "Ne pas observer le signal de prescription « Circulation interdite aux voitures automobiles ».", 100, ["signal", "voiture", "interdiction"]),
    aoc("304.4", "Ne pas observer le signal de prescription « Circulation interdite aux motocycles ».", 100, ["signal", "moto", "motocycle"]),
    aoc("304.5", "Ne pas observer le signal de prescription « Circulation interdite aux camions ».", 100, ["signal", "camion", "poids lourd"]),
    aoc("304.6", "Ne pas observer le signal de prescription « Circulation interdite aux autocars ».", 100, ["signal", "autocar", "bus"]),
    aoc("304.7", "Ne pas observer le signal de prescription « Circulation interdite aux remorques ».", 100, ["signal", "remorque"]),
    aoc("304.8", "Ne pas observer le signal de prescription « Sens obligatoire à droite ».", 100, ["signal", "sens obligatoire", "droite"]),
    aoc("304.9", "Ne pas observer le signal de prescription « Sens obligatoire à gauche ».", 100, ["signal", "sens obligatoire", "gauche"]),
    aoc("304.10", "Ne pas observer le signal de prescription « Obstacle à contourner par la droite ».", 100, ["signal", "obstacle", "droite"]),
    aoc("304.11", "Ne pas observer le signal de prescription « Obstacle à contourner par la gauche ».", 100, ["signal", "obstacle", "gauche"]),
    aoc("304.12", "Ne pas observer le signal de prescription « Circuler tout droit ».", 100, ["signal", "tout droit"]),
    aoc("304.13", "Ne pas observer le signal de prescription « Obliquer à droite ».", 100, ["signal", "obliquer", "droite"]),
    aoc("304.14", "Ne pas observer le signal de prescription « Obliquer à gauche ».", 100, ["signal", "obliquer", "gauche"]),
    aoc("304.15", "Ne pas observer le signal de prescription « Carrefour à sens giratoire ».", 100, ["signal", "giratoire", "rond-point"]),
    aoc("304.16", "Ne pas observer le signal de prescription « Interdiction d’obliquer à droite ».", 100, ["signal", "interdiction", "droite"]),
    aoc("304.17", "Ne pas observer le signal de prescription « Interdiction d’obliquer à gauche ».", 100, ["signal", "interdiction", "gauche"]),
    aoc("304.18", "Ne pas observer le signal de prescription « Interdiction de faire demi-tour ».", 100, ["signal", "demi-tour", "u-turn"]),
    aoc("304.19", "Ne pas observer le signal de prescription « Chaînes à neige obligatoires ».", 100, ["signal", "chaînes", "neige"]),
    aoc("304.20", "Ne pas observer le signal de prescription « Zone piétonne ».", 100, ["signal", "zone piétonne", "piéton"]),
    aoc("304.21", "Ne pas observer le signal de prescription « Piste cyclable ».", 100, ["signal", "piste cyclable", "vélo"]),
    aoc("304.22", "Ne pas observer le signal de prescription « Chemin pour piétons ».", 100, ["signal", "chemin piétons", "piéton"]),
    aoc("304.23", "Ne pas observer le signal de prescription « Piste cyclable et chemin pour piétons ».", 100, ["signal", "piste cyclable", "piéton"]),
    aoc("304.24", "Ne pas observer le signal de prescription « Circulation interdite aux remorques autres que les semi-remorques et les remorques à essieu central ».", 100, ["signal", "remorque", "semi-remorque"]),
    aoc("304.25", "Ne pas observer le signal de prescription « Interdiction aux camions de dépasser » sur les autoroutes.", 100, ["signal", "camion", "dépassement", "autoroute"]),

    aoc("305", "Circuler sur un site propre réservé aux trams.", 60, ["tram", "TPG", "site propre"]),
    aoc("306.1", "Enfreindre l’ordre de présélection en n’observant pas la flèche de direction marquée sur la chaussée.", 100, ["présélection", "flèche", "chaussée"]),
    aoc("306.2", "Enfreindre l’ordre de présélection en n’observant pas la flèche de la signalisation lumineuse.", 100, ["présélection", "flèche", "signal lumineux"]),
    aoc("306.3", "Ne pas poursuivre sa route dans la direction indiquée par la flèche, y compris en franchissant le cas échéant une ligne de sécurité délimitant deux voies de circulation destinées aux véhicules empruntant la même direction.", 100, ["flèche", "direction", "ligne sécurité"]),

    aoc("307.1", "Circuler sur une voie réservée aux bus.", 60, ["bus", "voie bus", "TPG"]),
    aoc("307.2", "Circuler sur une chaussée réservée aux bus.", 60, ["bus", "chaussée bus", "TPG"]),
    aoc("308", "Ne pas s’arrêter complètement au signal « Stop » (« stop coulé »).", 60, ["stop", "stop coulé"]),
    aoc("309.1", "Ne pas observer un signal lumineux.", 250, ["feu rouge", "signal lumineux", "feu"]),
    aoc("309.2", "Ne pas observer un feu clignotant alternativement ou un feu clignotant simple.", 250, ["feu clignotant", "signal lumineux"]),
    aoc("310", "Empiéter sur une bande cyclable ou la franchir lorsqu’elle est délimitée par une ligne continue.", 60, ["bande cyclable", "ligne continue", "vélo"]),

    aoc("311", "Utiliser un téléphone sans dispositif mains libres pendant la course.", 100, ["téléphone", "natel", "portable", "mains libres"]),
    aoc("312.1", "Conducteur de voiture automobile ne portant pas la ceinture de sécurité.", 60, ["ceinture", "sécurité"]),
    aoc("312.2", "Transporter un enfant de moins de douze ans non attaché.", 60, ["enfant", "ceinture", "non attaché"]),
    aoc("313.1", "Conducteur de motocycle, quadricycle léger à moteur, quadricycle à moteur ou tricycle à moteur ne portant pas le casque.", 60, ["moto", "casque", "motocycle"]),
    aoc("313.2", "Transporter un enfant de moins de douze ans sans casque sur un motocycle, quadricycle léger à moteur, quadricycle à moteur ou tricycle à moteur.", 60, ["moto", "casque", "enfant"]),

    aoc("314.1", "Ne pas utiliser la voie extérieure de droite d’une route à plusieurs voies, sauf dépassement, présélection, files parallèles ou circulation à l’intérieur des localités.", 60, ["voie de droite", "route à plusieurs voies"]),
    aoc("314.2", "Contourner des véhicules par la droite pour les dépasser, dans une localité.", 140, ["dépassement par la droite", "localité"]),
    aoc("314.3", "Contourner des véhicules par la droite pour les dépasser sur une autoroute.", 250, ["dépassement par la droite", "autoroute"]),

    aoc("315", "Changer de voie sur un tronçon servant à la présélection pour effectuer un dépassement.", 100, ["présélection", "changer de voie", "dépassement"]),
    aoc("316", "S’arrêter ou stationner sur le côté gauche de la chaussée, bien qu’il n’y ait à droite ni voie de tram ou de chemin de fer routier ni interdiction de parquer ou de s’arrêter et que la route soit large.", 60, ["côté gauche", "chaussée", "stationner", "s’arrêter"]),
    aoc("317", "Quitter le véhicule sans enlever la clé de contact.", 60, ["clé", "contact", "quitter véhicule"]),

    aoc("318.1", "Ne pas placer le signal de panne.", 60, ["signal de panne", "triangle"]),
    aoc("318.2", "Placer le signal de panne contrairement aux prescriptions.", 40, ["signal de panne", "triangle"]),
    aoc("318.3", "Utilisation abusive des feux clignotants sur le véhicule à l’arrêt.", 40, ["feux clignotants", "warning", "abusif"]),
    aoc("318.4", "Utilisation abusive des feux clignotants sur le véhicule en marche.", 40, ["feux clignotants", "warning", "abusif"]),
    aoc("318.5", "Ne pas placer de signal de panne à l’arrière d’un véhicule remorqué.", 40, ["signal de panne", "remorqué"]),

    aoc("320.1", "Faire des courses d’apprentissage avec un véhicule dépourvu de la plaque L.", 20, ["plaque L", "élève conducteur"]),
    aoc("320.2", "Ne pas ôter la plaque L lorsqu’il ne s’agit pas d’une course d’apprentissage.", 20, ["plaque L", "élève conducteur"]),

    aoc("321.1", "Ne pas annoncer un changement de direction.", 100, ["clignotant", "changement direction", "indicateur"]),
    aoc("321.2", "Ne pas interrompre le signe donné après un changement de direction.", 100, ["clignotant", "changement direction"]),
    aoc("321.3", "Ne pas être porteur de la palette de direction lorsqu’elle est exigée.", 40, ["palette de direction"]),

    aoc("322", "Utilisation abusive des signaux avertisseurs.", 40, ["avertisseur", "klaxon"]),
    aoc("323.1", "Circuler sans feu de jour.", 40, ["feux", "lumière", "jour"]),
    aoc("323.2", "Circuler sans feu sur une route éclairée, de nuit.", 60, ["feux", "lumière", "nuit"]),
    aoc("323.3", "Circuler sans feu dans un tunnel éclairé.", 60, ["feux", "tunnel"]),

    aoc("324.1", "Circuler avec les feux de position ou les feux de circulation diurne sur une route éclairée, de nuit.", 40, ["feux de position", "feux diurnes", "nuit"]),
    aoc("324.2", "Circuler avec les feux de position ou les feux de circulation diurne dans un tunnel éclairé.", 40, ["feux de position", "feux diurnes", "tunnel"]),

    aoc("325.1", "Usage abusif des feux de brouillard.", 40, ["feux brouillard"]),
    aoc("325.2", "Usage abusif des feux arrière de brouillard.", 40, ["feux arrière brouillard"]),
    aoc("325.3", "Usage abusif des feux orientables.", 40, ["feux orientables"]),
    aoc("325.4", "Usage abusif des lampes de travail.", 40, ["lampes travail"]),

    aoc("326.1", "Faire chauffer inutilement le moteur d’un véhicule à l’arrêt.", 60, ["moteur", "chauffer", "à l’arrêt"]),
    aoc("326.2", "Faire tourner inutilement le moteur d’un véhicule à l’arrêt.", 60, ["moteur", "tourner", "à l’arrêt"]),

    aoc("327.1", "Circuler sur une autoroute ou une semi-autoroute avec un motocycle d’une cylindrée n’excédant pas 50 cm3.", 60, ["autoroute", "semi-autoroute", "moto", "50 cm3"]),
    aoc("327.2", "Circuler sur une autoroute ou une semi-autoroute avec un autre véhicule automobile qui n’y est pas admis.", 140, ["autoroute", "semi-autoroute", "véhicule non admis"]),
    aoc("327.3", "Circuler avec des pneus à clous sur une autoroute ou une semi-autoroute.", 60, ["pneus à clous", "autoroute"]),
    aoc("327.4", "Remorquer un véhicule plus loin que la prochaine sortie d’une autoroute ou d’une semi-autoroute.", 140, ["remorquage", "autoroute", "sortie"]),

    aoc("328.1", "Circuler sur la bande d’arrêt d’urgence d’une autoroute ou d’une semi-autoroute.", 140, ["BAU", "bande d’arrêt d’urgence", "autoroute"]),
    aoc("328.2", "Utiliser la voie extérieure de gauche sur une autoroute ayant au moins trois voies dans le même sens, avec un véhicule avec lequel il n’est pas permis de rouler à plus de 100 km/h.", 60, ["voie de gauche", "autoroute", "100 km/h"]),
    aoc("328.3", "Non-respect de l’obligation de former un couloir de secours.", 100, ["couloir de secours", "autoroute", "urgence"]),

    aoc("329", "Gêner la circulation des piétons en empruntant une bande longitudinale pour piétons.", 60, ["piéton", "bande longitudinale"]),
    aoc("330", "Circuler avec des plaques de contrôle pas bien lisibles.", 60, ["plaques", "plaque contrôle", "illisible"]),
    aoc("331", "Transporter une personne de plus que le nombre des places autorisées.", 60, ["passager", "places autorisées"]),

    aoc("332.a", "Inobservation de l’interdiction de circuler de nuit jusqu’à une heure.", 100, ["interdiction nuit", "circuler nuit"]),
    aoc("332.b", "Inobservation de l’interdiction de circuler de nuit pendant plus d’une heure, mais pas plus de deux heures.", 200, ["interdiction nuit", "circuler nuit"]),

    aoc("333.1", "Circuler avec une ou des plaques de contrôle masquées par le chargement.", 60, ["plaque masquée", "chargement"]),
    aoc("333.2", "Circuler avec une ou des plaques de contrôle masquées par le porte-charges.", 60, ["plaque masquée", "porte-charges"]),
    aoc("333.3", "Circuler avec une ou des plaques de contrôle masquées par des engins de travail ou objets similaires.", 60, ["plaque masquée", "engins travail"]),

    aoc("334.1", "Circuler avec un ou des dispositifs d’éclairage masqués par le chargement.", 60, ["éclairage masqué", "chargement"]),
    aoc("334.2", "Circuler avec un ou des dispositifs d’éclairage masqués par le porte-charges.", 60, ["éclairage masqué", "porte-charges"]),
    aoc("334.3", "Circuler avec un ou des dispositifs d’éclairage masqués par des engins de travail ou objets similaires.", 60, ["éclairage masqué", "engins travail"]),

    aoc("335", "S’arrêter sur un passage pour piétons lors d’un arrêt de la circulation.", 60, ["passage piéton", "arrêt circulation"]),
    aoc("336", "S’arrêter à une intersection lors d’un arrêt de la circulation et barrer ainsi la voie aux véhicules circulant dans le sens transversal.", 60, ["intersection", "carrefour", "barrer la voie"]),
    aoc("337", "Ne pas accorder la priorité à un passage pour piétons.", 140, ["priorité piéton", "passage piéton"]),
    aoc("338", "Transporter une personne sans autorisation sur un véhicule affecté au transport de choses ou sur un véhicule agricole et forestier.", 60, ["transport personne", "véhicule agricole", "transport de choses"]),
    aoc("339", "Pour une personne sans handicap moteur, circuler en fauteuil roulant motorisé ou au moyen d’un gyropode électrique sur une aire de circulation affectée aux piétons.", 40, ["fauteuil roulant motorisé", "gyropode", "piétons"]),
    aoc("340", "Stationner avec un véhicule automobile sur une autoroute ou une semi-autoroute si le véhicule est arrêté sur la bande d’arrêt d’urgence ou sur une place d’arrêt pour véhicules en panne par manque de carburant ou d’électricité.", 120, ["autoroute", "semi-autoroute", "panne", "carburant", "électricité", "BAU"]),
    aoc("341", "Franchir une ligne de sécurité ou empiéter sur elle à l’intérieur des localités.", 140, ["ligne sécurité", "franchir", "empiéter"]),
    aoc("342", "Franchir une surface interdite au trafic ou empiéter sur elle à l’intérieur des localités.", 140, ["surface interdite", "trafic", "empiéter"]),

    aoadmin("100.1", "Ne pas être porteur du permis de conduire.", 20, ["permis de conduire", "document", "oubli"]),
    aoadmin("100.2", "Ne pas être porteur du permis d’élève conducteur.", 20, ["permis élève", "élève conducteur", "document"]),
    aoadmin("100.3", "Ne pas être porteur du permis de circulation.", 20, ["permis de circulation", "carte grise", "document"]),
    aoadmin("100.4", "Ne pas être porteur de l’autorisation pour transports spéciaux.", 20, ["transport spécial", "autorisation"]),
    aoadmin("100.5", "Ne pas être porteur de la fiche d’entretien du système antipollution.", 20, ["antipollution", "fiche entretien"]),
    aoadmin("100.6", "Ne pas être porteur de l’autorisation spéciale relative à une prescription indiquée par des signaux.", 20, ["autorisation spéciale", "signalisation", "signaux"]),
    aoadmin("100.7", "Ne pas être porteur de la carte de qualification de conducteur.", 20, ["carte qualification", "OACP", "chauffeur"]),

    aoadmin("101.1.a", "Ne pas être porteur du disque d’enregistrement de la veille.", 140, ["tachygraphe", "disque", "veille"]),
    aoadmin("101.1.b", "Ne pas être porteur de l’impression papier de la veille.", 140, ["tachygraphe", "impression papier", "veille"]),
    aoadmin("101.1.c", "Ne pas être porteur des autres disques d’enregistrement qu’il faut emporter, à forfait pour chaque période de 7 jours entamée.", 60, ["tachygraphe", "disques", "7 jours"]),
    aoadmin("101.1.d", "Ne pas être porteur des autres impressions papier qu’il faut emporter, à forfait pour chaque période de 7 jours entamée.", 60, ["tachygraphe", "impressions papier", "7 jours"]),
    aoadmin("101.1.e", "Ne pas être porteur de la carte de conducteur.", 140, ["carte conducteur", "tachygraphe"]),
    aoadmin("101.2.a", "Ne pas être porteur de disques d’enregistrement de remplacement ou de jeux de disques hebdomadaires neufs.", 40, ["tachygraphe", "disques remplacement"]),
    aoadmin("101.2.b", "Ne pas être porteur de papier d’impression de remplacement.", 40, ["tachygraphe", "papier impression"]),
    aoadmin("101.3", "Ne pas être porteur du disque d’enregistrement de la veille.", 40, ["tachygraphe", "disque veille"]),
    aoadmin("101.4", "Ne pas être porteur du livret de travail.", 40, ["livret de travail"]),
    aoadmin("101.5", "Ne pas être porteur des rapports journaliers de la semaine en cours à l’usage de l’entreprise ou d’un double de ces rapports, à forfait.", 40, ["rapports journaliers", "semaine", "entreprise"]),
    aoadmin("101.6", "Ne pas être porteur de la décision de dispense de l’obligation de remplir le livret de travail.", 40, ["dispense", "livret de travail"]),
    aoadmin("101.7", "Ne pas être porteur de cartes de contrôle pour conducteurs de taxis.", 40, ["taxi", "carte contrôle"]),

    aoadmin("102.1", "Omettre de saisir les données nécessaires dans la feuille hebdomadaire.", 40, ["feuille hebdomadaire", "données"]),
    aoadmin("102.2", "Omettre de saisir les données nécessaires dans la feuille quotidienne.", 40, ["feuille quotidienne", "données"]),
    aoadmin("102.3", "Omettre de saisir les données nécessaires dans la carte de contrôle pour conducteurs de taxis.", 40, ["taxi", "carte contrôle", "données"]),
    aoadmin("102.4", "Omettre de saisir les données nécessaires dans le tachygraphe numérique.", 40, ["tachygraphe numérique", "données"]),

    aoadmin("103.1", "Omettre d’apporter des inscriptions sur le disque d’enregistrement du tachygraphe.", 40, ["tachygraphe", "inscription", "disque"]),
    aoadmin("103.2", "Omettre d’apporter des inscriptions sur l’impression papier.", 40, ["tachygraphe", "impression papier", "inscription"]),
    aoadmin("103.3", "Apporter des inscriptions incomplètes sur le disque d’enregistrement du tachygraphe.", 40, ["tachygraphe", "inscription incomplète", "disque"]),
    aoadmin("103.4", "Apporter des inscriptions incomplètes sur l’impression papier.", 40, ["tachygraphe", "inscription incomplète", "impression papier"]),
    aoadmin("103.5", "Apporter des inscriptions mensongères sur le disque d’enregistrement du tachygraphe.", 40, ["tachygraphe", "inscription mensongère", "disque"]),
    aoadmin("103.6", "Apporter des inscriptions mensongères sur l’impression papier.", 40, ["tachygraphe", "inscription mensongère", "impression papier"]),
    aoadmin("103.7", "Utiliser un disque d’enregistrement de tachygraphe non homologué.", 40, ["tachygraphe", "disque non homologué"]),
    aoadmin("103.8", "Utiliser un disque d’enregistrement non approprié au tachygraphe.", 40, ["tachygraphe", "disque non approprié"]),
    aoadmin("103.9", "Utiliser du papier d’impression non approprié.", 40, ["tachygraphe", "papier impression"]),

    aoadmin("104.1", "Ne pas être porteur, en ayant conscience de transporter des marchandises dangereuses, du certificat de formation.", 20, ["marchandises dangereuses", "SDR", "ADR", "certificat formation"]),
    aoadmin("104.2", "Ne pas être porteur, en ayant conscience de transporter des marchandises dangereuses, du document de transport.", 140, ["marchandises dangereuses", "SDR", "ADR", "document transport"]),
    aoadmin("104.3", "Ne pas être porteur, en ayant conscience de transporter des marchandises dangereuses, des consignes écrites, aide-mémoire en cas d’accident.", 40, ["marchandises dangereuses", "SDR", "ADR", "consignes écrites", "aide-mémoire"]),

    aoadmin("105", "Omettre d’enlever ou de couvrir les panneaux de signalisation orange lors d’un transport sans marchandises dangereuses.", 60, ["marchandises dangereuses", "SDR", "ADR", "panneaux orange"]),

    aoadmin("106.1", "Omettre d’annoncer ou annoncer avec retard toute circonstance qui exige la modification ou le remplacement d’un permis ou d’une autorisation.", 20, ["annoncer", "retard", "permis", "autorisation"]),
    aoadmin("106.2", "Omettre d’annoncer ou annoncer avec retard un changement de domicile au nouveau lieu de résidence en Suisse.", 20, ["domicile", "changement adresse", "retard"]),
    aoadmin("106.3", "Omettre d’annoncer des changements sur les cartes de tachygraphe.", 20, ["tachygraphe", "cartes", "changement"]),
    aoadmin("106.4", "Omettre d’annoncer l’endommagement, le dysfonctionnement, la perte ou le vol d’une carte de tachygraphe.", 20, ["tachygraphe", "perte", "vol", "endommagement", "dysfonctionnement"]),
    aoadmin("106.5", "Omettre de restituer la carte de conducteur.", 20, ["carte conducteur", "restitution"]),
    aoadmin("106.6", "Omettre de restituer la carte d’atelier.", 20, ["carte atelier", "restitution"]),

    aoe("400.1", "Ne pas être muni du triangle de panne.", 40, ["triangle", "panne", "signal de panne"]),
    aoe("400.2", "Ne pas être muni de la cale pour les voitures automobiles lourdes.", 40, ["cale", "voiture automobile lourde", "poids lourd"]),
    aoe("400.3", "Ne pas être muni de la pharmacie de bord exigée sur les autocars.", 40, ["pharmacie de bord", "autocar", "premiers secours"]),
    aoe("400.4", "Ne pas être muni d’un extincteur exigé.", 40, ["extincteur", "feu", "incendie"]),
    aoe("400.5", "Ne pas être muni de la cale pour les remorques dont le poids total excède 0,75 t.", 40, ["cale", "remorque", "0.75 t"]),

    aoe("401", "Circuler ou stationner avec des plaques de contrôle fixées contrairement aux prescriptions.", 60, ["plaques", "plaques de contrôle", "fixation", "stationner"]),

    aoe("402.1", "Conduire un véhicule automobile dont un pneu est dans un état insuffisant.", 100, ["pneu", "pneus", "état insuffisant", "défectueux"]),
    aoe("402.2", "Tirer une remorque ayant un pneu défectueux.", 100, ["pneu", "remorque", "défectueux"]),
    aoe("402.3", "Circuler avec des pneus à clous, sans disque indiquant la vitesse maximale ou avec un disque non conforme.", 20, ["pneus à clous", "disque vitesse", "vitesse maximale"]),
    aoe("402.4", "Utiliser des pneus à clous en dehors de la période pendant laquelle ils sont autorisés.", 60, ["pneus à clous", "période autorisée"]),
    aoe("402.5", "Rouler avec un disque indiquant la vitesse maximale, bien que le véhicule soit utilisé sans pneus à clous.", 20, ["disque vitesse", "pneus à clous"]),

    aoe("403", "Utiliser un véhicule muni d’un avertisseur acoustique non autorisé.", 40, ["avertisseur", "klaxon", "avertisseur acoustique"]),
    aoe("404", "Circuler sans la ou les plaques de contrôle prescrites, à moins qu’il ne s’agisse de plaques professionnelles.", 140, ["plaques", "plaques de contrôle", "sans plaques", "plaques professionnelles"]),
    aoe("405", "Circuler sans disque indiquant la vitesse maximale.", 20, ["disque vitesse", "vitesse maximale"]),
    aoe("406", "Circuler sans plaque d’identification arrière.", 20, ["plaque identification", "plaque arrière"]),
    aoe("407", "Conduire un motocycle sans catadioptre fixé à demeure.", 60, ["motocycle", "moto", "catadioptre"]),
        aoe("408", "Transporter des marchandises dangereuses avec un équipement manquant, incomplet ou non conforme aux prescriptions.", 40, ["marchandises dangereuses", "ADR", "SDR", "équipement manquant", "équipement incomplet"]),

    aodetenteur("500", "Omettre d’annoncer ou annoncer avec retard toute circonstance qui exige la modification ou le remplacement d’un permis ou d’une autorisation.", 20, ["annoncer", "retard", "modification", "remplacement", "permis", "autorisation"]),

    aodetenteur("501.a", "Dépasser le délai prescrit pour le service antipollution obligatoire jusqu’à 1 mois.", 40, ["service antipollution", "antipollution", "délai", "contrôle"]),
    aodetenteur("501.b", "Dépasser le délai prescrit pour le service antipollution obligatoire de plus d’un mois, mais pas plus de 3 mois.", 100, ["service antipollution", "antipollution", "délai", "contrôle"]),
    aodetenteur("501.c", "Dépasser le délai prescrit pour le service antipollution obligatoire de plus de 3 mois, mais pas plus de 6 mois.", 200, ["service antipollution", "antipollution", "délai", "contrôle"]),

    aodetenteur("502.1", "Mettre en circulation un véhicule automobile dont un pneu est dans un état insuffisant.", 100, ["pneu", "pneus", "état insuffisant", "mise en circulation"]),
    aodetenteur("502.2", "Mettre en circulation une remorque avec un pneu défectueux.", 100, ["pneu", "remorque", "défectueux", "mise en circulation"]),

    aodetenteur("503.1", "Ne pas apposer le disque indiquant la vitesse maximale en circulant avec un véhicule équipé de pneus à clous.", 20, ["disque vitesse", "vitesse maximale", "pneus à clous"]),
    aodetenteur("503.2", "Ne pas apposer conformément aux prescriptions le disque indiquant la vitesse maximale en utilisant un véhicule équipé de pneus à clous.", 20, ["disque vitesse", "vitesse maximale", "pneus à clous", "non conforme"]),
    aodetenteur("503.3", "Ne pas enlever le disque indiquant la vitesse maximale lorsque l’on n’utilise pas de pneus à clous.", 20, ["disque vitesse", "vitesse maximale", "pneus à clous"]),

    aodetenteur("504.1", "Ne pas apposer la ou les plaques de contrôle prescrites, à moins qu’il ne s’agisse de plaques professionnelles.", 140, ["plaques", "plaques de contrôle", "plaques professionnelles"]),
    aodetenteur("504.2", "Ne pas apposer les plaques de contrôle conformément aux prescriptions.", 60, ["plaques", "plaques de contrôle", "non conforme"]),

    aodetenteur("505", "Ne pas apposer le disque indiquant la vitesse maximale.", 20, ["disque vitesse", "vitesse maximale"]),

    aodetenteur("506", "Ne pas apposer la plaque d’identification arrière.", 20, ["plaque identification", "plaque arrière"]),

       aodetenteur("507", "Mettre en circulation un motocycle sans catadioptre fixé à demeure.", 60, ["motocycle", "moto", "catadioptre"]),

    aocycliste("600.1", "Lâcher l’appareil de direction.", 20, ["guidon", "direction"]),
    aocycliste("601", "Conducteur de cyclomoteur ne portant pas le casque.", 30, ["casque", "cyclomoteur"]),
    aocycliste("602", "S’arrêter sur un passage pour piétons lorsque la circulation est arrêtée.", 20, ["passage piéton", "arrêt circulation"]),
    aocycliste("603", "Faire tourner inutilement le moteur d’un cyclomoteur à l’arrêt.", 20, ["moteur", "cyclomoteur", "à l’arrêt"]),

    aocycliste("604.1", "Circuler sans feu sur une route éclairée, de nuit.", 40, ["feu", "éclairage", "nuit"]),
    aocycliste("604.2", "Circuler sans feu sur une route non éclairée, de nuit.", 60, ["feu", "éclairage", "nuit", "route non éclairée"]),
    aocycliste("604.3", "Circuler sans feu dans un tunnel éclairé.", 20, ["feu", "éclairage", "tunnel"]),
    aocycliste("604.4", "Circuler sans feu de jour.", 20, ["feu", "éclairage", "jour"]),

    aocycliste("605.1", "Rouler sur le trottoir malgré l’interdiction.", 40, ["trottoir", "interdiction"]),
    aocycliste("605.2", "Gêner la circulation des piétons en empruntant une bande longitudinale pour piétons.", 20, ["piéton", "bande longitudinale"]),

    aocycliste("606.1", "Transporter des objets empêchant de faire des signes de la main.", 20, ["objet", "signe de la main", "changement direction"]),
    aocycliste("606.2", "Se placer devant une file de voitures arrêtées.", 20, ["file", "voitures arrêtées"]),
    aocycliste("606.3", "Dépasser une file de voitures arrêtées en se faufilant entre les voitures.", 20, ["file", "dépassement", "voitures arrêtées"]),

    aocycliste("607.1", "Cycliste circulant de front lorsque cela est interdit.", 20, ["de front", "côte à côte"]),
    aocycliste("607.2", "Cyclomotoriste circulant de front lorsque cela est interdit.", 20, ["de front", "cyclomoteur"]),
    aocycliste("607.3", "Conducteur de vélo-taxi électrique circulant de front lorsque cela est interdit.", 20, ["de front", "vélo-taxi"]),
    aocycliste("607.4", "Combinaison de cyclistes, cyclomotoristes et conducteurs de vélos-taxis électriques circulant de front lorsque cela est interdit.", 20, ["de front", "groupe"]),

    aocycliste("608.1", "Se faire tirer.", 20, ["tirer"]),
    aocycliste("608.2", "Se faire remorquer.", 20, ["remorquer"]),
    aocycliste("608.3", "Se faire pousser.", 20, ["pousser"]),

    aocycliste("609.1", "Transporter sans autorisation une personne.", 20, ["transport personne", "passager"]),
    aocycliste("609.2", "Transporter un enfant sans utiliser un siège d’enfant offrant toute sécurité.", 40, ["enfant", "siège enfant", "sécurité"]),

    aocycliste("610.1", "Conducteur poussant un véhicule ou un objet.", 20, ["pousser", "véhicule", "objet"]),
    aocycliste("610.2", "Conducteur tirant un véhicule ou un objet.", 20, ["tirer", "véhicule", "objet"]),
    aocycliste("610.3", "Conducteur remorquant un véhicule ou un objet.", 20, ["remorquer", "véhicule", "objet"]),

    aocycliste("611.1", "Ne pas observer le signal de prescription « Interdiction générale de circuler dans les deux sens ».", 30, ["signal", "interdiction générale"]),
    aocycliste("611.2", "Ne pas observer le signal de prescription « Accès interdit ».", 30, ["signal", "accès interdit", "sens interdit"]),
    aocycliste("611.3", "Ne pas observer le signal de prescription « Circulation interdite aux cycles et aux cyclomoteurs ».", 30, ["signal", "interdiction", "cycle", "cyclomoteur"]),
    aocycliste("611.4", "Ne pas observer le signal de prescription « Circulation interdite aux cyclomoteurs ».", 30, ["signal", "interdiction", "cyclomoteur"]),
    aocycliste("611.5", "Ne pas observer le signal de prescription « Sens obligatoire à droite ».", 30, ["signal", "sens obligatoire", "droite"]),
    aocycliste("611.6", "Ne pas observer le signal de prescription « Sens obligatoire à gauche ».", 30, ["signal", "sens obligatoire", "gauche"]),
    aocycliste("611.7", "Ne pas observer le signal de prescription « Obstacle à contourner par la droite ».", 30, ["signal", "obstacle", "droite"]),
    aocycliste("611.8", "Ne pas observer le signal de prescription « Obstacle à contourner par la gauche ».", 30, ["signal", "obstacle", "gauche"]),
    aocycliste("611.9", "Ne pas observer le signal de prescription « Circuler tout droit ».", 30, ["signal", "tout droit"]),
    aocycliste("611.10", "Ne pas observer le signal de prescription « Obliquer à droite ».", 30, ["signal", "obliquer", "droite"]),
    aocycliste("611.11", "Ne pas observer le signal de prescription « Obliquer à gauche ».", 30, ["signal", "obliquer", "gauche"]),
    aocycliste("611.12", "Ne pas observer le signal de prescription « Carrefour à sens giratoire ».", 30, ["signal", "giratoire", "rond-point"]),
    aocycliste("611.13", "Ne pas observer le signal de prescription « Interdiction d’obliquer à droite ».", 30, ["signal", "interdiction", "droite"]),
    aocycliste("611.14", "Ne pas observer le signal de prescription « Interdiction d’obliquer à gauche ».", 30, ["signal", "interdiction", "gauche"]),
    aocycliste("611.15", "Ne pas observer le signal de prescription « Interdiction de faire demi-tour ».", 30, ["signal", "demi-tour"]),
    aocycliste("611.16", "Ne pas observer le signal de prescription « Piste cyclable ».", 30, ["signal", "piste cyclable"]),
    aocycliste("611.17", "Ne pas observer le signal de prescription « Zone de rencontre ».", 30, ["signal", "zone de rencontre"]),
    aocycliste("611.18", "Ne pas observer le signal de prescription « Zone piétonne ».", 30, ["signal", "zone piétonne"]),

    aocycliste("612.1", "Utiliser un chemin pour piétons sans descendre de la machine.", 30, ["chemin piéton", "descendre", "machine"]),
    aocycliste("612.2", "Utiliser la piste cyclable à contresens.", 30, ["piste cyclable", "contresens"]),
    aocycliste("613", "Utiliser la bande cyclable à contresens.", 30, ["bande cyclable", "contresens"]),

    aocycliste("614", "Ne pas s’arrêter complètement à un signal « Stop ».", 30, ["stop", "stop coulé"]),
    aocycliste("615.1", "Ne pas observer un signal lumineux.", 60, ["feu rouge", "signal lumineux", "feu"]),
    aocycliste("615.2", "Ne pas observer un signal à feu clignotant alternativement ou un signal à feu clignotant simple.", 60, ["feu clignotant", "signal lumineux"]),

    aocycliste("616.1", "Enfreindre l’ordre de présélection en n’observant pas la flèche de direction marquée sur la chaussée ni la flèche de la signalisation lumineuse.", 30, ["présélection", "flèche", "chaussée"]),
    aocycliste("616.2", "Ne pas poursuivre sa route dans la direction indiquée par la flèche.", 30, ["flèche", "direction"]),

    aocycliste("617.1", "Omettre de faire un signe de la main ou d’annoncer le changement de direction avant d’obliquer à droite.", 20, ["signe de la main", "clignotant", "droite"]),
    aocycliste("617.2", "Omettre de faire un signe de la main ou d’annoncer le changement de direction avant d’obliquer à gauche.", 20, ["signe de la main", "clignotant", "gauche"]),
    aocycliste("617.3", "Omettre de faire un signe de la main ou d’annoncer le changement de direction avant de dépasser.", 20, ["signe de la main", "dépassement"]),

    aocycliste("618", "Empiéter sur une ligne de sécurité ou la franchir dans une localité.", 40, ["ligne de sécurité", "franchir", "empiéter"]),
    aocycliste("619", "Circuler sur une voie réservée aux bus.", 30, ["voie bus", "bus", "TPG"]),
    aocycliste("620", "Circuler sur un chemin qui ne se prête pas ou n’est manifestement pas destiné à la circulation des cycles, des cyclomoteurs et des vélos-taxis électriques.", 30, ["chemin interdit", "chemin non destiné"]),

    aocycliste("621.1", "Ne pas utiliser la piste cyclable.", 30, ["piste cyclable", "obligation"]),
    aocycliste("621.2", "Ne pas utiliser la bande cyclable.", 30, ["bande cyclable", "obligation"]),

    aocycliste("622.1", "Garer un cycle, un cyclomoteur ou un vélo-taxi électrique à un endroit où l’arrêt ou le parcage est interdit sur la base des règles générales de circulation.", 20, ["garer", "parcage interdit", "arrêt interdit"]),
    aocycliste("622.2", "Garer un cycle, un cyclomoteur ou un vélo-taxi électrique à un endroit où l’arrêt ou le parcage est interdit sur la base des signaux.", 20, ["garer", "signal", "parcage interdit"]),
    aocycliste("622.3", "Garer un cycle, un cyclomoteur ou un vélo-taxi électrique à un endroit où l’arrêt ou le parcage est interdit sur la base des marquages.", 20, ["garer", "marquage", "parcage interdit"]),

       aocycliste("623", "Ne pas accorder la priorité à un passage pour piétons.", 40, ["priorité", "passage piéton", "piéton"]),
    aocycliste("624", "Utiliser un téléphone sans dispositif mains libres pendant la course.", 30, ["téléphone", "natel", "portable", "mains libres"]),
    aocycliste("625", "Dépasser la vitesse maximale autorisée ou la vitesse maximale signalée.", 40, ["vitesse", "excès de vitesse"]),

    aocycliste("700.2", "Utiliser un cyclomoteur ou un vélo-taxi électrique dépourvu de la plaque de contrôle ou d’une vignette valable, lorsqu’une assurance a été conclue.", 60, ["plaque", "vignette", "assurance", "cyclomoteur", "vélo-taxi"]),
    aocycliste("700.3", "Utiliser un cyclomoteur ou un vélo-taxi électrique sans le permis de circulation requis.", 80, ["permis de circulation", "cyclomoteur", "vélo-taxi"]),
    aocycliste("700.4", "Utiliser un cyclomoteur qui n’est pas assuré.", 120, ["assurance", "non assuré", "cyclomoteur"]),

    aocycliste("701.2", "Permettre à un tiers de faire usage d’un cyclomoteur ou d’un vélo-taxi électrique dépourvu de la plaque de contrôle ou d’une vignette valable, lorsqu’une assurance a été conclue.", 60, ["tiers", "plaque", "vignette", "assurance", "cyclomoteur", "vélo-taxi"]),
    aocycliste("701.3", "Permettre à un tiers de faire usage d’un cyclomoteur ou d’un vélo-taxi électrique sans le permis de circulation requis.", 80, ["tiers", "permis de circulation", "cyclomoteur", "vélo-taxi"]),
    aocycliste("701.4", "Permettre à un tiers de faire usage d’un cyclomoteur qui n’est pas assuré.", 120, ["tiers", "assurance", "non assuré", "cyclomoteur"]),

    aocycliste("702", "Circuler avec une plaque de contrôle qui n’est pas bien lisible.", 20, ["plaque", "plaque de contrôle", "illisible"]),

    aocycliste("703.1", "Circuler sans la sonnette prescrite pour les cyclomoteurs.", 20, ["sonnette", "cyclomoteur"]),
    aocycliste("703.2", "Circuler sans catadioptre fixé à demeure.", 40, ["catadioptre", "réflecteur"]),
    aocycliste("703.3", "Circuler sans le miroir rétroviseur prescrit pour les cyclomoteurs.", 20, ["miroir", "rétroviseur", "cyclomoteur"]),

       aocycliste("704", "Circuler avec un pneu dont l’état est défectueux, amende par roue.", 20, ["pneu", "roue", "défectueux"]),

    aopassager("800.1", "Passager ne portant pas la ceinture de sécurité.", 60, ["ceinture", "sécurité", "non attaché"]),
    aopassager("800.2", "Passager d’un motocycle, d’un quadricycle léger, d’un quadricycle ou d’un tricycle à moteur ne portant pas le casque.", 60, ["casque", "moto", "motocycle", "quadricycle", "tricycle"]),

    aopassager("801.1", "Passager poussant un véhicule ou un objet.", 20, ["pousser", "véhicule", "objet"]),
    aopassager("801.2", "Passager tirant un véhicule ou un objet.", 20, ["tirer", "véhicule", "objet"]),
    aopassager("801.3", "Passager remorquant un véhicule ou un objet.", 20, ["remorquer", "véhicule", "objet"]),

    aopieton("900", "Ne pas emprunter le trottoir.", 10, ["trottoir", "marcher"]),

    aopieton("901.1", "Ne pas utiliser un passage pour piétons se trouvant à une distance de moins de 50 m.", 10, ["passage piéton", "passage pour piétons", "50 m", "traverser"]),
    aopieton("901.2", "Ne pas utiliser une passerelle se trouvant à une distance de moins de 50 m.", 10, ["passerelle", "50 m", "traverser"]),
    aopieton("901.3", "Ne pas utiliser un passage souterrain se trouvant à une distance de moins de 50 m.", 10, ["passage souterrain", "50 m", "traverser"]),

    aopieton("902.1", "Ne pas observer le signal « Accès interdit aux piétons ».", 20, ["signal", "accès interdit", "interdit aux piétons"]),
    aopieton("902.2", "Ne pas observer le signal « Chemin pour piétons ».", 10, ["signal", "chemin pour piétons"]),

    aopieton("903.1", "Ne pas observer un signal lumineux.", 20, ["feu rouge", "signal lumineux", "feu"]),
    aopieton("903.2", "Ne pas observer un signal à feux clignotant alternativement ou un signal à feu clignotant simple.", 20, ["feu clignotant", "signal lumineux"]),

    aopieton("904.1", "S’engager sur une autoroute.", 20, ["autoroute", "s’engager"]),
    aopieton("904.2", "S’engager sur une semi-autoroute.", 20, ["semi-autoroute", "s’engager"]),

    aopieton("905", "Contourner, passer par-dessus ou par-dessous les barrières ou les semi-barrières.", 20, ["barrière", "semi-barrière", "passage à niveau"]),

    aopieton("906.1", "Piéton utilisant une piste cyclable lorsqu’il dispose d’un trottoir.", 10, ["piste cyclable", "trottoir"]),
    aopieton("906.2", "Piéton utilisant une piste cyclable lorsqu’il dispose d’un chemin pour piétons.", 10, ["piste cyclable", "chemin pour piétons"]),

    aopieton("907.1", "Circuler sans feu.", 20, ["engin assimilé", "trottinette", "feu", "éclairage"]),
    aopieton("907.2", "Utiliser les aires de circulation destinées aux piétons de manière à gêner les autres usagers.", 20, ["aire piétonne", "gêne", "autres usagers"]),
    aopieton("907.3", "Utiliser la chaussée des routes secondaires à faible circulation de manière à gêner les autres usagers.", 20, ["chaussée", "route secondaire", "gêne"]),
    aopieton("907.4", "Ne pas observer le signal « Circulation interdite aux engins assimilés à des véhicules ».", 20, ["signal", "engin assimilé", "interdiction"]),
    aopieton("907.5", "Utiliser des engins assimilés à des véhicules sur des aires de circulation qui leur sont interdites.", 20, ["engin assimilé", "aire interdite", "trottinette"]),
        aopieton("907.6", "Ne pas respecter la priorité des piétons.", 30, ["priorité", "piétons", "passage piéton"]),

    aoautre("1001", "Ne pas collaborer à l’obtention de documents de voyage.", 100, ["LEI", "étrangers", "intégration", "documents de voyage"]),

    aoautre("2001", "Violer l’obligation d’informer en refusant de donner un renseignement.", 200, ["asile", "LAsi", "obligation d’informer", "renseignement"]),

    aoautre("3001", "Violer l’obligation d’indiquer les prix ou le prix unitaire.", 200, ["concurrence déloyale", "LCD", "prix", "prix unitaire", "affichage prix"]),

    aoautre("4001", "Violer l’interdiction de cueillir, déterrer, arracher, emmener, mettre en vente, vendre, acheter ou détruire au maximum 5 plantes sauvages des espèces désignées.", 100, ["nature", "paysage", "LPN", "plantes sauvages", "cueillir", "déterrer"]),

    aoautre("5001", "Omettre de conserver sur soi le permis de port d’armes.", 20, ["armes", "LArm", "permis de port d’armes"]),
    aoautre("5002", "Transporter une arme à feu sans avoir séparé l’arme des munitions.", 300, ["armes", "arme à feu", "munitions", "transport"]),

    aoautre("6001", "Emprunter une route nationale soumise à redevance sans avoir acheté la vignette nécessaire pour la période de taxation.", 200, ["vignette", "autoroute", "route nationale", "redevance"]),
      aoautre("6002", "Emprunter une route nationale soumise à redevance sans avoir collé la vignette nécessaire directement sur le véhicule ou à l’emplacement prescrit, ou en ayant collé une vignette endommagée.", 200, ["vignette", "autoroute", "collée", "endommagée", "route nationale"]),

    aonavigation("7100.1", "Ne pas être muni du permis de conduire exigé.", 20, ["permis de conduire", "document", "bateau"]),
    aonavigation("7100.2", "Ne pas être muni du permis de navigation ou du certificat d’admission.", 20, ["permis de navigation", "certificat admission", "document"]),
    aonavigation("7100.3", "Ne pas être muni de la fiche d’entretien du système antipollution.", 20, ["fiche entretien", "antipollution"]),

    aonavigation("7101.1", "Ne pas annoncer dans les délais tout fait qui nécessite une modification ou un complément au permis, qui en entraîne le remplacement ou le rétablissement.", 20, ["annoncer", "délai", "permis", "modification", "remplacement"]),
    aonavigation("7101.2", "Ne pas annoncer dans les délais un changement de domicile au canton de son nouveau domicile.", 20, ["domicile", "changement adresse", "annoncer"]),

    aonavigation("7102", "Conduire ou prêter un bateau soumis à l’obligation de signes distinctifs, mais non à l’assurance obligatoire, alors que le permis de navigation ou le certificat d’admission fait défaut ou que le bateau est dépourvu de signes distinctifs ou muni de faux signes distinctifs.", 100, ["signes distinctifs", "permis navigation", "certificat admission", "faux signes", "prêter bateau"]),

    aonavigation("7103", "Ne pas appliquer les signes distinctifs ou ne pas le faire conformément aux prescriptions.", 40, ["signes distinctifs", "marquage", "prescriptions"]),

    aonavigation("7104", "Ne pas munir des inscriptions prescrites les bateaux dont la longueur est inférieure à 2,50 m, les engins de plage et autres bateaux semblables, les bateaux à pagaie, les bateaux de compétition à l’aviron, les planches à voile, les kitesurfs et autres bateaux non soumis à l’obligation de signes distinctifs, ou ne pas le faire conformément aux prescriptions.", 40, ["inscriptions", "2.50 m", "engin de plage", "bateau à pagaie", "aviron", "planche à voile", "kitesurf"]),

    aonavigation("7105", "Mettre en service ou stationner sans autorisation un bateau qui a son port d’attache à l’étranger.", 50, ["bateau étranger", "port d’attache", "autorisation", "stationner"]),

    aonavigation("7106", "Dépasser les délais prescrits pour le contrôle périodique subséquent obligatoire des gaz d’échappement ou le contrôle périodique des systèmes de filtres à particules de plus de 3 mois, mais de moins de 6 mois.", 100, ["gaz échappement", "filtre particules", "contrôle périodique", "antipollution"]),

    aonavigation("7200.1", "Stationner dans les champs de végétation aquatique tels que roseaux, joncs et nénuphars.", 100, ["stationnement bateau", "végétation aquatique", "roseaux", "joncs", "nénuphars"]),
    aonavigation("7200.2", "Stationner dans les passages étroits, dans les chenaux, à proximité et sous les ponts.", 100, ["stationnement bateau", "passage étroit", "chenal", "pont"]),

    aonavigation("7201", "S’amarrer aux signaux de la voie navigable.", 50, ["amarrage", "s’amarrer", "signaux", "voie navigable"]),

    aonavigation("7202", "Ne pas observer les signaux d’interdiction A7 à A9 de l’annexe 4 ONI ou A.4 à A.6 de l’annexe B RNC.", 50, ["signal interdiction", "ONI", "RNC", "A7", "A8", "A9"]),

    aonavigation("7203.1", "Dépasser le temps de stationnement signalisé de moins de 2 heures.", 40, ["stationnement", "temps dépassé", "moins de 2 heures"]),
    aonavigation("7203.2", "Dépasser le temps de stationnement signalisé de plus de 2 heures, mais de moins de 4 heures.", 60, ["stationnement", "temps dépassé", "2 heures", "4 heures"]),
    aonavigation("7203.3", "Dépasser le temps de stationnement signalisé de plus de 4 heures, mais de moins de 10 heures.", 100, ["stationnement", "temps dépassé", "4 heures", "10 heures"]),

    aonavigation("7204", "Stationner un bateau à l’extérieur des lieux de stationnement autorisés pendant 24 à 48 heures sans qu’une personne ne se trouve à bord.", 100, ["stationnement bateau", "lieu autorisé", "24 heures", "48 heures", "personne à bord"]),

    aonavigation("7205", "Stationner sans droit un bateau en dehors des ports, des débarcadères ou de toute autre installation pour la navigation pendant 24 à 48 heures.", 100, ["stationnement bateau", "sans droit", "port", "débarcadère", "24 heures", "48 heures"]),

    aonavigation("7300", "Ne pas porter les signaux visuels prescrits ou porter des signaux visuels interdits lors du stationnement.", 100, ["signaux visuels", "stationnement", "signal interdit"]),

    aonavigation("7301.1", "Pêche professionnelle : ne pas porter le ballon jaune ou le feu prescrit pendant la pose et le relèvement des filets.", 50, ["pêche professionnelle", "ballon jaune", "feu", "filets"]),
    aonavigation("7301.2", "Pêche professionnelle : ne pas porter le ballon blanc prescrit pendant la pêche.", 50, ["pêche professionnelle", "ballon blanc"]),
    aonavigation("7301.3", "Pêche professionnelle : porter le ballon jaune ou le feu prescrit en dehors des périodes de pose et de relèvement des filets.", 50, ["pêche professionnelle", "ballon jaune", "feu", "filets"]),
    aonavigation("7301.4", "Pêche professionnelle : porter le ballon blanc prescrit en dehors des périodes de pêche.", 50, ["pêche professionnelle", "ballon blanc"]),

    aonavigation("7302.1", "Pêche à la traîne : ne pas porter le ballon blanc prescrit pendant la pêche.", 50, ["pêche à la traîne", "ballon blanc"]),
    aonavigation("7302.2", "Pêche à la traîne : ne pas porter le pavillon blanc prescrit pendant la pêche.", 50, ["pêche à la traîne", "pavillon blanc"]),
    aonavigation("7302.3", "Pêche à la traîne : porter le ballon blanc en dehors de la pêche.", 50, ["pêche à la traîne", "ballon blanc"]),
    aonavigation("7302.4", "Pêche à la traîne : porter le pavillon blanc en dehors de la pêche.", 50, ["pêche à la traîne", "pavillon blanc"]),

       aonavigation("7303", "Ne pas hisser le panneau prescrit, lettre « A » du Code international de signaux, lors de plongée subaquatique à partir de la rive ou ne pas l’éclairer de manière efficace de nuit.", 50, ["plongée", "panneau A", "code international", "rive", "nuit", "éclairage"]),

    aonavigation("7401", "Ne pas observer les distances de sécurité par rapport aux bateaux prioritaires et aux bateaux des pêcheurs professionnels portant les signaux prescrits.", 50, ["distance sécurité", "bateau prioritaire", "pêche professionnelle"]),

    aonavigation("7402.1", "Naviguer sans droit en bateau à moteur en longeant la rive dans la zone riveraine intérieure ou à moins de 150 m de la rive.", 100, ["zone riveraine", "rive", "150 m", "bateau moteur"]),
    aonavigation("7402.2", "Naviguer sans droit en bateau motorisé en longeant la rive dans la zone riveraine, mais à plus de 150 m de la rive.", 50, ["zone riveraine", "rive", "bateau motorisé"]),
    aonavigation("7402.3", "Dépasser de 15 km/h au plus la vitesse maximale autorisée dans la zone riveraine intérieure ou à moins de 150 m de la rive.", 150, ["vitesse", "zone riveraine", "150 m", "15 km/h"]),
    aonavigation("7402.4", "Dépasser de 15 km/h au plus la vitesse maximale autorisée dans la zone riveraine extérieure.", 100, ["vitesse", "zone riveraine extérieure", "15 km/h"]),
    aonavigation("7402.5", "Dépasser de 15 km/h au plus la vitesse maximale autorisée dans la zone riveraine, mais à plus de 150 m de la rive.", 100, ["vitesse", "zone riveraine", "15 km/h"]),
    aonavigation("7402.6", "Naviguer ou se tenir sans droit dans les eaux d’un port.", 100, ["port", "eaux du port", "sans droit"]),
    aonavigation("7402.7", "Ne pas observer la distance minimale par rapport aux champs de végétation aquatique tels que roseaux, joncs et nénuphars.", 100, ["végétation aquatique", "roseaux", "joncs", "nénuphars", "distance"]),

    aonavigation("7403.1", "Naviguer sur des plans d’eau interdits à toute navigation en bateau à voile ou à moteur, planche à voile ou kitesurf.", 100, ["plan d’eau interdit", "voile", "moteur", "planche à voile", "kitesurf"]),
    aonavigation("7403.2", "Naviguer sur des plans d’eau interdits à toute navigation en bateau à rames, bateau pneumatique, bateau à pagaie ou engin de plage.", 50, ["plan d’eau interdit", "rame", "pneumatique", "pagaie", "engin de plage"]),

    aonavigation("7404.1", "Naviguer sur des plans d’eau interdits à certaines catégories de bateaux seulement en bateau à voile ou à moteur, planche à voile ou kitesurf.", 100, ["plan d’eau interdit", "voile", "moteur", "kitesurf"]),
    aonavigation("7404.2", "Naviguer sur des plans d’eau interdits à certaines catégories de bateaux seulement en bateau à rames, bateau pneumatique, bateau à pagaie ou engin de plage.", 50, ["plan d’eau interdit", "rame", "pneumatique", "pagaie"]),

    aonavigation("7405", "Naviguer avec des bateaux dont la longueur est inférieure à 2,50 m, des engins de plage et autres bateaux semblables ou des bateaux non soumis à l’obligation de signes distinctifs hors de la zone riveraine intérieure ou à plus de 150 m des bateaux qui les accompagnent.", 50, ["2.50 m", "engin de plage", "zone riveraine", "150 m", "signes distinctifs"]),

    aonavigation("7406.1", "Utiliser des skis nautiques ou des engins analogues à des heures interdites.", 100, ["ski nautique", "heures interdites"]),
    aonavigation("7406.2", "Utiliser des skis nautiques ou des engins analogues dans la zone riveraine extérieure.", 100, ["ski nautique", "zone riveraine extérieure"]),
    aonavigation("7406.3", "Utiliser des skis nautiques ou des engins analogues dans la zone riveraine intérieure, mais à plus de 150 m de la rive.", 100, ["ski nautique", "zone riveraine intérieure", "150 m"]),
    aonavigation("7406.4", "Utiliser des skis nautiques ou des engins analogues en remorquant simultanément plus de deux skieurs nautiques ou engins.", 100, ["ski nautique", "remorquer", "plus de deux"]),
    aonavigation("7406.5", "Utiliser des skis nautiques ou des engins analogues en traînant une corde à vide ou une corde élastique.", 60, ["ski nautique", "corde à vide", "corde élastique"]),
    aonavigation("7406.6", "Utiliser sans droit des scooters aquatiques, des jetskis et autres engins flottants similaires.", 100, ["scooter aquatique", "jetski", "engin flottant"]),

    aonavigation("7407.1", "Ne pas être muni des équipements et engins de sauvetage prescrits ou être muni d’équipements et d’engins hors d’usage, par équipement.", 20, ["sauvetage", "équipement", "hors d’usage"]),
    aonavigation("7407.2", "Ne pas être muni des équipements et engins de sauvetage prescrits ou être muni d’équipements et d’engins hors d’usage, par engin de sauvetage.", 50, ["sauvetage", "engin de sauvetage", "hors d’usage"]),

    aonavigation("7408", "Emmener un nombre de personnes supérieur à celui mentionné dans le permis de navigation.", 60, ["nombre personnes", "permis navigation", "surcharge passagers"]),

    aonavigation("7409", "Ne pas observer les signaux d’interdiction A1 à A6 et A10 de l’annexe 4 ONI ou A.1 à A.3 et A.7 à A.12 de l’annexe B RNC.", 100, ["signal interdiction", "ONI", "RNC"]),

    aonavigation("7410", "Dépasser de 15 km/h au plus la vitesse maximale signalisée ou la vitesse maximale autorisée sur le lac de Constance.", 100, ["vitesse", "15 km/h", "lac de Constance"]),
    aonavigation("7411", "Dépasser de 15 km/h au plus la vitesse maximale autorisée par le canton.", 100, ["vitesse", "15 km/h", "canton"]),

    aonavigation("7501.1", "Se baigner en dehors des plans d’eau autorisés par les autorités et signalés comme tels ou en dehors des bains publics, dans un rayon de 100 m autour des entrées des ports et des débarcadères des bateaux à passagers.", 50, ["baignade", "bains publics", "100 m", "port", "débarcadère"]),
    aonavigation("7501.2", "Se baigner en dehors des plans d’eau autorisés par les autorités et signalés comme tels ou en dehors des bains publics, dans un rayon de 100 m autour des entrées des ports et des débarcadères des bateaux à passagers lorsque la navigation s’en trouve entravée ou gênée.", 50, ["baignade", "gêne navigation", "100 m", "port", "débarcadère"]),

    aonavigation("7502", "S’approcher de bâtiments en marche.", 50, ["baignade", "bâtiment en marche", "s’approcher"]),

    aonavigation("7503", "Pratiquer la plongée subaquatique sur la trajectoire des bateaux en service régulier, dans les passages étroits, aux entrées des ports et à proximité, à proximité des places d’amarrage officiellement autorisées ou dans un rayon de 100 m autour des débarcadères autorisés par les autorités pour les bateaux en service régulier.", 100, ["plongée", "bateaux service régulier", "passage étroit", "port", "100 m", "débarcadère"]),

    aonavigation("7504", "Plonger dans les voies navigables marquées.", 100, ["plongée", "voie navigable", "voie marquée"]),

    aonavigation("7505", "Ne pas observer le signal d’interdiction A14 figurant à l’annexe 4 ONI.", 50, ["signal interdiction", "A14", "ONI"]),

        aonavigation("7506", "Utiliser sans droit un scooter de plongée.", 100, ["scooter de plongée", "plongée", "sans droit"]),

    aoautre("8001", "Consommer illicitement et intentionnellement des stupéfiants ayant des effets de type cannabique.", 100, ["stupéfiants", "cannabis", "cannabique", "drogue", "consommation"]),

    aoautre("9001", "Utiliser un point de collecte des déchets public en dehors des horaires prescrits.", 50, ["environnement", "déchets", "point de collecte", "horaires", "LPE"]),
    aoautre("9002", "Ne pas être muni du document de suivi lors du transport de déchets.", 100, ["environnement", "déchets", "transport déchets", "document de suivi", "LPE"]),

    aoautre("10001", "Fumer dans des espaces fermés accessibles au public.", 80, ["tabac", "tabagisme passif", "fumer", "espace fermé", "public"]),

    aoautre("11001", "Ne pas observer les limitations d’accès dans certaines zones forestières.", 100, ["forêt", "zones forestières", "limitation accès", "LFo"]),
    aoautre("11002", "Circuler sans droit en forêt et sur des routes forestières avec des véhicules à moteur.", 100, ["forêt", "route forestière", "véhicule à moteur", "circuler sans droit", "LFo"]),

    aoautre("12001", "Pénétrer sans motif suffisant sur le territoire de chasse muni d’une arme de tir.", 200, ["chasse", "territoire de chasse", "arme de tir", "LChP"]),
    aoautre("12002", "Laisser chasser des chiens.", 150, ["chasse", "chien", "chiens", "laisser chasser"]),
    aoautre("12003", "Pénétrer ou circuler dans les zones de tranquillité pour la faune sauvage en dehors des chemins et itinéraires qu’il est autorisé d’y emprunter.", 150, ["chasse", "faune sauvage", "zone de tranquillité", "chemin", "itinéraire"]),
    aoautre("12004", "Ne pas observer l’obligation de tenir les chiens en laisse dans les districts francs fédéraux.", 150, ["chasse", "chien", "laisse", "district franc fédéral"]),
    aoautre("12005", "Camper librement dans les districts francs fédéraux.", 150, ["chasse", "camping", "camper", "district franc fédéral"]),
    aoautre("12006", "Faire circuler des aéronefs civils sans occupants dans les districts francs fédéraux.", 150, ["chasse", "drone", "aéronef sans occupant", "district franc fédéral"]),
    aoautre("12007", "Pratiquer le ski en dehors des pistes et itinéraires balisés dans les districts francs fédéraux.", 150, ["chasse", "ski", "hors-piste", "district franc fédéral"]),
    aoautre("12008", "Circuler sans droit sur des routes d’alpage et des routes forestières et utiliser des véhicules en dehors des routes, des chemins forestiers et de ceux de campagne dans les districts francs fédéraux.", 150, ["chasse", "route d’alpage", "route forestière", "véhicule", "district franc fédéral"]),
    aoautre("12009", "Utiliser des planches à voile tirées par des cerfs-volants ou des engins du même type et faire circuler des modèles réduits d’engins flottants dans les réserves d’oiseaux d’eau et de migrateurs.", 150, ["chasse", "réserve oiseaux", "oiseaux d’eau", "migrateurs", "kitesurf", "modèle réduit"]),
    aoautre("12010", "Affourager des animaux sauvages et installer des saunières dans les districts francs fédéraux.", 150, ["chasse", "animaux sauvages", "affourager", "saunière", "district franc fédéral"]),
    aoautre("12011", "Se livrer à la chasse sans avoir sur soi les pièces de légitimation prescrites, par pièce manquante.", 20, ["chasse", "pièce de légitimation", "document", "pièce manquante"]),

    aoautre("13001", "Pêcher des poissons ou des écrevisses pendant les périodes de protection, par poisson ou écrevisse.", 100, ["pêche", "poisson", "écrevisse", "période de protection"]),
    aoautre("13002", "Ne pas respecter la longueur minimale des poissons ou des écrevisses pêchés, par poisson ou écrevisse.", 100, ["pêche", "poisson", "écrevisse", "longueur minimale"]),
    aoautre("13003", "Ne pas respecter les interdictions de capture, par poisson ou écrevisse.", 150, ["pêche", "poisson", "écrevisse", "interdiction de capture"]),

    aoautre("14001", "Pratiquer le commerce itinérant sans autorisation.", 200, ["commerce itinérant", "autorisation", "vente"]),
    aoautre("14002", "Offrir des marchandises ou des services en violation des interdictions ou restrictions prévues.", 200, ["commerce itinérant", "marchandises", "services", "restriction", "interdiction"]),
    aoautre("14003", "Ne pas porter sur soi l’autorisation de pratiquer le commerce itinérant dans l’exercice de cette activité.", 20, ["commerce itinérant", "autorisation", "document"])
];