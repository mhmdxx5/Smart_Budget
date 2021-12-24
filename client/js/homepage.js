let id = new URLSearchParams(window.location.search).get('id');
function addfamily() {
    window.location.href = `http://127.0.0.1:5501/client/addfamily.html?id=${id}`;
    return false;
}
function updatelist() {
    window.location.href = `http://127.0.0.1:5501/client/familyUpdate.html?id=${id}`;
    return false;
}
