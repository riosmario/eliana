const baseDeDatos = {
    /*"✏️ ARTICULOS ESCOLARES": {
        imagen: "img/rubros/_rubros_titulos/libreria.png",
        productos: [
            { nombre: "Fibrón Ositos", precio: 1200, img: "img/rubros/libreria/LIBRERIA_FIBRONES OSITOS.png" },
            { nombre: "Fibrones Ezco x12", precio: 4500, img: "img/rubros/libreria/escolar_fibrones_ezco_x12.jpg" },
            { nombre: "Fibrón Olami x12", precio: 4200, img: "img/rubros/libreria/escolar_fibron_olami_x12.jpg" },
            { nombre: "Fibrón Olami x36", precio: 8900, img: "img/rubros/libreria/escolar_fibron_olami_x36.jpg" },
            { nombre: "Fibrón Olami x48", precio: 11500, img: "img/rubros/libreria/escolar_fibron_olami_x48.jpg" },
            { nombre: "Fibrón Ezco x36", precio: 7800, img: "img/rubros/libreria/escolar_fibron_ezco_x36.jpg" },
            { nombre: "Fibrón Pizarra x4 Básicos", precio: 3500, img: "img/rubros/libreria/escolar_fibron_pizarra_x4_basicos.jpg" },
            { nombre: "Fibrón Pizarra x4 No Básicos", precio: 3500, img: "img/rubros/libreria/escolar_fibron_pizarra_x4_nobasico.jpg" },
            { nombre: "Lapiceras Color x4 Filgo", precio: 2200, img: "img/rubros/libreria/escolar_lapiceras_color_x4_filgo.jpg" },
            { nombre: "Temperas Maped x12", precio: 3800, img: "img/rubros/libreria/escolar_temperas_maped_x12.jpg" },
            { nombre: "Foli N3 Luma", precio: 1500, img: "img/rubros/libreria/escolar_foli_n3_luma.jpg" },
            { nombre: "Lapiceras Dolche x12", precio: 5500, img: "img/rubros/libreria/escolar_lapiceras_dolche_x12.jpg" },
            { nombre: "Tijera Maped 17cm", precio: 1800, img: "img/rubros/libreria/escolar_tijera_maped_17cm.jpg" },
            { nombre: "Canopla 20cm", precio: 2500, img: "img/rubros/libreria/escolar_canopla_20cm.jpg" },
            { nombre: "Canopla 20cm x 7cm", precio: 2800, img: "img/rubros/libreria/escolar_canopla_20cmx7cm.jpg" },
            { nombre: "Estuche de Arte 42 piezas Nena", precio: 12500, img: "img/rubros/libreria_escolar/estuche_de_arte_42 piezas_nena.jpg" },
            { nombre: "Estuche de Arte 42 piezas Varón", precio: 12500, img: "img/rubros/libreria_escolar/estuche_de_arte_42 piezas_varon.jpg" },
            { nombre: "Funda Cuadernos 50hj", precio: 900, img: "img/rubros/libreria/escolar_funda_cuadernos_50hj.jpg" },
            { nombre: "Cartuchera Maped 4 Cuerpos", precio: 9500, img: "img/rubros/libreria/escolar_cartuchera_maped_4cuerpos.jpg" },
            { nombre: "Colores Filgo x12 Largos", precio: 3200, img: "img/rubros/libreria/escolar_colores_filgo_x12largos.jpg" },
            { nombre: "Set Geometría Económico", precio: 1800, img: "img/rubros/libreria/escolar_set_geometria_economico.jpg" },
            { nombre: "Tapas N3 Caroeta", precio: 2200, img: "img/rubros/escolar/libreria_tapas_n3_caroeta.jpg" },
            { nombre: "Lápices Negros con Goma x12", precio: 2400, img: "img/rubros/libreria/escolar_lapices_negro_con_goma_x12.jpg" }
        ]
    },
    
    "🎒 MOCHILAS": {
        imagen: "img/rubros/_rubros_titulos/mochila.jpg",
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
        imagen: "img/rubros/_rubros_titulos/bazar_escolar.jpg",
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
    */

    "👗 TEXTIL": {
        imagen: "img/rubros/textil.jpg",
        productos: [
            { nombre: "Bombacha Cola Less - Lisa Talle Especial - Algodón", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_BOM,BACHA DE DAMA COLA LESS LISA ESPECIAL ALGODON.jpg" },
            { nombre: "Bombacha Cola Less - Atigrada Talle Especial", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_BOMBACHA COLA LESS ATIGRADA.jpg" },
            { nombre: "CORPIÑO DEPORTIVO - Talles Especiales", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_CORPIÑO DEPORTIVO TALLES ESPECIALES.jpg" },
            { nombre: "Medias de Dama de Algodón Floyd", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_MEDIAS DE ALGODON FLOYD.jpg" },
            { nombre: "Medias 3/4 Pantaloneras", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_MEDIAS PANTALONERAS .jpg" },            
            { nombre: "BUZO DARLON de Dama - Talle 6", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_BUZO DARLON DE DAMA TALLE 6.jpg" },
            { nombre: "BUZO MICRO POLAR Dama", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_BUZO MICRO POLAR DAMA .jpg" },
            { nombre: "CAMPERA FRIZADA de dama Talles 1, 2 y 3", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_CAMPERA FRIZADA DE DAMA TALLES 1 2 Y 3.jpg" },
            { nombre: "CAMPERA FRIZADA de dama con doble linea en Mangas", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_CAMPERA FRIZADA DE MUJER CON RAYAS EN MANGAS.jpg" },
            { nombre: "BUZO FRIZADO OVERSIZE de Dama - Negro", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_BUZO FRIZADO OVERSIZE DAMA NEGRA.jpg" },
            { nombre: "CAMPERA OVERSIZE FRIZADA de Dama - Negra", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_CAMPERA OVERSIZE FRIZADA DAMA NEGRA.jpg" },
            { nombre: "CAMPERA OVERSIZE FRIZADA de Dama - Verde Oliva", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_CAMPERA OVERSIZE FRIZADA DAMA VERDE OLIVA.jpg" },
            { nombre: "MEDIA POLERA Morley de Algodón - Talles S, M, L y XL - Colores varios", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_MEDIA POLERA MORLEY DE ALGODON TALLE S M L XL CELESTE.jpg" },
            { nombre: "MEDIA POLERA Morley de Algodón - Talles S, M, L y XL - Colores varios", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_MEDIA POLERA MORLEY Y ALGONDON COLORES.jpg" },
            { nombre: "Palazo de Dama Morley de Lanilla - Talle 7 - Marrón", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PALAZO DE DAMA MORLEY DE LANILLA TALLE 7 MARRON.jpg" },
//          { nombre: "Palazo 000", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PALAZO_000.jpg" },
//          { nombre: "Palazo 001", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PALAZO_001.jpg" },
            { nombre: "PANTALON DARLON Dama - Talles 4, 5, y 6", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DARLOM DAMA TALLES 4 5 6.jpg" },
            { nombre: "PANTALON DARLON Dama con Bolsillo - Talle 7 - Azul", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DARLON DAMA CON BOLSILLO TALLE 7 AZUL.jpg" },
            { nombre: "PANTALON DARLON Dama con Bolsillo - Talle 8 - Marrón", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DARLON DAMA CON BOLSILLO TALLE 8 MARRON.jpg" },
            { nombre: "PANTALON PLUSH dama - Talle 4", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DE DAMA DE PLUSH TALLE 4.jpg" },
            { nombre: "PANTALON MORLEY DE LANILLA dama - Tiro Alto Talle 3 con Botones Marrón", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DE DAMA LANILLA DE MORLEY TIRO ALTO TALLE 3 CON BOTONES MARRON.jpg" },
            { nombre: "PANTALON MORLEY DE LANILLA dama - Tiro Alto Talle 3 con Botones Negro", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DE DAMA LANILLA DE MORLEY TIRO ALTO TALLE 3 CON BOTONES NEGRO.jpg" },
            { nombre: "PANTALON MORLEY DE LANILLA dama - Tiro Alto Talle 3 Negro", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DE DAMA LANILLA DE MORLEY TIRO ALTO TALLE 3 NEGRO.jpg" },
            { nombre: "PANTALON MORLEY DE LANILLA dama - Tiro Alto Talle 5 Marrón", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DE DAMA LANILLA DE MORLEY TIRO ALTO TALLE 5 MARRON.jpg" },
            { nombre: "PANTALON MORLEY DE LANILLA dama - Tiro Alto Talle 6 Azul", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON DE DAMA LANILLA DE MORLEY TIRO ALTO TALLE 6 AZUL.jpg" },
            { nombre: "PANTALON PALAZO FRIZADO Dama - Talle 5", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON PALAZO FRIZADO DAMA TALLE 5.jpg" },
            { nombre: "PANTALON PALAZO FRIZADO Dama", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON PALAZO FRIZADO DAMA.jpg" },
            { nombre: "PANTALON SASTRERO Dama - Talle 7", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_PANTALON SASTRERO DE DAMA TALLE 7.jpg" },
            { nombre: "POLERA DE MORLEY DE LANILLA S M L XL", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_POLERA MORLEY LANILLA S M L XL .jpg" },
            { nombre: "POLERA DE MORLEY DE LANILLA S M L XL Colores", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_POLERA MORLEY LANILLA S M L XL COLORES.jpg" },
            { nombre: "POLERA DE MORLEY DE LANILLA Talle S, M, L Y XL - Beige", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_POLERA MORLEY LANILLA TALLE S M L XL BEIGE.jpg" },
            { nombre: "POLERA DE MORLEY DE LANILLA Talle S, M, L Y XL - Gris", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_POLERA MORLEY LANILLA TALLE S M L XL GRIS.jpg" },
            { nombre: "POLERA DE MORLEY DE LANILLA Talle S, M, L Y XL - Marrón", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_POLERA MORLEY LANILLA TALLE S M L XL MARRON.jpg" },
            { nombre: "POLERA DE MORLEY DE LANILLA Talle S, M, L Y XL - Negro", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_POLERA MORLEY LANILLA TALLE S M L XL NEGRO.jpg" },
            { nombre: "Remera Manga Larga de MODAL - Talle 6", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_REMERA MANGA LARGA DE MODAL TALLE 6.jpg" },
            { nombre: "Remera Manga Larga MICROPOLAR de dama", precio: 0, sub: "Mujer", img: "img/rubros/textil/mujer/MUJER_REMERA MANGA LARGA MICROPLAR DE MUJER.jpg" },
            
        ]
    },

    /*
    "🧸 PELUCHES": {
        imagen: "img/rubros/_rubros_titulos/peluches.jpg",
        productos: [
            { nombre: "Peluche Gatito con Dona", precio: 8500, img: "img/rubros/peluches/peluche_gatito_con_dona.jpg" },
            { nombre: "Peluche Oso Corazón", precio: 9200, img: "img/rubros/peluches/peluche_oso_corazon.jpg" },
            { nombre: "Peluche Gatito Refresco", precio: 8500, img: "img/rubros/peluches/peluche_gatito_refresco.jpg" },
            { nombre: "Peluche Almohada Smoochy", precio: 12000, img: "img/rubros/peluches/peluche_almohada_smoochy.jpg" },
            { nombre: "Peluche Osita", precio: 7800, img: "img/rubros/peluches/peluche_osita.jpg" },
            { nombre: "Peluche Almohadon", precio: 10500, img: "img/rubros/peluches/peluche_almohadon.jpg" },
            { nombre: "Peluche Caracol", precio: 6500, img: "img/rubros/peluches/peluche_caracol.jpg" },
            { nombre: "Peluche Gatito con Disfraz", precio: 8900, img: "img/rubros/peluches/peluche_gatito_con_disfraz.jpg" }
        ]
    }
    */
};