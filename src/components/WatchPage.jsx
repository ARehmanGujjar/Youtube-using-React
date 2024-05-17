import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenue } from "../utils/AppSlicer";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

function WatchPage() {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenue());
  }, []);
  return (
    <>
      <div className="m-5 blur-md">
        <iframe
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/"+params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentContainer/>
    </>
  );
}

export default WatchPage;
