import { FunctionComponent } from "react";
import { PlayersProps } from "@types";

const Crad: FunctionComponent<PlayersProps> = ({
  firstname,
  lastname,
  image,
  link,
  children,
  body,
}: PlayersProps) => {
  return (
    <div className="max-w-sm max-h-full bg-white border border-gray-200">
      {/* image  */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={'aspect-square object-contain'} src={image} alt="" />
      {/* body */}
      <div className="p-2">
        <a href="#">
          <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">
            {firstname + " " + lastname}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{children || body}</p>
        {/* footer */}
        <div className="flex flex-row justify-around">
            <div>But: {14}</div>
            <div>Salaire: {140}$</div>
        </div>
      </div>
    </div>
  );
};

export default Crad;
