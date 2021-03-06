import { StyleSheet } from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  containerMySeries: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: 'red',
    margin: 12,
    padding: 12,
    borderRadius: 4,
  },
  TESTTEXT: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: "white",
  },
  SeriesImage: {
    width: '100%',
    height: 220,
  },
  myStuffImage: {
    width: '100%',
    height: 220,
  },
  featuredImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  Thumbnail: {
    height: '100%',
    width: '100%',
  },
  thumbnailTitle: {
    color: "white",
    fontFamily: "Avenir-Black"
  },
  thumbnailSubtitle: {
    color: "#D3D3D3", 
    fontFamily: "Avenir",
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 20,
    fontFamily: 'Avenir',
    color: "white",
  },
  categoriesElement: {
    flex: 1,
    paddingTop: 25
  },
  categoriesScroll: {
    height: 180,
    marginTop: 10
  },
  linearGradient: {
    flex: 1,
  },
  episodeTitleUnwatched: {
    fontFamily: "Avenir-Black", 
    color: "white"
  },
  episodeTitleWatched: {
    fontFamily: "Avenir-Black", 
    color: "#546E7A"
  },
  episodeDescriptionUnwatched: {
    fontFamily: "Avenir-Medium", 
    color: "white"
  },
  episodeDescriptionWatched: {
    fontFamily: "Avenir-Medium", 
    color: "#546E7A"
  },
  watchedText: {
    marginTop: 20,
    marginRight: 10,
    justifyContent: "flex-start",
    backgroundColor: "rgba(144,164,174,0.2)",
    alignSelf: 'flex-end',
    color: "#546E7A"
  },
  videoWatched: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "50%" ,
  }
};

export {styles};
