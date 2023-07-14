import styles from "../styles/Home.module.css";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftBar}>
          <Image className={styles.logo} />
          <div>
            <Image className={styles.profilePic} />
            <p className={styles.name}></p>
            <p className={styles.username}></p>
            <button className={styles.logOutButton}>Log out</button>
          </div>
        </div>

        <div className={styles.middleBar}>
          <div className={styles.middleBarUp}>
            <h2>Home</h2>
            <input type="text" className={styles.newTweet} placeholder="What's up?" />
            <p className={styles.count}></p>
            <button className={styles.tweetButton}>Tweet</button>
          </div>

          <div className={styles.tweetsContainer}>
            <div className={styles.tweet}>
              <Image className={styles.profilePic} />
              <h3 className={styles.firstname}>Name</h3>
              <h5 className={styles.username}></h5>
              <span className={styles.date}></span>
              <br />
              <h4 className={styles.content}></h4>
              <div className={styles.tweetActions}>
                <FontAwesomeIcon onClick={likeIcon} className={styles.counterLike} icon={faHeart} />
                  <p className={styles.counterLike}>0</p>
                <FontAwesomeIcon onClick={deleteIcon} className={styles.delete} icon={faTrash} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightBar}>
          <h2>Trends</h2>
          <div className={trendsContainer}>
            <div className={trendHashtag}>
              <h3 className={hashtagContent}>hashtag content</h3>
              <h5 className={trendTweetCount}>1 Tweet</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
