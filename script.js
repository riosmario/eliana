let carrito = [];
let productoActualZoom = null; // Guarda temporalmente el producto que se está viendo en Zoom

// 2. MOSTRAR RUBROS (Bloqueo automático por nombre exacto)
function mostrarRubros() {
    const contenedor = document.getElementById("productos-grid");
    const btnVolver = document.getElementById("btn-volver");
    const filtrosTextil = document.getElementById("filtros-textil");
    const tituloPrincipal = document.getElementById("main-title");

    if (btnVolver) btnVolver.style.display = "none";
    if (filtrosTextil) filtrosTextil.style.display = "none";

    const todosLosBotones = document.querySelectorAll('.btn-sub');
    todosLosBotones.forEach(btn => {
        btn.style.display = "flex";
        btn.style.gridColumn = "";
        btn.style.margin = "";
        btn.style.maxWidth = "";
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#000";
    });

    if (!contenedor) return;

    contenedor.innerHTML = "";
    contenedor.className = "grid-container";
    if (tituloPrincipal) tituloPrincipal.innerHTML = "CATALOGO <br> <span>WEB</span>";

    Object.keys(baseDeDatos).forEach(nombre => {
        const rubro = baseDeDatos[nombre];
        const div = document.createElement("div");

        const nombreMayus = nombre.toUpperCase();

        if (nombreMayus.includes("ESCOLARES") || nombreMayus.includes("PELUCHES") || nombreMayus.includes("BAZAR")) {
            div.className = "product-card-rubro rubro-bloqueado";
        } else {
            div.className = "product-card-rubro";
            div.onclick = () => mostrarProductos(nombre);
        }

        div.innerHTML = `
            <img src="${rubro.imagen}" onerror="this.src='https://via.placeholder.com/300x150?text=${nombre}'">
            <div class="overlay-rubro"><span>${nombre}</span></div>
        `;
        contenedor.appendChild(div);
    });
}

// 3. MOSTRAR PRODUCTOS
function mostrarProductos(nombreRubro) {
    console.log("Cargando rubro:", nombreRubro);

    const contenedor = document.getElementById("productos-grid");
    const rubro = baseDeDatos[nombreRubro];
    const btnVolver = document.getElementById("btn-volver");
    const filtrosTextil = document.getElementById("filtros-textil");
    const tituloPrincipal = document.getElementById("main-title");

    if (btnVolver) btnVolver.style.display = "block";
    contenedor.innerHTML = "";

    if (filtrosTextil) {
        if (nombreRubro.toUpperCase().includes("TEXTIL")) {
            filtrosTextil.style.display = "flex";
            console.log("Filtros activados correctamente, pantalla limpia de productos");
            if (tituloPrincipal) tituloPrincipal.innerText = nombreRubro;
            window.scrollTo(0, 0);
            return;
        } else {
            filtrosTextil.style.display = "none";
        }
    }

    if (!rubro) {
        console.error("No se encontró el rubro:", nombreRubro);
        return;
    }

    if (tituloPrincipal) tituloPrincipal.innerText = nombreRubro;

    contenedor.className = "lista-productos-detalle";
    rubro.productos.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-horizontal";

        const nombreLimpio = p.nombre.replace(/'/g, "\\'");

        tarjeta.innerHTML = `
            <img src="${p.img}" onclick="agrandarImagen('${p.img}', '${nombreLimpio}', ${p.precio})">
            <h3>${p.nombre}</h3>
            <p class="precio">$${p.precio}</p>
            <button class="btn-add" onclick="agregarAlCarrito('${nombreLimpio}', ${p.precio}, event)">+</button>
        `;
        contenedor.appendChild(tarjeta);
    });

    window.scrollTo(0, 0);
}

