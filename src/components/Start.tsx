import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Start = (props: { score: number }) => {
  return (
    <div>
      Calificacion:
      {/*{[...new Array(5)].map((_, index) => {
        return index < props.score ? <AiFillStar /> : <AiOutlineStar />;
      })}*/}
    </div>
  );
};

export default Start;
