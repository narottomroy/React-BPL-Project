import bgShadow from "../assets/bg-shadow.png";
import bannerImg from "../assets/banner-main.png"

const Banner = () => {
  return (
    <div
      className="
        min-h-[500px]
        my-7
        flex
        flex-col
        justify-center
        items-center
        bg-black
        bg-no-repeat
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${bgShadow})`,
      }}
    >
        <img className="
        justify-center
        items-center
        bg-no-repeat
        bg-cover
        bg-center" 
        src={bannerImg} alt="" />
      <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>

      <p className="mt-4 text-xl text-gray-300">
        Beyond Boundaries Beyond Limits
      </p>

      <button className="mt-6 rounded-xl bg-lime-400 px-7 py-3 font-bold text-black">
        Claim Free Credit
      </button>
    </div>
  );
};

export default Banner;