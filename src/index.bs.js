// Generated by ReScript, PLEASE EDIT WITH CARE


var textEditor = document.getElementById("textEditor");

var textView = document.getElementById("textView");

textView.classList = "text-2xl";

function changeTextView(evt) {
  textView.innerText = evt.target.value;
  
}

textEditor.addEventListener("input", changeTextView);

var smallRadio = document.getElementById("selectSmall");

var regularRadio = document.getElementById("selectRegular");

var largeRadio = document.getElementById("selectLarge");

smallRadio.addEventListener("change", (function (param) {
        textView.classList = "text-sm";
        
      }));

regularRadio.addEventListener("change", (function (param) {
        textView.classList = "text-2xl";
        
      }));

largeRadio.addEventListener("change", (function (param) {
        textView.classList = "text-6xl";
        
      }));

export {
  textEditor ,
  textView ,
  changeTextView ,
  smallRadio ,
  regularRadio ,
  largeRadio ,
  
}
/* textEditor Not a pure module */