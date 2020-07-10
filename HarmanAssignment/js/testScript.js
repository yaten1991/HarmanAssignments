// Unit test case to click on button 

setTimeout(() => {
  unitTest();
}, duration);

async function unitTest() {
  let els = [...document.getElementsByClassName('btnClass')];
  if (els.length === buttonCount) {
    tempAlert(`Test case PASS, All ${buttonCount} buttons are available on UI.`);
  } else {
    tempAlert(`Test case FAIL, All ${buttonCount} buttons are not available on UI.`);
  }
}
