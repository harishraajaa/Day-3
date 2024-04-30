console.log("Day-3 Task-1 : Anonymous function & IIFE")

console.log("1. Print odd numbers in an array")
let arrayodd = [8,7,5,3,4,2,6,10]
console.log("Input Array")
console.log(arrayodd)
let oddNum = ((arrayodd)=>{
    let oddarray = []
    for(let i of arrayodd)
    {
        if(i%2!==0)
            oddarray.push(i)
    }
    return oddarray
})(arrayodd)

console.log("Output Array")
console.log(oddNum)

console.log("2.Convert all the strings to title caps in a string array")
console.log("Input Array")
let strarrs=["harish","raajaa","pavithra"]
console.log(strarrs)
let titlearr=((strarrs)=>{
    let titlearray=[]

    for(let i in strarrs){
        titlearray.push(strarrs[i][0].toUpperCase()+strarrs[i].substring(1))
    }
    return titlearray
})(strarrs)

console.log("Output Array")
console.log(titlearr)

console.log("3. Sum of all numbers in an array")
console.log("Input array")
let sumarr=[10,20,30,40]
console.log(sumarr)
let sumofarray=((sumarr)=>{
    let sum=0

    for(let i in sumarr){
        sum=sum+sumarr[i]
    }
    return sum
})(sumarr)

console.log("Sum of Array: "+sumofarray)


console.log("4. Return all the prime numbers in an array")

console.log("Input Array")
let numarr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numarr)
let primearr=((numarr)=>{

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
})(numarr)

console.log("Output array:")
console.log(primearr)

//1 is neither prime nor composite

console.log("5.Return all the palindromes in an array")
console.log("Input Array")
let strarr=["racecar","Harish","malayalam","Raajaa","Pavithra","Santha","nitin"]
console.log(strarr)

let palinarr= ((strarr)=>{

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
})(strarr)
console.log("Output Array")
console.log(palinarr)


console.log("6. Return median of two sorted arrays of the same size.")
console.log("Input Arrays:")
var ar1 = [1, 12, 15, 26];
var ar2 = [2, 13, 16, 30];
var n = ar1.length;
console.log(ar1)
console.log(ar2)

let getMedianfn=((ar1, ar2, n)=>
{

	var i = 0;
	var j = 0;
	var count;
	var m1 = -1, m2 = -1;

	for (count = 0; count <= n; count++)
	{
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}
		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		if (ar1[i] <= ar2[j])
		{
			m1 = m2;
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2;
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
})(ar1,ar2,n)

	console.log("Median is "+ getMedianfn);

console.log("7. Remove Duplicates from the Array")

console.log("Input array")
let arr = ["apple", "mango", "apple","orange", "mango", "mango","Banana","mango"];
console.log(arr) 
let removeDuplicates=((arr)=>{
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
})(arr)
console.log("Output Array:")
console.log(removeDuplicates);

console.log("8.Rotate an array by k times")
let arrtorotate = [1, 2, 3, 4, 5]; 
let K = 2;
console.log("Input Array:")
console.log(arrtorotate)
console.log("K times: "+K)
 
let Rotatearr=((a,k)=> 
{ 

	let n = a.length;  
	k = k % n; 
    let resultarr=[]
	for (let i = 0; i < n; i++) { 
		if (i < k) { 

			resultarr.push(a[n + i - k] + " ")
		} 
		else { 
			resultarr.push((a[i - k]) + " "); 
		} 
	}  
    return resultarr
})(arrtorotate,K)
console.log("Output Array:")
console.log(Rotatearr)
