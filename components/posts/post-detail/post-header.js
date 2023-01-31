import classes from "./post-header.module.css";
import Image from "next/image";

function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <div className={classes.titleCon}>
        <h1>{title}</h1>
      </div>
      <div className={classes.image}></div>{" "}
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
