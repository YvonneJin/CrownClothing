import './directory-item.styles.scss';


const DirectoryItem = ({ category }) => {
    const { imageUrl, title, id} = category;
    return (
        <div key={id} className="directory-item-container">
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