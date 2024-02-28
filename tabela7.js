var player = document.getElementById("player");
    
    var track ="success-1-6297.mp3"
    var track2 ="negative_beeps-6008.mp3"

    var input_0 = window.document.getElementById("input0");
    var input_1 = window.document.getElementById("input1");
    var input_2 = window.document.getElementById("input2");
    var input_3 = window.document.getElementById("input3");
    var input_4 = window.document.getElementById("input4");
    var input_5 = window.document.getElementById("input5");
    var input_6 = window.document.getElementById("input6");
    var input_7 = window.document.getElementById("input7");
    var input_8 = window.document.getElementById("input8");
    var input_9 = window.document.getElementById("input9");
    var input_10 = window.document.getElementById("input10");

    
    
    var valor_entrada_input0 = Number(input_0.value);
    var valor_entrada_input1 = Number(input_1.value);
    var valor_entrada_input2 = Number(input_2.value);
    var valor_entrada_input3 = Number(input_3.value);
    var valor_entrada_input4 = Number(input_4.value);
    var valor_entrada_input5 = Number(input_5.value);
    var valor_entrada_input6 = Number(input_6.value);
    var valor_entrada_input7 = Number(input_7.value);
    var valor_entrada_input8 = Number(input_8.value);
    var valor_entrada_input9 = Number(input_9.value);
    var valor_entrada_input10 = Number(input_10.value);

   
   
   if (valor_entrada_input0==(7*0)) {
      input_0.style.background="lime";
     }else{
      input_0.style.background="red";
     }
  
  /*-----------------------------------------*/
  if (valor_entrada_input1==(7*1)) {
   input_1.style.background="lime";
  }else if(valor_entrada_input1==""){
  input_1.style.background="white";
  
  }else{
   input_1.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input2==(7*2)) {
   input_2.style.background="lime";
  }else if(valor_entrada_input2==""){
    input_2.style.background="white";
    
    }else{
   input_2.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input3==(7*3)) {
   input_3.style.background="lime";
  }else if(valor_entrada_input3==""){
    input_3.style.background="white";
  }else{
   input_3.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input4==(7*4)) {
   input_4.style.background="lime";
  }else if(valor_entrada_input4==""){
    input_4.style.background="white";
    
    }else{
   input_4.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input5==(7*5)) {
   input_5.style.background="lime";
  }else if(valor_entrada_input5==""){
    input_5.style.background="white";
    
    }else{
   input_5.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input6==(7*6)) {
   input_6.style.background="lime";
  }else if(valor_entrada_input6==""){
    input_6.style.background="white";
    
    }else{
   input_6.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input7==(7*7)) {
   input_7.style.background="lime";
  }else if(valor_entrada_input7==""){
    input_7.style.background="white";
    
    }else{
   input_7.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input8==(7*8)) {
   input_8.style.background="lime";
  }else if(valor_entrada_input8==""){
    input_8.style.background="white";
    
    }else{
   input_8.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input9==(7*9)) {
   input_9.style.background="lime";
  }else if(valor_entrada_input9==""){
    input_9.style.background="white";
    
    }else{
   input_9.style.background="red";
  }
  /*-----------------------------------------*/
  if (valor_entrada_input10==(7*10)) {
   input_10.style.background="lime";
  }else if(valor_entrada_input10==""){
    input_10.style.background="white";
    
    }else{
   input_10.style.background="red";
  }

  
  if (valor_entrada_input0==(7*0)&&valor_entrada_input1==(7*1)&&valor_entrada_input2==(7*2)&&valor_entrada_input3==(7*3)&&valor_entrada_input4==(7*4)&&valor_entrada_input5==(7*5)&&valor_entrada_input6==(7*6)&&valor_entrada_input7==(7*7)&&valor_entrada_input8==(7*8)&&valor_entrada_input9==(7*9)&&valor_entrada_input10==(7*10)){
    
    player.src=track;
    player.play();

    
   
  }
  

 
  else if (valor_entrada_input0!=(7*0)||valor_entrada_input1!=(7*1)||valor_entrada_input2!=(7*2)||valor_entrada_input3!=(7*3)||valor_entrada_input4!=(7*4)||valor_entrada_input5!=(7*5)||valor_entrada_input6!=(7*6)||valor_entrada_input7!=(7*7)||valor_entrada_input8!=(7*8)||valor_entrada_input9!=(7*9)||valor_entrada_input10!=(7*10)){
    
    player.src=track2;
    player.play();

   
    
  }


