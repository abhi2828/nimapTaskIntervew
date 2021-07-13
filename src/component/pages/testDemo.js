var Form =  {userId: 10, id: 196, title: "abhay", completed: true}

var task = [{userId: 10, id: 196, title: "abhay", completed: true},
             {userId: 10, id: 198, title: "quis eius est sint explicabo", completed: true}
            ]



var check ='Not found';
task.forEach(ele => {
if(ele.title==Form.title & ele.id==Form.id)
  {
    check = ele
  }
 })
 console.log(check,'check');
if(check==='Not found'){
    task.push(Form);
   console.log(`task Add`,Form);
   console.log(`logged task : `,task);
}else{
console.log(`Already Exist `,check);

}
