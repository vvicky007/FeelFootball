import React from 'react'
import ArticleList from '../ArticleList'
import renderer from 'react-test-renderer'
describe('Article List',()=>{
    const testProps = {
        articles:{
            a:{id:'a'},
            b:{id:'b'}
        },
        articleActions:{
            lookup:jest.fn(()=>({}))
        }
    }
    it('renderscorrectly',()=>{
        const tree = renderer.create(<ArticleList {...testProps}/>).toJSON()
        
        expect(tree.children.length).toBe(2)
        expect(tree).toMatchSnapshot();
    })
   
})