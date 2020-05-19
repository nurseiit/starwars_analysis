import React from "react";
import imgSources from "./imgSources";
import { tomatoes, imdb } from "./scores";
import dates from "./dates";

export const Episode = ({ e }) => (
  <div style={{ padding: "0 10px" }}>
    <img alt="" style={{ height: "300px" }} src={imgSources[e]} />
    <br />
    <small style={{ fontSize: "17px" }}>{dates[e]}</small>
    <hr style={{ width: "70px" }} />
    <small style={{ fontSize: "15px" }}>
      <span role="img" aria-label="tomato emoji">
        🍅
      </span>{" "}
      {tomatoes[e]["critics"]}% / {tomatoes[e]["audience"]}%
    </small>
    <br />
    <small style={{ fontSize: "15px" }}>
      <span role="img" aria-label="movie emoji">
        🎞
      </span>{" "}
      {imdb[e]["critics"]}% / {imdb[e]["audience"]}%
    </small>
    <hr style={{ width: "20px" }} />
    <small style={{ fontSize: "15px" }}>
      <span role="img" aria-label="numbers emoji">
        🔢
      </span>{" "}
      {(imdb[e]["critics"] + tomatoes[e]["critics"]) * 0.5}% /{" "}
      {(imdb[e]["audience"] + tomatoes[e]["audience"]) * 0.5}%
    </small>
  </div>
);

export const Episodes = ({ episodes }) => (
  <div style={{ display: "flex", textAlign: "center", padding: "40px" }}>
    {episodes.map((e) => (
      <Episode e={e} />
    ))}
  </div>
);
