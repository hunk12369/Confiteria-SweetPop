function getBotResponse(input) {

    /////////////////////////////////////////////////////////////////////////
    
    //Mensaje entrante:
    
    if (input == "Hola" || input == "hola" || input == "hols" || input == "hi" || input == "hello"){ 
        return "Gracias por contactarte con nosotros, puedes hablar con el bot usando solo palabras claves como “Ofertas”, “Contactos”, etc. Recuerda que el Bot funciona con la App, así que si quieres obtener respuesta se claro con la palabra y así ayudarte." +
        '<span> 🧁Si deseas ver los productos puedes escribir “Categoria”. </span>' 
        
    }
    //despedida
    
    else if (input == "adios" || input == "Adios" || input == "adiós" || input == "Adiós" ) {
        return "Hasta luego, vuelva pronto 🧁"
    }
    
    // AVISO DE RESERVAS 
    
    else if (input == "pedidos" || input == "Pedidos" || input == "Reserva" || input == "reserva" || input == "reservas" || input == "Reservas" || input == "pago en linea" || input == "Pagos" || input == "pagos" ) {
        return "<strong>ADVERTENCIA:</strong> para ver las reservas, pedidas y/o pagos, estas opciones debes realizarlas en la aplicación."
    }
    //Contactos del lugar:
    
    else if (input == "Contactos" || input == "contactos" || input == "Numero" || input == "Número" || input == "numero" || input == "número" || input == "Facebook" || input == "facebook" || input == "fb" || input == "Gamil" || input == "gmail" || input == "Insta" || input == "Instagram" || input == "instagram" || input == "redes" || input == "Redes" || input == "redes sociales") {
        return "<span>Aquí tienes algunas redes y número de referencia para contactarte con la confitería: </span> " +
        '🍨 <strong>Puedes llamar al:</strong> 72551345 </span>' +
        '<span>🍨 <strong>Gmail:</strong> sweetpop.lapaz@gmail.com </span>' +
        '<span>🍨 <strong>Instagram:</strong> SweetPop_Lapaz </span>' ;
    }
    
    //Direccion del lugar: 
    
    else if (input == "Dirección"  || input == "dirección"  || input == "Direccion"  || input == "direccion"  || input == "Gps"  || input == "gps"  || input == "Ubicación"  || input == "ubicación"  || input == "Ubicacion"  || input == "ubicacion"  || input == "Zona"  || input == "zona"  || input == "Lugar"  || input == "lugar"  || input == "Localización"  || input == "Localizacion"  || input == "localización"  || input == "localizacion" ) {
        return "Estamos ubicados en <strong>La Paz-Obrajes</strong>, Av. Hernando Siles, Calle 15 <img src= 'src/assets/img.bot/gps.png' alt='imagen' >"
    }
    
    //Promociones-Ofertas
    
    else if (input == "Promoción"  || input == "promoción" || input == "promocion" || input == "Promocion" || input == "Ofertas" || input == "ofertas") {
        return "Por el mes de Junio contamos con las siguientes promociones:" +
    
        "<span>▶️Dia del maestro:🚫 <img src= 'static/imagenes/o1.png' alt='imagen'></img> </span>" +
        "<span>▶️Por San Juan llévate las minitortas 2*1 a 50Bs ✔️ <img src= 'src/assets/img.bot/o2.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>ADVERTENCIA:</strong>  si quieres saber más de nuestros productos en promoción, puedes visitar la sección de “Ofertas"</span>';
        }
    
     //CATEGORIAS
    else if (input == "Categoria"  || input == "Categoría"  || input == "categoria" || input == "Categoria" || input == "Seccion" || input == "seccion" || input == "Sección" || input == "sección" || input == "Categorias" || input == "categorias") {
         return "Contamos con las categorías de:" +
         '<span>1️⃣ <strong>Chocolate</strong> </span>' +
         '<span>2️⃣ <strong>Tortas</strong> </span>' +
         '<span>3️⃣ <strong>Masitas</strong> </span>' +    
         "Ingresa el número para ver los productos.";
     }
    
     //opcion 1 seccion chocolate
    
    else if (input == "1" || input == "1." ) {
        return "<strong>Sección de Chocolate:</strong>" +
        '<span>🍫 Cakepop Simple </span>' +
        '<span>🍫 Cakepop con Diseño</span>' +
        '<span>🍫 Bombas Explosivas</span>' +
        '<span>🍫 Bolitas de Chocolate</span>' +
        '<span>🍫 Brownie de Chocolate</span>' + 
        '<span>🍫 Ramo de Cakepop</span>' +
        '<span>🍫 Ramo de Fresas</span>' +  
        "Si quieres datos del producto, escribe el nombre tal y como esta en el mensaje.";
    }
    
    //opcion 2 seccion tortas
    
    else if (input == "2" || input == "2." ) {
        return "<strong>Sección de Tortas:</strong>" +
        '<span>🍰 Mini tortas </span>' +
        '<span>🍰 Pizza Brownie</span>' +
        "Si quieres datos del producto, escribe el nombre tal y como esta en el mensaje.";
    }
    
    //opcion 3 seccion masitas
    
    else if (input == "3" || input == "3." ) {
        return "<strong>Sección de Masitas:</strong>" +
        '<span>🍪 Alfajores</span>' +
        '<span>🍪 Alfajores de Galleta</span>' +
        '<span>🍪 Cuñape</span>' +
        '<span>🍪 Galletitas</span>' +
        '<span>🍪 Galleta Primaveral</span>' +
        '<span>🍪 Galleta Reinita</span>' + 
        '<span>🍪 Masita Lunette</span>' +
        '<span>🍪 Masita Princesa</span>' + 
        '<span>🍪 Masita Ojo de Arandano</span>' + 
        '<span>🍪 Masita Pionono</span>' +
        '<span>🍪 Trufas de Mazapan</span>' +
        
        "Si quieres datos del producto, escribe el nombre tal y como esta en el mensaje.";
    
    }
    
    //////////////////////////////////////////////////
    //PRODUCTOS DE LA CONFITERIA
    
    //CAKEPOP SIMPLE
    
    else if (input == "Cakepop Simple"  || input == "cakepop simple" || input == "Cakepop simple" ) {
        return "<span><strong>Cakepop Simple</strong> <img src= 'src/assets/img.bot/p1.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>5Bs. cada uno</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Lleva 12 por el precio de 9Bs.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Bizcocho, queso crema y chocolate.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //CAKEPOP CON DISEÑO
    
    else if (input == "Cakepop con Diseño"  || input == "cakepop con diseño" || input == "Cakepop con diseño" ) {
        return "<span><strong>Cakepop con Diseño</strong> <img src= 'src/assets/img.bot/p2.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>7Bs. cada uno</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Lleva 12 por el precio de 10Bs.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Bizcocho, queso crema y chocolate.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //RAMO DE CAKEPOP
    
    else if (input == "Ramo de Cakepop"  || input == "ramo de cakepop" || input == "Ramo de cakepop" ) {
        return "<span><strong>Ramo de Cakepop</strong> <img src= 'src/assets/img.bot/p3.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>20Bs.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>12</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Bizcocho, queso crema y chocolate.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //ramo de fresas
    
    else if (input == "Ramo de Fresas"  || input == "ramo de fresas" || input == "Ramo de fresas" ) {
        return "<span><strong>Ramo de Fresas</strong> <img src= 'src/assets/img.bot/p4.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>20Bs.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Lleva 5 por el precio de 4 ramos.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>12</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Mediano</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Fresas, Chocolate y manteca de cacao.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //bombas explosivas
    
    else if (input == "Bombas Explosivas"  || input == "bombas explosivas" || input == "Bombas explosivas" ) {
        return "<span><strong>Bombas Explosivas</strong> <img src= 'src/assets/img.bot/p5.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>6Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>6</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Harina de arroz, cocoa y chocolate.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //bolitas de chocolate
    
    else if (input == "Bolitas de Chocolate"  || input == "bolitas de chocolate" || input == "Bolitas de chocolate" ) {
        return "<span><strong>Bolitas de Chocolate</strong> <img src= 'src/assets/img.bot/p6.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>6Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Lleva 2 por el precio de 1 paquete.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>20</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Chocolate, crema de leche y mantequilla.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    // mini tortas
    
    else if (input == "Mini Tortas"  || input == "mini tortas" || input == "Mini tortas" ) {
        return "<span><strong>Mini Tortas</strong> <img src= 'src/assets/img.bot/p7.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>30Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Lleva 2 por el precio de 1.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>4</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Mediano</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Harina de trigo, leche, huevo y mantequilla.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //Galletitas
    
    else if (input == "Galletitas"   || input == "galletitas" ) {
        return "<span><strong>Galletitas</strong> <img src= 'src/assets/img.bot/p8.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>2Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Harina, Manteca y ralladura de limón.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //galleta primaveral 
    
    else if (input == "Galleta Primaveral"   || input == "galleta primaveral" || input == "Galleta primaveral"  ) {
        return "<span><strong>Galleta Primaveral</strong> <img src= 'src/assets/img.bot/p9.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>3Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Huevo, manteca y flores comestibles</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //masitas lunette
    
    else if (input == "Masitas Lunette"   || input == "masitas lunette" || input == "Masitas lunette"  ) {
        return "<span><strong>Masitas Lunette</strong> <img src= 'src/assets/img.bot/p10.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>4Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Lleva 3 por el precio de 2.</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Manteca, Azúcar, Huevo y Mermelada</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //alfajores
    
    else if (input == "Alfajores" || input == "alfajores"  ) {
        return "<span><strong>Alfajores</strong> <img src= 'src/assets/img.bot/p11.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>3Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Whisky, Harina, Dulce de leche y manteca.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //masita princesa
    
    else if (input == "Masita Princesa" || input == "masita princesa"  || input == "Masita princesa"  ) {
        return "<span><strong>Masita Princesa</strong> <img src= 'src/assets/img.bot/p12.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>4Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Mediano</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Harina leudante, jugo de limón, dulce de leche y vino dulce.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //masita ojo de arandanos
    
    else if (input == "Masita Ojo de Arandano" || input == "masita ojo de arandano"  || input == "Masita ojo de arandano"  ) {
        return "<span><strong>Masita Ojo de Arandano</strong> <img src= 'src/assets/img.bot/p13.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>3Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Mermelada, juego de naranja y queso crema.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //masita pionono
    
    else if (input == "Masita Pionono" || input == "masita pionono"  || input == "Masita pionono"  ) {
        return "<span><strong>Masita Pionono</strong> <img src= 'src/assets/img.bot/p14.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>4Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Miel, Harina, Azúcar y huevo.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //trufas de mazapan
    
    else if (input == "Trufas de Mazapán" || input == "trufas de mazapán"  || input == "Trufas de mazapan"  || input == "trufas de mazapan" ) {
        return "<span><strong>Trufas de Mazapán</strong> <img src= 'src/assets/img.bot/p15.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>2Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Almendras, galletas maría y chocolate blanco.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //galleta reinita
    
    else if (input == "Galleta Reinita" || input == "galleta reinita" || input == "Galleta reinita" ) {
        return "<span><strong>Galleta Reinita</strong> <img src= 'src/assets/img.bot/p16.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>3Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Mermelada, azúcar, harina y mantequilla.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //alfajores de galleta
    
    else if (input == "Alfajores de Galleta" || input == "alfajores de galleta" || input == "Alfajores de galleta" ) {
        return "<span><strong>Alfajores de Galleta</strong> <img src= 'src/assets/img.bot/p17.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>3Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Galletas de agua, gelatina, coco rallado y maizena.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //pizza brownie
    
    else if (input == "Pizza Brownie" || input == "pizza brownie" || input == "Pizza brownie" ) {
        return "<span><strong>Pizza Brownie</strong> <img src= 'src/assets/img.bot/p18.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>30Bs.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>6</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Mediano</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Nuez, mantequilla, cacao y leche.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //brownie de chocolate
    
    else if (input == "Brownie de Chocolate" || input == "brownie de chocolate" || input == "Brownie de chocolate" ) {
        return "<span><strong>Brownie de Chocolate</strong> <img src= 'src/assets/img.bot/p19.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>6Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Mediano</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Chocolate, nueces, mantequilla y azúcar.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    //cuñape
    
    else if (input == "Cuñape"  || input == "cuñape" || input == "cuñapes" || input == "Cuñapes" ) {
        return "<span><strong>Cuñape</strong> <img src= 'src/assets/img.bot/p20.png' alt='imagen'></img> </span>" +
        '<span>▶️<strong>PRECIO:</strong>6Bs cada uno.</span>' +
        '<span>▶️<strong>DESCUENTO:</strong>Ninguno</span>' +
        '<span>▶️<strong>PORCIÓN:</strong>1</span>' +
        '<span>▶️<strong>TAMAÑO:</strong>Pequeño</span>' +
        '<span>▶️<strong>INGREDIENTES:</strong>Ingredientes: Queso fresco, almidón de yuca y azúcar.</span>' +
        "Si quieres tener más información, accede a nuestra App en la sección “Categorías” y selecciona el producto de tu agrado."; 
    }
    
    
    ////////////////////////////////////////////////////
    
    
    
    
    
    
}