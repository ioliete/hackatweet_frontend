import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Input } from "antd";
import LastTweets from './LastTweets';

import styles from "../styles/Home.module.css";

const { TextArea } = Input;

function Home() {

  const [ lengthTweet, SetlengthTweet ] = useState(0);

  const handleLogout = () => {

  }

  const handleInput = (e) => {
    SetlengthTweet(e.target.textContent.length);
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftBar}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.logo}>
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
          <div className={styles.userContainer}>
            <div className={styles.user}>
              <img src="./images/twitterEgg.png" className={styles.profilePic} alt="Profile pic" />
              <div>
                <p className={styles.firstname}>John</p>
                <p className={styles.username}>John</p>
              </div>
            </div>
            <Button shape="round" ghost onClick={handleLogout}>Log out</Button>
          </div>
        </div>

        <div className={styles.middleBarUp}>
          <h2 className={styles.home}>Home</h2>
          <TextArea placeholder="What's up?" allowClear onChange={handleInput} />
          <div className={styles.newTweetParameters}> 
            <p className={styles.count}>{280 - lengthTweet}/280</p>
            <Button type="primary" shape="round">
              Tweet
            </Button>
          </div>
        </div>

        <div className={styles.tweetsContainer}>
          <LastTweets />
        </div>

        <div className={styles.rightBar}>
          <h2 className={styles.trends}>Trends</h2>
          <div className={styles.trendsContainer}>
            <div className={styles.trendHashtag}>
              <h3 className={styles.hashtagContent}>hashtags</h3>
              <h5 className={styles.trendTweetCount}>1 Tweet</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
