import Image from "next/image";
import "./ShowInfo.css";

const ShowInfo = ({ name, img, summary }) => {
  return (
    <div className="show-info">
      <div className="show-header">
        <h1 className="show-name">{name}</h1>
        <section>{summary}</section>
      </div>
      <Image
        className="show-image"
        src={img}
        priority
        alt={`${name} poster`}
        width={200}
        height={300}
      />
    </div>
  );
};

export default ShowInfo;
