export const pageRoutes = {
  index: '/',

  signin: '/sign_in',

  account: {
    index: '/account',

    edit: '/account/edit',
    changePassword: '/account/change_password',
  },

  accounts: {
    index: '/accounts',
  },

  markdownPosts: {
    index: '/markdown_posts',
  },

  codeSnippets: {
    index: '/code_snippets',
  },

  bookmarks: {
    index: '/bookmarks',
  },

  markdowns: {
    index: '/markdowns',
  },

  balance: {
    index: '/balance',
    new: '/balance/new',
  },

  closet: {
    index: '/closet',
  },
} as const;
