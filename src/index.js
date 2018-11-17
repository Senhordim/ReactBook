import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import './App.scss';
import Header from './componets/Header';
import Post from './componets/Post';

const posts = [
  {
    id: 1,
    author: 'Diego Collares',
    created_at: moment()
      .startOf('day')
      .fromNow(),
    resume:
      'Sed eget efficitur mi. Morbi aliquam et lacus a ornare. Duis vitae enim et leo fermentum eleifend. Maecenas volutpat sem in erat porttitor tristique eu non eros. Suspendisse mi magna, pharetra euismod mauris eu, congue tristique enim. Morbi aliquet dolor non eros egestas pulvinar. Phasellus quis nibh arcu. Sed in feugiat ante. Donec sed nibh in elit aliquet malesuada. Nullam ultricies augue vel rutrum sodales. Aliquam erat volutpat. Pellentesque vel eros ut metus lobortis blandit',
  },
  {
    id: 2,
    author: 'Caio Molina',
    created_at: moment()
      .startOf('day')
      .fromNow(),
    resume: 'Ao infinito e alem, sempre no foco da caminhada',
  },
  {
    id: 3,
    author: 'Liane Souza',
    created_at: moment()
      .startOf('day')
      .fromNow(),
    resume: 'Bora ver o que vai dar minha gente.',
  },
];

export default class App extends Component {
  state = {
    posts,
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
