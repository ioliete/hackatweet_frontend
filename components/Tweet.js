import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Tweet.module.css";

function Tweet() {
  const [Tweet, setTweet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/addtweets?token=krjJ3YFCsJ7ldsqfYf1Ddzi-BDCePFSh")
      .then((response) => response.json())
      .then((data) => {
        
      });
  }, []);


  return(
    gd
  )
  
}

export default Tweet;
