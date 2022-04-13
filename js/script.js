function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&s(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())},!0),a(),e.addEventListener("focus",function(e){var n,o,u;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&d[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&s(e.target)},!0),e.addEventListener("blur",function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout(function(){n=!1},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)});
//# sourceMappingURL=focus-visible.min.js.map
;
var H=Object.defineProperty;var V=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var x=(f,u,p)=>u in f?H(f,u,{enumerable:!0,configurable:!0,writable:!0,value:p}):f[u]=p,L=(f,u)=>{for(var p in u||(u={}))W.call(u,p)&&x(f,p,u[p]);if(V)for(var p of V(u))Y.call(u,p)&&x(f,p,u[p]);return f};var c=(f,u,p)=>(x(f,typeof u!="symbol"?u+"":u,p),p);(function(f,u){typeof exports=="object"&&typeof module!="undefined"?module.exports=u():typeof define=="function"&&define.amd?define(u):(f=typeof globalThis!="undefined"?globalThis:f||self,f.JustValidate=u())})(this,function(){"use strict";const f=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=/^[0-9]+$/,p=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,M=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,P=o=>{let e=o;return typeof o=="string"&&(e=o.trim()),!e},N=o=>f.test(o),G=(o,e)=>o.length>e,A=(o,e)=>o.length<e,j=o=>u.test(o),q=o=>p.test(o),O=o=>M.test(o),z=(o,e)=>o>e,D=(o,e)=>o<e;var d;(function(o){o.Required="required",o.Email="email",o.MinLength="minLength",o.MaxLength="maxLength",o.Password="password",o.Number="number",o.MaxNumber="maxNumber",o.MinNumber="minNumber",o.StrongPassword="strongPassword",o.CustomRegexp="customRegexp"})(d||(d={}));var g;(function(o){o.Required="required"})(g||(g={}));var C;(function(o){o.Label="label",o.LabelArrow="labelArrow"})(C||(C={}));const _=(o,e)=>{switch(o){case d.Required:return"The field is required";case d.Email:return"Email has invalid format";case d.MaxLength:return"The field must contain a maximum of :value characters".replace(":value",String(e));case d.MinLength:return"The field must contain a minimum of :value characters".replace(":value",String(e));case d.Password:return"Password must contain minimum eight characters, at least one letter and one number";case d.Number:return"Value should be a number";case d.StrongPassword:return"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";case d.MaxNumber:return"Number should be less or equal than :value".replace(":value",String(e));case d.MinNumber:return"Number should be more or equal than :value".replace(":value",String(e));default:return"Value is incorrect"}},X=o=>{switch(o){case g.Required:return"The field is required";default:return"Group is incorrect"}},v=o=>!!o&&typeof o.then=="function",Z=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",E=5,k={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",focusInvalidField:!0,lockForm:!0,testingMode:!1};class B{constructor(e,r,t){c(this,"form",null);c(this,"fields",{});c(this,"groupFields",{});c(this,"errors",{});c(this,"isValid",!1);c(this,"isSubmitted",!1);c(this,"globalConfig",k);c(this,"errorLabels",[]);c(this,"eventListeners",[]);c(this,"dictLocale",[]);c(this,"currentLocale");c(this,"customStyleTags",{});c(this,"onSuccessCallback");c(this,"onFailCallback");c(this,"tooltips",[]);c(this,"lastScrollPosition");c(this,"isScrollTick");c(this,"refreshAllTooltips",()=>{this.tooltips.forEach(e=>{e.refresh()})});c(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)});c(this,"handleFieldChange",e=>{let r,t;for(const i in this.fields){const s=this.fields[i];if(s.elem===e){r=s,t=i;break}}!r||!t||this.validateField(t,r,!0)});c(this,"handleGroupChange",e=>{let r,t;for(const i in this.groupFields){const s=this.groupFields[i];if(s.elems.find(a=>a===e)){r=s,t=i;break}}!r||!t||this.validateGroup(t,r)});c(this,"handlerChange",e=>{!e.target||(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())});this.initialize(e,r,t)}initialize(e,r,t){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=k,this.errorLabels=[],this.eventListeners=[],this.customStyleTags={},this.tooltips=[],typeof e=="string"){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else if(e instanceof Element)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig=L(L({},k),r),t&&(this.dictLocale=t),this.isTooltip()){const i=document.createElement("style");i.textContent=Z,this.customStyleTags[C.Label]=document.head.appendChild(i),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e){var t;return!this.currentLocale||!this.dictLocale.length?e:((t=this.dictLocale.find(i=>i.key===e))==null?void 0:t.dict[this.currentLocale])||e}getFieldErrorMessage(e){return this.getLocalisedString(e.errorMessage)||_(e.rule,e.value)}getGroupErrorMessage(e){return this.getLocalisedString(e.errorMessage)||X(e.rule)}setFieldInvalid(e,r){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(r)}setGroupInvalid(e,r){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(r)}setGroupValid(e){this.groupFields[e].isValid=!0}getElemValue(e){switch(e.type){case"checkbox":return e.checked;default:return e.value}}validateGroupRule(e,r,t,i){switch(i.rule){case g.Required:(r==="radio"||r==="checkbox")&&(t.every(s=>!s.checked)?this.setGroupInvalid(e,i):this.setGroupValid(e))}}validateFieldRule(e,r,t,i=!1){const s=t.value,a=this.getElemValue(r);switch(t.rule){case d.Required:{P(a)&&this.setFieldInvalid(e,t);break}case d.Email:{if(typeof a!="string"){this.setFieldInvalid(e,t);break}N(a)||this.setFieldInvalid(e,t);break}case d.MaxLength:{if(!s){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof s!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof a!="string"){this.setFieldInvalid(e,t);break}G(a,s)&&this.setFieldInvalid(e,t);break}case d.MinLength:{if(!s){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof s!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof a!="string"){this.setFieldInvalid(e,t);break}A(a,s)&&this.setFieldInvalid(e,t);break}case d.Password:{if(typeof a!="string"){this.setFieldInvalid(e,t);break}q(a)||this.setFieldInvalid(e,t);break}case d.StrongPassword:{if(typeof a!="string"){this.setFieldInvalid(e,t);break}O(a)||this.setFieldInvalid(e,t);break}case d.Number:{if(typeof a!="string"){this.setFieldInvalid(e,t);break}j(a)||this.setFieldInvalid(e,t);break}case d.MaxNumber:{if(!s){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof s!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof a!="string"){this.setFieldInvalid(e,t);break}const l=+a;(Number.isNaN(l)||z(l,s))&&this.setFieldInvalid(e,t);break}case d.MinNumber:{if(!s){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof s!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof a!="string"){this.setFieldInvalid(e,t);break}const l=+a;(Number.isNaN(l)||D(l,s))&&this.setFieldInvalid(e,t);break}case d.CustomRegexp:{if(!s){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}let l;try{l=new RegExp(s)}catch{console.error(`Value for ${t.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,t);break}l.test(String(a))||this.setFieldInvalid(e,t);break}default:{if(!t.validator){console.error(`Validator for custom rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof t.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const l=t.validator(a,this.fields);if(typeof l!="boolean"&&typeof l!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof l=="function"&&!i){const h=l();if(!v(h)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,t);return}return h.then(b=>{b||this.setFieldInvalid(e,t)}).catch(()=>{this.setFieldInvalid(e,t)})}l||this.setFieldInvalid(e,t)}}}validateField(e,r,t=!1){r.isValid=!0;const i=[];return[...r.rules].reverse().forEach(s=>{const a=this.validateFieldRule(e,r.elem,s,t);v(a)&&i.push(a)}),Promise.allSettled(i)}validateGroup(e,r){const t=[];return[...r.rules].reverse().forEach(i=>{const s=this.validateGroupRule(e,r.type,r.elems,i);v(s)&&t.push(s)}),Promise.allSettled(t)}focusInvalidField(){for(const e in this.fields){const r=this.fields[e];if(!r.isValid){setTimeout(()=>r.elem.focus(),0);break}}}afterSubmitValidation(){this.renderErrors(),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(){return new Promise(e=>{const r=[];Object.keys(this.fields).forEach(t=>{const i=this.fields[t],s=this.validateField(t,i);v(s)&&r.push(s)}),Object.keys(this.groupFields).forEach(t=>{const i=this.groupFields[t],s=this.validateGroup(t,i);v(s)&&r.push(s)}),r.length?Promise.allSettled(r).then(()=>{this.afterSubmitValidation(),e(!0)}):(this.afterSubmitValidation(),e(!1))})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.form.addEventListener("submit",r=>{r.preventDefault(),this.isSubmitted=!0,this.globalConfig.lockForm&&this.lockForm(),this.validate().then(t=>{var i,s;this.isValid?(i=this.onSuccessCallback)==null||i.call(this,r):(s=this.onFailCallback)==null||s.call(this,this.fields),t&&this.globalConfig.lockForm&&this.unlockForm()})})}addListener(e,r,t){r.addEventListener(e,t),this.eventListeners.push({type:e,elem:r,func:t})}addField(e,r,t){if(typeof e!="string")throw Error("Field selector is not valid. Please specify a string selector.");const i=document.querySelector(e);if(!i)throw Error(`Field with ${e} selector not found! Please check the field selector.`);if(!Array.isArray(r)||!r.length)throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`);return r.forEach(s=>{if(!("rule"in s||"validator"in s))throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`);if(!s.validator&&(!s.rule||!Object.values(d).includes(s.rule)))throw Error(`Rule should be one of these types: ${Object.values(d).join(", ")}. Provided value: ${s.rule}`)}),this.fields[e]={elem:i,rules:r,isValid:void 0,config:t},this.setListeners(i),this}addRequiredGroup(e,r,t){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const i=document.querySelector(e);if(!i)throw Error(`Group with ${e} selector not found! Please check the group selector.`);const s=i.querySelectorAll("input"),a=Array.from(s).every(h=>h.type==="radio"),l=Array.from(s).every(h=>h.type==="checkbox");if(!a&&!l)throw Error("Group should contain either or checkboxes or radio buttons");return this.groupFields[e]={rules:[{rule:g.Required,errorMessage:r}],groupElem:i,elems:Array.from(s),type:a?"radio":"checkbox",isDirty:!1,isValid:void 0,config:t},s.forEach(h=>{this.setListeners(h)}),this}setListeners(e){switch(e.type){case"checkbox":case"select-one":case"radio":{this.addListener("change",e,this.handlerChange);break}default:this.addListener("keyup",e,this.handlerChange)}}clearErrors(){var e,r,t;this.errorLabels.forEach(i=>i.remove());for(const i in this.fields){const s=this.fields[i],a=((e=s.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(l=>{s.elem.style[l]=""}),s.elem.classList.remove(((r=s.config)==null?void 0:r.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)}for(const i in this.groupFields){const s=this.groupFields[i],a=((t=s.config)==null?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(l=>{s.elems.forEach(h=>{var b;h.style[l]="",h.classList.remove(((b=s.config)==null?void 0:b.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let r=0,t=e.length;r<t;++r)e[r].setAttribute("disabled","disabled"),e[r].style.pointerEvents="none",e[r].style.webkitFilter="grayscale(100%)",e[r].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let r=0,t=e.length;r<t;++r)e[r].removeAttribute("disabled"),e[r].style.pointerEvents="",e[r].style.webkitFilter="",e[r].style.filter=""}renderTooltip(e,r,t){var y;const{top:i,left:s,width:a,height:l}=e.getBoundingClientRect(),h=r.getBoundingClientRect(),b=t||((y=this.globalConfig.tooltip)==null?void 0:y.position);switch(b){case"left":{r.style.top=`${i+l/2-h.height/2}px`,r.style.left=`${s-h.width-E}px`;break}case"top":{r.style.top=`${i-h.height-E}px`,r.style.left=`${s+a/2-h.width/2}px`;break}case"right":{r.style.top=`${i+l/2-h.height/2}px`,r.style.left=`${s+a+E}px`;break}case"bottom":{r.style.top=`${i+l+E}px`,r.style.left=`${s+a/2-h.width/2}px`;break}}return r.dataset.direction=b,{refresh:()=>{this.renderTooltip(e,r,t)}}}createErrorLabelElem(e,r,t){const i=document.createElement("div");i.innerHTML=r;const s=this.isTooltip()?t==null?void 0:t.errorLabelStyle:(t==null?void 0:t.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(i.style,s),i.classList.add((t==null?void 0:t.errorLabelCssClass)||this.globalConfig.errorLabelCssClass,"just-validate-error-label"),this.isTooltip()&&(i.dataset.tooltip="true"),this.globalConfig.testingMode&&(i.dataset.testId=`error-label-${e}`),this.errorLabels.push(i),i}renderErrors(){var e,r,t,i,s,a,l,h,b,S,y,T;if(!!this.isSubmitted){this.clearErrors(),this.isValid=!0;for(const F in this.groupFields){const n=this.groupFields[F];if(n.isValid)continue;this.isValid=!1,n.elems.forEach(w=>{var $,I;Object.assign(w.style,(($=n.config)==null?void 0:$.errorFieldStyle)||this.globalConfig.errorFieldStyle),w.classList.add(((I=n.config)==null?void 0:I.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)});const m=this.createErrorLabelElem(F,n.errorMessage,n.config);n.groupElem.appendChild(m),this.isTooltip()&&this.tooltips.push(this.renderTooltip(n.groupElem,m,(r=(e=n.config)==null?void 0:e.tooltip)==null?void 0:r.position))}for(const F in this.fields){const n=this.fields[F];if(n.isValid)continue;this.isValid=!1,n.elem.classList.add(((t=n.config)==null?void 0:t.errorFieldCssClass)||this.globalConfig.errorFieldCssClass);const m=this.createErrorLabelElem(F,n.errorMessage,n.config);if(n.elem.type==="checkbox"||n.elem.type==="radio"){const w=document.querySelector(`label[for="${n.elem.getAttribute("id")}"]`);((s=(i=n.elem.parentElement)==null?void 0:i.tagName)==null?void 0:s.toLowerCase())==="label"?(l=(a=n.elem.parentElement)==null?void 0:a.parentElement)==null||l.appendChild(m):w?(h=w.parentElement)==null||h.appendChild(m):(b=n.elem.parentElement)==null||b.appendChild(m)}else(S=n.elem.parentElement)==null||S.appendChild(m);this.isTooltip()&&this.tooltips.push(this.renderTooltip(n.elem,m,(T=(y=n.config)==null?void 0:y.tooltip)==null?void 0:T.position))}}}destroy(){this.eventListeners.forEach(e=>{e.elem.removeEventListener(e.type,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{this.addField(e,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}}return B});
;
let center = [55.761864529785726,37.62159150691727];
let btn = document.querySelector('.map__btn');
let wraper = document.querySelector('.map__wraper');

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 14
	}),
  myPlacemark = new ymaps.Placemark([55.76961763383317,37.639577401845585], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-ellipse.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10],
  });

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(myPlacemark);

  myPlacemark.events.add('click', function () {
    wraper.classList.remove('map__wraper--close')
  });
}

ymaps.ready(init);


btn.addEventListener('click', function(){
  wraper.classList.add('map__wraper--close')
});

;
const validation = new JustValidate('#form-mail');

validation
  .addField('#email-about', [
    {
      rule: 'required',
      errorMessage: 'Это поле обязательно для заполнения',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);

  const newValidation = new JustValidate('#form-request');

newValidation
  .addField('#name-contact', [
    {
      rule: 'minLength',
      errorMessage: 'Слишком мало символов',
      value: 2,
    },
    {
      rule: 'maxLength',
      errorMessage: 'Слишком много символов',
      value: 30,
    },
    {
      rule: 'customRegexp',
      errorMessage: 'Недопустимый формат',
      value: "^[А-Яа-яЁёa-zA-Z\s]+$",
    },
  ])
  .addField('#email-contact', [
    {
      rule: 'required',
      errorMessage: 'Это поле обязательно для заполнения',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);;
const btnBurgerClose = document.querySelector('.burger-close');
const btnBurgerOpen = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
const highPassBody = document.querySelector('.body');
const navItem = document.querySelectorAll('.nav__item');

btnBurgerClose.addEventListener('click', function(){
  menuBurger.classList.add('nav-close');
  highPassBody.classList.remove('stop')
})

navItem.forEach(function(navItemMenu){
  navItemMenu.addEventListener('click', function(){
    menuBurger.classList.add('nav-close');
    highPassBody.classList.remove('stop')
  })
})

btnBurgerOpen.addEventListener('click', function(){
  menuBurger.classList.remove('nav-close');
  highPassBody.classList.add('stop')
})

const search = document.querySelector('.search__wraper');
const searchBtnOpen = document.querySelector('.search__btn');
const searchBtnClose = document.querySelector('.search__btn-close');

searchBtnOpen.addEventListener('click', function(){
  search.classList.add('search__wraper--open');
})

searchBtnClose.addEventListener('click', function(){
  search.classList.remove('search__wraper--open');
})

;