var textArea = document.getElementById('textArea')  ;
var translation = document.getElementById('translationArea');
var letters = {
  65:"a",
  66:"b",
  67:"c",
  68:"d",
  69:"e",
  70:"f",
  71:"g",
  72:"h",
  73:"i",
  74:"j",
  75:"k",
  76:"l",
  77:"m",
  78:"n",
  79:"o",
  80:"p",
  81:"q",
  82:"r",
  83:"s",
  84:"t",
  85:"u",
  86:"v",
  87:"w",
  88:"x",
  89:"y",
  90:"z",
  32:" "
}
var images1 = {
  65:"<img src='images/heiroglyphics/a.gif'>",
  66:"<img src='images/heiroglyphics/b.gif'>",
  67:"<img src='images/heiroglyphics/c.gif'>",
  68:"<img src='images/heiroglyphics/d.gif'>",
  69:"<img src='images/heiroglyphics/e.gif'>",
  70:"<img src='images/heiroglyphics/f.gif'>",
  71:"<img src='images/heiroglyphics/g.gif'>",
  72:"<img src='images/heiroglyphics/h.gif'>",
  73:"<img src='images/heiroglyphics/i.gif'>",
  74:"<img src='images/heiroglyphics/j.gif'>",
  75:"<img src='images/heiroglyphics/k.gif'>",
  76:"<img src='images/heiroglyphics/l.gif'>",
  77:"<img src='images/heiroglyphics/m.gif'>",
  78:"<img src='images/heiroglyphics/n.gif'>",
  79:"<img src='images/heiroglyphics/o.gif'>",
  80:"<img src='images/heiroglyphics/p.gif'>",
  81:"<img src='images/heiroglyphics/q.gif'>",
  82:"<img src='images/heiroglyphics/r.gif'>",
  83:"<img src='images/heiroglyphics/s.gif'>",
  84:"<img src='images/heiroglyphics/t.gif'>",
  85:"<img src='images/heiroglyphics/u.gif'>",
  86:"<img src='images/heiroglyphics/v.gif'>",
  87:"<img src='images/heiroglyphics/w.gif'>",
  88:"<img src='images/heiroglyphics/x.gif'>",
  88:"<img src='images/heiroglyphics/y.gif'>",
  89:"<img src='images/heiroglyphics/w.gif'>",
  90:"<img src='images/heiroglyphics/z.gif'>",
  32:" "
}

var images2 = {
  65:"<img src='images/runes/a.gif'>",
  66:"<img src='images/runes/b.gif'>",
  67:"<img src='images/runes/c.gif'>",
  68:"<img src='images/runes/d.gif'>",
  69:"<img src='images/runes/e.gif'>",
  70:"<img src='images/runes/f.gif'>",
  71:"<img src='images/runes/g.gif'>",
  72:"<img src='images/runes/h.gif'>",
  73:"<img src='images/runes/i.gif'>",
  74:"<img src='images/runes/j.gif'>",
  75:"<img src='images/runes/k.gif'>",
  76:"<img src='images/runes/l.gif'>",
  77:"<img src='images/runes/m.gif'>",
  78:"<img src='images/runes/n.gif'>",
  79:"<img src='images/runes/o.gif'>",
  80:"<img src='images/runes/p.gif'>",
  81:"<img src='images/runes/q.gif'>",
  82:"<img src='images/runes/r.gif'>",
  83:"<img src='images/runes/s.gif'>",
  84:"<img src='images/runes/t.gif'>",
  85:"<img src='images/runes/u.gif'>",
  86:"<img src='images/runes/v.gif'>",
  87:"<img src='images/runes/w.gif'>",
  88:"<img src='images/runes/x.gif'>",
  88:"<img src='images/runes/y.gif'>",
  89:"<img src='images/runes/w.gif'>",
  90:"<img src='images/runes/z.gif'>",
  32:" "
}
  /*document.getElementById("inputArea").addEventListener("keydown",function(e){
    document.getElementById("textArea").innerHTML +=  letters[e.keyCode];
  });*/





  //var j = e.keyCode + 1;
  //var example = letters[j];
  document.getElementById("inputArea").addEventListener("keydown",function(e){


    if (e.keyCode  == 8)
   {
     textArea.textContent = textArea.textContent.substr(0, textArea.textContent.length - 1);
   }
    //document.getElementById("textArea").innerHTML +=  example;
    else if($("input:checked").val() == "hieroglyphics"){
      //just puts an image instead of a key code in
      textArea.innerHTML += images1[e.keyCode];

    }
    else if($("input:checked").val() == "caesarCipher"){
      console.log("caesarCipher");
       if(e.keyCode + 1 == 91)
      {
        textArea.textContent += "a";
      }
      //making it so that a space dosent cause an error
      else if (e.keyCode == 32){
        textArea.textContent += " ";
      }
      //else if(letters[e.keyCode + 1] === undefined)
      //{}
      //makes it so that backsapce delets most recent added element
      else if (e.keyCode  == 8)
      {
        textArea.textContent = textArea.textContent.substr(0, textArea.textContent.length - 1);
      }
      // makes it so that the key code is increased by 1 such as typing a will give b
      else {
        textArea.textContent += letters[e.keyCode + 1];
      }
    }
    else if($("input:checked").val() == "rune") {
    console.log("rune")
    textArea.innerHTML += images2[e.keyCode];
    }
    else if($("input:checked").val() == "echo") {
      console.log("echo")

      //just repets what ever you type in
      textArea.textContent += letters[e.keyCode];
    }
  });
$('input[type="radio"]').click(function(){
   $('input:checked').prop('checked',false);
   $(this).prop('checked',true);
});

  document.getElementById('translationInputArea').addEventListener("keydown", function(e){
    if($("input:checked").val()  == "caesarCipher") {

      if (e.keyCode == 13) {
        var texts = document.getElementById("translationInputText").value;
        texts = texts.split("");
        for (var i = 0; i < texts.length; i++) {
          var translations = texts[i].charCodeAt(0) - 33;
          if (translations == 65){
            translation.textContent += "z";
          }
          else {
            translation.innerHTML += letters[translations];
          }
        }
      }
      else if (e.keyCode == 8) {
          translation.textContent = translation.textContent.substr(0, textArea.textContent.length - 1);
      }
      else if (e.keyCode == 32) {
        translation.innerHTML += " ";
      }
      else if (e.keyCode == 65) {
          translation.innerHTML += "z ";
      }
      else {
          translation.innerHTML += letters[e.keyCode - 1];
      }
    }
    });

  $('input[type="radio"]').click(function(){
     $('input:checked').prop('checked',false);
     $(this).prop('checked',true);
  });
