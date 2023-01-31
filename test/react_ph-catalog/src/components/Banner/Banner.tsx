import classNames from "classnames";
import { useState } from "react";

export const Banner = () => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  const prevButtonClickHandler = () => {
    if (selectedSlide === 1) {
      setSelectedSlide(3);
    } else {
      setSelectedSlide(n => n - 1);
    }
  };

  const nxtButtonClickHandler = () => {
    if (selectedSlide === 3) {
      setSelectedSlide(1);
    } else {
      setSelectedSlide(n => n + 1);
    }
  };

  return (
    <div className="banner">
      <div className="banner__content">
        <button
          className="banner__button banner__button--prev"
          onClick={prevButtonClickHandler}
        ></button>
        <div className={`banner__image banner__image--${selectedSlide}`}></div>
        <button
          className="banner__button banner__button--nxt"
          onClick={nxtButtonClickHandler}
        ></button>
      </div>
      <div className="banner__slides">
        <button
          className={classNames(
            'banner__select-btn',
            'banner__select-btn--1',
            { 'banner__select-btn--active': selectedSlide === 1 },
          )}
          onClick={() => setSelectedSlide(1)}
        ></button>
        <button
          className={classNames(
            'banner__select-btn',
            'banner__select-btn--2',
            { 'banner__select-btn--active': selectedSlide === 2 },
          )}
          onClick={() => setSelectedSlide(2)}
        ></button>
        <button
          className={classNames(
            'banner__select-btn',
            'banner__select-btn--3',
            { 'banner__select-btn--active': selectedSlide === 3 },
          )}
          onClick={() => setSelectedSlide(3)}
        ></button>
      </div>
    </div>
  );
}