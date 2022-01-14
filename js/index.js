/**
 * @challenge: Desafío: DOM
 * 
 * @version: v1.0.0
 * @author: Gaspar Rebord.
 * @fecha: 21/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */
// Código de aquí en adelante
$(document).ready(function () {
    class Author {
        constructor(firstName, lastName, age, location) {
            this.Nombre = firstName;
            this.Apellido = lastName;
            this.Edad = age;
            this.Localidad = location;
        }
    }

    let gaspar = new Author("Gaspar", "Rebord", 19, "Argentina");
    console.log(gaspar)

    $("#form").submit(function () {
        let fullName = $("#fullName").val();
        let age = $("#age").val();

        $("#result").text(`El usuario ${fullName} cumple la mayoria de edad: ${age}`);
    })

    class Clothes {
        constructor(type, brand, color, material, price) {
            this.type = type;
            this.brand = brand;
            this.color = color;
            this.material = material;
            this.price = price;

        }

    };
    const cloths = [];
    cloths.push(new Clothes("Zapatillas", "Adidas", "Negro", "Cuero", 12999));
    cloths.push(new Clothes("Remera", "Adidas", "Azul", "Algodon", 3999));
    cloths.push(new Clothes("Campera", "Taberniti", "Marron", "Cuero", 8599));
    cloths.push(new Clothes("Pantalones", "Taberniti", "Azul", "Jean", 6999));
    cloths.push(new Clothes("Gorra", "New Era", "Azul", "Corderoy", 4599));

    cloths.sort(function (a, b) { return a.price - b.price });


    console.log(cloths)

    for (const card of cloths) {
        $("#product").append(`   
                                            <div class="card" style="width: 18rem;">
                                                    <img src="../assets/pictures/${card.type}.jpg" class="card-img-top" alt="cloths">
                                                <div class="card-body">
                                                    <h5 class="card-title">${card.type} ${card.brand}</h5>
                                                    <p class="card-text">${card.color}, ${card.material} </p>
                                                    <a href="#" class="btn btn-primary">Añadir al carrito</a>
                                                    <a href="#" style="display: none" class="btn btn-success">Añadido con exito!</a>
                                                    <p class="card-text"><small class="text-muted">$${card.price}</small></p>
                                                </div>
                                            </div>
                            `);
    }

    $(".card").css("margin", "10px");
    $(".card-img-top").css("height", "250px");






    $(".btn").click(function (e) {
        e.preventDefault();
        $(".btn-primary").hide(500).delay(1000).show(500);
        $(".btn-success").show(500).delay(1000).hide(500);


    });


});
