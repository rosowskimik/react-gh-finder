import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
        {repo.name}
      </a>
    </div>
  );
};

export default RepoItem;
