// Функція для завантаження та відображення інформації про користувача
function loadUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUserInfo(user);
        })
        .catch(error => {
            console.error('Error loading user:', error);
        });
}

// Функція для відображення інформації про користувача на сторінці
function displayUserInfo(user) {
    document.getElementById('userAvatar').src = user.picture.large;
    document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('userAge').textContent = user.dob.age;
    document.getElementById('userGender').textContent = user.gender;
    document.getElementById('userCountry').textContent = user.location.country;
    document.getElementById('userLogin').textContent = user.login.username;
    document.getElementById('userPassword').textContent = user.login.password;
    document.getElementById('userEmail').textContent = user.email;
}

// Обробник події натиснення на кнопку "Load User"
document.getElementById('loadUserBtn').addEventListener('click', function () {
    loadUser();
});
