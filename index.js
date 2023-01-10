// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
let i;
    for (i=1; i<=100; i++)
    {
       
        if (i%15 == 0)   
            document.write("amazon" + " ");
         
        
        else if ((i%3) == 0)
            document.write("google" + " ");               
         
       
        else if ((i%5) == 0)                   
            document.write("facebook" + " ");               
     
        else       
            document.write(i + " ");          
                 
    }