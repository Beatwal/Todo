let input=document.querySelector(".task-input")  //this is declar input variable
let submit=document.querySelector(".add-btn") //this is submit declar submit btn variable
let ul=document.querySelector(".task-list") // thsi is ul variable for add li
let h3=document.querySelector("h3") //this is empty to do sentence show declar variable
let form=document.querySelector("form") //declare form varibale for rest the from at the end of submit form
let todolist=[]
todolist=JSON.parse(localStorage.getItem("todo"))||[]//make balank list for data storage

if (todolist.length<=0){
   h3.style.display="initial"
}
else{
   todolist.forEach((e)=>{//we make loop foor todolist array for each array we can do 
                
                
                let li=document.createElement("li")// we create li for add tasks and can show task to user
        li.classList.add("task-item") //add li to class for css 
        let span=document.createElement("span") //we creatte span for show task text
        span.classList.add("task-text")//
        span.textContent=`${e.text}`
        let button=document.createElement("button")
        button.classList.add("delete-btn")
        button.textContent="x"
        li.appendChild(span)
        li.appendChild(button)
        ul.appendChild(li)


        h3.style.display="none"
        if (e.complete===true){
                    span.classList.add("linethrough")
                    li.classList.remove("task-item")
                    li.classList.add("completed")
                }
        span.addEventListener("click",(e)=>{
            
            span.classList.toggle("linethrough")
            
            if(span.classList.contains("linethrough")){
                let task=e.target.innerHTML
               
                todolist.forEach((data)=>{
                    if(data.text===task){
                        data.complete=true
                        if(data.complete===true){

                            span.classList.add("linethrough")
                        }
                        localStorage.setItem("todo",JSON.stringify(todolist))
                    }
                   
                })
            }
            else{
                let task=e.target.innerHTML
               
                todolist.forEach((data)=>{
                    if(data.text===task){
                        data.complete=false
                        localStorage.setItem("todo",JSON.stringify(todolist))
                    }
                   
                })
                
                
            }
            
        })
        button.addEventListener("click",(e)=>{
            let dele=span.textContent
           todolist.forEach((e)=>{
           if(e.text===dele){
            
           let foundobj= todolist.find((obj)=>{
              return obj.text===dele})
              if(foundobj){
               let i=todolist.findIndex((index)=>{
                return index.text===dele
               })
               todolist.splice(i,1)
               localStorage.setItem("todo",JSON.stringify(todolist))
               li.remove()
              }

                
           
            if (todolist<=0){
                 h3.style.display="initial"

            }
           
           }
           })
         
        })
        })
        }
submit.addEventListener("click",(e)=>{//submit btn add event listener
    e.preventDefault() //prevent default for prevent restart the page
    
  
    if(input.value.trim().length>3){// first check is input is blank or less then three later
        const task={ //then create an object for store data and then this object push to array
            id:Date.now(), // for unique id i just use date.now() which give you unique id 
            text:input.value.trim(),//text gonnna be user input that we have to clear at the first and the end of space 
            complete:false //by default it's fault
            
        
        }// over all this is an obj
        todolist.push(task)
        
        localStorage.setItem("todo",JSON.stringify(todolist))
        ul.innerHTML=""  
        localStorage.setItem("todo",JSON.stringify(todolist))
      
        
        todolist.forEach((e)=>{//we make loop foor todolist array for each array we can do 
                
                let li=document.createElement("li")// we create li for add tasks and can show task to user
        li.classList.add("task-item") //add li to class for css 
        let span=document.createElement("span") //we creatte span for show task text
        span.classList.add("task-text")//
        span.textContent=`${e.text}`
        let button=document.createElement("button")
        button.classList.add("delete-btn")
        button.textContent="x"
        li.appendChild(span)
        li.appendChild(button)
        ul.appendChild(li)
        if (e.complete === true) {
    span.classList.add("linethrough")
    li.classList.remove("task-item")
    li.classList.add("completed")

}


        h3.style.display="none"
        span.addEventListener("click",(e)=>{
            span.classList.toggle("linethrough")
            if(span.classList.contains("linethrough")){
                let task=e.target.innerHTML
               
                todolist.forEach((data)=>{
                    if(data.text===task){
                        data.complete=true
                        console.log(data.complete)
                    }
                   
                })
            }
            
        })
         button.addEventListener("click",(e)=>{
            let dele=span.textContent
           todolist.forEach((e)=>{
           if(e.text===dele){
            
            let foundobj=todolist.find((obj)=>{
              return obj.text===dele})
              if(foundobj){
               let i=todolist.findIndex((index)=>{
                return index.text===dele
               })
               todolist.splice(i,1)
               localStorage.setItem("todo",JSON.stringify(todolist))
               li.remove()
              }

                
            
            if (todolist<=0){
                 h3.style.display="initial"

            }
           
           }
           })
         
        })
        })
        }
    form.reset()
    
    
})



