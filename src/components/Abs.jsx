import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import llq_active from "../assets/abs/llq-active.png";
import llq_highlight from "../assets/abs/llq-highlight.png";
import luq_active from "../assets/abs/luq-active.png";
import luq_highlight from "../assets/abs/luq-highlight.png";
import abs from "../assets/abs/default-abs.png";
import all_over_highlight from "../assets/abs/all-over-highlight.png";
import epigastrium_highlight from "../assets/abs/epigastrium-highlight.png";
import epigastrium_active from "../assets/abs/epigastrium-active.png";
import rlq_highlight from "../assets/abs/rlq-highlight.png";
import rlq_active from "../assets/abs/rlq-active.png";
import ruq_highlight from "../assets/abs/ruq-highlight.png";
import ruq_active from "../assets/abs/ruq-active.png";
import umbilicus_highlight from "../assets/abs/umbilicus-highlight.png";
import umbilicus_active from "../assets/abs/umbilicus-active.png";
import suprapublic_highlight from "../assets/abs/suprapubic-highlight.png";
import suprapublic_active from "../assets/abs/suprapubic-active.png";
import ImgConfig from "./ImgConfig";

const Abs = () => {
  const [isEpiActive, setIsEpiActive] = useState(false);
  const [isEpiHighlight, setIsEpiHighlight] = useState(false);
  const [isLlqActive, setIsLlqActive] = useState(false);
  const [isLlqHighlight, setIsLlqHighlight] = useState(false);
  const [isLuqActive, setIsLuqActive] = useState(false);
  const [isLuqHighlight, setIsLuqHighlight] = useState(false);
  const [isRlqActive, setIsRlqActive] = useState(false);
  const [isRlqHighlight, setIsRlqHighlight] = useState(false);
  const [isRuqActive, setIsRuqActive] = useState(false);
  const [isRuqHighlight, setIsRuqHighlight] = useState(false);
  const [isSupActive, setIsSupActive] = useState(false);
  const [isSupHighlight, setIsSupHighlight] = useState(false);
  const [isUmbActive, setIsUmbActive] = useState(false);
  const [isUmbHighlight, setIsUmbHighlight] = useState(false);
  const [isAllOver, setIsAllOver] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  function allOverHandle() {
    if (
      (isAllOver == true) &
      (isEpiActive == false) &
      (isLlqActive == false) &
      (isLuqActive == false) &
      (isRlqActive == false) &
      (isRuqActive == false) &
      (isSupActive == false) &
      (isUmbActive == false)
    ) {
      setIsAllOver(!isAllOver);
      setIsEpiHighlight(false);
      setIsLlqHighlight(false);
      setIsLuqHighlight(false);
      setIsRlqHighlight(false);
      setIsRuqHighlight(false);
      setIsSupHighlight(false);
      setIsUmbHighlight(false);
    } else if (
      (isEpiHighlight == true) &
      (isLlqHighlight == true) &
      (isLuqHighlight == true) &
      (isRlqHighlight == true) &
      (isRuqHighlight == true) &
      (isSupHighlight == true) &
      (isUmbHighlight == true)
    ) {
      setIsAllOver(!isAllOver);
      setIsEpiActive(false);
      setIsLlqActive(false);
      setIsLuqActive(false);
      setIsRlqActive(false);
      setIsRuqActive(false);
      setIsSupActive(false);
      setIsUmbActive(false);
    } else {
      setIsEpiHighlight(true);
      setIsLlqHighlight(true);
      setIsLuqHighlight(true);
      setIsRlqHighlight(true);
      setIsRuqHighlight(true);
      setIsSupHighlight(true);
      setIsUmbHighlight(true);
      setIsEpiActive(false);
      setIsLlqActive(false);
      setIsLuqActive(false);
      setIsRlqActive(false);
      setIsRuqActive(false);
      setIsSupActive(false);
      setIsUmbActive(false);
      setIsAllOver(true);
    }
  }

  useEffect(() => {
    if (
      isAllOver == true ||
      isEpiHighlight == true ||
      isLlqHighlight == true ||
      isLuqHighlight == true ||
      isRlqHighlight == true ||
      isRuqHighlight == true ||
      isSupHighlight == true ||
      isUmbHighlight == true
    ) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
    }

    if (
      isEpiHighlight == false ||
      isLlqHighlight == false ||
      isLuqHighlight == false ||
      isRlqHighlight == false ||
      isRuqHighlight == false ||
      isSupHighlight == false ||
      isUmbHighlight == false
    ) {
      setIsAllOver(false);
    }
  }, [
    isAllOver,
    isEpiHighlight,
    isLlqHighlight,
    isLuqHighlight,
    isRlqHighlight,
    isRuqHighlight,
    isSupHighlight,
    isUmbHighlight,
  ]);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="rounded-3xl shadow-2xl">
        <p className="text-2xl text-center mt-5">
          จุดไหนที่คุณปวดท้องมากที่สุด ?
        </p>
        <div className="relative h-176 w-152">
          <img src={abs} className="absolute" alt="" />
          <ImgConfig src={llq_highlight} state={isLlqHighlight} />
          <ImgConfig src={llq_active} state={isLlqActive} />
          <ImgConfig src={luq_highlight} state={isLuqHighlight} />
          <ImgConfig src={luq_active} state={isLuqActive} />
          <ImgConfig src={rlq_highlight} state={isRlqHighlight} />
          <ImgConfig src={rlq_active} state={isRlqActive} />
          <ImgConfig src={ruq_highlight} state={isRuqHighlight} />
          <ImgConfig src={ruq_active} state={isRuqActive} />
          <ImgConfig src={suprapublic_highlight} state={isSupHighlight} />
          <ImgConfig src={suprapublic_active} state={isSupActive} />
          <ImgConfig src={umbilicus_highlight} state={isUmbHighlight} />
          <ImgConfig src={umbilicus_active} state={isUmbActive} />
          <ImgConfig src={epigastrium_highlight} state={isEpiHighlight} />
          <ImgConfig src={epigastrium_active} state={isEpiActive} />
          <ImgConfig src={all_over_highlight} state={isAllOver} />
          <button
            onClick={() => {
              if (isUmbHighlight == true) {
                setIsUmbHighlight(false);
                setIsUmbActive(false);
              } else {
                setIsUmbActive(!isUmbActive) &
                  setIsUmbHighlight(!isUmbHighlight);
              }
            }}
            className="absolute bottom-[296px] left-[265px] bg-transparent w-14 h-14 rounded-full"
          ></button>
          <button
            onClick={() => {
              if (isEpiHighlight == true) {
                setIsEpiHighlight(false);
                setIsEpiActive(false);
              } else {
                setIsEpiActive(!isEpiActive) &
                  setIsEpiHighlight(!isEpiHighlight);
              }
            }}
            className="absolute bottom-[375px] left-[260px] bg-transparent w-16 h-20 rounded-full"
          ></button>
          <button
            onClick={() => {
              if (isSupHighlight == true) {
                setIsSupHighlight(false);
                setIsSupActive(false);
              } else {
                setIsSupActive(!isSupActive) &
                  setIsSupHighlight(!isSupHighlight);
              }
            }}
            className="absolute bottom-[215px] left-[262px] bg-transparent w-16 h-16 rounded-full"
          ></button>
          <button
            onClick={() => {
              if (isRlqHighlight == true) {
                setIsRlqHighlight(false);
                setIsRlqActive(false);
              } else {
                setIsRlqActive(!isRlqActive) &
                  setIsRlqHighlight(!isRlqHighlight);
              }
            }}
            className="absolute bottom-[262px] left-[200px] bg-transparent w-14 h-14 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              if (isRuqHighlight == true) {
                setIsRuqHighlight(false);
                setIsRuqActive(false);
              } else {
                setIsRuqActive(!isRuqActive) &
                  setIsRuqHighlight(!isRuqHighlight);
              }
            }}
            className="absolute bottom-[335px] left-[200px] bg-transparent w-16 h-16 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              if (isLuqHighlight == true) {
                setIsLuqHighlight(false);
                setIsLuqActive(false);
              } else {
                setIsLuqActive(!isLuqActive) &
                  setIsLuqHighlight(!isLuqHighlight);
              }
            }}
            className="absolute bottom-[332px] right-[222px] bg-transparent w-16 h-16 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              if (isLlqHighlight == true) {
                setIsLlqHighlight(false);
                setIsLlqActive(false);
              } else {
                setIsLlqActive(!isLlqActive) &
                  setIsLlqHighlight(!isLlqHighlight);
              }
            }}
            className="absolute bottom-[262px] right-[224px] bg-transparent w-14 h-14 rounded-2xl"
          ></button>

          <button
            onClick={() => allOverHandle()}
            className="absolute bottom-[20px] right-[220px] bg-transparent w-48 h-14 rounded-2xl"
          ></button>
        </div>
      </div>
      <div>
        <Link to={isAnswered ? "hand" : ""}>
          <div
            className={`w-152 rounded-3xl flex justify-center items-center h-14 mt-4 text-2xl ${
              isAnswered
                ? "bg-blue-500 text-black"
                : "bg-gray-300 text-gray-500 cursor-default"
            }`}
          >
            ต่อไป
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Abs;
