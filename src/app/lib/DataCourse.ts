export interface DataCourseType {
  id: string;
  sectionId: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export const DataCourse: DataCourseType[] = [
  {
    id: "1",
    sectionId: "isa-surf-coach-1",
    name: "ISA Surf Level 1 Instructor Certification",
    description:
      "The Level 1 course is the foundation for those teaching beginner and early intermediate surfers. This internationally recognized program equips instructors with essential skills, safety knowledge, and teaching techniques to deliver high-quality, engaging surf lessons.",
    image: "/assets/program/isa-teams/isa-lv-1.png",
    link: "https://isasurf.org/learning/isa-courses/#coaching",
  },
  {
    id: "2",
    sectionId: "isa-surf-coach-2",
    name: "ISA Surf Level 2 Instructor Certification",
    description:
      " For experienced instructors, the Level 2 course focuses on training intermediate to advanced surfers. It prepares coaches to enhance athletes skills, optimize performance, and prepare them for competitions.",
    image: "/assets/program/isa-teams/isa-lv-2.png",
    link: "https://isasurf.org/learning/isa-courses/#coaching",
  },
  {
    id: "3",
    sectionId: "isa-surf-judging",
    name: "ISA Judging Certification",
    description:
      "For those interested in surf competition offi ciating, the ISAJudging Course provides comprehensive training on scoringcriteria, heat analysis, and judging protocols. Delivered byexperienced ISA presenters, the course includes practice sessionsfor comparing waves and assigning scores.",
    image: "/assets/program/isa-teams/ISA-judging.png",
    link: "https://isasurf.org/learning/isa-courses/#judging",
  },
  {
    id: "4",
    sectionId: "isa-surf-water-safety",
    name: "ISA/ILS Water Safety Certification",
    description:
      "A vital component of surf coaching, this course ensures instructors are equipped with globally recognized water safety skills.",
    image: "/assets/program/isa-teams/isa-water-safety.png",
    link: "https://isasurf.org/learning/isa-courses/#water-safety",
  },
];
