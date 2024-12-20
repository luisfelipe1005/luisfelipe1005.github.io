export {preencheCA, preenchefor, preenchemed, preenchefra, preenchepv, preencheatq, preenchedano }
function preencheCA(nd, papel){
  var tabelaCA
    if(papel===1){
     tabelaCA = [
        { ND: 0.25, Defesa: 11 },
        { ND: 0.5, Defesa: 14 },
        { ND: 1, Defesa: 16 },
        { ND: 2, Defesa: 19 },
        { ND: 3, Defesa: 21 },
        { ND: 4, Defesa: 23 },
        { ND: 5, Defesa: 24 },
        { ND: 6, Defesa: 27 },
        { ND: 7, Defesa: 31 },
        { ND: 8, Defesa: 33 },
        { ND: 9, Defesa: 34 },
        { ND: 10, Defesa: 36 },
        { ND: 11, Defesa: 41 },
        { ND: 12, Defesa: 43 },
        { ND: 13, Defesa: 44 },
        { ND: 14, Defesa: 46 },
        { ND: 15, Defesa: 50 },
        { ND: 16, Defesa: 53 },
        { ND: 17, Defesa: 54 },
        { ND: 18, Defesa: 56 },
        { ND: 19, Defesa: 59 },
        { ND: 20, Defesa: 61 },
        { ND: 21, Defesa: 65 },
        { ND: 22, Defesa: 70 },
      ];
        }
     else if(papel===2){
            tabelaCA = [
                { ND: 0.25, Defesa: 10 },
                { ND: 0.5, Defesa: 13 },
                { ND: 1, Defesa: 15 },
                { ND: 2, Defesa: 18 },
                { ND: 3, Defesa: 20 },
                { ND: 4, Defesa: 22 },
                { ND: 5, Defesa: 23 },
                { ND: 6, Defesa: 26 },
                { ND: 7, Defesa: 30 },
                { ND: 8, Defesa: 32 },
                { ND: 9, Defesa: 33 },
                { ND: 10, Defesa: 35 },
                { ND: 11, Defesa: 40 },
                { ND: 12, Defesa: 42 },
                { ND: 13, Defesa: 43 },
                { ND: 14, Defesa: 45 },
                { ND: 15, Defesa: 49 },
                { ND: 16, Defesa: 52 },
                { ND: 17, Defesa: 53 },
                { ND: 18, Defesa: 55 },
                { ND: 19, Defesa: 58 },
                { ND: 20, Defesa: 60 },
                { ND: 21, Defesa: 64 },
                { ND: 22, Defesa: 69 },
              ];

      
}
else{
 tabelaCA = [
    { ND: 0.25, Defesa: 11 },
    { ND: 0.5, Defesa: 12 },
    { ND: 1, Defesa: 14 },
    { ND: 2, Defesa: 17 },
    { ND: 3, Defesa: 19 },
    { ND: 4, Defesa: 21 },
    { ND: 5, Defesa: 22 },
    { ND: 6, Defesa: 25 },
    { ND: 7, Defesa: 29 },
    { ND: 8, Defesa: 31 },
    { ND: 9, Defesa: 32 },
    { ND: 10, Defesa: 34 },
    { ND: 11, Defesa: 39 },
    { ND: 12, Defesa: 41 },
    { ND: 13, Defesa: 42 },
    { ND: 14, Defesa: 44 },
    { ND: 15, Defesa: 48 },
    { ND: 16, Defesa: 51 },
    { ND: 17, Defesa: 52 },
    { ND: 18, Defesa: 54 },
    { ND: 19, Defesa: 57 },
    { ND: 20, Defesa: 59 },
    { ND: 21, Defesa: 63 },
    { ND: 22, Defesa: 67 },
  ];
}
const resultado = tabelaCA.find(item => item.ND === nd);
return resultado.Defesa;
}


