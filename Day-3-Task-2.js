console.log("Day-3 Task-2 : Using Arrow functions")
console.log("------------------------------------")
console.log("1. Print odd numbers in an array")
let arrayodd = [8,7,5,3,4,2,6,10]
console.log("Input Array")
console.log(arrayodd)
oddNum = ((arrayodd)=>{
    let oddarray = []
    for(let i of arrayodd)
    {
        if(i%2!==0)
            oddarray.push(i)
    }
    return oddarray
})
console.log("Output Array")
console.log(oddNum(arrayodd))
console.log("------------------------------------")

console.log("2.Convert all the strings to title caps in a string array")
console.log("Input Array")
let strarrs=["harish","raajaa","pavithra"]
console.log(strarrs)
titlearr=((strarrs)=>{
    let titlearray=[]

    for(let i in strarrs){
        titlearray.push(strarrs[i][0].toUpperCase()+strarrs[i].substring(1))
    }
    return titlearray
})

console.log("Output Array")
console.log(titlearr(strarrs))
console.log("------------------------------------")

console.log("3. Sum of all numbers in an array")
console.log("Input array")
let sumarr=[10,20,30,40]
console.log(sumarr)
sumofarray=((sumarr)=>{
    let sum=0

    for(let i in sumarr){
        sum=sum+sumarr[i]
    }
    return sum
})

console.log("Sum of Array: "+sumofarray(sumarr))
console.log("------------------------------------")

console.log("4. Return all the prime numbers in an array")

console.log("Input Array")
let numarr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numarr)
primearr=((numarr)=>{

    let outarr=[]

    for (let i in numarr)
    {
        let primeflag=true
        for(let x=2;x<numarr[i];x++)
        {
            if(numarr[i]%x==0){
                primeflag=false
                break
            }
        }
        if (primeflag){
            outarr.push(numarr[i])
        }
    }

    return outarr
})

console.log("Output array:")
console.log(primearr(numarr))

console.log("------------------------------------")

console.log("5.Return all the palindromes in an array")
console.log("Input Array")
let strarr=["racecar","Harish","malayalam","Raajaa","Pavithra","Santha","nitin"]
console.log(strarr)

palinarr= ((strarr)=>{

    let outarr=[]
    for (let i in strarr)
    {
        let rev=strarr[i].split("").reverse().join("")
        if(rev==strarr[i])
        {
            outarr.push(strarr[i])
        }
    }
    return outarr
})
console.log("Output Array")
console.log(palinarr(strarr))