import Drops from "../components/Drop";
// import Typewriter from "../components/Typewriter";

const About = () => {
  return (
    <div className="relative flex flex-1 items-start leading-6 tracking-wider">
      <div className="relative flex w-[368px] md:w-[450px] md:h-[300px] flex-col gap-8 rounded-3xl bg-gradient-to-r from-slate-800 to-slate-950 px-7 py-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="regular-16 text-gray-200">Name</p>
            <img src="/close.svg" alt="close" width={24} height={24} />
          </div>
          <p className="font-bold text-white">Arjun Gurjar</p>
        </div>
        <Drops className="flex whitespace-nowrap" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-200">Profession</p>
            <p className="font-bold text-white">WebDeveloper</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base block text-gray-200">TechStack</p>
            <p className="font-bold text-white">ReactJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div>
  <h1 className=" font-semibold font-mono text-lg">
    Use of AntDesign DropDown !
  </h1>
  <Drops />
</div>; */
}
