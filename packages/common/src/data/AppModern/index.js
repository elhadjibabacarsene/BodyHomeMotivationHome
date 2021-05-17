/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/src/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Accueil',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Coach',
      path: '#team',
      offset: '81',
    },
    {
      id: 3,
      label: 'Tarifs',
      path: '#pricing',
      offset: '81',
    },
    {
      id: 4,
      label: 'Boutique',
      path: '#pricing',
      offset: '81',
    },
    {
      id: 5,
      label: 'Conseils & bien-être',
      path: '',
      offset: '81',
    },
    /*{
      id: 6,
      label: 'Se connecter',
      path: '#team',
      offset: '81',
    }*/
  ],
};


/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: 'Prise de masse',
    value: 'prise_de_masse',
    text: '',
  },
  {
    id: 2,
    title: 'Perte de poids',
    value: 'minceur',
    text: '',
  },
  {
    id: 3,
    title: 'Summer Body',
    value: 'summer_body',
    text: '',
  },
];

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/src/assets/image/appModern/company1.png';
import client2 from 'common/src/assets/image/appModern/company2.png';
import client3 from 'common/src/assets/image/appModern/company3.png';
import client4 from 'common/src/assets/image/appModern/company4.png';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/src/assets/image/appModern/icons8-time-100.png';
import featureIcon2 from 'common/src/assets/image/appModern/icons8-training-100.png';
import featureIcon3 from 'common/src/assets/image/appModern/icons8-life-cycle-100.png';
import featureIcon4 from 'common/src/assets/image/appModern/icons8-marketing-80.png';
import featureIcon5 from 'common/src/assets/image/appModern/icons8-calories-100.png';
import featureIcon6 from 'common/src/assets/image/appModern/icons8-life-cycle-100.png';

