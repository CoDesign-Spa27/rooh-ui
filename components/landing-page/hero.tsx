import { GrainGradient, Warp } from '@paper-design/shaders-react';

export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <Warp
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
          rotation={244}
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
        />
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
      </div>
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <h1 className="text-white text-5xl md:text-8xl font-melodrama font-extrabold drop-shadow-lg uppercase">
          Rooh UI
        </h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-xl font-jakarta">
          for shadcn/ui
        </p>
        {children && (
          <div className="mt-10 w-full flex justify-center">{children}</div>
        )}
      </div>
    </div>
  );
}