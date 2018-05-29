module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactIIIFMediaPlayer',
      externals: {
        react: 'React'
      }
    }
  }
}
