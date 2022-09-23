export default function useUser() {

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    const loggedInUser = { email, password }

    return loggedInUser;
}