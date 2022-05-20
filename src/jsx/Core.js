import "./css/Core.css";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import GenericFasIcon from "./componetry/GenericFasIcon";
import { faServer, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TypeAnimation from "react-type-animation";
import { Tooltip } from "@mui/material";
// todo: add the fucking video gay background i cba rn

function App() {
  return (
    
    <div className="h-screen flex justify-center items-center flex-col gap-y-6 flex-wrap dark:bg-gray-900 bg-white">
    <img alt="Logo" src="/logo.png" width="256px" />
		<div className="intro">Esta Network</div>
    <TypeAnimation className="Core-Typewrite" cursor={true} bold={true} sequence={["Practice & AI Practice"]} wrapper="h1" />
    <div className="row gap-x-6">
    <Tooltip title="Click me to visist our Discord" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://discord.esta.land">
         <GenericFasIcon size="2x" icon={faDiscord} color="white" />
       </a>
    </Tooltip>
    <Tooltip title="Click me to visit our Store" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://store.esta.land">
         <GenericFasIcon size="2x" icon={faShoppingCart} color="white" />
       </a>
    </Tooltip>
    <Tooltip title="Click me to visit our NameMC" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://namemc.com/esta.land">
         <GenericFasIcon size="2x" icon={faServer} color="white" />
       </a>
    </Tooltip>
    <Tooltip title="Click me to go to our Twitter" placement="top">
      <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/esta_network">
         <GenericFasIcon size="2x" icon={faTwitter} color="white" />
       </a>
    </Tooltip>
     </div>
    </div>
    
  );
  
}

export default App;
