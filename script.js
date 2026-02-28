// 1. BASE DE DATOS UNIFICADA
const baseDeDatos = {
    "ARTICULOS ESCOLARES": {
        imagen: "img/rubros/libreria.png",
        productos: [
            { nombre: "Diccionario Artemisa Ingles-Español", precio: 7500, img: "img/dic1.jpg" },
            { nombre: "Diccionario LAPRIDA Español", precio: 8500, img: "img/dic2.jpg" }
        ]
    },
    "MOCHILAS": {
        imagen: "img/rubros/mochila.jpg",
        productos: [
            { nombre: "Cool Girl", precio: 16900, img: "img/rubros/mochilas/cool_girld.jpg" },
            { nombre: "Dream", precio: 24900, img: "img/rubros/mochilas/dream.jpg" },
            { nombre: "Game", precio: 15000, img: "img/rubros/mochilas/game.jpg" },
            { nombre: "Gamer", precio: 15000, img: "img/rubros/mochilas/gamer.jpg" },
            { nombre: "Mochi 01", precio: 18000, img: "img/rubros/mochilas/mochi_01.jpg" },
            { nombre: "Mochi 03", precio: 18000, img: "img/rubros/mochilas/mochi_03.jpg" },
            { nombre: "Mochi 04", precio: 18000, img: "img/rubros/mochilas/mochi_04.jpg" },
            { nombre: "Moch 05", precio: 18000, img: "img/rubros/mochilas/moch_05.jpg" },
            { nombre: "Mochi 06", precio: 18000, img: "img/rubros/mochilas/mochi_06.jpg" },
            { nombre: "Mochi 07", precio: 18000, img: "img/rubros/mochilas/mochi_07.jpg" },
            { nombre: "Jardín 01", precio: 12000, img: "img/rubros/mochilas/jardin_01.jpg" },
            { nombre: "Lentejuelas", precio: 14000, img: "img/rubros/mochilas/lentejuelas.jpg" },
            { nombre: "Mochila Jardín", precio: 12000, img: "img/rubros/mochilas/mochila_jardin.jpg" }
        ]
    }
};

let carrito = [];

// 2. MOSTRAR RUBROS
function mostrarRubros() {
    const contenedor = document.getElementById("productos-grid");
    const btnVolver = document.getElementById("btn-volver");
    if (btnVolver) btnVolver.style.display = "none";
    if (!contenedor) return;

    contenedor.innerHTML = "";
    contenedor.className = "grid-container";

    Object.keys(baseDeDatos).forEach(nombre => {
        const rubro = baseDeDatos[nombre];
        const div = document.createElement("div");
        div.className = "product-card-rubro";
        div.onclick = () => mostrarProductos(nombre);
        div.innerHTML = `
            <img src="${rubro.imagen}" onerror="this.src='https://via.placeholder.com/300x150?text=${nombre}'">
            <div class="overlay-rubro"><span>${nombre}</span></div>
        `;
        contenedor.appendChild(div);
    });
}

// 3. MOSTRAR PRODUCTOS
function mostrarProductos(nombreRubro) {
    const contenedor = document.getElementById("productos-grid");
    const rubro = baseDeDatos[nombreRubro];
    const btnVolver = document.getElementById("btn-volver");

    if (btnVolver) btnVolver.style.display = "block";
    if (!contenedor) return;

    contenedor.innerHTML = "";
    contenedor.className = "lista-productos-detalle";

    rubro.productos.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-horizontal";

        tarjeta.innerHTML = `
            <img src="${p.img}" onclick="agrandarImagen('${p.img}', '${p.nombre}')">
            <h3>${p.nombre}</h3>
            <p class="precio">$${p.precio}</p>
            <button class="btn-add" onclick="agregarAlCarrito('${p.nombre}', ${p.precio}, event)">+</button>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// 4. LÓGICA DEL CARRITO
function agregarAlCarrito(nombre, precio, event) {
    // 1. Lógica de carrito
    carrito.push({ nombre, precio });
    
    // 2. Actualizar contador
    const contador = document.getElementById('cart-counter');
    if (contador) contador.innerText = carrito.length;
    
    // 3. Crear el aviso
    const cartel = document.createElement("span");
    cartel.innerText = "¡Agregado!";
    cartel.className = "aviso-agregado";
    
    // Lo metemos en el padre (la tarjeta) para que no falle
    const boton = event.currentTarget || event.target;
    const contenedorPadre = boton.parentElement;
    
    // IMPORTANTE: Aseguramos que el padre sea el punto de referencia
    contenedorPadre.style.position = "relative";
    
    contenedorPadre.appendChild(cartel);
    
    // 4. Limpieza
    setTimeout(() => {
        cartel.remove();
    }, 1500);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    const contador = document.getElementById('cart-counter');
    if (contador) contador.innerText = carrito.length;
    abrirModal(); // Refresca el modal para que desaparezca el item
}

// 5. MODAL Y WHATSAPP
function abrirModal() {
    const modal = document.getElementById('modal-carrito');
    const lista = document.getElementById('lista-carrito');
    const totalTxt = document.getElementById('total-precio');

    if (!modal || !lista) return;

    modal.style.display = "flex";
    lista.innerHTML = '';
    let totalAcumulado = 0;

    if (carrito.length === 0) {
        lista.innerHTML = '<p style="text-align:center;">Tu carrito está vacío</p>';
    } else {
        carrito.forEach((item, index) => {
            totalAcumulado += item.precio;
            lista.innerHTML += `
                <div class="item-carrito" style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding:5px;">
                    <span>${item.nombre}</span>
                    <span>$${item.precio}</span>
                    <button onclick="eliminarDelCarrito(${index})" style="background:none; border:none; color:red; cursor:pointer;">❌</button>
                </div>
            `;
        });
    }

    if (totalTxt) totalTxt.innerText = `$${totalAcumulado}`;
}

function cerrarModal() {
    const modal = document.getElementById('modal-carrito');
    if (modal) modal.style.display = "none";
}

// Evento para enviar a WhatsApp
const btnWsp = document.getElementById('btn-whatsapp');
if (btnWsp) {
    btnWsp.onclick = function () {
        if (carrito.length === 0) return alert("El carrito está vacío");

        let mensaje = "Hola! Mi pedido es:%0A%0A";
        let total = 0;
        carrito.forEach(item => {
            mensaje += `• ${item.nombre} ($${item.precio})%0A`;
            total += item.precio;
        });
        mensaje += `%0A*Total: $${total}*`;

        // Tu número: 3513018831
        window.open(`https://wa.me/5493513018831?text=${mensaje}`, '_blank');
    };
}

// 6. IMÁGENES
function agrandarImagen(src, nombre) {
    const modal = document.getElementById("modal-imagen");
    if (!modal) return;
    document.getElementById("img-agrandada").src = src;
    document.getElementById("caption-imagen").innerText = nombre;
    modal.style.display = "flex";
}

function cerrarImagen() {
    const modal = document.getElementById("modal-imagen");
    if (modal) modal.style.display = "none";
}

// Iniciar al cargar
window.onload = mostrarRubros;