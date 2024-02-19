import './directory-item.styles.scss';

import { useNavigate } from 'react-router-dom'; 


const DirectoryItem = ({ category }) => {
    const { imageUrl, title, id, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <div 
          key={id} 
          className="directory-item-container" 
          onClick={onNavigateHandler} 
        >
        <div className="background-image" style = {{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="directory-item-body-container">
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </div> 
      </div>
    );
};

export default DirectoryItem;