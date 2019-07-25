import { GraphQLClient } from 'graphql-request'
import {
    categoryTagsQuery,
    articlesQuery,
    singleArticleQuery,
} from './queries'

const API_URL = 'https://mobileapi.wp.pl/v1/graphql'

const client = new GraphQLClient(API_URL, { headers: {} })

export const fetchData = (query, variables) => client.request(query, variables)

export const fetchCategoryTags = cid => fetchData(categoryTagsQuery, { t: ['Article'], cid })

export const fetchArticles = (params) => fetchData(articlesQuery, { t: ['Article'], ...params })

export const fetchSingleArticle = url => fetchData(singleArticleQuery, { url })
