import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {dataFetch} from '../Redux/Post/Post.actions';

const Post = props => {
  useEffect(() => {
    props.data('jahnavisananse');
    props.data('yash001dev');
  }, []);

  return (
    <>
      {/* <Text>{props.getData[1].name}</Text> */}
      {/* {console.log('getData>>>>>>>>>>>>>>>>', props.getData)} */}
      {props.getData.map((value, index) => {
        return (
          <>
            <Text style={{fontSize: 20, color: 'red'}}>
              {props.getData[index].name}
            </Text>
            <Text> {value.name + '\n' + value.id + '\n' + value.login} </Text>
          </>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  getData: state.dataFetch.item,
});

const mapDispatchToProps = dispatch => ({
  data: data => dispatch(dataFetch(data)),
  //   data2: () => dispatch(dataFetch2()),
});

// export default Post;

export default connect(mapStateToProps, mapDispatchToProps)(Post);
