window.onload=()=>{

    let add=document.getElementById('add');

    const Cpp=[{
        Name:"Shashank aggarwal",
        Phone:9818271462,
        Course:'C++ Launchpad'
    },{
        Name:"Siddharth pawar",
        Phone:9953435456,
        Course:'C++ Launchpad'
    }]
    const Python=[{
        Name:"Shivankar Vaish",
        Phone:9817452197,
        Course:'Python for Beginners'
    },{
        Name:"Yash Tripathi",
        Phone:9999554218,
        Course:'Python for Beginners'
    }]
    const java=[{
        Name:"Bhagesh Joshi",
        Phone:7584614735,
        Course:"Java for beginners"
    },{
        Name:"Sushant",
        Phone:7548216579,
        Course:'Java for beginners'
    }]
    const webd=[{
        Name:"Shashank aggarwal",
        Phone:9315360831,
        Course:'Web Development'
    },{
        Name:"Sarthak jain",
        Phone:9953435456,
        Course:'Web Development'
    },{
        Name:"Bhagesh Joshi",
        Phone:7584614735,
        Course:"Web Development"
    },{
        Name:"Sushant",
        Phone:7548216579,
        Course:'Web Development'
    }]
    const anddev=[{
        Name:"Kartik Verma",
        Phone:9999100012,
        Course:'Android Development'
    },{
        Name:"Mansi Gupta",
        Phone:7854569999,
        Course:'Android Development'
    }]
    const algop=[{
        Name:"Prakhar Vashisth",
        Phone:9955661487,
        Course:'Algo ++'
    },{
        Name:"Saumya Gupta",
        Phone:7854569999,
        Course:'Algo ++'
    }]    
    const algoj=[{
        Name:"Bhagesh Joshi",
        Phone:7584614735,
        Course:"Algo.java"
    },{
        Name:"Sushant",
        Phone:7548216579,
        Course:'Algo.java'
    }]    
    const ml=[{
        Name:"Kartik Verma",
        Phone:9999100012,
        Course:'Machine Learning'
    },{
        Name:"Shashank aggarwal",
        Phone:9315360831,
        Course:'Machine Learning'
    }]


add.onclick=()=>{
    let fname=document.getElementById('fname')
    let sname=document.getElementById('sname')
    let phone=document.getElementById('phone')
    let container2=document.getElementById('container2')
    let course=document.getElementById('course')
    
        if(course.value=='C++ Launchpad'){
            Cpp.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"C++ Launchpad"
            })
            let str=''
            for(let j=0;j<Cpp.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${Cpp[j].Name}</div>
                <div><span class="det">Phone:</span>${Cpp[j].Phone}</div>
                <div><span class="det">Course:</span>${Cpp[j].Course}</div>
                </div>`+"\n"
    
            }
            container2.innerHTML="<h3>Enrolled Students in C++ Launchpad Summer Batch</h3>"+"<br>"+str;
            
        }
        else if(course.value=='Python Beginners'){
            Python.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"Python for Beginners"
            })
            let str=''
            for(let j=0;j<Python.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${Python[j].Name}</div>
                <div><span class="det">Phone:</span>${Python[j].Phone}</div>
                <div><span class="det">Course:</span>${Python[j].Course}</div>
                </div>`+"\n"
            }
            container2.innerHTML="<h3>Enrolled Students in Python for Beginners Summer Batch</h3><br>"+str;
        } 
        else if(course.value=='Java Beginners'){
            java.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"Java for Beginners"
            })
            let str=''
            for(let j=0;j<java.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${java[j].Name}</div>
                <div><span class="det">Phone:</span>${java[j].Phone}</div>
                <div><span class="det">Course:</span>${java[j].Course}</div>
                </div>`+"\n"
            }
            container2.innerHTML="<h3>Enrolled Students in Java for Beginners Summer Batch</h3><br>"+str;
        }
        else if(course.value=='Full stack development'){
            webd.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"Web Development"
            })
            let str=''
            for(let j=0;j<webd.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${webd[j].Name}</div>
                <div><span class="det">Phone:</span>${webd[j].Phone}</div>
                <div><span class="det">Course:</span>${webd[j].Course}</div>
                </div>`+"\n"
            }
            container2.innerHTML="<h3>Enrolled Students in Web Development Summer Batch</h3><br>"+str;
        } 
        else if(course.value=='Android development'){
            anddev.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"Android development"
            })
            let str=''
            for(let j=0;j<anddev.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${anddev[j].Name}</div>
                <div><span class="det">Phone:</span>${anddev[j].Phone}</div>
                <div><span class="det">Course:</span>${anddev[j].Course}</div>
                </div>`+"\n"
            }
            container2.innerHTML="<h3>Enrolled Students in Android Development Summer Batch</h3><br>"+str;
        } 
        else if(course.value=='Algo++'){
            algop.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"Algo ++"
            })
            let str=''
            for(let j=0;j<algop.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${algop[j].Name}</div>
                <div><span class="det">Phone:</span>${algop[j].Phone}</div>
                <div><span class="det">Course:</span>${algop[j].Course}</div>
                </div>`+"\n"
            }
            container2.innerHTML="<h3>Enrolled Students in Algo++ Summer Batch</h3><br>"+str;
        } 
        else if(course.value=='Algo.java'){
            algoj.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"Algo.java"
            })
            let str=''
            for(let j=0;j<algoj.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${algoj[j].Name}</div>
                <div><span class="det">Phone:</span>${algoj[j].Phone}</div>
                <div><span class="det">Course:</span>${algoj[j].Course}</div>
                </div>`+"\n"
            }
            container2.innerHTML="<h3>Enrolled Students in Algo.java Summer Batch</h3><br>"+str;
        }
        else if(course.value=='Machine learning'){
            ml.push({
                Name:fname.value+' '+sname.value,
                Phone:phone.value,
                Course:"Machine Learning"
            })
            let str=''
            for(let j=0;j<ml.length;j++){
                str+=`<div class="item">
                <div><span class="det">Name:</span>${ml[j].Name}</div>
                <div><span class="det">Phone:</span>${ml[j].Phone}</div>
                <div><span class="det">Course:</span>${ml[j].Course}</div>
                </div>`+"\n"
            }
            container2.innerHTML="<h3>Enrolled Students in Machine Learning Summer Batch</h3><br>"+str;
        } 
    }
    
}
