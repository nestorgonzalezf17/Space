
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Space/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Space"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Space/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Space/productos"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Space",
    "route": "/Program%20Files/Git/Space/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6054, hash: 'fa1bbe58b05ce02da272d4cac6c6189d1f94be34e6af1f240300cc0c0e8e66cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1956, hash: '180ea070a288aacbc0118e18f7a44bbd06a4aaf8cc9de0b277efcca325e0f797', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3FI4SKXE.css': {size: 231036, hash: 'T2M36qz5AdU', text: () => import('./assets-chunks/styles-3FI4SKXE_css.mjs').then(m => m.default)}
  },
};
