import { Support } from "../../Support";

interface Props {
  id: string;
  title: string;
  url: string;
  description: string;
  promoteBook: string;
  image: {
    id: number;
    src: string;
  }[];
  benefit: {
    id: number;
    title: string;
    duration: string;
    status: boolean;
    description: string;
  }[];
}

export const AspaProgram = [
  {
    id: "49b5e863b0c083b4d4f54d704e8fdf63",
    promote: false,
    title: "basic+ program",
    url: "basic",
    description:
      "Our Basic Program is designed just for you! Tailored for surfers committed to improvement, this program offers a concentrated half-day of expert training and coaching.",
    promoteBook:
      "Join us for a half-day of transformative training, expert guidance, and thrilling wave action. Book your spot now!",
    image: [
      {
        id: 1,
        src: "/assets/program/class/basic/basic-5.webp",
      },
      {
        id: 2,
        src: "/assets/program/class/basic/basic-2.webp",
      },
      {
        id: 3,
        src: "/assets/program/class/basic/basic-1.webp",
      },
      {
        id: 4,
        src: "/assets/program/class/basic/basic-4.webp",
      },
      {
        id: 5,
        src: "/assets/program/class/basic/basic-3.webp",
      },
    ],
    benefit: [
      {
        id: 1,
        title: "One Surf Session",
        duration: "90 Minutes",
        status: true,
        description:
          "A surf session packed with personalized coaching and hands-on practice to sharpen your skills and boost your confidence on the waves.",
      },
      {
        id: 2,
        title: "Video Analysis Coaching",
        duration: "30 - 60 Minutes",
        status: true,
        description:
          "After the surf session, benefit from a video analysis. Our coach will review your performance and provide targeted feedback and actionable tips to keep improving.",
      },
      {
        id: 3,
        title: "Physical Training Session",
        duration: "60 Minutes",
        status: false,
        description:
          "Become a more complete surfer with our physical training sessions, focusing on strength, mobility, and endurance.",
      },
    ],
    session: [
      {
        id: "97c5365da68a",
        show: true,
        title: "private",
        pricing: "IDR 1.350.000",
        url: "https://pay.doku.com/p-link/p/OqUzI2B",
        icon: "",
      },
      {
        id: "585e9f86adb2",
        show: true,
        title: "group",
        pricing: "IDR 850.000",
        url: "https://pay.doku.com/p-link/p/bK4J0wL",
        icon: "",
      },
    ],
  },
  {
    id: "0124bb75a2045fdfd9c7211b12e9390c",
    promote: true,
    title: "elite program",
    url: "elite-program",
    description:
      "Our Elite Program is our most comprehensive, personalized, and performance-driven training program. It includes surfing, video analysis, and physical training, all led by our top elite coaches. With the Elite Program, you will experience a complete surfing performance journey.",
    promoteBook:
      "Our Elite Program is our most comprehensive, personalized, and performance-driven training program. Book now!",
    image: [
      {
        id: 1,
        src: "/assets/program/class/basic+/basic-plus-1.jpg",
      },
      {
        id: 2,
        src: "/assets/program/class/basic+/basic-plus-2.webp",
      },
      {
        id: 3,
        src: "/assets/program/class/basic+/basic-plus-3.webp",
      },
      {
        id: 4,
        src: "/assets/program/class/basic+/basic-plus-4.webp",
      },
      {
        id: 5,
        src: "/assets/program/class/basic+/basic-plus-5.webp",
      },
    ],
    benefit: [
      {
        id: 1,
        title: "One Surf Session with Elite Surf Coach",
        duration: "90 Minutes",
        status: true,
        description:
          "A surf session with an Elite Surf Coach, packed with personalized coaching and hands-on practice to sharpen your skills and performance.",
      },
      {
        id: 2,
        title: "Video Analysis Coaching with Elite Surf Coach",
        duration: "30 - 60 Minutes",
        status: true,
        description:
          "After the surf session, benefit from a video analysis. Our coach will review your performance and provide targeted feedback and actionable tips to keep improving.",
      },
      {
        id: 3,
        title: "Performance Data and Training session with Elite Athlete Coach",
        duration: "60 Minutes",
        status: true,
        description:
          "Our Elite Athlete Coach will make a Performance Data analysis in order to make a personalized training and become a more complete surfer with our physical training sessions.",
      },
    ],
    session: [
      {
        id: "4365b5f709d4",
        title: "private",
        pricing: "IDR 2.700.000",
        url: "https://pay.doku.com/p-link/p/lqDvvr2",
        icon: "",
      },
      {
        id: "24761790db19",
        title: "group",
        pricing: "IDR 1.400.000",
        url: "https://pay.doku.com/p-link/p/4fDHa2C",
        icon: "",
      },
    ],
  },
  {
    id: "32",
    promote: false,
    title: "Custom",
    url: Support[0].url,
    description:
      "Our custom surf programs are designed to meet your unique needs and aspirations. Whether you're looking for specific surf training techniques, flexible scheduling, or personalized coaching, we're here to help. Share your goals with us, and our team will work closely with you to create a surf program that's perfectly aligned with your vision. Experience a surf training program that's truly made for you.",
    promoteBook:
      "Need a program tailored to your needs? Contact our customer support for a customized offer!",
    image: [
      {
        id: 5,
        src: "/assets/program/class/basic/basic-2.webp",
      },
      {
        id: 1,
        src: "/assets/program/class/basic/basic-3.webp",
      },
      {
        id: 2,
        src: "/assets/program/class/basic/basic-5.webp",
      },

      {
        id: 3,
        src: "/assets/program/class/basic/basic-1.webp",
      },
      {
        id: 4,
        src: "/assets/program/class/basic/basic-4.webp",
      },
    ],
    benefit: [
      {
        id: 1,
        title: "One Surf Session",
        duration: "",
        status: true,
        description:
          "A surf session packed with personalized coaching and hands-on practice to sharpen your skills and boost your confidence on the waves.",
      },
      {
        id: 2,
        title: "Video Analysis Coaching",
        duration: "",
        status: true,
        description:
          "After each surf session, benefit from a detailed video analysis. Our expert coaches will review your performance, providing targeted feedback and actionable tips to refine your technique and accelerate your progress.",
      },
      {
        id: 3,
        title: "Physical Training Session",
        duration: "",
        status: true,
        description:
          "Become a more complete surfer with our physical training sessions, focusing on strength, mobility, and endurance.",
      },
    ],
    session: [
      {
        id: "97c5365da68a",
        show: true,
        title: "private",
        pricing: "",
        url: "",
        icon: "",
      },
      {
        id: "585e9f86adb2",
        show: true,
        title: "group",
        pricing: "",
        url: "",
        icon: "",
      },
    ],
  },
];
