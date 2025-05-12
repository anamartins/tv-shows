import Image from "next/image";
import Link from "next/link";
import "./ShowThumb.css";

const ShowThumb = ({ show }) => {
  return (
    <div className="show">
      <Link href={`${show.slug}-${show.id}`}>
        <h2 className="show-card">{show.name}</h2>
        <Image
          className="show-poster"
          src={show.image.original}
          alt={`${show.name} poster`}
          priority
          width={200}
          height={300}
        />
      </Link>
    </div>
  );
};

export default ShowThumb;
