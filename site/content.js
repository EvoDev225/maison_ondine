// Tout le contenu de marque du site Maison Ondine (démo, entreprise fictive).
// Pour adapter la démo à un vrai hôtel : modifier ce fichier et remplacer
// les fichiers des dossiers images/ et media/. Aucun prix chiffré : « sur demande ».
window.SITE = {
  brand: {
    name: 'Maison Ondine',
    words: ['MAISON', 'ONDINE'],           // les deux mots portés par les battants de la porte
    tagline: 'Hôtel boutique & appartements meublés',
    place: 'Riviera Golf, Cocody — Abidjan',
    address: 'Allée des Palmiers bleus, Riviera Golf, Cocody — Abidjan',
    email: 'bonjour@maisonondine.ci',
    hours: 'Réception ouverte 24 h/24, 7 j/7'
  },

  // Numéro fictif : international sans « + », puis affichage
  whatsapp: {
    number: '2250700000000',
    display: '07 00 00 00 00',
    message: 'Bonjour Maison Ondine, je souhaite réserver un séjour.'
  },

  demoBadge: 'Site de démonstration',

  nav: {
    menuLabel: 'Menu',
    closeLabel: 'Fermer',
    cta: 'Réserver',
    links: [
      { label: 'La Maison', href: '#maison' },
      { label: 'Chambres & appartements', href: '#hebergements' },
      { label: 'Longs séjours', href: '#longs-sejours' },
      { label: 'Le plan', href: '#plan' },
      { label: 'Offres', href: '#offres' },
      { label: 'Questions', href: '#faq' },
      { label: 'Réserver', href: '#reserver' }
    ]
  },

  hero: {
    kicker: 'Hôtel boutique & appartements meublés — Riviera Golf',
    title: ['Ici, Abidjan', 'ralentit.'],
    video: { desktop: 'media/hero-desktop.mp4', mobile: 'media/hero-mobile.mp4' },
    poster: { desktop: 'images/poster-hero-desktop.jpg', mobile: 'images/poster-hero-mobile.jpg' },
    alt: 'Piscine à débordement bordée de palmiers au coucher du soleil',
    booking: {
      arrive: 'Arrivée',
      leave: 'Départ',
      guests: 'Voyageurs',
      guestOptions: ['1 personne', '2 personnes', '3 personnes', '4 personnes et plus'],
      submit: 'Vérifier les disponibilités',
      mobile: 'Réserver sur WhatsApp'
    }
  },

  intro: {
    kicker: 'Maison Ondine — Riviera Golf, Cocody',
    title: 'Un refuge au cœur de la ville',
    text: 'Dix-huit chambres et douze appartements meublés, posés autour d’une piscine et d’un jardin de palmiers, à quinze minutes du Plateau. On vient pour une nuit, une mission ou trois mois : la porte est la même, l’accueil aussi.',
    motto: 'On arrive en voyageur, on repart en habitué.',
    features: [
      { icon: 'pool', label: 'Piscine & jardin' },
      { icon: 'power', label: 'Groupe électrogène 24 h/24' },
      { icon: 'shuttle', label: 'Navette aéroport' },
      { icon: 'shield', label: 'Sécurité 24 h/24' }
    ]
  },

  direct: {
    title: 'Le meilleur accueil se réserve en direct',
    text: 'Écrivez-nous : la réception vous répond avec les disponibilités et le tarif du moment.',
    cta: 'Réserver sur WhatsApp',
    guarantees: ['Sans intermédiaire', 'Confirmation rapide', 'Annulation souple']
  },

  // Carrousel plein écran des univers
  universes: [
    {
      kicker: 'L’hôtel', title: 'Dormir',
      sub: 'Dix-huit chambres où la ville s’arrête à la porte',
      text: 'Literie épaisse, rideaux occultants, climatisation silencieuse et petit-déjeuner servi jusqu’à 11 h.',
      img: 'images/u-dormir.jpg', alt: 'Chambre aux tons sombres, lit blanc et coussins bleus',
      primary: 'Réserver une chambre', secondary: { label: 'Voir les chambres', href: '#hebergements' }
    },
    {
      kicker: 'Les appartements', title: 'Séjourner',
      sub: 'Douze appartements meublés, du studio au duplex',
      text: 'Cuisine équipée, salon, ménage inclus : le confort d’une maison, le service d’un hôtel.',
      img: 'images/u-sejourner.jpg', alt: 'Salle à manger ouverte sur un jardin tropical',
      primary: 'Réserver un appartement', secondary: { label: 'Les longs séjours', href: '#longs-sejours' }
    },
    {
      kicker: 'Le restaurant', title: 'Savourer',
      sub: 'Une terrasse sous les lampes, de l’aube à minuit',
      text: 'Cuisine ivoirienne revisitée et grands classiques : attiéké poisson braisé, kédjenou, bissap maison.',
      img: 'images/u-savourer.jpg', alt: 'Terrasse de restaurant éclairée par des lampes de table au crépuscule',
      primary: 'Réserver une table', secondary: { label: 'Voir le plan', href: '#plan' }
    },
    {
      kicker: 'Piscine & spa', title: 'Se détendre',
      sub: 'Une piscine à l’ombre des palmiers',
      text: 'Transats, serviettes fournies, massages sur rendez-vous : la journée peut attendre.',
      img: 'images/u-detendre.jpg', alt: 'Chaises longues en bois au bord d’une piscine tropicale',
      primary: 'Réserver un massage', secondary: { label: 'Découvrir la piscine', href: '#detente' }
    }
  ],

  stays: {
    caption: 'Nos chambres & appartements',
    title: 'Choisissez votre façon de séjourner',
    lead: 'Dix hébergements, de la chambre pour une nuit au penthouse pour un trimestre. Chaque tarif est donné sur demande, selon la saison et la durée.',
    filters: [
      { key: 'all', label: 'Tout' },
      { key: 'hotel', label: 'Hôtel' },
      { key: 'appart', label: 'Appartements' }
    ],
    catLabels: { hotel: 'Hôtel', appart: 'Appartement' },
    priceLabel: 'Tarif sur demande',
    bookLabel: 'Réserver',
    items: [
      { cat: 'hotel', name: 'Chambre Classique', size: '24 m²', guests: '2 personnes', specs: ['Lit queen', 'Douche à l’italienne', 'Bureau'], img: 'images/g01-chambre-classique.jpg', alt: 'Chambre chaleureuse avec grand lit et lampes de chevet', ratio: '900/1100' },
      { cat: 'hotel', name: 'Chambre Supérieure vue jardin', size: '30 m²', guests: '2 personnes', specs: ['Balcon sur les palmiers', 'Lit king', 'Coin salon'], img: 'images/g02-chambre-superieure.jpg', alt: 'Chambre ouverte sur des palmiers', ratio: '900/700' },
      { cat: 'hotel', name: 'Suite Junior', size: '42 m²', guests: '2 personnes', specs: ['Salon séparé', 'Baignoire', 'Machine à café'], img: 'images/g03-suite-junior.jpg', alt: 'Suite boisée avec baie vitrée sur le jardin', ratio: '900/1200' },
      { cat: 'hotel', name: 'Suite Ondine', size: '58 m²', guests: '2 personnes', specs: ['Terrasse privée', 'Vue piscine', 'Service en chambre'], img: 'images/g04-suite-ondine.jpg', alt: 'Suite avec tête de lit en bois sculpté', ratio: '900/800', badge: 'Signature' },
      { cat: 'hotel', name: 'Chambre Familiale', size: '45 m²', guests: '4 personnes', specs: ['Deux lits doubles', 'Canapé', 'Lit bébé sur demande'], img: 'images/g05-chambre-familiale.jpg', alt: 'Chambre familiale avec canapé et coussins rouges', ratio: '900/1150' },
      { cat: 'appart', name: 'Studio meublé', size: '35 m²', guests: '2 personnes', specs: ['Kitchenette', 'Ménage inclus', 'Fibre optique'], img: 'images/g06-studio.jpg', alt: 'Studio en bois avec grand canapé et plantes', ratio: '900/700' },
      { cat: 'appart', name: 'Appartement 2 pièces', size: '62 m²', guests: '3 personnes', specs: ['Cuisine ouverte', 'Vue jardin', 'Lave-linge'], img: 'images/g07-appart-2p.jpg', alt: 'Cuisine ouverte face à un jardin tropical', ratio: '900/1200' },
      { cat: 'appart', name: 'Appartement 3 pièces', size: '88 m²', guests: '5 personnes', specs: ['Deux chambres', 'Grand salon', 'Parking'], img: 'images/g08-appart-3p.jpg', alt: 'Salon boisé avec fauteuil en osier', ratio: '900/800' },
      { cat: 'appart', name: 'Duplex familial', size: '120 m²', guests: '6 personnes', specs: ['Trois chambres', 'Véranda', 'Deux salles de bain'], img: 'images/g09-duplex.jpg', alt: 'Véranda ouverte sur la végétation', ratio: '900/1100' },
      { cat: 'appart', name: 'Penthouse', size: '150 m²', guests: '6 personnes', specs: ['Toit-terrasse', 'Vue sur la lagune', 'Conciergerie dédiée'], img: 'images/g10-penthouse.jpg', alt: 'Chambre en hauteur avec vue sur la ville', ratio: '900/700', badge: 'Signature' }
    ]
  },

  longStay: {
    caption: 'Longs séjours',
    title: ['Une mission, une mutation,', 'un nouveau départ ?'],
    text: 'Cadres en mission, familles expatriées, retours au pays : nos appartements se louent à la semaine ou au mois, sans paperasse inutile.',
    list: [
      'Cuisine équipée et vaisselle complète',
      'Ménage deux fois par semaine, linge fourni',
      'Fibre optique et espace de travail',
      'Parking privé et gardiennage',
      'Facture au nom de l’entreprise',
      'Électricité et eau garanties (groupe et forage)'
    ],
    cta: 'Demander un devis long séjour',
    img: 'images/longs-sejours.jpg', alt: 'Cuisine équipée aux façades en bois'
  },

  banner: {
    img: 'images/terrasse-large.jpg', alt: 'Table avec bougie sur une terrasse au coucher du soleil',
    quote: 'Le soir, quand la chaleur tombe, la terrasse s’allume et la ville se tait.'
  },

  reviews: {
    caption: 'Ce que disent nos hôtes',
    title: 'Ils reviennent, c’est notre plus belle note',
    score: '4,8', scoreMax: '/5', scoreText: 'Moyenne de 212 avis de séjour',
    items: [
      { text: 'Trois semaines de mission et pas une seule coupure : groupe électrogène, Wi-Fi qui tient, chambre calme. Le personnel connaissait mon café dès le deuxième matin.', author: 'Serge K.', meta: 'Mission de 3 semaines · Octobre 2026' },
      { text: 'On voulait un week-end à deux sans quitter Abidjan. Piscine le matin, dîner sur la terrasse le soir : on a eu l’impression de partir loin.', author: 'Aïcha & Yann', meta: 'Week-end à deux · Septembre 2026' },
      { text: 'Deux mois dans l’appartement 3 pièces en attendant notre maison. Les enfants ont adoré la piscine, et nous le ménage inclus.', author: 'Famille D.', meta: 'Long séjour · Été 2026' },
      { text: 'Séminaire de vingt personnes organisé en dix jours : salle équipée, pauses soignées, chambres prêtes à l’heure. Rien à redire.', author: 'Mariam T.', meta: 'Séminaire d’entreprise · Août 2026' }
    ]
  },

  relax: {
    kicker: 'Piscine & spa',
    title: 'Plonger, lire, ne rien faire',
    text: 'Une piscine de dix-huit mètres à l’ombre des palmiers, des transats, et un spa où l’on vous masse pendant que la ville s’éloigne.',
    cta: 'Réserver un moment au spa',
    video: 'media/eau.mp4', poster: 'images/poster-eau.jpg'
  },

  plan: {
    caption: 'Le plan de la Maison',
    title: 'Tout est à quelques pas',
    lead: 'Un domaine clos et gardé : la piscine au centre, l’hôtel d’un côté, les appartements de l’autre.',
    zones: [
      { id: 'entree', label: 'Entrée & gardiennage' },
      { id: 'reception', label: 'Réception 24 h/24' },
      { id: 'hotel', label: 'L’hôtel — 18 chambres' },
      { id: 'restaurant', label: 'Restaurant-terrasse' },
      { id: 'piscine', label: 'Piscine & transats' },
      { id: 'residence', label: 'La résidence — 12 appartements' },
      { id: 'spa', label: 'Spa & salle de sport' },
      { id: 'reunion', label: 'Salle de réunion' },
      { id: 'parking', label: 'Parking privé' }
    ],
    nearTitle: 'À proximité',
    near: [
      { time: '3 min', label: 'Le golf' },
      { time: '5 min', label: 'Centres commerciaux' },
      { time: '15 min', label: 'Le Plateau' },
      { time: '25 min', label: 'L’aéroport' }
    ]
  },

  offers: {
    caption: 'Offres & séjours',
    title: 'Des séjours pensés pour vous',
    lead: 'Nos formules se demandent en direct, à la réception ou sur WhatsApp.',
    conditions: 'Conditions sur demande',
    cta: 'Demander l’offre',
    items: [
      { kicker: 'Affaires', title: 'Séjour affaires', text: 'Petit-déjeuner dès 6 h, navette aéroport, bureau dans la chambre et facture entreprise.', img: 'images/offre-affaires.jpg', alt: 'Bureau éclairé par une lampe dans une chambre' },
      { kicker: 'À deux', title: 'Week-end à deux', text: 'Départ tardif le dimanche, petit-déjeuner au lit et dîner aux chandelles sur la terrasse.', img: 'images/offre-deux.jpg', alt: 'Plateau de petit-déjeuner posé sur un lit' },
      { kicker: 'Long séjour', title: 'Un mois et plus', text: 'Un appartement meublé, le ménage, le linge et la fibre : vous posez vos valises, on s’occupe du reste.', img: 'images/offre-long.jpg', alt: 'Grande table en bois ouverte sur le jardin' },
      { kicker: 'Famille', title: 'Escapade en famille', text: 'Chambres communicantes, lits d’appoint, piscine avec zone peu profonde et menu enfants.', img: 'images/offre-famille.jpg', alt: 'Piscine tropicale bordée de palmiers et de transats' }
    ]
  },

  faq: {
    caption: 'Questions fréquentes',
    title: 'Avant de venir',
    items: [
      { q: 'À quelle heure puis-je arriver et partir ?', a: 'Les chambres sont prêtes à partir de 14 h et se libèrent à 12 h. Une arrivée tôt ou un départ tardif se demandent sur WhatsApp, selon les disponibilités.' },
      { q: 'Proposez-vous une navette depuis l’aéroport ?', a: 'Oui. Donnez-nous votre numéro de vol : un chauffeur vous attend à la sortie, de jour comme de nuit.' },
      { q: 'Et en cas de coupure d’électricité ou d’eau ?', a: 'Vous ne la remarquerez pas : un groupe électrogène prend le relais en quelques secondes et un forage alimente tout le domaine en eau.' },
      { q: 'Peut-on louer un appartement au mois ?', a: 'Oui, dès une semaine. Au-delà d’un mois, nous établissons un devis personnalisé, avec facture au nom de votre entreprise si besoin.' },
      { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Mobile Money, carte bancaire, espèces, et virement pour les entreprises. Un acompte confirme la réservation.' },
      { q: 'Les enfants sont-ils les bienvenus ?', a: 'Avec plaisir : lits bébé et lits d’appoint sur demande, chambres familiales et piscine avec une zone peu profonde.' }
    ]
  },

  booking: {
    caption: 'Réserver',
    title: ['Votre chambre', 'vous attend'],
    text: 'Quelques lignes suffisent : votre demande part sur WhatsApp et la réception vous répond avec les disponibilités et le tarif.',
    typeLabel: 'Je souhaite',
    types: ['Une chambre d’hôtel', 'Un appartement meublé'],
    arrive: 'Arrivée',
    leave: 'Départ',
    guests: 'Voyageurs',
    guestOptions: ['1 personne', '2 personnes', '3 personnes', '4 personnes et plus'],
    nameLabel: 'Votre nom',
    namePlaceholder: 'Prénom et nom',
    submit: 'Envoyer ma demande sur WhatsApp',
    video: 'media/piscine-nuit.mp4', poster: 'images/poster-piscine-nuit.jpg'
  },

  footer: {
    lead: 'Un refuge au cœur de la ville, à Riviera Golf',
    discover: 'Découvrir la Maison',
    big: [
      { label: 'Dormir', slide: 0 },
      { label: 'Séjourner', slide: 1 },
      { label: 'Savourer', slide: 2 },
      { label: 'Se détendre', slide: 3 }
    ],
    groups: [
      { title: 'L’hôtel', links: [['Chambres & suites', '#hebergements'], ['Restaurant-terrasse', '#univers'], ['Piscine & spa', '#detente'], ['Salle de réunion', '#plan']] },
      { title: 'Les appartements', links: [['Studios & 2 pièces', '#hebergements'], ['3 pièces & duplex', '#hebergements'], ['Penthouse', '#hebergements'], ['Longs séjours', '#longs-sejours']] },
      { title: 'Infos pratiques', links: [['Le plan', '#plan'], ['Offres', '#offres'], ['Questions fréquentes', '#faq'], ['Réserver', '#reserver']] }
    ],
    socials: [['Instagram', '#'], ['Facebook', '#']],
    copyright: '© 2026 Maison Ondine — Riviera Golf, Cocody',
    demo: 'Site de démonstration — entreprise fictive',
    credits: 'Photos et vidéos : Pexels & Unsplash'
  }
};
