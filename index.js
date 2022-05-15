const express=require('express');
const obj=express();
const port=4000;

obj.use(express.static('app'));
obj.listen(port,()=>{
    console.log(`this website started on ${port}`);
})
