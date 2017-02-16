require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');
require('./gulp/tasks/modernizr');
// require('./gulp/tasks/build');
require('./gulp/tasks/build-github');

//Tasks:
//Run 'gulp watch' for browserSync preview and development.
//Run 'gulp icons' to create svg and png sprite from icons folder

// Run 'gulp buildGithub' in terminal to create docs folder (for Github Pages distribution).
// Uncomment build and comment build-github module if you want to create dist folder. Then run 'gulp build'.
// Run 'gulp previewDist' or 'previewGithub' to check that's everything is ok in your distribution folders.
