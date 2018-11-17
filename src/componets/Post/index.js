import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PostHEader from './PostHeader';

import './post.scss';

const Post = ({ data }) => (
  <Fragment>
    <div className="Post-content">
      <PostHEader author={data.author} datePost={data.created_at} userId={data.id} />
      <p className="Post-resume">{data.resume}</p>
    </div>
  </Fragment>
);

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
