import React, { useState, useEffect } from "react";
import nullImg from "../../assets/image/logo.png";
// import Weather from "./weather";
import "./WikiData.css";

const getFirstPageExtract = (jsonResponse) => {
  // You should probably add some validathin here to make sure pages exists
  const pages = jsonResponse.query.pages;
  const pageIds = Object.keys(pages);
  // Here we only take the first response since we know there is only one.
  const firstPageId = pageIds.length ? pageIds[0] : null;
  return firstPageId ? pages[firstPageId].extract : null;
};

const getFirstimageExtract = (jsonResponse) => {
  // You should probably add some validathin here to make sure pages exists
  const imagePages = jsonResponse.query.pages;
  const imagePageIds = Object.keys(imagePages);
  const firstPageId = imagePageIds.length ? imagePageIds[0] : null;
  const imageUrl = imagePages[imagePageIds].thumbnail
    ? imagePages[imagePageIds].thumbnail.source
    : null;
  return firstPageId ? imageUrl : null;
};

const WikiData = (props) => {
  const [wikiData, setWikiData] = useState({
    imgUrl: "",
    content: "",
  });

  const imageUrl = `https://zh.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&iiurlwidth=500&titles=${props.keyWord}`;

  const fetchImage = async (event) => {
    const res = await fetch(event);
    const jsonImage = await res.json();
    const imageExtract = getFirstimageExtract(jsonImage);
    // console.log(event);

    setWikiData((prevValue) => {
      return {
        ...prevValue,
        imgUrl: imageExtract,
      };
    });
  };

  const url = `https://zh.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${props.keyWord}`;

  const getCity = async (event) => {
    const response = await fetch(event);
    const jsonContent = await response.json();
    const extract = getFirstPageExtract(jsonContent);
    // console.log(event);

    setWikiData((prevValue) => {
      return {
        ...prevValue,
        content: extract,
      };
    });
  };

  useEffect(() => {
    getCity(url);
    fetchImage(imageUrl);
  }, [url, imageUrl]);

  return (
    <div className="article-box">
      <h1>{props.keyWord}</h1>
      <hr />
      <div className="article">
        <img src={wikiData.imgUrl ? wikiData.imgUrl : nullImg} alt="icons" />
        <div
          className="show-content"
          dangerouslySetInnerHTML={{ __html: wikiData.content }}
        />
      </div>
      <hr />
    </div>
  );
};

export default WikiData;
