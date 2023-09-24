import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from "next/link";
function Detail({urunler}){
    const router=useRouter()
    const {id}=router.query
    const product=urunler.find(item=>item.id==id)
    console.log(urunler);
    return (
        <div className="flex flex-col w-full">
            <div className="flex relative w-full items-center justify-center text-white h-[40px] bg-red-600">
                <h1>Məhsul haqqında</h1>
               <Link href="/">
               <ArrowBackIosNewIcon className="absolute top-2 left-2"></ArrowBackIosNewIcon>
               </Link>
            </div>
           <div className="flex m-2  max-[1000px]:flex-col h-[500px] mt-[20px] p-3">

    <img className="w-full h-full object-cover" src={product?.images[0]}></img>

<div className="basis-[50%]  p-2 flex flex-col relative">
    <h1 className="text-2xl ">{product?.title}</h1>
    <p>Model: Samsung</p>
    <p>{product.description}</p>
   <div className="absolute flex justify-center w-full gap-[10px] bottom-0">
   <a href="" className="flex w-[110px] rounded-[7px] bg-red-600 text-white p-2 items-center justify-center">Zəng et</a>
   <a href="" className="flex w-[110px] rounded-[7px] bg-green-600 text-white p-2 items-center justify-center">Whatsapp</a>
   </div>
</div>
           </div>
        </div>
    )
}
export default Detail

export async function getServerSideProps(){
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const urunler = await response.json();
    return {
        props: {
            urunler,
          },
    }
}
