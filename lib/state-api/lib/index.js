const DataApi = {
    getArticles:function(data){
  
      return data.reduce((acc,curr)=>{
        acc[curr.id] = curr;
        return acc;
      },{});
    },
    getAuthors:function(data){
  
      return data.reduce((acc,curr)=>{
        acc[curr.id] = curr;
        return acc;
      },{});
    }
  };
  module.exports ={DataApi} ;