var array_pontos=[valor_entrada_input0,valor_entrada_input1,valor_entrada_input2,valor_entrada_input3,valor_entrada_input4,valor_entrada_input5,valor_entrada_input6,valor_entrada_input7,valor_entrada_input8,valor_entrada_input9,valor_entrada_input10];

var pontos=0;
var text=""


for (var index = 0; index <= array_pontos.length; index++) {
  if(array_pontos[index]==(7*index)) {
   pontos=pontos+ 1;
  
  }    
    
 }document.getElementById("pontos").innerHTML=`${pontos}`;
 
 

   









function resetar(){
  
  var input_0=document.getElementById("input0");
  input_0.value="";

  var input_1=document.getElementById("input1");
  input_1.value="";

  var input_2=document.getElementById("input2");
  input_2.value="";

  var input_3=document.getElementById("input3");
  input_3.value="";

  var input_4=document.getElementById("input4");
  input_4.value="";

  var input_5=document.getElementById("input5");
  input_5.value="";

  var input_6=document.getElementById("input6");
  input_6.value="";

  var input_7=document.getElementById("input7");
  input_7.value="";

  var input_8=document.getElementById("input8");
  input_8.value="";

  var input_9=document.getElementById("input9");
  input_9.value="";

  var input_10=document.getElementById("input10");
  input_10.value="";

  var apagar_cores_inputs=[input_0,input_1,input_2,input_3,input_4,input_5,input_6,input_7,input_8,input_9,input_10]
  
  for (index=0;index<=apagar_cores_inputs.length;index++){ 


    apagar_cores_inputs[index].style.background="white";

}
   

 
}
 function mouseOver(){
     document.getElementById('area1').style.background="#C0C0C0";
    
  }

  function mouseOut(){
    document.getElementById('area1').style.background="rgb(240, 233, 233)";
    
  }
  function clicar(){
    document.getElementById('area1').style.background="#808080";
  }
  //////////////////////////////////////////////////////////

  function mouseOver2(){
    document.getElementById('area2').style.background="#C0C0C0";
   
 }

 function mouseOut2(){
   document.getElementById('area2').style.background="rgb(240, 233, 233)";
   
 }
 function clicar2(){
   document.getElementById('area2').style.background="#808080";
 }

///////////////////////////////////////////////////////////////

function mouseOver4(){
  document.getElementById('VerResultados').style.background="#C0C0C0";
 
}

function mouseOut4(){
 document.getElementById('VerResultados').style.background="rgb(240, 233, 233)";
 
}
function clicar4(){
 document.getElementById('VerResultados').style.background="#808080";
}
/////////////////////////////////////////////////////////////////

function mouseOver5(){
  document.getElementById('area3').style.background="#C0C0C0";
 
}

function mouseOut5(){
 document.getElementById('area3').style.background="rgb(240, 233, 233)";
 
}
function clicar5(){
 document.getElementById('area3').style.background="#808080";
}
///////////////////////////////////////////////////////////////////
function mouseOver6(){
  document.getElementById('area4').style.background="#C0C0C0";
 
}

function mouseOut6(){
 document.getElementById('area4').style.background="rgb(240, 233, 233)";
 
}
function clicar6(){
 document.getElementById('area4').style.background="#808080";
}

//////////////////////////////////////////////////////////////////

function mouseOver7(){
  document.getElementById('area5').style.background="#C0C0C0";
 
}

function mouseOut7(){
 document.getElementById('area5').style.background="rgb(240, 233, 233)";
 
}
function clicar7(){
 document.getElementById('area5').style.background="#808080";
}
/////////////////////////////////////////////////////////////////
function mouseOver8(){
  document.getElementById('area6').style.background="#C0C0C0";
 
}

function mouseOut8(){
 document.getElementById('area6').style.background="rgb(240, 233, 233)";
 
}
function clicar8(){
 document.getElementById('area6').style.background="#808080";
}
//////////////////////////////////////////////////////////////////
function mouseOver9(){
  document.getElementById('area7').style.background="#C0C0C0";
 
}

function mouseOut9(){
 document.getElementById('area7').style.background="rgb(240, 233, 233)";
 
}
function clicar9(){
 document.getElementById('area7').style.background="#808080";

}
///////////////////////////////////////////////////////////////////
function mouseOver10(){
  document.getElementById('area8').style.background="#C0C0C0";
 
}

function mouseOut10(){
 document.getElementById('area8').style.background="rgb(240, 233, 233)";
 
}
function clicar10(){
 document.getElementById('area8').style.background="#808080";
}