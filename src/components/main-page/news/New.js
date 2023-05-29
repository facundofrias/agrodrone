import { truncateText } from "../../utils/truncateText";

const New = ( {image, title, description} ) => {
  let truncatedDescription = truncateText(description, 200);

  return (
    <div className="new">
      <img className="new__img" src={image} alt="New picture" />
      <h3 className="new__title">{title}</h3>
      <p className="new__description">{truncatedDescription}</p>
    </div>
  );
}

export default New;