import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ imageUrl, title }) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(`shop/${title.toLowerCase()}`);
  };
  return (
    <DirectoryItemContainer onClick={navigateTo}>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
