import { CameraIcon, IGTVIcon, LogoIcon, MessangerIcon } from "../../icons";
import "./TopBar.css"

const TopBar = () => { 
    return (
        <div className="TopBar">
            <div className="TopBar__camera">
             <CameraIcon />
            </div>
            <div className="TopBar__logo">
             <LogoIcon />
            </div>
            <div className="TopBar__actions">
             <IGTVIcon />
             <MessangerIcon />
            </div>
        </div>
    )
}

export default TopBar;