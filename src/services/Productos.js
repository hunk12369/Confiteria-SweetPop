export const getProductos = async () => {
    const apiUrl = "http://localhost/restphp/usuario.php";
    const apiTitle = `${apiUrl}`;
    
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
};