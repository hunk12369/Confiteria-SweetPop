export const getProductos = async () => {
    const apiUrl = "http://localhost/restphp/productos.php";
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