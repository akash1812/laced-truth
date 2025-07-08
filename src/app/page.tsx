import Image from "next/image"
import CoolButton from "@/components/CoolButton"
import Card from "@/components/Card"

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
      <div className="flex items-center justify-center mt-2"><CoolButton children="Get Started"/></div>
      <div className="flex items-center justify-center mt-2">Get help from the community</div>
      <div className="flex items-center justify-center space-x-4 ">
        <Card heading="Purchase Confidently" icon="IconUsersGroup" text="Post a picture or link of the sneaker you're planning to purchase & our community will help you make meaningful decision."/>

        <Card heading="Voting Mechanism" icon="IconArrowNarrowUp" text="Top rated trusted sneakers will take top place on the trust board, helping users to make purchase decision."/>

        <Card heading="Kick Feedback Zone" icon="IconMailExclamation" text="Drop a picture or link of your next potential sneaker cop. Our sneaker-savvy community will help you decide if it's worth the buy."/>

        <Card heading="Community Trust Score" icon="IconNumber10" text="Sneakers with the highest upvotes earn their spot at the top, giving you a clear view of what's trusted and trending."/>
        
        </div>
      <div>
      </div>
    </div>
    
  )
}