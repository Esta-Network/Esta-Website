import "./css/Core.css";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import GenericFasIcon from "./componetry/GenericFasIcon";
import { faServer, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

function App() {
  return (
    
    <div className="h-screen flex justify-center items-center flex-col gap-y-6 flex-wrap dark:bg-gray-900 bg-white">
		<div className="intro">Esta Network</div>
		<div className="tagline"><p id="spam"></p></div>
    <div className="row">
    <GenericFasIcon icon={faDiscord} size="2x" tooltip="Click me to join our Discord server" />
    <GenericFasIcon icon={faShoppingCart} size="2x" tooltip="Click me to visit our store" />
    <GenericFasIcon icon={faServer} size="2x" tooltip="Click me to go to our NameMC" />
    <GenericFasIcon icon={faTwitter} size="2x" tooltip="Click me to visit our Twitter" />

     </div>
    </div>
    
  );
  
}

export default App;
