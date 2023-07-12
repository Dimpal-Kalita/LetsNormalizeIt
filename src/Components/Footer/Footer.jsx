import React from "react";
import styled from "styled-components";
import { Typography, Box, Grid, Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterContainer = styled(Box)`
  background-color: #2a1474;
  color: #fff;
  padding: 16px;
  text-align: center;
`;

const NamesContainer = styled(Grid)`
  margin-bottom: 16px;
`;

const Name = styled(Box)`
  margin-right: 16px;
  font-weight: bold;
`;

const Separator = styled.div`
  border-top: 1px solid white;
  margin: 10px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NamesContainer container justifyContent="center">
        <Grid item>
          <Name>
            <Typography>Trilasha Mazumder</Typography>
            <Grid container justifyContent="center" spacing={1}>
              <Grid item>
                <a
                  href="https://github.com/trilasha-mazumder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar>
                    <GitHubIcon />
                  </Avatar>
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/trilasha-mazumder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar>
                    <LinkedInIcon />
                  </Avatar>
                </a>
              </Grid>
            </Grid>
          </Name>
        </Grid>
        <Grid item>
          <Name>
            <Typography>Dimpal Kalita</Typography>
            <Grid container justifyContent="center" spacing={1}>
              <Grid item>
                <a
                  href="https://github.com/dimpalkalita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar>
                    <GitHubIcon />
                  </Avatar>
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/dimpalkalita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar>
                    <LinkedInIcon />
                  </Avatar>
                </a>
              </Grid>
            </Grid>
          </Name>
        </Grid>
      </NamesContainer>
      <Separator />
      <Typography variant="body2" component="p">
        @2023 LetsNormalizeIt. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
