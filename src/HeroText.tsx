import Compass from "./Compass";

function HeroText() {
  return (
    <div className="flex flex-col items-center text-center pt-100px">
      <div className="flex flex-col text-3vw <md: text-24px font-bold mb-30px">
        <span className="flex items-center gap-10px">
          delivering <Compass /> industry's
        </span>
        <span>top talents work</span>
      </div>
      <span className="mb-30px w-1/4 <lg: w-1/3 <md: w-1/2 text-14px leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eum
        ab est incidunt voluptatum? Tenetur perferendis recusandae assumenda
        asperiores totam ipsum dignissimos, omnis, eum cupiditate atque
        architecto culpa placeat mollitia!
      </span>
    </div>
  );
}

export default HeroText;
