document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:3000/api/data')
    .then(response => response.json())
    .then(data => {
        
        const userData = data.map(user => `
            <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.jerseyNo}</td>
            <td>${user.country}</td>
            <td>${user.playerType}</td>
            </tr>
        `).join('' );

        document.getElementById('json-data-holder').innerHTML = userData;
    })
});