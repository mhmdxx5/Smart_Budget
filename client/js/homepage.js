
function addfamily() {
    let searchParams = new URLSearchParams(window.location.search)
    let id = searchParams.get('id')
    window.location.href = `http://127.0.0.1:5501/client/addfamily.html?id=${id}`;
    return false;
}
