export const getProductos = async (id="") => {
    const apiUrl = `http://localhost/restphp/productos.php?id=${id}`;
    const apiTitle = `${apiUrl}`;
    
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
};
export const getCategorias = async () => {
    const apiUrl = "http://localhost/restphp/categorias.php";
    const apiTitle = `${apiUrl}`;
    
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
};
export const getDescuento = async () => {
    const apiUrl = "http://localhost/restphp/descuentos.php";
    const apiTitle = `${apiUrl}`;
    
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
};
export const getOferta = async () => {
    const apiUrl = "http://localhost/restphp/ofertas.php";
    const apiTitle = `${apiUrl}`;
    
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
};
export const getProductosCategorias = async (id="") => {
    const id_categoria=id;
    const apiUrl = `http://localhost/restphp/categorias.php?id=${id_categoria}`;
    const apiTitle = `${apiUrl}`;
    
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
};
export const postUsuario = async (usuarioNuevo = "") => {
  try {
    const response = await fetch("http://localhost/restphp/usuarioSweetPop.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarioNuevo),
    });

    if (response.ok) {
      const usuarioCreado = await response.json();
      console.log("Usuario nuevo creado:", usuarioCreado);
    } else {
      console.error("Error al crear usuario nuevo:", response.status);
    }
  } catch (error) {
    console.error("Error al crear usuario nuevo:", error);
  }
};
