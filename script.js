document.getElementById('fetchBtn').addEventListener('click', fetchUsers);

function fetchUsers() {
    const usersContainer = document.getElementById('users-container');


    usersContainer.innerHTML = 'Loading...';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          
            usersContainer.innerHTML = '';
            
         
            data.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                `;
                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            usersContainer.innerHTML = 'Failed to load user data.';
        });
}
