import ShowThumb from "../ShowThumb/ShowThumb";
import "./ShowList.css";

const ShowsList = ({ shows }) => {
  return (
    <div className="shows">
      {shows.map((show, index) => (
        <ShowThumb show={show} key={index} />
      ))}
    </div>
  );
};

export default ShowsList;
