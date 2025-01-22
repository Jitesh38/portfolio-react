import { Squares } from "./ui/squares-background";

export function SquaresDemo() {
  return (
    <div className="space-y-8 w-full">
      <div className="fixed w-full md:top-0 overflow-hidden bg-[#060606] z-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
    </div>
  );
}
