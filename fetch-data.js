document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create user list
            const userList = document.createElement('ul');

            users.forEach(function(user) {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append user list to data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Display error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching data:', error);
        }
    }

    // Invoke fetchUserData on page load
    fetchUserData();
});
