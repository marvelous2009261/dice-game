function rolldice(){
const numofdice=document.getElementById("numofdice").value;
const Result=document.getElementById("Result");
const Resultimages=document.getElementById("Resultimages");
const values=[];
const images=[];
for(let i=0; i < numofdice ;i++)
    {const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="dice/${value}.JPG">`);
    
}

Result.textContent=`dice :${values.join(`,`)}`;
    Resultimages.innerHTML=images.join(` `);


}
