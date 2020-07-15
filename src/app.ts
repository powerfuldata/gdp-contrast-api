const map = new Map();
map.set('0', 'foo');
map.set(1, 'bar');

const iterator =map.entries()
map.forEach((value,key,map) => {
  console.log('map:',map)
  console.log('value:',value)
  console.log('key:',key)
})