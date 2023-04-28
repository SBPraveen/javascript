  function x(){
      var a = 9000
    function y(){
       var b = 12;
        function z(){
            console.log(a, b)
        }
        z();
    }
    y();
  }
  x();