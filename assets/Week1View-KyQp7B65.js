import{r,c,a as t,F as n,b as a,o as l,t as o,d as k}from"./index-CCrRQxKO.js";const p=["onClick","disabled"],u=["onClick"],y={__name:"Week1View",setup(b){const d=r([{id:1,name:"珍珠奶茶",desc:"香濃奶茶搭配QQ珍珠",price:50,stock:20},{id:2,name:"冬瓜檸檬",desc:"清新冬瓜配上新鮮檸檬",price:45,stock:18},{id:3,name:"翡翠檸檬",desc:"綠茶與檸檬的完美結合",price:55,stock:34},{id:4,name:"四季春茶",desc:"香醇四季春茶，回甘無比",price:45,stock:10},{id:5,name:"阿薩姆奶茶",desc:"阿薩姆紅茶搭配香醇鮮奶",price:50,stock:25},{id:6,name:"檸檬冰茶",desc:"檸檬與冰茶的清新組合",price:45,stock:20},{id:7,name:"芒果綠茶",desc:"芒果與綠茶的獨特風味",price:55,stock:18},{id:8,name:"抹茶拿鐵",desc:"抹茶與鮮奶的絕配",price:60,stock:20}]);return(m,s)=>(l(),c(n,null,[s[2]||(s[2]=t("h1",null,"Week1 Lv2",-1)),t("table",null,[s[1]||(s[1]=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"品項"),t("th",{scope:"col"},"描述"),t("th",{scope:"col"},"價格"),t("th",{scope:"col"},"庫存")])],-1)),t("tbody",null,[(l(!0),c(n,null,a(d.value,e=>(l(),c("tr",{key:e.id},[t("td",null,o(e.name),1),t("td",null,o(e.desc),1),t("td",null,o(e.price),1),t("td",null,[t("button",{type:"button",onClick:i=>e.stock=e.stock-1,disabled:e.stock<1}," - ",8,p),s[0]||(s[0]=t("label",null,null,-1)),k(o(e.stock)+" ",1),t("button",{type:"button",onClick:i=>e.stock=e.stock+1},"+",8,u)])]))),128))])])],64))}};export{y as default};
