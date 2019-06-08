import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const User = ({ user, loading, repos, getUser, getUserRepos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className='btn btn-dark my-1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Github Profile
          </a>
          <p>
            <strong>Username: </strong>
            {login}
          </p>
          {company && (
            <Fragment>
              <p>
                <strong>Company: </strong>
                {company}
              </p>
            </Fragment>
          )}
          {blog && (
            <Fragment>
              <p>
                <strong>Website: </strong>
                {blog}
              </p>
            </Fragment>
          )}
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-danger'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-dark'>Public Repos: {public_repos}</div>
        <div className='badge badge-light'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default User;
