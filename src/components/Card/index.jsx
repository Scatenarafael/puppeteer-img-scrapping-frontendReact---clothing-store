import "./styles.css";

export function Card({ url, description, sizes, imagepath }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={url} alt={`Imagem - ${description}`} />
      </div>
      <div className="details-container page-break">
        <p>{description}</p>
        <span>
          {sizes.map((size, index) => {
            return <p key={`${index}+${imagepath}`}> {size} </p>;
          })}
        </span>
      </div>
    </div>
  );
}
