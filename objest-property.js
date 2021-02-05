const students=[
    {id:21,name:'omar sunny'},
    {id:31,name :'Manna'},
    {id:41,name:'Mouri'},
    {id:71,name:'Deepjol'}
];
// const nameArray=[];
// for(let i=0;i<students.length;i++){
//     const elements=students[i];
//     const naMe=elements.name;
//     nameArray.push(naMe);
// }
// console.log(nameArray);

const names=students.map(s=>s.name);

const bigger=students.filter(s=>s.id>40);
console.log(bigger);