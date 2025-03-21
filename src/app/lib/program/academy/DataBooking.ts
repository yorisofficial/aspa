// sumber dengan /lib/program/academy/NewAcademy.ts
export interface PropsDataBooking {
  id: string;
  idProgram: string;
  resource: string;
  title: string;
  description: string;
  price_list: {
    id: string;
    title: string;
    slug: string;
    pricing: number;
    paymentUrl: string;
  }[];
  additional: string;
}

export const DataBooking: PropsDataBooking[] = [
  {
    id: "a1",
    idProgram: "1",
    resource: "Surf",
    title: "High-Performance Surf Assessment 1:1",
    description:
      "Take your surfing to the next level with an High-Performance Surf Assessment 1:1, combining an in-water surf session, video analysis, and expert consultation. Get real-time feedback on your technique, board choice, endurance, and strength, with a clear action plan to elevate your performance.",
    price_list: [
      {
        id: "a1-1",
        title: "Basic Price",
        pricing: 1500000,
        slug: "high-performance-surf-assessment-a1-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
      {
        id: "a1-2",
        title:
          "Price of High-Performance Physical Assessment + Surf Assessment",
        pricing: 2500000,
        slug: "high-performance-surf-assessment-a1-2",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional:
      "Get a Rp 500.000 discount on the High-Performance Physical Assessment",
  },
  {
    id: "a2",
    idProgram: "1",
    resource: "Surf",
    title: "Custom Surf Coaching Session 1:1",
    description:
      "Experience elite-level coaching with a certified ASPA surf coach. This private session includes an expert-led surf session, video analysis, and technique refinement to sharpen your skills and elevate your performance.",
    price_list: [
      {
        id: "a2-1",
        title: "1 Session",
        pricing: 1200000,
        slug: "custom-surf-coaching-session-a2-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
      {
        id: "a2-2",
        title: "5 Session",
        pricing: 5000000,
        slug: "custom-surf-coaching-session-a2-2",
        paymentUrl: "https://asiansurfacademy.com",
      },
      {
        id: "a2-3",
        title: "10 Session",
        pricing: 8500000,
        slug: "custom-surf-coaching-session-a2-3",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional: "",
  },
  {
    id: "a3",
    idProgram: "1",
    resource: "Surf",
    title: "Elite Surf Coaching Pack 1:1",
    description:
      "We also offer an exclusive 10-session coaching package with an Elite Coach, available now for IDR 12,000,000. For instance, Surf Coach Dylan Amar, an elite coach for the Indonesian National Team. He brings world-class expertise and experience to elevate your performance ",
    price_list: [
      {
        id: "a3-1",
        title: "10 Sessions",
        pricing: 12000000,
        slug: "elite-surf-coaching-pack-a3-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional:
      "All ASPA surf coaches are highly knowledgeable and professionally trained to deliver top-level coaching",
  },
  {
    id: "a4",
    idProgram: "1",
    resource: "Surf",
    title: "Group Surf Coaching Session",
    description:
      "Train smarter with high-performance coaching for groups of 3 or more. Get expert instruction, video analysis, and technique refinement to accelerate progress together while pushing each other to the next level.",
    price_list: [
      {
        id: "a4-1",
        title: "1 Session starts from",
        pricing: 450000,
        slug: "group-surf-coaching-session-a4-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional: "Minimum 3 pax, Price per person",
  },
  {
    id: "b1",
    idProgram: "2",
    resource: "Training",
    title: "High-Performance Physical Assessment 1:1",
    description:
      "Unlock your peak performance with expert analysis. This high-performance session, led by a strength and conditioning specialist, provides a detailed assessment of your body, movement patterns, and athletic capabilities. Included:Comprehensive physical evaluation, Performance data collection & analysis, Customized recommendations to enhance strength, endurance, mobility, and injury prevention",
    price_list: [
      {
        id: "b1-1",
        title: "Price",
        pricing: 1500000,
        slug: "high-performance-physical-assessment-b1-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
      {
        id: "b1-2",
        title:
          "Price of High-Performance Physical Assessment + Surf Assessment",
        pricing: 2500000,
        slug: "high-performance-physical-assessment-b1-2",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional:
      "Get a Rp 500.000 discount on the High-Performance Surf Assessment",
  },
  {
    id: "b2",
    idProgram: "2",
    resource: "Training",
    title: "Custom Physical Training Session 1:1",
    description:
      "Unlock your full potential with high-performance training led by a strength and conditioning coach. Designed for athletes, this session focuses on building strength, endurance, mobility, and injury prevention to create a bulletproof body ready for peak performance.",
    price_list: [
      {
        id: "b2-1",
        title: "1 Session",
        pricing: 1200000,
        slug: "custom-physical-training-session-b2-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
      {
        id: "b2-2",
        title: "10 Session",
        pricing: 10500000,
        slug: "custom-physical-training-session-b2-2",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional: "",
  },
  {
    id: "b3",
    idProgram: "2",
    resource: "Training",
    title: "Elite Physical Training Pack 1:1",
    description:
      "We also offer an exclusive 10-session coaching package with an Elite Coach, available now for IDR 12,000,000. For example, Gabriela Mackanicova, who has extensive experience working with professional athletes in the WSL and National Teams, brings world-class expertise to help elevate your performance to the next level",
    price_list: [
      {
        id: "b3-1",
        title: "10 Sessions",
        pricing: 12000000,
        slug: "elite-physical-training-pack-b3-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional:
      "All ASPA surf coaches are highly knowledgeable and professionally trained to deliver top-level coaching",
  },
  {
    id: "b4",
    idProgram: "2",
    resource: "Training",
    title: "Group Physical Training Session",
    description:
      "Train with a strength and conditioning specialist in a high-performance group session designed to build strength, endurance, mobility, and injury resilience. Perfect for surfers and athletes looking to push their limits together.",
    price_list: [
      {
        id: "b4-1",
        title: "1 Session starts from",
        pricing: 350000,
        slug: "group-physical-training-session-b4-1",
        paymentUrl: "https://asiansurfacademy.com",
      },
    ],
    additional: "Minimum 3 pax & Price per person",
  },
  {
    id: "c1",
    idProgram: "32",
    resource: "Custom",
    title: "Custom",
    description:
      "Unlock the full potential of high-performance surf and athletic training with ASPA Custom Collaborations. We offer tailored programs designed for schools, brands, businesses, and international organizations, ensuring world-class coaching and training experiences that meet your specific needs.",
    price_list: [],
    additional: "",
  },
];
