import { GrainGradient, Warp } from '@paper-design/shaders-react';
import {motion} from 'motion/react'
export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-black">
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        > <Warp
   colors={["#071313", "#47c5ff", "#000000"]}
          proportion={0.89}
          softness={0.55}
          distortion={0}
          swirl={1}
          swirlIterations={3.4}
          shape="edge"
          shapeScale={0.82}
          speed={4.6}
          scale={0.5}
          rotation={10}
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
        />

        </motion.div>
       
        {/* <GrainGradient
          width={1920}
          height={1080}
          colors={["#386dff", "#878787", "#1fffe9"]}
          colorBack="#000a0f"
          softness={1}
          intensity={0.28}
          noise={0.18}
          shape="sphere"
          speed={2}
          scale={2.16}
          offsetX={1}
          offsetY={-0.84}
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
        /> */}
    
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          aria-hidden="true"
          // Custom radial gradient: extra wide, bottom-left origin, transparent to blue to white.
          className="absolute z-30 inset-0 [background:radial-gradient(200%_140%_at_0%_100%,transparent_50%,#47c5ff,var(--color-white)_100%)]"
        ></motion.div>
        
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 z-40 opacity-50 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
      </div>
      <div className="relative z-50 flex flex-col items-center text-center gap-4">
         

        <h1 className="flex items-center gap-2 text-white text-5xl md:text-8xl font-melodrama font-extrabold drop-shadow-lg uppercase">
          Ro <span className=""><svg width="70" height="131" viewBox="0 0 70 131" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="95.8045" r="35" fill="white" />
            <path d="M33.2987 74.051C35.4049 69.8867 37.5111 65.7223 39.6173 61.558C38.5644 61.0253 37.6378 60.5126 36.792 60.0007C34.8037 58.7965 33.2363 57.5728 32.2143 56.3768C31.2812 55.2573 31.0577 54.5886 31.0048 53.8442C30.9471 53.0906 31.2391 51.7565 32.0415 50.1222C33.6484 46.8071 36.6736 42.9971 39.69 38.885C42.6858 34.7171 46.066 30.1707 48.0033 23.7898C50.1698 17.4551 48.535 8.84502 44.5933 3.71717C43.6001 2.30527 42.6842 1.20993 41.5489 7.62939e-06C38.155 3.203 34.7611 6.40601 31.3671 9.609C32.0759 10.3635 32.5998 11.0002 33.1173 11.736C35.0578 14.6145 35.4344 16.7023 34.5613 19.8768C33.6562 23.0463 31.2172 26.7838 28.3989 30.6079C25.5887 34.515 22.2503 38.4068 19.4394 44.0241C18.0922 46.8314 16.8139 50.3748 17.0246 54.5887C17.1975 58.8177 19.2392 62.8086 21.5627 65.4622C24.1509 68.4384 26.7378 70.2496 29.5405 71.9763C30.7299 72.696 31.961 73.374 33.2987 74.051Z" fill="white" />
            <circle cx="21" cy="84.8045" r="6" fill="#000000" />
            <circle cx="48" cy="84.8045" r="6" fill="#000000" />
          </svg>
</span>H UI
        </h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-xl font-jakarta">
          for shadcn/ui
        </p>
        <button className="button">
          <div className="blob1"></div>
          <div className="blob2"></div>
          <div className="inner font-oswald">Get Started</div>
        </button>
        {children && (
          <div className="mt-10 w-full flex justify-center">{children}</div>
        )}
      </div>
    </div>
  );
}