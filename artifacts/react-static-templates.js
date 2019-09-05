

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/rhdt/Documents/reactTest/a-blog/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/rhdt/Documents/reactTest/a-blog/src/pages/404.js'), universalOptions)
      t_0.template = '/home/rhdt/Documents/reactTest/a-blog/src/pages/404.js'
      
const t_1 = universal(import('/home/rhdt/Documents/reactTest/a-blog/src/pages/about'), universalOptions)
      t_1.template = '/home/rhdt/Documents/reactTest/a-blog/src/pages/about'
      
const t_2 = universal(import('/home/rhdt/Documents/reactTest/a-blog/src/pages/index.js'), universalOptions)
      t_2.template = '/home/rhdt/Documents/reactTest/a-blog/src/pages/index.js'
      
const t_3 = universal(import('/home/rhdt/Documents/reactTest/a-blog/src/pages/post.js'), universalOptions)
      t_3.template = '/home/rhdt/Documents/reactTest/a-blog/src/pages/post.js'
      
const t_4 = universal(import('/home/rhdt/Documents/reactTest/a-blog/src/pages/post'), universalOptions)
      t_4.template = '/home/rhdt/Documents/reactTest/a-blog/src/pages/post'
      

// Template Map
export default {
  '/home/rhdt/Documents/reactTest/a-blog/src/pages/404.js': t_0,
'/home/rhdt/Documents/reactTest/a-blog/src/pages/about': t_1,
'/home/rhdt/Documents/reactTest/a-blog/src/pages/index.js': t_2,
'/home/rhdt/Documents/reactTest/a-blog/src/pages/post.js': t_3,
'/home/rhdt/Documents/reactTest/a-blog/src/pages/post': t_4
}
// Not Found Template
export const notFoundTemplate = "/home/rhdt/Documents/reactTest/a-blog/src/pages/404.js"