function preenchefor(nd, papel){
  var preenchefor
    if(papel===1){
      preenchefor = [
        { ND: 0.25, resistencia: 3 },
        { ND: 0.5, resistencia: 6 },
        { ND: 1, resistencia: 11 },
        { ND: 2, resistencia: 13 },
        { ND: 3, resistencia: 15 },
        { ND: 4, resistencia: 16 },
        { ND: 5, resistencia: 17 },
        { ND: 6, resistencia: 18 },
        { ND: 7, resistencia: 20 },
        { ND: 8, resistencia: 21 },
        { ND: 9, resistencia: 21 },
        { ND: 10, resistencia: 22 },
        { ND: 11, resistencia: 24 },
        { ND: 12, resistencia: 26 },
        { ND: 13, resistencia: 28 },
        { ND: 14, resistencia: 28 },
        { ND: 15, resistencia: 30 },
        { ND: 16, resistencia: 30 },
        { ND: 17, resistencia: 30 },
        { ND: 18, resistencia: 32 },
        { ND: 19, resistencia: 32 },
        { ND: 20, resistencia: 34 },
        { ND: 21, resistencia: 36 },
        { ND: 22, resistencia: 38 },
      ];
        }
     else if(papel===2){
      preenchefor = [
        { ND: 0.25, resistencia: 2 },
        { ND: 0.5, resistencia: 5 },
        { ND: 1, resistencia: 10 },
        { ND: 2, resistencia: 12 },
        { ND: 3, resistencia: 14 },
        { ND: 4, resistencia: 15 },
        { ND: 5, resistencia: 16 },
        { ND: 6, resistencia: 17 },
        { ND: 7, resistencia: 19 },
        { ND: 8, resistencia: 20 },
        { ND: 9, resistencia: 20 },
        { ND: 10, resistencia: 21 },
        { ND: 11, resistencia: 23 },
        { ND: 12, resistencia: 25 },
        { ND: 13, resistencia: 25 },
        { ND: 14, resistencia: 27 },
        { ND: 15, resistencia: 27 },
        { ND: 16, resistencia: 29 },
        { ND: 17, resistencia: 29 },
        { ND: 18, resistencia: 31 },
        { ND: 19, resistencia: 31 },
        { ND: 20, resistencia: 33 },
        { ND: 21, resistencia: 35 },
        { ND: 22, resistencia: 37 },
              ];

      
}
else{
  preenchefor = [
    { 
      ND: 0.25, resistencia: 3 },
        { ND: 0.5, resistencia: 6 },
        { ND: 1, resistencia: 11 },
        { ND: 2, resistencia: 13 },
        { ND: 3, resistencia: 15 },
        { ND: 4, resistencia: 16 },
        { ND: 5, resistencia: 17 },
        { ND: 6, resistencia: 18 },
        { ND: 7, resistencia: 20 },
        { ND: 8, resistencia: 21 },
        { ND: 9, resistencia: 21 },
        { ND: 10, resistencia: 22 },
        { ND: 11, resistencia: 24 },
        { ND: 12, resistencia: 26 },
        { ND: 13, resistencia: 26 },
        { ND: 14, resistencia: 28 },
        { ND: 15, resistencia: 28 },
        { ND: 16, resistencia: 30 },
        { ND: 17, resistencia: 30 },
        { ND: 18, resistencia: 32 },
        { ND: 19, resistencia: 32 },
        { ND: 20, resistencia: 34 },
        { ND: 21, resistencia: 36 },
        { ND: 22, resistencia: 38 },
  ];
}
const resultado = preenchefor.find(item => item.ND === nd);
return resultado.resistencia;
}


