import React from 'react';
import PropTypes from 'prop-types';
import './postHeader.scss';

const PostHeader = ({ author, datePost, userId }) => (
  <div className="PostHeader-content">
    <img src={`https://randomuser.me/api/portraits/men/${userId}.jpg`} alt="user" />
    <div className="PostHeader-content-info">
      <h2>{author}</h2>
      <p>{datePost}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  datePost: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default PostHeader;
