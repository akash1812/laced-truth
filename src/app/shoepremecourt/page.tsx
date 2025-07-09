import localFont from "next/font/local";

const minecraftFont = localFont({
  src: "../../../public/fonts/MinecraftBold-nMK1.otf"
})

export default function ShoePremeCourtPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className={`${minecraftFont.className} text-4xl font-bold mb-6`}>ShoePreme Court</h1>
      <p className="text-lg text-gray-200 mb-4">
        Welcome to the ShoePreme Court, where sneaker enthusiasts gather to discuss and vote on the latest sneaker trends.
      </p>
      <p className="text-md text-gray-500">
        Stay tuned for exciting features and updates!
      </p>
    </div>
  );
}