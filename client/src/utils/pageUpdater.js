import React from 'react';

const pageUpdater = () => {


  let currentPath = window.location.pathname;
  // eslint-disable-next-line no-restricted-globals
  history.replace('/empty-path');
  setTimeout(() => {
    // eslint-disable-next-line no-restricted-globals
    history.replace(currentPath)
  }, 0);

}

export default pageUpdater;