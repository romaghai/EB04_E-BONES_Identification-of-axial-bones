function Wrong(value) {
    if(value===2 || value===6 || value==12 || value==17 || value==16){
        document.querySelector('#bttn'+value).style.backgroundColor="green";
    }
    else{
  document.querySelector('#bttn'+value).style.backgroundColor="#8B0000";
    }
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }

  function prevpage() {
    document.getElementById("newdiv").style.display = "none";
    document.getElementById("newdiv0").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }

  function prevpage0() {
    document.getElementById("newdiv0").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }

  function nextPage0() {
    document.getElementById("newdiv0").style.display = "none";
    document.getElementById("newdiv").style.display = "block";
  }

  function prevpage1() {
    document.getElementById("newdiv1").style.display = "none";
    document.getElementById("newdiv").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }
  function prevpage2() {
    document.getElementById("newdiv2").style.display = "none";
    document.getElementById("newdiv1").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }
  function prevpage3() {
    document.getElementById("quizdiv1").style.display = "none";
    document.getElementById("newdiv2").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }
  function prevpage4() {
    document.getElementById("quizdiv2").style.display = "none";
    document.getElementById("quizdiv1").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }
  function prevpage5() {
    document.getElementById("newdiv3").style.display = "none";
    document.getElementById("quizdiv2").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }
   
  function prevpage6() {
    document.getElementById("newdiv4").style.display = "none";
    document.getElementById("newdiv3").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }

  function prevpage7() {
    document.getElementById("quizdiv3").style.display = "none";
    document.getElementById("newdiv4").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }

  function prevpage8() {
    document.getElementById("newdiv5").style.display = "none";
    document.getElementById("quizdiv3").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }
  function prevpage9() {
    document.getElementById("quizdiv4").style.display = "none";
    document.getElementById("newdiv5").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #3c3b3f, #605c3c)';
  }

  function nextPage2() {
    document.getElementById("newdiv").style.display = "none";
    document.getElementById("newdiv1").style.display = "block";
  }

  function nextPage3() {
    document.getElementById("newdiv1").style.display = "none";
    document.getElementById("newdiv2").style.display = "block";
  }

  function nextPage4() {
    document.getElementById("newdiv2").style.display = "none";
    document.getElementById("quizdiv1").style.display = "block";
  }

  function nextPage5() {
    document.getElementById("quizdiv1").style.display = "none";
    document.getElementById("quizdiv2").style.display = "block";
  }
   
  function nextPage6() {
    document.getElementById("quizdiv2").style.display = "none";
    document.getElementById("newdiv3").style.display = "block";
  }

  function nextPage7() {
    document.getElementById("newdiv3").style.display = "none";
    document.getElementById("newdiv4").style.display = "block";
  }

  function nextPage8() {
    document.getElementById("newdiv4").style.display = "none";
    document.getElementById("quizdiv3").style.display = "block";
  }

  function nextPage9() {
    document.getElementById("quizdiv3").style.display = "none";
    document.getElementById("newdiv5").style.display = "block";
  }

  function nextPage10() {
    document.getElementById("newdiv5").style.display = "none";
    document.getElementById("quizdiv4").style.display = "block";
  }

  function bone1()
  {
      document.getElementById("det").innerHTML = "Wrong one";
  }
  
  function defaulttext()
  {
      document.getElementById("det").innerHTML = "Human skeleton";
  }

  function gotit()
  {
     document.getElementById("det").innerHTML = "Axial Bones";
     document.getElementById("axialbones").style.display = "block";
     document.getElementById("subhea").style.display = "block";
  }

  function nextPage() {
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("newdiv0").style.display = "block";
    document.body.style.background = ' linear-gradient(to right, #093028, #237a57)';
  }
  
  
  function label()
  {
    if (document.getElementById("ax2").style.display === "none") {
        document.getElementById("ax1").style.display = "none";
        document.getElementById("ax2").style.display = "block";
      }
      
    else {
        document.getElementById("ax1").style.display = "block";
        document.getElementById("ax2").style.display = "none";
      }
     
  }

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Click here for more information";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText.innerHTML = "Click here for more information";
      moreText.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

 