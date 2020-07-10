const buttonString = 'Button';
const duration = 2000;
let buttonCount;

const setAttributes = (el, attrs) =>{
  Object.entries(attrs)
    .forEach(args =>
      el.setAttribute(...args));
      el.onclick = tempAlert;
}

    buttonUIExecute = (btnNumber) =>{
      let div = document.getElementById("btnView");
      buttonCount = btnNumber || 5;
      let attrs = {'class': 'btnClass', 'type': 'button', 'value': '', 'id': ''};
      for (let i=1; i <= buttonCount; i++) {
        let button = document.createElement("input");
        attrs.value = buttonString+' '+i;
        attrs.id = i;
        setAttributes(button, attrs);
        div.appendChild(button);
      }
   }

   tempAlert = (event) => {
      console.log('clicked ', event);
      var el = document.createElement("div");
      el.setAttribute('class', 'popup');
      el.innerHTML = typeof event === 'object' ? `Button name: ${event.srcElement.value} Index: ${event.srcElement.id}` : event; 
      setTimeout(() => {
        el.parentNode.removeChild(el);
      }, duration);
      document.body.appendChild(el);
    }
