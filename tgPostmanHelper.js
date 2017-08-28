var HttpClient = function(){
  this.get = function(aUrl, aCallBack){
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function(){
      if(anHttpRequest.readyState == 4 && anHttpRequest.status == 200){
        aCallBack(anHttpRequest.responseText);
      }
    }
    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  };
  this.put = function(aUrl, aData, aCallBack){
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function(){
      if(anHttpRequest.readyState == 4 && anHttpRequest.status == 200){
        aCallBack(anHttpRequest.responseText);
      }
    }
    anHttpRequest.open("PUT", aUrl, true);
    anHttpRequest.send(aData);
  };
};
