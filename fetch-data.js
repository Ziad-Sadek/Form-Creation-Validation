async function fetchUserData() {
    //Defining apiUrl:
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    //Selecting the data container:
    const dataContainer = document.getElementById('api-data');

    //Fetching Data:
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li')
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innnerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

//Fetching the user data once the DOM content has loaded:
document.addEventListener('DOMContentLoaded', fetchUserData);