
//salvo in albero il contenuto di questo obj
const albero = {tipo: "melo", quantitaDiFrutti: 14};
//copia - le due varibaili si riferiscono allo stesso obj in memoria
const copiaAlbero = albero;

//cambio proprieta di copiaAlbero
copiaAlbero.tipo = "pesco"

//entrambi gli alberi cambiano tipo-poiche non ci sono 2 ma solo un albero
console.log("albero:", albero)
console.log("copiaAlbero:",copiaAlbero)

///////////////////OGGETTO ANNIDATO//////////

