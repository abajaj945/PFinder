var HTMLscore = '<h1 id="scoreelement">%data%</h1>';
var aaa=HTMLscore.replace("%data%",0)
$("#scoreboard").append(aaa)
var pathcost=0;
var score=0;
var roveri=document.getElementById("r1");
var geti=roveri.getBoundingClientRect();
            
var posxii=geti.left;
var posyii=geti.top;
var nextx=0;
var nexty=0;
var posxi=0;
var posyi=0;
var x=0
var y=0
var u=""

var pathf=[];

       function anima(n){
                
                var rover=document.getElementById("r1");
                var get=rover.getBoundingClientRect();
                
                 posxi=get.left-posxii;
                 posyi=get.top-posyii;
                
                n=nodes[n]["path"][1];
                pathf.push(nodes[n]["value"])
                var next=document.getElementById(arra[n]);
                var getnext=next.getBoundingClientRect();
                
                 nextx=getnext.left-posxii;
                 nexty=getnext.top-posyii;
                
                 if(posyi==nexty)
                        {
                            var id=setInterval(frame2,1);
                          
                        }
                 else
                        {
                               var id=setInterval(frame1,1);
                        }
             
            function frame2(){
                   if(posxi>=nextx-1)
                       {
                             document.getElementById(arra[n]).style.background="green";
                             clearInterval(id);
                             x=0;
                             re(n);
                       }
                    else
                       {
                             posxi++;
                             rover.style.left=posxi +'px';
                             x++;
                       }
            }
           

            function frame1(){
                  if(posyi>=nexty)
                       {
                             document.getElementById(arra[n]).style.background="green";
                             clearInterval(id);
                             y=0;
                             re(n);
                       }
                  else
                       {
                             posyi++;
                             rover.style.top=posyi +'px';
                             y++;
                       }
             }
           

            function re(n){
                  if(n==121)
                       {
                             x=121;
                             document.getElementById(arra[n]).style.background="green";  
                             aaa=HTMLscore.replace("%data%",nodes[1]["path"][2])
                             $("#computerscore:last-child").empty()
                             $("#computerscore").append(aaa)
                        
                          return;
                        }
                    else{
                       anima(n);//recursion
                        }
            }
       }

