(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4511:(e,t,r)=>{Promise.resolve().then(r.bind(r,7))},7:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var l=r(5155),a=r(2115);let n=(0,a.createContext)(void 0),o=e=>{let{children:t,value:r}=e;return(0,l.jsx)(n.Provider,{value:r,children:t})},s=()=>{let e=(0,a.useContext)(n);if(!e)throw Error("GameContext is undefined");let{toggleCell:t,board:r}=e;return(0,l.jsx)("div",{className:" grid grid-cols-5 gap-2 w-full max-w-6xl mx-auto",children:r.map((e,r)=>e.map((e,a)=>(0,l.jsx)("div",{className:"bg-black text-white border-3 border-teal-300 border p-4 text-center cursor-pointer w-full h-full flex items-center justify-center ".concat(e.marked&&!e.free?"line-through text-gray-500":""," ").concat(e.free?"bg-green-300 font-bold":"bg-gray-200"),onClick:()=>t(r,a),style:{fontSize:"clamp(0.8rem, 2vw, 1.2rem)"},children:e.text},"".concat(r,"-").concat(a))))})},c=["You're on mute","Sorry, I couldn't log in","I had connection issues","Can you repeat that?","I think you're frozen","Can everyone see my screen?","Let's circle back","I'll ping you later","Sorry, I was on another call","Let's take this offline","Can you hear me now?","You're muted","I'll follow up","Quick question","I have a hard stop"],i=e=>e.sort(()=>Math.random()-.5),u=()=>{let[e,t]=(0,a.useState)([]),[r,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=i([...c,...c]);t([,,,,,].fill(null).map((t,r)=>[,,,,,].fill(null).map((t,l)=>({text:2===r&&2===l?"FREE":e[5*r+l],marked:2===r&&2===l,free:2===r&&2===l}))))},[]),(0,a.useEffect)(()=>{e.some(e=>e.every(e=>e.marked))||[0,1,2,3,4].some(t=>e.every(e=>e[t].marked))||e.every((e,t)=>e[t].marked)||e.every((e,t)=>e[4-t].marked)?n("Bingo! You won!"):n(null)},[e]),(0,l.jsx)(o,{value:{board:e,toggleCell:(e,r)=>{t(t=>t.map((t,l)=>t.map((t,a)=>l===e&&a===r?{...t,marked:!t.marked}:t)))}},children:(0,l.jsxs)("div",{className:"bg-black flex flex-col items-center justify-center min-h-screen bg-gray-100 font-monoLisaRegular",children:[(0,l.jsx)("h1",{className:"text-4xl font-bold mb-16 text-white",children:"Enjoy our Sensory Virtual Bingo!"}),(0,l.jsxs)("div",{className:"w-full max-w-6xl px-4",children:[" ",(0,l.jsx)(s,{})]}),r&&(0,l.jsx)("div",{className:"mt-4 p-4 bg-[#f0006d] rounded absolute  animate-bounce",children:(0,l.jsx)("h1",{className:"text-6xl font-bold text-black animate-pulse",children:r})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(4511)),_N_E=e.O()}]);