import { Link } from "react-router-dom";

export const GalleryDetails = ({
  galleryId,
  title,
  description,
  imageUrl,
  createdAt,
  user,
}) => {
  return (
    <>
      <span>
        <h1>
          <Link to={`/galleries/${galleryId}`}>{title}</Link>
        </h1>
        <p>{createdAt}</p>
        <p>
          <a href={imageUrl[0]} target="_blank">
            <img src={imageUrl[0]} width="500" alt="" />
          </a>
        </p>
        <p>
          <Link to={`/users/${user.id}`}>
            {" "}
            {user.first_name} {user.last_name}
          </Link>
        </p>
      </span>
    </>
  );
};
