import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    marginTop: "0rem",
  },
  sliderContainer: {
    width: "70%",
    position: "relative",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "700px",
    cursor: "pointer",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",
  },
  arrowButton: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
  },
}));

const MaleArticle = () => {
  const headingStyle1 = {
    marginTop: "6rem",
    marginLeft: "3rem",
  };
  const headingStyle2 = {
    marginTop: "2rem",
    marginLeft: "3rem",
  };
  const classes = useStyles();

  const images = [
    {
      id: 1,
      src: "../../src/assets/images/img1.jpeg",
      alt: "Image 1",
      label: "Image 1",
    },
    {
      id: 2,
      src: "../../src/assets/images/img2.webp",
      alt: "Image 2",
      label: "Image 2",
    },
    {
      id: 3,
      src: "../../src/assets/images/img3.png",
      alt: "Image 3",
      label: "Image 3",
    },
  ];

  const images2 = [
    {
      id: 0,
      src: "../../src/assets/images/me1.webp",
      alt: "Image 0",
      label: "Image 0",
    },
    {
      id: 1,
      src: "../../src/assets/images/me2.png",
      alt: "Image 1",
      label: "Image 1",
    },
    {
      id: 2,
      src: "../../src/assets/images/me3.png",
      alt: "Image 2",
      label: "Image 2",
    },
  ];

  const [currentImage, setCurrentImage] = React.useState(images2[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const handlePrevImage = () => {
    const currentIndex = images2.findIndex((image) => image.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + images2.length) % images2.length;
    setCurrentImage(images2[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images2.findIndex((image) => image.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % images2.length;
    setCurrentImage(images2[nextIndex]);
  };

  return (
    <div>
      <Typography variant="h2" style={headingStyle1}>
        Introduction
      </Typography>
      <Typography variant="body1" style={{ marginLeft: "3rem", marginTop: "1rem" }}>
        We as a developer team of LetsNormalizeIt (), have a goal of making resources
        available in one place for better sex education. The website provides people with
        the knowledge, skills, and motivation they need to make healthy sex and sexuality
        decisions.
      </Typography>
      <Typography variant="h3" style={headingStyle2}>
        Why sexual hygiene and awareness is important?
      </Typography>
      <Typography variant="body1" style={{ marginLeft: "3rem", marginTop: "1rem" }}>
        There are two major reasons why maintaining good sexual hygiene is so important
        for your overall health. For starters, it lowers the risks of acquiring infections
        down there, which can lead to more serious problems like infertility. Second, it
        reduces the risk of developing a wide range of sexually transmitted infections.
        The majority of people learn about sexuality and sex at a young age. You could
        talk to your parents, siblings, teachers, or mentors about it. You might also find
        it on your own. Gender and genitalia are discussed. You learn what sex is and the
        dangers it poses. Pregnancy, sexually transmitted diseases (STIs), and sexual
        abuse are all risks. It is critical to gain as much knowledge about sex as
        possible. You&apos;ll be better prepared to make excellent decisions if
        you&apos;re well-informed.
      </Typography>

      <div className={classes.root}>
        <Grid container spacing={0.5}>
          {images.map((image) => (
            <Grid item xs={4} key={image.id}>
              <div className={classes.imageContainer}>
                <img src={image.src} alt={image.alt} className={classes.image} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <Typography variant="h4" style={headingStyle2}>
        Tips for a positive body change
      </Typography>

      <Typography variant="body1" style={{ marginLeft: "3rem", marginTop: "1rem" }}>
        If you’re unhappy with your body, whether it’s the size of your penis or the look
        of any other part of you, try these helpful tips for feeling better about
        yourself:<br></br>• Focus on the characteristics and body parts you do like, such
        as broad shoulders or a nice smile.<br></br>• Maintain a healthy weight and
        incorporate strength training into your exercise routine. If you look fit and
        healthy, you may feel better about yourself.<br></br>• Don’t become consumed by
        penis size. You can be a satisfying sexual partner regardless of the size of your
        peni<br></br>• Don’t compare yourself to athletes, models, and actors. You’ll
        develop an unhealthy and unrealistic image of what is normal and how you should
        look.<br></br>• Spend more time and energy on pursuits you find rewarding, whether
        it’s sports, hobbies, traveling, or other activities. Lasting self-esteem comes
        from nonphysical traits, such as creativity, intelligence, and your values.
      </Typography>

      <div className={classes.root}>
        <div className={classes.sliderContainer}>
          <div
            className={classes.imageContainer}
            onClick={() => handleImageClick(currentImage)}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={classes.image}
            />
          </div>
          <div className={classes.navigation}>
            <Button onClick={handlePrevImage} className={classes.arrowButton}>
              <ArrowBackIos />
            </Button>
            <Button onClick={handleNextImage} className={classes.arrowButton}>
              <ArrowForwardIos />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleArticle;
