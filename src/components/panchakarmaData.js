// Dummy data for Panchakarma centers, therapies, and slots
export const centers = [
  {
    id: 1,
    name: "Ayush Panchakarma Center",
    location: "Delhi",
    therapies: [
      {
        id: 101,
        name: "Abhyanga",
        description: "A full body oil massage for relaxation and detoxification.",
        duration: 60,
        cost: 1500,
      },
      {
        id: 102,
        name: "Shirodhara",
        description: "Pouring of warm oil on the forehead for stress relief.",
        duration: 45,
        cost: 2000,
      },
      {
        id: 103,
        name: "Meditation",
        description: "Guided meditation session for mental wellness.",
        duration: 30,
        cost: 800,
      },
    ],
  },
  {
    id: 2,
    name: "Kerala Ayurveda Retreat",
    location: "Kochi",
    therapies: [
      {
        id: 201,
        name: "Virechana",
        description: "Detoxification therapy for cleansing the digestive tract.",
        duration: 90,
        cost: 2500,
      },
      {
        id: 202,
        name: "Abhyanga",
        description: "A full body oil massage for relaxation and detoxification.",
        duration: 60,
        cost: 1600,
      },
      {
        id: 203,
        name: "Shirodhara",
        description: "Pouring of warm oil on the forehead for stress relief.",
        duration: 45,
        cost: 2100,
      },
    ],
  },
  {
    id: 3,
    name: "Himalayan Wellness Spa",
    location: "Dehradun",
    therapies: [
      {
        id: 301,
        name: "Meditation",
        description: "Guided meditation session for mental wellness.",
        duration: 40,
        cost: 900,
      },
      {
        id: 302,
        name: "Virechana",
        description: "Detoxification therapy for cleansing the digestive tract.",
        duration: 90,
        cost: 2600,
      },
    ],
  },
];

export const therapyTypes = [
  "Abhyanga",
  "Shirodhara",
  "Virechana",
  "Meditation",
];

export const slots = [
  "9:00 AM",
  "11:00 AM",
  "3:00 PM",
  "5:00 PM",
];
