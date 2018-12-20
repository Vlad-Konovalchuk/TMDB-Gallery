import React from "react";
import styles from "./NewsItem.module.css";

const NewsItem = props => {
  return (
    <li className={styles.post}>
      <div className={styles.post__logo}>
        {props.urlToImage ? (
          <img src={props.urlToImage} alt="" className={styles.post__image} />
        ) : (
          <img
            src="https://picsum.photos/288/163/?blur"
            alt=""
            className={styles.post__image}
          />
        )}
      </div>
      <div className={styles.post__description}>
        <h2 className={styles.post__title}>{props.title}</h2>
        <p className={styles.post__content}>{props.description}</p>
      </div>
      {/*{console.log(props)}*/}
    </li>
  );
};

export default NewsItem;
