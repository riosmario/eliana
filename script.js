// 1. BASE DE DATOS UNIFICADA
const baseDeDatos = {
    "✏️ ARTICULOS ESCOLARES": {
        imagen: "img/rubros/libreria.png",
        productos: [
            { nombre: "Fibrón Ositos", precio: 1200, img: "img/rubros/escolar/fibron_ositos.jpg" },
            { nombre: "Fibrones Ezco x12", precio: 4500, img: "img/rubros/escolar/fibrones_ezco_x12.jpg" },
            { nombre: "Fibrón Olami x12", precio: 4200, img: "img/rubros/escolar/fibron_olami_x12.jpg" },
            { nombre: "Fibrón Olami x36", precio: 8900, img: "img/rubros/escolar/fibron_olami_x36.jpg" },
            { nombre: "Fibrón Olami x48", precio: 11500, img: "img/rubros/escolar/fibron_olami_x48.jpg" },
            { nombre: "Fibrón Ezco x36", precio: 7800, img: "img/rubros/escolar/fibron_ezco_x36.jpg" },
            { nombre: "Fibrón Pizarra x4 Básicos", precio: 3500, img: "img/rubros/escolar/fibron_pizarra_x4_basicos.jpg" },
            { nombre: "Fibrón Pizarra x4 No Básicos", precio: 3500, img: "img/rubros/escolar/fibron_pizarra_x4_nobasico.jpg" },
            { nombre: "Lapiceras Color x4 Filgo", precio: 2200, img: "img/rubros/escolar/lapiceras_color_x4_filgo.jpg" },
            { nombre: "Temperas Maped x12", precio: 3800, img: "img/rubros/escolar/temperas_maped_x12.jpg" },
            { nombre: "Foli N3 Luma", precio: 1500, img: "img/rubros/escolar/foli_n3_luma.jpg" },
            { nombre: "Lapiceras Dolche x12", precio: 5500, img: "img/rubros/escolar/lapiceras_dolche_x12.jpg" },
            { nombre: "Tijera Maped 17cm", precio: 1800, img: "img/rubros/escolar/tijera_maped_17cm.jpg" },
            { nombre: "Canopla 20cm", precio: 2500, img: "img/rubros/escolar/canopla_20cm.jpg" },
            { nombre: "Canopla 20cm x 7cm", precio: 2800, img: "img/rubros/escolar/canopla_20cmx7cm.jpg" },
            { nombre: "Estuche de Arte 42 piezas Nena", precio: 12500, img: "img/rubros/escolar/estuche_de_arte_42 piezas_nena.jpg" },
            { nombre: "Estuche de Arte 42 piezas Varón", precio: 12500, img: "img/rubros/escolar/estuche_de_arte_42 piezas_varon.jpg" },
            { nombre: "Funda Cuadernos 50hj", precio: 900, img: "img/rubros/escolar/funda_cuadernos_50hj.jpg" },
            { nombre: "Cartuchera Maped 4 Cuerpos", precio: 9500, img: "img/rubros/escolar/cartuchera_maped_4cuerpos.jpg" },
            { nombre: "Colores Filgo x12 Largos", precio: 3200, img: "img/rubros/escolar/colores_filgo_x12largos.jpg" },
            { nombre: "Set Geometría Económico", precio: 1800, img: "img/rubros/escolar/set_geometria_economico.jpg" },
            { nombre: "Tapas N3 Caroeta", precio: 2200, img: "img/rubros/escolar/tapas_n3_caroeta.jpg" },
            { nombre: "Lápices Negros con Goma x12", precio: 2400, img: "img/rubros/escolar/lapices_negro_con_goma_x12.jpg" }
        ]
    },
    "🎒 MOCHILAS": {
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
    },
    "🍽️ BAZAR ESCOLAR": {
        imagen: "img/rubros/bazar_escolar.jpg",
        productos: [
            { nombre: "Botella Deportiva multicolor", precio: 4500, img: "img/rubros/bazar_escolar/botella_deportiva_multicolor.jpg" },
            { nombre: "Botella de personaje", precio: 4500, img: "img/rubros/bazar_escolar/botella_deportiva_personajes.jpg" },
            { nombre: "Lonchera Personaje", precio: 8500, img: "img/rubros/bazar_escolar/lonchera_personajes.jpg" },
            { nombre: "Set Jabonera y Toalla 01", precio: 3200, img: "img/rubros/bazar_escolar/set_jaboner_y_toalla.jpg" },
            { nombre: "Set Jabonera y Toalla 02", precio: 3200, img: "img/rubros/bazar_escolar/set_jaboner_y_toalla_02.jpg" },
            { nombre: "Set Jabonera y Toalla 03", precio: 3200, img: "img/rubros/bazar_escolar/set_jaboner_y_toalla_03.jpg" },
            { nombre: "Set Jabonera y Toalla 04", precio: 3200, img: "img/rubros/bazar_escolar/set_jaboner_y_toalla_04.jpg" },
            { nombre: "Set Jabonera y Toalla 05", precio: 3200, img: "img/rubros/bazar_escolar/set_jaboner_y_toalla_05.jpg" },
            { nombre: "Set Jabonera y Toalla 06", precio: 3200, img: "img/rubros/bazar_escolar/set_jaboner_y_toalla_06.jpg" },
            { nombre: "Set Jabonera y Toalla 07", precio: 3200, img: "img/rubros/bazar_escolar/set_jaboner_y_toalla_07.jpg" }
        ]
    },
    "👗 TEXTIL": {
        imagen: "img/rubros/textil.jpg",
        productos: [
            { nombre: "Palazo de Dama", precio: 12000, img: "img/rubros/textil/palazo_dama.jpg" },
            { nombre: "Conjunto Remera Algodón + Palazo", precio: 18500, img: "img/rubros/textil/remera_algodon_mas_palazo.jpg" },
            { nombre: "Conjunto Niño Remera + Short", precio: 9500, img: "img/rubros/textil/remera_ninio_mas_short.jpg" },
            { nombre: "Conjunto Niña Body + Babucha", precio: 8900, img: "img/rubros/textil/body_mas_babucha_ninia.jpg" },
            { nombre: "Conjunto Niña Short + Remera", precio: 9200, img: "img/rubros/textil/short_mas_remera_ninia.jpg" },
            { nombre: "Remera Hombre XXL", precio: 7500, img: "img/rubros/textil/remera_hombre_xxl.jpg" },
            { nombre: "Short de Dama", precio: 6800, img: "img/rubros/textil/short_dama.jpg" }
        ]
    },
    "🧸 PELUCHES": {
        imagen: "img/rubros/peluches.jpg", 
        productos: [
            { nombre: "Peluche Gatito con Dona", precio: 8500, img: "img/rubros/peluches/peluche_gatito_con_dona.jpg" },
            { nombre: "Peluche Oso Corazón", precio: 9200, img: "img/rubros/peluches/peluche_oso_corazon.jpg" },
            { nombre: "Peluche Gatito Refresco", precio: 8500, img: "img/rubros/peluches/peluche_gatito_refresco.jpg" },
            { nombre: "Peluche Almohada Smoochy", precio: 12000, img: "img/rubros/peluches/peluche_almohada_smoochy.jpg" },
            { nombre: "Peluche Osita", precio: 7800, img: "img/rubros/peluches/peluche_osita.jpg" },
            { nombre: "Peluche Almohadón", precio: 10500, img: "img/rubros/peluches/peluche_almohadon.jpg" },
            { nombre: "Peluche Caracol", precio: 6500, img: "img/rubros/peluches/peluche_caracol.jpg" },
            { nombre: "Peluche Gatito con Disfraz", precio: 8900, img: "img/rubros/peluches/peluche_gatito_con_disfraz.jpg" }
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
            <img src="${p.img}" onclick="agrandarImagen('${p.img}')">
            <h3>${p.nombre}</h3>
            <p class="precio">$${p.precio}</p>
            <button class="btn-add" onclick="agregarAlCarrito('${p.nombre}', ${p.precio}, event)">+</button>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// 4. LÓGICA DEL CARRITO
function agregarAlCarrito(nombre, precio, event) {
    carrito.push({ nombre, precio });
    
    // Actualizamos el contador con la nueva leyenda
    const contador = document.getElementById('cart-counter');
    if (contador) {
        contador.innerText = `${carrito.length} productos agregados`;
    }

    const cartel = document.createElement("span");
    cartel.innerText = "¡Agregado!";
    cartel.className = "aviso-agregado";

    const boton = event.currentTarget || event.target;
    const contenedorPadre = boton.parentElement;
    contenedorPadre.style.position = "relative";
    contenedorPadre.appendChild(cartel);

    setTimeout(() => { cartel.remove(); }, 1500);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    
    // También actualizamos la leyenda al eliminar
    const contador = document.getElementById('cart-counter');
    if (contador) {
        contador.innerText = `${carrito.length} productos agregados`;
    }
    abrirModal();
}

// 5. MODAL Y WHATSAPP
function abrirModal() {
    const modal = document.getElementById('modal-carrito');
    const lista = document.getElementById('lista-carrito');
    const totalTxt = document.getElementById('total-precio');
    const btnWsp = document.getElementById('btn-whatsapp');

    if (!modal || !lista) return;

    modal.style.display = "flex"; 
    lista.innerHTML = '';
    let totalAcumulado = 0;

    if (carrito.length === 0) {
        lista.innerHTML = '<p style="text-align:center; padding: 20px;">Tu carrito está vacío 🛒</p>';
        if (btnWsp) {
            btnWsp.style.opacity = "0.5"; 
            btnWsp.style.pointerEvents = "none";
        }
    } else {
        if (btnWsp) {
            btnWsp.style.opacity = "1";
            btnWsp.style.pointerEvents = "auto";
        }
        
        carrito.forEach((item, index) => {
            totalAcumulado += item.precio;
            lista.innerHTML += `
                <div class="item-carrito" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #eee; padding:5px;">
                    <span style="font-size:0.9rem;">${item.nombre}</span>
                    <div>
                        <span style="font-weight:bold; margin-right:10px;">$${item.precio}</span>
                        <button onclick="eliminarDelCarrito(${index})" style="background:none; border:none; color:red; cursor:pointer; font-size:1.2rem;">×</button>
                    </div>
                </div>
            `;
        });
    }

    if (totalTxt) totalTxt.innerText = `$${totalAcumulado}`;
}

// Nueva función unificada para enviar a WhatsApp con el formato de imagen
function enviarWhatsApp() {
    const nombreCliente = document.getElementById('nombre-cliente').value;
    const direccionCliente = document.getElementById('direccion-cliente').value;
    const total = document.getElementById('total-precio').innerText;

    if (!nombreCliente) {
        alert("Por favor, ingresa tu nombre para el pedido.");
        return;
    }

    let mensaje = `*Pedido de:* ${nombreCliente}%0A`;
    if (direccionCliente) mensaje += `*Dirección:* ${direccionCliente}%0A`;
    mensaje += "--------------------------%0A";

    carrito.forEach(item => {
        mensaje += `• ${item.nombre} ($${item.precio})%0A`;
    });

    mensaje += "--------------------------%0A";
    mensaje += `*Total: ${total}*%0A%0A`; // Doble salto para la leyenda
    mensaje += "(Este precio es en Efectivo o transferencia)";

    // Número de tu negocio: 3513018831
    window.open(`https://wa.me/5493513018831?text=${mensaje}`, '_blank');
}

function cerrarModal() {
    const modal = document.getElementById('modal-carrito');
    if (modal) modal.style.display = "none";
}

// NUEVA FUNCIÓN MEJORADA DE WHATSAPP
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre-cliente').value;
    const direccion = document.getElementById('direccion-cliente').value;
    
    // Validación de datos
    if (!nombre) {
        alert("Por favor, ingresá tu nombre para procesar el pedido.");
        return;
    }

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    // Armado del mensaje profesional
    let mensaje = "¡Hola El Cielito de Eliana! 👋%0A%0A";
    mensaje += `*Pedido de:* ${nombre}%0A`;
    if (direccion) mensaje += `*Dirección:* ${direccion}%0A`;
    mensaje += "--------------------------%0A";

    let total = 0;
    carrito.forEach(item => {
        mensaje += `• ${item.nombre} ($${item.precio})%0A`;
        total += item.precio;
    });

    mensaje += "--------------------------%0A";
    mensaje += `*Total: $${total}*%0A`; // Agregamos un salto aquí
    mensaje += "%0A";
    mensaje += "Este precio es: %0A"; // Esta es la nueva leyenda
    mensaje += "_Efectivo o transferencia_"; // Esta es la nueva leyenda

    // Envío al número de negocio: 3513018831
    window.open(`https://wa.me/5493513018831?text=${mensaje}`, '_blank');

    // Reinicio de carrito y campos
    carrito = [];
    const contador = document.getElementById('cart-counter');
    if (contador) contador.innerText = "0"; 
    document.getElementById('nombre-cliente').value = "";
    document.getElementById('direccion-cliente').value = "";

    cerrarModal();
}

// 6. IMÁGENES (Corregido con IDs)
function agrandarImagen(src) {
    const modal = document.getElementById("modal-imagen");
    const imgContenido = document.getElementById("img-agrandada");

    if (modal && imgContenido) {
        imgContenido.src = src; 
        modal.style.display = "flex"; 
    }
}

// Actualizamos la función de cerrar para manejar el clic
function cerrarImagen(event) {
    // Obtenemos el ID del elemento donde se hizo clic
    const elementoClickeado = event.target.id;
    
    // Solo cerramos si se hizo clic en el fondo (modal-imagen) o en la 'X' (close-img-btn)
    // Usamos event.target.className para la X porque es un span
    if (elementoClickeado === 'modal-imagen' || event.target.className === 'close-img-btn') {
        document.getElementById("modal-imagen").style.display = "none";
    }
}

// 7. FUNCIÓN DE BÚSQUEDA
function buscarProductos() {
    const input = document.getElementById('buscador');
    const filtro = input.value.toLowerCase();
    const contenedor = document.getElementById("productos-grid");
    const btnVolver = document.getElementById("btn-volver");

    if (filtro === "") {
        mostrarRubros();
        return;
    }

    contenedor.innerHTML = "";
    contenedor.className = "lista-productos-detalle";
    if (btnVolver) btnVolver.style.display = "block";

    Object.keys(baseDeDatos).forEach(categoria => {
        baseDeDatos[categoria].productos.forEach(p => {
            if (p.nombre.toLowerCase().includes(filtro)) {
                const tarjeta = document.createElement("div");
                tarjeta.className = "tarjeta-horizontal";
                tarjeta.innerHTML = `
                    <img src="${p.img}" onclick="agrandarImagen('${p.img}')">
                    <h3>${p.nombre}</h3>
                    <p class="precio">$${p.precio}</p>
                    <button class="btn-add" onclick="agregarAlCarrito('${p.nombre}', ${p.precio}, event)">+</button>
                `;
                contenedor.appendChild(tarjeta);
            }
        });
    });

    if (contenedor.innerHTML === "") {
        contenedor.innerHTML = `<p style="text-align:center; padding:20px;">No encontramos "${filtro}"... 🔍</p>`;
    }
}

// Iniciar al cargar
window.onload = mostrarRubros;