var path=['r1'];
var nodesrowwise=[]
            
       function singlepathcost(){
            var $x="";
            nodesrowwise=[];
            var select = document.getElementById('r121');
            for(h=1;h<=121;h++)
              {
                if( h!=121 && h!=1){
                 $x=document.createTextNode(nodes[h]["value"]);
                 select = document.getElementById(arra[h]);
                 if (select.hasChildNodes()) {
                    select.removeChild(select.lastChild);
       
                 }
                 document.getElementById(arra[h]).appendChild($x);
                 nodesrowwise.push(nodes[h]["value"])
                }
            if(h==121) {
               select = document.getElementById('r121');
               if (select.hasChildNodes()){
                    select.removeChild(select.lastChild);
               }
               $x=document.createTextNode("END");
               document.getElementById(arra[h]).appendChild($x);
            }
            if(h==121 || h==1) {
              nodesrowwise.push(nodes[h]["value"])
            }
           }
           pathcost=finalarr[1][2]-nodes[1]['value'];
        };
  
        prev='r1'

        $("button").click(function() {
             
            
             if(this.id!="show" && this.id!="reload"){
             if(nodes[arra.indexOf(prev)]['list'].includes(arra.indexOf(this.id )) )
                 
             {
                 bu=this.id
                 
                 if(this.id!="show"){

                var rover=document.getElementById("r1");
                var get=document.getElementById("r1").getBoundingClientRect();
                
                 posxi=get.left-posxii;
                 posyi=get.top-posyii;
                
                var getnext=document.getElementById(this.id).getBoundingClientRect();
                
                 nextx=getnext.left-posxii;
                 nexty=getnext.top-posyii;
                
                 if(posyi==nexty)
                        {
                            if(posxi<nextx){
                     
                            var id=setInterval(frame2a,0.1);
                            }
                            else{
                                
                            var id=setInterval(frame2b,0.1);
                        }
                        }
                 else
                        {
                            if(posyi<=nexty){
                    
                            var id=setInterval(frame1a,0.1);
                           }
                            else{
                                var id=setInterval(frame1b,0.1);
                            }
                        }
             
            function frame2a(){
                
                            if(posxi>=nextx-1)
                                { 
                                    if($('#'+bu).css("background-color")=="rgb(128, 0, 0)") {
                                    score=score+nodes[arra.indexOf(bu)]['value'];
                                    aaa=HTMLscore.replace("%data%",score)
                                    $("#scoreboard:last-child").empty()
                                     
                                    $("#scoreboard").append(aaa)

                                    document.getElementById(bu).style.background="blue";
                                    path.push(bu);    
                                    prev=bu;
                                    l=1;
                                    clearInterval(id);
                                    
                                    }
                                    else{
                                    if(bu==path[path.length-2]){
                                    path.pop();
                                    score=score-nodes[arra.indexOf(prev)]['value'];
                                    aaa=HTMLscore.replace("%data%",score)
                                    $("#scoreboard:last-child").empty()
                                     
                                    $("#scoreboard").append(aaa)
 
                                    document.getElementById(prev).style.background="maroon";

                                    prev=bu;
                                    clearInterval(id); 
                                    }
                                    else{
                            
                                        //
                                        
                                        }
                                    
                                }
                            }
                            else
                                {
                                    posxi+=1;
                                    rover.style.left=posxi +'px';
                                    x++;
                                }
               }
               
                function frame2b(){
 
                    if(posxi<=nextx-1)
                                {
                                      if($('#'+bu).css("background-color")=="rgb(128, 0, 0)") {
                                     score=score+nodes[arra.indexOf(bu)]['value'];
                                     aaa=HTMLscore.replace("%data%",score)
                                     $("#scoreboard:last-child").empty()
                                     
                                     $("#scoreboard").append(aaa)
 
                                      path.push(bu);
                                      prev=bu;
                                      document.getElementById(bu).style.background="blue";
                                      o=1;  
                                    clearInterval(id);
                                }  
                                    else{
                                    if(bu==path[path.length-2]){ 
                                      path.pop();
                                      score=score-nodes[arra.indexOf(prev)]['value'];
                                      aaa=HTMLscore.replace("%data%",score)
                                      $("#scoreboard:last-child").empty()
                                     
                                      $("#scoreboard").append(aaa)

                                      document.getElementById(prev).style.background="maroon";
                                      
                                      prev=bu;
                                      n=1;  
                                      clearInterval(id);
                                       
                                    }
                                        else{
                                    location.reload();
                                    
                                        }
                                }
                                }
                                    else{
                                 
                                    posxi--;
                                    rover.style.left=posxi +'px';
                                    x++;
                               }
  
                    
                }
                
            }
           
                function frame1a(){
                            if(posyi>=nexty)
                                {
                                    if($('#'+bu).css("background-color")=="rgb(128, 0, 0)") {
                                    score=score+nodes[arra.indexOf(bu)]['value'];
                                    aaa=HTMLscore.replace("%data%",score)
                                    $("#scoreboard:last-child").empty()
                                     
                                    $("#scoreboard").append(aaa)

                                    document.getElementById(bu).style.background="blue";
                                    path.push(bu);
                                    prev=bu;
                                    clearInterval(id);
                                
                                    }
                                    else{
                                if(bu==path[path.length-2]){
                                    path.pop();
                                    score=score-nodes[arra.indexOf(prev)]['value'];
                                    aaa=HTMLscore.replace("%data%",score)
                                    $("#scoreboard:last-child").empty()
                                     
                                    $("#scoreboard").append(aaa)

                                    document.getElementById(prev).style.background="maroon";

                                    prev=bu;
                                    clearInterval(id); 
                                    }
                                    else{
                                            location.reload();
                                        
                                        }
                                       
                                
                                     }
                                    }
                            else
                                {
                                    posyi+=1;
                                    rover.style.top=posyi +'px';
                                     y++;
                                }
                          }
                 
                    function frame1b(){
                        if(posyi<=nexty)
                                {
                                     if($('#'+bu).css("background-color")=="rgb(128, 0, 0)") {
                                     score=score+nodes[arra.indexOf(bu)]['value'];
                                     aaa=HTMLscore.replace("%data%",score)
                                     $("#scoreboard:last-child").empty()
                                     
                                     $("#scoreboard").append(aaa)

                                      path.push(bu);
                                      prev=bu;
                                      document.getElementById(bu).style.background="blue";
                                    o=1;  
                                    clearInterval(id);
                                }  
                                    else{
                                    if(bu==path[path.length-2]){ 
                                      path.pop();
                                      score=score-nodes[arra.indexOf(prev)]['value'];
                                      aaa=HTMLscore.replace("%data%",score)
                                      $("#scoreboard:last-child").empty()
                                      $("#scoreboard").append(aaa)

                                      document.getElementById(prev).style.background="maroon";
                                      
                                      prev=bu;
                                      n=1;  
                                      clearInterval(id);
                                       
                                    }
                                        else{
                                            location.reload();
                                        
                                        }
                                }
                                
                                    
                                }
                            else
                                {
                                    
                                    posyi--;
                                    rover.style.top=posyi +'px';
                                     y++;
                                }
                         }
                }
         
            else{
            
             alert("You cannot go there");
           } 
             }  });

         
       
