import React from "react";
import { connect } from "react-redux";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList, ImageBackground,ScrollView} from 'react-native';
import Pie from 'react-native-pie'

import { getPopularMovies } from "../redux/actions/Movies";
import Moment from 'moment';

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };

    this.isAttempting = false;
  }
  onChangeText(text) {
    this.setState({ searchQuery: text })
    this.props.getPopularMovies(text);
  }

  handleLoadMore = () => {
    this.props.getPopularMovies(this.state.searchQuery,this.props.pageIndex+1)
  }

  moviesList(movie) {
    var chartColor = '#8E8E8E';
    if (movie.vote_average * 10 > 79)
      chartColor = '#00FF00';
    else if (movie.vote_average * 10 > 69)
      chartColor = '#009900'
    else if (movie.vote_average * 10 > 40)
      chartColor = '#d2d531';
    else
      chartColor = '#f00';

      const date = Moment(movie.release_date).format('DD MMM YYYY');

    return (
      <View style={{ width: '45%', margin: 10, borderWidth: 0.5, borderRadius: 10, borderColor: 'grey' }}>
        <ImageBackground source={{ uri: "https://image.tmdb.org/t/p/w300/" + movie.poster_path }} style={{ height: 250, width:'auto' }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
          <View style={{ position: "absolute", bottom: -20, left: 10, backgroundColor: '#0b065b', justifyContent: 'center', borderRadius: 30 }}>
            <Pie
              radius={20}
              innerRadius={15}
              sections={[
                {
                  percentage: movie.vote_average * 10,
                  color: chartColor,
                },
              ]}
              backgroundColor="#ddd"
            />
            <Text style={{ position: 'absolute', color: 'white', justifyContent: 'center', alignSelf: 'center', fontWeight: '500' }}>{movie.vote_average * 10}</Text>
          </View>
        </ImageBackground>
        <View style={{ margin: 10,marginTop:20, alignItems: 'center' }}>
          <Text style={{textAlign: 'center',fontWeight:'500',fontSize:12}}>{movie.title}</Text>
          <Text style={{color:'gray',fontSize:10}}>{date}</Text>
        </View>
      </View>

    )
  }

  render() {
    return (
      <View style={{paddingBottom:100}}>
        <SafeAreaView />
        <View>
          <TextInput
            style={{ borderWidth: 0.5, height: 30, margin: 10, borderRadius: 5, borderColor: 'gray', paddingLeft: 10 }}
            placeholder="search"
            onChangeText={(text) => this.onChangeText(text)}
            value={this.state.searchQuery}
          />
        </View>
        <FlatList
          data={this.props.movieList}
          numColumns={2}
          onEndReached={this.handleLoadMore}
          renderItem={({ item }) => this.moviesList(item)}
        />
        
      </View>


    );
  }
}

const mapStateToProps = state => {
  return {
    movieList: state.movies.movies,
    pageIndex: state.movies.page,
    moviesTest:state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPopularMovies: (searchMovie, page) => {
      dispatch(getPopularMovies(searchMovie, page));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
