import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const l="feedback-form-state",t=document.querySelector(".feedback-form"),r=t.querySelector("input"),s=t.querySelector("textarea");t.addEventListener("input",o);t.addEventListener("submit",n);function o(a){a.target.name==="email"&&(e.email=a.target.value.trim()),a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem(l,JSON.stringify(e))}i();function i(){const a=localStorage.getItem(l);if(a){const m=JSON.parse(a);e.email=m.email,e.message=m.message,s.value=e.message,r.value=e.email}}function n(a){a.preventDefault(),e.email===""||e.message===""?alert("«Please fill all fields»"):(console.log(e),e.email="",e.message="",localStorage.removeItem(l),a.currentTarget.reset())}
//# sourceMappingURL=2-form.js.map
