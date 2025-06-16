let productos = document.getElementsByClassName("Productos");
let Precios = document.getElementsByClassName("Precios");
let compras = document.getElementById("Compra");
let cantidad = [0,0,0,0,0,0,0,0,0];
let Total = document.getElementById("Total");
let aPagar = 0;

for(let i in productos)
{
    //Para evitar que cuente atributos como length
    if(i/2 || i==0)
    {
        productos.item(i).addEventListener("click",()=>
        {
            let compra;
            let nomProducto = productos.item(i).getAttribute("alt");
            let precio = Precios.item(i).textContent;
            let numPrecio = precio.split("");
            let pagar;
            
            numPrecio.shift();
            pagar= toNumber(numPrecio);
            
            aPagar+=pagar;

            if(!(compra = document.getElementById(nomProducto)))
            {
                compra = document.createElement("p");
                compra.style.display = "inlineblock";
                compra.style.color = "#000000";
                compra.id = nomProducto
                compras.appendChild(compra);
                
                compra.addEventListener("click",()=>
                {
                    aPagar -= pagar;

                    if(cantidad[i] > 0)
                        cantidad[i]--;

                    if(cantidad[i] == 0)
                        compra.remove();

                    compra.textContent = nomProducto + " :  " + Precios.item(i).textContent + "    X"  + cantidad[i];
                    Total.textContent="Total $" + aPagar.toFixed(2);
                })
            }


            cantidad[i]++;

            compra.textContent = nomProducto + " :  " + precio + "    X"  + cantidad[i];

            Total.textContent="Total $" + aPagar.toFixed(2);

        });
    }
}

function toNumber(cadena)
{
    let num = 0;
    let aux;
    let decimal = false;
    let decimales = 10;

    for(let i=0; i<cadena.length;i++)
    {
        aux = parseInt(cadena[i]);

        if(decimal)
        {    
            aux/=decimales;
            decimales*=10;
            num += aux;
        }
        else if(cadena[i] == '.')
        {
            decimal = true;
        }
        else if(!decimal)
        {
            num*=10;
            num+=aux;
        }
    }

    return num;
}