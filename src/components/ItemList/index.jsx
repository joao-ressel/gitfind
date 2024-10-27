import "./styles.css";

// eslint-disable-next-line react/prop-types
export const ItemList = ({ title, description }) => {
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr/>
    </div>
  );
};
