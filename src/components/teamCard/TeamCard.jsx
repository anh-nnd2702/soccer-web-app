import "./teamCard.scss";
const TeamCard = (props) => {
  const { teamData, isWinner, isFavorite } = props;
  return (
    <div className="team-card">
      <div className="team-card-top"></div>
      <div className="team-card-content"></div>
      <div className="team-card-action"></div>
    </div>
  );
};

export default TeamCard;
