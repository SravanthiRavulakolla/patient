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
        description: "Abhyanga is a deeply relaxing, synchronized full-body massage using warm medicated herbal oils tailored to your body constitution (Dosha). It improves blood circulation, nourishes skin and muscles, relieves joint stiffness, and helps release toxins stored in tissues. Regular sessions promote sound sleep, reduce stress, and enhance overall vitality.",
        duration: 60,
        cost: 1500,
      },
      {
        id: 102,
        name: "Shirodhara",
        description: "Shirodhara involves the continuous pouring of warm, medicated oil (or buttermilk) on the forehead in a rhythmic manner. It is highly effective for calming the nervous system, treating insomnia, anxiety, migraines, and stress-related disorders. Patients often describe the experience as meditative, leaving them with profound relaxation and mental clarity.",
        duration: 45,
        cost: 2000,
      },
      {
        id: 103,
        name: "Meditation",
        description: "Meditation is a guided mental practice designed to bring balance to the mind and body. Through focused breathing, mindfulness, and relaxation techniques, patients experience reduced stress, improved emotional stability, and enhanced concentration. Regular meditation sessions are known to lower blood pressure, improve sleep quality, and support mental well-being. It is often recommended as a complementary therapy to Panchakarma treatments, amplifying the benefits of detoxification and rejuvenation.",
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
        description: "Virechana is a Panchakarma cleansing therapy aimed at detoxifying the liver and intestines through controlled purgation. Natural herbal formulations are administered to expel accumulated Pitta toxins. It is recommended for chronic skin diseases, digestive issues, liver disorders, and metabolic imbalances. The therapy is supervised by physicians to ensure safety and effectiveness.",
        duration: 90,
        cost: 2500,
      },
      {
        id: 202,
        name: "Abhyanga",
        description: "Abhyanga is a deeply relaxing, synchronized full-body massage using warm medicated herbal oils tailored to your body constitution (Dosha). It improves blood circulation, nourishes skin and muscles, relieves joint stiffness, and helps release toxins stored in tissues. Regular sessions promote sound sleep, reduce stress, and enhance overall vitality.",
        duration: 60,
        cost: 1600,
      },
      {
        id: 203,
        name: "Shirodhara",
        description: "Shirodhara involves the continuous pouring of warm, medicated oil (or buttermilk) on the forehead in a rhythmic manner. It is highly effective for calming the nervous system, treating insomnia, anxiety, migraines, and stress-related disorders. Patients often describe the experience as meditative, leaving them with profound relaxation and mental clarity.",
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
        description: "Meditation is a guided mental practice designed to bring balance to the mind and body. Through focused breathing, mindfulness, and relaxation techniques, patients experience reduced stress, improved emotional stability, and enhanced concentration. Regular meditation sessions are known to lower blood pressure, improve sleep quality, and support mental well-being. It is often recommended as a complementary therapy to Panchakarma treatments, amplifying the benefits of detoxification and rejuvenation.",
        duration: 40,
        cost: 900,
      },
      {
        id: 302,
        name: "Virechana",
        description: "Virechana is a Panchakarma cleansing therapy aimed at detoxifying the liver and intestines through controlled purgation. Natural herbal formulations are administered to expel accumulated Pitta toxins. It is recommended for chronic skin diseases, digestive issues, liver disorders, and metabolic imbalances. The therapy is supervised by physicians to ensure safety and effectiveness.",
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
