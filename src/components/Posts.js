import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  // constructor and state not needed once you use redux
  componentWillMount() {
    // method fetchPosts gets stored as a prop
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

// validators that determine if props passed to component are expected
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

// have to get the new items from state and map it to props of component 
const mapStateToProps = state => ({
  // posts is from the index.js file in root reducers
  posts: state.posts.items,
  newPost: state.posts.item
})

// in order to connect component to redux store
export default connect(mapStateToProps, { fetchPosts })(Posts);