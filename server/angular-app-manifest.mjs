
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/saad-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/saad-website/home",
    "route": "/saad-website"
  },
  {
    "renderMode": 2,
    "route": "/saad-website/home"
  },
  {
    "renderMode": 2,
    "route": "/saad-website/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/saad-website/resume"
  },
  {
    "renderMode": 2,
    "route": "/saad-website/contact"
  }
],
  assets: {
    'index.csr.html': {size: 4978, hash: '810c9338dedd929cabd6a763345b900facc2ed5ddcc8c4f7d95af678b59243e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: 'f88822b98b38d716573c30b1d352be142ad1c90dfca6c5de63bf3cdaa76c393d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 11706, hash: 'c57a32542e78aea78a25938229b4b0239a144881c5b00033d7b9033d50acc0b5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24609, hash: '13d630b1bcf3b89c465b8778af762822dec06fbb7fa8e068cd9daf2712a2075a', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 9583, hash: '8aaac017ac71938b05ccdd1106e45ff5612b0d3ebdf46b677b8b808491ff7c40', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13468, hash: '1eb256dc4c9cd5b2d215f44d4f2c12163478ca6b1adc78bfe6fb136cfadb2425', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
