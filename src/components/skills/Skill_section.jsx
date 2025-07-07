import "./skill_style.css";

const Skill_section = ({ Skill_img, Skill_name, progress }) => {
  return (
    <div className="  h-[200px] w-[150px]">
      <div className="skill_img ">
        <img src={Skill_img} alt="skill image" />
      </div>
      <div className="skill_info flex items-center justify-center text-white text-lg">
        <p>{Skill_name}</p>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-purple-500 h-full transition-all duration-500 flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
          <span className="text-white">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
export default Skill_section;
