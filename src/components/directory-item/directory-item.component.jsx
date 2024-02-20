import {
  DirectoryItemContianer,
  Body,
  BackgroundImage
} from './directory-item.styles.jsx';

import { useNavigate } from 'react-router-dom'; 


const DirectoryItem = ({ category }) => {
    const { imageUrl, title, id, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContianer
          key={id}  
          onClick={onNavigateHandler} 
        >
        <BackgroundImage imageUrl={imageUrl}/>
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body> 
      </DirectoryItemContianer>
    );
};

export default DirectoryItem;