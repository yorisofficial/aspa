export interface TeamProps {
  id: string;
  confirm: boolean;
  full_name: string;
  nickname: string;
  certificated: string;
  isa: boolean;
  job_title: string;
  category: string;
  level: string;
  location: string;
  profile: string;
  quotes: string;
  age: number;
  user_instagram: string;
  user_soorfinc: string;
  experience: string;
  achievement: PropsAchievement[];
  preview_img?: { title: string; src: string }[];
}

type PropsAchievement = {
  title: string;
};

export const AllTeams: TeamProps[] = [
  {
    id: "aspa-1",
    confirm: true,
    full_name: "Tipi Jabrik",
    nickname: "Tipi",
    certificated: "ISA",
    isa: true,
    job_title: "ASPA Director",
    category: "core",
    level: "ISA Lv1",
    location: "Bali",
    profile: "/assets/team/tipi-jabrik.webp",
    quotes:
      "Surfing development has been a significant part of my professional life. I was a professional surfer throughout my life, traveling around the globe and competing since a young age. In 2001, I contributed to the development of surfing by creating the Indonesian Surfing Championship. This initiative evolved into the Asian Surfing Championship in 2008, with our company accelerating the development of surfing in Indonesia and beyond through the ASC since 2004. Additionally, I have been involved in youth movement by creating the Grom Patrol surf series since 2019. I also played a role in helping Indonesia secure gold medals in the Sea Games in Manila and assisted the first Indonesian surfer to qualify for the Tokyo Olympics.With all this experience, ASPA will be the channel to help every potential athlete achieve their goals by providing guidance and strategy.",
    age: 1977,
    user_instagram: "https://www.instagram.com/tipijabrik",
    user_soorfinc: "Tipi Jabrik",
    experience: "+15 years coach",
    preview_img: [],
    achievement: [
      {
        title:
          "2024 Junior National Coach, ISA World Championship Junior El Salvador",
      },
      {
        title: "2021 National Coach, Olympic Tokyo",
      },
      {
        title:
          "2021 National Coach, Olympic Qualification ISA World Championship ElSalvador",
      },
      {
        title: "2017 National Coach, Sea Games Manila",
      },
      {
        title:
          "2010 Junior National Coach, ISA World Junior Championship New Zealand",
      },
      {
        title: "2018 Quiksilver Uluwatu Challenge Champion",
      },
      {
        title: "2010 Quiksilver Phuket Champion",
      },
      {
        title: "2001 CHP Challenge Japan Champion",
      },
    ],
  },
  {
    id: "aspa-2",
    confirm: true,
    full_name: "Juan Gorostidi",
    nickname: "Juan",
    certificated: "ISA",
    isa: true,
    age: 1999,
    level: "",
    profile: "/assets/team/juan.webp",
    location: "Bali",
    quotes:
      "Surfing has always been a significant part of my life. I started surfing as a child when my father taught me how to ride the waves. Since then, I have been traveling and surfing all over the world. In 2015, I began competing and training in the Basque Country, Spain, and across Europe. After several years of competition, I decided to focus on my studies and pursue a professional career while working as a surf instructor. Upon completing my studies, I decided to travel to Indonesia and Australia to surf, work, and gain experience. I am now part of the Asian Surf Cooperative and serve as the Manager of ASPA, a surf performance academy that provides support and guidance to international athletes in the surfing world, helping them improve and achieve their goals.",
    job_title: "ASPA Manager",
    category: "core",
    user_instagram: "https://www.instagram.com/juan_gorostidi",
    user_soorfinc: "Juan",
    experience: "+5 years coach",
    preview_img: [],
    achievement: [
      {
        title: "2022 Master's Degree in Digital Marketing",
      },
      {
        title:
          "2021 Deusto University Bachelor Degree in Business Administration & Management + Digital Business Skills",
      },
      {
        title: "2018 Surf Instructor",
      },
      {
        title: "2017 Junior Professional Surfer",
      },
      {
        title: "Ranked 29th in Europe & 2nd in Spain",
      },
    ],
  },
  {
    id: "aspa-3",
    confirm: true,
    full_name: "Dylan Amar",
    nickname: "Dylan",
    certificated: "ISA",
    isa: true,
    job_title: "ASPA Head coach",
    category: "core",
    level: "",
    profile: "/assets/team/dyalan.jpg",
    location: "Bali",
    quotes: "",
    age: 1998,
    user_instagram: "https://www.instagram.com/dylan_amartha",
    user_soorfinc: "",
    experience: "+5 years coach",
    preview_img: [],
    achievement: [
      {
        title: "2024 National Coach, Olympic Paris  ",
      },
      {
        title: "2024 National Coach, Olympic Qualification ISA Puerto Rico",
      },
      {
        title:
          "2023 National Coach, Olympic Qualification ISA Huntington Beach",
      },
      {
        title: "2021 National Coach, Olympic Qualification ISA El Salvador",
      },
      {
        title: "2019 National Coach, Sea Games Manila",
      },
      {
        title: "2018 National Coach, Olympic Qualification Miyazaki, Japan",
      },
      {
        title: "2017 National Coach, Olympic Qualification Tahara, Japan",
      },
      {
        title: "Rip Curl Team Manager (2012-2018)",
      },
      {
        title: "Reef Team Rider (2008-2010)",
      },
      {
        title: "Quiksilver Team Rider (2000-2008)",
      },
      {
        title: "Champion Rip Curl GS Keramas 2004",
      },
    ],
  },
  {
    id: "aspa-4",
    confirm: true,
    full_name: "Arya Subyakto",
    nickname: "Om Arya",
    certificated: "ISA",
    isa: true,
    job_title: "ASPA Technical Head Coach",
    category: "core",
    level: "",
    profile: "/assets/team/om-arya.png",
    location: "Bali",
    quotes: "",
    age: 1965,
    user_instagram: "https://www.instagram.com/aryasubyakto/",
    user_soorfinc: "",
    experience: "+20 years coach",
    preview_img: [],
    achievement: [],
  },
  {
    id: "aspa-5",
    confirm: true,
    full_name: "Dedi Santosa",
    nickname: "Dedi",
    quotes:
      "Surfing is a journey, not a destination, take every wave as an opportunity to learn and grow.",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 1984,
    level: "Free Surfer",
    experience: "5 years + judge",
    location: "Kuta / Canggu",
    profile: "/assets/team/aspa-coach-11.webp",
    user_instagram: "https://www.instagram.com/dedisantosa_",
    user_soorfinc: "",
    preview_img: [],
    achievement: [
      {
        title: "Pro Surfer",
      },
    ],
  },
  {
    id: "aspa-6",
    confirm: true,
    full_name: "Mickey Sudena",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 1983,
    level: "Free Surfer",
    experience: "20 Years",
    location: "Halfway",
    profile: "/assets/team/aspa-coach-12.webp",
    user_instagram: "https://www.instagram.com/sudenasurfcoach",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Mickey Sudena/item-image-1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Mickey Sudena/item-image-2.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Mickey Sudena/item-image-3.webp",
      },
    ],
    achievement: [
      {
        title: "3rd at Gamang Surfing 1998",
      },
      {
        title: "1st at Junior Surfing Culture Exchange Championships 2000",
      },
      {
        title: "2nd in master division national rank 2021-2022",
      },
      {
        title: "2nd in master division national rank 2022-2023",
      },
      {
        title: "2nd at Halfway Master Challenge 2023",
      },
      {
        title: "4th at Uluwatu Master Challenge 2023",
      },
      {
        title: "2nd in Master division national rank 2023-2024",
      },
      {
        title: "National Surfing Qualification Jakarta Team 2023",
      },
      {
        title: "Shortboard Man 2nd  (Athlete Varun Tanjung)",
      },
      {
        title: "Shortboard women 2nd  (Athlete Jasmine Studer)",
      },
      {
        title: "Longboard man 2nd (Athlete Dimas Shabil)",
      },
      {
        title: "Longboard women 2nd (Athlete Flora Christin)",
      },
      {
        title:
          "2023 WSL Manokwari pro junior Man Qs1000 1st  Champion (Athlete Westen Hirst)",
      },
      {
        title: "Junior women 3rd (Athlete Jasmine Studer)",
      },
      {
        title:
          "2024 WSL Krui pro Pro junior Man Qs1000 3rd  (Athlete Westen Hirst)",
      },
    ],
  },
  {
    id: "aspa-7",
    confirm: true,
    full_name: "Made Joi",
    nickname: "Joi",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 0,
    level: "",
    experience: "",
    location: "Bali",
    profile: "/assets/team/aspa-coach-17.webp",
    user_instagram: "https://www.instagram.com/madejoi_",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Made Joi/item-image-1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Made Joi/item-image-2.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Made Joi/item-image-3.webp",
      },
    ],
    achievement: [
      {
        title: "",
      },
    ],
  },
  {
    id: "aspa-8",
    confirm: true,
    full_name: "Kadek Murtika",
    nickname: "Celupuk",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 1998,
    level: "Free Surfer",
    experience: "",
    location: "Pererenan",
    profile: "/assets/team/aspa-coach-16.webp",
    user_instagram: "https://www.instagram.com/clepuk_balibagus",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Kadek Murtika/celepok_balibagus.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Kadek Murtika/celepok_balibagus_1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Kadek Murtika/celepok_balibagus_2.webp",
      },
    ],
    achievement: [
      {
        title: "",
      },
    ],
  },
  {
    id: "aspa-9",
    confirm: true,
    full_name: "Danyel Amar",
    nickname: "Danyel",
    quotes:
      "Living 2 minutes away by Legian Beach made surfings part of my whole life, since the very young age I have learned surfing and compete. At the age of 23 I began to focusing on my career as a surf instructor and surf coaching.",
    job_title: "surf coach",
    category: "coach",
    certificated: "",
    isa: false,
    age: 0,
    level: "Free Surfer",
    experience: "",
    location: "Legian",
    profile: "/assets/team/coach/Danyel Amar/danyel-amar_3.webp",
    user_instagram: "https://www.instagram.com/danyel_amar",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Danyel Amar/danyel-amar_1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Danyel Amar/danyel-amar_2.webp",
      },
    ],
    achievement: [
      {
        title: "2nd Ripcurl Grom Search Keramas 2008",
      },
      {
        title: "Riders Carve Aus 2011-2019",
      },
      {
        title: "2nd Volcom Qualifying series Legian 2013",
      },
      {
        title: "3rd Red Island 2015",
      },
      {
        title: "2nd Mandiri Cup BWI 2016",
      },
      {
        title: "Head Coach (Aloha Bali Surf 2015-now)",
      },
    ],
  },
  {
    id: "aspa-10",
    confirm: true,
    full_name: "Muz Jeksen",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "ISA",
    isa: true,
    age: 1998,
    level: "ISA Level 1",
    experience: "",
    location: "Halfway",
    profile: "/assets/team/aspa-coach-2.webp",
    user_instagram: "https://www.instagram.com/musjeksen",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Muz Jeksen/item-image-1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Muz Jeksen/item-image-2.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Muz Jeksen/item-image-3.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Muz Jeksen/item-image-4.webp",
      },
    ],
    achievement: [
      {
        title:
          "2000 Volvom Contest Halfway Kuta Beach 2nd place under 14 (ranking 1st under 14's after exercise part IV)",
      },
      {
        title: "2008 Winner Indonesia Surfing Championship Junior (ISC)",
      },
      {
        title: "2007 Surftime Award Nominasi Surfer Terberani (most brave)",
      },
      {
        title: "2008 Surftime Award Nominasi Surfer Terberani (most brave)",
      },
      {
        title: "2009 Winner Oakley Pro Canggu",
      },
      {
        title: "2009 Oakley world pro junior keramas bali 9th",
      },
      {
        title: "2011 Ripcurl Cup Padang-Padang 3rd",
      },
      {
        title: "2012 Winner Oakley Pro Canggu",
      },
      {
        title: "2012 2nd Quiksilver Pro Cimaja West Java",
      },
      {
        title: "2014 3rd Ripcurl cup padang-padang 3rd",
      },
      {
        title: "2016 Quiksilver Pro Canggu Charity 3rd",
      },
      {
        title: "2018 Uluwatu Boardrider Challenge 2nd open division",
      },
      {
        title:
          "Coaching the Japan team from 2007 to 2012. Has successfully coached from amateurs to professionals.",
      },
      {
        title: "Coaching the Hainan province surfing team in 2018 (China).",
      },
      {
        title:
          "Coaching the Shandong province surfing team from 2019 to 2020 (China).",
      },
      {
        title: "Coaching the Indonesia national team from 2020 to 2021.",
      },
      {
        title:
          "Coaching the Shandong province surfing team from 2021 to 2024 (China).",
      },
    ],
  },
  {
    id: "aspa-11",
    confirm: false,
    full_name: "Muklis Anwar",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "ISA",
    isa: true,
    age: 1998,
    level: "ISA Level 1",
    experience: "",
    location: "Medewi",
    profile: "/assets/team/aspa-coach-1.webp",
    user_instagram: "https://www.instagram.com/muklis_.anwar",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/300x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/520x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/550x500",
      },
    ],
    achievement: [
      {
        title: "ISA Surf Judge",
      },
    ],
  },
  {
    id: "aspa-12",
    confirm: true,
    full_name: "Oney Anwar",
    nickname: "Oney",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "no ISA",
    isa: false,
    age: 1993,
    level: "Pro Surfer",
    experience: "20 Years",
    location: "Bali",
    profile: "/assets/team/aspa-coach-5.webp",
    user_instagram: "https://www.instagram.com/oneyanwar",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Oney Anwar/item-image-1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Oney Anwar/item-image-2.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Oney Anwar/item-image-3.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Oney Anwar/item-image-4.webp",
      },
    ],
    achievement: [
      {
        title: "1st Place Gold Coast Pro Burleigh Head",
      },
      {
        title: "Gold Medal 2019 SEA GAMES",
      },
      {
        title: "Indonesia National Surfing team",
      },
      {
        title: "Qualified for 2019 - 2022 Olympics Qualifications",
      },
    ],
  },
  {
    id: "aspa-13",
    confirm: true,
    full_name: "Putra Pulu",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "no ISA",
    isa: false,
    age: 1992,
    level: "Pro Surfer",
    experience: "1.5 years",
    location: "Lembongan",
    profile: "/assets/team/aspa-coach-7.webp",
    user_instagram: "https://www.instagram.com/putrapulu",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Putra Pulu/item-image-1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Putra Pulu/item-image-2.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Putra Pulu/item-image-3.webp",
      },
    ],
    achievement: [
      {
        title:
          "Pro Surfer: Indonesia champion 2010 & Indonesia pro junior champion 2010",
      },
    ],
  },
  {
    id: "aspa-14",
    confirm: true,
    full_name: "Gogo Sujaya",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "no ISA",
    isa: false,
    age: 1998,
    level: "Pro Surfer",
    experience: "1.5 years",
    location: "Kuta Reef",
    profile: "/assets/team/aspa-coach-9.webp",
    user_instagram: "https://www.instagram.com/gogosujaya",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Gogo Sujaya/item-image-1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Gogo Sujaya/item-image-2.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Gogo Sujaya/item-image-3.webp",
      },
    ],
    achievement: [
      {
        title: "Wildcard Uluwatu CT + judge",
      },
    ],
  },
  {
    id: "aspa-15",
    confirm: true,
    full_name: "Mega Artana",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 1983,
    level: "Free Surfer",
    experience: "",
    location: "Kuta",
    profile: "/assets/team/aspa-coach-14.webp",
    user_instagram: "https://www.instagram.com/mega_artana",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Mega Artana/item-image-1.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Mega Artana/item-image-2.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Mega Artana/item-image-3.webp",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Mega Artana/item-image-4.webp",
      },
    ],
    achievement: [
      {
        title: "Pro Surfer: 3rd Krui Pro QS 1000 & 3rd Rip Curl Padand Padang",
      },
    ],
  },
  {
    id: "aspa-16",
    confirm: false,
    full_name: "I Made Agus Setyawan",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "ISA",
    isa: true,
    age: 1998,
    level: "ISA Level 1",
    experience: "",
    location: "Uluwatu",
    profile: "/assets/team/aspa-coach-3.webp",
    user_instagram: "https://www.instagram.com/gus_bentir",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
    ],
    achievement: [
      {
        title:
          "Pro Surfer: Open Men's Champion ASC (Winner Mens Open Rip Curl Surf and Music Festival (2009)",
      },
      {
        title: "Coca-cola Indonesian Surf Championship Winner (2012)",
      },
      {
        title: "Monsoon Mayhem International Surf Challenge winner (2012)",
      },
    ],
  },
  {
    id: "aspa-17",
    confirm: false,
    full_name: "Raditya Rondi",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "no ISA",
    isa: false,
    age: 1998,
    level: "Pro Surfer",
    experience: "24 years",
    location: "Kuta",
    profile: "/assets/team/aspa-coach-4.webp",
    user_instagram: "https://www.instagram.com/radityarondi",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
    ],
    achievement: [
      {
        title:
          "Pro Surfer: Open Men's Champion ASC (Winner Mens Open Rip Curl Surf and Music Festival (2009)",
      },
      {
        title: "Coca-cola Indonesian Surf Championship Winner (2012)",
      },
      {
        title: "Monsoon Mayhem International Surf Challenge winner (2012)",
      },
    ],
  },
  {
    id: "aspa-18",
    confirm: false,
    full_name: "Dharma Putra Tonjo",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "no ISA",
    isa: false,
    age: 1998,
    level: "Pro Surfer",
    experience: "",
    location: "Legian",
    profile: "/assets/team/aspa-coach-6.webp",
    user_instagram: "https://www.instagram.com/darmaputratonjo",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
    ],
    achievement: [
      {
        title: "Pro Surfer",
      },
    ],
  },
  {
    id: "aspa-19",
    confirm: false,
    full_name: "Dede Suryana",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "no ISA",
    isa: false,
    age: 1998,
    level: "Pro Surfer",
    experience: "",
    location: "Cimaja",
    profile: "/assets/team/aspa-coach-8.webp",
    user_instagram: "https://www.instagram.com/mankdede",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
    ],
    achievement: [
      {
        title:
          "Pro Surfer: 2008 ISC Winner, 2008 Asian Beach Games: Gold-Air, Gold-Team, Youth Achievement award",
      },
    ],
  },
  {
    id: "aspa-20",
    confirm: false,
    full_name: "Dharma Yasa",
    nickname: "Blerong",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "no ISA",
    isa: false,
    age: 1998,
    level: "Pro Surfer",
    experience: "",
    location: "Legian",
    profile: "/assets/team/aspa-coach-10.webp",
    user_instagram: "https://www.instagram.com/darmayasablerok",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
    ],
    achievement: [
      {
        title: "Pro Surfer",
      },
    ],
  },
  {
    id: "aspa-21",
    confirm: false,
    full_name: "Danyel Amar",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 1998,
    level: "Free Surfer",
    experience: "",
    location: "Legian",
    profile: "/assets/team/aspa-coach-13.webp",
    user_instagram: "https://www.instagram.com/danyel_amar",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
    ],
    achievement: [
      {
        title: "",
      },
    ],
  },
  {
    id: "aspa-22",
    confirm: false,
    full_name: "Garut Widiarta",
    nickname: "",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 1998,
    level: "Free Surfer",
    experience: "",
    location: "Legian",
    profile: "/assets/team/aspa-coach-15.webp",
    user_instagram: "https://www.instagram.com/garut_widiarta",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
      {
        title: "coach-preview",
        src: "https://via.placeholder.com/500x500",
      },
    ],
    achievement: [
      {
        title: "Pro Surfer",
      },
    ],
  },
  {
    id: "aspa-23",
    confirm: true,
    full_name: "Nyoman Satria",
    nickname: "Blacky",
    quotes: "",
    job_title: "surf coach",
    category: "coach",
    certificated: "No ISA",
    isa: false,
    age: 0,
    level: "",
    experience: "",
    location: "Legian",
    profile: "/assets/team/aspa-coach-18.jpg",
    user_instagram: "https://www.instagram.com/black.dogggggggggggggg",
    user_soorfinc: "",
    preview_img: [
      {
        title: "coach-preview",
        src: "/assets/team/coach/Nyoman Satria/Nyoman-Satria_2.jpg",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Nyoman Satria/Nyoman-Satria_3.jpg",
      },
      {
        title: "coach-preview",
        src: "/assets/team/coach/Nyoman Satria/Nyoman-Satria_4.jpg",
      },
    ],
    achievement: [
      {
        title: "1st Bingin Open 2018",
      },
      {
        title:
          "2nd Airsea land southern international sport tourism festival Thailand",
      },
      {
        title: "3rd Nusa Penida by LST",
      },
      {
        title: "Surftime award hottest style 2016",
      },
      {
        title: "2nd & 3rd Rusty Gromfast 2011's",
      },
      {
        title: "4th Uluwatu challenge 2017",
      },
      {
        title: "Wild card Oakley world pro junior 2012",
      },
    ],
  },
  {
    id: "aspa-24",
    confirm: true,
    full_name: "Gabriela Mackanicova",
    nickname: "",
    certificated: "",
    isa: false,
    location: "",
    job_title: "Strength & Conditioning Specialist",
    category: "expert",
    level: "",
    age: 1988,
    profile: "/assets/team/aspa-expert-1.webp",
    quotes: "",
    user_instagram: "https://www.instagram.com/gabrielamackanic",
    user_soorfinc: "",
    experience: "5 years",
    achievement: [
      {
        title:
          "Gabriela collaborates and trains professional athletes like Sky Brown, Kelly Slater, Italo Ferreira, and others worldwide",
      },
      {
        title:
          "Currently doing studies under the National Strength and Conditioning Association(USA). And she has these Specializations: Strength & Conditioning Specialist (CSCS); NSCA CSP qualification in the process: Programming and Analysis: Sports Nutrition Specialist: Marketing and Project Senior Specialist (BA).",
      },
      {
        title: "Gabriela is the Founder of the Ultimate Riders Academy",
      },
    ],
  },
  {
    id: "aspa-25",
    confirm: true,
    full_name: "Juni Setiawan",
    nickname: "Juni",
    certificated: "",
    isa: false,
    job_title: "surf videographer",
    category: "videographer",
    level: "Profesional",
    location: "All arround",
    quotes: "",
    age: 1996,
    profile: "/assets/team/Videographer/aspa-videographer-4.webp",
    user_instagram: "https://www.instagram.com/futuremondroow",
    user_soorfinc: "",
    experience: "8 years",
    achievement: [
      {
        title:
          "Filmed for Pro Surfers like Jorgann Couzinet, Jordy Maree, Micah Margieson, Jacob Szelekey, Tosh Tudor, and many more. ",
      },
      {
        title:
          "Filmed for Channel Island Surfboards Bali, Native Surfboards, and Surfing events like Rip Curl Gorm Search, Vissla Air Show, Vans Bali Pro with ASC and QS, Halfway surf contest, Legian surf contest, and Pererenan Surf Coaches.",
      },
    ],
  },
  {
    id: "aspa-26",
    confirm: true,
    full_name: "Adhi Wisnu Sanjaya",
    nickname: "Adhi",
    certificated: "",
    isa: false,
    job_title: "surf videographer",
    category: "videographer",
    level: "Profesional",
    location: "All arround",
    quotes: "",
    age: 2001,
    profile: "/assets/team/Videographer/aspa-videographer-5.webp",
    user_instagram: "https://www.instagram.com/aws_surf",
    user_soorfinc: "",
    experience: "3 years",
    achievement: [
      {
        title: "Filmed for professional surfers and for coaching purposes.",
      },
      {
        title:
          "Filmed for sponsors and events such as Palmbay Bali, Legian Board Riders, ASC events, and more, including film editing.",
      },
    ],
  },
];
