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