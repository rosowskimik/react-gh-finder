import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    login: 'rosowskimik',
    avatar_url: 'https://avatars0.githubusercontent.com/u/49301780?v=4',
    html_url: 'https://github.com/rosowskimik'
  };

  render() {
    const { login, avatar_url, html_url } = this.state;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className='btn btn-dark btn-sm my-1'
            target='_blank'
            rel='noopener noreferrer'
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
