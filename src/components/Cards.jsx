import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { TbBoxMultiple3 } from "react-icons/tb";

export default function Cards({
  className,
  img,
  title,
  price,
  rating,
  category,
}) {
  return (
    <div className={`${className} pe-0 mb-3 `}>
      <div className={` main-card p-0 `}>
        <div class="image-container w-100">
          <img class="w-100 pro-img" src={img} alt="" />
          <div class="overlay-div top-left bg-dark text-white fw-bold px-2">
            {category}
          </div>
          <div class="bg-white overlay-div top-right me-3 mt-3">
            <AiOutlineHeart color="black" size={25} />
          </div>
          <div class=" bg-white overlay-div bottom-right mb-3 me-3">
            <TbBoxMultiple3 color="black" size={25} />
          </div>
        </div>
        <footer className="p-3 contents ">
          <h4 id="truncated-heading" className="title">
            {title}
          </h4>
          <div className="d-flex justify-content-between">
            <span className="bg-dark text-white px-2">
              {rating} <AiFillStar className="mb-1" />
            </span>
            <span className="fw-bold">₹ {price}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
