//your JS code here. If required.


let num=document.getElementById("ip").value;
let btn=document.getElementById("btn")


function myPromise1(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(num);
		},2000)
	})
}

function myPromise2(data){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(data*2);
		},2000)
	})
}

function myPromise3(data){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(data-3);
		},1000)
	})
}

function myPromise4(data){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(data/2);
		},1000)
	})
}

function myPromise5(data){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(data+10);
		},1000)
	})
}


let opt=document.getElementById("output")

btn.addEventListener('click', function() {
  let num = Number(document.getElementById("ip").value); // Get fresh input value on click

  myPromise1(num)
  .then((res)=>{
	  opt.textContent=res;
	  return myPromise2(res);
  }).then((res)=>{
	  opt.textContent=res;
	  return myPromise3(res);
  }).then((res)=>{
	  opt.textContent=res;
	  return myPromise4(res);
  }).then((res)=>{
	  opt.textContent=res;
	  return myPromise5(res);
  }).then((res)=>{
	  opt.textContent=res;
  })
   
});

