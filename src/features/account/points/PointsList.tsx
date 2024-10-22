import PointsListItem from "./PointsListItem";

// TODO: replace with real API
const POINTS = [
  {
    id: "1",
    points: 315,
    date: "October 22, 2024",
    type: "earned",
  },
  {
    id: "2",
    points: 427,
    date: "October 16, 2024",
    type: "expired",
  },
  {
    id: "3",
    points: 119,
    date: "October 14, 2024",
    type: "earned",
  },
  {
    id: "4",
    points: 735,
    date: "October 10, 2024",
    type: "expired",
  },
  {
    id: "6",
    points: 150,
    date: "October 9, 2024",
    type: "earned",
  },
];

const PointsList = () => {
  return (
    <ul className='divide-y divide-border/40'>
      {POINTS.map((point, index) => (
        <PointsListItem key={point.id} {...point} index={index} />
      ))}
    </ul>
  );
};

export default PointsList;
