import { Navbar } from "../Navbar/Navbar";
import { SlideSwipper } from "../SlideSwipper/SlideSwipper";
import "./MainContent.css";


export const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="container">
        <Navbar />
        <div className="call-actions">
        <SlideSwipper/>
        </div>
      </div>
    </div>
  );
};
