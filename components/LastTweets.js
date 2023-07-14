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
        console.log(data.tweets)
      });
  }, []);

  const tweetRender = lastTweets.map((tweet) => {
    return (
            <div className={styles.tweet}>
              <div className={styles.tweetInfos}>
                <img src="./images/twitterEgg.png" className={styles.profilePic} alt="Profile pic" />
      
                <p className={styles.firstname}>John</p>
                <p className={styles.username}>Johnjohn</p>
                <span className={styles.date}>1 hour ago</span>
              </div>
      
              <p className={styles.content}>{tweet.message}</p>
              <div className={styles.tweetActions}>
                <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                <p className={styles.counterLike}>0</p>
                <FontAwesomeIcon className={styles.icon} icon={faTrash} />
              </div>
            </div>
        );
    
  })

  return(
    tweetRender
  )
  
}

export default LastTweets;
