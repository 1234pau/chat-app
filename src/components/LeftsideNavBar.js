import "./style/leftSideNavBar.css"
import { BsChatText, BsGear, BsVinyl} from "react-icons/bs";
import Avatar from "./Avatar";

const LeftSideNavBar = () => {
  return (
    <div className="LeftSideNavBar">
      <div className="center">
        <div className="topButtons">
          <div className="conversations">
            <BsChatText />
          </div>
          <div className="status">
            <BsVinyl />
          </div>
        </div>
        <div className="bottomButtons">
          <div className="setings">
            <BsGear />
          </div>
          <div className="profile">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideNavBar
