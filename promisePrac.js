const fs = require('fs')

// function test() {
//   return new Promise((res,rej)=>{
//     const A = fs.readFileSync('./index.html','utf-8')
//     res(A);
//   })
// }

// test()
//   .then(function () {
//     console.log(arguments[0])
//   })


let A = "";


// function readData() {
//   return new Promise((resolve,rej)=>{
//     fs.readFile('./index.html','utf-8',(err,res)=>{
//       let result = res;
//       resolve(result)
//     })
//     readData().then(()=>{console.log(arguments[0])})
//   });
// }

// readData();

// readData().then(()=>{
//   console.log(arguments[0])
// })

  // console.log(A)
  //   .then(()=>{
  //     console.log(arguments[0])
  //   })


new Promise((resolve,reject)=>{
  function readFile() {
    // console.log('Hi')
    const B = fs.readFileSync('./index.html','utf-8',(err,result)=>{
      // A += result
      // console.log(A)
    })
    return B
  }
  resolve(readFile())
})
.then((a)=>{A += a})
.then(()=>{console.log('덴 다음 A : '+A)})

console.log('전역 - ' + A)

console.log('end')

// new Promise((resolve,reject)=>{
//   resolve([1,2,3]);
// }).then((a)=>{console.log(a)})