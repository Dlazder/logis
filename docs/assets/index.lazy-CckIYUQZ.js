import{j as t,L as a,c as o,S as d}from"./index-D8F6hW0V.js";const p="_productsGrid_4tbuj_1",n={productsGrid:p},l="_wrapper_117ai_1",u="_card_117ai_7",h="_pricePrimary_117ai_17",g="_cardImg_117ai_20",j="_cardContent_117ai_27",x="_title_117ai_32",_="_price_117ai_17",e={wrapper:l,card:u,pricePrimary:h,cardImg:g,cardContent:j,title:x,price:_};function s(m){const r=m.data,c="/products/$productId",i={productId:String(r.id)};return t.jsx("div",{className:e.wrapper,children:t.jsxs("div",{className:e.card,children:[t.jsx("div",{className:e.cardImg,children:t.jsx(a,{to:c,params:i,children:t.jsx("img",{src:r.imgSrc,alt:"product-image"})})}),t.jsxs("div",{className:e.cardContent,children:[t.jsx(a,{to:c,params:i,className:e.title,children:r.title}),t.jsxs("div",{className:e.price,children:["Цена: ",t.jsxs("span",{className:e.pricePrimary,children:[" ",r.price,"₽"]})]})]})]})})}const k=o("/products/")({component:C});function C(){return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),t.jsxs("div",{className:n.productsGrid,children:[t.jsx(s,{data:{id:1,title:"Auto Clutch & Brake",price:12e3,imgSrc:"https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-1-290x350.jpg"}}),t.jsx(s,{data:{id:2,title:"Auto Clutch & Brake",price:13e3,imgSrc:"https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-2-290x350.jpg"}}),t.jsx(s,{data:{id:3,title:"Auto Clutch & Brake",price:15e3,imgSrc:"https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-3-290x350.jpg"}}),t.jsx(s,{data:{id:4,title:"Auto Clutch & Brake",price:18e3,imgSrc:"https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-4-290x350.jpg"}}),t.jsx(s,{data:{id:5,title:"Auto Clutch & Brake",price:2e4,imgSrc:"https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-5-290x350.jpg"}}),t.jsx(s,{data:{id:6,title:"Auto Clutch & Brake",price:22e3,imgSrc:"https://template.hasthemes.com/tromic/tromic/assets/images/product/medium-size/shop/1-6-290x350.jpg"}})]})]})}export{k as Route};