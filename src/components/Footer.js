import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from '@material-ui/icons/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';





import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />  <LinkedInIcon /> <CallIcon /> <GitHubIcon /> <TelegramIcon />
      </div>
      <p> &copy; 2023 cyrellLaguilles@gmail.com</p>
    </div>
  );
}

export default Footer;
