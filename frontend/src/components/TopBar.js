import React from "react";

import classes from "./TopBar.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GrFacebookOption} from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const TopBar = () => {
  return (
    <section className={classes.section}>
      <div className={classes.communication}>
        <div>
          <span className={classes.iconMap}><FaMapMarkerAlt /></span>
          <span className={classes.textMap}>Esenler/ İSTANBUL </span>
        </div>
        <div>
          <span  className={classes.iconMail}><GrMail /></span>
          <span className={classes.textMail}>info@desaambalaj.com</span>
        </div>
      </div>
      <div>
        <span className={classes.socialMediaParent}>Sosyal Medya:</span>
        <a href="#" className={classes.socialMedia}><GrFacebookOption  className={classes.icon} /></a>
        <a href="#" className={classes.socialMedia}><AiOutlineTwitter  className={classes.icon} /></a>
        <a href="#" className={classes.socialMedia}><AiOutlineInstagram className={classes.icon} /></a>
      </div>
    </section>
  );
};

export default TopBar;
