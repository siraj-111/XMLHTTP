const button=document.querySelector("#btn")
const target=document.querySelector("#root")





button.addEventListener('click',fetchData)



function viewUser(i){
   viewData(i)
}



function viewData(id){
  const request=new XMLHttpRequest()
  request.open('GET',`https://jsonplaceholder.typicode.com/users/${Number(id.id)}`)
  request.responseType='json'
  request.onload=()=>{
    console.log(request.response)
    const name=document.createElement('p')
    const email=document.createElement('small')
    const line=document.createElement('hr')
    email.innerHTML=request.response.email
    name.innerHTML=request.response.name
    const div=document.getElementById(`div${id.id}`)

    div.appendChild(name)
    div.appendChild(email)
    div.appendChild(line)
    
  }
  request.send()
}


function fetchData(){
  const req=new XMLHttpRequest()
  req.open('GET','https://jsonplaceholder.typicode.com/users')
  req.responseType="json"
  req.onload=async()=>{
    renderData(req.response)
  }
  req.send()
}

function renderData(data){
  for (const iterator of data) {
    const el=document.createElement('div')
    el.setAttribute('id',iterator.id)
    const btn=document.createElement('button')
    const p=document.createElement('div')
    p.setAttribute('id',`div${iterator.id}`)
    btn.innerHTML="View"
    btn.onclick=function(){
      viewUser(this)
    }
    btn.setAttribute('id',iterator.id)
    const h6=document.createElement('h6')
    h6.innerText=iterator.name
    el.appendChild(h6)
    el.append(p)
    el.appendChild(btn)
    target.appendChild(el)
   
  }
}