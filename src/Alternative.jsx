import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Alternative = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = reviews[index];

  console.log(5 % 3);

  const changePerson = (goal) => {
    setIndex((currentIndex) => {
      let newIndex;

      if (goal === "next") {
        newIndex = (currentIndex + 1) % reviews.length;
      } else if (goal === "prev") {
        newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      }

      return newIndex;
    });
  };

  const getRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber = (index + 1) % reviews.length;
    }

    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info"> {text}</p>
        <div className="btn-container">
          <button
            className="prev-btn"
            onClick={() => {
              changePerson("prev");
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              changePerson("next");
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            getRandomPerson();
          }}
        >
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default Alternative;
