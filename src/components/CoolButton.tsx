import * as motion from "motion/react-client"


export function CoolButton({children}:{children: React.ReactNode}){
  return(
    <div className=""
    style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}>

      <motion.button
      whileHover={{
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0px 20px 50px rgba(8,112,184,0.7)"
      }}
      style={{
        translateZ: 100,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="[perspective::1000px] [] group relative text-gray-400 border-white rounded-lg bg-black px-12 py-4 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] 
      hover:cursor-pointer">
        <span className="group-hover:text-cyan-500 transition-colors duration-300 ">{children}</span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm"></span>
      </motion.button>
      
    </div>
  )
}

export default CoolButton