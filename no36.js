function rndCode(){
  
    var p1 = 'ABCDEFGHIJKLM';
    var p2 = '0123456789';
    var p3 = '~!@#$%^&*';
    return [p1,p1,p2,p2,p2,p2,p3,p3].map((v) => v[~~(Math.random() * v.length)]).join('');
  
}