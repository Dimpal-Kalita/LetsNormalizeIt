import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { Box, TextField } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h1>For Business</h1>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>healthPlan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h1>Resources</h1>
            <a href="/resource">
              <p>Resource Center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h1>Partners</h1>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h1>Company</h1>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <Box mb={1}>
              <TextField
                variant="outlined"
                multiline
                placeholder="Get in touch with us"
                sx={{
                  color: "blue",
                  background: "white",
                  width: "140%",
                }}
                rows={2}
                fullWidth
                required
              />
            </Box>
            <div className="socialmedia">
              <p>
                <FaGithub className="icons" style={{ height: 25, width: 25 }} />
              </p>
              <p>
                {" "}
                <FaInstagram className="icons" style={{ height: 25, width: 25 }} />
              </p>
              <p>
                {" "}
                <FaYoutube className="icons" style={{ height: 25, width: 25 }} />
              </p>

              <p>
                {" "}
                <FaLinkedin className="icons" style={{ height: 25, width: 25 }} />
              </p>
              <p>
                {" "}
                <FaTwitter className="icons" style={{ height: 25, width: 25 }} />
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} LetsNormalizeIt. All rights reserved.</p>
          </div>

          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy Policy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
