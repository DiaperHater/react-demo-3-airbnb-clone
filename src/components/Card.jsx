import { ReactComponent as StartIcon } from "../images/star.svg";
import noImage from "../images/no-image.png";

export default function Card({ img = noImage, soldout, stars = 0, voted = 0, location = 'n/a', title = 'No Title', price }) {

  return (
    <div className="w-40 shrink-0 relative group">
      <img src={img} alt="" className="w-full aspect-[2/3] rounded-lg  group-hover:shadow-[0px_5px_10px_-5px] duration-150 object-cover" />
      {
        soldout &&
        <p className="min-w-[80px] grid place-items-center uppercase bg-gray-300 rounded-md p-1 text-xs leading-none border absolute top-1.5 left-1.5 cursor-default">
          Sold Out
        </p>
      }
      <p className="font-light">
        <StartIcon className="inline-block h-4 -mt-1 mr-1" />
        {stars} <span className="text-neutral-400 uppercase">({voted})·{location}</span>
      </p>
      <p className="text-sm leading-none my-1">
        {title}
      </p>
      {
        price &&
        <p className="">
          <b>${price}</b> <span className="font-light">/ person</span>
        </p>
      }
    </div>
  );
}