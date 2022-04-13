const express=require('express');
const app=express()
const{nanoid}=require('nanoid')
const port =3000



// 1-GetAllUser (done)
// 2-AddUser (done)
// 3-UpdateByID (done)
// 4-DeleteByID (done)
// 5-GetUserByID (done)
// 6-Get all user reversed (done)
// 7-Search users by email or name or age (done)
// 8- Get users with age less the 30 (done)





app.use(express.json())

// array of Users
let Users=[
    {id:1,name:'mahmoud',email:'mahmoudabouzit@gmail.com',age:40},
    {id:2,name:'ahmed',email:'ahmed@gmail.com',age:22},
    {id:3,name:'sharaf',email:'sharaf@gmail.com',age:33}
]

// CRUD

// get all Users
app.get('/',(req,res)=>{
    
    res.json({massage:"Done",Data:Users});


})
// add new user
app.post('/addUser',(req,res)=>{
    let foundedUser=Users.find((user)=>user.email==req.body.email)
    console.log(foundedUser);
    if(foundedUser){
res.json({massage:'User Exist'})
    }else{
      req.body.id=nanoid()  
      Users.push(req.body)
      console.log(req.body);
      res.json('Done')
    }
   
})


// delete user
app.delete('/DeleteByID/:id',(req,res)=>{
    console.log(req.params);
    Users=Users.filter((user)=>user.id !=req.params.id)
    res.json({massage:"deleted",Users})
})


// updata user by id
app.patch("/updataUser/:id",(req,res)=>{
    let {id}= req.params
    let {name}=req.body
    newUsers=Users.map((user)=>{
        if(user.id== id){
            user.name=name
            return user
        }else{
            return user
        }
    })
    console.log(req.params);
    res.json({massage:"updated",newUsers})
})


// get user by id 
app.get('/getuserbyid/:id',(req,res)=>{
    let {id}= req.params
    flag=0
    newUsers=Users.map((user)=>{
    if(user.id== id){
    res.json({massage:"Done",Data:user});
    flag=1
    }

    if (flag==0){
        res.json({massage:"not found"});

    }
})
})


// updata all users reversed
app.get('/allusersreversed',(req,res)=>{
    newUsers=Users.reverse()
    // console.log(Users);
    res.json({massage:"Done",Data:newUsers});


})


// Search users by email 
app.get('/Searchuserbyemail',(req,res)=>{
    let {email}= req.body
    flag=0
    newUsers=Users.map((user)=>{
    if(user.email== email){
    res.json({massage:"Done",Data:user});
    flag=1
    }

    if (flag==0){
        res.json({massage:"not found"});

    }
})
})


// Get users with age less then 30

app.get('/ageLessThen30',(req,res)=>{
    newUsers=Users.map((user)=>{
    flag=0
    if(user.age<30){
    res.json({massage:"Done",Data:user});
    flag=1
    }

   
})
if (flag==0){
    res.json({massage:"not bigger than 30"});

}
})


app.listen(port,()=>{
    console.log('running')
})


// __task is done__