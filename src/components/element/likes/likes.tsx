import { useState } from "react";
import "./style.css";
// import { IoHeartOutline } from "react-icons/io5";


const Likes = () => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  const style = () => {
    if(like){
        return "active"
    }
    return "default"
  } 

  return (
    
    <div className={style()} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Heart</title>
        <path
          d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
};

export default Likes;
