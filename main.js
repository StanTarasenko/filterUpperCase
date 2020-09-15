let a = 'ПриВЕт';
let b = a.split('');

let character = b.join('')

let filterUpperCase = function(search) {
    upperCase = search.match(/[А-Я]/g)
    console.log(upperCase)
}
filterUpperCase(character)