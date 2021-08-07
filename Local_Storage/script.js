let user = {
    name: 'James',
    age: 21,
};
let userParagraph = document.getElementById('user')

function signIn() {
    // window.localStorage.setItem('name', 'john');
    window.localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    // let user = document.getElementById('user')
    // const name = window.localStorage.getItem('name')
    // user.textContent = name;
    
    const user = JSON.parse(window.localStorage.getItem('user'));
    userParagraph.innerHTML = `${user.name} ${user.age}`;
}

function signOut() {
    // localStorage.removeItem('user');
    localStorage.clear();
    userParagraph.innerHTML = '';
}

// getUser();

