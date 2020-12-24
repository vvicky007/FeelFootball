import {DataApi} from 'state-api';
import {data} from '../testdata';

describe('DataApi',()=>{
  it('exposes articles as an object',()=>{
    const articles = DataApi.getArticles(data.articles);
    const articleid = data.articles[0].id;
    const articletittle = data.articles[0].title;
    
    expect(articles).toHaveProperty(articleid);
    expect(articles[articleid].title).toBe(articletittle);
  });
  it('exposes authors as an object',()=>{
    const authors = DataApi.getAuthors(data.authors);
    const authorid = data.authors[0].id;
    const auth_web = data.authors[0].website;
    expect(authors).toHaveProperty(authorid);
    expect(authors[authorid].website).toBe(auth_web);
  });
});