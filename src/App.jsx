import FluidCursor from "./FluidCursor ";
import { GoogleGeminiEffectDemo } from "./lib/sections/GoogleGeminiEffectDemo";

import { BentoGridDemo } from "./lib/sections/Griddemo";
import { HeroScrollDemo } from "./lib/sections/Scrolldemo";

import { GlowingEffectDemo } from "./lib/sections/Glowingeffectdem";
import { BlackGodFooter } from "./lib/sections/BlackGodFooter";
function App() {
  return (
    <>
      <FluidCursor></FluidCursor>
      <GoogleGeminiEffectDemo></GoogleGeminiEffectDemo>
      
      {/* Add a wrapper div with disable-cursor class */}
      <BentoGridDemo></BentoGridDemo>
      <HeroScrollDemo></HeroScrollDemo>
      <GlowingEffectDemo></GlowingEffectDemo>

      

      <BlackGodFooter></BlackGodFooter>
    </>
  );
}

export default App;
