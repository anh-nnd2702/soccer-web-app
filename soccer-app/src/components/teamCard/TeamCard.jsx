import { Card } from "@mui/material";
import "./teamCard.scss";
const TeamCard = (props) => {
  const { teamData, isWinner, isFavorite } = props;
  return (
    <div className="team-card">
      <Card></Card>
    </div>
  );
};

export default TeamCard;
