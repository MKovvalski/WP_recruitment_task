export const categoryTagsQuery = `
   query getCategoryTags ($t: [ArticleType]!, $cid: Int!) {
      articles (t: $t, cid: $cid) {
        tags
      }
   }
`

export const articlesQuery = `
    query getArticles ($t: [ArticleType]!, $cid: Int!, $tags: [String]) {
        articles (t: $t, cid: $cid, tags: $tags) {
            title
            author {
                name
            }
            id
            img {
                title
                url
                h
                w
                author
                source
                description
                   
            }
        }
    }
`

export const singleArticleQuery = `
    query getSingleArticle ($url: String!) {
        article (url: $url) {
            title
            author {
                name
            }
            id
            img {
                title
                url
                h
                w
                author
                source
                description   
            }
            body {
                data
            }
        }
    }
`