// Super-ghetto WTF Engine rip-off

// Get random strings
var opener        = openers[Math.floor(Math.random() * openers.length)]
var descriptor    = descriptors[Math.floor(Math.random() * descriptors.length)]
var response      = responses[Math.floor(Math.random() * responses.length)]
var cocktail_spec = cocktail_specs[Math.floor(Math.random() * cocktail_specs.length)]

// Get all the useful shit out of the cocktail_spec JS object
var cocktail_name = cocktail_spec['drink_name']
var cocktail_source = cocktail_spec['source']
var cocktail_ingredients = cocktail_spec['specs']
var cocktail_instructions = cocktail_spec['instructions']

// Print all the strings
document.getElementsByTagName('h2')[0].textContent = `${cocktail_name} from ${cocktail_source}`.toUpperCase();
document.getElementsByTagName('h1')[0].textContent = `${opener} ${descriptor}`.toUpperCase();
document.getElementsByTagName('p')[0].textContent = cocktail_instructions;
document.getElementsByTagName('a')[0].textContent = response.toUpperCase();

// Create as many <li> tags as we need
var ul_tag = document.getElementsByTagName('ul')[0];
// We need to loop over the list of ingredients to populate them
for (var count = 0; count < cocktail_ingredients.length; count++) {
    var li = document.createElement('li');
    document.getElementsByTagName('ul')[0].appendChild(li);
    document.getElementsByTagName('li')[count].textContent = cocktail_ingredients[count];
}
