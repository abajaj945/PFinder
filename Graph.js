//Generete graph adjacency list
var arr=[];//for BFS traversal
var nodes={};//JSON object generates graph
var finalarr={};
var sorted=[];
var final=[]
var g=[];
var check=[];
var index=121;


var j=1;//used inside the loop to generate adjacency list

  
  for(i=1;i<=121;i++)//generate adjacency list stored in nodes
   {
    
    nodes[i]={};
    nodes[i]["list"]=[];
    
    
     if(j%11 != 0)
      {
        nodes[i]["list"].push(j+1);
      }
     if ( j%11 != 1 )
      {
        nodes[i]["list"].push(j-1);
      }
     if( j-11 >0 )
      {
        nodes[i]["list"].push(j-11);
      }
    
     if(j+11<122)
      {
        nodes[i]["list"].push(j+11);
      }

       j++;
   };

   for(k=1;k<=121;k++)
       { 
        if(k!=1 && k!=121){
         nodes[k]["value"]=1+Math.floor(Math.random()*10);//generate random number i.e path cost for travelling to that node

       }
        else{
            nodes[k]["value"]=0;
      
        }}

    
    for(i=1;i<=121;i++)
   {
   
   finalarr[i]=[];
   finalarr[i][0]=1500;
   finalarr[i][1]=null;
   finalarr[i][2]=null;
   sorted[i]=1500;
   }

for(i=2;i<121;i++){document.getElementById('r'+i).innerHTML = nodes[i]["value"]}//display cost
document.getElementById('r121').innerHTML = "END"

 
generat(121);//call to generat
        




function generat(nod)// djikstra's algorithm
{
   
  
  if(nod==121)
  {
    finalarr[121][0]=1400;
    finalarr[121][1]=121;
    finalarr[121][2]=0;
    nodes[121]["path"]=finalarr[121];
    sorted[121]=0;
  }
  
  for(key in nodes[nod]["list"])
  {
   
   x=nodes[nod]["list"][key];
   pre=finalarr[x][0];
   var curr=nodes[x]["value"];
     if(pre==1400)
       {
          //do nothing
       }
     
     if(pre !=1500)
       {
        
        if(pre+curr<finalarr[x][0])
        { 
         finalarr[x][0]=pre+curr+sorted[index];
         finalarr[x][1]=nod;
         finalarr[x][2]=pre+curr+sorted[index];
      
        }
  
       }
     if(pre == 1500)
       {
        finalarr[x][0]=curr+sorted[index];
        finalarr[x][1]=nod;
        finalarr[x][2]=curr+sorted[index];
        
        
        }
  
   }

  for(t=1;t<=121;t++)
  {
   check[t]=finalarr[t][0];
   
   }
  if(JSON.stringify(check)==JSON.stringify(sorted))
  {
   return;
   }

  for(l=1;l<=121;l++)
    {
     sorted[l]=finalarr[l][0];
    }
     index = 1;
     value = sorted[1];
     for (var i = 2; i < 122; i++) {
      if (sorted[i] < value) {
       value = sorted[i];
       index = i;
         }
      }
   nodes[index]["path"]=finalarr[index];
   finalarr[index][0]=1400;
   generat(index);
   
}

 var arra=[];//arra that contains id of every element

    for(i=0;i<=121;i++)
          {
              if(i==0)
                  {
                      arra.push("2")
                  }
              else{
                  var element=[i];
                  element.unshift("r");
                  arra.push(element.join(""))
                  }
          }//generate arra
