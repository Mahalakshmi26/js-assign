console.time("time");
console.group('aaa');
console.log('javascript various type of console functions');
console.error("error page");
console.warn("warn page");
console.groupEnd('aaa');
//console.clear();
console.log('%c JAVASCRIPT','COLOR:GREEN');
var x= {name:"aaa",place:"xxx",age:"12"};
var y= {name:"abc",place:"xyx",age:"22"};
var z= {name:"def",place:"xzx",age:"82"};
console.table({x,y,z});

console.timeEnd("time");
for(var i=0;i<10;i++)
console.count(i);
