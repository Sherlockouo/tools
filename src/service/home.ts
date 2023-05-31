import request from './index';

// http://118.31.113.37:8005/article?offset=0&size=5

export function getArticleList(offset: number, size: number) {
  return request.get({
    url: '/article',
    params: {
      offset,
      size
    }
  });
}
