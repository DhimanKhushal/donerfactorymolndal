export type GalleryImage = {
  alt: string;
  category: string;
  filename: string;
  height: number;
  orientation?: "landscape" | "portrait";
  title: string;
  width: number;
};

export type GalleryVideo = {
  description: string;
  duration: string;
  filename: string;
  height: number;
  title: string;
  width: number;
};

const assetPath = (filename: string) => `/assets/gallery/${filename}`;

export const galleryImages: GalleryImage[] = [
  {
    title: "Dining hall",
    category: "Interior",
    alt: "Wide view of the Doner Factory seating area and upper level interior.",
    filename: "dining-hall.webp",
    width: 4608,
    height: 2184,
  },
  {
    title: "Open kitchen frontage",
    category: "Interior",
    alt: "Restaurant frontage and open seating area at Doner Factory.",
    filename: "open-kitchen-frontage.webp",
    width: 4032,
    height: 1908,
  },
  {
    title: "Front facade",
    category: "Exterior",
    alt: "Wide exterior frontage of Doner Factory.",
    filename: "front-facade.webp",
    width: 1599,
    height: 758,
  },
  {
    title: "Atrium view",
    category: "Interior",
    alt: "Tall atrium view looking across the Doner Factory interior.",
    filename: "atrium-view.webp",
    width: 2184,
    height: 4608,
  },

  {
    title: "Entrance signage",
    category: "Exterior",
    alt: "Tall shot of the Doner Factory entrance and signage.",
    filename: "entrance-signage.webp",
    width: 1908,
    height: 4032,
  },
  {
    title: "Seating mood",
    category: "Interior",
    alt: "Wide seating and ambient lighting inside Doner Factory.",
    filename: "seating-mood.webp",
    width: 4032,
    height: 1908,
  },
  {
    title: "Guest area",
    category: "Interior",
    alt: "Wide guest area and restaurant atmosphere at Doner Factory.",
    filename: "guest-area.webp",
    width: 4032,
    height: 1908,
  },
  {
    title: "Logo close-up",
    category: "Branding",
    alt: "Close-up view of the illuminated Doner Factory logo.",
    filename: "logo-closeup.webp",
    width: 1600,
    height: 490,
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    title: "Interior motion",
    description: "A short ambient clip that gives the gallery a living first impression.",
    duration: "7 sec",
    filename: "interior-motion.mp4",
    width: 848,
    height: 478,
  },
  {
    title: "Restaurant walkthrough",
    description: "A longer look through the restaurant, useful as a featured story clip.",
    duration: "45 sec",
    filename: "restaurant-walkthrough-enhanced.mp4",
    width: 1920,
    height: 1080,
  },
];

export const galleryMedia = {
  images: galleryImages.map((item) => ({
    ...item,
    orientation: (item.width >= item.height ? "landscape" : "portrait") as
      | "landscape"
      | "portrait",
    src: assetPath(item.filename),
  })),
  videos: galleryVideos.map((item) => ({
    ...item,
    src: assetPath(item.filename),
  })),
};
