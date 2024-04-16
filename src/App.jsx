import logo from "./assets/logo.svg"
import Iphone from "./assets/Iphone.svg"
import eye from "./assets/eye.svg"
import edit from "./assets/pencil.svg"
import trash from "./assets/trash.svg"
import Realme from "./assets/Redmi.svg"
import Samsung from "./assets/Samsung.svg"
import Nokia from "./assets/Nokia.svg"
import Blackberry from "./assets/Blackberry.svg"


function App() {
  return (
    <div className="w-full h-full bg-[#141B2D]">
      <img className="ml-[689px] mb-[62px] pt-[110px]" src={logo} width={645} height={91} alt="logo icon" />
      <div className="w-[1080px] mx-auto flex flex-col">
        <div className="flex items-center font-sans font-[600] rounded-[10px] bg-[#1A2038] text-white px-[12px] mb-4 py-[10px]">
          <h3 className="w-[347px]">Brand</h3>
          <h3 className="w-[173px]">Category</h3>
          <h3 className="w-[178.67px]">Price</h3>
          <h3 className="w-[178.67px]">Status</h3>
          <h3 className="w-[178.67px]">Action</h3>
        </div>
        <div className="flex items-center text-white rounded-[10px] mb-4 bg-[#1F2A40]">
          <h3 className="flex w-[350px] items-center my-[10px] ml-[12px]"><img src={Iphone} alt="" /> <span className="ml-[14px]"><h3>Apple</h3> <p className="mt-[4px] text-[#6C757D]">mail@gmail.com!</p></span></h3>
          <h3 className="w-[174px]">Technology</h3>
          <h3 className="w-[180px]">200.00$</h3>
          <h3 className="bg-[#04D58D] font-[500] rounded-[30px] py-1 px-2">Available</h3>
          <h3 className="w-[96px] ml-[101px] flex gap-[24px]"><img className="cursor-pointer" src={eye} alt="" /><img className="cursor-pointer" src={edit} alt="" /><img className="cursor-pointer" src={trash} alt="" /></h3>
        </div>
        <div className="flex items-center text-white rounded-[10px] mb-4 bg-[#1F2A40]">
          <h3 className="flex w-[350px] items-center my-[10px] ml-[12px]"><img src={Realme} alt="" /> <span className="ml-[14px]"><h3>Realme</h3> <p className="mt-[4px] text-[#6C757D]">mail@gmail.com</p></span></h3>
          <h3 className="w-[174px]">Technology</h3>
          <h3 className="w-[180px]">200.00$</h3>
          <h3 className="bg-[#EB5757] font-[500] rounded-[30px] py-1 px-2">No Stock</h3>
          <h3 className="w-[96px] ml-[101px] flex gap-[24px]"><img className="cursor-pointer" src={eye} alt="" /><img className="cursor-pointer" src={edit} alt="" /><img className="cursor-pointer" src={trash} alt="" /></h3>
        </div>
        <div className="flex items-center text-white rounded-[10px] mb-4 bg-[#1F2A40]">
          <h3 className="flex w-[350px] items-center my-[10px] ml-[12px]"><img src={Samsung} alt="" /> <span className="ml-[14px]"><h3>Samsung</h3> <p className="mt-[4px] text-[#6C757D]">mail@gmail.com</p></span></h3>
          <h3 className="w-[174px]">Technology</h3>
          <h3 className="w-[180px]">200.00$</h3>
          <h3 className="bg-[#F2C94C] font-[500] text-[#1F2A40] rounded-[30px] py-1 px-2">Flash Sale</h3>
          <h3 className="w-[96px] ml-[101px] flex gap-[24px]"><img className="cursor-pointer" src={eye} alt="" /><img className="cursor-pointer" src={edit} alt="" /><img className="cursor-pointer" src={trash} alt="" /></h3>
        </div>
        <div className="flex items-center text-white rounded-[10px] mb-4 bg-[#1F2A40]">
          <h3 className="flex w-[350px] items-center my-[10px] ml-[12px]"><img src={Nokia} alt="" /> <span className="ml-[14px]"><h3>Nokia</h3> <p className="mt-[4px] text-[#6C757D]">mail@gmail.com</p></span></h3>
          <h3 className="w-[174px]">Technology</h3>
          <h3 className="w-[180px]">200.00$</h3>
          <h3 className="bg-[#04D58D] font-[500] rounded-[30px] py-1 px-2">Available</h3>
          <h3 className="w-[96px] ml-[101px] flex gap-[24px]"><img className="cursor-pointer" src={eye} alt="" /><img className="cursor-pointer" src={edit} alt="" /><img className="cursor-pointer" src={trash} alt="" /></h3>
        </div>
        <div className="flex items-center text-white rounded-[10px] mb-[184px] bg-[#1F2A40]">
          <h3 className="flex w-[350px] items-center my-[10px] ml-[12px]"><img src={Blackberry} alt="" /> <span className="ml-[14px]"><h3>Blackberry</h3> <p className="mt-[4px] text-[#6C757D]">mail@gmail.com</p></span></h3>
          <h3 className="w-[174px]">Technology</h3>
          <h3 className="w-[180px]">200.00$</h3>
          <h3 className="bg-[#EB5757] font-[500] rounded-[30px] py-1 px-2">No Stock</h3>
          <h3 className="w-[96px] ml-[101px] flex gap-[24px]"><img className="cursor-pointer" src={eye} alt="" /><img className="cursor-pointer" src={edit} alt="" /><img className="cursor-pointer" src={trash} alt="" /></h3>
        </div>
      </div>
    </div>
  )
}

export default App