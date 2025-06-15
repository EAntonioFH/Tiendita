let productos = document.getElementsByClassName("Productos");
let Precios = document.getElementsByClassName("Precios");
let compras = document.getElementById("Compra");

for(let i in productos)
{
    //Para evitar que cuente atributos como length
    if(i/2 || i==0)
    {
        productos.item(i).addEventListener("click",()=>
        {
            let compra = document.createElement("p");
            compra.style.display = "inlineblock";
            compra.style.color = "#FFFFFF";
            compra.textContent = productos.item(i).getAttribute("alt") + " :  " + Precios.item(i).textContent;
            compras.appendChild(compra);
        });
    }
}