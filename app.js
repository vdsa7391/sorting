const btns = document.querySelectorAll('button');
const nodes= document.querySelector('.nodes');


const n=50;
var array=[];

btns[0].addEventListener('click',()=>{
    node_making();
})

btns[1].addEventListener('click',()=>{

    sort(array);
    shownode();
})

function node_making(){
    
    for(let i=0; i<n;i++){
        array[i]=Math.random();
    } 
    shownode();
}

function shownode(){
    nodes.innerHTML="";
    nodes.classList.remove('active');
    for(let i=0;i<array.length;i++){
        var bar= document.createElement('div');
        bar.style.height=array[i]*100 + "%";
        bar.style.width="15px";
        bar.style.margin="2px";
        bar.style.backgroundColor="black";
        nodes.appendChild(bar);
    }
}

function sort(array){
    
    do{
        var flag=false;
        for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){
                flag=true;
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
            
        }
    }while(flag)
        

}