function preenchemed(nd, papel){
  var preenchemed
    if(papel===1){
      preenchemed = [
        { ND: 0.25, resistencia: 0 },
        { ND: 0.5, resistencia: 3 },
        { ND: 1, resistencia: 5 },
        { ND: 2, resistencia: 7 },
        { ND: 3, resistencia: 9 },
        { ND: 4, resistencia: 10 },
        { ND: 5, resistencia: 11 },
        { ND: 6, resistencia: 12 },
        { ND: 7, resistencia: 14 },
        { ND: 8, resistencia: 15 },
        { ND: 9, resistencia: 15 },
        { ND: 10, resistencia: 16 },
        { ND: 11, resistencia: 18 },
        { ND: 12, resistencia: 20 },
        { ND: 13, resistencia: 20 },
        { ND: 14, resistencia: 22 },
        { ND: 15, resistencia: 22 },
        { ND: 16, resistencia: 24 },
        { ND: 17, resistencia: 24 },
        { ND: 18, resistencia: 26 },
        { ND: 19, resistencia: 26 },
        { ND: 20, resistencia: 28 },
        { ND: 21, resistencia: 30 },
        { ND: 22, resistencia: 33 },
      ];
        }
     else if(papel===2){
      preenchemed = [
        { ND: 0.25, resistencia: 0 },
        { ND: 0.5, resistencia: 3 },
        { ND: 1, resistencia: 5 },
        { ND: 2, resistencia: 7 },
        { ND: 3, resistencia: 9 },
        { ND: 4, resistencia: 10 },
        { ND: 5, resistencia: 11 },
        { ND: 6, resistencia: 12 },
        { ND: 7, resistencia: 14 },
        { ND: 8, resistencia: 15 },
        { ND: 9, resistencia: 15 },
        { ND: 10, resistencia: 16 },
        { ND: 11, resistencia: 18 },
        { ND: 12, resistencia: 20 },
        { ND: 13, resistencia: 20 },
        { ND: 14, resistencia: 22 },
        { ND: 15, resistencia: 22 },
        { ND: 16, resistencia: 24 },
        { ND: 17, resistencia: 24 },
        { ND: 18, resistencia: 26 },
        { ND: 19, resistencia: 26 },
        { ND: 20, resistencia: 28 },
        { ND: 21, resistencia: 30 },
        { ND: 22, resistencia: 33 },
              ];

      
}
else{
  preenchemed = [ 
    { ND: 0.25, resistencia: 0 },
    { ND: 0.5, resistencia: 3 },
    { ND: 1, resistencia: 5 },
    { ND: 2, resistencia: 7 },
    { ND: 3, resistencia: 9 },
    { ND: 4, resistencia: 10 },
    { ND: 5, resistencia: 11 },
    { ND: 6, resistencia: 12 },
    { ND: 7, resistencia: 14 },
    { ND: 8, resistencia: 15 },
    { ND: 9, resistencia: 15 },
    { ND: 10, resistencia: 16 },
    { ND: 11, resistencia: 18 },
    { ND: 12, resistencia: 20 },
    { ND: 13, resistencia: 20 },
    { ND: 14, resistencia: 22 },
    { ND: 15, resistencia: 22 },
    { ND: 16, resistencia: 24 },
    { ND: 17, resistencia: 24 },
    { ND: 18, resistencia: 26 },
    { ND: 19, resistencia: 26 },
    { ND: 20, resistencia: 28 },
    { ND: 21, resistencia: 30 },
    { ND: 22, resistencia: 33 },
  ];
}
const resultado = preenchemed.find(item => item.ND === nd);
return resultado.resistencia;
}

