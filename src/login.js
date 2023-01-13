async function login(){
  const result = await (await fetch('https://bfaw2rep44.hk.aircode.run/login', {
    credentials: 'include',
  })).json();
  if(result.code !== 1){
    window.location = 'https://modernjs.dev/builder/zh/';
  }
 
}
login();