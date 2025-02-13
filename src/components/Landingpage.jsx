import Benefits from "./Benefits"
import FAQs from "./FAQs"
import Refer from "./Refer"
import Support from "./Support"


function Landingpage({ activeTab }) {
    console.log(activeTab);
  return (
      <div className="flex justify-center w-full h-screen bg-gray-900 rounded-lg p-4 rounded-xl mt-2">
            {activeTab === "Refer" && <Refer/>}
            {activeTab === "Benefits" && <Benefits />}
            {activeTab === "FAQs" && <FAQs />}
            {activeTab === "Support" && <Support />}
          </div>
    
      
      
  )
}

export default Landingpage