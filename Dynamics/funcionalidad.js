let productos = document.getElementsByClassName("Productos");
let Precios = document.getElementsByClassName("Precios");
let compras = document.getElementById("Compra");
let cantidad = [0,0,0,0,0,0,0,0,0];

for(let i in productos)
{
    //Para evitar que cuente atributos como length
    if(i/2 || i==0)
    {
        productos.item(i).addEventListener("click",()=>
        {
            let compra;
            let nomProducto = productos.item(i).getAttribute("alt");
            
            if(!(compra = document.getElementById(nomProducto)))
            {
                compra = document.createElement("p");
                compra.style.display = "inlineblock";
                compra.style.color = "#FFFFFF";
                compra.id = nomProducto
                compras.appendChild(compra);
            }

            cantidad[i]++;

            compra.textContent = nomProducto + " :  " + Precios.item(i).textContent + "    X"  + cantidad[i];

        });
    }
}