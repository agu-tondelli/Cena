// Revisión de porciones de Cena: node check-porciones.js
// Las recetas son para 4 (2 adultos + 2 chicos) y cada cena tiene 2 platos, así que cada uno es media cena.
const fs=require('fs');const s=fs.readFileSync(__dirname+'/index.html','utf8');
const ex=n=>{const a=s.indexOf('const '+n+'={');let i=a+n.length+7,d=0;for(;i<s.length;i++){if(s[i]=='{')d++;else if(s[i]=='}'){d--;if(!d)break}}return eval('('+s.slice(a+n.length+7,i+1)+')')};
const D=ex('D'),C=ex('C'),G=ex('GPU');
// Gramos por pieza para unidades sin GPU (aprox.)
const PZ={muslos:110,lubina:200,huevos:60,tortillas:40,entrecot:1,masa:400,panhamb:60,arrozvasito:125,jamonc:30,alcachofa:20,anchoas:4,trigueros:20,perejil:0,apio:50};
const LIM={ // máximo razonable para 4, como medio plato de la cena
 proteina:{keys:['entrecot','pollo','pollotrozos','muslos','lubina','merluza','tofu','langostinos','atun','pavo'],max:750},
 huevos:{keys:['huevos'],max:6,u:true},
 hidrato:{keys:['pasta','fideos','fideoschinos','arroz','arrozvasito'],max:500},
 patata:{keys:['patata'],max:800},
 total:{max:1700}}; // total sin líquidos (ml)
let bad=0;
for(const k in D){const r=D[k];if(!r.i||!r.i.length)continue;let tot=0;const by={};
 for(const [key,q] of r.i){const c=C[key]||[];const g=c[3]==='u'?q*(G[key]||PZ[key]||0):q;if(c[3]!=='ml')tot+=g;
  for(const [cat,l] of Object.entries(LIM))if(l.keys&&l.keys.includes(key))by[cat]=(by[cat]||0)+(l.u?q:g)}
 const w=[];for(const [cat,l] of Object.entries(LIM)){const v=cat==='total'?tot:by[cat];if(v>l.max)w.push(cat+' '+Math.round(v)+(l.u?' u':' g')+' > '+l.max)}
 if(w.length){bad++;console.log('⚠️ ',k.padEnd(11),r.es,'→',w.join('; '))}}
console.log(bad?`\n${bad} receta(s) para revisar.`:'✅ Todas las porciones están en rango para 4.');