export const features = {
  title:
    'Body Home Motivation (BHM) est la première plateforme sénégalaise de coaching en sport et nutrition. A partir de votre Indice de Masse Corporelle (IMC), nous vous proposons un programme sur-mesure simple et efficace le plus adapté à votre profil santé. Suivez votre programme personnalisé au quotidien et atteignez votre objectif. Notre plateforme en mots-clés :',
  slogan: 'UN PROGRAMME SPORT ET NUTRITION PERSONNALISE',
  items: [
    {
      id: 1,
      color: '#C60041',
      icon: featureIcon1,
      title:
        'PLUS DE 200 SEANCES DE SPORT COMPLETES AVEC VIDEOS DE DEMONSTRATION',
      description: '',
    },
    {
      id: 2,
      color: '#C60041',
      icon: featureIcon2,
      title: 'DES COACHS CERTIFIES',
      description: '',
    },
    {
      id: 3,
      color: '#C60041',
      icon: featureIcon3,
      title: 'UN SUIVI COMPLET DE VOS PROGRES',
      description: '',
    },
    {
      id: 4,
      color: '#C60041',
      icon: featureIcon4,
      title: 'UN SUIVI COMPLET DE VOS PROGRÈS',
      description: '',
    },
    {
      id: 5,
      color: '#C60041',
      icon: featureIcon5,
      title: 'UN PLANNING COMPLET SPORT ET NUTRTION',
      description: '',
    },
    {
      id: 6,
      color: '#C60041',
      icon: featureIcon6,
      title: 'UN FORUM D’ECHANGE De BONNES PRATIQUES ENTRE ABONNES ET COACHS',
      description: '',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/src/assets/image/appModern/2.jpg';
import appSlide2 from 'common/src/assets/image/appModern/3.jpeg';
import appSlide3 from 'common/src/assets/image/appModern/4.jpg';
import appIcon1 from 'common/src/assets/image/appModern/fitness-gym.png';
import appIcon2 from 'common/src/assets/image/appModern/gym.png';
import appIcon3 from 'common/src/assets/image/appModern/weight.png';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'Quel est votre objectif ?',
  description:
    'Choisissez votre objectif principal pour constituer votre programme sur-mesure. Notre objectif est de vous faire parvenir au vôtre.',
  features: [
    {
      id: 1,
      icon: appIcon3,
      title: 'Perte de poids',
      description: 'Perdez du poids, affinez et raffermissez votre taille.',
    },
    {
      id: 2,
      icon: appIcon1,
      title: 'Prise de masse',
      description:
        'Musclez et tonifiez votre corps, développez votre force, endurance et résistance à l’effort.',
    },
    {
      id: 3,
      icon: appIcon2,
      title: 'Summer Body (abdos, fessiers, cuisses)',
      description:
        'Aplatissez votre ventre, affinez votre taille et votre fessier, sculptez et tonifiez votre corps.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/src/assets/image/appModern/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'CODE INTEGRATION',
  title: 'Introducing coding features of our apps with Customization',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/src/assets/image/appModern/page1.png';
import slide2 from 'common/src/assets/image/appModern/page2.png';
import slide3 from 'common/src/assets/image/appModern/page3.png';

export const productData = {
  slogan: 'PRODUCT SHOWCASE',
  title: 'Meet Client Satisfaction by using our product',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'TARIFS DES ABONNEMENTS',
  title: '',
  monthly: [
    {
      id: 1,
      title: 'Abonnement 1 mois',
      description: '',
      suggested: false,
      price: 15000,
      features: [
        {
          id: 1,
          text: 'Accès à un programme sportif sur-mesure',
        },
        {
          id: 2,
          text: 'Programme en nutrition complet',
        },
        {
          id: 3,
          text: 'Accès au forum d’échange entre abonnés et coachs',
        },
        {
          id: 4,
          text: 'Suivi de vos progrès en temps réel',
        },
      ],
    },
    {
      id: 2,
      title: 'Abonnement 3 mois',
      description: '',
      suggested: false,
      price: 12000,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Accès à un programme sportif sur-mesure',
        },
        {
          id: 2,
          text: 'Programme en nutrition complet',
        },
        {
          id: 3,
          text: 'Accès au forum d’échange entre abonnés et coachs',
        },
        {
          id: 4,
          text: 'Suivi de vos progrès en temps réel',
        },
        {
          id: 5,
          text:
            'Accès aux challenges Code promo valable 3 mois et utilisable 5 fois avec 10% sur tous nos articles boutique',
        },
      ],
    },
  ],
  /*annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],*/
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/src/assets/image/appModern/6.jpg';
import member2 from 'common/src/assets/image/appModern/7.jpg';
import member3 from 'common/src/assets/image/appModern/3.png';
import member4 from 'common/src/assets/image/appModern/9.png';
import member5 from 'common/src/assets/image/appModern/5.png';
import member6 from 'common/src/assets/image/appModern/6.png';
import member7 from 'common/src/assets/image/appModern/7.png';

export const teamportfolio = {
  title: 'NOTRE EQUIPE',
  description:
    'Découvrez le profil des membres de notre équipe qui vous proposent les programmes. Professionnalisme et certification !',
  teammember: [
    {
      id: 1,
      img: member1,
      text: 'El hadji Malick DIOP / Coach perte de poids',
    },
    {
      id: 2,
      img: member2,
      text: 'Abdoulaye FALL / Coach abdos fessiers et squats',
    },

    {
      id: 3,
      img: member4,
      text: 'Débo NDOYE / Coach fitness challenge',
    },

    {
      id: 4,
      img: member6,
      text: 'Abdou Aziz DIA / Coach musculation et prise de masse',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'CA A MARCHE POUR EUX',
  title:
    'Ils ont atteint leurs objectifs et en sont fiers. Découvrez leur parcours !',
  reviews: [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:
        'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
      name: 'Jon Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/src/assets/image/appModern/chat.svg';
import group from 'common/src/assets/image/appModern/group.svg';
import github from 'common/src/assets/image/appModern/github.svg';
import footerLogo from 'common/src/assets/image/appModern/logoWhite.png';

export const footer = {
  widgets: [
    {
      /* 
      id: 1,
      icon: chat,
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    */
    },
    {
      id: 2,
      icon: chat,
      title: 'Notre boutique',
      description:
        "Avenue bourguiba en face station OLA de l'école Police, Baobab - Amitié 3 (+221) 77 109 47 20 / 76 155 76 25.",
    },

    {
      /* 
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
      */
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Accueil',
      link: '#',
    },
    {
      id: 2,
      text: 'Coachs',
      link: '#',
    },
    {
      id: 3,
      text: 'tarifs',
      link: '#',
    },
    {
      id: 4,
      text: 'Boutique',
      link: 'www.kayasenegal.com',
    },
    {
      id: 5,
      text: 'Conseils et bien-être',
      link: 'www.google.com',
    },
  ],
};
