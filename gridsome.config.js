// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '博客',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost', // 数据类型
        path: './*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://106.75.154.132:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['gist','repo'],  // StrapiGist, StrapiRepo
        typeName: 'Strapi'
        // singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'zhanghao',
        //   password: '123456'
        // }
      }
    }
  ],
  templates: {
    StrapiRepo: [
      // {
      //   path: '/post/:id',
      //   component: './src/templates/Post.vue'
      // }
      {
        path: '/project/details/:id',
        component: './src/templates/project/Details.vue'
      }
    ]
  }
}
