for(let i=1; i<=10;i++){  
    if(i<=10){       
        let heading ="Multiplication of- "+ i;
        const namta=document.getElementById('namta');
        const h2=document.createElement('h2');
        h2.innerText=heading; 
        namta.appendChild(h2);
        h2.style.border='3px solid #f9f0f0';
        h2.style.width='220px';               
    }
    for(let j=1; j<=10;j++){
        const multi=i*j;
        const multify= i + " x " + j + " = "+ multi;      
        const namta= document.getElementById('namta');
        const p= document.createElement('p');
        p.innerText=multify;
        namta.appendChild(p);        
    }
}