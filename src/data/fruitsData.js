import mango from "../assets/alphonso.jpg";
import pomegranate from "../assets/pomegranate.jpg";
import grapes from "../assets/grapes.jpg";
import dragonfruit from "../assets/dragonfruit.jpg";
import strawberry from "../assets/strawberry.jpg";
import litchi from "../assets/litchi.jpg";
import orange from "../assets/orange.jpg";
import apple from "../assets/apple.jpg";

const fruits = [
  {
    id: "mango",
    name: "Alphonso Mango",
    image: mango,
    description: "Premium Indian mango with rich aroma and sweetness.",
    origin: "India",
    season: "March – June",
    packaging: "3kg / 5kg cartons",
    shelfLife: "10–14 days",
    uses: ["Fresh", "Juices", "Desserts"],
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    image: pomegranate,
    description: "Juicy arils packed with antioxidants.",
    origin: "India",
    season: "September – February",
    packaging: "3kg cartons",
    shelfLife: "20–25 days",
    uses: ["Fresh", "Juice", "Salads"],
  },
  {
    id: "grapes",
    name: "Grapes",
    image: grapes,
    description: "Seedless grapes for fresh consumption and export.",
    origin: "India",
    season: "January – April",
    packaging: "2kg / 4kg boxes",
    shelfLife: "15–20 days",
    uses: ["Fresh", "Juices"],
  },
  {
    id: "dragonfruit",
    name: "Dragonfruit",
    image: dragonfruit,
    description: "Exotic fruit with vibrant skin and refreshing pulp.",
    origin: "India",
    season: "June – October",
    packaging: "2kg boxes",
    shelfLife: "10–12 days",
    uses: ["Fresh", "Smoothies"],
  },
  {
    id: "strawberry",
    name: "Strawberry",
    image: strawberry,
    description: "Bright red berries with rich sweetness.",
    origin: "India",
    season: "December – March",
    packaging: "250g / 500g packs",
    shelfLife: "5–7 days",
    uses: ["Fresh", "Desserts", "Jam"],
  },
  {
    id: "litchi",
    name: "Litchi",
    image: litchi,
    description: "Juicy tropical fruit with floral sweetness.",
    origin: "India",
    season: "May – June",
    packaging: "2kg cartons",
    shelfLife: "7–10 days",
    uses: ["Fresh", "Desserts"],
  },
  {
    id: "orange",
    name: "Orange",
    image: orange,
    description: "Vitamin C rich citrus fruit.",
    origin: "India",
    season: "November – March",
    packaging: "5kg / 10kg cartons",
    shelfLife: "20–30 days",
    uses: ["Fresh", "Juices"],
  },
  {
    id: "apple",
    name: "Apple",
    image: apple,
    description: "Crisp apples with balanced sweetness.",
    origin: "India",
    season: "August – December",
    packaging: "5kg / 10kg cartons",
    shelfLife: "30–45 days",
    uses: ["Fresh", "Desserts"],
  },
];

export default fruits;