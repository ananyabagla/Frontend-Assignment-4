import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-[800px]">
        <Sidebar />
        <div className="flex-1 p-10">
          <Step1 />
        </div>
      </div>
    </div>
  );
};

export default App;
