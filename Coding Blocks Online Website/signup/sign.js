// const fs= require('fs')
const present=[
    {
        name:'Shashank',
        email:'shashankaggarwal13@gmail.com',
        password:'mypass'
    }
]

const log=document.getElementById('log')
log.style.display='none';
const button=document.getElementById('submit')
const container=document.getElementById('container')
button.onclick=()=>{
    const name=document.getElementById('name')
    const email=document.getElementById('email')
    const pass=document.getElementById('pass')
    present.push(
        {   name:name.value,
            email:email.value,
            password:pass.value
        }
        )
        // fs.writeFile("./data.txt",present,(err,result)=>{
        //     if(err) console.error(err)
        //     console.log("Done")
        // })
        const sign=document.getElementById('sign')
        log.style.display="block";
        sign.innerHTML+='<h5>Signed up successfully<br><br>Now Log in</h5>'
    }
    
    const login=document.getElementById('login')
    
    login.onclick=function(){
        const email2=document.getElementById('email2')
        const pass2=document.getElementById('pass2')
        // fs.readFile('./data.txt','utf8',(err,data)=>{
        //     if(err) console.error(err)
        //     else{
        //         console.log(data);
        //     }
        // })
        const ans=present.find((per)=>{
           return per.email==email2.value
        })
        if(ans!=undefined){
        if(ans.password==pass2.value)
            container.innerHTML=`<br><br><br><br><br><br><br><br><br><br><br><h1>Logged in Successfully</h1>
            <a href="../onlineshopping.html">Go back to CodingBlocks.com</a>`
        }
        else container.innerHTML=`<br><br><br><br><br><br><br><br><br><br><br><h1>Wrong Details</h1>
        <a href="../onlineshopping.html">Go back to CodingBlocks.com</a>`
    }
    
    