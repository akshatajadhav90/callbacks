console.log("hi");

//pretend that this response is coming from the server
const students=[
    
        {name:"Akshata", subject:"js"},
        {name:"Ak", subject:"java"}
    
]

function enrollstudent(student){
    setTimeout(function(){
        students.push(student);
    }, 3000);
}


function getstudents(student){
    setTimeout(function(){
        students.push(student);
    }, 1000);
}