function preenchefra(nd, papel){
  var preenchefra
    if(papel===1){
      preenchefra = [
        { ND: 0.25, resistencia: -2 },
        { ND: 0.5, resistencia: -1 },
        { ND: 1, resistencia: 0 },
        { ND: 2, resistencia: 2 },
        { ND: 3, resistencia: 3 },
        { ND: 4, resistencia: 4 },
        { ND: 5, resistencia: 5 },
        { ND: 6, resistencia: 6 },
        { ND: 7, resistencia: 7 },
        { ND: 8, resistencia: 8 },
        { ND: 9, resistencia: 9 },
        { ND: 10, resistencia: 10 },
        { ND: 11, resistencia: 11 },
        { ND: 12, resistencia: 12 },
        { ND: 13, resistencia: 13 },
        { ND: 14, resistencia: 14 },
        { ND: 15, resistencia: 15 },
        { ND: 16, resistencia: 16 },
        { ND: 17, resistencia: 17 },
        { ND: 18, resistencia: 18 },
        { ND: 19, resistencia: 19 },
        { ND: 20, resistencia: 20 },
        { ND: 21, resistencia: 22 },
        { ND: 22, resistencia: 25 },
      ];
        }
     else if(papel===2){
      preenchefra = [
        { ND: 0.25, resistencia: -1 },
        { ND: 0.5, resistencia: 0 },
        { ND: 1, resistencia: 1 },
        { ND: 2, resistencia: 3 },
        { ND: 3, resistencia: 4 },
        { ND: 4, resistencia: 5 },
        { ND: 5, resistencia: 6 },
        { ND: 6, resistencia: 7 },
        { ND: 7, resistencia: 8 },
        { ND: 8, resistencia: 9 },
        { ND: 9, resistencia: 10 },
        { ND: 10, resistencia: 11 },
        { ND: 11, resistencia: 12 },
        { ND: 12, resistencia: 13 },
        { ND: 13, resistencia: 14 },
        { ND: 14, resistencia: 15 },
        { ND: 15, resistencia: 16 },
        { ND: 16, resistencia: 17 },
        { ND: 17, resistencia: 18 },
        { ND: 18, resistencia: 19 },
        { ND: 19, resistencia: 20 },
        { ND: 20, resistencia: 21 },
        { ND: 21, resistencia: 23 },
        { ND: 22, resistencia: 26 },
              ];

      
}
else{
  preenchefra = [         { 
    ND: 0.25, resistencia: -2 },
    { ND: 0.5, resistencia: -1 },
    { ND: 1, resistencia: 0 },
    { ND: 2, resistencia: 2 },
    { ND: 3, resistencia: 3 },
    { ND: 4, resistencia: 4 },
    { ND: 5, resistencia: 5 },
    { ND: 6, resistencia: 6 },
    { ND: 7, resistencia: 7 },
    { ND: 8, resistencia: 8 },
    { ND: 9, resistencia: 9 },
    { ND: 10, resistencia: 10 },
    { ND: 11, resistencia: 11 },
    { ND: 12, resistencia: 12 },
    { ND: 13, resistencia: 13 },
    { ND: 14, resistencia: 14 },
    { ND: 15, resistencia: 15 },
    { ND: 16, resistencia: 16 },
    { ND: 17, resistencia: 17 },
    { ND: 18, resistencia: 18 },
    { ND: 19, resistencia: 19 },
    { ND: 20, resistencia: 20 },
    { ND: 21, resistencia: 22 },
    { ND: 22, resistencia: 25 },
  ];
}
const resultado = preenchefra.find(item => item.ND === nd);
return resultado.resistencia;
}

function preenchepv(nd, papel){
  var tabelapv
    if(papel===1){
     tabelapv= [
        { ND: 0.25, vida: 7 },
        { ND: 0.5, vida: 15 },
        { ND: 1, vida: 35 },
        { ND: 2, vida: 70 },
        { ND: 3, vida: 105 },
        { ND: 4, vida: 140 },
        { ND: 5, vida: 200 },
        { ND: 6, vida: 240 },
        { ND: 7, vida: 280 },
        { ND: 8, vida: 320 },
        { ND: 9, vida: 360 },
        { ND: 10, vida: 400 },
        { ND: 11, vida: 550 },
        { ND: 12, vida: 600 },
        { ND: 13, vida: 650 },
        { ND: 14, vida: 700 },
        { ND: 15, vida: 750 },
        { ND: 16, vida: 800 },
        { ND: 17, vida: 1020 },
        { ND: 18, vida: 1080 },
        { ND: 19, vida: 1140 },
        { ND: 20, vida: 1200 },
        { ND: 21, vida: 2500 },
        { ND: 22, vida: 4000 },
      ];
        }
     else if(papel===2){
            tabelapv= [
              { ND: 0.25, vida: 4 },
              { ND: 0.5, vida: 6 },
              { ND: 1, vida: 9},
              { ND: 2, vida: 14 },
              { ND: 3, vida: 21 },
              { ND: 4, vida: 28 },
              { ND: 5, vida: 40 },
              { ND: 6, vida: 48 },
              { ND: 7, vida: 56 },
              { ND: 8, vida: 64 },
              { ND: 9, vida: 72 },
              { ND: 10, vida: 80 },
              { ND: 11, vida: 110 },
              { ND: 12, vida: 120 },
              { ND: 13, vida: 130 },
              { ND: 14, vida: 140 },
              { ND: 15, vida: 150 },
              { ND: 16, vida: 160 },
              { ND: 17, vida: 204 },
              { ND: 18, vida: 216 },
              { ND: 19, vida: 228 },
              { ND: 20, vida: 240 },
              { ND: 21, vida: 500 },
              { ND: 22, vida: 800 },
              ];

      
}
else{
 tabelapv= [
  { ND: 0.25, vida: 5 },
  { ND: 0.5, vida: 11 },
  { ND: 1, vida: 25 },
  { ND: 2, vida: 49 },
  { ND: 3, vida: 74 },
  { ND: 4, vida: 98 },
  { ND: 5, vida: 140 },
  { ND: 6, vida: 168 },
  { ND: 7, vida: 196 },
  { ND: 8, vida: 224 },
  { ND: 9, vida: 252 },
  { ND: 10, vida: 280 },
  { ND: 11, vida: 385 },
  { ND: 12, vida: 420 },
  { ND: 13, vida: 455 },
  { ND: 14, vida: 490 },
  { ND: 15, vida: 525 },
  { ND: 16, vida: 560 },
  { ND: 17, vida: 714 },
  { ND: 18, vida: 756 },
  { ND: 19, vida: 798 },
  { ND: 20, vida: 840 },
  { ND: 21, vida: 1750 },
  { ND: 22, vida: 2800 },
  ];
}
const resultado = tabelapv.find(item => item.ND === nd);
return resultado.vida;
}

