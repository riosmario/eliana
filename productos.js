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
            { nombre: "Palazo de Dama", precio: 12000, sub: "Mujer", img: "img/rubros/textil/palazo_dama.jpg" },
            { nombre: "Conjunto Remera Algodón + Palazo", precio: 18500, sub: "Mujer", img: "img/rubros/textil/remera_algodon_mas_palazo.jpg" },
            { nombre: "Conjunto Niño Remera + Short", precio: 9500, sub: "Niños", img: "img/rubros/textil/remera_ninio_mas_short.jpg" },
            { nombre: "Conjunto Niña Body + Babucha", precio: 8900, sub: "Niños", img: "img/rubros/textil/body_mas_babucha_ninia.jpg" },
            { nombre: "Conjunto Niña Short + Remera", precio: 9200, sub: "Niños", img: "img/rubros/textil/short_mas_remera_ninia.jpg" },
            { nombre: "Remera Hombre XXL", precio: 7500, sub: "Hombre", img: "img/rubros/textil/remera_hombre_xxl.jpg" },
            { nombre: "Short de Dama", precio: 6800, sub: "Mujer", img: "img/rubros/textil/short_dama.jpg" }
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
