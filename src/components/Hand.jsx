import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hand from "../assets/hand/default-finger.png";
import dip_active from "../assets/hand/dip-active.png";
import dip_highlight from "../assets/hand/dip-highlight.png";
import pip_active from "../assets/hand/pip-active.png";
import pip_highlight from "../assets/hand/pip-highlight.png";
import mcp_active from "../assets/hand/mcp-active.png";
import mcp_highlight from "../assets/hand/mcp-highlight.png";
import other_highlight from "../assets/hand/others-highlight.png";
import ImgConfig from "./ImgConfig";

const Hand = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isDipActive, setIsDipActive] = useState(false);
  const [isDipHighlight, setIsDipHighlight] = useState(false);
  const [isPipActive, setIsPipActive] = useState(false);
  const [isPipHighlight, setIsPipHighlight] = useState(false);
  const [isMcpActive, setIsMcpActive] = useState(false);
  const [isMcpHighlight, setIsMcpHighlight] = useState(false);
  const [isOthHighlight, setIsOthHighlight] = useState(false);

  function otherHandle() {
    setIsDipHighlight(false);
    setIsPipHighlight(false);
    setIsMcpHighlight(false);
    setIsDipActive(false);
    setIsPipActive(false);
    setIsMcpActive(false);
    setIsOthHighlight(!isOthHighlight);
  }

  useEffect(() => {
    if (
      isOthHighlight == true ||
      isDipHighlight == true ||
      isPipHighlight == true ||
      isMcpHighlight == true
    ) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
    }
  }, [isOthHighlight, isDipHighlight, isPipHighlight, isMcpHighlight]);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="rounded-3xl shadow-2xl">
        <p className="text-2xl text-center mt-5">
          จุดไหนที่คุณปวดนิ้วมากที่สุด ?
        </p>
        <div className="relative h-176 w-144">
          <img src={hand} className="absolute" alt="" />
          <ImgConfig src={dip_active} state={isDipActive} />
          <ImgConfig src={dip_highlight} state={isDipHighlight} />
          <ImgConfig src={pip_active} state={isPipActive} />
          <ImgConfig src={pip_highlight} state={isPipHighlight} />
          <ImgConfig src={mcp_active} state={isMcpActive} />
          <ImgConfig src={mcp_highlight} state={isMcpHighlight} />
          <ImgConfig src={other_highlight} state={isOthHighlight} />
          <div>
            <button
              onClick={() =>
                setIsMcpActive(!isMcpActive) &
                setIsMcpHighlight(!isMcpHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[232px] left-[255px] bg-transparent w-28 h-9 rounded-full"
            ></button>
            <button
              onClick={() =>
                setIsMcpActive(!isMcpActive) &
                setIsMcpHighlight(!isMcpHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[260px] left-[150px] -rotate-22 bg-transparent w-28 h-9 rounded-full"
            ></button>
            <button
              onClick={() =>
                setIsMcpActive(!isMcpActive) &
                setIsMcpHighlight(!isMcpHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute bottom-[320px] right-[140px] rotate-45  bg-transparent w-12 h-9 rounded-full"
            ></button>
          </div>
          <div>
            <button
              onClick={() =>
                setIsPipActive(!isPipActive) &
                setIsPipHighlight(!isPipHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[210px] left-[135px] -rotate-12 bg-transparent w-10 h-8 rounded-full"
            ></button>
            <button
              onClick={() =>
                setIsPipActive(!isPipActive) &
                setIsPipHighlight(!isPipHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[155px] left-[190px] -rotate-12 bg-transparent w-10 h-8 rounded-full"
            ></button>
            <button
              onClick={() =>
                setIsPipActive(!isPipActive) &
                setIsPipHighlight(!isPipHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[135px] right-[210px] rotate-6 bg-transparent w-28 h-8 rounded-full"
            ></button>
            <button
              onClick={() =>
                setIsPipActive(!isPipActive) &
                setIsPipHighlight(!isPipHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[275px] right-[100px] rotate-22 bg-transparent w-10 h-8 rounded-full"
            ></button>
          </div>
          <div>
            <button
              onClick={() =>
                setIsDipActive(!isDipActive) &
                setIsDipHighlight(!isDipHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[75px] right-[220px] bg-transparent w-10 h-7 rounded-full"
            ></button>
            <button
              onClick={() =>
                setIsDipActive(!isDipActive) &
                setIsDipHighlight(!isDipHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[72px] left-[180px] -rotate-22 bg-transparent w-28 h-7 rounded-full"
            ></button>
            <button
              onClick={() =>
                setIsDipActive(!isDipActive) &
                setIsDipHighlight(!isDipHighlight) &
                setIsOthHighlight(false)
              }
              className="absolute top-[160px] left-[120px] -rotate-17 bg-transparent w-8 h-7 rounded-full"
            ></button>
          </div>
          <button
            onClick={otherHandle}
            className="absolute bottom-[38px] left-[90px] bg-transparent w-96 h-14 rounded-full"
          ></button>
        </div>
      </div>
      <div>
        <Link to={isAnswered ? "/" : ""}>
          <div
            className={`w-144 rounded-3xl flex justify-center items-center h-14 mt-4 text-2xl ${
              isAnswered
                ? "bg-blue-500 text-black"
                : "bg-gray-300 text-gray-500 cursor-default"
            }`}
          >
            เสร็จสิ้น
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hand;
