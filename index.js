const agg = (str) => {
  const arr = str.split(' ');
  
  const ans = arr.map(a => Array.from(a) )
    .map(a => a.map(x => parseInt(x) ))
    .map(a => a.reduce((x,y) => x+y));
  
  const out = [];
  
  for(let i=0; i<ans.length; i++) {
    out.push(`${ans[i]} ${arr[i]}`); 
  }  
  
  out.sort();
  
//   for(let i=0; i<ans.length; i++) {
//       out[i]=out[i].split(' ')[1]; 
//    }
  
  return out;
}

console.log(agg("103 123 4444 99 2000"));
