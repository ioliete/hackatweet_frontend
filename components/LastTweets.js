import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/LastTweets.module.css";

function LastTweets() {
  const [lastTweets, setLastTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/screens/alltweets?token=krjJ3YFCsJ7ldsqfYf1Ddzi-BDCePFSh")
      .then((response) => response.json())
      .then((data) => {
        setLastTweets(data.tweets);
      });
  }, []);

  return (
      <div className={styles.tweet}>
        <div className={styles.tweetInfos}>
          <img src="./images/twitterEgg.png" className={styles.profilePic} alt="Profile pic" />

          <h3 className={styles.firstname}>John</h3>
          <h5 className={styles.username}>Johnjohn</h5>
          <span className={styles.date}>1 hour ago</span>
        </div>

        <h4 className={styles.content}></h4>
        <div className={styles.tweetActions}>
          <FontAwesomeIcon className={styles.icon} icon={faHeart} />
          <p className={styles.counterLike}>0</p>
          <FontAwesomeIcon className={styles.icon} icon={faTrash} />
        </div>
      </div>
  );
}

export default LastTweets;
