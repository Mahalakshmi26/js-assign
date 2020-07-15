var a=5;
console.log(a);
var name='xxx';
console.log(name);//globally it can used
//let
{
    let name='yyy';//locally it vl be used
    //name='zzz';
    console.log(name);
}
console.log(name);

//const
const city=["xxx","ssss"];
console.log(city);
city.push=('bvf');
console.log(city);
