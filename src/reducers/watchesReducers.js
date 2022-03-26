const initialState = [
  {
    id: 1,
    label: "Bronze & Silver",
    image: "/imgs/Watch-01.jpg",
    description: "Bronze Lined Silver wrist Watch for the Casuals and Classics",
    price: 75,
  },
  {
    id: 2,
    label: "Basic Silver",
    image: "/imgs/Watch-02.jpg",
    description: "Basic Silver wrist Watch for the Casuals and Classics",
    price: 50,
  },
  {
    id: 3,
    label: "Classic Silver",
    image: "/imgs/Watch-03.jpg",
    description: "Classic Silver wrist Watch for the Classics",
    price: 90,
  },
  {
    id: 4,
    label: "Gold & Silver",
    image: "/imgs/Watch-04.jpg",
    description: "Gold Lined Silver wrist Watch for the Classics",
    price: 120,
  },
  {
    id: 5,
    label: "Extra Black",
    image: "/imgs/Watch-05.jpg",
    description: "Extra Black wrist Watch for the Casuals and Classics",
    price: 100,
  },
  {
    id: 6,
    label: "Golden Yellow",
    image: "/imgs/Watch-06.jpg",
    description: "Golden Yellow wrist Watch for the Classics",
    price: 150,
  },
  {
    id: 7,
    label: "Ultra Golden",
    image: "/imgs/Watch-07.jpg",
    description: "Ultra Golden wrist Watch for the Classics",
    price: 200,
  },
  {
    id: 8,
    label: "Leather Black & Gold",
    image: "/imgs/Watch-08.jpg",
    description:
      "Leather Black & Gold wrist Watch for the Casuals and Classics",
    price: 95,
  },
  {
    id: 9,
    label: "Leather Black & Silver",
    image: "/imgs/Watch-09.jpg",
    description:
      "Leather Black & Silver wrist Watch for the Casuals and Classics",
    price: 85,
  },
  {
    id: 10,
    label: "Blue & Silver",
    image: "/imgs/Watch-10.jpg",
    description: "Blue & Silver wrist Watch for the Casuals and Classics",
    price: 70,
  },
  {
    id: 11,
    label: "Diamond Gold",
    image: "/imgs/Watch-11.jpg",
    description: "Diamond Gold wrist Watch for the Casuals and Classics",
    price: 250,
  },
  {
    id: 12,
    label: "Night's Gold",
    image: "/imgs/Watch-12.jpg",
    description: "Night's Gold wrist Watch for the Casuals and Classics",
    price: 130,
  },
  {
    id: 13,
    label: "Full Bronze",
    image: "/imgs/Watch-13.jpg",
    description: "Full Bronze wrist Watch for the Casuals and Classics",
    price: 110,
  },
  {
    id: 14,
    label: "Iced Metal",
    image: "/imgs/Watch-14.jpg",
    description: "Iced Metal wrist Watch for the Casuals and Classics",
    price: 125,
  },
  {
    id: 15,
    label: "Super Classic",
    image: "/imgs/Watch-15.jpg",
    description: "Super Classic wrist Watch for Classics",
    price: 175,
  },
];

const watchesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GETDATA":
      return state;
    default:
      return state;
  }
};

export default watchesReducers;
