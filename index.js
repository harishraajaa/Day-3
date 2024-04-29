console.log("Welcome Harish Raajaa")

//let array=[10,20,30]

// for(let i=0;i<array.length;i++)
// {
//     console.log(array[i])
// }


// for (let i in array)
// {
//     console.log(i)
// }

// array.forEach((x,y)=>{
//     console.log(x,y)
// })


let candetails=[
    {
    name:"Harish",
    email:"abc@gmail.com",
    city:"Madurai"
},{
    name:"Raajaa",
    email:"raajaa@gmail.com",
    city:"Chennai"
},{
    name:"Pavi",
    email:"pavi@gmail.com",
    city:"Salem"
}
]


// for (let can of candetails){
//     //console.log(can)
//     Object.keys(can).forEach(e=>{console.log(can[e])})
// }

// function sumfunc(a,b)
// {
//     //return a+b;
//     console.log(a+b)
// }

// let sumfunc=(a,b)=>{
//     return a+b;
// }
// console.log(sumfunc(10,50))

// for (let i in candetails){
//     console.log(i)
//     console.log(candetails[i])
// } 


// To iterate object in foreach

//console.log(Object.keys(candetails))

//Object.keys(candetails).forEach(e => {console.log(candetails[e])})

//Normal function
// function leapyearcheck(yr)
// {
//     if((yr % 400 == 0) || (yr % 100 != 0) && (yr % 4 == 0))
//     {
//       return "Leap Year";
//     }
//     else
//     {
//       return "Not a Leap Year";
//     }
// }

//Anonymous function or arrow function
let leapyearcheck=(yr=>{
    if((yr % 400 == 0) || (yr % 100 != 0) && (yr % 4 == 0))
    {
      return "Leap Year";
    }
    else
    {
      return "Not a Leap Year";
    }
})

//console.log(leapyearcheck(2020))


//IIFE - Immdieately Invoked Function Expression

// function sum(a,b)//named function
//      {return a+b
//  }

// let sum=(function sum(a,b){
//     return a+b;
// }
//  )(10,5)

// console.log(sum)


// let array = [8,7,5,3,4,2,6,10]

// let oddNum = ((array)=>{
//     let oddarray = []
//     for(let i of array)
//     {
//         if(i%2!==0)
//             oddarray.push(i)
//     }
//     return oddarray
// })(array)

// console.log(oddNum)


//console.log(a)
// let a =10
// console.log(a)

//var a = 5
if(true)
{//scope start
    let a = 10
    console.log('Inside Scope',a)
}//scope end

console.log('Outside Scope',a)


