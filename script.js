var tbody = document.getElementById("tbody")
function fetchData(){
 promise1().then((res)=>{
    if(res)
    return promise2()
 }).then((res)=>{
    if(res)
    return promise3()
 }).then((res)=>{
       if(res){
        alert("Data displayed successfully")
       }
 })
}
function promise1(){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       fetch('https://dummyjson.com/posts').then((res)=>{
        return res.json()
       }).then((res)=>{
        let data=res.posts.map((el)=>{
            let tr =Object.entries(el).map((el1)=>`<td>${el1[0]}:${JSON.stringify(el1[1])}</td>`).join("");
           return  `<tr>${tr}</tr>`
        }).join("")
        tbody.innerHTML+=data;
        console.log(data,"data")
        resolve(true);
       })
    },1000)
 })
}
function promise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           fetch('https://dummyjson.com/products').then((res)=>{
            return res.json()
           }).then((res)=>{
            let data=res.products.map((el)=>{
                let tr =Object.entries(el).map((el1)=>`<td>${el1[0]}:${JSON.stringify(el1[1])}</td>`).join("");
               return  `<tr>${tr}</tr>`
            }).join("")
            tbody.innerHTML+=data;
            console.log(data,"data")
            resolve(true);
           })
        },2000)
     })
}
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           fetch('https://dummyjson.com/todos').then((res)=>{
            return res.json()
           }).then((res)=>{
            let data=res.todos.map((el)=>{
                let tr =Object.entries(el).map((el1)=>`<td>${el1[0]}:${JSON.stringify(el1[1])}</td>`).join("");
               return  `<tr>${tr}</tr>`
            }).join("")
            tbody.innerHTML += data;
            console.log(data,"data")
            resolve(true);
           })
        },3000)
     })
}