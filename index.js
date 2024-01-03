var a= document.getElementsByTagName('img')
    console.log(a);
    function fun1(arg){
      console.log(arg);
      a[arg].style.opacity=1;
    }
    function fun2(arg){
      console.log(arg);
      a[arg].style.opacity=0.2;
    }