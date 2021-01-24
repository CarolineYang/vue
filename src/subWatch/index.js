import observe from "./observe";
let obj = {
    a:{
        b:{
            c:{
                d:4
            }
        }
    },
    e:10,
    g:[1,2,3,4]
};
observe(obj);
// obj.a.b.c.d = 5;
// obj.g.push(5);
// obj.e = 5;
// console.log(obj)