// FILTRAR SUB-CATEGORÍAS
function filtrarPorSub(subCategoria, elementoClicado) {
    const contenedor = document.getElementById("productos-grid");
    const todosLosBotones = document.querySelectorAll('.btn-sub');

    if (elementoClicado) {
        todosLosBotones.forEach(btn => {
            if (btn === elementoClicado) {
                btn.style.display = "flex";
                btn.style.gridColumn = "1 / -1";
                btn.style.margin = "0 auto";
                btn.style.maxWidth = "200px";
                btn.style.backgroundColor = "#ccff00";
                btn.style.color = "#000";
            } else {
                btn.style.display = "none";
            }
        });
    }

    const claveTextil = Object.keys(baseDeDatos).find(clave => clave.toUpperCase().includes("TEXTIL"));

    if (!claveTextil || !baseDeDatos[claveTextil]) {
        console.error("No se encontró el rubro TEXTIL");
        return;
    }

    const productosTextil = baseDeDatos[claveTextil].productos;
    contenedor.className = "lista-productos-detalle";
    contenedor.innerHTML = "";

    const productosFiltrados = (subCategoria === "TODOS")
        ? productosTextil
        : productosTextil.filter(p => p.sub === subCategoria);

    productosFiltrados.forEach(p => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-horizontal";
        const nombreLimpio = p.nombre.replace(/'/g, "\\'");

        tarjeta.innerHTML = `
            <img src="${p.img}" onclick="agrandarImagen('${p.img}', '${nombreLimpio}', ${p.precio})">
            <div class="info-producto">
                <h3>${p.nombre}</h3>
                <p class="precio">$${p.precio}</p>
            </div>
            <button class="btn-add" onclick="agregarAlCarrito('${nombreLimpio}', ${p.precio}, event)">+</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// 4. LÓGICA DEL CARRITO
function agregarAlCarrito(nombre, precio, event) {
    carrito.push({ nombre, precio });

    const contador = document.getElementById('cart-counter');
    if (contador) {
        contador.innerText = `${carrito.length} productos`;
    }

    if (event && event.currentTarget && event.currentTarget.classList.contains('btn-add')) {
        const cartel = document.createElement("span");
        cartel.innerText = "¡Agregado!";
        cartel.className = "aviso-agregado";

        const boton = event.currentTarget;
        const contenedorPadre = boton.parentElement;
        if (contenedorPadre && !contenedorPadre.classList.contains('zoom-action-container')) {
            contenedorPadre.style.position = "relative";
            contenedorPadre.appendChild(cartel);
            setTimeout(() => { cartel.remove(); }, 1500);
        }
    }
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);

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

function enviarWhatsApp() {
    const nombre = document.getElementById('nombre-cliente').value;
    const direccion = document.getElementById('direccion-cliente').value;

    if (!nombre) {
        alert("Por favor, ingresá tu nombre para procesar el pedido.");
        return;
    }

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

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
    mensaje += `*Total: $${total}*%0A`;
    mensaje += "%0A";
    mensaje += "Este precio es: %0A";
    mensaje += "_Efectivo o transferencia_";

    window.open(`https://wa.me/5493513018831?text=${mensaje}`, '_blank');

    carrito = [];
    const contador = document.getElementById('cart-counter');
    if (contador) contador.innerText = "0 productos";
    document.getElementById('nombre-cliente').value = "";
    document.getElementById('direccion-cliente').value = "";

    cerrarModal();
}

// 6. IMÁGENES Y ZOOM
function agrandarImagen(src, nombre, precio) {
    const modal = document.getElementById("modal-imagen");
    const imgContenido = document.getElementById("img-agrandada");
    const titulo = document.getElementById("zoom-titulo");
    const precioTxt = document.getElementById("zoom-precio");
    const btnAdd = document.getElementById("zoom-btn-add");
    const mensaje = document.getElementById('mensaje-confirmacion');

    productoActualZoom = { nombre, precio };

    if (modal && imgContenido) {
        imgContenido.src = src;

        if (mensaje) mensaje.style.display = 'none';
        if (titulo) titulo.innerText = nombre || "Producto";
        if (precioTxt) precioTxt.innerText = `$${precio ? precio : 0}`;

        if (btnAdd) {
            btnAdd.onclick = (event) => {
                event.stopPropagation();
                
                if (productoActualZoom) {
                    agregarAlCarrito(productoActualZoom.nombre, productoActualZoom.precio, event);
                }

                if (mensaje) {
                    mensaje.style.display = 'inline-block';
                    setTimeout(() => {
                        mensaje.style.display = 'none';
                    }, 2000);
                }
            };
        }

        modal.style.display = "flex";
    }
}

function cerrarImagen(event) {
    const modal = document.getElementById("modal-imagen");
    if (modal) {
        modal.style.display = "none";
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
                const nombreLimpio = p.nombre.replace(/'/g, "\\'");

                tarjeta.innerHTML = `
                    <img src="${p.img}" onclick="agrandarImagen('${p.img}', '${nombreLimpio}', ${p.precio})">
                    <h3>${p.nombre}</h3>
                    <p class="precio">$${p.precio}</p>
                    <button class="btn-add" onclick="agregarAlCarrito('${nombreLimpio}', ${p.precio}, event)">+</button>
                `;
                contenedor.appendChild(tarjeta);
            }
        });
    });

    if (contenedor.innerHTML === "") {
        contenedor.innerHTML = `<p style="text-align:center; padding:20px;">No encontramos "${filtro}"... 🔍</p>`;
    }
}

window.onload = mostrarRubros;