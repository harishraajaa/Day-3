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
