module.exports = {
  theme: {    
    extend: {
      colors: {
        primary: "#fccd5d",
        
      },
    },
  },
  variants: {},
  purge: {
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
    ],
  },
  plugins: [
    
  ],
}