function preencheatq(nd, papel){
  var tabelaatq
    if(papel===1){
    tabelaatq= [
      { ND: 0.25,ataque: 6 },
        { ND: 0.5,ataque: 7},
        { ND: 1,ataque: 9},
        { ND: 2,ataque: 12 },
        { ND: 3,ataque: 14 },
        { ND: 4,ataque: 16},
        { ND: 5,ataque: 17 },
        { ND: 6,ataque: 20 },
        { ND: 7,ataque: 24 },
        { ND: 8,ataque: 26 },
        { ND: 9,ataque: 27 },
        { ND: 10,ataque: 29 },
        { ND: 11,ataque: 34 },
        { ND: 12,ataque: 36 },
        { ND: 13,ataque: 37 },
        { ND: 14,ataque: 39 },
        { ND: 15,ataque: 43 },
        { ND: 16,ataque: 46 },
        { ND: 17,ataque: 47 },
        { ND: 18,ataque: 49 },
        { ND: 19,ataque: 52 },
        { ND: 20,ataque: 54 },
        { ND: 21,ataque: 58 },
        { ND: 22,ataque: 65 },
      ];
        }
     else if(papel===2){
           tabelaatq= [
        { ND: 0.25,ataque: 7 },
        { ND: 0.5,ataque: 9},
        { ND: 1,ataque: 11 },
        { ND: 2,ataque: 14 },
        { ND: 3,ataque: 16 },
        { ND: 4,ataque: 17 },
        { ND: 5,ataque: 20 },
        { ND: 6,ataque: 24 },
        { ND: 7,ataque: 26 },
        { ND: 8,ataque: 27 },
        { ND: 9,ataque: 29 },
        { ND: 10,ataque: 34 },
        { ND: 11,ataque: 36 },
        { ND: 12,ataque: 37 },
        { ND: 13,ataque: 39 },
        { ND: 14,ataque: 43 },
        { ND: 15,ataque: 46 },
        { ND: 16,ataque: 47 },
        { ND: 17,ataque: 49 },
        { ND: 18,ataque: 52 },
        { ND: 19,ataque: 54 },
        { ND: 20,ataque: 56 },
        { ND: 21,ataque: 60 },
        { ND: 22,ataque: 67 },
              ];

      
}
else{
tabelaatq= [
        { ND: 0.25,ataque: 4 },
        { ND: 0.5,ataque: 5 },
        { ND: 1,ataque: 7 },
        { ND: 2,ataque: 10 },
        { ND: 3,ataque: 12 },
        { ND: 4,ataque: 14 },
        { ND: 5,ataque: 15 },
        { ND: 6,ataque: 18 },
        { ND: 7,ataque: 22 },
        { ND: 8,ataque: 24 },
        { ND: 9,ataque: 25 },
        { ND: 10,ataque: 27 },
        { ND: 11,ataque: 32 },
        { ND: 12,ataque: 34 },
        { ND: 13,ataque: 35 },
        { ND: 14,ataque: 37 },
        { ND: 15,ataque: 41 },
        { ND: 16,ataque: 44 },
        { ND: 17,ataque: 45 },
        { ND: 18,ataque: 47 },
        { ND: 19,ataque: 50 },
        { ND: 20,ataque: 52 },
        { ND: 21,ataque: 55 },
        { ND: 22,ataque: 60 },
  ];
}
const resultado = tabelaatq.find(item => item.ND === nd);
return resultado.ataque;
}

