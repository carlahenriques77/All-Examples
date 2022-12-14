
console.log(!true); // False
console.log(!false); // True. The [!] makes an Boolean get the Opposite Effect. A False wiil be True and "Vice Versa".

let isUserLoggedIn = false
if (!isUserLoggedIn) {
    console.log('você precisa fazer login para continuar'); // Executed, as the [!] changed the False to True, thus making the Code run.
}