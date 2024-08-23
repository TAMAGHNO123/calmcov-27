import React from 'react';
import './styles/ContentHeader.css';

const ContentHeader = () => {
  return (
    <div className="content-header">
      <h1>Content</h1>
      <nav>
        <ul>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#motivational-tips">Motivational Tips</a></li>
          <li><a href="#videos">Videos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ContentHeader;