function preenchedano(nd, papel){
  var tabeladano
    if(papel===1){
    tabeladano= [
      { ND: 0.25,dano: 8 },
        { ND: 0.5,dano: 10},
        { ND: 1,dano: 15},
        { ND: 2,dano: 18 },
        { ND: 3,dano: 21 },
        { ND: 4,dano: 24},
        { ND: 5,dano: 40 },
        { ND: 6,dano: 56 },
        { ND: 7,dano: 62 },
        { ND: 8,dano: 68 },
        { ND: 9,dano: 74 },
        { ND: 10,dano: 80 },
        { ND: 11,dano: 130 },
        { ND: 12,dano: 144 },
        { ND: 13,dano: 158},
        { ND: 14,dano: 172 },
        { ND: 15,dano: 186},
        { ND: 16,dano: 200 },
        { ND: 17,dano: 270 },
        { ND: 18,dano: 288 },
        { ND: 19,dano: 306 },
        { ND: 20,dano: 324 },
        { ND: 21,dano: 360 },
        { ND: 22,dano: 500 },
      ];
        }
     else if(papel===2){
           tabeladano= [
    { ND: 0.25,dano: 9},
        { ND: 0.5,dano: 11},
        { ND: 1,dano: 17},
        { ND: 2,dano: 21 },
        { ND: 3,dano: 24 },
        { ND: 4,dano: 32},
        { ND: 5,dano: 56 },
        { ND: 6,dano: 62 },
        { ND: 7,dano: 68 },
        { ND: 8,dano: 74 },
        { ND: 9,dano: 80 },
        { ND: 10,dano: 105 },
        { ND: 11,dano: 144 },
        { ND: 12,dano: 158 },
        { ND: 13,dano: 172},
        { ND: 14,dano: 186 },
        { ND: 15,dano: 200},
        { ND: 16,dano: 235 },
        { ND: 17,dano: 288 },
        { ND: 18,dano: 306 },
        { ND: 19,dano: 324 },
        { ND: 20,dano: 344 },
        { ND: 21,dano: 385 },
        { ND: 22,dano: 540 },
              ];

      
}
else{
tabeladano= [
      { ND: 0.25,dano: 8 },
        { ND: 0.5,dano: 10},
        { ND: 1,dano: 15},
        { ND: 2,dano: 18 },
        { ND: 3,dano: 21 },
        { ND: 4,dano: 24},
        { ND: 5,dano: 40 },
        { ND: 6,dano: 56 },
        { ND: 7,dano: 62 },
        { ND: 8,dano: 68 },
        { ND: 9,dano: 74 },
        { ND: 10,dano: 80 },
        { ND: 11,dano: 130 },
        { ND: 12,dano: 144 },
        { ND: 13,dano: 158},
        { ND: 14,dano: 172 },
        { ND: 15,dano: 186},
        { ND: 16,dano: 200 },
        { ND: 17,dano: 270 },
        { ND: 18,dano: 288 },
        { ND: 19,dano: 306 },
        { ND: 20,dano: 324 },
        { ND: 21,dano: 360 },
        { ND: 22,dano: 500 },
  ];
}
const resultado = tabeladano.find(item => item.ND === nd);
return resultado.dano;
}