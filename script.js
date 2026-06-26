let carrito = [];

// 2. MOSTRAR RUBROS
// 2. MOSTRAR RUBROS (Modificada para resetear los filtros bloqueados)
function mostrarRubros() {
    const contenedor = document.getElementById("productos-grid");
    const btnVolver = document.getElementById("btn-volver");
    const filtrosTextil = document.getElementById("filtros-textil"); 
    const tituloPrincipal = document.getElementById("main-title");

    if (btnVolver) btnVolver.style.display = "none";
    if (filtrosTextil) filtrosTextil.style.display = "none"; 
    
    // ✨ TRUCO LIMPIADOR: Restauramos los estilos de los filtros al volver al menú principal
    const todosLosBotones = document.querySelectorAll('.btn-sub');
    todosLosBotones.forEach(btn => {
        btn.style.display = "flex";          // Volvemos a mostrar todas las tarjetas ocultas
        btn.style.gridColumn = "";           // Quitamos el centrado forzado
        btn.style.margin = "";               // Quitamos márgenes manuales
        btn.style.maxWidth = "";             // Quitamos ancho máximo
        btn.style.backgroundColor = "#fff";  // Reestablecemos el color blanco del fondo
        btn.style.color = "#000";            // Volvemos el texto a negro
    });

    if (!contenedor) return;

    contenedor.innerHTML = "";
    contenedor.className = "grid-container";
    if (tituloPrincipal) tituloPrincipal.innerHTML = "CATALOGO <br> <span>WEB</span>";

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

// 3. MOSTRAR PRODUCTOS (Modificada para que NO cargue productos al inicio si es TEXTIL)
function mostrarProductos(nombreRubro) {
    console.log("Cargando rubro:", nombreRubro);

    const contenedor = document.getElementById("productos-grid");
    const rubro = baseDeDatos[nombreRubro];
    const btnVolver = document.getElementById("btn-volver");
    const filtrosTextil = document.getElementById("filtros-textil");
    const tituloPrincipal = document.getElementById("main-title");

    if (btnVolver) btnVolver.style.display = "block";

    // Vaciamos el contenedor para limpiar la pantalla
    contenedor.innerHTML = "";

    // Si es el rubro Textil, activamos los mosaicos grandes y NO cargamos productos abajo
    if (filtrosTextil) {
        if (nombreRubro.toUpperCase().includes("TEXTIL")) {
            filtrosTextil.style.display = "flex"; // Mostramos los sub-menús en mosaico
            console.log("Filtros activados correctamente, pantalla limpia de productos");
            if (tituloPrincipal) tituloPrincipal.innerText = nombreRubro;
            window.scrollTo(0,0);
            return; // <--- IMPORTANTE: Con este 'return' evitamos que dibuje productos abajo
        } else {
            filtrosTextil.style.display = "none";
        }
    }

    if (!rubro) {
        console.error("No se encontró el rubro:", nombreRubro);
        return;
    }

    if (tituloPrincipal) tituloPrincipal.innerText = nombreRubro;
    
    // Si llegara a ser otro rubro que no es textil, sí cargamos todo de una
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

    window.scrollTo(0,0);
}

function filtrarPorSub(subCategoria, elementoClicado) {
    const contenedor = document.getElementById("productos-grid");
    
    // 1. EFECTO VISUAL EN LAS TARJETAS DE FILTRO
    // Buscamos todos los botones de los sub-rubros (Asegurate de que usen esta clase)
    const todosLosBotones = document.querySelectorAll('.btn-sub');
    
    if (elementoClicado) {
        todosLosBotones.forEach(btn => {
            if (btn === elementoClicado) {
                // Al que tocamos: lo dejamos visible y lo centramos
                btn.style.display = "flex";
                btn.style.gridColumn = "1 / -1"; // Ocupa todo el ancho del grid para poder centrarse
                btn.style.margin = "0 auto";
                btn.style.maxWidth = "200px";    // Para que no se estire feo en pantallas grandes
                btn.style.backgroundColor = "#ccff00"; // Tu verde flúor para resaltar qué se eligió
                btn.style.color = "#000";
            } else {
                // A todos los demás: ¡los ocultamos!
                btn.style.display = "none";
            }
        });
    }

    // 2. BUSCADOR INTELIGENTE EN LA BASE DE DATOS
    const claveTextil = Object.keys(baseDeDatos).find(clave => clave.toUpperCase().includes("TEXTIL"));
    
    if (!claveTextil || !baseDeDatos[claveTextil]) {
        console.error("No se encontró el rubro TEXTIL");
        return;
    }

    const productosTextil = baseDeDatos[claveTextil].productos;
    contenedor.className = "lista-productos-detalle";
    contenedor.innerHTML = "";
    
    // 3. FILTRADO DE LA ROPA
    const productosFiltrados = (subCategoria === "TODOS") 
        ? productosTextil 
        : productosTextil.filter(p => p.sub === subCategoria);
    
    // 4. RENDERIZAR LOS PRODUCTOS ABAJO
    productosFiltrados.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-horizontal";
        tarjeta.innerHTML = `
            <img src="${p.img}" onclick="agrandarImagen('${p.img}')">
            <div class="info-producto">
                <h3>${p.nombre}</h3>
                <p class="precio">$${p.precio}</p>
            </div>
            <button class="btn-agregar" onclick="agregarAlCarrito('${p.nombre}', ${p.precio})">Agregar</button>
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
        contador.innerText = `${carrito.length} productos`;
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
        contador.innerText = `${carrito.length} productos`;
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