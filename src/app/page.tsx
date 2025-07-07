
import Image from "next/image"
export default function Home(){
  return(
    <div>
      <div className="flex items-center justify-center mt-2 border-b-blue-300 shadow-blue-300">
        <Image
        src="/images/shoe.png"
        width={800}
        height={200}
        alt="shoe"
        />
      </div>
      <div className="flex items-center justify-center">Get help from the community</div>
      <div>
        
      </div>
    </div>
    
  )
}