import React from 'react';
import "./Gallery.css"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {EffectCoverflow, Navigation, Pagination, Scrollbar,} from 'swiper';
// import Carousel from 'react-bootstrap/Carousel'
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
// import "swiper/components/effect-coverflow/effect-coverflow.scss"


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    width: "75%",
    height: "100%"
  },


}));


 
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div id="Gallery" className="backgroundImage">
    <div className={classes.root}>
   
      <GridList cellHeight={260} className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile className={classes.gridListTile} key={tile.img} cols={tile.cols || 1}>
            <img className="image" src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}







  