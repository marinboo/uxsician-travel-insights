import Card from "../atoms/Card";
import strings from "../../data/strings";

const ComingSoonCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Card
      title={title}
      footer={
        <a href="https://www.google.com/search?q=costa+rica">More about</a>
      }
    >
      <strong>{strings.components.organisms.commingSoonCard.copy}</strong>
    </Card>
  );
};

export default ComingSoonCard;
