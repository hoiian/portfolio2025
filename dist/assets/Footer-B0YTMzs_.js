import{r as a,j as e}from"./index-CqnLHel-.js";import{S as i}from"./SocialIcons-Cy7C-wty.js";import{c as n}from"./createLucideIcon-vMkHCrOK.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],l=n("Copy",r);function h(){const[s,t]=a.useState(!1),c=()=>{navigator.clipboard.writeText("hoiian96@gmail.com"),t(!0),setTimeout(()=>t(!1),1500)},o=new Date(document.lastModified).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
        .socialicons button,
        .socialicons a {
          background-color: transparent;
        }

        .socialicons .lucide,
        .socialicons svg {
          color: black;
        }
        .socialicons .lucide:hover,
        .socialicons svg:hover {
          color: rgb(161 161 170);
        }

        .socialicons .group:first-child {
          display: none;
        }
      `}),e.jsx("footer",{className:"text-black border-t-zinc-800 rounded-t-3xl text-center py-24 px-10 bg-zinc-50",children:e.jsxs("div",{className:"max-w-[1360px]  mx-auto",children:[e.jsx("h2",{className:"min-[1360px]:text-[180px] text-[10vw] whitespace-nowrap uppercase",children:"Let's connect"}),e.jsxs("div",{className:"socialicons flex flex-col md:flex-row items-center justify-between py-7 border-t border-black",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-black",children:"hoiian96@gmail.com"}),e.jsxs("div",{className:"relative group",children:[e.jsx("button",{onClick:c,className:"w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full focus:outline-none",children:e.jsx(l,{size:20,strokeWidth:1,className:"text-zinc-100 hover:text-zinc-400"})}),e.jsx("span",{className:"whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 top-12 text-xs text-white bg-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition",children:s?"Copied!":"Copy Email"})]})]}),e.jsx(i,{})]}),e.jsxs("div",{className:"py-7 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 text-sm text-black border-t border-black",children:[e.jsxs("span",{children:["© ",new Date().getFullYear()," Hoi Ian Wong"]}),e.jsx("span",{children:"All Rights Reserved"}),e.jsxs("span",{children:["Last updated on ",o]}),e.jsx("span",{children:"Built with React, Tailwind CSS, and Vite"})]})]})})]})}export{h as default};
