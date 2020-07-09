// Unit test case to click on button 

setTimeout(() => {
    unitTest();
  }, duration);

  async function unitTest() {
   let els = [...document.getElementsByClassName('btnClass')];
   for (let j=0; j< els.length; j++){
     await new Promise(r => setTimeout(r, duration));
     els[j].click();
   }
  }