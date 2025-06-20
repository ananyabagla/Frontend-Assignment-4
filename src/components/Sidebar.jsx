import blobBG from "../assets/blobfinal2.png";

const Sidebar = () => {
  return (
    <div className="relative w-[250px] text-white p-5 rounded-l-xl overflow-hidden">
      <img
        src={blobBG}
        alt="Sidebar Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 mt-5 space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div>
            <p className="text-xs">STEP 1</p>
            <p className="font-bold">YOUR INFO</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            2
          </div>
          <div>
            <p className="text-xs">STEP 2</p>
            <p className="font-bold">SELECT PLAN</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            3
          </div>
          <div>
            <p className="text-xs">STEP 3</p>
            <p className="font-bold">ADD-ONS</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            4
          </div>
          <div>
            <p className="text-xs">STEP 4</p>
            <p className="font-bold">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
