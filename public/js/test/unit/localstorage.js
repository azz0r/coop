define(
  [
  ],
  function() {
    
    module("Local storage");
    
    test("set and get", 1, function(){
      
      localStorage.setItem('foo', 'bar');
      ok(localStorage.getItem('foo') === 'bar', 'Got set item');
    });
});
