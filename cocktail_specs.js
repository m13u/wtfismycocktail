var cocktail_specs = [
  {
    drink_name: '100 Year Punch',
    source: 'PDT',
    specs: [
      '1 oz. Elijah Craig 12-Year-Old Bourbon Whiskey',
      '1 oz. Bek Se Ju "100-year Wine"',
      '.25 oz. Ssal-Yut Rice Syrup',
      '2 dashes Fee Brothers Old Fashioned Bitters',
      '1 oz. Q Tonic Water'
    ],
    instructions: 'Zest the peel of half a tangerine into a mixing glass. Add everything else, then stir with ice and fine-strain into a chilled rocks glass filled with ice. Top with 1 oz. Q Tonic. Garnish with grated nutmeg.'
  },
  {
    drink_name: '18th Century',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Van Oosten Batavia Arrack',
      '.75 ounce Marie Brizard White Crème De Cacao',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.75 ounce Lime Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: '19th Century',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Woodford Reserve Bourbon',
      '.75 ounce Lillet Rouge',
      '.75 ounce Marie Brizard White Crème De Cacao',
      '.75 ounce Lemon Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: '202 Steps',
    source: 'Death & Co',
    specs: [
      'quarter peeled Tangerine',
      '2 ounces Baker\'s Bourbon',
      '.5 ounce Simple Syrup',
      '2 dashes House Orange Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'In a shaker, muddle the tangerine. Add the remaining ingredients and shake with ice, then double strain into a double rocks glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: '209 East Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Sauza Hornitos Tequila',
      '1 ounce Cointreau',
      '.5 ounce Marie Brizard Strawberry Liqueur',
      '1 ounce Lime Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Coat the rim of the glass with a mix of sugar and powdered strawberry, if you wish. To make powdered strawberry, roast strawberries in a low oven until they are crisp and dry and pulverize them with a mortar and pestle. Mix with superfine sugar.'
  },
  {
    drink_name: '20th Century',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Beefeater London Dry Gin',
      '.75 ounce Marie Brizard White Crème De Cacao',
      '.75 ounce Cocchi Americano',
      '.75 ounce Lemon Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then double strain into a coupe. No garnish.'
  },
  {
    drink_name: '212',
    source: 'PDT',
    specs: [
      '2 oz. Partida Reposado Tequila',
      '2 oz. Ruby Red Grapefruit Juice',
      '1 oz. Aperol'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Garnish with an orange twist.'
  },
  {
    drink_name: '21st Century',
    source: 'PDT',
    specs: [
      'Pernod',
      '2 oz. Siete Leguas Blanco Tequila',
      '.75 oz. Marie Brizard White Crème De Cacao',
      '.75 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled, Pernod-rinsed coupe. No garnish.'
  },
  {
    drink_name: '#3 Cup',
    source: 'PDT',
    specs: [
      '1 oz. Hine V.S.O.P. Cognac',
      '1 oz. House Ginger Beer',
      '.75 oz. Martini Sweet Vermouth',
      '.5 oz. Marie Brizard Orange Curaçao',
      '.5 oz. Cherry Heering',
      '.5 oz. Lemon Juice',
      '4-5 Mint Leaves',
      '2 slices Cucumber',
      '2 slices Orange'
    ],
    instructions: 'Muddle the mint, cucumber, and orange slice. Add everything else, then shake with ice and strain into a chilled Collins glass filled with ice. Garnish with a mint sprig and an orange slice.'
  },
  {
    drink_name: '6th Street Swizzle',
    source: 'Death & Co',
    specs: [
      '1.5 ounces La Favorite Rhum Agricole Blanc',
      '1 ounce Lime Juice',
      '.75 ounce Rich Cane Sugar Syrup',
      '2 dashes Angostura Bitters',
      'Sprig of Mint (Garnish)',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Whip all the ingredients, shaking with a few pieces of crushed ice just until incorporated. Pour into a pilsner glass filled with crushed ice and swizzle until cold. Garnish with the mint sprig and lime wheel and serve with a straw.'
  },
  {
    drink_name: '#8',
    source: 'PDT',
    specs: [
      '2 oz. Don Julio Reposado Tequila',
      '.75 oz. Lustau Palo Cortado Sherry',
      '.5 oz. Bärenjäger Honey Liqueur Honey Liqueur',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Abbey Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lille Blanc',
      '1 ounce Orange Juice',
      'dash Bitters'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel'
  },
  {
    drink_name: 'ABC Pousse Café',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Amaretto',
      '.5 ounce Baileys Irish Cream',
      '.5 ounce Cointreau'
    ],
    instructions: 'Layer in a pousse-café glass, beginning with the Amaretto on the bottom, and continuing in the order listed. You can also try this drink as a coffee drink. See Irish Coffee for technique.'
  },
  {
    drink_name: 'Absinthe Drip',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Absinthe',
      '1 to 2 lump Sugar'
    ],
    instructions: 'Put the absinthe and one large cube of ice into a good-size tumbler. Place an Absinthe spoon across the top of the glass with 1 to 2 lump of sugar on it (the Absinthe spoon is a >at spoon with small holes). Now pour water drop by drop on the sugar. The water dropping through the spoon melts the sugar, sweetens the drink, and lowers the alcohol content.'
  },
  {
    drink_name: 'Absinthe No. 2',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '1 ounce Absinthe',
      '2 dashes Orange Bitters'
    ],
    instructions: 'Stir the ingredients with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Absinthe Suissesse',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Absinthe',
      '.25 ounce Anisette',
      '.5 ounce Green Crème De Menthe',
      '1 ounce Egg White',
      'dash Orange Flower Water'
    ],
    instructions: 'Shake all ingredients very well, making sure to completely emulsify the egg white. Strain into a Marie Antoinette-style champagne glass or Cuban daiquiri glass.'
  },
  {
    drink_name: 'Absolutely Bananas',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '.5 ounce Banana Liqueur',
      '1.5 ounces Pineapple Juice'
    ],
    instructions: 'Shake well with ice and strain into a chilled martini glass. If this cocktail is shaken very hard to a slow ten count, a handsome layer of foam from the pineapple juice will >oat on top of the drink and make a great presentation.'
  },
  {
    drink_name: 'Adonis Cocktail 11',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Dry Sherry',
      '1 ounce Sweet Vermouth',
      '1 ounce Orange Juice',
      'dash Bitters',
      'dash Simple Syrup',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake with ice and strain into a small cocktail glass. Garnish with the orange peel.'
  },
  {
    drink_name: 'Affinity',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounces Scotch Whisky',
      '1 ounce Sweet Italian Vermouth',
      '1 ounce Dry French Vermouth',
      'dash Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Pour all the ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass and garnish with the lemon peel.'
  },
  {
    drink_name: 'Against All Odds Cocktail',
    source: 'PDT',
    specs: [
      'Ilegal Reposado Mezcal',
      '1.5 oz. Bushmills Irish Whiskey',
      '1.5 oz. Channing Daughters Scuttlehole Chardonnay',
      '.5 oz. Rothman & Winter Orchard Apricot Liqueur',
      '.25 oz. Rhum Clément Creole Shrub'
    ],
    instructions: 'Stir with ice and strain into a chilled, Ilegal Reposado Mezcal-rinsed coupe. Garnish with a pansy flower.'
  },
  {
    drink_name: 'Agave Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Tequila',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '2 ounces Orange Juice',
      '.5 ounce Ruby Port',
      'slice Orange (Garnish)',
      '2 Dark Grapes (Garnish)'
    ],
    instructions: 'Shake the tequila, lemon juice, syrup, and orange juice with ice and strain into an iced stem glass. Top with the port. Garnish with the orange slice and grapes.'
  },
  {
    drink_name: 'Águil A Azteca',
    source: 'PDT',
    specs: [
      '1.5 oz. Jose Cuervo Tradicional Tequila',
      '1 oz. Honeydew Melon Juice',
      '.25 oz. Canton Ginger Liqueur',
      '.25 oz. Rothman & Winter Crème De Violette'
    ],
    instructions: 'A Tequila-based Aviation cocktail variation named after the iconic symbol of the strongest Aztec warrior, the eagle. —Jim Meehan, Summer 2008'
  },
  {
    drink_name: 'Airmail',
    source: 'Death & Co',
    specs: [
      '1 ounce Ron Del Barrilito 3-Star Rum',
      '.5 ounce Lime Juice',
      '.5 ounce Acacia Honey Syrup',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'AKA Cobbler',
    source: 'Death & Co',
    specs: [
      '1 teaspoon Simple Syrup',
      '1 teaspoon Luxardo Maraschino Liqueur',
      '2 twists of Lemon Peel',
      '1 Strawberry',
      '1 cube of White Sugar',
      '1.5 ounces Siembra Azul Blanco Tequila',
      '.5 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.5 ounce Lustau East India Solera Sherry',
      '0.5 Strawberry (Garnish)'
    ],
    instructions: 'In a shaker, muddle the simple syrup, maraschino liqueur, lemon twists, strawberry, and sugar cube. Add the tequilas and sherry and whip (shake with a few pieces of crushed ice, just until the ingredients are incorporated). Dump into a double rocks glass and top with crushed ice. Garnish with the half strawberry and serve with a straw.'
  },
  {
    drink_name: 'Alabama Slammer',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Southern Comfort',
      '1 ounce Vodka',
      '.75 ounce Sloe Gin',
      '4 ounces Orange Juice',
      '6 dashes Grenadine (Garnish)'
    ],
    instructions: 'Shake all ingredients hard with ice, strain into six 1-ounce shot glasses, and dash the top of each with grenadine. Bottoms up!'
  },
  {
    drink_name: 'Alabazam',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Brandy',
      '.75 ounce Lemon Juice',
      '.5 ounce Curaçao',
      '.5 ounce Simple Syrup',
      '2 dashes Angostura Bitters',
      'Soda Water'
    ],
    instructions: 'Shake all the ingredients except the soda water with ice and serve in a tall glass with ice. Top with the soda and stir.'
  },
  {
    drink_name: 'Albert Mathieu',
    source: 'PDT',
    specs: [
      '1.5 oz. Plymouth Gin',
      '.75 oz. Lillet Blanc',
      '.75 oz. Green Chartreuse',
      '1 barspoon St. Germain Elderflower Liqueur',
      '1 dash Regan\'s Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Alembic',
    source: 'Death & Co',
    specs: [
      'Vieux Pontarlier Absinthe',
      '2 ounces Anchor Genevieve Gin',
      '.25 ounce Rich Demerara Syrup',
      '3 dashes House Peychaud\'s Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Rinse a rocks glass with absinthe and dump. Stir the remaining ingredients over ice, then strain into the glass over 1 large ice cube. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Alex\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Flor De Caña Extra-Dry White Rum',
      '1 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Algonquin',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Light Rum',
      '.5 ounce Blackberry Brandy',
      '.5 ounce Bénédictine',
      '.5 ounce Lime Juice',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake  the  ingredients  with  ice  and  strain  into  a  small  cocktail glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Alizé Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Alizé Red Passion',
      '1 ounce Apricot Liqueur',
      '1 ounce Lemon Juice',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake the ingredients with ice and strain into a chilled cocktail glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Allegheny',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Bourbon Whiskey',
      '1 ounce Dry Vermouth',
      '.5 ounce Blackberry Brandy',
      '.5 ounce Lemon Juice',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake the ingredients well with ice and strain into a chilled cocktail glass. Garnish with lemon peel.'
  },
  {
    drink_name: 'Almond Brother',
    source: 'Death & Co',
    specs: [
      '2 ounces Siete Leguas Reposado Tequila',
      '.25 ounce Amaretto',
      '1 teaspoon Rothman & Winter Apricot Liqueur',
      '.75 ounce Lime Juice',
      '.25 ounce Orgeat',
      '.25 ounce Maple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Alphonso Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 cube of Sugar',
      'Angostura Bitters',
      '1 ounce Red Dubonnet',
      'Champagne',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Place the bitters-soaked sugar cube in a white wineglass with a couple of ice cubes. Add Dubonnet and fill with Champagne or other Sparkling wine. Garnish with lemon peel.'
  },
  {
    drink_name: 'Alphonso XIII (Dale\'s Version)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 slice Orange',
      'Cinnamon',
      '1.5 ounces Dry Sherry',
      '1.5 ounces Red Dubonnet',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Muddle the orange slice and the sherry together in the bottom of a mixing glass. Add the Dubonnet and shake well with ice. Strain into chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Alta California',
    source: 'Death & Co',
    specs: [
      '2 ounces Siembra Azul Blanco Tequila',
      '.75 ounce Dolin Blanc Vermouth',
      'scant .5 ounce Yellow Chartreuse',
      '.25 teaspoon Cinnamon Bark Syrup'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Amber Dream',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Dry Gin',
      '1 ounce Dry French Vermouth',
      '.25 ounce Yellow Chartreuse',
      'dash Orange Bitters',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Place the ingredients in a bar glass with ice and stir. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'American Beauty',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Brandy',
      '1 ounce Dry Vermouth',
      '1 ounce Orange Juice',
      '2 dashes Grenadine',
      '2 dashes Simple Syrup (Optional)',
      '.5 ounce Port',
      'Rose Petal (Garnish)'
    ],
    instructions: 'Shake all the ingredients except the port with ice and strain into a chilled cocktail glass. Float the port on top. Garnish with the rose petal.'
  },
  {
    drink_name: 'American Bishop',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Lemon Juice',
      '1 ounce Orange Juice',
      '.25 ounce Gold Rum',
      '4 ounces Dry Red Wine',
      '1 ounce Simple Syrup',
      'Soda Water',
      'Fruit (Garnish)'
    ],
    instructions: 'Stir all the ingredients together in a large goblet. Top with soda and garnish with seasonal fruits.'
  },
  {
    drink_name: 'Americano Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Sweet Vermouth',
      '1.5 ounces Campari',
      'Soda Water',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Pour the vermouth and Campari into an ice-filled highball glass and top with soda water. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Amityville',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Bacardi Ron Superior Limited Edition',
      '.25 ounce Banks 5-Island White Rum',
      '.5 ounce Dolin Blanc Vermouth',
      '1 dash Vieux Pontarlier Absinthe',
      '.5 ounce Granny Smith Apple Juice',
      '.25 ounce Vanilla Syrup',
      '.5 teaspoon Acid Phosphate',
      '1 dash House Orange Bitters',
      'Slice of Granny Smith Apple (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the apple slice.'
  },
  {
    drink_name: 'Añejo Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Añejo Rum',
      '.5 ounce Curaçao',
      '2 ounces Ginger Beer',
      '.25 ounce Lime Juice',
      '2 dashes Angostura Bitters',
      'wheel of Lime (Garnish)',
      'slice Orange (Garnish)'
    ],
    instructions: 'Build in a highball glass and fill with ginger beer. Garnish with the lime wheel and orange slice.'
  },
  {
    drink_name: 'Angel\'s Kiss',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 part Crème De Cacao',
      '1 part Brandy',
      '1 part Whipped Cream'
    ],
    instructions: 'Layer the ingredients in the order listed above in a pony glass.'
  },
  {
    drink_name: 'Angel\'s Tip',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 part Dark Crème De Cacao',
      '1 part Heavy Cream',
      'Cherry (Garnish)'
    ],
    instructions: 'Layer in a pony glass beginning with the crème de cacao. Spear the cherry with a cocktail pick or toothpick and rest across the mouth of the glass.'
  },
  {
    drink_name: 'Angie\'s Secret',
    source: 'Death & Co',
    specs: [
      '1 ounce Barbancourt White Rum',
      '1 ounce Appleton Estate V/X Rum',
      '1 ounce Becherovka Liqueur',
      '1 teaspoon Rich Cane Sugar Syrup',
      '2 dashes Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Angus Story Daiquiri',
    source: 'Death & Co',
    specs: [
      '.75 ounce Appleton Estate V/X Rum',
      '.75 ounce Ron Del Barrilito 3-Star Rum',
      '.5 ounce La Favorite Rhum Agricole Blanc',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Anjou Mama',
    source: 'Death & Co',
    specs: [
      '3 small slices of ripe Anjou Pear',
      '1 ounce Pennyroyal-Infused Hayman\'s Old Tom Gin',
      '1 ounce Tanqueray No. Ten Gin',
      '.75 ounce Lemon Juice',
      '.25 ounce Orgeat',
      '.25 ounce Cinnamon Bark Syrup',
      '.25 ounce Acacia Honey Syrup',
      'Wheel of Lemon (Garnish)'
    ],
    instructions: 'In a shaker, muddle the pear slices. Add the remaining ingredients and shake with ice, then strain into a Nick & Nora glass. Garnish with the lemon wheel.'
  },
  {
    drink_name: 'Aperitivo Julep',
    source: 'Death & Co',
    specs: [
      '2 ounces Dolin Dry Vermouth',
      '.75 ounce Amaro Ciociaro',
      '1 teaspoon Massenez Crème De Pêche Peach Liqueur',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Put all the ingredients in a julep tin. Fill the tin halfway with crushed ice. Stir with a teaspoon, churning the ice as you go, for about 10 seconds, holding the tin by the rim so the entire tin can eventually frost up. Add more crushed ice to fill the tin two-thirds full and stir until the tin is completely frosted. Add more ice to form a cone above the rim. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Aperol Spritz',
    source: 'PDT',
    specs: [
      '2 oz. Aperol',
      '1 oz. Carpenè Malvolti Prosecco',
      '1 oz. Club Soda',
      '.5 oz. Orange Juice'
    ],
    instructions: 'Add everything to a chilled rocks glass, then fill with ice. Stir and garnish with half an orange wheel.'
  },
  {
    drink_name: 'Apple Daiquiri',
    source: 'PDT',
    specs: [
      '2 oz. Flor De Caña Silver Dry Rum',
      '.75 oz. Lime Juice',
      '.5 oz. Schönauer Apfel Schnapps',
      '.25 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Apple Jack Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Applejack Or Calvados',
      '.75 ounce Curaçao',
      '.5 ounce Lime Juice',
      '2 dashes Orange Bitters',
      'slices of Apple (Garnish)',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into chilled martini glass. Garnish with a thin slice apple and a strip of orange peel.'
  },
  {
    drink_name: 'Apple Malt Toddy',
    source: 'PDT',
    specs: [
      '2 oz. Red Jacket Orchards Apple Cider',
      '1.5 oz. Chivas Regal 12-Year-Old Blended Scotch Whisky',
      '1 oz. Drouhin Pommeau',
      '.25 oz. St. Elizabeth Allspice Dram',
      '1 barspoon Deep Mountain Grade B Maple Syrup'
    ],
    instructions: 'Heat everything and serve in a pre-warmed heatproof mug. Garnish with a cinnamon stick.'
  },
  {
    drink_name: 'Apple Manhattan',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Maker\'s Mark Bourbon Whiskey',
      '1 ounce Berentzen\'s Apple Liqueur',
      'Thin slice Granny Smith Apple (Garnish)'
    ],
    instructions: 'Stir the two ingredients in a mixing glass with ice and strain into a chilled cocktail glass. Garnish with the apple slice.'
  },
  {
    drink_name: 'Applejack Rabbit',
    source: 'PDT',
    specs: [
      '2 oz. Laird\'s Bonded Apple Brandy',
      '.75 oz. Lemon Juice',
      '.75 oz. Orange Juice',
      '.5 oz. Deep Mountain Grade B Maple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Apricot Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Gin',
      '1 ounce Apricot Liqueur',
      '1 ounce Orange Juice',
      '.5 ounce Lemon Juice',
      'Cherry (Garnish)',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake the ingredients well with ice and strain into a chilled martini glass. Garnish with a cherry and flamed orange peel.'
  },
  {
    drink_name: 'Apricot Flip',
    source: 'PDT',
    specs: [
      '2 oz. Hine V.S.O.P. Cognac',
      '.75 oz. Rothman & Winter Orchard Apricot Liqueur',
      '.5 oz. Simple Syrup',
      '1 Whole Organic Egg'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled fizz glass. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Apricot-Mango Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 pieces of Mango',
      '2.5 ounces Tanqueray No. Ten Gin',
      '.5 ounce Apricot Liqueur',
      '.5 ounce Simple Syrup',
      '.75 ounce Lemon Juice'
    ],
    instructions: 'Muddle the mango in the bottom of the mixing glass and add all other ingredients. Shake well with ice and strain into a chilled martini glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Aqueduct',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '.5 ounce Triple Sec',
      '.5 ounce Apricot Brandy',
      '.5 ounce Lime Juice'
    ],
    instructions: 'Shake all ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Archangel',
    source: 'PDT',
    specs: [
      '2.25 oz. Plymouth Gin',
      '.75 oz. Aperol',
      '2 slices Cucumber'
    ],
    instructions: 'Muddle the cucumber and Aperol in a mixing glass. Add gin and ice, then stir and fine-strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Arrack Strap',
    source: 'Death & Co',
    specs: [
      '1 ounce Cruzan Black Strap Rum',
      '1 ounce Van Oosten Batavia Arrack',
      '1 ounce Cocchi Vermouth Di Torino',
      '1 teaspoon Campari',
      '.5 teaspoon Rich Demerara Syrup',
      '2 dashes Bittermens Xocolatl Mole Bitters',
      '2 dashes House Orange Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into an old-fashioned glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: 'Arrackuiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Van Oosten Batavia Arrack',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      '1 teaspoon Pomegranate Molasses',
      '6-8 leaves of Mint',
      '1 leaf Mint (Garnish)'
    ],
    instructions: 'Short shake all the ingredients, then double strain into a coupe. Garnish with the mint leaf.'
  },
  {
    drink_name: 'Astoria Bianco',
    source: 'PDT',
    specs: [
      '2.5 oz. Tanqueray Gin',
      '1 oz. Martini Bianco Vermouth',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Augie March',
    source: 'Death & Co',
    specs: [
      '2 ounces El Tesoro Reposado Tequila',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.5 ounce Cynar',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the cherry.'
  },
  {
    drink_name: 'Autumn Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Mount Gay Eclipse Rum',
      '.5 ounce Lime Juice',
      '.5 ounce Pineapple Juice',
      '.25 ounce Rich Demerara Syrup',
      '.25 ounce Cinnamon Bark Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Aviation Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '1 ounce Maraschino Liqueur',
      '0.5 ounce Lemon Juice',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Aviation',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce Luxardo Maraschino Liqueur',
      '.5 teaspoon Crème Yvette',
      '.75 ounce Lemon Juice',
      '.25 ounce Simple Syrup',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the cherry.'
  },
  {
    drink_name: 'B-52',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Kahlúa',
      '.75 ounce Baileys Irish Cream',
      '.75 ounce Grand Marnier'
    ],
    instructions: 'Layer in a cordial glass in the listed order, starting with the Kahlúa.'
  },
  {
    drink_name: 'B.A.F.',
    source: 'Death & Co',
    specs: [
      '1 ounce Macallan Fine Oak 10-Year Scotch Whisky',
      '1 ounce Lustau Oloroso Sherry',
      '.5 ounce Aperol',
      '.5 ounce Gran Classico Bitter',
      'Lemon Peel'
    ],
    instructions: 'Stir all the ingredients (except the lemon twist) over ice, then strain into a double rocks glass. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Bacardi Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bacardi Light Rum',
      '1 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '3 dashes Grenadine'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass. Garnish with the flamed lemon zest.'
  },
  {
    drink_name: 'Bacardi Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Bacardi Silver Rum',
      '2 dashes Angostura Bitters',
      '2 dashes Martini & Rossi Dry Vermouth',
      'Lime Peel (Garnish)'
    ],
    instructions: 'Stir the ingredients to chill and strain into a chilled martini glass. Garnish with the lime peel.'
  },
  {
    drink_name: 'Bahama Mama',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Light Rum',
      '.75 ounce Gold Rum',
      '.75 ounce Dark Rum',
      '.5 ounce Coconut Liqueur',
      '2 ounces Orange Juice',
      '3 ounces Pineapple Juice',
      '.25 teaspoon Grenadine',
      'dash Angostura Bitters',
      'Maraschino Cherry (Garnish)',
      'slice Pineapple (Garnish)',
      'slice Orange (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a large goblet or a specialty drink glass. Garnish with the Maraschino cherry, pineapple slice, and orange slice.'
  },
  {
    drink_name: 'Bahía Breeze',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Cuervo Gold',
      '4 ounces Pineapple Juice',
      '1.5 ounces Cranberry Juice',
      'wedge Lime (Garnish)'
    ],
    instructions: 'Build in a highball glass over ice as listed above. Garnish with the wedge of lime.'
  },
  {
    drink_name: 'Bakunin',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Stolichnaya Ohranj Vodka',
      '1 ounce Grand Marnier',
      '2 ounces Orange Juice',
      '.5 ounce Lemon Juice',
      'dash Grenadine'
    ],
    instructions: 'Combine all the ingredients in a shaker. Shake well and serve over crushed ice.'
  },
  {
    drink_name: 'Balm Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Dry Sack Sherry',
      '.75 ounce Orange Juice',
      '.5 ounce Cointreau',
      '2 dashes Angostura Bitters',
      '2 slices Orange',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Mix all the ingredients with the orange slices and shake well with ice. Strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Baltasar And Blimunda',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '.5 ounce Punt E Mes',
      '.5 ounce Campari',
      '.5 ounce Otima 10-Year Tawny Port',
      'Coin of Orange (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. To garnish, flame the orange coin over the drink, then drop it in.'
  },
  {
    drink_name: 'Bamboo',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Dolin Blanc Vermouth',
      '1.5 ounces Barbadillo Principe Amontillado Sherry',
      '.5 teaspoon Rich Cane Sugar Syrup',
      '1 dash House Orange Bitters',
      '1 dash Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a rocks glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Banana Cognac',
    source: 'Death & Co',
    specs: [
      '1 ounce Pierre Ferrand 1840 Cognac',
      '.5 ounce Avuá Amburana Cachaça',
      '.75 ounce Lemon Juice',
      '.5 ounce Orange Juice',
      '.75 ounce Banana Syrup',
      '.25 ounce Orgeat',
      '2 dashes Angostura Bitters',
      'Banana Chip (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Garnish with the dried banana chip and serve with a straw.'
  },
  {
    drink_name: 'Banks Of Islay',
    source: 'Death & Co',
    specs: [
      '6 Curry Leaf',
      '1.5 ounces Laphroaig 10-Year Scotch Whisky',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 teaspoon Grenadine',
      '1 fresh Curry Leaf (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the curry leaves. Add the remaining ingredients and shake with ice, then double strain into a coupe. Garnish with the curry leaf.'
  },
  {
    drink_name: 'Banshee',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Green Crème De Banane',
      '1 ounce White Crème De Cacao',
      '2 ounces Heavy Cream'
    ],
    instructions: 'Shake well with ice and strain into a martini glass.'
  },
  {
    drink_name: 'Bay City Roller',
    source: 'Death & Co',
    specs: [
      '2 ounces Compass Box Asyla Scotch Whisky',
      '.25 ounce Amaro Averna',
      '1 teaspoon Simple Syrup',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'Beachbum',
    source: 'PDT',
    specs: [
      '1 oz. Mount Gay Eclipse Amber Rum',
      '1 oz. Flor De Caña Silver Dry Rum',
      '1 oz. Pineapple Juice',
      '.75 oz. Lime Juice',
      '.5 oz. Rothman & Winter Orchard Apricot Liqueur',
      '.5 oz. Kassatly Chtaura Orgeat'
    ],
    instructions: 'Shake with ice and strain into a chilled tiki mug filled with ice cubes. Garnish with an orange-cherry flag and an umbrella.'
  },
  {
    drink_name: 'Bee\'s Kiss',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bacardi Rum',
      '1 ounce Heavy Cream',
      '.75 ounce Honey Syrup'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Bee\'s Knees',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '.75 ounce Honey Syrup',
      '.5 ounce Lemon Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Bee\'s Sip',
    source: 'PDT',
    specs: [
      'St. Germain Elderflower Liqueur',
      '2.5 oz. Chamomile-Infused Barsol Quebranta Pisco',
      '1 oz. Masumi "Okuden" Junmai Sake',
      '.5 oz. Bärenjäger Honey Liqueur Honey Liqueur'
    ],
    instructions: 'Stir with ice and strain into a chilled St. Germain Elderflower Liqueur-rinsed coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Beer And A Smoke',
    source: 'PDT',
    specs: [
      '1 oz. Sombra Mezcal',
      '.75 oz. Lime Juice',
      '1 dash The Bitter Truth Celery Bitters',
      '4 dashes Cholula Hot Sauce',
      '6 oz. Victory Pilsner'
    ],
    instructions: 'Stir with ice and strain into a chilled Collins glass rimmed with kosher salt, celery salt, and ground black pepper. Top with 6 oz. Victory Pilsner and garnish with freshly grated orange and lime zest.'
  },
  {
    drink_name: 'Beer Cassis',
    source: 'PDT',
    specs: [
      '1 oz. Dubonnet Rouge',
      '.25 oz. Theuriet Crème De Cassis'
    ],
    instructions: 'Stir with ice and strain into a chilled white wine glass. Top with 6 oz. Brooklyn Brewery Local 1. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Bella Cohen',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Knappogue Castle 12-Year Irish Whiskey',
      '1.5 ounces Alvear Festival Pale Cream Sherry',
      '.5 ounce Cointreau',
      '1 teaspoon St-Germain',
      '1 dash House Peychaud\'s Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Bella Luna',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.75 ounce St-Germain',
      '.5 ounce Crème Yvette',
      '.75 ounce Lemon Juice',
      '1 teaspoon Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a port glass. No garnish.'
  },
  {
    drink_name: 'Bellini',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces White Peach Purée',
      '3 ounces Prosecco',
      '.5 ounce Marie Brizard Peach Liqueur'
    ],
    instructions: 'Put the peach purée in the bottom of a mixing glass without ice. Slowly pour in the prosecco while gently pulling the purée up the side of the mixing glass to mix with the prosecco. Don\'t stir briskly or the prosecco will lose its eervescence. Strain into a champagne flute. Float the peach liqueur on top.'
  },
  {
    drink_name: 'Belmont Breeze',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Rye Whiskey',
      '.75 ounce Harveys Bristol Cream Sherry',
      '.75 ounce Simple Syrup',
      '.5 ounce Lemon Juice',
      '1.5 ounces Orange Juice',
      '1 ounce Cranberry Juice',
      '1 ounce 7-Up',
      '1 ounce Soda Water',
      '1 Strawberry (Garnish)',
      '1 sprig Mint (Garnish)',
      'wheel of Lemon (Garnish)'
    ],
    instructions: 'Shake the liqueurs, syrup, and juices with ice and strain into a highball glass filled with ice. Top with the 7-Up and soda. Garnish with the strawberry, mint, and lemon.'
  },
  {
    drink_name: 'Benjamin Barker Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Gosling\'s Black Seal Rum',
      '.5 ounce Campari',
      '2 dashes Vieux Pontarlier Absinthe',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Demerara Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Benton\'s Old-Fashioned',
    source: 'PDT',
    specs: [
      '2 oz. Benton\'s Bacon Fat-Infused Four Roses Bourbon',
      '.25 oz. Deep Mountain Grade B Maple Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled rocks glass filled with one large cube. Garnish with an orange twist.'
  },
  {
    drink_name: 'Berlioni',
    source: 'PDT',
    specs: [
      '1.5 oz. Tanqueray Gin',
      '.75 oz. Cynar',
      '.5 oz. Noilly Prat Dry Vermouth'
    ],
    instructions: 'Stir with ice and strain into a chilled rocks glass filled with one large cube. Garnish with an orange twist.'
  },
  {
    drink_name: 'Betsy Ross',
    source: 'PDT',
    specs: [
      '2 oz. Pierre Ferrand Ambre Cognac',
      '.75 oz. Dow\'s Ruby Port',
      '.5 oz. Grand Marnier',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Betula',
    source: 'PDT',
    specs: [
      '1 oz. Birch-Infused Rittenhouse Bonded Rye Whiskey',
      '1 oz. Matusalem Gran Reserva Rum',
      '.5 oz. Lemon Juice',
      '.5 oz. Deep Mountain Grade B Maple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a star anise pod.'
  },
  {
    drink_name: 'Between The Sheets',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Brandy',
      '.5 ounce Bénédictine',
      '.5 ounce Cointreau',
      '.75 ounce Lemon Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Garnish with the orange peel. Optional: Rim the glass with sugar.'
  },
  {
    drink_name: 'Big Apple Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Tequila',
      '1 ounce Berentzen\'s Apple Liqueur',
      '.75 ounce Lemon Or Lime Juice',
      'slice Green Apple (Garnish)',
      'Salt (Garnish)'
    ],
    instructions: 'Shake with ice and strain into a chilled cocktail glass with a salted rim. Garnish with the slice of green apple.'
  },
  {
    drink_name: 'Bijou',
    source: 'PDT',
    specs: [
      '1 oz. Tanqueray Gin',
      '1 oz. Dolin Sweet Vermouth',
      '1 oz. Green Chartreuse',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a cherry and a lemon twist.'
  },
  {
    drink_name: 'Bitter French',
    source: 'Death & Co',
    specs: [
      '1 ounce Plymouth Gin',
      '.25 ounce Campari',
      '.5 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      'Dry Champagne',
      'Grapefruit Peel'
    ],
    instructions: 'Shake all the ingredients (except the champagne and grapefruit twist) with ice, then strain into a flute. Top with champagne. Squeeze the grapefruit twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Bizet',
    source: 'PDT',
    specs: [
      '1.5 oz. Shinn Estate Rosé',
      '.5 oz. Amaro Luxardo',
      '.5 oz. Amaro Ciociaro',
      '1 oz. Moët Imperial Champagne'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Top with 1 oz. Moët Imperial Champagne. Garnish with a flamed orange twist.'
  },
  {
    drink_name: 'Black Flip',
    source: 'PDT',
    specs: [
      '2 oz. Brooklyn Black Chocolate Stout',
      '1.5 oz. Cruzan Black Strap Rum',
      '.5 oz. Demerara Syrup',
      '1 whole Organic Egg'
    ],
    instructions: 'Add everything to a mixing glass and swirl to decarbonate beer. Dry-shake, then shake with ice and strain into a chilled fizz glass. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Black Jack',
    source: 'PDT',
    specs: [
      '1.5 oz. Pierre Ferrand Ambre Cognac',
      '.5 oz. Clear Creek Kirschwasser',
      '.5 oz. Coffee Concentrate',
      '.25 oz. Demerara Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with three cherries on a pick.'
  },
  {
    drink_name: 'Black Magic',
    source: 'Death & Co',
    specs: [
      'Vieux Pontarlier Absinthe',
      '1 ounce Hine H Cognac',
      '1 ounce Angostura 5-Year Rum',
      '.5 ounce Marie Brizard White Crème De Menthe',
      '1 teaspoon Fernet-Branca',
      '1 teaspoon Simple Syrup'
    ],
    instructions: 'Rinse a coupe with absinthe and dump. Stir the remaining ingredients over ice, then strain into the coupe. No garnish.'
  },
  {
    drink_name: 'Black Market Brandy',
    source: 'Death & Co',
    specs: [
      '1 ounce Laird\'s Bonded Apple Brandy',
      '1 ounce Hine H Cognac',
      '.75 ounce Cinnamon Orange Tea-Infused Sweet Vermouth',
      '1 dash House Peychaud\'s Bitters',
      '1 dash Angostura Bitters',
      '3 skewered Brandied Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the cherries.'
  },
  {
    drink_name: 'Black Market Manhattan',
    source: 'Death & Co',
    specs: [
      '2 ounces Bernheim Wheat Whiskey',
      '1 ounce Cinnamon Orange Tea-Infused Sweet Vermouth',
      '1 dash Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Black Rose',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 dash Grenadine',
      '2 dashes Peychaud\'s Bitters',
      '2 ounces Bourbon Whiskey',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Fill an old-fashioned glass three-quarters full with ice. Add the grenadine, bitters, and bourbon. Stir and garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Black Russian',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Kahlúa',
      '1 ounce Vodka'
    ],
    instructions: 'Build over ice in an old-fashioned glass. No garnish.'
  },
  {
    drink_name: 'Black Thorn (English)',
    source: 'PDT',
    specs: [
      '1.5 oz. Plymouth Gin',
      '.75 oz. Plymouth Sloe Gin',
      '.75 oz. Carpano Antica Sweet Vermouth',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Black Thorn (Irish)',
    source: 'PDT',
    specs: [
      'St. George Absinthe',
      '2 oz. Black Bush Irish Whiskey',
      '1 oz. Dolin Dry Vermouth',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled, St. George Absinthe-rinsed coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Black Thorn Rose',
    source: 'PDT',
    specs: [
      '2 oz. Hendrick\'s Gin',
      '.5 oz. Plymouth Sloe Gin',
      '.5 oz. Lillet Rouge',
      '1 barspoon Mymoune Rose Syrup'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Black Velvet',
    source: 'The Craft of the Cocktail',
    specs: [
      '4 ounces Guinness Stout',
      '4 ounces Champagne'
    ],
    instructions: 'Slowly pour together equal parts of Guinness Stout and Champagne in a beer glass.'
  },
  {
    drink_name: 'Black Widow',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Myers\'s Dark Rum',
      '1 ounce White Crème De Menthe'
    ],
    instructions: 'Shake both ingredients with ice and strain over ice into a rock glass.'
  },
  {
    drink_name: 'Blackbeard',
    source: 'PDT',
    specs: [
      '1.5 oz. Beefeater Gin',
      '.75 oz. Krogstad Aquavit',
      '.75 oz. Pineapple Juice',
      '.5 oz. Lemon Juice',
      '.5 oz. Agave Syrup',
      '4 Blackberry'
    ],
    instructions: 'Muddle the blackberries, then add the rest of the ingredients and dry-shake. Pour unstrained into a chilled rocks glass filled with pebble ice. Garnish with a mint sprig.'
  },
  {
    drink_name: 'Blackberry Julep',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Marie Brizard Blackberry Liqueur',
      '1 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '1 tablespoon Mixed-Berry Marinade'
    ],
    instructions: 'Shake all the ingredients with 1 ounce of water and ice, and strain into a highball glass filled with crushed ice. Stir until the glass begins to frost. Garnish with the berries.'
  },
  {
    drink_name: 'Blackstar',
    source: 'PDT',
    specs: [
      '2 oz. Smirnoff Black Vodka',
      '.75 oz. Lime Juice',
      '.75 oz. Grapefruit Juice',
      '.25 oz. Borsci Sambuca',
      '.25 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a star anise pod.'
  },
  {
    drink_name: 'Blackthorn',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Irish Whiskey',
      '.5 ounce Dry Vermouth',
      '2 dashes Angostura Bitters',
      '2 dashes Pernod Fils',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Blazing Saddles',
    source: 'Death & Co',
    specs: [
      '2 ounces High West Silver Oat Whiskey',
      '.5 ounce Combier Pamplemousse Rose Liqueur',
      '.75 ounce Lemon Juice',
      '.5 ounce Cinnamon Bark Syrup',
      '1 dash Bittermens \'Elemakule Tiki Bitters',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Blinker',
    source: 'PDT',
    specs: [
      '2 oz. Wild Turkey Rye Whiskey',
      '1 oz. Grapefruit Juice',
      '.25 oz. Simple Syrup',
      '1 barspoon Bonne Maman Raspberry Preserves'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Blood And Sand',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Scotch Whisky',
      '.75 ounce Cherry Heering',
      '.75 ounce Sweet Vermouth',
      '1 ounce Orange Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Blood Orange Cosmo',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Stolichnaya Ohranj Vodka',
      '.5 ounce Triple Sec',
      '.25 ounce Lime Juice',
      '.25 ounce Blood Orange Juice',
      'Splash of Cranberry Juice',
      'slice Orange (Garnish)'
    ],
    instructions: 'Shake well with ice and serve in a chilled martini glass. Garnish with the orange.'
  },
  {
    drink_name: 'Bloodhound',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Dry Vermouth',
      '2 ounce Gin',
      '.5 ounce Sweet Vermouth',
      '8 Raspberry'
    ],
    instructions: 'Shake all the ingredients well with ice and strain well into a chilled martini glass.'
  },
  {
    drink_name: 'Bloody Bull',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      'dash Orange Juice',
      '4 dashes Tabasco Sauce',
      'dash Pepper',
      '3 ounces Beef Broth',
      '2 ounces Tomato Juice',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Combine all the ingredients in a mixing glass and shake well. Strain into a goblet or pint glass over ice. Garnish with the orange peel.'
  },
  {
    drink_name: 'Bloody Butrum',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Vodka',
      '2 dashes Celery Salt',
      'pinch of Dry Dill',
      '2 dashes Ground Pepper',
      '2 dashes Tabasco Sauce',
      '3 dashes Worcestershire Sauce',
      '4 ounces Clamato Juice',
      '2 wedges Lime'
    ],
    instructions: 'Build over ice and roll all ingredients in a mixing glass with ice, strain into a goblet or pint glass over ice.'
  },
  {
    drink_name: 'Bloody Caesar',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '2 dashes Worcestershire Sauce',
      '4 dashes Tabasco Sauce',
      'pinch of Pepper',
      '.25 ounce Lemon Juice',
      '3 ounces Tomato Juice',
      '2 ounces Clam Juice'
    ],
    instructions: 'This Canadian import is a wonderful change from the ordinary. Garnish by placing a  clam in an endive-leaf "boat" on a side plate.'
  },
  {
    drink_name: 'Bloody Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Tequila',
      '1 ounce Blood Orange Juice',
      '.5 ounce Lime Juice',
      '.75 ounce Cointreau'
    ],
    instructions: 'Shake with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Bloody Maria',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Tequila',
      '2 dashes Worcestershire Sauce',
      '4 dashes Tabasco Sauce',
      'pinch of Salt',
      'pinch of Pepper',
      '.25 ounce Lemon Juice',
      '4 ounces Sangrita'
    ],
    instructions: 'Combine all the ingredients in a mixing glass and roll back and forth to mix. Strain into a large goblet or pint glass three quarters filled with ice. Garnish with a lime piece.'
  },
  {
    drink_name: 'Bloody Mary',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '2 dashes Worcestershire Sauce',
      '4 dashes Tabasco Sauce',
      'pinch of Salt',
      'pinch of Pepper',
      '.25 ounce Lemon Juice',
      '4 ounces Tomato Juice'
    ],
    instructions: 'Combine all the ingredients in a mixing glass and roll back and forth to mix. Strain into a large goblet or pint glass three quarters filled with ice. Garnish with the lemon and lime wedges on a side plate.'
  },
  {
    drink_name: 'Bloody San',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Vodka',
      '2 dashes Tabasco Sauce',
      '1 dash Worcestershire Sauce',
      '.25 ounce Lemon Juice',
      'pinch of Wasabi',
      '4 ounces Tomato Juice',
      'dash Rice Vinegar',
      '1 ounce Pickled Japanese Vegetables (Garnish)'
    ],
    instructions: 'Roll all the ingredients in a mixing glass with ice and strain into a goblet or pint glass. Garnish with the pickled Japanese vegetables.'
  },
  {
    drink_name: 'Blown Rose',
    source: 'Death & Co',
    specs: [
      '3 slices of Fuji Apple',
      '2 ounces Chamomile-Infused Old Overholt Rye Whiskey',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Cinnamon Bark Syrup',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'In a shaker, muddle the apple slices. Add the remaining ingredients and shake with ice. Double strain into a coupe and garnish with the lime wheel.'
  },
  {
    drink_name: 'Blue Blazer',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Scotch Whisky (warmed)',
      'Splash of Lemon Juice',
      '.25 ounce Simple Syrup',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Warm two silver vessels (with insulated handles) with hot water. Leave 1.5 ounces of hot water in one and pour the scotch into the other. After warming the scotch, ignite it with a match. Pour the flaming scotch into the other vessel containing the hot water. Pour the flaming liquid back and forth a few times. Have a London dock glass prepared with lemon juice and Simple Syrup, and pour the flaming mixture into the glass. Garnish with the twist of lemon. Note: The scotch will not ignite unless it is succiently heated. Try warming it gently for less than a minute in a saucepan over a low flame.'
  },
  {
    drink_name: 'Blue Lagoon',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Light Rum',
      '.75 ounce Dark Rum',
      '.5 ounce Blue Curaçao',
      '3 ounces Orange Juice',
      '3 ounces Pineapple Juice',
      'dash Angostura Bitters',
      'Fruit (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a large goblet filled with ice. Garnish with  fruit of the season.'
  },
  {
    drink_name: 'Blue Monday',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '.5 ounce Cointreau',
      '.25 ounce Blue Curaçao',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake well with ice and strain into a chilled martini glass. Flame the orange peel over the glass.'
  },
  {
    drink_name: 'Blue Run Sling',
    source: 'Death & Co',
    specs: [
      '2 ounces Elijah Craig 12-Year Bourbon',
      '.25 ounce Amaro Averna',
      '.75 ounce Fuji Apple Juice',
      '.5 ounce Fuji Apple Juice',
      '.75 ounce Vanilla Syrup',
      '1 dash House Orange Bitters',
      'Flag with Orange (Garnish)',
      'Fee Brothers Whiskey Barrel-Aged Bitters (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a highball glass filled with ice cubes. Garnish the orange flag, topped with few drops of bitters, and serve with a straw.'
  },
  {
    drink_name: 'Blue Train',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Cointreau',
      '.25 ounce Lemon Juice',
      'dash Blue Curaçao',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake well with ice and strain into a chilled martini glass. Flame the orange peel over the glass.'
  },
  {
    drink_name: 'Bobby Burns',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Scotch Whisky',
      '1 ounce Sweet Vermouth',
      '.25 ounce Bénédictine',
      'Shortbread Cookies (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice and strain into a chilled cocktail glass. Garnish with a shortbread cookie on the side.'
  },
  {
    drink_name: 'Bocci Ball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Amaretto',
      '4 to 5 ounces Orange Juice',
      'slice Orange'
    ],
    instructions: 'Build in a highball glass over ice. Garnish with the orange slice.'
  },
  {
    drink_name: 'Boo-Ya Cachaça',
    source: 'Death & Co',
    specs: [
      '1.5 ounces La Favorite Rhum Agricole Blanc',
      '.5 ounce Lustau Los Arcos Amontillado Sherry',
      '.25 ounce Crème Yvette',
      '.75 ounce Lime Juice',
      '.75 ounce Ginger Syrup',
      'Club Soda'
    ],
    instructions: 'Short shake all the ingredients (except the club soda) with 3 ice cubes, then strain into a highball glass over 3 ice cubes. Top with club soda and serve with a straw. No garnish.'
  },
  {
    drink_name: 'Boomin\' Granny',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hine H Cognac',
      '1 ounce Granny Smith Apple Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Acacia Honey Syrup',
      'Dry Champagne',
      'Slice of Granny Smith Apple (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. Garnish with the apple slice, dropped into the drink.'
  },
  {
    drink_name: 'Bosom Caresser',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Egg Yolk',
      '.5 ounce Madeira',
      '.5 ounce Brandy',
      '.5 ounce Curaçao',
      '2 dashes Grenadine',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake very well with ice to completely emulsify the egg. Strain into a chilled London dock glass. Dust with the nutmeg.'
  },
  {
    drink_name: 'Botany Of Desire',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Bruichladdich Botanist Gin',
      '.5 ounce Busnel VSOP Calvados',
      '.25 ounce Élixir Combier',
      '1.5 ounces Fusion Verjus Blanc',
      '.5 teaspoon Rich Cane Sugar Syrup',
      '1 dash House Orange Bitters',
      'Fan of Apple (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the apple fan.'
  },
  {
    drink_name: 'Boukman Daiquiri',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Barbancourt White Rum',
      '.5 ounce Hine H Cognac',
      '.75 ounce Lime Juice',
      '.5 ounce Cinnamon Bark Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Boulevard',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Rye Whiskey',
      '.5 ounce Grand Marnier',
      '.5 ounce Dry Vermouth',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Stir with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Boulevardier',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Elijah Craig 12-Year Bourbon',
      '.75 ounce House Sweet Vermouth',
      '.75 ounce Campari',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Bourbon Stone Sour',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bourbon Whiskey',
      '1 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '1 ounce Orange Juice',
      'slice Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a rocks glass filled with ice. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Bourbonnais Swizzle',
    source: 'Death & Co',
    specs: [
      '2 ounces Pecan-Infused Buffalo Trace Bourbon',
      '1 ounce Marie Brizard White Crème De Cacao',
      '.5 ounce Lillet Rouge',
      '.75 ounce Lemon Juice'
    ],
    instructions: 'Dry shake all the ingredients, then add 3 ice cubes and short shake. Strain into a pilsner glass filled with crushed ice. Serve with a straw. No garnish.'
  },
  {
    drink_name: 'Bramble',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      '.75 ounce Crème De Mure (blackberry Liqueur)',
      'wheel of Lime (Garnish)',
      'Raspberry (Garnish)'
    ],
    instructions: 'Shake the gin, lime juice, and syrup well with ice, and strain into a highball filled with crushed ice. Dribble the crème de mure down through the ice, and garnish with lime wheel and raspberries.'
  },
  {
    drink_name: 'Brandy Alexander',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Brandy',
      '1 ounce Dark Crème De Cacao',
      '2 ounces Heavy Cream',
      'Pinch Nutmeg (Garnish)'
    ],
    instructions: 'Shake the ingredients with ice and strain into a small cocktail glass. Garnish with the nutmeg.'
  },
  {
    drink_name: 'Brandy Cobbler',
    source: 'The Craft of the Cocktail',
    specs: [
      '2  wedges Pineapple',
      '2 orange slice Orange',
      '2 wedges Lemon',
      '.75 ounce Raspberry Syrup',
      '2 ounces Brandy'
    ],
    instructions: 'Muddle the pineapple wedge without skin, one piece of orange, and one piece of lemon with the raspberry syrup and 1 ounce of water in a bar glass. Add ice and the brandy and shake well. Strain into a double old-fashioned glass filled with crushed ice. Garnish with an orange wedge, the remaining pineapple wedge, and a lemon wedge.'
  },
  {
    drink_name: 'Brandy Crusta',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Brandy',
      '.25 ounce Maraschino Liqueur',
      '.25 ounce Cointreau',
      '.25 ounce Lemon Juice',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'In a mixing glass combine ingredients Strain into a small cocktail glass with a lightly sugared rim. Garnish with the spiral of lemon around the rim of the glass.'
  },
  {
    drink_name: 'Brandy Milk Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Brandy',
      '1 ounce Simple Syrup',
      '4 ounces Milk',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake with ice and serve in a punch glass. Dust with nutmeg.'
  },
  {
    drink_name: 'Brandy Plush',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Brandy',
      '1 ounce Simple Syrup',
      '4 dashes Angostura Bitters',
      '4 ounces Half-and-half',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake well with ice and strain into a chilled wine glass. Dust with the nutmeg.'
  },
  {
    drink_name: 'Brassy Blond',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Stolichnaya Limonaya Vodka',
      '2 ounces Pineapple Juice',
      '.25 ounce Cointreau'
    ],
    instructions: 'Shake well and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Brave Bull',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Kahlúa',
      '1 ounce Tequila'
    ],
    instructions: 'Pour over ice in an old-fashioned glass. No garnish.'
  },
  {
    drink_name: 'Brazilian Tea Punch',
    source: 'PDT',
    specs: [
      '2 oz. Sencha Green Tea-Infused Leblon Cachaça',
      '1 barspoon Lemongrass Syrup',
      '1 Disc Lime'
    ],
    instructions: 'Squeeze the lime disc on both sides to get all the oil from the peel and juice from the flesh into a chilled rocks glass. Add the rest of the ingredients and pebble ice. Swizzle, then top with more pebble ice and swizzle again. No garnish.'
  },
  {
    drink_name: 'Breakfast Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bombay Sapphire Gin',
      '.75 ounce Lemon Juice',
      '.75 ounce Cointreau',
      '1 teaspoon Light Marmalade',
      '1 slice Toast'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the slice toast.'
  },
  {
    drink_name: 'Brewer\'s Breakfast',
    source: 'PDT',
    specs: [
      '2 oz. Masumi Arabashiri Sake',
      '1 oz. Glen Thunder Corn Whiskey',
      '.25 oz. Galliano L\'Autentico'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with 8 Honey Nut Cheerios on a cocktail pick.'
  },
  {
    drink_name: 'Brian\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Flor De Caña Extra-Dry White Rum',
      '.75 ounce Lime Juice',
      '.5 ounce Simple Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Broken Heart Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 teaspoon Sugar',
      '1 tablespoon Hershey\'s Unsweetened Cocoa Powder',
      '1 piece Orange',
      '2.5 ounces Absolut Kurant Vodka',
      '.5 ounce Godiva Liqueur (dark)'
    ],
    instructions: 'In a saucer, mix together the sugar and cocoa powder. Dampen the outside rim of a chilled martini glass by rubbing an orange piece around it, and rim the glass with the cocoa powder. In a mixing glass, stir the Kurant and the Godiva with ice, and strain into the rimmed glass.'
  },
  {
    drink_name: 'Broken Oath',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Sombra Mezcal',
      '.75 ounce Lustau Amontillado Sherry',
      '.75 ounce Cocchi Vermouth Di Torino',
      '.5 ounce Galliano Ristretto',
      '2 dashes Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. No garnish.'
  },
  {
    drink_name: 'Bronx Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.25 ounce Sweet Vermouth',
      '.25 ounce Dry Vermouth',
      '1.5 ounces Orange Juice',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a large cocktail glass. Garnish with the orange peel. dash Angostura, optional.'
  },
  {
    drink_name: 'Bronx',
    source: 'PDT',
    specs: [
      '2 oz. Beefeater Gin',
      '.75 oz. Orange Juice',
      '.5 oz. Dolin Dry Vermouth',
      '.5 oz. Carpano Antica Sweet Vermouth'
    ],
    instructions: 'Shake with ice and strain into chilled coupe. No garnish.'
  },
  {
    drink_name: 'Brooklyn Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Canadian Club Whiskey',
      '1 ounce Dry Vermouth',
      'dash Maraschino Liqueur',
      'dash Amer Picon',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Brooklyn',
    source: 'Death & Co',
    specs: [
      '2 ounces Rittenhouse 100 Rye Whiskey',
      '.75 ounce Dolin Dry Vermouth',
      '.25 ounce Amaro Ciociaro',
      '1 teaspoon Luxardo Maraschino Liqueur'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Brown Bomber',
    source: 'PDT',
    specs: [
      '2 oz. George Dickel No. 12 Tennessee Whiskey',
      '.75 oz. Lillet Blanc',
      '.5 oz. Suze Saveur D\'Autrefois Liqueur'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Brown Derby Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Bourbon Whiskey',
      '1 ounce Grapefruit Juice',
      '.5 ounce Honey Syrup'
    ],
    instructions: 'Shake well with ice and strain into a cocktail glass.'
  },
  {
    drink_name: 'Brown Derby',
    source: 'Death & Co',
    specs: [
      '2 ounces Elijah Craig 12-Year Bourbon',
      '1 ounce Grapefruit Juice',
      '1 teaspoon Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Bubbaloo',
    source: 'PDT',
    specs: [
      '2.25 oz. Macchu Pisco',
      '.5 oz. Carpano Antica Sweet Vermouth',
      '.5 oz. Rothman & Winter Orchard Apricot Liqueur',
      '3 dashes Amargo Chuncho Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Buffalo Soldier',
    source: 'Death & Co',
    specs: [
      '2 ounces Pecan-Infused Buffalo Trace Bourbon',
      '.25 ounce Rich Demerara Syrup'
    ],
    instructions: 'Stir the bourbon and syrup over ice, then strain into a double rocks glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'Bull\'s Blood',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Rum',
      '.75 ounce Curaçao',
      '.75 ounce Spanish Brandy',
      '1.5 ounces Orange Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Bull Shot',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      'dash Orange Juice',
      '4 dashes Tabasco Sauce',
      'dash Pepper',
      '4 ounces Beef Broth'
    ],
    instructions: 'Combine all the ingredients in a mixing glass and shake well. Strain into a goblet or pint glass over ice. Garnish with the orange peel.'
  },
  {
    drink_name: 'Bumboo',
    source: 'Death & Co',
    specs: [
      '2 ounces Santa Teresa 1796 Rum',
      '1 teaspoon Rich Demerara Syrup',
      '1 teaspoon Vanilla Syrup',
      '1 dash House Peychaud\'s Bitters',
      '1 dash Abbott\'s Bitters',
      '1 dash Bitter Truth Jerry Thomas\' Own Decanter Bitters',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a fizz glass. Garnish with a few grates of nutmeg.'
  },
  {
    drink_name: 'Buona Notte',
    source: 'PDT',
    specs: [
      '2 oz. Walnut-Infused Hine V.S.O.P. Cognac',
      '.5 oz. Yellow Chartreuse',
      '.25 oz. Amaro Ciociaro'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with an orange twist.'
  },
  {
    drink_name: 'Cadillac Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces 100% Blue Agave Tequila',
      '1 ounce Grand Marnier',
      '.75 ounce Lime Juice',
      'Salt (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass with a salted rim.'
  },
  {
    drink_name: 'Cádiz Collins',
    source: 'Death & Co',
    specs: [
      'Wheel of Orange',
      '3 dashes Fee Brothers Whiskey Barrel-Aged Bitters',
      '2 ounces Plymouth Gin',
      '.75 ounce Lustau Amontillado Sherry',
      '.5 ounce Lemon Juice',
      '.5 ounce Rich Demerara Syrup',
      'Club Soda',
      'Crescent of Orange (Garnish)'
    ],
    instructions: 'In a shaker, muddle the orange wheel and bitters. Add the remaining ingredients (except the club soda) and shake with ice, then strain into a highball glass filled with ice cubes. Top with club soda. Garnish with the orange crescent and serve with a straw.'
  },
  {
    drink_name: 'Café Arroz',
    source: 'PDT',
    specs: [
      '2 oz. Horchata',
      '1.5 oz. Gran Centenario Reposado Tequila',
      '.5 oz. Kahlúa'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with grated cinnamon.'
  },
  {
    drink_name: 'Café Sandinista',
    source: 'Death & Co',
    specs: [
      '1 ounce Lustau East India Solera Sherry',
      '.25 ounce Coffee-And Chile-Infused Campari',
      '.5 ounce Orange Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Rich Demerara Syrup',
      'Small pinch of Kosher Salt',
      'Coffee Bean (Garnish)'
    ],
    instructions: 'Short shake with 3 ice cubes, then strain into a double rocks glass filled with crushed ice. Garnish with a few grates of coffee bean and serve with a straw.'
  },
  {
    drink_name: 'Caipirinha',
    source: 'The Craft of the Cocktail',
    specs: [
      '0.5 Lime',
      '.75 ounce Brown Sugar Syrup',
      '2 ounces Cachaça'
    ],
    instructions: 'Chill a rocks glass with cracked ice. Place the lime quarters in the bottom of a mixing glass, add the syrup, and muddle, extracting the juice and the oil in the skin from the lime quarters. Add the cachaça to the mixture in the mixing glass, dump the ice from the rocks glass into the mixing glass, and shake well. Pour the entire contents of the mixing glass back into the chilled rocks glass and serve.'
  },
  {
    drink_name: 'Caipirissima',
    source: 'The Craft of the Cocktail',
    specs: [
      '0.5 Lime',
      '.75 ounce Brown Sugar Syrup',
      '2 ounces Rum'
    ],
    instructions: 'Chill a rocks glass with cracked ice. Place the lime quarters in the bottom of a mixing glass, add the syrup, and muddle, extracting the juice and the oil in the skin from the lime quarters. Add the rum to the mixture in the mixing glass, dump the ice from the rocks glass into the mixing glass, and shake well. Pour the entire contents of the mixing glass back into the chilled rocks glass and serve.'
  },
  {
    drink_name: 'Caipirosca',
    source: 'The Craft of the Cocktail',
    specs: [
      '0.5 Lime',
      '.75 ounce Brown Sugar Syrup',
      '2 ounces Vodka'
    ],
    instructions: 'Place the lime quarters in the bottom of mixing glass, add the syrup, and muddle, extracting the juice and the oil in the skin from the lime quarters. Fill a rocks glass three-fourths full of cracked ice and pour it over to the mixing glass along with the vodka. Shake well, pour the entire contents back into the rocks glass, and serve.'
  },
  {
    drink_name: 'Caipiruva',
    source: 'The Craft of the Cocktail',
    specs: [
      '0.5 Lime',
      '4 Green Grapes',
      '.75 ounce Brown Sugar Syrup',
      '2 ounces Cachaça'
    ],
    instructions: 'Chill a rocks glass with cracked ice. Place the lime quarters and grapes in the bottom of a mixing glass, add the syrup, and muddle, extracting the juice and the oil in the skin from the lime quarters. Add the cachaça to the mixture in the mixing glass, dump the ice from the rocks glass into the mixing glass, and shake well. Pour the entire contents of the mixing glass back into the chilled rocks glass and serve.'
  },
  {
    drink_name: 'Calva Dorsa Royale',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Busnel VSOP Calvados',
      '.5 ounce St-Germain',
      '2 dashes Vieux Pontarlier Absinthe',
      'Dry Champagne'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a coupe. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Cameron\'s Kick',
    source: 'PDT',
    specs: [
      '1 oz. Famous Grouse Blended Scotch Whisky',
      '1 oz. Jameson Irish Whiskey',
      '.75 oz. Lemon Juice',
      '.5 oz. Kassatly Chtaura Orgeat'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Camp Council',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Siete Leguas Reposado Tequila',
      '.5 ounce Zirbenz Stone Pine Liqueur',
      '.5 ounce Yellow Chartreuse',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lemon Juice',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Garnish with the mint sprig.'
  },
  {
    drink_name: 'Cape Cod',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      'Cranberry Juice',
      'wedge Lime (Garnish)'
    ],
    instructions: 'Combine the vodka and cranberry juice in a highball glass with ice. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Caprice',
    source: 'PDT',
    specs: [
      '1.5 oz. Beefeater Gin',
      '1.5 oz. Dolin Dry Vermouth',
      '.5 oz. Bénédictine',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Caribbean Bulldog',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Kahlúa',
      '1 ounce Caribbean Cream',
      '2 ounces Half-and-half',
      '4 ounces Coca-Cola'
    ],
    instructions: 'Build the first three ingredients over ice in a tall glass. Add the Coca-Cola and stir gently. Serve with long straws.'
  },
  {
    drink_name: 'Caribbean Shrub',
    source: 'Death & Co',
    specs: [
      '1 ounce Appleton Estate V/X Rum',
      '1 ounce La Favorite Rhum Agricole Blanc',
      '.75 ounce Strawberry-Balsamic Gastrique',
      '.25 ounce Rich Cane Sugar Syrup',
      '0.5 Strawberry (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a highball glass filled with crushed ice. Garnish with the half strawberry and serve with a straw.'
  },
  {
    drink_name: 'Caribe Cosmopolitan',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bacardi Limón Rum',
      '1 ounce Cranberry Juice',
      '1 ounce Cointreau',
      '.5 ounce Lime Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Caricature Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '.5 ounce Sweet Vermouth',
      '.5 ounce Campari',
      '1 ounce Grapefruit Juice',
      '1 ounce Simple Syrup',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients over ice and strain into a very large chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Carroll Gardens',
    source: 'Death & Co',
    specs: [
      '2 ounces Rittenhouse 100 Rye Whiskey',
      '.5 ounce Punt E Mes',
      '.5 ounce Amaro Nardini',
      '1 teaspoon Luxardo Maraschino Liqueur',
      'Lemon Peel'
    ],
    instructions: 'Stir all the ingredients (except the lemon twist) over ice, then strain into a coupe. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Casino Royale',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Gin',
      '1 ounce Orange Juice',
      '.5 ounce Maraschino Liqueur',
      '.25 ounce Lemon Juice',
      'Champagne',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients except the Champagne and strain into a chilled martini glass. Fill with Champagne and garnish with the orange peel.'
  },
  {
    drink_name: 'Castle Of Córdoba',
    source: 'Death & Co',
    specs: [
      '.75 ounce Busnel VSOP Calvados',
      '.5 ounce Pierre Ferrand Ambre Cognac',
      '2 ounces Alvear Festival Pale Cream Sherry',
      '2 dashes House Peychaud\'s Bitters',
      'Slice of Apple (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the apple slice.'
  },
  {
    drink_name: 'Castle To Castle',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Knappogue Castle 12-Year Irish Whiskey',
      '1.5 ounces Fuji Apple Juice',
      '.75 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      'Sprig of Basil (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Garnish with the basil sprig and serve with a straw.'
  },
  {
    drink_name: 'Cavalier',
    source: 'PDT',
    specs: [
      '2 oz. Hine V.S.O.P. Cognac',
      '.75 oz. Lemon Juice',
      '.25 oz. Cointreau',
      '.25 oz. Kassatly Chtaura Orgeat',
      '1 barspoon Bonne Maman Apricot Preserves',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Twist a lemon peel over the surface and discard.'
  },
  {
    drink_name: 'Celine Fizz',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.75 ounce St-Germain',
      '.75 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '1 Egg White',
      'Club Soda'
    ],
    instructions: 'Dry shake all the ingredients (except the club soda), then shake again with ice. Double strain into a fizz glass and top with club soda. No garnish.'
  },
  {
    drink_name: 'Chai Toddy',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Spiced Rum',
      '1 dash Peppermint Schnapps',
      '1 teaspoon Honey',
      '4 ounces Hot Tea',
      'Peppermint Stick (Garnish)'
    ],
    instructions: 'Stir all the inredients in a mug or stem glass. Serve steaming hot, garnished with the peppermint stick.'
  },
  {
    drink_name: 'Chamomile Julep',
    source: 'Death & Co',
    specs: [
      '2 ounces Chamomile-Infused Old Overholt Rye Whiskey',
      '.25 ounce Simple Syrup',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Put the rye and simple syrup in a julep tin. Fill the tin halfway with crushed ice. Stir with a teaspoon, churning the ice as you go, for about 10 seconds, holding the tin by the rim so the entire tin can eventually frost up. Add more crushed ice to fill the tin two-thirds full and stir until the tin is completely frosted. Add more ice to form a cone above the rim. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Champagne Cobbler',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 slice Orange',
      '1 wedge Lemon',
      '1  wedge Pineapple',
      '.75 ounce Maraschino Liqueur',
      '4 ounces Champagne',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Muddle the fruit and liqueur in the bottom of a bar glass. Add ice and Champagne. Stir gently to retain the bubbles and strain into a champagne flute. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Champagne Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      'Champagne',
      'One cube of Sugar',
      'Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Place the Angostura-soaked sugar cube in the bottom of a champagne glass and fill the glass with Champagne. Pour slowly to avoid spillage. Garnished with the lemon peel, optional.'
  },
  {
    drink_name: 'Champagne Passion',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Passion Fruit Purée',
      'Simple Syrup',
      'Champagne',
      '.5 ounce Alizé Gold Passion'
    ],
    instructions: 'Pour the passion fruit purée into a mixing glass and stir in the Simple Syrup. Slowly add the Champagne while stirring gently. Float the Alizé on top.'
  },
  {
    drink_name: 'Champagne Tropicale',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Mango Purée',
      '4 ounces Champagne',
      '1 ounce Maraschino Liqueur'
    ],
    instructions: 'Pour the mango purée into a mixing glass, then slowly add the Champagne while stirring gently. Float the maraschino liqueur on top.'
  },
  {
    drink_name: 'Champs-Élysées',
    source: 'Death & Co',
    specs: [
      '2 ounces Pierre Ferrand Ambre Cognac',
      '.5 ounce Green Chartreuse',
      '.75 ounce Lemon Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Charleston Cocktail',
    source: 'Death & Co',
    specs: [
      '.5 ounce Anchor Junipero Gin',
      '.5 ounce Massenez Kirsch Vieux Cherry Brandy',
      '.5 ounce Dolin Dry Vermouth',
      '.5 ounce Punt E Mes',
      '.5 ounce Gabriel Boudier Curaçao',
      '.5 ounce Maraska Maraschino Liqueur'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Charlie Chaplin Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Marie Brizard Apry',
      '1 ounce Sloe Gin',
      '1 ounce Lime Juice',
      'Lime Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the lime peel.'
  },
  {
    drink_name: 'Cherry Blossom',
    source: 'The Craft of the Cocktail',
    specs: [
      '5 Sour Cherries',
      '.5 ounce Lemon Juice',
      '.5 ounce Curaçao',
      '.5 ounce Peter Heering Cherry Heering',
      '1.5 ounces Brandy'
    ],
    instructions: 'In a mixing glass, muddle 4 or 5 cherries with the lemon juice and liqueurs. Add the brandy and shake well with ice. Strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Cherry Crush',
    source: 'The Craft of the Cocktail',
    specs: [
      '5 Sweet Cherries',
      '.5 ounce Lemon Juice',
      '1 ounce Maraschino Liqueur',
      '1.5 ounces Gin'
    ],
    instructions: 'In a mixing glass, muddle 4 of the cherries with the lemon juice and maraschino. Add the gin and shake well with ice. Strain into a chilled cocktail glass. Garnish with the remaining cherry.'
  },
  {
    drink_name: 'Cherry Kiss',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Maraschino Liqueur',
      '2 ounces Pineapple Juice',
      '3 dashes Grenadine',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake all the ingredients well and strain into a chilled martini glass. Dust with a little bit of grated nutmeg.'
  },
  {
    drink_name: 'Cherry Pop',
    source: 'PDT',
    specs: [
      '2 oz. Plymouth Gin',
      '1 oz. Lemon Juice',
      '.5 oz. Luxardo Maraschino Liqueur',
      '.5 oz. Simple Syrup',
      '2 Pitted Cherry',
      '1 Pitted Cherry (Garnish)'
    ],
    instructions: 'Muddle 2 of the cherries with the simple syrup. Add everything else, then shake with ice and strain into a chilled rocks glass filled with pebble ice. Garnish with the reserved cherry.'
  },
  {
    drink_name: 'Chien Chaud',
    source: 'PDT',
    specs: [
      '2 oz. Liquiteria Coconut Water',
      '1.5 oz. J. M. Rhum Blanc',
      '.25 oz. Yellow Chartreuse',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled fizz glass filled with ice. Garnish with a lime wheel.'
  },
  {
    drink_name: 'Chinese Fizz',
    source: 'Death & Co',
    specs: [
      '2 ounces Appleton Estate V/X Rum',
      '.25 ounce Cointreau',
      '.25 ounce Luxardo Maraschino Liqueur',
      '.5 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '.25 ounce Grenadine',
      '1 Egg White',
      '1 dash Angostura Bitters',
      'Wheel of Orange (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a fizz glass filled with ice cubes. Garnish with the orange wheel and serve with a straw.'
  },
  {
    drink_name: 'Chingon',
    source: 'Death & Co',
    specs: [
      '2 ounces Siete Leguas Reposado Tequila',
      '.25 ounce Bénédictine',
      '.5 ounce Orange Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Orgeat',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Chocolate Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Cognac',
      '.5 ounce Ruby Port',
      '.5 ounce Dark Crème De Cacao',
      '.5 ounce Simple Syrup',
      '1 ounce Heavy Cream',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake all the ingredients very well with ice and strain into a chilled cocktail glass. Grate a little nutmeg on top.'
  },
  {
    drink_name: 'Chrysanthemum',
    source: 'PDT',
    specs: [
      '2 oz. Dolin Dry Vermouth',
      '.75 oz. Bénédictine',
      '.25 oz. Vieux Pontarlier Absinthe',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Cider House Rules',
    source: 'Death & Co',
    specs: [
      '.75 ounce Flor De Caña Extra-Dry White Rum',
      '.75 ounce Appleton Estate V/X Rum',
      '.25 ounce Velvet Falernum',
      '.5 ounce Lime Juice',
      '.25 ounce Acacia Honey Syrup',
      '1 dash Bittermens \'Elemakule Tiki Bitters',
      'Doc\'s Hard Pear Cider'
    ],
    instructions: 'Stir all the ingredients (except the cider) in a mixing glass over ice, then strain into a flute. Top with cider. No garnish.'
  },
  {
    drink_name: 'Cigar Lover\'s Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces VS Cognac',
      '.5 ounce 5-year Tawny Port',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Combine the ingredients with ice in a mixing glass and stir to chill. Strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Cinder',
    source: 'Death & Co',
    specs: [
      'Rim with Smoked Salt (Garnish)',
      '.75 ounce Pueblo Viejo Reposado Tequila',
      '.75 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.5 ounce Del Maguey Vida Mezcal',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Rim a coupe with smoked salt. Shake the remaining ingredients with ice, then strain into the coupe. No garnish.'
  },
  {
    drink_name: 'Cinema Highball',
    source: 'PDT',
    specs: [
      '4.5 oz. Coca-Cola Classic',
      '2 oz. Popcorn-Infused Flor De Caña Silver Dry Rum'
    ],
    instructions: 'Build in a chilled Collins glass filled with ice cubes. No garnish.'
  },
  {
    drink_name: 'Cinnamon Girl',
    source: 'Death & Co',
    specs: [
      '2 wedges of Orange',
      '2 ounces Siete Leguas Reposado Tequila',
      '.25 ounce Smith & Cross Rum',
      '.75 ounce Lime Juice',
      '.5 ounce Cinnamon Bark Syrup',
      '.25 ounce Rich Cane Sugar Syrup',
      '1 dash House Orange Bitters',
      'Crescent of Orange (Garnish)'
    ],
    instructions: 'In a shaker, muddle the orange wedges. Add the remaining ingredients and shake with ice. Strain into a double rocks glass filled with crushed ice. Garnish with the orange crescent and serve with a straw.'
  },
  {
    drink_name: 'Cirque Swizzle',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Anchor Junipero Gin',
      '.5 ounce Yellow Chartreuse',
      '1 teaspoon Crème Yvette',
      '.75 ounce Lemon Juice',
      '.5 ounce Vanilla Syrup',
      '.25 ounce Simple Syrup',
      'Crème Yvette (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then dump into a pilsner glass filled with crushed ice. Swizzle until cold, then top with a thin layer of Crème Yvette. Serve with a straw. No garnish.'
  },
  {
    drink_name: 'City Of Gold Sling',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hayman\'s Old Tom Gin',
      '.5 ounce El Dorado 12-Year Rum',
      '.75 ounce Donn\'s Spices #2',
      '1 dash Vieux Pontarlier Absinthe',
      '1 ounce Pineapple Juice',
      '.5 ounce Lime Juice',
      '.25 ounce Orgeat',
      '1 dash House Peychaud\'s Bitters',
      'Wedge of Pineapple (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a highball glass filled with ice cubes. Garnish with the pineapple wedge.'
  },
  {
    drink_name: 'City Rickey',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Lime Juice',
      '1 ounce Cointreau',
      'Soda Water',
      'Cranberry Juice',
      'slice of Orange (Garnish)',
      'slice of Lime (Garnish)'
    ],
    instructions: 'Pour gin, lime juice, and Cointreau into a highball three-quarters filled with ice. Fill with soda and cranberry and stir. Garnish with orange and lime.'
  },
  {
    drink_name: 'Claremont',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 dashes Angostura Bitters',
      '.75 ounce Curaçao',
      '2 slices Orange',
      '2 Cherry',
      '1.5 ounces Bourbon Whiskey',
      '1 ounce Soda Water'
    ],
    instructions: 'In the bottom of an old-fashioned glass, carefully muddle the bitters, curaçao, 1 of the orange slices, and 1 of the cherries. Remove the orange rind and add the bourbon, ice, and soda. Garnish with the remaining orange slice and cherry.'
  },
  {
    drink_name: 'Claret Lemonade',
    source: 'The Craft of the Cocktail',
    specs: [
      '4 ounces Red Wine',
      '1 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      'wheel of Lemon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a goblet over ice. Garnish with the lemon wheel.'
  },
  {
    drink_name: 'Cloister',
    source: 'PDT',
    specs: [
      '1.5 oz. Tanqueray Gin',
      '.5 oz. Yellow Chartreuse',
      '.5 oz. Grapefruit Juice',
      '.25 oz. Lemon Juice',
      '.25 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'Clover Club',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '.25 ounce Raspberry Syrup',
      '2 teaspoons Egg White'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Clover Leaf',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '.25 ounce Raspberry Syrup',
      '2 teaspoons Egg White',
      'sprig of Mint'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Club Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Brandy',
      '.5 ounce Maraschino Liqueur',
      '.5 ounce Pineapple Juice',
      '2 dashes Peychaud\'s Bitters',
      'Lemon Peel (Garnish)',
      '1 Strawberry (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a martini glass. Garnish with the lemon peel and strawberry.'
  },
  {
    drink_name: 'Cobra\'s Fang',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Appleton Estate Reserve Rum',
      '.75 ounce El Dorado 151 Rum',
      '1 teaspoon Massenez Crème De Pêche Peach Liqueur',
      '2 dashes Vieux Pontarlier Absinthe',
      '.75 ounce Lime Juice',
      '.5 ounce Orange Juice',
      '.5 ounce Passion Fruit Syrup',
      '.5 ounce Cinnamon Bark Syrup',
      '1 teaspoon Ginger Syrup',
      '1 dash Angostura Bitters',
      'sprig of Mint (Garnish)',
      'wheel of Lime (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a tiki mug filled with crushed ice. Garnish with the mint sprig and lime wheel and serve with a straw.'
  },
  {
    drink_name: 'Cobra Verde',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Neisson Rhum Agricole Blanc',
      '1 ounce Chamomile-Infused Old Overholt Rye Whiskey',
      '.5 ounce Yellow Chartreuse',
      '.5 ounce Green Chartreuse'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Coco Berry',
    source: 'The Craft of the Cocktail',
    specs: [
      '4 Raspberry',
      '.5 ounce Chambord Raspberry Liqueur',
      '2 ounces Light Rum',
      '.5 ounce White Crème De Cacao'
    ],
    instructions: 'In a mixing glass, muddle the berries and Chambord. Add ice, the rum, and the crème de cacao. Stir to chill and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Coco\'s Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounces Light Rum',
      '.75 ounce Gold Rum',
      '.5 ounce Dark Rum',
      '.25 ounce Malibu Coconut Rum',
      '2 ounces Orange Juice',
      '3 ounces Pineapple Juice',
      '.25 teaspoon Grenadine',
      'dash Angostura Bitters',
      'Maraschino Cherry (Garnish)',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a large goblet or a specialty drink glass. Garnish with the maraschino cherry and orange slice.'
  },
  {
    drink_name: 'Coconut Colada',
    source: 'PDT',
    specs: [
      '2 oz. Flor De Caña Silver Dry Rum',
      '1 oz. Pineapple Juice',
      '.5 oz. Lime Juice',
      '1 scoop Ciao Bella Coconut Sorbet'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lime wheel.'
  },
  {
    drink_name: 'Coctel Algeria',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Pisco',
      '.75 ounce Cointreau',
      '.75 ounce Apricot Brandy',
      '1 ounce Orange Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Coda',
    source: 'PDT',
    specs: [
      '1 oz. Pampero Aniversario Rum',
      '1 oz. Neisson Rhum Blanc',
      '1 oz. Lime Juice',
      '.5 oz. St. Elizabeth Allspice Dram',
      '.5 oz. Demerara Syrup',
      '1 Whole Organic Egg'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled fizz glass. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Coffee And Cigarettes',
    source: 'Death & Co',
    specs: [
      '2 ounces Caol Ila 12-Year Scotch Whisky',
      '.5 ounce Galliano Ristretto',
      '1 teaspoon Carpano Antica Formula Vermouth',
      '2 dashes Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. No garnish.'
  },
  {
    drink_name: 'Coffee Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Brandy',
      '1 ounce Ruby Port',
      '1 small Egg',
      '.5 teaspoon Sugar',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a port glass. Dust with nutmeg.'
  },
  {
    drink_name: 'Coffee Nudge',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Brandy',
      '.5 ounce Dark Crème De Cacao',
      '.5 ounce Coffee Liqueur',
      'Hot Coffee',
      'Whipped Cream (unsweetened)'
    ],
    instructions: 'Build in an Irish coffee glass and float the cream on top.'
  },
  {
    drink_name: 'Coffey Park Swizzle',
    source: 'Death & Co',
    specs: [
      '1 ounce Barbancourt 3-Star Rum',
      '1 ounce Lustau Amontillado Sherry',
      '.25 ounce Velvet Falernum',
      '.75 ounce Lime Juice',
      '.75 ounce Ginger Syrup',
      '3 dashes Angostura Bitters',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Whip all the ingredients (except the bitters), shaking with a few pieces of crushed ice just until incorporated. Strain into a pilsner glass filled with crushed ice. Swizzle until cold. Add the bitters and swizzle them into the top of the drink. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Colony Room Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      'dash Ricard',
      '2 ounces Gin',
      '2 dashes Noilly Prat Dry Vermouth',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Season a chilled martini glass by dashing it with Ricard and coating the inside, then pour out the excess. Chill the gin, vermouth, and bitters by stirring with ice. Strain into the prepared martini glass. Garnish with wit or sarcasm, whichever comes easier; if these are unavailable, strike a pose and garnish with attitude.'
  },
  {
    drink_name: 'Colorado Bulldog',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Kahlúa',
      '3 ounces Milk',
      '3 ounces Coca-Cola'
    ],
    instructions: 'Build the Kahlúa and milk in a highball glass. Add the Coca-Cola last, and gently stir while pouring. Let the foam recede, pour, and stir again. Repeat until full. No Garnish.'
  },
  {
    drink_name: 'Company Buck',
    source: 'Death & Co',
    specs: [
      '2 ounces Gosling\'s Black Seal Rum',
      '1 ounce Pineapple Juice',
      '.75 ounce Lime Juice',
      '.5 ounce Ginger Syrup',
      '1 dash Angostura Bitters',
      'Club Soda',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the club soda) with ice, then strain into a highball glass filled with ice cubes. Top with club soda. Garnish with the lime wheel and serve with a straw.'
  },
  {
    drink_name: 'Condiment Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Partida Reposado Tequila',
      '.75 oz. Bénédictine',
      '.5 oz. Lustau Palo Cortado Sherry',
      '.5 oz. Lime Juice',
      '2 dashes Bitter Truth Celery Bitters',
      '1/ teaspoon Gulden\'s Spicy Brown Mustard'
    ],
    instructions: 'Shake with ice and fine-strain into a chilled coupe. Garnish with a lime twist.'
  },
  {
    drink_name: 'Conference',
    source: 'Death & Co',
    specs: [
      '.5 ounce Rittenhouse 100 Rye Whiskey',
      '.5 ounce Buffalo Trace Bourbon',
      '.5 ounce Calvados',
      '.5 ounce Hine H Cognac',
      '1 teaspoon Rich Demerara Syrup',
      '2 dashes Angostura Bitters',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Lemon Peel (Garnish)',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the lemon and orange twists.'
  },
  {
    drink_name: 'Conquistador',
    source: 'PDT',
    specs: [
      '1 oz. Matusalem Gran Reserva Rum',
      '1 oz. Siembra Azul Blanco Tequila',
      '.75 oz. Simple Syrup',
      '.5 oz. Lemon Juice',
      '.5 oz. Lime Juice',
      '2 dashes House Orange Bitters',
      '1 Egg White'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled egg coupe. No garnish.'
  },
  {
    drink_name: 'Cooper Union',
    source: 'Death & Co',
    specs: [
      'Laphroaig 10-Year Scotch Whisky',
      '2 ounces Redbreast 12-Year Irish Whiskey',
      '.5 ounce St-Germain',
      '1 dash House Orange Bitters',
      'Lemon Peel'
    ],
    instructions: 'Rinse a double rocks glass with Laphroaig and dump. Stir the remaining ingredients (except the lemon twist) over ice, then strain into the glass. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Cooperstown',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 sprigs of Mint',
      '.5 ounce Sweet Vermouth',
      '.5 ounce Dry Vermouth',
      '2 ounces Gin'
    ],
    instructions: 'Muddle one of the mint sprigs and the vermouths in a mixing glass. Add the gin and ice, stir well, and strain into a martini glass. Garnish with the remaining mint sprig.'
  },
  {
    drink_name: 'Coralillo',
    source: 'Death & Co',
    specs: [
      '1.5 ounces El Tesoro Añejo Tequila',
      '.75 ounce Yellow Chartreuse',
      '.75 ounce Busnel VSOP Calvados',
      '.25 ounce Clear Creek Pear Brandy',
      'Slice of Fuji Apple (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the apple slice.'
  },
  {
    drink_name: 'Corpse Reviver #2',
    source: 'Death & Co',
    specs: [
      '.75 ounce Beefeater London Dry Gin',
      '.75 ounce Cointreau',
      '.75 ounce Lillet Blanc',
      '2 dashes Vieux Pontarlier Absinthe',
      '.75 ounce Lemon Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Corpse Reviver No. 2',
    source: 'PDT',
    specs: [
      'Vieux Pontarlier Absinthe',
      '.75 oz. Plymouth Gin',
      '.75 oz. Cointreau',
      '.75 oz. Lillet Blanc',
      '.75 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled Vieux Pontarlier Absinthe-rinsed coupe. No garnish.'
  },
  {
    drink_name: 'Corpse Reviver',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Gin',
      '.5 ounce Cointreau',
      '.5 ounce Lille Blanc',
      '.75 ounce Lemon Juice',
      'dash Absinthe'
    ],
    instructions: 'Shake with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Cortado',
    source: 'Death & Co',
    specs: [
      '2 ounces Pampero Aniversario Rum',
      '.5 ounce Lemon Hart 151 Rum',
      '.5 ounce Coffee-Infused Carpano Antica Formula Vermouth',
      '.25 ounce Marie Brizard White Crème De Cacao',
      '.5 teaspoon Rich Demerara Syrup',
      '1 dash Bittermens Xocolatl Mole Bitters',
      '1 dash Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Cosmalize',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Alizé Gold Passion',
      '1 ounce Citrus Vodka',
      '1 ounce Cranberry Juice',
      '.25 ounce Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Cosmopolitan Delight',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Brandy',
      '.5 ounce Curaçao',
      '.5 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '.25 ounce Orgeat',
      'Splash of Red Wine',
      'Fruit (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and serve over ice in an old- fashioned glass. Top with a splash of red wine. Garnish with  seasonal fruits. Don\'t be shy with the garnish \u0096 these early drinks looked like fruit salads.'
  },
  {
    drink_name: 'Cosmopolitan',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Citron Vodka',
      '.5 ounce Cointreau',
      '.25 ounce Lime Juice',
      '1 ounce Cranberry Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice. Strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Cranberry Cobbler',
    source: 'PDT',
    specs: [
      '2 oz. Beefeater Gin',
      '.75 oz. Lustau East India Sherry',
      '.5 oz. Cranberry Cordial',
      '4 Macerated Cranberry',
      '1 Wheel Orange',
      '1 Wedge Lemon',
      '2 Cranberry (Garnish)'
    ],
    instructions: 'Add the citrus, cranberries and syrup to a mixing glass and muddle. Add everything else, then shake with ice and strain into a chilled rocks glass filled with pebble ice. Garnish with a mint sprig and three macerated cranberries.'
  },
  {
    drink_name: 'Crane Kick',
    source: 'Death & Co',
    specs: [
      '2 ounces Yamazaki 12-Year Japanese Whisky',
      '1 teaspoon Laphroaig 10-Year Scotch Whisky',
      '2 teaspoons Kalani Ron De Coco Coconut Liqueur',
      '1 ounce Orange Juice',
      '.5 ounce Lemon Juice',
      '.5 ounce Orgeat',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Short shake all the ingredients with 3 cubes of ice, then strain into a pilsner glass filled with crushed ice. Serve with a straw. No garnish.'
  },
  {
    drink_name: 'Crawdaddy',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Stolichnaya Vodka',
      '5 ounces Lemonade',
      'Splash of Soda Water',
      'slice Lemon (Garnish)'
    ],
    instructions: 'Build in a highball glass, top with the soda, and garnish with the lemon slice.'
  },
  {
    drink_name: 'Creole Saz',
    source: 'Death & Co',
    specs: [
      'Vieux Pontarlier Absinthe',
      '1.5 ounces Barbancourt 3-Star Rum',
      '.5 ounce Pierre Ferrand 1840 Cognac',
      '1 teaspoon Rich Cane Sugar Syrup',
      '3 dashes House Peychaud\'s Bitters',
      'Lemon Peel'
    ],
    instructions: 'Rinse a rocks glass with absinthe and dump. Stir the remaining ingredients (except the lemon twist) over ice, then strain into the glass. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Crimson Tide',
    source: 'PDT',
    specs: [
      '1.5 oz. Lemon Hart Overproof Rum',
      '1.5 oz. Spiced Sorrel',
      '.75 oz. Lime Juice',
      '.5 oz. Canton Ginger Liqueur',
      '.75 oz. Club Soda'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Top with .75 oz. club soda. Garnish with a lime wheel and a piece of candied ginger.'
  },
  {
    drink_name: 'Cuba Libre',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Rum',
      'Coca-Cola',
      'wedge Lime'
    ],
    instructions: 'Pour the Cuban rum over ice in the highball glass and fill with Coca-Cola. Squeeze in a lime wedge.'
  },
  {
    drink_name: 'Cupid\'s Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Peter Heering Cherry Heering',
      '1 ounce Peachtree Schnapps',
      '4 ounces Orange Juice',
      'Slice Orange (Garnish)',
      'slice Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients and strain into a chilled highball glass. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Cure For Pain',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Rittenhouse 100 Rye Whiskey',
      '.5 ounce Stagg Bourbon',
      '.5 ounce Otima 10-Year Tawny Port',
      '.5 ounce Carpano Antica Formula Vermouth',
      '1 teaspoon Campari',
      '1 teaspoon Marie Brizard White Crème De Cacao',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Cuzco',
    source: 'PDT',
    specs: [
      'Clear Creek Kirschwasser',
      '2 oz. Barsol Quebranta Pisco',
      '.75 oz. Aperol',
      '.75 oz. Simple Syrup',
      '.5 oz. Lemon Juice',
      '.5 oz. Grapefruit Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled Clear Creek Kirschwasser-rinsed Collins glass filled with ice. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'Cynaro De Bergerac',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Bergerac Mix',
      '1 ounce Bols Barrel-Aged Genever',
      '.5 ounce Hayman\'s Old Tom Gin',
      '.5 ounce Bénédictine',
      '1 dash Vieux Pontarlier Absinthe',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'Cynartown',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.5 ounce Cynar',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the cherry.'
  },
  {
    drink_name: 'D\'Artagnan',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 teaspoon Armagnac',
      '1 teaspoon Grand Marnier',
      '3 teaspoons Orange Juice',
      '.5 teaspoon Simple Syrup',
      '3 ounces Champagne',
      'thin strips Orange Peel'
    ],
    instructions: 'Chill the first four ingredients in a mixing glass and strain into a flute. Top with chilled Champagne and add strips of orange peel so they extend the length of the glass.'
  },
  {
    drink_name: 'D.O.M. Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '1 ounce Orange Juice',
      '.5 ounce Bénédictine',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'D.W.B.',
    source: 'Death & Co',
    specs: [
      '2 ounces La Favorite Rhum Agricole Blanc',
      '.5 ounce Van Oosten Batavia Arrack',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Dai, Dai My Darling',
    source: 'Death & Co',
    specs: [
      '.75 ounce Flor De Caña Extra-Dry White Rum',
      '.75 ounce El Dorado 3-Year Rum',
      '.5 ounce Banks 5-Island White Rum',
      '.5 ounce Dolin Blanc Vermouth',
      '.5 ounce Combier Pamplemousse Rose Liqueur',
      '.5 teaspoon Kirsch',
      '.5 teaspoon Luxardo Maraschino Liqueur',
      '.5 teaspoon Acid Phosphate',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Daiquiri',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Light Rum',
      '1 ounce Simple Syrup',
      '.75 ounce Lime Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Daisy Buchanan',
    source: 'Death & Co',
    specs: [
      '2 ounces Chamomile-Infused Old Overholt Rye Whiskey',
      '.75 ounce Dolin Dry Vermouth',
      '.5 ounce Aperol',
      '.25 ounce Yellow Chartreuse'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Dale Cooper',
    source: 'Death & Co',
    specs: [
      '2 ounces Siete Leguas Reposado Tequila',
      '.5 ounce Coffee-Infused Carpano Antica Formula Vermouth',
      '.5 ounce Green Chartreuse',
      '1 teaspoon Cinnamon Bark Syrup',
      '1 dash Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. No garnish.'
  },
  {
    drink_name: 'Dale\'s Absolutely Guaranteed Aphrodisiac',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Grand Marnier',
      '1 ounce Cachaça'
    ],
    instructions: 'Stir the Grand Marnier and cachaça and serve over ice in a rocks glass'
  },
  {
    drink_name: 'Dale\'s Julep',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 tender sprigs of Mint',
      '2 slices Sweet Georgia Peach',
      '.5 ounce Marie Brizard Peach Liqueur',
      '2 ounces Bourbon Whiskey'
    ],
    instructions: 'In the bottom of a mixing glass, muddle one sprig of the mint and the peach slices with the peach liqueur. Add the bourbon and strain into a highball glass filled with crushed ice. Swirl with a bar spoon until the outside of the glass frosts. Garnish generously with mint sprigs. Top up with crushed ice.'
  },
  {
    drink_name: 'Dale\'s Orangesicle',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Orange Vodka',
      '.75 ounce Vanilla Vodka',
      '.75 ounce Cointreau',
      '1.5 ounces Orange Juice',
      'Pinch of Cinnamon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain over ice into a highball. Dust with cinnamon.'
  },
  {
    drink_name: 'Dale\'s Ultimate Mango-Rita',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 slices sweet Mango',
      '.5 ounce Triple Sec',
      '.5 ounce Simple Syrup',
      '1.5 ounces 100% Blue Agave Tequila',
      '.75 ounce Lime Juice',
      'Thin wheel of Lime (Garnish)',
      'Salt (Garnish)'
    ],
    instructions: 'In a mixing glass, muddle the mango with the Triple Sec and Simple Syrup. Add the rest of the ingredients and shake well with ice. Strain into a chilled martini glass and garnish with lime.'
  },
  {
    drink_name: 'Dangerous Liaisons',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Lavender-Infused Bernheim Original Wheat Whiskey',
      '.75 ounce Dolin Blanc Vermouth',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      'Crescent of Grapefruit (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a highball glass filled with ice. Garnish with the grapefruit crescent on a cocktail pick and serve with a straw.'
  },
  {
    drink_name: 'Danish Mary',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Aquavit',
      '2 dashes Worcestershire Sauce',
      '4 dashes Tabasco Sauce',
      'pinch of Salt',
      'pinch of Pepper',
      '.25 ounce Lemon Juice',
      '4 ounces Tomato Juice'
    ],
    instructions: 'Combine all the ingredients in a mixing glass and roll back and forth to mix. Strain into a large goblet or pint glass three quarters filled with ice. Garnish with a lemon piece and a giant caper berry on a side plate.'
  },
  {
    drink_name: 'Dark And Stormy II',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Myers\'s Dark Rum',
      '1 ounce Light Rum',
      '2 ounces Ginger Beer',
      '2 ounces Orange Juice',
      '2 ounces Pineapple Juice',
      'wedge Lime (Garnish)'
    ],
    instructions: 'Build all the ingredients in a large glass over ice and stir. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Dark And Stormy',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gosling\'s Or Myers\'s Dark Rum',
      '5 ounces Ginger Beer',
      'wedge Lime'
    ],
    instructions: 'Pour the rum over ice in highball and fill with ginger beer. Squeeze in the lime wedge.'
  },
  {
    drink_name: 'Dark \'n\' Bubbly',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Gosling\'s Black Seal Rum',
      '.25 ounce Lime Juice',
      '.5 ounce Curried Ginger Syrup',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Dave\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Matusalem Gran Reserva 15-Year Rum',
      '1 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'De La Louisiane',
    source: 'PDT',
    specs: [
      '2 oz. Wild Turkey Rye Whiskey',
      '.75 oz. Dolin Sweet Vermouth',
      '.75 oz. Bénédictine',
      '3 dashes St. George Absinthe',
      '3 dashes Peychaud\'s Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with three brandied cherries on a pick.'
  },
  {
    drink_name: 'Deadpan Fix',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Rittenhouse 100 Rye Whiskey',
      '.25 ounce Campari',
      '.25 ounce Grand Marnier',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Lemon Juice',
      '.25 ounce Ginger Syrup',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Death Bed',
    source: 'PDT',
    specs: [
      '1 oz. Pampero Aniversario Rum',
      '.75 oz. Barbancourt Rhum Blanc',
      '.75 oz. Cherry Heering',
      '.75 oz. Lime Juice',
      '.5 oz. Pineapple Juice'
    ],
    instructions: 'Build in a chilled Collins glass. Fill with pebble ice and swizzle. Add more ice and garnish with a lime wheel and brandied cherries on a pick.'
  },
  {
    drink_name: 'Death From Above',
    source: 'Death & Co',
    specs: [
      '1 ounce Lemon Hart 151 Rum',
      '.75 ounce Scarlet Ibis Rum',
      '.25 ounce Cruzan Black Strap Rum',
      '1 teaspoon Lustau East India Solera Sherry',
      '1 teaspoon Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters',
      '2 dashes House Orange Bitters',
      'Lemon Peel (Garnish)',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the lemon and orange twists.'
  },
  {
    drink_name: 'Debonaire Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Highlands Malt Scotch Whisky',
      '.75 ounce Canton Ginger Liqueur'
    ],
    instructions: 'Stir both ingredients to chill and strain into a chilled martini glass. No garnish.'
  },
  {
    drink_name: 'Derby Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      'half a quartered Peach',
      'Several leaves of Mint',
      '.25 ounce Fee Brothers Peach Bitters',
      '2.5 ounces Gin',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'In a mixing glass, muddle together the peach, mint, and peach bitters or peach liqueur. Add the gin and ice. Shake all the ingredients well and strain into a small martini glass. Garnish with a sprig of mint.'
  },
  {
    drink_name: 'Derby Girl',
    source: 'Death & Co',
    specs: [
      '3 small slices of Nectarine',
      '1.5 ounces Lillet Blanc',
      '.5 ounce Suze Saveur D\'Autrefois Liqueur',
      '.5 ounce Koval Rose Hip Liqueur',
      '.25 ounce Acacia Honey Syrup',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'In a shaker, muddle the nectarine slices. Add the remaining ingredients and short shake with ice. Strain into a julep tin filled with crushed ice. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Desert Healer',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Peter Heering Cherry Heering',
      '1.5 ounces Orange Juice',
      '4 ounces Ginger Ale',
      'Orange Peel (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Build in a highball glass over ice and fill with ginger ale. Garnish with the orange peel and cherry.'
  },
  {
    drink_name: 'Desert Rose',
    source: 'PDT',
    specs: [
      '2 oz. Rose-Infused Plymouth Gin',
      '.75 oz. Lemon Juice',
      '.5 oz. Perfect Purées Of Napa Valley Prickly Pear Purée',
      '.5 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a pink rose petal.'
  },
  {
    drink_name: 'Deshler Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Red Dubonnet',
      '1.5 ounces Rye Whiskey',
      '.25 ounce Cointreau',
      'Dash Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake and strain into a cocktail glass. Garnish with the orange peel.'
  },
  {
    drink_name: 'Deshler',
    source: 'PDT',
    specs: [
      '1.5 oz. Rittenhouse Bonded Rye Whiskey',
      '1 oz. Dubonnet Rouge',
      '.25 oz. Cointreau',
      '2 dashes Peychaud\'s Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Devil Inside',
    source: 'Death & Co',
    specs: [
      'Laphroaig 10-Year Scotch Whisky',
      '1.5 ounces Rittenhouse 100 Rye Whiskey',
      '.5 ounce Bruichladdich Port Charlotte 7-Year Scotch Whisky',
      '2 dashes Vieux Pontarlier Absinthe',
      '1 teaspoon Rich Demerara Syrup',
      '2 dashes House Peychaud\'s Bitters',
      'Lemon Peel'
    ],
    instructions: 'Rinse a rocks glass with Laphroaig and dump. Stir the remaining ingredients (except the lemon twist) with ice, then strain into a rocks glass. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Devil\'s Torch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '1.5 ounce Dry French Vermouth',
      '3 dashes Grenadine',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake with ice and strain into a chilled cocktail glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Dewey D.',
    source: 'PDT',
    specs: [
      '2 oz. Old Overholt Rye Whiskey',
      '.75 oz. Lustau East India Sherry',
      '.5 oz. Aperol',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Dhalgren',
    source: 'Death & Co',
    specs: [
      '2 ounces Siembra Azul Blanco Tequila',
      '1 ounce Otima 10-Year Tawny Port',
      '.5 ounce Lime Juice',
      '.5 ounce Ginger Syrup',
      '1 dash Angostura Bitters',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a highball glass filled with ice cubes. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Di Saronno Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Amaretto Di Saronno',
      '.25 ounce Curaçao',
      '2 ounces Orange Juice',
      '2 ounces Pineapple Juice',
      '1 lime Lime Juice',
      'Dash Angostura Bitters',
      'Soda Water',
      'slice Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake the Amaretto, curaçao, juices, and bitters with ice and strain into a collins glass. Top with a splash of club soda. Garnish with the orange and cherry.'
  },
  {
    drink_name: 'Diamondback',
    source: 'Death & Co',
    specs: [
      '2 ounces Rittenhouse 100 Rye Whiskey',
      '.5 ounce Laird\'s Bonded Apple Brandy',
      '.5 ounce Yellow Chartreuse'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass.'
  },
  {
    drink_name: 'Dick And Jane',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Tanqueray No. Ten Gin',
      '.5 ounce St-Germain',
      '.5 ounce Lemon Juice',
      '.5 ounce Hibiscus Syrup',
      '2 dashes House Peychaud\'s Bitters',
      'Dry Champagne',
      '1 long, skinny twist of Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Dick Brautigan',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Grapefruit-Infused Punt E Mes',
      '.5 ounce Amaro Lucano',
      '.25 ounce Luxardo Maraschino Liqueur'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Dirty Gin Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      'Dash Dry French Vermouth',
      '3 ounces Gin',
      '.25 ounce Olive Brine',
      'Pitted Cocktail Olive (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice in a mixing glass. Strain into a chilled martini glass. Garnish with the olive.'
  },
  {
    drink_name: 'Dirty Mary, Crazy Larry',
    source: 'Death & Co',
    specs: [
      '2 ounces Laird\'s Bonded Apple Brandy',
      'Full Sail Session Black Lager'
    ],
    instructions: 'Fill a pilsner glass with ice cubes and add the apple brandy. Top with Full Sail.'
  },
  {
    drink_name: 'Dirty Mother',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Brandy',
      '1 ounce Kahlúa'
    ],
    instructions: 'Serve over ice in a rocks glass.'
  },
  {
    drink_name: 'Dirty Texas Tea',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Tequila',
      '.25 ounce Vodka',
      '.25 ounce White Rum',
      '.5 ounce Triple Sec',
      '1 ounce Orange Juice',
      '3-4 ounces Coca-Cola',
      '.5 ounce Simple Syrup (Optional)',
      'wedge Lemon (Garnish)'
    ],
    instructions: 'Shake all ingredients except the Coca-Cola with ice and strain into an ice tea or collins glass three-quarter filled with ice. Top with 3 or 4 ounces of Coca-Cola and stir. Garnish with the lemon wedge.'
  },
  {
    drink_name: 'Dirty Vodka Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      'Dash Dry French Vermouth',
      '3 ounces Vodka',
      '.25 ounce Olive Brine',
      'Pitted Cocktail Olive (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice in a mixing glass. Strain into a chilled martini glass. Garnish with the olive.'
  },
  {
    drink_name: 'Dirty White Mother',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Brandy',
      '1 ounce Kahlúa',
      '1.5 ounces Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and strain over ice in a rocks glass.'
  },
  {
    drink_name: 'DJ Flamethrower',
    source: 'Death & Co',
    specs: [
      '1 ounce Siete Leguas Reposado Tequila',
      '.5 ounce Del Maguey Vida Mezcal',
      '1 ounce Ancho Chile-Infused Dolin Rouge Vermouth',
      '.5 ounce Grapefruit Juice',
      '.5 ounce Lime Juice',
      '.75 ounce Cinnamon Bark Syrup',
      'Angostura Bitters',
      '1 stick of Cinnamon (Garnish)'
    ],
    instructions: 'Short shake all the ingredients (except the bitters) with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Add the bitters and swizzle them on top of the drink. Grate a bit of the cinnamon over the drink, then garnish with the cinnamon stick and serve with a straw.'
  },
  {
    drink_name: 'Doc Daneeka Royale',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce Lemon Juice',
      '.5 ounce Grade B Maple Syrup',
      '1 dash Bittermens Hopped Grapefruit Bitters',
      'Dry Champagne',
      'Coin of Grapefruit'
    ],
    instructions: 'Shake all the ingredients (except the champagne and grapefruit coin) with ice, then double strain into a coupe. Top with champagne. Squeeze the grapefruit coin over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Doc\'s Dram',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Old Overholt Rye Whiskey',
      '.5 ounce Ransom Old Tom Gin',
      '.5 ounce Lustau East India Solera Sherry',
      '.75 ounce Lemon Juice',
      '.5 ounce Maple Syrup',
      '1 teaspoon Apple Butter',
      '1 dash Angostura Bitters',
      'Fan of Apple (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the apple fan.'
  },
  {
    drink_name: 'Dolly Dagger',
    source: 'Death & Co',
    specs: [
      '1 ounce Smith & Cross Rum',
      '1.5 ounces Williams & Humbert Dry Sack Medium Sherry',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 teaspoon Vanilla Syrup',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Whip all the ingredients, shaking with a few pieces of crushed ice just until incorporated. Strain into a pilsner glass filled with crushed ice. Swizzle until cold. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Dolores Park Swizzle',
    source: 'Death & Co',
    specs: [
      '1 ounce El Tesoro Añejo Tequila',
      '1 ounce Lustau Amontillado Sherry',
      '.25 ounce Velvet Falernum',
      '.75 ounce Lime Juice',
      '.75 ounce Ginger Syrup',
      '3 dashes Angostura Bitters',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients (except the bitters), then dump into a pilsner glass filled with crushed ice. Add the bitters and swizzle them into the top of the drink. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Don\'t Sit Under The Apple Tree',
    source: 'Death & Co',
    specs: [
      '2 ounces Laird\'s Bonded Apple Brandy',
      '.5 ounce Lemon Juice',
      '1 ounce Braeburn Apple Syrup',
      '1 Egg White',
      '1 dash Fee Brothers Whiskey Barrel-Aged Bitters',
      'Slice of Braeburn Apple (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a coupe. Garnish with the apple slice.'
  },
  {
    drink_name: 'Donizetti',
    source: 'PDT',
    specs: [
      '2 oz. Tanqueray Gin',
      '.25 oz. Amaro Ciociaro',
      '.25 oz. Rothman & Winter Orchard Apricot Liqueur',
      '1 oz. Moët Imperial Champagne'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Top with 1 oz. Moët Imperial Champagne. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Dos Besitos',
    source: 'Death & Co',
    specs: [
      '1 ounce El Tesoro Reposado Tequila',
      '1 ounce Siete Leguas Blanco Tequila',
      '.75 ounce Pineapple Juice',
      '.5 ounce Lime Juice',
      '.25 ounce Agave Nectar',
      '1 teaspoon Grenadine'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Double-Barrel Julep',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Old Grand-Dad 114 Bourbon',
      '.5 ounce Diplomático Reserva Exclusiva Rum',
      '1 teaspoon Massenez Crème De Pêche Peach Liqueur',
      '1 teaspoon Rich Demerara Syrup',
      '.25 ounce Smith & Cross Rum',
      '4 dashes Fee Brothers Whiskey Barrel-Aged Bitters',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Put the bourbon, Diplomático rum, peach liqueur, and syrup in a julep tin. Fill the tin halfway with crushed ice. Stir with a teaspoon, churning the ice as you go, for about 10 seconds, holding the tin by the rim so the entire tin can eventually frost up. Add more crushed ice to fill the tin two-thirds full and stir until the tin is completely frosted. Add more ice to form a cone above the rim. Float the Smith & Cross rum over the drink and top with the bitters. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Double Fill-Up',
    source: 'Death & Co',
    specs: [
      '2 ounces Rittenhouse 100 Rye Whiskey',
      '.75 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '1 teaspoon Pomegranate Molasses',
      '3 leaves of Mint',
      '1 leaf Mint (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then double strain into a coupe. Garnish with the mint leaf.'
  },
  {
    drink_name: 'Douglas Fairbanks',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '1 ounce Marie Brizard Apry',
      '.5 ounce Lime Juice',
      '.75 ounce Egg White'
    ],
    instructions: 'Shake all the ingredients extra hard to completely emulsify the egg, then strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Dr. Feelgood',
    source: 'Death & Co',
    specs: [
      '2 ounces Fig-Infused Elijah Craig Bourbon',
      '.5 ounce Clear Creek Apple Brandy',
      '.25 ounce Grand Marnier',
      '.5 ounce Lemon Juice',
      '.5 ounce Granny Smith Apple Juice',
      '.25 ounce Orgeat',
      '.25 ounce Ginger Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a large coupe. No garnish.'
  },
  {
    drink_name: 'Dragon Lily',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Siembra Azul Blanco Tequila',
      '.75 ounce Tarragon And Agave Nectar Gastrique',
      '1 dash House Peychaud\'s Bitters',
      'Dry Champagne'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Dreamy Dorini Smoky Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      'Pernod',
      '2.5 ounces Gin',
      'splash of Laphraoig Islay Whisky',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Season the ice with Pernod. Stir both ingredients with ice to chill and garnish with the lemon twist.'
  },
  {
    drink_name: 'Drunken Dodo',
    source: 'Death & Co',
    specs: [
      '2 ounces Scarlet Ibis Rum',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.25 ounce St. Elizabeth Allspice Dram',
      '2 dashes Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Drunken Skull',
    source: 'Death & Co',
    specs: [
      '.75 ounce El Dorado 12-Year Rum',
      '.75 ounce Appleton Estate V/X Rum',
      '2 dashes Vieux Pontarlier Absinthe',
      '.5 ounce Lime Juice',
      '.5 ounce Grenadine',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Dry County Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. George Dickel No. 12 Tennessee Whiskey',
      '1 oz. Dolin Dry Vermouth',
      '.5 oz. Canton Ginger Liqueur',
      '2 dashes The Bitter Truth Lemon Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Dry Manhattan',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Rye Whiskey',
      '1 ounce Dry Vermouth',
      '2 dashes Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Pour all the ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Dry Martini (Cold-War Era)',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 dashes Dry French Vermouth',
      '2 ounces Gin',
      'Pitted Cocktail Olive (Garnish)'
    ],
    instructions: 'Stir the ingredients with ice in a mixing glass (50 times if using large ice cubes, 30 times if using small cubes). Strain into a chilled martini glass. Garnish with the pitted olive.'
  },
  {
    drink_name: 'Dubliner',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Irish Whiskey',
      '1 ounce Irish Mist',
      'Whipped Cream (unsweetened)'
    ],
    instructions: 'Pour the spirits into a mixing glass with ice and stir to chill. Strain into a London dock glass and top with 1 inch of cream.'
  },
  {
    drink_name: 'Dubonnet Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Red Dubonnet',
      '1.5 ounces Gin',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Pour the dubonnet and gin together over ice in an old-fashioned glass, or chill and serve up in a cocktail glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Duboudreau Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Rittenhouse Bonded Rye Whiskey',
      '.75 oz. Dubonnet Rouge',
      '.25 oz. Fernet-Branca',
      '.25 oz. St. Germain Elderflower Liqueur'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe Garnish with. a lemon twist.'
  },
  {
    drink_name: 'Dulce De Leche',
    source: 'PDT',
    specs: [
      '1.25 oz. Don Julio Añejo Tequila',
      '.75 oz. Toro Albalá Pedro Ximénez Sherry',
      '.5 oz. Heavy Cream',
      '1 Whole Organic Egg'
    ],
    instructions: 'Twist a grapefruit peel into a mixing tin. Add everything else and dry-shake. Shake with ice and strain into a chilled coupe. Garnish with grated cinnamon.'
  },
  {
    drink_name: 'Dusty Rose',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Cherry Brandy',
      '.5 ounce White Crème De Cacao',
      '2 ounces Heavy Cream'
    ],
    instructions: 'Shake and serve in a small martini glass.'
  },
  {
    drink_name: 'Eagle-Eye Cherry',
    source: 'Death & Co',
    specs: [
      '2 ounces Flor De Caña 7-Year Rum',
      '.5 ounce Cherry Heering',
      '.5 ounce Alvear Festival Pale Cream Sherry',
      '.5 ounce Lustau East India Solera Sherry',
      '.25 ounce Alchemia Chocolate Vodka',
      '1 teaspoon Carpano Antica Formula Vermouth',
      '.5 teaspoon Suze Saveur D\'Autrefois Liqueur',
      '1 dash Bittercube Cherry Bark & Vanilla Bitters',
      'Orange Peel',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients (except the orange twist) over ice, then strain into a port glass. Squeeze the orange twist over the drink and discard. Garnish with the cherry.'
  },
  {
    drink_name: 'East India Cocktail',
    source: 'PDT',
    specs: [
      '1.75 oz. Martell V.S.O.P. Cognac',
      '.5 oz. Marie Brizard Orange Curaçao',
      '.5 oz. Pineapple Juice',
      '.25 oz. Pampero Aniversario Rum',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'East India Trading Co.',
    source: 'Death & Co',
    specs: [
      '2 ounces Appleton Estate Reserve Rum',
      '.75 ounce Lustau East India Solera Sherry',
      '.5 ounce Amaro Ramazzotti',
      '2 dashes Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'East Village Athletic Club Cocktail',
    source: 'PDT',
    specs: [
      '1.5 oz. Siembra Azul Blanco Tequila',
      '.75 oz. Lemon Juice',
      '.5 oz. Yellow Chartreuse',
      '.5 oz. Grand Marnier'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Eastern Manhattan',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Suntory Royal Japanese Whisky',
      '.25 ounce Pernod',
      '.5 ounce Sweet Vermouth',
      'Cherry (Garnish)'
    ],
    instructions: 'Stir with ice to chill and strain into a chilled cocktail glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Eclipse Cocktail',
    source: 'PDT',
    specs: [
      'Del Maguey Vida Mezcal',
      '2 oz. El Tesoro Añejo Tequila',
      '.75 oz. Aperol',
      '.75 oz. Cherry Heering',
      '.75 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled, Del Maguey Vida Mezcal-rinsed coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Edgewood',
    source: 'PDT',
    specs: [
      '1.5 oz. Plymouth Gin',
      '1 oz. Grapefruit Juice',
      '.5 oz. Punt E Mes',
      '.5 oz. Lillet Blanc'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a pinch of kosher salt.'
  },
  {
    drink_name: 'Edith\'s Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Lille Blanc',
      '.5 ounce Maraschino Liqueur',
      '4 ounces Orange Juice',
      '2 ounces Soda Water'
    ],
    instructions: 'Mix all the ingredients in a highball glass.'
  },
  {
    drink_name: 'El Burro',
    source: 'PDT',
    specs: [
      '1.5 oz. Siembra Azul Reposado Tequila',
      '1 oz. House Ginger Beer',
      '.75 oz. Lime Juice',
      '.75 oz. Pineapple Juice',
      '.5 oz. Simple Syrup',
      '.25 oz. Vieux Pontarlier Absinthe'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Garnish with a lime wheel and a piece of candied ginger.'
  },
  {
    drink_name: 'El Compañero',
    source: 'Death & Co',
    specs: [
      '.75 ounce El Tesoro Reposado Tequila',
      '.75 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.75 ounce Lime Juice',
      '1 teaspoon Agave Nectar',
      '1 dash Tabasco Chipotle Sauce',
      'pinch of Kosher Salt',
      'Negra Modelo Beer',
      'Sprig of Cilantro (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the beer) with 3 ice cubes, then strain into a highball glass filled with ice cubes. Top with Negra Modelo. Garnish with the cilantro sprig and serve with a straw.'
  },
  {
    drink_name: 'El Diablo',
    source: 'PDT',
    specs: [
      '2 oz. Siembra Azul Blanco Tequila',
      '1 oz. House Ginger Beer',
      '.75 oz. Theuriet Crème De Cassis',
      '.75 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled rocks glass filled with ice. Garnish with a lemon wheel and candied ginger.'
  },
  {
    drink_name: 'El Molino',
    source: 'PDT',
    specs: [
      '1.5 oz. Sombra Mezcal',
      '.75 oz. Lustau Palo Cortado Sherry',
      '.25 oz. St. Elizabeth Allspice Dram',
      '.25 oz. Marie Brizard White Crème De Cacao'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'El Puente',
    source: 'PDT',
    specs: [
      'Del Maguey Vida Mezcal',
      '1.5 oz. José Cuervo Platino Tequila',
      '.75 oz. Grapefruit Juice',
      '.5 oz. Martini Bianco Vermouth',
      '.5 oz. St. Germain Elderflower Liqueur'
    ],
    instructions: 'Shake with ice and strain into a chilled, Del Maguey Vida Mezcal-rinsed coupe. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'Elder Fashion Royale',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Plymouth Gin',
      '.5 ounce St-Germain',
      '1 dash House Orange Bitters',
      'Dry Champagne',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a flute. Top with champagne. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Elder Fashion',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce St-Germain',
      '2 dashes House Orange Bitters',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Electric Iced Tea',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Bourbon Whiskey',
      '.5 ounce Vodka',
      '.5 ounce Gin',
      '.5 ounce Triple Sec',
      '3-4 ounces Coca-Cola',
      '2  wedges Lemon'
    ],
    instructions: 'Build over ice in a highball glass and squeeze in the lemon wedges and stir.'
  },
  {
    drink_name: 'Elk\'s Own',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Canadian Whiskey',
      '1 ounce Port',
      '.5 ounce Lemon Juice',
      '.25 ounce Simple Syrup',
      '1 small Egg White'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Embassy Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Brandy',
      '.75 ounce Cointreau',
      '.75 ounce Appleton Jamaican Rum',
      '.5 ounce Lime Juice',
      'Dash Angostura Bitters',
      'piece of Lime (Garnish)'
    ],
    instructions: 'Shake well with ice and strain into a chilled martini glass. Garnish with lime piece.'
  },
  {
    drink_name: 'Enchanted Orchard',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Campo De Encanto Acholado Pisco',
      '.5 ounce Busnel VSOP Calvados',
      '.5 ounce Bénédictine',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      '1 stick of Cinnamon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the cinnamon stick.'
  },
  {
    drink_name: 'Enemy Lines',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Linie Aquavit',
      '.75 ounce El Tesoro Reposado Tequila',
      '1 teaspoon Rich Cane Sugar Syrup',
      '4 dashes House Peychaud\'s Bitters',
      '1 dash Bitter Truth Aromatic Bitters',
      'Lemon Peel'
    ],
    instructions: 'Stir all the ingredients (except the lemon twist) over ice, then strain into a rocks glass. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'English Bishop',
    source: 'The Craft of the Cocktail',
    specs: [
      '4 whole oranges of Orange Juice',
      '.5 cup Sugar',
      '1 stick Cinnamon',
      '3 whole Cloves',
      '1 bottle of Dry Red Wine'
    ],
    instructions: 'Roast the oranges and lemons in a 350° oven until brown, about 20 minutes for the oranges and 15 minutes for the lemons. Remove to a crockery pot. Add the sugar, spices, and half of the wine or port. Let stand for several hours. Crush the fruit to express the juice and add the remainder of the wine. Heat to just under a boil and strain. Serve steaming in punch cups.'
  },
  {
    drink_name: 'Ephemeral',
    source: 'PDT',
    specs: [
      '2 oz. Ransom Old Tom Gin',
      '1 oz. Dolin Blanc Vermouth',
      '1 barspoon St. Germain Elderflower Liqueur',
      '1 dash The Bitter Truth Celery Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'Eryn\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Flor De Caña Extra-Dry White Rum',
      '.5 ounce La Favorite Rhum Agricole Blanc',
      '1 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Espadin Queen',
    source: 'Death & Co',
    specs: [
      'Vieux Pontarlier Absinthe',
      '1.5 ounces Del Maguey Vida Mezcal',
      '.25 ounce St-Germain',
      '.5 ounce Grapefruit Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Donn\'s Mix #1',
      '1 teaspoon Rich Cane Sugar Syrup'
    ],
    instructions: 'Rinse a coupe with absinthe and dump. Shake the remaining ingredients with ice, then strain into the coupe. No garnish.'
  },
  {
    drink_name: 'Espresso Bongo',
    source: 'PDT',
    specs: [
      '2 oz. Appleton Reserve Rum',
      '.5 oz. Illy Espresso Liqueur',
      '.5 oz. Lime Juice',
      '.5 oz. Pineapple Juice',
      '.5 oz. Orange Juice',
      '.5 oz. Boiron Passion Fruit Purée',
      '.5 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and pour unstrained into a chilled tiki mug. No garnish'
  },
  {
    drink_name: 'Espresso Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Kahlúa',
      '.75 ounce Vodka',
      '1 ounce Espresso',
      '1 ounce Heavy Cream (Optional)',
      'rim of Brown Sugar (Garnish)'
    ],
    instructions: 'Prepare a martini glass with a brown-sugared rim. Shake all the ingredients with ice and strain into the martini glass. No garnish.'
  },
  {
    drink_name: 'European Union',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hayman\'s Old Tom Gin',
      '1 ounce Martini Sweet Vermouth',
      '.5 ounce Busnel VSOP Calvados',
      '1 teaspoon Strega Liqueur',
      '1 dash Bitter Truth Aromatic Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Extra-Dry Gin Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 dash Dry Vermouth',
      '3 ounces Gin',
      'Olive (Garnish)',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir with ice in a mixing glass (50 times if using large cubes, 30 if using small ones). Strain into a chilled martini glass, and garnish with olive or lemon peel or both.'
  },
  {
    drink_name: 'Extra-Dry Vodka Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 dash Dry Vermouth',
      '3 ounces Vodka',
      'Olive (Garnish)',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir with ice in a mixing glass (50 times if using large cubes, 30 if using small ones). Strain into a chilled martini glass, and garnish with olive or lemon peel or both.'
  },
  {
    drink_name: 'Eye Of The Torino',
    source: 'Death & Co',
    specs: [
      '2 ounces Bowmore 12-Year Scotch Whisky',
      '.5 ounce Cocchi Vermouth Di Torino',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lemon Juice',
      '.5 ounce Orgeat',
      '1 teaspoon Vanilla Syrup',
      '.5 ounce Coco Lopez',
      '.25 ounce Heavy Cream',
      '1 dash Angostura Bitters',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Pineapple (Garnish)',
      'Flag with Cherry (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a coconut mug filled with crushed ice. Garnish with the pineapple wedge and cherry flag.'
  },
  {
    drink_name: 'Fail-Safe',
    source: 'Death & Co',
    specs: [
      '.75 ounce Perry\'s Tot Navy-Strength Gin',
      '.75 ounce Plymouth Sloe Gin',
      '.5 ounce Aperol',
      '.5 ounce Pierre Ferrand Dry Curaçao',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'Fair Fault',
    source: 'Death & Co',
    specs: [
      '2 ounces Pasquet Pineau Des Charentes',
      '.5 ounce Cruzan Single-Barrel Rum',
      '.5 ounce Granny Smith Apple Juice',
      '.5 ounce Lemon Juice',
      '.25 ounce Rich Cane Sugar Syrup',
      '1 teaspoon Cruzan Black Strap Rum'
    ],
    instructions: 'Shake all the ingredients (except the Black Strap rum) with ice, then strain into a port glass. Float the Black Strap rum on top. No garnish.'
  },
  {
    drink_name: 'Fair Lady',
    source: 'Death & Co',
    specs: [
      '1 ounce Sage-Infused Dolin Blanc Vermouth',
      '.75 ounce Krogstad Aquavit',
      '.75 ounce Grapefruit Juice',
      '1 teaspoon Rich Cane Sugar Syrup',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Faithful Scotsman',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Compass Box Asyla Scotch Whisky',
      '.25 ounce Massenez Crème De Pêche Peach Liqueur',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lemon Juice',
      '.25 ounce Cumin Syrup',
      '1 leaf of Pineapple (Garnish)'
    ],
    instructions: 'Stir all the ingredients, then strain into a double rocks glass over 1 large ice cube. Garnish with the pineapple leaf.'
  },
  {
    drink_name: 'Falling Leaves',
    source: 'PDT',
    specs: [
      '2 oz. Dr. Konstantin Frank Dry Riesling',
      '1 oz. Clear Creek Pear Brandy',
      '.5 oz. Marie Brizard Orange Curaçao',
      '.25 oz. Honey Syrup',
      '3 dashes Peychaud\'s Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a star anise pod.'
  },
  {
    drink_name: 'Fancy Brandy Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Brandy',
      '.5 ounce Curaçao',
      '2 dashes Angostura Bitters',
      '2 dashes Peychaud\'s Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake with ice and serve in a small cocktail glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Fancy-Free',
    source: 'Death & Co',
    specs: [
      '2 ounces Rittenhouse 100 Rye Whiskey',
      '.5 ounce Luxardo Maraschino Liqueur',
      '1 dash Angostura Bitters',
      '1 dash House Orange Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into double rocks glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: 'Fancy Gin Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '3-4 dashes Simple Syrup',
      '2 dashes Bokers Bitters (substitute Angostura Bitters)',
      '1 wineglass Gin',
      '1-2 dashes Curaçao',
      '1 small piece of Lemon Peel (Garnish)'
    ],
    instructions: 'Fill a shaker one-third full of fine ice, add the ingredients, and shake well. Moisten the edge of a fancy wineglass with lemon and strain the cocktail into the glass. Toss the lemon peel on top.'
  },
  {
    drink_name: 'Fancy Holland Royale',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Bols Genever',
      '.75 ounce Grand Marnier',
      '1 teaspoon Rich Cane Sugar Syrup',
      '1 dash Fee Brothers Whiskey Barrel-Aged Bitters',
      'Dry Champagne'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Fancy Nancy',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Citrus Vodka',
      '.5 ounce Sweet Vermouth',
      '.5 ounce Cointreau',
      '.25 ounce Campari',
      '1.5 ounces Orange Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake well and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Fancy Tequila Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Sauza Hornitos Tequila',
      '1 ounce Grand Marnier',
      '1.5 ounces Orange Juice',
      '.25 ounce Lime Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Faux Nog',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Vodka',
      '1 ounce White Crème De Cacao',
      '2 ounces Heavy Cream',
      '3 dashes Angostura Bitters',
      'Nutmeg'
    ],
    instructions: 'Shake the ingredients well with ice. Strain over crushed ice in a London dock glass. Dust with nutmeg.'
  },
  {
    drink_name: 'Fernet Branca Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '.5 ounce Fernet-Branca',
      '.75 ounce Sweet Vermouth',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Stir with ice to chill and strain into a chilled cocktail glass. Garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Field Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Pierre Ferrand Ambre Cognac',
      '1 oz. Noilly Prat Dry Vermouth',
      '.75 oz. Pineapple Juice'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a pineapple leaf.'
  },
  {
    drink_name: 'Figetaboutit',
    source: 'PDT',
    specs: [
      '2 oz. Bulleit Bourbon Whiskey',
      '.75 oz. Lemon Juice',
      '.25 oz. Luxardo Amaretto',
      '1 barspoon St. Dalfour Fig Jam',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake with ice and fine-strain into a chilled coupe. Garnish with an orange twist wrapped around three brandied cherries on a pick.'
  },
  {
    drink_name: 'Fish House Punch',
    source: 'PDT',
    specs: [
      '1.5 oz. Gosling\'s Black Seal Rum',
      '.5 oz. Pierre Ferrand Ambre Cognac',
      '.5 oz. Mathilde Pêche Liqueur',
      '.5 oz. Lemon Juice',
      '.5 oz. Simple Syrup',
      '.25 oz. Lime Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled rocks glass filled with ice. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Fitzgerald',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '1 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '2 dashes Angostura Bitters',
      'piece of Lemon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a rocks glass. Garnish with the lemon piece.'
  },
  {
    drink_name: 'Fix Me Up',
    source: 'Death & Co',
    specs: [
      '1 ounce Sazerac 6-Year Rye Whiskey',
      '1.5 ounces Lustau Amontillado Sherry',
      '.5 ounce Lemon Juice',
      '.5 ounce Orange Juice',
      '.75 ounce Orgeat',
      '2 dashes Angostura Bitters',
      '.75 ounce Club Soda'
    ],
    instructions: 'Short shake all the ingredients (except the club soda) with 3 ice cubes, then strain into a snifter over 1 large ice cube. Pour in the club soda. No garnish.'
  },
  {
    drink_name: 'Flame Of Love',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Fino Sherry',
      'Several Orange Peel',
      '2.5 ounces Vodka'
    ],
    instructions: 'Coat the inside of a chilled martini glass with fino sherry and toss out the excess. Flame several orange peels into the glass . Chill the vodka and strain into the seasoned glass. Garnish with an orange peel.'
  },
  {
    drink_name: 'Flamenco',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Lustau Amontillado Sherry',
      '1 ounce Bols Genever',
      '.5 ounce Orange Juice',
      '.5 ounce Lemon Juice',
      '.75 ounce Orgeat',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Flaquita',
    source: 'Death & Co',
    specs: [
      '1 ounce El Tesoro Platinum Tequila',
      '.5 ounce Dolin Blanc Vermouth',
      '.25 ounce Marie Brizard White Crème De Cacao',
      '.25 ounce Campari',
      '.5 ounce Lemon Juice',
      '1 teaspoon Ginger Syrup',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Flirtini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 pieces of Pineapple',
      '.5 ounce Cointreau',
      '.5 ounce Vodka',
      '1 ounce Pineapple Juice',
      '3 ounces Champagne',
      'Cherry (Garnish)'
    ],
    instructions: 'In the bottom of a mixing glass, muddle the pineapple pieces and the Cointreau. Add the vodka and juice and stir with ice. Strain into a chilled martini glass and top with the Champagne. Garnish with the cherry.'
  },
  {
    drink_name: 'Flor De Jalisco',
    source: 'Death & Co',
    specs: [
      '2 ounces Siembra Azul Blanco Tequila',
      '.75 ounce Lemon Juice',
      '.25 ounce Agave Nectar',
      '1 teaspoon Orange Marmalade'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Flor De Jerez',
    source: 'Death & Co',
    specs: [
      '.5 ounce Appleton Estate Reserve Rum',
      '1.5 ounces Lustau Amontillado Sherry',
      '.25 ounce Rothman & Winter Apricot Liqueur',
      '.75 ounce Lemon Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Flora Astoria',
    source: 'PDT',
    specs: [
      '2 oz. Hendrick\'s Gin',
      '.5 oz. Dolin Blanc Vermouth',
      '.5 oz. Dolin Dry Vermouth',
      '1 barspoon John D. Taylor\'s Velvet Falernum',
      '4 dashes Lavender Tincture'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a sprig of dried lavender.'
  },
  {
    drink_name: 'Floradora',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Lime Juice',
      '.75 ounce Raspberry Liqueur',
      'Ginger Ale',
      'piece of Lime (Garnish)',
      'Viola Flower (Garnish)'
    ],
    instructions: 'Build the first three ingredients in a highball glass filled with ice. Top with ginger ale. Garnish with the lime piece and an edible sweet violet or viola.'
  },
  {
    drink_name: 'Flying Dutchman',
    source: 'PDT',
    specs: [
      '.75 oz. Clear Creek Plum Brandy',
      '.75 oz. Bols Genever',
      '.5 oz. Crème Yvette',
      '.5 oz. Lemon Juice',
      '.5 oz. Pineapple Juice',
      '1 barspoon Luxardo Maraschino Liqueur'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with one brandied cherry.'
  },
  {
    drink_name: 'Fog Cutter',
    source: 'PDT',
    specs: [
      '1.5 oz. Lemon Juice',
      '1 oz. Bacardi 8 Rum',
      '1 oz. Hine V.S.O.P. Cognac',
      '.75 oz. Orange Juice',
      '.5 oz. Tanqueray Gin',
      '.5 oz. Kassatly Chtaura Orgeat',
      '.5 oz. Lustau Cream Sherry'
    ],
    instructions: 'Shake with ice and pour unstrained into a chilled tiki mug. Float .5 oz. of Lustau Cream Sherry. Garnish with a mint sprig.'
  },
  {
    drink_name: 'Foreign Legion',
    source: 'PDT',
    specs: [
      '1.5 oz. Mount Gay X.O. Rum',
      '.5 oz. Aperol',
      '.5 oz. Dubonnet Rouge',
      '.5 oz. Lustau Manzanilla Sherry',
      '1 barspoon Marie Brizard Dark Crème De Cacao',
      '1 dash Fee Brothers Rhubarb Bitters'
    ],
    instructions: 'Stir with ice and strain over an ice sphere into a chilled rocks glass. Garnish with an orange twist.'
  },
  {
    drink_name: 'Four In Hand',
    source: 'Death & Co',
    specs: [
      '.75 ounce Old Grand-Dad 114 Bourbon',
      '.75 ounce Laird\'s Bonded Apple Brandy',
      '.25 ounce Smith & Cross Rum',
      '.25 ounce Green Chartreuse',
      '1 teaspoon Cinnamon Bark Syrup',
      '1 teaspoon Vanilla Syrup',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a rocks glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'Framboise Fizz',
    source: 'PDT',
    specs: [
      '1.5 oz. Siete Leguas Reposado Tequila',
      '.75 oz. Marie Brizard White Crème De Cacao.',
      '.75 oz. Lemon Juice',
      '2 oz. Oud Beersel Framboise'
    ],
    instructions: 'Shake with ice and strain into a chilled egg coupe. Top with 2 oz. Oud Beersel Framboise. Garnish with three raspberries on a pick.'
  },
  {
    drink_name: 'Frankfort Rose',
    source: 'PDT',
    specs: [
      '2 oz. Hibiscus-Infused Bernheim Wheat Whiskey',
      '.75 oz. Lemon Juice',
      '.75 oz. Simple Syrup',
      '1 Egg White'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled egg coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Freddie Fudpucker',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Tequila',
      '5 ounces Orange Juice',
      'Float of Galliano'
    ],
    instructions: 'Build in a highball glass over ice and top with Galliano.'
  },
  {
    drink_name: 'French 75 (Degroff)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Brandy',
      '.75 ounce Simple Syrup',
      '.5 ounce Lemon Juice',
      'Champagne'
    ],
    instructions: 'Shake the first three ingredients well with ice and strain into a goblet with ice. Top with Champagne.'
  },
  {
    drink_name: 'French 75',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Plymouth Gin',
      '.75 ounce Lemon Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Dry Champagne',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then double strain into a flute. Top with champagne and garnish with the lemon twist.'
  },
  {
    drink_name: 'French 95',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Bourbon Whiskey',
      '.75 ounce Simple Syrup',
      '.5 ounce Lemon Juice',
      '1 ounce Orange Juice',
      'Champagne'
    ],
    instructions: 'Shake the first four ingredients with ice and strain into an ice- filled goblet. Top with Champagne.'
  },
  {
    drink_name: 'French Connection',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Courvoisier Cognac',
      '1 ounce Grand Marnier'
    ],
    instructions: 'Serve in a warm brandy snifter.'
  },
  {
    drink_name: 'French Flamingo',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Absolut Kurant Vodka',
      '1 ounce Cointreau',
      '.75 ounce Lime Juice',
      '.75 ounce Pomegranate Juice',
      'Lime Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled Martini glass. Garnish with the lime peel.'
  },
  {
    drink_name: 'French Kiss',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Sweet Vermouth',
      '2 ounces Dry Vermouth',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Mix over ice in a white wine glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'French Maid',
    source: 'PDT',
    specs: [
      '1.5 oz. Hine V.S.O.P. Cognac',
      '1 oz. House Ginger Beer',
      '.75 oz. Lime Juice',
      '.75 oz. Simple Syrup',
      '.25 oz. John D. Taylor\'s Velvet Falernum',
      '3 Wheels of Cucumber',
      '6-8 Leaves of Mint',
      '1 Wheel of Cucumber (Garnish)',
      '1 sprig of Mint (Garnish)'
    ],
    instructions: 'Add the cucumber, mint, and simple syrup to a mixing glass and muddle. Add everything else, then shake with ice and strain into a chilled Collins glass filled with ice. Garnish with a mint sprig poking through a cucumber wheel.'
  },
  {
    drink_name: 'French Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Vodka',
      '.5 ounce Chambord Raspberry Liqueur',
      '1.5 ounces Pineapple Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. No garnish.'
  },
  {
    drink_name: 'Fresa Brava',
    source: 'Death & Co',
    specs: [
      '1 Strawberry',
      '2 ounces Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.75 ounce Yellow Chartreuse',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup'
    ],
    instructions: 'In a shaker, gently muddle the strawberry. Add the remaining ingredients and shake with ice, then double strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Fresa Verde',
    source: 'PDT',
    specs: [
      '2 oz. Gran Centenario Blanco Tequila',
      '.75 oz. Lime Juice',
      '.25 oz. Al Wadi Pomegranate Molasses',
      '2 Strawberry',
      '2 Thin slices of Green Bell Pepper',
      '1 slice of Strawberry (Garnish)'
    ],
    instructions: 'Add the strawberries, green pepper slices, and molasses to a mixing glass and muddle. Add everything else, then shake with ice and fine-strain into a chilled coupe. Garnish with a slice of strawberry.'
  },
  {
    drink_name: 'Frisco Club',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce Solerno Blood Orange Liqueur',
      '.25 ounce Fernet-Branca',
      '.75 ounce Grapefruit Juice',
      '.25 ounce Lime Juice',
      '.5 ounce Simple Syrup',
      'Grapefruit Peel'
    ],
    instructions: 'Shake all the ingredients (except the grapefruit twist) with ice, then strain into a coupe. Squeeze the grapefruit twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Frisco',
    source: 'PDT',
    specs: [
      '2 oz. Old Potrero Hotaling\'s Rye Whiskey',
      '.5 oz. Bénédictine'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Frozen Banana Daiquiri',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Light Rum',
      '1 ounce Gold Rum',
      '.75 ounce Lime Juice',
      '2 ounces Simple Syrup',
      '.5 ounce Banana Liqueur',
      '0.5 Banana'
    ],
    instructions: 'Blend the ingredients, reserving 1 slice banana, with crushed ice and serve in a large goblet. Garnish with a slice banana.'
  },
  {
    drink_name: 'Frozen Barcelona',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Spanish Brandy',
      '.75 ounce Dry Sack Sherry',
      '.75 ounce Cointreau',
      '.75 ounce Orange Juice',
      '.75 ounce Heavy Cream',
      '1 ounce Simple Syrup',
      'pinch of Cinnamon (Garnish)'
    ],
    instructions: 'Freeze in the blender with .75 cup of ice. Serve in a London dock or sherry-style glass. Garnish with a light dusting of cinnamon.'
  },
  {
    drink_name: 'Frozen Batidas',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Cachaça',
      '2 ounces Tropical Fruit Purée',
      '1 ounce Sweetened Condensed Milk',
      '1 ounce Simple Syrup',
      'wheel of Lime (Garnish)'
    ],
    instructions: 'Blend all the ingredients with ice and serve in a stem glass, or shake with ice and strain into a rocks glass. Garnish with a lime wheel.'
  },
  {
    drink_name: 'Frozen Blue Hawaiian',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Light Rum',
      '1 ounce Blue Curaçao',
      '1 ounce Coco Lopez',
      '2 ounces Pineapple Juice',
      'slices of Pineapple (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Blend with 1 cup of cracked ice. Garnish with the  pineapple slice and the cherry.'
  },
  {
    drink_name: 'Frozen Daiquiri (Papa Doble Style)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces White Rum',
      '.5 ounce Maraschino Liqueur',
      '1 ounce Grapefruit Juice',
      '1.5 ounces Simple Syrup',
      '1 ounce Lime Juice'
    ],
    instructions: 'Blend all the ingredients with a handful of ice and strain into a special frozen-drink glass or into a medium-size wineglass.'
  },
  {
    drink_name: 'Frozen Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Tequila',
      '1 ounce Triple Sec',
      '1 ounce Lime Juice',
      '2 ounces Simple Syrup',
      '.75 cup cracked Ice',
      'Salt (Garnish)'
    ],
    instructions: 'Combine all the ingredients in a blender. Blend and pour into a large goblet rimmed with coarse salt.'
  },
  {
    drink_name: 'Frozen Passion Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Alizé Gold Passion',
      '.75 ounce Tequila',
      '.75 ounce Triple Sec',
      '1 ounce Lime Juice',
      '1.5 ounces Simple Syrup',
      '.75 cup cracked Ice',
      'Thin wheel of Lime (Garnish)',
      'Salt (Garnish)'
    ],
    instructions: 'Pour all the ingredients into a blender and blend. Serve in a margarita glass rimmed with coarse salt. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Frozen Strawberry Daiquiri',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces White Rum',
      '.5 ounce Maraschino Liqueur',
      '4 to 6 medium-size, cleaned and cut up Strawberry',
      '1.5 ounces Simple Syrup',
      '1 ounce Lime Juice',
      'Strawberry (Garnish)'
    ],
    instructions: 'Blend all the ingredients with a handful of ice and strain into a special frozen-drink glass or into a medium-size wineglass. Garnish with the fresh whole strawberry by making a cut on the bottom of the strawberry and perching it on the rim of the glass. See the Hemingway Daiquiri and you will note that frozen drinks require a lot more sweetening than shaken drinks because of all the additional water from the ice.'
  },
  {
    drink_name: 'Fuzzy Navel',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Peach Schnapps',
      '5 ounces Orange Juice',
      'Fruit (Garnish)',
      '1.5 ounces Vodka (Optional)'
    ],
    instructions: 'Build in a highball glass. Garnish with seasonal fruit.'
  },
  {
    drink_name: 'Get Lucky',
    source: 'Death & Co',
    specs: [
      '3 Blackberry',
      '2 ounces Flor De Caña Extra-Dry White Rum',
      '.75 ounce Lemon Juice',
      '.25 ounce Ginger Syrup',
      '.25 ounce Orgeat',
      '.25 ounce Acacia Honey Syrup',
      'House Peychaud\'s Bitters (Garnish)'
    ],
    instructions: 'In a pilsner glass, gently muddle the blackberries. Fill the glass with crushed ice. In a shaker, whip the remaining ingredients, shaking with a few pieces of crushed ice just until incorporated. Strain into the glass. Garnish with a thin layer of bitters and serve with a straw.'
  },
  {
    drink_name: 'Gilchrist',
    source: 'PDT',
    specs: [
      '1.25 oz. Compass Box Asyla Blended Scotch Whisky',
      '.75 oz. Clear Creek Pear Brandy',
      '.75 oz. Grapefruit Juice',
      '.5 oz. Averna Amaro',
      '2 dashes Fee Brothers Grapefruit Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Gilda Cocktail',
    source: 'Death & Co',
    specs: [
      '2 ounces Siembra Azul Blanco Tequila',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Cinnamon Bark Syrup',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Gimlet',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Gin',
      '.5 ounce Rose\'s Or Angostura Preserved Lime Juice',
      'wedge Lime'
    ],
    instructions: 'Shake the ingredients well with ice and strain into a chilled martini glass or serve over ice in an old-fashioned glass. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Gin Alexander',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Gin',
      '1 ounce Dark Crème De Cacao',
      '2 ounces Heavy Cream',
      'Pinch Nutmeg (Garnish)'
    ],
    instructions: 'Shake the ingredients with ice and strain into a small cocktail glass. Garnish with the nutmeg.'
  },
  {
    drink_name: 'Gin And It',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '1.5 ounces Sweet Vermouth',
      'Dash Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled martini glass. Garnish with the orange peel.'
  },
  {
    drink_name: 'Gin And Sin',
    source: 'The Craft of the Cocktail',
    specs: [
      'slice Orange',
      'piece Lemon',
      '.5 ounce Simple Syrup',
      '1 ounce Orange Juice',
      '.5 ounce Lemon Juice',
      '.25 ounce Grenadine',
      '2 ounces Gin'
    ],
    instructions: 'Muddle the orange slice and lemon piece with the juices. Add the gin and grenadine. Shake all the ingredients well with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Gin Cobbler',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 slices Orange',
      '2 wedges Lemon',
      '.75 ounce Cherry Heering',
      '1.5 ounces Gin'
    ],
    instructions: 'In a mixing glass, muddle the skinless pineapple wedge, 1 piece of the orange, and 1 piece of the lemon with Peter Heering. Add the gin and 1 ounce of water. Shake with ice and strain into a double old- fashioned glass filled with crushed ice. Garnish with the remaining pineapple wedge, an orange wedge, and a lemon wedge.'
  },
  {
    drink_name: 'Gin Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      'Soda Water'
    ],
    instructions: 'Shake the gin, lemon juice, and syrup and strain into a highball glass (but see note) with ice. Fill with club soda. No garnish.'
  },
  {
    drink_name: 'Gin Gin Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '5 ounces Ginger Ale',
      '2 dashes Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Build the ingredients in a highball glass over ice. Stir and garnish with a lemon peel.'
  },
  {
    drink_name: 'Gin Gin Mule',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Lime Juice',
      '.5 ounce Simple Syrup',
      '6  sprigs Mint',
      '.75 ounce Ginger Beer',
      '1.5 ounces Bombay Gin',
      'Splash Soda Water',
      'wedge Lime (Garnish)'
    ],
    instructions: 'Muddle the lime juice, syrup, and mint. Add gin and ginger beer and shake well. Pour over ice in a highball glass. Top with soda and garnish with the lime wedge.'
  },
  {
    drink_name: 'Gin Hound',
    source: 'Death & Co',
    specs: [
      '2 ounces Tanqueray London Dry Gin',
      '.5 ounce Celery Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Acacia Honey Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Gin Rickey',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Lime Juice',
      '5 ounces Soda Water',
      'wedge of Lime (Garnish)'
    ],
    instructions: 'Mix all the ingredients in a highball glass with ice. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Gin Sling',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '1 ounce Sweet Vermouth',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '1 dash Angostura Bitters',
      'Soda Water',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients except the soda water with ice and strain over ice into a collins glass. Top with soda. Garnish with a spiral of lemon peel as in a Horse\'s Neck cocktail.'
  },
  {
    drink_name: 'Gin & Tonic',
    source: 'PDT',
    specs: [
      '3.5 oz. Club Soda',
      '2 oz. Tanqueray Gin',
      '.75 oz. Tonic Syrup'
    ],
    instructions: 'Add everything to a chilled Collins glass filled with ice and stir briefly. Garnish with a lime wedge.'
  },
  {
    drink_name: 'Ginger Snap',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Pierre Ferrand Ambre Cognac',
      '.5 ounce Smith & Cross Rum',
      '.5 ounce Rhum Clément Créole Shrubb',
      '.75 ounce Lemon Juice',
      '.25 ounce Cinnamon Bark Syrup',
      '.25 ounce Ginger Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Girl From Jerez',
    source: 'PDT',
    specs: [
      '1 oz. Rhum Clément V.S.O.P.',
      '1 oz. Mãe De Ouro Cachaça',
      '.75 oz. Lime Juice',
      '.5 oz. Lustau Pedro Ximénez Sherry',
      '1 barspoon St. Elizabeth Allspice Dram'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Glandula Del Mono',
    source: 'Death & Co',
    specs: [
      '2 ounces Siembra Azul Blanco Tequila',
      '2 dashes Vieux Pontarlier Absinthe',
      '.5 ounce Lemon Juice',
      '.5 ounce Orange Juice',
      '.5 ounce Grenadine'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Godfather',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Scotch Whisky',
      '1 ounce Amaretto'
    ],
    instructions: 'Pour over ice in a rocks glass.'
  },
  {
    drink_name: 'Godmother',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Vodka',
      '1 ounce Amaretto'
    ],
    instructions: 'Pour over ice in a rocks glass.'
  },
  {
    drink_name: 'Gold Coast',
    source: 'PDT',
    specs: [
      '2 oz. Karlsson\'s Gold Vodka',
      '.5 oz. Carlshamns Flaggpunsch',
      '1 Sprig Fresh Dill'
    ],
    instructions: 'Add the dill and Flaggpunsch to a mixing glass and muddle. Add vodka and ice, then stir and fine-strain over one large cube into a chilled rocks glass. Garnish with two spritzes of Diluted Aftel Black Pepper Essence.'
  },
  {
    drink_name: 'Gold Rush',
    source: 'PDT',
    specs: [
      '2 oz. Elijah Craig 12-Year-Old Bourbon Whiskey',
      '1 oz. Honey Syrup',
      '.75 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain over a large cube into a chilled rocks glass. No garnish.'
  },
  {
    drink_name: 'Golden Beautiful',
    source: 'Death & Co',
    specs: [
      '2 ounces Siete Leguas Reposado Tequila',
      '.25 ounce Campari',
      '.75 ounce Lime Juice',
      '.5 ounce Vanilla Syrup',
      '.25 ounce Passion Fruit Syrup',
      '.5 ounce Club Soda',
      'Lime Zest (Garnish)'
    ],
    instructions: 'Short shake all the ingredients (except the club soda) with 3 ice cubes, then strain into a snifter over 1 large ice cube. Top with the club soda. Garnish with a fine grating of lime zest over the top.'
  },
  {
    drink_name: 'Golden Cadillac',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Galliano',
      '1 ounce White Crème De Cacao',
      '2 ounces Heavy Cream',
      'Cinnamon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Dust with cinnamon.'
  },
  {
    drink_name: 'Golden Dawn',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Gin',
      '.75 ounce Orange Juice',
      '.75 ounce Marie Brizard Apry',
      'Dash Grenadine',
      '2 dashes Bitters',
      'slice Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled martini glass. Garnish with the orange slice and a cherry.'
  },
  {
    drink_name: 'Golden Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lemon Juice',
      '1.5 ounces Simple Syrup',
      '1 ounce (beaten) Egg',
      'Soda Water'
    ],
    instructions: 'Shake all the ingredients except the soda with ice long and hard to completely emulsify the egg. Strain into a fizz or highball glass without ice, and top with the club soda.'
  },
  {
    drink_name: 'Golden Gate',
    source: 'Death & Co',
    specs: [
      '.75 ounce Grand Marnier',
      '.5 ounce Bénédictine',
      '.5 ounce Campari',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Lime Juice',
      'Lime Peel (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a highball glass filled with crushed ice. Garnish with the lime twist and serve with a straw.'
  },
  {
    drink_name: 'Golden Girl',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Bacardi 8 Rum',
      '.5 ounce Simple Syrup',
      '1 ounce Pineapple Juice',
      '.75 ounce Offley Rich Tawny Port',
      '.5 small Egg',
      'Orange Zest (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled martini glass. Garnish with grated orange zest.'
  },
  {
    drink_name: 'Golden Star Fizz',
    source: 'PDT',
    specs: [
      'St. George Absinthe',
      '3 oz. Golden Star Sparkling White Jasmine Tea',
      '2 oz. Krogstad Aquavit',
      '.75 oz. Lemon Juice',
      '.75 oz. Pineapple Juice',
      '4 slices of Cucumber',
      '1 Sprig of Dill',
      '1 slice of Cucumber'
    ],
    instructions: 'Add the cucumber, dill, and juices to a mixing glass and muddle. Add the aquavit, then shake with ice and fine-strain into a chilled, St. George Absinthe-rinsed fizz glass. Top with sparkling jasmine tea. Garnish with a slice of cucumber.'
  },
  {
    drink_name: 'Gonzalez',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Punt E Mes',
      '.25 ounce Luxardo Maraschino Liqueur',
      '2 dashes Bitter Truth Aromatic Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Good Humor',
    source: 'Death & Co',
    specs: [
      '1 Strawberry',
      '1 ounce Bols Genever',
      '.5 ounce Bols Barrel-Aged Genever',
      '.5 ounce Elijah Craig 12-Year Bourbon',
      '.5 teaspoon Merlet Crème De Fraise Des Bois Strawberry Liqueur',
      '.5 ounce Lemon Juice',
      '.5 ounce Orgeat',
      '.25 ounce Vanilla Syrup',
      '.5 ounce Heavy Cream',
      'Strawberry (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the strawberry. Add the remaining ingredients and shake with ice, then strain into a double rocks glass filled with crushed ice. Garnish with the strawberry and serve with a straw.'
  },
  {
    drink_name: 'Grand Street',
    source: 'Death & Co',
    specs: [
      'Grapefruit Peel',
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Punt E Mes',
      '.25 ounce Cynar',
      '1 teaspoon Luxardo Maraschino Liqueur'
    ],
    instructions: 'In a mixing glass, gently muddle the grapefruit twist. Add the remaining ingredients and stir with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Granny\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Granny Smith Apple-Infused Rhum Barbancourt',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Grasshopper',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Green Crème De Menthe',
      '1 ounce White Crème De Cacao',
      '2 ounces Heavy Cream'
    ],
    instructions: 'Shake well with ice and strain into a martini glass.'
  },
  {
    drink_name: 'Great Northern',
    source: 'Death & Co',
    specs: [
      '2 ounces Linie Aquavit',
      '.75 ounce Lillet Blanc',
      '.5 ounce Cointreau',
      '.75 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      '2 crescents of Orange (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a double rocks glass filled with crushed ice. Garnish with the orange crescents.'
  },
  {
    drink_name: 'Great Pumpkin',
    source: 'PDT',
    specs: [
      '2 oz. Southampton Pumpkin Ale',
      '1 oz. Rittenhouse Bonded Rye Whiskey',
      '1 oz. Laird\'s Bonded Apple Brandy',
      '.5 oz. Deep Mountain Grade B Maple Syrup',
      '1 Whole Egg'
    ],
    instructions: 'Add everything to a mixing glass and swirl to decarbonate beer. Dry-shake, then shake with ice and strain into a chilled fizz glass. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Green And Red',
    source: 'Death & Co',
    specs: [
      '3 wheels of Cucumber',
      '1 ounce Siete Leguas Blanco Tequila',
      '1 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.75 ounce Cocchi Americano',
      '.75 ounce Dolin Dry Vermouth',
      '.25 ounce Alvear Festival Pale Cream Sherry',
      'Ribbon of Cucumber (Garnish)'
    ],
    instructions: 'In a mixing glass, muddle the cucumber wheels. Add the remaining ingredients and stir over ice, then strain into a coupe. Garnish with the cucumber ribbon on a cocktail pick.'
  },
  {
    drink_name: 'Green Briar',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Scotch Whisky',
      '1 ounce Sweet Vermouth',
      'dash Orange Bitters',
      'dash Cointreau',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Pour all the ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass and garnish with the lemon peel.'
  },
  {
    drink_name: 'Green Deacon',
    source: 'PDT',
    specs: [
      'St. George Absinthe',
      '1.5 oz. Plymouth Gin',
      '1 oz. Grapefruit Juice',
      '.75 oz. Plymouth Sloe Gin'
    ],
    instructions: 'Shake with ice and strain into a chilled, St. George Absinthe-rinsed coupe. No garnish.'
  },
  {
    drink_name: 'Green Flash',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Rhum Jm 100-Proof Agricole Blanc',
      '.25 ounce Vieux Pontarlier Absinthe',
      '.75 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      'Dry Champagne',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. Garnish with the cherry.'
  },
  {
    drink_name: 'Green Harvest',
    source: 'PDT',
    specs: [
      '2 oz. Chilled Brewed Hibiscus Tea',
      '1.5 oz. José Cuervo Platino Tequila',
      '.5 oz. Green Chartreuse',
      '4 Concord Grape',
      '3 Concord Grape'
    ],
    instructions: 'Muddle the grapes. Add everything to a mixing glass, then stir with ice and fine-strain into a chilled fizz glass filled with ice. Garnish with three Concord grapes on a cocktail pick.'
  },
  {
    drink_name: 'Greenpoint',
    source: 'PDT',
    specs: [
      '2 oz. Rittenhouse Bonded Rye Whiskey',
      '1 oz. Punt E Mes',
      '1 barspoon Yellow Chartreuse',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Greyhound',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '4 ounces Grapefruit Juice'
    ],
    instructions: 'Pour together into an iced highball glass.'
  },
  {
    drink_name: 'Grouse Rampant',
    source: 'Death & Co',
    specs: [
      '2 ounces Fuji Apple-Infused Famous Grouse Scotch',
      '.75 ounce Lemon Juice',
      '.25 ounce Acacia Honey Syrup',
      '.25 ounce Cinnamon Bark Syrup',
      '1 Egg White',
      'House Peychaud\'s Bitters (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a coupe and garnish with 2 swipes of the bitters to form an X.'
  },
  {
    drink_name: 'Guns And Rosé',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Old Grand-Dad 114 Bourbon',
      '1 ounce Lillet Rosé',
      '1 teaspoon Rich Cane Sugar Syrup',
      '2 dashes House Peychaud\'s Bitters',
      'Grapefruit Peel'
    ],
    instructions: 'Stir all the ingredients (except the grapefruit twist) over ice, then strain into a rocks glass. Squeeze the grapefruit twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Gypsy Eyes',
    source: 'Death & Co',
    specs: [
      'Green Chartreuse',
      '1.5 ounces Beefeater London Dry Gin',
      '.5 ounce Aperol',
      '.5 ounce Lime Juice',
      '.5 ounce Grapefruit Juice',
      '.25 ounce Simple Syrup'
    ],
    instructions: 'Rinse a coupe with the Chartreuse and dump. Shake the remaining ingredients with ice, then strain into the coupe. No garnish.'
  },
  {
    drink_name: 'Gypsy Wedding',
    source: 'Death & Co',
    specs: [
      'Rim with Toasted Fennel Salt (Garnish)',
      '6 Green Grapes',
      '1.5 ounces Bombay London Dry Gin',
      '.5 ounce Krogstad Aquavit',
      '.25 ounce Velvet Falernum',
      '.75 ounce Lime Juice',
      '.5 ounce Grapefruit Juice',
      '.5 ounce Acacia Honey Syrup'
    ],
    instructions: 'Rim half of a coupe with toasted fennel salt. In a shaker, muddle the grapes. Add the remaining ingredients and shake with ice, then double strain into the coupe. No garnish.'
  },
  {
    drink_name: 'Hadley\'s Tears',
    source: 'Death & Co',
    specs: [
      '1 ounce Appleton Estate V/X Rum',
      '1 ounce Bols Genever',
      '1 teaspoon Galliano Ristretto',
      '.5 teaspoon St. George Absinthe',
      '.25 ounce Rich Cane Sugar Syrup',
      '1 dash Bitter Truth Aromatic Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: 'Hallyday',
    source: 'Death & Co',
    specs: [
      'Vieux Pontarlier Absinthe',
      '1.5 ounces Hine H Cognac',
      '.5 ounce Dolin Dry Vermouth',
      '.5 ounce Royal Combier Liqueur',
      '1 teaspoon Clear Creek Pear Brandy',
      '1 dash Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Rinse a rocks glass with absinthe and dump. Stir the remaining ingredients over ice, then strain into the glass. Garnish with the lemon twist. singer, this Sazerac variation uses a quartet of French ingredients.\u0096TW'
  },
  {
    drink_name: 'Hanky Panky',
    source: 'PDT',
    specs: [
      '2 oz. Beefeater Gin',
      '1.5 oz. Carpano Antica Sweet Vermouth',
      '.25 oz. Fernet Branca'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Hanky-Panky',
    source: 'Death & Co',
    specs: [
      '2 ounces Fords Gin',
      '.5 ounce Contratto Americano Rosso Vermouth',
      '.5 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Fernet-Branca',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Happy Honey Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Brandy',
      '1 ounce Grapefruit Juice',
      '.5 ounce Honey Syrup'
    ],
    instructions: 'Shake all the ingredients with ice and strain into small martini glass.'
  },
  {
    drink_name: 'Harry\'s Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 sprigs of Mint',
      '1 ounce Sweet Vermouth',
      '2 dashes Absinthe',
      '2 ounces Gin',
      'Stuffed Olive (Garnish)'
    ],
    instructions: 'In a mixing glass, muddle 2 sprigs of the mint with the vermouth and Absente. Add the gin. Shake with ice and strain into a chilled cocktail glass. Garnish with a stuSed olive and the remaining mint sprig.'
  },
  {
    drink_name: 'Harry\'s Harveys Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Harveys Bristol Cream Sherry',
      '1 ounce Maraschino Liqueur',
      '.5 ounce Lemon Juice',
      '3 ounces Orange Juice',
      'Dash Angostura Bitters',
      'Sprig of Mint (Garnish)',
      'slice Orange (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a large goblet. Garnish with a mint sprig and orange slice.'
  },
  {
    drink_name: 'Harvard',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Brandy',
      '1 ounce Sweet Italian Vermouth',
      '2 dashes Angostura Bitters',
      'Cherry (Garnish)'
    ],
    instructions: 'Pour all the ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Harvest Moon',
    source: 'PDT',
    specs: [
      '1.5 oz. Wild Turkey Rye Whiskey',
      '1 oz. Lillet Blanc',
      '.5 oz. Laird\'s Bonded Apple Brandy',
      '.25 oz. Green Chartreuse',
      '3 dashes Abbott\'s Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Harvest Sling',
    source: 'PDT',
    specs: [
      '1.5 oz. Laird\'s Bonded Apple Brandy',
      '.5 oz. Martini Sweet Vermouth',
      '.5 oz. Bénédictine',
      '.5 oz. Cherry Heering',
      '.5 oz. Lemon Juice',
      '.5 oz. House Ginger Beer'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Garnish with a cherry and orange flag.'
  },
  {
    drink_name: 'Harvey Wallbanger',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '4 ounces Orange Juice',
      'Galliano'
    ],
    instructions: 'Pour the vodka and orange juice together in a highball glass and float a little Galliano on top.'
  },
  {
    drink_name: 'Have At It',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Williams & Humbert Dry Sack Medium Sherry',
      '.75 ounce Fords Gin',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '1 dash Angostura Bitters',
      'Club Soda',
      'Wedge of Orange (Garnish)'
    ],
    instructions: 'Short shake all the ingredients (except the club soda) with ice, then strain into a highball glass filled with ice cubes. Top with club soda. Garnish with the orange wedge and serve with a straw.'
  },
  {
    drink_name: 'Hawaiian Stone Sour',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Whiskey',
      '1 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '1.5 ounces Pineapple Juice',
      'Cherry (Garnish)',
      'slice Pineapple (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a rocks glass. Garnish with the cherry and pineapple slice.'
  },
  {
    drink_name: 'Head Spin',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Cabeza Blanco Tequila',
      '.5 ounce Santa Teresa Orange Liqueur',
      '.75 ounce Lime Juice',
      '.5 ounce Orange Juice',
      '.75 ounce Kumquat Cordial',
      '.25 ounce Vanilla Syrup',
      'splash of Club Soda',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'club soda and garnish with the lime wheel.'
  },
  {
    drink_name: 'Headstone',
    source: 'Death & Co',
    specs: [
      '2 ounces Suntory Hakushu 12-Year Japanese Whisky',
      '.5 ounce Mandarine Napoléon Liqueur',
      '.25 ounce Rhum Clément Créole Shrubb',
      '.25 ounce Rich Cane Sugar Syrup',
      '2 dashes House Orange Bitters',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'Heart-Shaped Box',
    source: 'Death & Co',
    specs: [
      '1 Strawberry',
      '2 ounces Hine H Cognac',
      '.75 ounce St-Germain',
      '.75 ounce Lemon Juice',
      '.25 ounce Cinnamon Bark Syrup',
      '.5 teaspoon Aged Balsamic Vinegar',
      '1 dash Angostura Bitters',
      '0.5 Strawberry (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the strawberry. Add the remaining ingredients and short shake. Strain into a double rocks glass filled with crushed ice. Garnish with the strawberry half and serve with a straw.'
  },
  {
    drink_name: 'Heirloom',
    source: 'PDT',
    specs: [
      '1.5 oz. Hayman\'s Old Tom Gin',
      '.5 oz. Cynar',
      '.5 oz. Lime Juice',
      '.25 oz. Strega Liqueur',
      '7 Concord Grape'
    ],
    instructions: 'Add the grapes and Strega Liqueur to a mixing glass and muddle. Add everything else, then shake with ice and fine-strain into a chilled coupe. Garnish with two spritzes of diluted Aftel Anise Hyssop Essence.'
  },
  {
    drink_name: 'Hemingway Daiquiri (Papa Doble)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces White Rum',
      '.25 ounce Maraschino Liqueur',
      '.5 ounce Grapefruit Juice',
      '.75 ounce Simple Syrup (Optional)',
      '.75 ounce Lime Juice'
    ],
    instructions: 'Shake the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Hemingway Daiquiri',
    source: 'PDT',
    specs: [
      '2 oz. Banks 5 Island Rum',
      '.75 oz. Lime Juice',
      '.5 oz. Luxardo Maraschino Liqueur',
      '.5 oz. Grapefruit Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lime wheel.'
  },
  {
    drink_name: 'Henry Hudson',
    source: 'PDT',
    specs: [
      '1.5 oz. Bols Genever',
      '1 oz. Channing Daughters Scuttlehole Chardonnay',
      '.5 oz. Lemon Juice',
      '.5 oz. Simple Syrup',
      '.25 oz. Van Oosten Batavia Arrack'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Hi Ho Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '1 ounce White Port',
      '4 dashes Orange Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Hispaniola',
    source: 'Death & Co',
    specs: [
      '2 ounces Summer Royale Tea-Infused Flor De Caña White Rum',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '.25 ounce Ginger Syrup',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Hoi Polloi',
    source: 'Death & Co',
    specs: [
      '1 ounce Hine H Cognac',
      '.5 ounce Dried Currant-Infused Wild Turkey Rye Whiskey',
      '.5 ounce Marie Brizard White Crème De Cacao',
      '1 ounce Pineapple Juice',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '1 dash Angostura Bitters',
      'Wedge of Pineapple (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Garnish with the pineapple wedge and serve with a straw.'
  },
  {
    drink_name: 'Honeymoon Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Applejack',
      '.5 ounce Bénédictine',
      '.5 ounce Curaçao',
      '.5 ounce Lemon Juice',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Honeysuckle',
    source: 'Death & Co',
    specs: [
      '2 ounces Flor De Caña Extra-Dry White Rum',
      '.75 ounce Lime Juice',
      '.75 ounce Acacia Honey Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Honolulu Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '.5 ounce Pineapple Juice',
      '.5 ounce Orange Juice',
      '.25 ounce Lemon Juice',
      '.25 ounce Simple Syrup',
      'Dash Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Prepare a chilled martini glass with a sugared rim. Shake all the ingredients well with ice and strain into the prepared glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Honshu Punch',
    source: 'Death & Co',
    specs: [
      '2 ounces Yamazaki 12-Year Japanese Whisky',
      '.75 ounce Lemon Juice',
      '.5 ounce Pineapple Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '2 dashes Fee Brothers Whiskey Barrel-Aged Bitters',
      '2 dashes Bitter Truth Aromatic Bitters',
      '1 ounce Club Soda'
    ],
    instructions: 'Shake all the ingredients (except the club soda), then strain into a snifter over 1 large ice cube. Pour in the club soda. No garnish.'
  },
  {
    drink_name: 'Horse\'s Neck',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bourbon Whiskey',
      '5 ounces Ginger Ale',
      'spiral Lemon Peel'
    ],
    instructions: 'Before icing a highball or collins glass, place the lemon-peel spiral in the glass, spiraling up from the bottom with the curled end of the spiral hanging over the rim of the glass. The piece hanging over the edge of the glass should look like a stylized horse\'s neck and head. Put the ice down through the center of the spiral and then build the drink.'
  },
  {
    drink_name: 'Hostage Situation',
    source: 'Death & Co',
    specs: [
      '2 ounces Ransom Old Tom Gin',
      '.5 ounce Coffee-Infused Carpano Antica Formula Vermouth',
      '.5 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Rhum Clément Créole Shrubb',
      '2 dashes Regans\' Orange Bitters',
      '1 dash Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: 'Hot Apple Pie',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Tuaca',
      '4 ounces Hot Apple Cider',
      'Whipped Cream'
    ],
    instructions: 'Serve in an Irish-coffee glass, and float the cream on top.'
  },
  {
    drink_name: 'Hot Buttered Pisco',
    source: 'PDT',
    specs: [
      '6 oz. Hot Water',
      '2 oz. Spiced Macchu Pisco',
      '1 barspoon Vanilla Butter'
    ],
    instructions: 'Add everything to a pre-warmed heatproof mug and stir until vanilla butter dissolves. Top with sweetened whipped cream. Garnish with freshly grated nutmeg.'
  },
  {
    drink_name: 'Hot Lips',
    source: 'Death & Co',
    specs: [
      'Rim with Kosher Salt (Garnish)',
      '.75 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.75 ounce Los Amantes Joven Mezcal',
      '.5 ounce Lemon Juice',
      '.5 ounce Pineapple Juice',
      '.5 ounce Vanilla Syrup',
      '1 teaspoon Rich Cane Sugar Syrup'
    ],
    instructions: 'Rim half of a fancy fizz glass with salt and add 2 ice cubes. Stir the remaining ingredients over ice, then strain into the glass. No garnish.'
  },
  {
    drink_name: 'Hot Shot',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Galliano',
      '.5 ounce Hot Coffee',
      'Whipped Cream'
    ],
    instructions: 'Build in a shot glass. Float whipped cream on top.'
  },
  {
    drink_name: 'Hot Toddy',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Brandy',
      '.5 ounce Rum (Optional)',
      '1 teaspoon Honey',
      '.5 ounce Lemon Juice'
    ],
    instructions: 'Combine in a mug and fill with hot water or tea.'
  },
  {
    drink_name: 'Hotel D\'Alsace',
    source: 'PDT',
    specs: [
      '2 oz. Bushmills Irish Whiskey',
      '.5 oz. Cointreau',
      '.5 oz. Bénédictine',
      '1 Sprig Rosemary'
    ],
    instructions: 'Add the Cointreau, Bénédictine, and bottom half of rosemary sprig to a mixing glass and muddle. Add Bushmills and ice, then stir and fine-strain over one large cube into a chilled rocks glass. Garnish with the tip of the rosemary sprig.'
  },
  {
    drink_name: 'Hotel Nacional Special',
    source: 'PDT',
    specs: [
      '2 oz. Bacardi 8 Rum',
      '1 oz. Pineapple Juice',
      '.5 oz. Lime Juice',
      '.5 oz. Simple Syrup',
      '.25 oz. Rothman & Winter Orchard Apricot Liqueur'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lime wheel.'
  },
  {
    drink_name: 'House Of Payne',
    source: 'Death & Co',
    specs: [
      '3 Raspberry',
      '1.5 ounces Beefeater London Dry Gin',
      '1 ounce Plymouth Sloe Gin',
      '1 ounce Campari',
      'Raspberry (Garnish)'
    ],
    instructions: 'In a mixing glass, gently muddle the raspberries. Add the remaining ingredients and stir over ice. Double strain into a double rocks glass over 1 large ice cube. Garnish with the raspberry.'
  },
  {
    drink_name: 'Howl On The Hill',
    source: 'Death & Co',
    specs: [
      '1.5 ounces El Dorado 15-Year Rum',
      '.5 ounce Santa Teresa 1796 Rum',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.5 ounce Fernet-Branca',
      '.25 ounce Yellow Chartreuse',
      '1 dash Vieux Pontarlier Absinthe'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Howlin\' At The Moon',
    source: 'Death & Co',
    specs: [
      'Lemon Peel',
      '2 ounces Bols Barrel-Aged Genever',
      '2 teaspoons Marie Brizard White Crème De Cacao',
      '.5 teaspoon Rich Cane Sugar Syrup',
      '2 dashes Bittercube Cherry Bark & Vanilla Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'In a mixing glass, muddle the lemon twist. Add the remaining ingredients and stir over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: 'Hummer',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Coffee Liqueur',
      '1 ounce Spiced Rum',
      '1 scoop Ice Cream (vanilla)',
      '2 ounces Milk'
    ],
    instructions: 'Blend and serve in a frozen-drink glass.'
  },
  {
    drink_name: 'Hurricane',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Dark Rum',
      '1 ounce Light Rum',
      '.5 ounce Galliano',
      '.75 ounce Lime Juice',
      '2 ounces Passion Fruit Juice',
      '2 ounces Orange Juice',
      '2 ounces Pineapple Juice',
      '1 ounce Simple Syrup',
      'Dash Angostura Bitters',
      'Tropical Fruit (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a hurricane glass filled with ice. Garnish with fresh tropical fruit.'
  },
  {
    drink_name: 'Hyde Park Swizzle',
    source: 'Death & Co',
    specs: [
      '3 or 4 sprigs Mint',
      '2 ounces Plymouth Gin',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      '2 dashes Angostura Bitters',
      '2 dashes Peychaud\'s Bitters',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the mint. Add the remaining ingredients (except the bitters) and dry shake, then dump into a pilsner glass. Fill the glass with crushed ice and swizzle until cold. Add the bitters and swizzle them into the top of the drink. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Ice House Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounce Absolut Citron Vodka',
      '5 ounces Lemonade',
      'Dash Marie Brizard White Crème De Menthe',
      'Edible Flower (Garnish)'
    ],
    instructions: 'Build the vodka and lemonade in a large pint glass filled with ice and top with a dash of crème de menthe. Garnish with an edible orchid or other edible flower.'
  },
  {
    drink_name: 'Iceberg',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Citrus Vodka',
      '3 dashes Pernod'
    ],
    instructions: 'Shake the three dashes of Pernod into an empty old-fashioned glass and swirl it around to coat the glass. Toss out any excess. Add ice and the vodka, and stir. No garnish.'
  },
  {
    drink_name: 'Imaginary Grace',
    source: 'Death & Co',
    specs: [
      '2 ounces Siete Leguas Reposado Tequila',
      '1 ounce Morenita Cream Sherry',
      '.5 teaspoon Clear Creek Pear Brandy',
      '.5 teaspoon Carpano Antica Formula Vermouth',
      '.5 teaspoon Agave Nectar',
      '1 dash Bittermens Xocolatl Mole Bitters',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Imperial Blueberry Fizz',
    source: 'PDT',
    specs: [
      '1.5 oz. Hine V.S.O.P. Cognac',
      '.5 oz. Crème Yvette',
      '2 tablespoon Blueberries',
      '2.5 oz. Moët Imperial Champagne'
    ],
    instructions: 'Add the blueberries and Crème Yvette to a mixing glass and muddle. Add the Cognac and ice, then shake and fine-strain into a chilled egg coupe. Top with 2.5 oz. Moët Imperial Champagne. Garnish with an edible orchid.'
  },
  {
    drink_name: 'Imperial March',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Martin Miller\'s Westbourne-Strength Gin',
      '1 ounce Alvear Festival Pale Cream Sherry',
      '.75 ounce Cocchi Americano',
      '1 teaspoon Luxardo Maraschino Liqueur',
      '1 dash House Orange Bitters',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a fancy fizz glass. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Imperial Silver Corn Fizz',
    source: 'PDT',
    specs: [
      '1.5 oz. George Dickel No. 12 Tennessee Whiskey',
      '1 oz. Corn Water',
      '.5 oz. Honey Syrup',
      '1 Egg White',
      '1 oz. Moët Imperial Champagne'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled egg coupe. Top with 1 oz. Moët Imperial Champagne. No garnish.'
  },
  {
    drink_name: 'Improved Whiskey Cocktail',
    source: 'PDT',
    specs: [
      'Vieux Pontarlier Absinthe',
      '2 oz. Rittenhouse Bonded Rye Whiskey',
      '.25 oz. Luxardo Maraschino Liqueur',
      '.25 oz. Simple Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled, Vieux Pontarlier Absinthe\u0096rinsed rocks glass. Garnish with a lemon twist.'
  },
  {
    drink_name: 'In-Sandiary',
    source: 'Death & Co',
    specs: [
      'Rim with Spicy Sugar (Garnish)',
      'Rim with Salt (Garnish)',
      '2 ounces Siembra Azul Blanco Tequila',
      '2 ounces Watermelon Juice',
      '.5 ounce Lime Juice',
      '.25 ounce Simple Syrup'
    ],
    instructions: 'Rim a highball glass with spicy sugar and salt. Shake the remaining ingredients with ice, then pour into a highball glass filled with ice cubes. Serve with a straw. No garnish.'
  },
  {
    drink_name: 'Independence Day Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 cup of balls of Watermelon',
      '1.5 ounces Simple Syrup',
      '1.5 ounces Citrus Vodka',
      '.75 ounce Lemon Juice',
      '4 ounces Lipton Cold-brew Tea',
      'Thin wheel of Lemon (Garnish)'
    ],
    instructions: 'In the bottom of a mixing glass, muddle the melon with the Simple Syrup until it is watery. Add all the rest of the ingredients and shake well with ice. Strain into a goblet filled with ice and garnish with a thin wheel of lemon.'
  },
  {
    drink_name: 'Ingénue',
    source: 'Death & Co',
    specs: [
      '2 ounces Pierre Ferrand Ambre Cognac',
      '1 ounce Dolin Rouge Vermouth',
      '1 teaspoon Cinnamon Bark Syrup'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'International Stinger',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Metaxa',
      '.75 ounce Galliano'
    ],
    instructions: 'Shake well with ice and serve up or on the rocks.'
  },
  {
    drink_name: 'Irish Coconut',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Baileys Irish Cream',
      '.75 ounce White Rum',
      '.75 ounce Heavy Cream',
      '.5 ounce Coco Lopez',
      '2-3 ounces Soda Water'
    ],
    instructions: 'Shake all the ingredients well with ice. Strain into an iced highball glass, top with soda, and stir.'
  },
  {
    drink_name: 'Irish Coffee',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Irish Whiskey',
      'Coffee',
      '1 ounce Brown Sugar Syrup',
      'Whipped Irish Coffee Cream'
    ],
    instructions: 'Combine the whiskey, coSee, and syrup in an Irish-coSee glass. Ladle 1 inch of cream on top.'
  },
  {
    drink_name: 'Irish Seelbach',
    source: 'Death & Co',
    specs: [
      '1 ounce Clontarf 1014 Irish Whiskey',
      '.5 ounce Cointreau',
      '4 dashes House Peychaud\'s Bitters',
      '4 dashes Angostura Bitters',
      'Dry Champagne',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a flute. Top with champagne. Garnish with the orange twist.'
  },
  {
    drink_name: 'Iron Chancellor',
    source: 'Death & Co',
    specs: [
      '2 ounces Mackeson Stout',
      '.25 ounce Espresso-Infused Demerara Syrup',
      'Dry Champagne'
    ],
    instructions: 'Combine the beer and syrup in a flute, then slowly add the champagne over the back of a teaspoon. No garnish.'
  },
  {
    drink_name: 'Island Breeze',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Light Rum',
      '4 ounces Pineapple Juice',
      '1 ounce Cranberry Juice',
      '2 dashes Angostura Bitters',
      'piece Lime (Garnish)'
    ],
    instructions: 'Build over ice in a highball glass. Garnish with the lime piece.'
  },
  {
    drink_name: 'Island Rose',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Tequila',
      '.75 ounce Kahlúa',
      '.5 ounce Chambord Raspberry Liqueur',
      '1.5 ounces Heavy Cream',
      'Rose Petal (Garnish)'
    ],
    instructions: 'Shake well with ice and serve straight up or over ice. Float the organic rose petal on the surface of the drink.'
  },
  {
    drink_name: 'Jacana',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounce Good Tequila',
      '.5 ounce Grand Marnier',
      '.5 ounce Triple Sec',
      '.75 ounce Lime Juice',
      '1 ounce Grapefruit Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Jack Rose',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Applejack',
      '1 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '2 dashes Grenadine',
      'slice Apple (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients and strain into a small cocktail glass. Garnish with the apple slice and a cherry.'
  },
  {
    drink_name: 'Jack Sparrow Flip',
    source: 'Death & Co',
    specs: [
      '2 ounces Flor De Caña 7-Year Rum',
      '.75 ounce Sandeman Rainwater Madeira',
      '.75 ounce Rich Demerara Syrup',
      '1 whole Egg',
      '2 dashes Fee Brothers Whiskey Barrel-Aged Bitters',
      'Cinnamon (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then add 3 ice cubes and shake again. Double strain into a fancy fizz glass. Garnish with a few grates of cinnamon.'
  },
  {
    drink_name: 'Jalisco Swizzle',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Siembra Azul Blanco Tequila',
      '.5 ounce Del Maguey Vida Mezcal',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '2 dashes Angostura Bitters',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then dump into a pilsner glass filled with crushed ice. Swizzle until cold. Garnish with the lime wheel and serve with a straw.'
  },
  {
    drink_name: 'Jane Rose',
    source: 'Death & Co',
    specs: [
      '1 ounce Laird\'s Bonded Apple Brandy',
      '.5 ounce Lemon Juice',
      '.5 ounce Toby\'s Lime Cordial',
      '.5 ounce Grenadine',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a coupe. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Japanese Cobbler',
    source: 'The Craft of the Cocktail',
    specs: [
      '2  wedges Pineapple',
      '2 slices Orange',
      '2 wedges Lemon',
      '.5 ounce Maraschino Liqueur',
      '3 ounces Sake',
      'Soda Water',
      'Sprig of Mint'
    ],
    instructions: 'In the bottom of a bar glass, muddle the skinless pineapple wedge, 1 piece of orange, and 1 piece of lemon with the maraschino liqueur. Add the sake and shake with ice. Strain into a double old-fashioned glass filled with crushed ice and top with a splash of sweet or dry soda. Garnish with a sprig of mint, the remaining pineapple wedge, an orange wedge, and a lemon wedge.'
  },
  {
    drink_name: 'Japanese Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Cognac',
      '.5 ounce Orgeat',
      '.5 ounce Lime Juice',
      'Dash Angostura Bitters',
      'Spiral of Lime Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail glass. Garnish with a spiral of lime peel.'
  },
  {
    drink_name: 'Japanese Courage',
    source: 'PDT',
    specs: [
      '6 oz. Kamoizumi "Shusen" Sake',
      '1 oz. Bols Genever',
      '.5 oz. Yellow Chartreuse',
      '.25 oz. Canton Ginger Liqueur',
      '.25 oz. Honey Syrup'
    ],
    instructions: 'Heat the sake in a bain-marie (do not boil). Pour the sake and everything else into a pre-heated heatproof mug. Garnish with a lemon wheel studded with 6 cloves.'
  },
  {
    drink_name: 'Japanese Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '2  wedges Pineapple',
      '2  wedges Lemon',
      '2  slices Orange',
      '.5 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '.75 ounce Ruby Port',
      '1.5 ounces Whiskey',
      'Soda Water'
    ],
    instructions: 'Muddle one piece each of the fruits in the bottom of the mixing glass with the syrup and lemon juice. Add the port and the whiskey, and shake well with ice. Strain into a highball glass filled with ice and top with soda. Garnish with the remaining fruit.'
  },
  {
    drink_name: 'Jarnac Shrub',
    source: 'Death & Co',
    specs: [
      '2 ounces Hine H Cognac',
      '1 ounce Carpano Antica Formula Vermouth',
      '1 ounce Toby\'s Sour Cherry Shrub',
      '1 dash House Orange Bitters',
      '3 skewered Brandied Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the cherries.'
  },
  {
    drink_name: 'Javanese Daiquiri',
    source: 'Death & Co',
    specs: [
      '1 ounce Van Oosten Batavia Arrack',
      '1 ounce Scarlet Ibis Rum',
      '1 ounce Toby\'s Lime Cordial',
      '3 fresh Curry Leaf',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a double rocks glass over cracked ice. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Jekyll And Hyde',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Eagle Rare 10-Year Bourbon',
      '.5 ounce Laird\'s Bonded Apple Brandy',
      '.5 teaspoon Cinnamon Bark Syrup',
      '1 teaspoon Rich Demerara Syrup',
      '2 dashes Bitter Truth Aromatic Bitters',
      '2 dashes Angostura Bitters',
      'Lemon Peel (Garnish)',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the lemon and orange twists.'
  },
  {
    drink_name: 'Jelly Roll Morton',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hine H Cognac',
      '.5 ounce Dried Currant-Infused Wild Turkey Rye Whiskey',
      '.75 ounce Sandeman Ruby Port',
      '.5 ounce Simple Syrup',
      '1 Egg Yolk',
      '.5 ounce Heavy Cream',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Jerry Thomas\'s Apple Toddy',
    source: 'The Craft of the Cocktail',
    specs: [
      'half a baked Apple',
      '1 tablespoon Fine White Sugar',
      '1 wine glass of Applejack',
      'Whole Nutmeg (Garnish)'
    ],
    instructions: 'Put the baked apple, sugar, and applejack in a glass or mug. Fill the glass two-thirds full of boiling water, and grate a little nutmeg on top. If there is a question whether the glass is tempered for extremes of hot and cold, place a silver spoon in the glass before adding the boiling water.'
  },
  {
    drink_name: 'Jesper Lind',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Beefeater London Dry Gin',
      '.75 ounce Lustau East India Solera Sherry',
      '.5 ounce Linie Aquavit',
      '1 teaspoon Vanilla Syrup',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Jillian\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '.75 ounce Flor De Caña Extra-Dry White Rum',
      '.75 ounce El Dorado 3-Year Rum',
      '.5 ounce Banks 5-Island White Rum',
      '1 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Jimmie Roosevelt',
    source: 'PDT',
    specs: [
      '1 oz. Rémy Martin V.S.O.P. Cognac',
      'Angostura Bitters',
      '1 cube Angostura Bitters-soaked Demerara Sugar',
      '2 oz. Möet Imperial Champagne',
      '1 barspoon Green Chartreuse'
    ],
    instructions: 'Stir the cognac with ice and strain into a chilled egg coupe filled with three cracked ice cubes. Add a sugar cube soaked with Angostura Bitters and top with 2 oz. Möet Imperial Champagne. Float the Green Chartreuse over the surface of the drink. No garnish.'
  },
  {
    drink_name: 'Jive Turkey',
    source: 'Death & Co',
    specs: [
      '.75 ounce Buffalo Trace Bourbon',
      '.5 ounce Rittenhouse 100 Rye Whiskey',
      '.5 ounce Old Overholt Rye Whiskey',
      '.75 ounce Amaro Ciociaro',
      '.75 ounce Dolin Dry Vermouth',
      '.25 ounce St-Germain',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Joaquín\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '1 ounce Appleton Estate V/X Rum',
      '1 ounce Scarlet Ibis Rum',
      '1 ounce Lime Juice',
      '.5 ounce Rich Demerara Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Johnny Apple Collins',
    source: 'PDT',
    specs: [
      '1.5 oz. Maker\'s Mark Bourbon Whiskey',
      '.75 oz. Schönauer Apple Schnapps',
      '.75 oz. Lemon Juice',
      '2 dashes Bitter Truth Jerry Thomas\' Own Decanter Bitters',
      '2 oz. Fever-Tree Bitter Lemon Soda'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Top with 2 oz. Fever-Tree Bitter Lemon Soda. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Joker\'s Wild',
    source: 'Death & Co',
    specs: [
      '.5 ounce La Diablada Pisco',
      '1.5 ounces Zoco Pacharán Navarro Liqueur',
      '2 dashes Vieux Pontarlier Absinthe',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '.25 ounce Vanilla Syrup',
      'Club Soda'
    ],
    instructions: 'Dry shake all the ingredients (except the club soda), then shake again with ice. Strain into a highball glass filled with ice cubes. Top with club soda and garnish with a spoonful of the foam left in the tin.'
  },
  {
    drink_name: 'Jovencourt Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Barbancourt White Rum',
      '.25 ounce Del Maguey Vida Mezcal',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Judgment Day',
    source: 'PDT',
    specs: [
      'Pernod Absinthe',
      '1.5 oz. Macchu Pisco',
      '.5 oz. St. Germain Elderflower Liqueur',
      '.5 oz. Lime Juice',
      '.5 oz. Lemon Juice',
      '.5 oz. Simple Syrup',
      '1 Egg White'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled, Pernod Absinthe-rinsed egg coupe. Garnish with 2 spritzes of St. Elizabeth Allspice Dram.'
  },
  {
    drink_name: 'Julien Sorel',
    source: 'Death & Co',
    specs: [
      '.5 ounce Courvoisier Cognac',
      '.5 ounce Green Chartreuse',
      '.5 ounce Luxardo Maraschino Liqueur',
      '.5 ounce Lemon Juice',
      'Dry Champagne',
      'Lemon Peel'
    ],
    instructions: 'Shake all the ingredients (except the champagne and lemon twist) with ice, then strain into a flute. Top with champagne. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Julius Orange',
    source: 'Death & Co',
    specs: [
      '2 ounces Pierre Ferrand Dry Curaçao',
      '.5 ounce Cruzan Single-Barrel Rum',
      '.5 ounce Lemon Juice',
      '1 teaspoon Vanilla Syrup',
      '.5 ounce Heavy Cream',
      '1 dash House Orange Bitters',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes. Strain into a double rocks glass filled with crushed ice. Garnish with a few grates of nutmeg and serve with a straw.'
  },
  {
    drink_name: 'Jump Shot',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces White Rum',
      '.5 ounce Curaçao',
      '1 ounce Pineapple Juice',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients well with ice; strain into four 1-ounce shot glasses.'
  },
  {
    drink_name: 'Junior',
    source: 'PDT',
    specs: [
      '2 oz. Rittenhouse Bonded Rye Whiskey',
      '.75 oz. Lime Juice',
      '.5 oz. Bénédictine',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Just Another Julep',
    source: 'Death & Co',
    specs: [
      '2 sprigs of Mint',
      '2 ounces Buffalo Trace Bourbon',
      '.25 ounce Rich Demerara Syrup',
      '.5 ounce Gosling\'s Black Seal Rum',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Rub the mint around the inside of a julep tin and discard. Fill the tin with crushed ice and add the bourbon and syrup. Swizzle briefly, then top with crushed ice. Pour the rum over the top. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Kamikazi',
    source: 'The Craft of the Cocktail',
    specs: [
      '2  pieces Lime',
      '2 ounces Vodka',
      '.5 ounce Cointreau',
      '.5 ounce Rose\'s Lime Juice'
    ],
    instructions: 'Squeeze the lime pieces into a mixing glass and drop them in. Add the remaining ingredients and ice. Shake well and serve in four 1-ounce shot glasses. Or serve as a cocktail in a chilled martini glass.'
  },
  {
    drink_name: 'Kansai Kick',
    source: 'PDT',
    specs: [
      '1.5 oz. Yamazaki 12-Year-Old Japanese Single Malt Whisky',
      '.75 oz. Blandy\'s Sercial Madeira',
      '.75 oz. Lime Juice',
      '.4 oz. Kassatly Chtaura Orgeat'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Kentucky Colonel',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Bourbon Whiskey',
      '1 ounce Bénédictine'
    ],
    instructions: 'Shake with ice; strain into a rocks glass filled with crushed ice.'
  },
  {
    drink_name: 'Kerala',
    source: 'Death & Co',
    specs: [
      '5 pods Cardamom',
      '1 ounce Scarlet Ibis Rum',
      '1 ounce Buffalo Trace Bourbon',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lemon Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters',
      '1 dash House Peychaud\'s Bitters'
    ],
    instructions: 'In a shaker, gently muddle the cardamom pods. Add the remaining ingredients and shake with ice. Double strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Kew Gardens Cooler',
    source: 'Death & Co',
    specs: [
      '2 thin wheels of Cucumber',
      '2 ounces Beefeater 24 Gin',
      '.5 ounce Aperol',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Scarlet Glow Syrup',
      'Ribbon of Cucumber (Garnish)'
    ],
    instructions: 'In a shaker, muddle the cucumber wheels. Add the remaining ingredients and short shake with 3 ice cubes, then strain into a highball glass filled with crushed ice. Garnish with the cucumber ribbon skewered on a cocktail pick and serve with a straw.'
  },
  {
    drink_name: 'Key Party',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce Bonal Gentiane-Quina',
      '.5 ounce Amaro Nardini',
      '.25 ounce Green Chartreuse'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Kin Kan',
    source: 'PDT',
    specs: [
      'St. Germain Elderflower Liqueur',
      '1.5 oz. Beefeater Gin',
      '1 oz. Kumquat Cordial',
      '.75 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled, St. Germain Elderflower Liqueur-rinsed coupe. No garnish.'
  },
  {
    drink_name: 'Kina Miele',
    source: 'PDT',
    specs: [
      '1 oz. Dolin Dry Vermouth',
      '.75 oz. Cocchi Americano',
      '.5 oz. Nonino Gioiello',
      '.25 oz. Clear Creek Pear Brandy',
      '1 dash The Bitter Truth Lemon Bitters'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'King Alfonse',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Dark Crème De Cacao',
      '1 ounce Heavy Cream'
    ],
    instructions: 'Layer in a pousse-café or cordial glass.'
  },
  {
    drink_name: 'King Bee',
    source: 'PDT',
    specs: [
      '1.5 oz. Barsol Quebranta Pisco',
      '.75 oz. Lemon Juice',
      '.5 oz. Bénédictine',
      '.5 oz. Bärenjäger Honey Liqueur',
      '.5 oz. Lustau Palo Cortado Sherry'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Float .5 oz. Lustau Palo Cortado Sherry over the surface of the drink. No garnish.'
  },
  {
    drink_name: 'Kingston Negroni',
    source: 'Death & Co',
    specs: [
      '1 ounce Smith & Cross Rum',
      '1 ounce Carpano Antica Formula Vermouth',
      '1 ounce Campari',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'Kir Royale',
    source: 'The Craft of the Cocktail',
    specs: [
      'Champagne',
      '.25 ounce Crème De Cassis',
      'Lemon Peel (Garnish) (Optional)'
    ],
    instructions: 'Pour the Cassis into the bottom of a champagne glass and fill with champagne. Garnish with the lemon peel, if using.'
  },
  {
    drink_name: 'Kir',
    source: 'The Craft of the Cocktail',
    specs: [
      '.25 ounce Crème De Cassis',
      'White Wine',
      'Lemon Peel (Garnish) (Optional)'
    ],
    instructions: 'Pour the Cassis into a white-wine glass and fill with white wine. Garnish with the lemon peel, if using.'
  },
  {
    drink_name: 'Knickerbein Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Curaçao',
      '.75 ounce Maraschino Liqueur',
      '.75 ounce VS Cognac',
      '1 ounce Egg',
      'Nutmeg (Garnish)',
      'Orange Zest (Garnish)'
    ],
    instructions: 'Add all the ingredients to a cocktail shaker glass with ice and shake very well to completely emulsify the egg. Serve in a frosted London dock glass and dust with the nutmeg and orange zest.'
  },
  {
    drink_name: 'Knickerbocker Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 dashes Orange Bitters',
      '1 dash Curaçao',
      '1 liqueur glass Dry French Vermouth',
      '2 liqueur glasses Gin',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Fill a mixing glass with ice; add the spirits, stir well, and strain into a chilled martini glass. Squeeze some lemon peel on top.'
  },
  {
    drink_name: 'Knickerbocker',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Appleton Rum',
      '.5 ounce Curaçao',
      '.5 ounce Raspberry Syrup',
      '.75 ounce Lemon Juice',
      '1  wedge Lemon'
    ],
    instructions: 'Assemble all the ingredients in a mixing glass with ice, squeeze the lemon wedge and drop it in, shake well, and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Koko B. Ware',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Appleton Estate V/X Rum',
      '.25 ounce La Favorite Rhum Agricole Ambre',
      '.5 ounce Lime Juice',
      '.5 ounce Orgeat',
      '1 teaspoon Vanilla Syrup',
      '.5 ounce Heavy Cream',
      '2 dashes Angostura Bitters',
      'pinch of grated Nutmeg (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a coconut mug filled with crushed ice. Garnish with a few grates of nutmeg and serve with a straw.'
  },
  {
    drink_name: 'Koyo',
    source: 'PDT',
    specs: [
      'St. Germain Elderflower Liqueur',
      '2 oz. Masumi Okuden Junmai Sake',
      '.5 oz. Dubonnet Rouge',
      '.25 oz. Cynar',
      '.25 oz. Yellow Chartreuse'
    ],
    instructions: 'Stir with ice and strain into a chilled, St. Germain Elderflower Liqueur-rinsed coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'L.E.S. Globetrotter',
    source: 'PDT',
    specs: [
      '1.25 oz. Wild Turkey Rye Whiskey',
      '.75 oz. Hine V.S.O.P. Cognac',
      '.75 oz. Bénédictine',
      '.5 oz. Rhum Clément Creole Shrub'
    ],
    instructions: 'Stir with ice and strain over an ice sphere into a chilled rocks glass. Garnish with an orange twist.'
  },
  {
    drink_name: 'La Bomba Daiquiri',
    source: 'Death & Co',
    specs: [
      '5 Raspberry',
      '2 ounces Barbancourt White Rum',
      '.75 ounce Lime Juice',
      '.5 ounce Simple Syrup',
      '1 teaspoon Pomegranate Molasses',
      'Wheel of Lime (Garnish)',
      'Flag with Raspberry (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the raspberries. Add the remaining ingredients and shake with ice. Double strain into a coupe. Garnish with the lime wheel and raspberry flag.'
  },
  {
    drink_name: 'La Conferencia',
    source: 'Death & Co',
    specs: [
      '.5 ounce El Tesoro Reposado Tequila',
      '.5 ounce Del Maguey Vida Mezcal',
      '.5 ounce La Favorite Rhum Agricole Blanc',
      '.5 ounce Santa Teresa Rum',
      '.25 ounce Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'La Dolce Vita',
    source: 'Death & Co',
    specs: [
      '2 ounces Chamomile-Infused Old Overholt Rye Whiskey',
      '.75 ounce Campari',
      '.5 ounce St-Germain'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'La Florida Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Banks 5 Island Rum',
      '.75 oz. Lime Juice',
      '.5 oz. Marie Brizard Crème De Cacao',
      '.25 oz. Martini Sweet Vermouth',
      '1 barspoon House Grenadine'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lime wheel.'
  },
  {
    drink_name: 'La Louche',
    source: 'PDT',
    specs: [
      '1.5 oz. Hendrick\'s Gin',
      '1 oz. Lillet Rouge',
      '.5 oz. Lime Juice',
      '.25 oz. Yellow Chartreuse',
      '.25 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'La Perla',
    source: 'PDT',
    specs: [
      '1.5 oz. Partida Reposado Tequila',
      '1.5 oz. Lustau Manzanilla Sherry',
      '.75 oz. Mathilde Pear Liqueur'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'La Rosita',
    source: 'Death & Co',
    specs: [
      '2 ounces El Tesoro Reposado Tequila',
      '.5 ounce Campari',
      '.5 ounce Cocchi Vermouth Di Torino',
      '.5 ounce Dolin Dry Vermouth',
      '1 dash Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'La Valentina',
    source: 'Death & Co',
    specs: [
      '3 Raspberry',
      '1.5 ounces Don Julio Blanco Tequila',
      '1 ounce Grapefruit Juice',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      'pinch of Kosher Salt',
      '1.5 ounces Blanche De Bruxelles Beer',
      '3 skewered Raspberry (Garnish)'
    ],
    instructions: 'THOMAS WAUGH, 2009 The 1930s-era Blinker cocktail turned me on to the combination of rye, grapefruit, and raspberries. I substituted tequila for the rye and lightened it up with wheat beer.\u0096TW'
  },
  {
    drink_name: 'La Viáa',
    source: 'Death & Co',
    specs: [
      '1 ounce Russell\'s Reserve Rye Whiskey',
      '1 ounce Amaro Nonino',
      '1 ounce Lustau East India Solera Sherry',
      '1 dash Regans\' Orange Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Lacrimosa',
    source: 'PDT',
    specs: [
      '2 oz. Rittenhouse Bonded Rye Whiskey',
      '.75 oz. Amaro Luxardo',
      '.75 oz. Amaro Ciociaro'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with a flamed orange twist.'
  },
  {
    drink_name: 'Lake George',
    source: 'PDT',
    specs: [
      '1 oz. Jameson Irish Whiskey',
      '1 oz. Glenlivet 12-Year-Old Single Malt Scotch Whisky',
      '.5 oz. Drambuie',
      '.5 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Last Train To Oaxaca',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Pueblo Viejo Añejo Tequila',
      '.5 ounce Los Amantes Joven Mezcal',
      '.75 ounce Lillet Blanc',
      '1 teaspoon Donn\'s Spices #2',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Last Word',
    source: 'Death & Co',
    specs: [
      '.75 ounce Beefeater London Dry Gin',
      '.75 ounce Green Chartreuse',
      '.75 ounce Luxardo Maraschino Liqueur',
      '.75 ounce Lime Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Latin Love',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Cruzan Coconut Rum',
      '1 ounce Cruzan Banana Rum',
      '3 ounces Pineapple Juice',
      '1 ounce Coco Lopez',
      '1 ounce Raspberry Juice',
      '1 ounce Heavy Cream',
      '1 scoop Ice'
    ],
    instructions: 'Combine all the ingredients. Blend to a smooth consistency. Rim a hurricane glass with grenadine and coconut shavings. Pour the mixture into the hurricane glass.'
  },
  {
    drink_name: 'Latin Quarter',
    source: 'Death & Co',
    specs: [
      'Vieux Pontarlier Absinthe',
      '2 ounces Zacapa 23-Year Rum',
      '1 teaspoon Rich Cane Sugar Syrup',
      '3 dashes House Peychaud\'s Bitters',
      '1 dash Angostura Bitters',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Lemon Peel'
    ],
    instructions: 'Rinse a double rocks glass with absinthe and dump. Stir the remaining ingredients (except the lemon twist) over ice, then strain into the glass. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Lawn Dart',
    source: 'PDT',
    specs: [
      '1 oz. Partida Blanco Tequila',
      '1 oz. Tanqueray Gin',
      '.75 oz. Lime Juice',
      '.75 oz. Agave Syrup',
      '.25 oz. Green Chartreuse',
      '1 5- inch slice Green Bell Pepper'
    ],
    instructions: 'Muddle the bell pepper and agave syrup. Add everything else, then shake with ice and finestrain into a chilled Collins glass filled with ice. Garnish with an umbrella and a lime wheel.'
  },
  {
    drink_name: 'Le Bateleur',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Punt E Mes',
      '.5 ounce Strega Liqueur',
      '.25 ounce Cynar',
      '1 dash Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Le Gigot Flip',
    source: 'Death & Co',
    specs: [
      '2 ounces Santa Teresa 1796 Rum',
      '.5 ounce Cherry Heering',
      '.25 ounce Rich Demerara Syrup',
      '1 Egg Yolk',
      '.5 ounce Heavy Cream',
      '2 dashes Bittermens Xocolatl Mole Bitters',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a coupe. Garnish with the cherry.'
  },
  {
    drink_name: 'Le Père Bis',
    source: 'PDT',
    specs: [
      '4 oz. Freshly Brewed Chamomile Tea',
      '1.5 oz. Ardbeg 10-Year-Old Single Malt Scotch Whisky',
      '.5 oz. St. Germain Elderflower Liqueur',
      '.5 oz. Honey Syrup'
    ],
    instructions: 'Add everything to a pre-heated heatproof mug and stir. Garnish with a lemon wedge studded with three cloves.'
  },
  {
    drink_name: 'Le Perroquet',
    source: 'The Craft of the Cocktail',
    specs: [
      'Generous dash Campari',
      'Dash Gin',
      '2 ounces Orange Juice',
      '4 ounces Champagne',
      'Twist of Lemon Peel (Garnish)',
      'Twist of Orange Peel (Garnish)'
    ],
    instructions: 'Pour the Campari, gin, and orange juice into a champagne flute. Top with Champagne. Garnish with the lemon and orange twists.'
  },
  {
    drink_name: 'Le Subtil',
    source: 'Death & Co',
    specs: [
      '2 ounces Bols Genever',
      '.5 ounce Cardamaro',
      '.5 ounce Carpano Antica Formula Vermouth',
      '2 dashes Bittermens Hopped Grapefruit Bitters',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Leapfrog',
    source: 'PDT',
    specs: [
      '2 oz. Plymouth Gin',
      '.75 oz. Lemon Juice',
      '.5 oz. Rothman & Winter Orchard Apricot Liqueur',
      '.25 oz. Simple Syrup',
      '2 dashes House Orange Bitters',
      '6 leaves Mint'
    ],
    instructions: 'Muddle the mint leaves with the simple syrup. Add everything else, then shake with ice and fine-strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Left Coast',
    source: 'PDT',
    specs: [
      '.75 oz. Clear Creek Plum Brandy',
      '.75 oz. Anchor Genevieve',
      '.5 oz. Luxardo Maraschino Liqueur',
      '.5 oz. Lemon Juice',
      '.5 oz. Pineapple Juice',
      '1 barspoon Rothman & Winter Crème De Violette'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Left Hand Cocktail',
    source: 'PDT',
    specs: [
      '1.5 oz. Elijah Craig 12-Year-Old Bourbon Whiskey',
      '.75 oz. Carpano Antica Sweet Vermouth',
      '.75 oz. Campari',
      '2 dashes Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with 3 brandied cherries on a pick.'
  },
  {
    drink_name: 'Legend',
    source: 'Death & Co',
    specs: [
      '1 ounce Pierre Ferrand 1840 Cognac',
      '.5 ounce Appleton Estate V/X Rum',
      '.75 ounce Lustau Amontillado Sherry',
      '.5 ounce Amaro Nonino',
      '.25 ounce Rich Demerara Syrup',
      '1 dash Bitter Truth Aromatic Bitters',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Lemon Drop',
    source: 'The Craft of the Cocktail',
    specs: [
      '.25 ounce Lemon Juice',
      '.5 ounce Cointreau',
      '2 ounce Citrus Vodka',
      'wheel of Lemon (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled martini glass with a sugared rim. Float a thin wheel of lemon on top of the drink. To serve as a shooter, use the recipe above and strain into three 1-ounce shot glasses. Cover the mouth of the shot glass with a wheel of lemon that has been dusted with sugar.'
  },
  {
    drink_name: 'Lemon Meringue',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Citrus Vodka',
      '.75 ounce Limoncello',
      '.5 ounce White Crème De Cacao'
    ],
    instructions: 'Shake the three ingredients well with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Leo Special',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '1 ounce Cointreau',
      '.75 ounce Lime Juice',
      'Dash Pernod',
      'Dash Green Crème De Menthe'
    ],
    instructions: 'Shake well with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Leprechaun\'s Delight',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Vodka',
      '.5 ounce White Crème De Cacao',
      '.25 ounce Green Crème De Menthe',
      'Green Maraschino Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients and strain into a martini glass. Garnish with the green cherry.'
  },
  {
    drink_name: 'Les Verts Monts',
    source: 'Death & Co',
    specs: [
      '1 ounce Tariquet VS Classique Bas-Armagnac',
      '.75 ounce Guillon-Painturaud Cognac Grande Champagne VSOP',
      '.75 ounce Busnel VSOP Calvados',
      '.75 ounce Dolin Blanc Vermouth',
      '.25 ounce Alvear Festival Pale Cream Sherry',
      '.25 ounce Maple Syrup',
      '1 dash Angostura Bitters',
      'Lemon Peel',
      'Slice of Fuji Apple (Garnish)'
    ],
    instructions: 'Stir all the ingredients (except the lemon twist) over ice, then strain into a Nick & Nora glass. Squeeze the lemon twist over the drink and discard. Garnish with the apple slice.'
  },
  {
    drink_name: 'Light And Day',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce Yellow Chartreuse',
      '.25 ounce Maraska Maraschino Liqueur',
      '.25 ounce Orange Juice',
      '4 dashes House Peychaud\'s Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Lily\'s Cartel',
    source: 'Death & Co',
    specs: [
      '1 ounce Macchu Pisco',
      '.75 ounce Aperol',
      '.75 ounce Blood Orange Juice',
      '.25 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Lilywhacker',
    source: 'Death & Co',
    specs: [
      '2 ounces Laird\'s Bonded Apple Brandy',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.5 ounce Cointreau',
      '1 dash Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Linbaba Daiquiri',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Scarlet Ibis Rum',
      '.5 ounce Appleton Estate V/X Rum',
      '.75 ounce Lime Juice',
      '.25 ounce Cinnamon Bark Syrup',
      '.25 ounce Orgeat',
      '.25 ounce Ginger Syrup',
      '2 fresh Curry Leaf',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Lion\'s Tooth',
    source: 'PDT',
    specs: [
      '2 oz. Dandelion Root-Infused Rittenhouse Bonded Rye Whiskey',
      '.75 oz. Lustau Palo Cortado Sherry',
      '.5 oz. Yellow Chartreuse',
      '.25 oz. St. Germain Elderflower Liqueur'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Little Birdy',
    source: 'Death & Co',
    specs: [
      '2 ounces Strawberry-And Pineapple-Infused Macchu Pisco',
      '.5 ounce St-Germain',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Lemon Juice',
      '1 teaspoon Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Little Bit Country',
    source: 'PDT',
    specs: [
      '2 oz. Bulleit Bourbon Whiskey',
      '.75 oz. Lemon Juice',
      '.5oz. Deep Mountain Grade B Maple Syrup',
      '.25 oz. Luxardo Maraschino Liqueur',
      '1.25-inch slice of Jalapeño With A Few Seeds',
      '1 dash Angostura Bitters',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Muddle the jalapeño with the maple syrup. Add everything else, then shake with ice and fine-strain into a chilled coupe. Garnish with a flamed orange twist.'
  },
  {
    drink_name: 'Little Engine',
    source: 'Death & Co',
    specs: [
      '2 ounces Famous Grouse Scotch Whisky',
      '.5 ounce Otima 10-Year Tawny Port',
      '.5 ounce Lemon Juice',
      '.5 ounce Maple Syrup',
      '1 teaspoon Apple Butter',
      'Fan of Apple (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then double strain into a double rocks glass filled with crushed ice. Garnish with the apple fan and serve with a straw.'
  },
  {
    drink_name: 'Little Miss Annabelle',
    source: 'Death & Co',
    specs: [
      '2 ounces Pierre Ferrand Ambre Cognac',
      '.25 ounce Mathilde Poire Pear Liqueur',
      '.25 ounce Bénédictine',
      '.75 ounce Lemon Juice',
      '.25 ounce Rich Cane Sugar Syrup',
      '1 dash House Peychaud\'s Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Little Sparrow',
    source: 'Death & Co',
    specs: [
      '2 ounces Busnel VSOP Calvados',
      '.25 ounce Laird\'s Bonded Apple Brandy',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.5 ounce St-Germain',
      '2 dashes House Peychaud\'s Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Live Free Or Die',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Eagle Rare 10-Year Bourbon',
      '.5 ounce Rothman & Winter Cherry Liqueur',
      '.5 ounce Ruby Port',
      '1 dash Vieux Pontarlier Absinthe',
      'Dry Champagne',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. Garnish with the orange twist.'
  },
  {
    drink_name: 'Lizzy Sour',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Alizé Gold Passion',
      '1.5 ounces Apricot Liqueur',
      '1 ounce Lemon Juice',
      'wheel of Lemon (Garnish)'
    ],
    instructions: 'Shake well with ice and strain into a martini glass. Garnish with the lemon wheel.'
  },
  {
    drink_name: 'London Iced Tea',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Gin',
      '.75 ounce Rum',
      '.5 ounce Amaretto',
      '.5 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '3-4 ounces Coca-Cola',
      'piece Lemon (Garnish)'
    ],
    instructions: 'Shake all ingredients except the Coca-Cola with ice and strain into an ice tea or collins glass three-quarters filled with ice. Top with 3 or 4 ounces of Coca-Cola and stir. Garnish with the lemon wedge.'
  },
  {
    drink_name: 'Long Island Iced Tea',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Vodka',
      '.5 ounce Gin',
      '.5 ounce Rum',
      '.5 ounce Tequila',
      '.5 ounce Triple Sec',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '3-4 ounces Coca-Cola',
      'wedge Lemon (Garnish)'
    ],
    instructions: 'Shake all ingredients except the Coca-Cola with ice and strain into an iced tea or collins glass three-quarters filled with ice. Top with 3 or 4 ounces of Coca-Cola and stir. Garnish with the lemon wedge.ith the lemon wedge.'
  },
  {
    drink_name: 'Los Amargos',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Centinela Reposado Tequila',
      '.75 ounce Amaro Nonino',
      '.75 ounce Cardamaro',
      '1 teaspoon Maraska Maraschino Liqueur',
      '.75 ounce Lemon Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Los Angeles Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bourbon Whiskey',
      '.25 ounce Sweet Vermouth',
      '1 ounce Simple Syrup',
      '1 ounce whipped whole Egg',
      '.5 ounce Lemon Juice',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Combine all the ingredients in a shaker with ice and shake extra well to emulsify the egg. Strain into a chilled port glass. Dust with the nutmeg.'
  },
  {
    drink_name: 'Luau',
    source: 'PDT',
    specs: [
      '.75 oz. Wray & Nephew Overproof Rum',
      '.75 oz. Appleton Estate V/X Rum',
      '.75 oz. El Dorado 15-Year-Old Rum',
      '.5 oz. Lime Juice',
      '.5 oz. Simple Syrup',
      '.25 oz. Boiron Passion Fruit Purée',
      '.25 oz. Kassatly Chtaura Orgeat',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled rocks glass filled with pebble ice. Top with more pebble ice and garnish with an umbrella, a lime wheel, an orange slice, and two large straws.'
  },
  {
    drink_name: 'Lucien Gaudin',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Tanqueray London Dry Gin',
      '.5 ounce Dolin Dry Vermouth',
      '.5 ounce Campari',
      '.5 ounce Cointreau',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Lucino\'s Delight',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Luxardo Maraschino Liqueur',
      '.25 ounce Amaro Lucano'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Lucky Double',
    source: 'The Craft of the Cocktail',
    specs: [
      'quartered half of Lemon',
      '.5 ounce Triple Sec',
      '2 ounces Absolut Mandrin Vodka'
    ],
    instructions: 'Drop the lemon quarters into a bar mixing glass. Add the Triple Sec and muddle well. Add the Mandrin and ice. Shake well and pour the entire contents of the mixing glass into a rocks glass. Serve.'
  },
  {
    drink_name: 'Lust For Life',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Galliano',
      '.5 ounce Marie Brizard Peach Liqueur',
      '1 ounce Orange Juice',
      '.5 ounce Heavy Cream',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Dust with the nutmeg.'
  },
  {
    drink_name: 'Lynchburg Lemonade (Dale\'s Version)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Jack Daniel\'s Tennessee Whiskey',
      '1 ounce Cointreau',
      '.75 ounce Lemon Juice',
      '7-Up',
      'wedge Lemon (Garnish)',
      'slice Orange (Garnish)'
    ],
    instructions: 'Shake the first three ingredients with ice and strain into an ice-filled highball glass. Top with 7-Up and garnish with the lemon wedge and orange slice.'
  },
  {
    drink_name: 'Macarena Mist',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Kahlúa',
      '.5 ounce Malibu Coconut Rum',
      '.5 ounce White Crème De Menthe',
      '1.5 ounces Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a rocks glass over crushed ice.'
  },
  {
    drink_name: 'Madison Avenue Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces White Rum',
      '.75 ounce Cointreau',
      '.5 ounce Lime Juice',
      'Dash Orange Bitters',
      '3 leaves of Mint',
      'Sprig of Mint (Garnish)',
      'slice Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients except the garnishes with ice and strain into a rocks glass filled with ice. Garnish with the mint sprig and lime slice.'
  },
  {
    drink_name: 'Madras',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '4 ounces Orange Juice',
      '1.5 ounces Cranberry Juice',
      'slice Orange (Garnish)'
    ],
    instructions: 'Build over ice in a highball glass, floating the cranberry juice on top. Garnish with the orange slice.'
  },
  {
    drink_name: 'Mae West Royal Diamond Fizz',
    source: 'PDT',
    specs: [
      '2 oz. Goji Berry-Infused Four Roses Single Barrel Bourbon Whiskey',
      '1 oz. Grapefruit Juice',
      '.5 oz. Pama Pomegranate Liqueur',
      '1 Whole Egg'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled egg coupe rimmed with sugar, cayenne, and cocoa powder. Garnish with three whiskey-soaked goji berries on a pick.'
  },
  {
    drink_name: 'Maggie Smith',
    source: 'Death & Co',
    specs: [
      '1 ounce Campo De Encanto Acholado Pisco',
      '1 ounce Banks 5-Island White Rum',
      '.5 ounce Santa Teresa Orange Liqueur',
      '.75 ounce Lime Juice',
      '.25 ounce Orgeat',
      '1 teaspoon Acacia Honey Syrup',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Mai-Tai',
    source: 'PDT',
    specs: [
      '1 oz. Banks 5 Island Rum',
      '1 oz. Rhum Clément V.S.O.P.',
      '1 oz. Lime Juice',
      '.5 oz. Marie Brizard Orange Curaçao',
      '.5 oz. Kassatly Chtaura Orgeat'
    ],
    instructions: 'Shake with ice and strain into a chilled rocks glass filled with pebble ice. Garnish with a mint sprig.'
  },
  {
    drink_name: 'Mai Tai',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Aged Rum',
      '.75 ounce Curaçao',
      '.75 ounce Lime Juice',
      '.25 ounce Orgeat',
      '2 sprigs Mint (Garnish)',
      'wedge Lime (Garnish)'
    ],
    instructions: 'Shake the ingredients well with ice and strain into an old- fashioned glass filled with ice. Garnish with the mint sprigs and wedge of lime.'
  },
  {
    drink_name: 'Mainland',
    source: 'Death & Co',
    specs: [
      '2 twists of Grapefruit Peel',
      '2 ounces Tanqueray No. Ten Gin',
      '.5 ounce Galliano L\'Autentico',
      '1 teaspoon Simple Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Squeeze the grapefruit twists over the mixing glass, then drop them in. Add the remaining ingredients and stir over ice. Strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Malibu Bay Breeze',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Malibu Coconut Rum',
      '4 ounces Pineapple Juice',
      '1.5 ounces Cranberry Juice',
      'wedge Lime (Garnish)',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Build in a highball glass and garnish with the lime wedge.'
  },
  {
    drink_name: 'Man O\' War',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Wild Turkey 101 Bourbon',
      '1 ounce Curaçao',
      '.5 ounce Sweet Vermouth',
      '.5 ounce Lemon Juice',
      'slice Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and serve on the rocks. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Mañanita',
    source: 'Death & Co',
    specs: [
      '1 ounce Sombra Mezcal',
      '1 ounce Coffee-And Chile-Infused Campari',
      '1 ounce House Sweet Vermouth',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: 'Mandrin Cherry Smash',
    source: 'The Craft of the Cocktail',
    specs: [
      'half a quartered Lemon',
      '.75 ounce Cherry Brandy',
      '1.5 ounces Absolut Mandrin Vodka'
    ],
    instructions: 'In the bottom of a mixing glass, muddle the lemon wedges and cherry brandy. Add the vodka and ice and shake well. Pour all the ingredients into a rocks glass.'
  },
  {
    drink_name: 'Manhattan Transfer',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Rittenhouse 100 Rye Whiskey',
      '1 ounce Dry Vermouth',
      '1 ounce Amaro Ramazzotti',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Manhattan',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Rye Whiskey',
      '1 ounce Sweet Italian Vermouth',
      '2 dashes Angostura Bitters',
      'Cherry (Garnish)'
    ],
    instructions: 'Pour all the ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Maple Julep',
    source: 'Death & Co',
    specs: [
      '2 ounces Old Overholt Rye Whiskey',
      '.25 ounce Maple Syrup',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Put the rye and maple syrup in a julep tin. Fill the tin halfway with crushed ice. Stir with a teaspoon, churning the ice as you go, for about 10 seconds, holding the tin by the rim so the entire tin can eventually frost up. Add more crushed ice to fill the tin two-thirds full and stir until the tin is completely frosted. Add more ice to form a cone above the rim. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Maragato',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Light Rum',
      '.5 ounce Sweet Vermouth',
      '.5 ounce Dry Vermouth',
      '1 ounce Orange Juice',
      '.5 ounce Lime Juice',
      'Dash Maraschino Liqueur',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all ingredients well with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Tequila',
      '1 ounce Cointreau',
      '.75 ounce Lime Juice',
      'Salt (Garnish)'
    ],
    instructions: 'Combine the ingredients in a mixing glass with ice. Shake well and strain into a chilled cocktail glass with a salted rim. Salting the rim: Rim the edge of the cocktail glass by rubbing a lime piece on the outside rim of the glass, then dipping the outside rim into a saucer of coarse salt.'
  },
  {
    drink_name: 'Mariner',
    source: 'PDT',
    specs: [
      '2 oz. Compass Box Oak Cross Blended Malt Scotch Whisky',
      '.5 oz. Black Cardamom Syrup',
      '.25 oz. Pineapple Juice',
      '.25 oz. Lemon Juice'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Mark Twain Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Scotch Whisky',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Marlene Dietrich',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Canadian Whiskey',
      '.5 ounce Curaçao',
      '3 dashes Angostura Bitters',
      '1 piece Lemon',
      '1 piece Orange'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a rocks glass filled with ice. Squeeze the lemon and orange.'
  },
  {
    drink_name: 'Martica',
    source: 'Death & Co',
    specs: [
      '1 ounce Hine H Cognac',
      '1 ounce Appleton Estate V/X Rum',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Luxardo Maraschino Liqueur',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Martinez Cocktail (Original)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 dash Bokers Bitters (substitute Angostura Bitters)',
      '2 dashes Maraschino Liqueur',
      '1 pony Old Tom Gin',
      '1 wineglass Sweet Italian Vermouth',
      'one quarter Lemon (Garnish)',
      'Gum Syrup (Optional)'
    ],
    instructions: 'Shake well and strain into a large cocktail glass. Put a quarter slice of lemon in the glass and serve.'
  },
  {
    drink_name: 'Martinez Cocktail (Updated)',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 dashes Angostura Bitters',
      '2 dashes Maraschino Liqueur',
      '1.5 ounces Gin',
      '1 ounce Dry Vermouth',
      'Lemon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the lemon piece.'
  },
  {
    drink_name: 'Martinez',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hayman\'s Old Tom Gin',
      '.5 ounce Ransom Old Tom Gin',
      '1 ounce House Sweet Vermouth',
      '.5 teaspoon Luxardo Maraschino Liqueur',
      '.5 teaspoon Massenez Kirsch Vieux Cherry Brandy',
      '1 dash House Orange Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Martini Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2-3 dashes (careful \u0096 not too much) Gum Syrup',
      '2-3 dashes Bokers Bitters (substitute Angostura Bitters)',
      '1 dash Curaçao (Optional)',
      '1 dash Absinthe (Optional)',
      'Half a wineglass Old Tom Gin',
      'Half a wineglass Sweet Italian Vermouth',
      'Cherry (Garnish) (Optional)',
      'medium-size Olive (Garnish) (Optional)',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Fill a large bar glass with ice. Add ingredients. Stir well with a spoon. Strain into a fancy cocktail glass; put in a cherry or medium-size olive (if required) and squeeze a lemon peel on top.'
  },
  {
    drink_name: 'Martini',
    source: 'Death & Co',
    specs: [
      '2.5 ounces Plymouth, Beefeater London Dry, Or Tanqueray London Dry Gin',
      '.75 ounce Dolin Dry Vermouth',
      '1 dash House Orange Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Mary Pickford',
    source: 'PDT',
    specs: [
      '2 oz. Banks 5 Island Rum',
      '.75 oz. Pineapple Juice',
      '.5 oz. Luxardo Maraschino Liqueur',
      '.25 oz. House Grenadine'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Masataka Swizzle',
    source: 'PDT',
    specs: [
      '1.5 oz. Nikka Taketsuru 12-Year-Old Japanese Malt Whisky',
      '.5 oz. Luxardo Amaretto',
      '.5 oz. Lemon Juice',
      '1 barspoon Demerara Syrup'
    ],
    instructions: 'Add everything to a chilled rocks glass, then fill with pebble ice. Swizzle, then top with more pebble ice. Garnish with 3 dashes Peychaud\'s Bitters and a mint sprig.'
  },
  {
    drink_name: 'Master Cleanse',
    source: 'PDT',
    specs: [
      '2 oz. Laird\'s Bonded Apple Brandy',
      '.75 oz. Lemon Juice',
      '.5 oz. Deep Mountain Grade B Maple Syrup',
      '2.25-inch slices Seeded Jalapeño',
      '20 drops Herb Pharm Goldenseal Tincture'
    ],
    instructions: 'Shake with ice and fine-strain into a chilled coupe. Garnish with a thin slice of jalapeño.'
  },
  {
    drink_name: 'May Daisy',
    source: 'PDT',
    specs: [
      '2 oz. Hine V.S.O.P. Cognac',
      '1 oz. Lemon Juice',
      '.75 oz. Green Chartreuse',
      '.75 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled white wine glass filled with ice. Garnish with a mint sprig.'
  },
  {
    drink_name: 'May Day',
    source: 'PDT',
    specs: [
      '.5 oz. Plymouth Gin',
      '.5 oz. Aperol',
      '.5 oz. Lemon Juice',
      '1 barspoon Simple Syrup',
      '3 dashes Fee Brothers Rhubarb Bitters',
      '2 oz. Moët Imperial Champagne'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Top with 2 oz. Moët Imperial Champagne. No garnish.'
  },
  {
    drink_name: 'May Fair',
    source: 'Death & Co',
    specs: [
      '1 ounce Tanqueray London Dry Gin',
      '.5 ounce Krogstad Aquavit',
      '.5 ounce Linie Aquavit',
      '1 ounce House Sweet Vermouth',
      '.25 ounce Bénédictine',
      '2 dashes Angostura Bitters',
      '2 dashes House Peychaud\'s Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the orange twist.'
  },
  {
    drink_name: 'Melancholy Summer',
    source: 'Death & Co',
    specs: [
      '2 wheels of Cucumber',
      '1 ounce Lustau Manzanilla Sherry',
      '1 ounce Fords Gin',
      '.5 ounce Suze Saveur D\'Autrefois Liqueur',
      '.75 ounce Cantaloupe Juice',
      '.5 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      'Ribbon of Cucumber (Garnish)'
    ],
    instructions: 'In a shaker, muddle the cucumber wheels. Add the remaining ingredients and shake with ice. Double strain into a Nick & Nora glass. Garnish with the cucumber ribbon on a cocktail pick.'
  },
  {
    drink_name: 'Melon Ball',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Midori',
      '.75 ounce Vodka',
      '5 ounces Orange Juice',
      'slice Orange (Garnish)',
      'slice Melon (Garnish)'
    ],
    instructions: 'Shake and strain into an ice-Illed highball glass. Garnish with the slice of orange and, if seasonal, a small slice of melon.'
  },
  {
    drink_name: 'Melon Daiquiri',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Sake',
      '.75 cup chopped Yellow And Honeydew Melon',
      '2 ounces Simple Syrup',
      '1 ounce Lime Juice',
      'balls of Melon (Garnish)'
    ],
    instructions: 'Blend all the ingredients with a handful of ice and serve in a large goblet. Garnish with melon balls.'
  },
  {
    drink_name: 'Melon Lime Daiquiri',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 cup chopped Yellow And Honeydew Melon',
      '1 ounce Brown Sugar Syrup',
      '1 ounce Maraschino Liqueur',
      '1 ounce Lime Juice',
      '2 ounces White Rum',
      'Sprigs of Mint (Garnish)'
    ],
    instructions: 'Muddle the melon, Brown Sugar Syrup, maraschino liqueur, and lime juice together in a container. Add the rum and ice. Shake and strain into a chilled martini glass. Garnish with the fresh mint.'
  },
  {
    drink_name: 'Melon Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 cup chopped Yellow And Honeydew Melon',
      '1 ounce Honey Syrup',
      '1 ounce Maraschino Liqueur',
      '1 ounce Lime Juice',
      '1.5 ounces Absolut Citron Vodka',
      'Sprigs of Mint (Garnish)'
    ],
    instructions: 'Muddle the melon, Honey Syrup, maraschino liqueur, and lime juice together in a container. Add the vodka and ice. Shake and strain into a chilled martini glass. Garnish with the fresh mint.'
  },
  {
    drink_name: 'Melon Stand',
    source: 'PDT',
    specs: [
      '2 oz. Plymouth Gin',
      '1 oz. Watermelon Juice',
      '.75 oz. Lemon Juice',
      '.5 oz. Aperol',
      '.5 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with pebble ice. Garnish with three watermelon balls on a pick.'
  },
  {
    drink_name: 'Meloncholy Baby',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Absolut Citron Vodka',
      '.75 ounce Lemon Juice',
      '2 ounces Simple Syrup',
      '.5 cup chopped Canteloupe',
      '3 ounces Water',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Blend all the ingredients with crushed ice and serve in a tall glass. Garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Meridian Daiquiri',
    source: 'Death & Co',
    specs: [
      '5 pods of Cardamom',
      '1.5 ounces Linie Aquavit',
      '.5 ounce Scarlet Ibis Rum',
      '.75 ounce Pineapple Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Ginger Syrup',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the cardamom pods. Add the remaining ingredients and shake with ice. Strain into a double rocks glass over 1 large ice cube. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Merry Widow',
    source: 'The Craft of the Cocktail',
    specs: [
      'Dash Absinthe',
      '2 ounces Gin',
      '.5 ounce Dry Vermouth',
      'Dash Angostura Bitters',
      'Dash Bénédictine',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Season a chilled martini glass with the absinthe and set it aside. Stir the remaining ingredients with ice in a bar glass and strain into the chilled martini glass. Garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Metropolitan',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Absolut Kurant Vodka',
      '1.5 ounces Cranberry Juice',
      '.5 ounce Rose\'s Lime Juice',
      '.125 ounce Lime Juice',
      'Lime (Garnish)'
    ],
    instructions: 'Shake with ice and pour into a chilled martini glass. Garnish with a lime wedge.'
  },
  {
    drink_name: 'Mexi-Gin Martini',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce Dolin Dry Vermouth',
      '.25 ounce Del Maguey Crema De Mezcal',
      '.25 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.25 ounce Green Chartreuse',
      '1 dash Bitter Truth Celery Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Mexican Blonde',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Light Rum',
      '.5 ounce Kahlúa',
      '.5 ounce Curaçao',
      '1 ounce Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Mexican Firing Squad',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Tapatio 110 Blanco Tequila',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '.25 ounce Grenadine',
      '2 dashes Bittermens Hellfire Habanero Shrub',
      'Wheel of Lime (Garnish)',
      'Flag with Cherry (Garnish)'
    ],
    instructions: 'Fill a highball glass with cracked ice. Short shake all the ingredients with 3 ice cubes, then strain into the glass. Garnish with the lime wheel and cherry flag and serve with a straw.'
  },
  {
    drink_name: 'Mexicano',
    source: 'PDT',
    specs: [
      '1.5 oz. Partida Reposado Tequila',
      '.75 oz. Gran Classico Bitter',
      '3.25- inch slices Cucumber',
      '2 oz. Moët Imperial Champagne'
    ],
    instructions: 'Muddle the cucumber slices in a mixing glass. Add spirits and ice, then stir and fine-strain into a chilled coupe. Top with 2 oz. Moët Imperial Champagne. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Mezcal Mule',
    source: 'PDT',
    specs: [
      '1.5 oz. Sombra Mezcal',
      '1 oz. House Ginger Beer',
      '.75 oz. Lime Juice',
      '.75 oz. Boiron Passion Fruit Purée',
      '.5 oz. Agave Syrup',
      '3 slices of Cucumber',
      '1 slice of Cucumber (Garnish)'
    ],
    instructions: 'Add the agave syrup and cucumber slices to a mixing glass and muddle. Add everything else, then shake with ice and strain into a chilled rocks glass filled with ice. Garnish with a piece of candied ginger, a slice of cucumber, and a pinch of ground chili.'
  },
  {
    drink_name: 'Mi Amaro',
    source: 'Death & Co',
    specs: [
      '2 ounces El Tesoro Reposado Tequila',
      '.5 ounce Amaro Ciociaro',
      '.5 ounce Carpano Antica Formula Vermouth',
      '.25 ounce St-Germain',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Miami Iced Tea',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Vodka',
      '.5 ounce Gin',
      '.5 ounce Rum',
      '.5 ounce Peach Schnapps',
      '1 ounce Cranberry Juice',
      '7-Up',
      'wedge Lemon (Garnish)'
    ],
    instructions: 'Build over ice in a tall glass. Fill with 7-Up. Garnish with the lemon wedge.'
  },
  {
    drink_name: 'Michelada',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Lime Juice',
      '3 dashes Tabasco Sauce',
      '.25 ounce Soy Sauce',
      '2 dashes Worcestershire Sauce',
      'Pinch Black Pepper',
      '1 ounce Maggi Seasoning (Optional)',
      '1 ounce Habanero Sauce (Optional)',
      'One 12-ounce Beer'
    ],
    instructions: 'Mix the first six ingredients in the bottom of a beer glass. Fill the glass with ice and add your favorite beer.'
  },
  {
    drink_name: 'Midnight Express',
    source: 'PDT',
    specs: [
      '3 oz. Freshly Brewed Coffee',
      '1.5 oz. Walnut-Infused Hine V.S.O.P. Cognac',
      '.25 oz. Luxardo Amaretto',
      '.25 oz. Simple Syrup'
    ],
    instructions: 'Build in a pre-heated heatproof mug. Garnish with freshly whipped cream and grated nutmeg.'
  },
  {
    drink_name: 'Midnight Mass',
    source: 'Death & Co',
    specs: [
      '2 ounces Scarlet Ibis Rum',
      '.75 ounce Cardamaro',
      '.25 ounce Bénédictine',
      '1 dash Bitter Truth Jerry Thomas\' Own Decanter Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Midnight Mountain',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Amaro Nardini',
      '1 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Marie Brizard White Crème De Menthe',
      '.25 ounce Marie Brizard White Crème De Cacao',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the twist.'
  },
  {
    drink_name: 'Mig Royale',
    source: 'Death & Co',
    specs: [
      '1 ounce Plymouth Gin',
      '.75 ounce Cointreau',
      '.5 ounce Luxardo Maraschino Liqueur',
      '.5 ounce Lemon Juice',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a coupe. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Milk Punch',
    source: 'PDT',
    specs: [
      '1.5 oz. Whole Milk',
      '1 oz. Pierre Ferrand Ambre Cognac',
      '1 oz. Myers\'s Dark Rum',
      '.75 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled rocks glass filled with one large cube. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Millennium Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Courvoisier Millennium Cognac',
      '1.5 ounces Pineapple Juice',
      '1 ounce Curaçao',
      '1 dash Angostura Bitters',
      'Flamed Orange Peel (Garnish)',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange twist and dust with the nutmeg.'
  },
  {
    drink_name: 'Million-Dollar Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Sweet Vermouth',
      '.5 ounce Pineapple Juice',
      '.5 small Egg White',
      '2 dashes Grenadine'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a martini glass.'
  },
  {
    drink_name: 'Mimosa',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Orange Juice',
      '4 ounces Champagne'
    ],
    instructions: 'Pour the orange juice into a champagne glass and Ill with the Champagne.'
  },
  {
    drink_name: 'Mint Apple Crisp',
    source: 'PDT',
    specs: [
      '2 oz. Heart Of The Hudson Apple Vodka',
      '1 oz. Masumi Arabishiri Sake',
      '.25 oz. Simple Syrup',
      '3.25 inch slices Granny Smith Apple',
      '2 Leaves Mint'
    ],
    instructions: 'Muddle the apple slices, mint leaves, and simple syrup. Add everything else and ice. Stir and fine-strain into a chilled coupe. Garnish with three honeydew melon balls on a pick.'
  },
  {
    drink_name: 'Mint Julep',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 tender sprigs of Mint',
      '.5 ounce Simple Syrup',
      '2 ounces Bourbon Whiskey'
    ],
    instructions: 'In the bottom of a highball glass or a silver julep cup, muddle one sprig of mint with the sugar syrup. Fill with crushed ice and add the bourbon. Swirl with a bar spoon until the outside of the glass frosts. Top up with more ice and garnish with the remaining sprig of mint.'
  },
  {
    drink_name: 'Miss Behavin\'',
    source: 'Death & Co',
    specs: [
      '.75 ounce Clear Creek Pear Brandy',
      '.75 ounce Laird\'s Bonded Apple Brandy',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      'Dry Champagne',
      'Slice of Anjou Pear (Garnish)'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a flute. Top with champagne. Garnish with the Anjou pear slice.'
  },
  {
    drink_name: 'Mojito',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 tender sprigs of Mint',
      '1 ounce Simple Syrup',
      '.75 ounce Lime Juice',
      '1.5 ounces Light Rum',
      '2 dashes Angostura Bitters (Optional)',
      'Soda Water'
    ],
    instructions: 'Muddle one mint sprig with the Simple Syrup and the lime juice in the bottom of a mixing glass. Add the rest of the ingredients and shake with ice. Strain over cracked ice into a highball glass, top with soda, and garnish with the remaining sprig of mint.'
  },
  {
    drink_name: 'Monkey Gland',
    source: 'The Craft of the Cocktail',
    specs: [
      'splash of Ricard',
      '2 ounces Beefeater Gin',
      '1.5 ounces Orange Juice',
      '1 teaspoon Grenadine',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Splash the Ricard in a mixing glass and follow with the rest of the ingredients. Shake with ice and strain into a small cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Monongahela Mule',
    source: 'Death & Co',
    specs: [
      '4 Raspberry',
      '6 leaves of Mint',
      '2 ounces Old Overholt Rye Whiskey',
      '.75 ounce Lemon Juice',
      '.5 ounce Ginger Syrup',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the raspberries and mint. Add the remaining ingredients and shake with ice. Double strain into a highball glass filled with ice cubes. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Montgomery Smith',
    source: 'PDT',
    specs: [
      '2 oz. Hine V.S.O.P. Cognac',
      '.5 oz. Bénédictine',
      '.25 oz. Fernet Branca'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Moon Cocktail',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.75 ounce Lustau Amontillado Sherry',
      '1 teaspoon Massenez Crème De Pêche Peach Liqueur',
      '.25 ounce Acacia Honey Syrup',
      'Lemon Peel'
    ],
    instructions: 'Stir all the ingredients (except the lemon twist) over ice, then strain into a coupe. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Morango Fizz',
    source: 'PDT',
    specs: [
      '2 oz. Strawberry-Infused Mãe De Ouro Cachaça',
      '.75 oz. Lemon Juice',
      '.75 oz. Simple Syrup',
      '1 Egg White',
      '1 oz. Club Soda'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled fizz glass. Top with 1 oz. club soda. No garnish.'
  },
  {
    drink_name: 'Morfeo',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Chamomile-Infused Old Overholt Rye Whiskey',
      '.25 ounce Galliano L\'Autentico',
      '.75 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Morning Buzz',
    source: 'Death & Co',
    specs: [
      '1 ounce Hine H Cognac',
      '.75 ounce Zacapa 23-Year Rum',
      '.5 ounce Lustau Amontillado Sherry',
      '.25 ounce Orgeat',
      '.25 ounce Acacia Honey Syrup',
      '.75 ounce Honey Nut Cheerio-Infused Cream',
      '1 Egg Yolk'
    ],
    instructions: 'Dry shake all the ingredients, then shake with ice. Double strain into a fancy fizz glass. No garnish.'
  },
  {
    drink_name: 'Mortal Enemy',
    source: 'Death & Co',
    specs: [
      '.75 ounce Dorothy Parker Gin',
      '.75 ounce Marie Brizard White Crème De Cacao',
      '.75 ounce American Fruits Black Currant Cordial',
      '1 dash Vieux Pontarlier Absinthe',
      '.75 ounce Lime Juice',
      '.25 ounce Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a Nick & Nora glass. No garnish.'
  },
  {
    drink_name: 'Moscow Mule',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '4-5 ounces Ginger Beer',
      'wedge Lime (Garnish)'
    ],
    instructions: 'Combine the vodka and ginger beer in an iced glass. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Mosquito Coast',
    source: 'Death & Co',
    specs: [
      '2 ounces Scarlet Ibis Rum',
      '.25 ounce St. Elizabeth Allspice Dram',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Mount Vernon',
    source: 'PDT',
    specs: [
      '1 oz. Clear Creek Kirschwasser',
      '1 oz. Gran Duque D\'Alba Brandy De Jerez',
      '.75 oz. Grapefruit Juice',
      '.5 oz. Lustau Pedro Ximénez Sherry',
      '.5 oz. Cherry Heering'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with three brandied cherries on a pick.'
  },
  {
    drink_name: 'Mrs. Doyle',
    source: 'Death & Co',
    specs: [
      '2 ounces Redbreast 12-Year Irish Whiskey',
      '.25 ounce Kronan Swedish Punsch',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Mucho Picchu',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Macchu Pisco',
      '.25 ounce Luxardo Maraschino Liqueur',
      '.5 ounce Grapefruit Juice',
      '.5 ounce Simple Syrup',
      'Dry Champagne',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne and garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Mud And Blood',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Carrot Juice',
      '2 ounces Beef Broth',
      '2 ounces Orange Juice',
      'dash Tabasco Sauce',
      'dash Worcestershire Sauce',
      '2 ounces Pepper Vodka'
    ],
    instructions: 'Shake with ice and strain into a glass.'
  },
  {
    drink_name: 'Mud Slide',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Vodka',
      '1 ounce Kahlúa',
      '1 ounce Baileys Irish Cream',
      '1 ounce Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and serve over ice in a rocks glass. The Mud Slide can also be served as a frozen drink. Blend the four ingredients with three-quarters cup of ice and serve in a large goblet.'
  },
  {
    drink_name: 'Muddled Mission',
    source: 'Death & Co',
    specs: [
      '1 Strawberry',
      '1.5 ounces Anchor Junipero Gin',
      '1 ounce St-Germain',
      '.25 ounce Yellow Chartreuse',
      '.75 ounce Lemon Juice',
      'Strawberry (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the strawberry. Add the remaining ingredients and shake with ice. Strain into a coupe. Garnish with the strawberry.'
  },
  {
    drink_name: 'Mudslide Flip',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Redbreast 12-Year Irish Whiskey',
      '1 ounce Coffee-Infused Carpano Antica Formula Vermouth',
      '.25 ounce Rich Demerara Syrup',
      '1 Egg Yolk',
      '.5 ounce Heavy Cream',
      '1 dash Angostura Bitters',
      'Dark Chocolate (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Coarsely grate some dark chocolate over the drink and serve with a straw.'
  },
  {
    drink_name: 'Mum\'s Apple Pie',
    source: 'PDT',
    specs: [
      '1.5 oz. Havana Club 7-Year-Old Rum',
      '1 oz. Red Jacket Orchard Apple Cider',
      '.75 oz. Lemon Juice',
      '.5 oz. Demerara Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with pebble ice. Garnish with an apple slice sprinkled with grated cinnamon and nutmeg.'
  },
  {
    drink_name: 'Myra Breckinridge',
    source: 'Death & Co',
    specs: [
      '2 ounces Laphroaig 10-Year Scotch Whisky',
      '2 dashes Vieux Pontarlier Absinthe',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then dump into a pilsner glass filled with crushed ice. Swizzle until cold. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Naked And Famous',
    source: 'Death & Co',
    specs: [
      '.75 ounce Del Maguey Chichicapa Mezcal',
      '.75 ounce Yellow Chartreuse',
      '.75 ounce Aperol',
      '.75 ounce Lime Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Navigator',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Apricot-Infused Famous Grouse Scotch Whisky',
      '.75 ounce Blandy\'s 5-Year Malmsey Madeira',
      '.5 teaspoon Rich Demerara Syrup',
      '.5 teaspoon Vanilla Syrup',
      '1 dash House Peychaud\'s Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Navy Grog',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Dusser\'s Navy Rum',
      '1 ounce Curaçao',
      '.75 ounce Lime Juice',
      '2 ounces Water',
      '2 ounces Orange Juice',
      'Dash Angostura Bitters'
    ],
    instructions: 'Shake well with ice and serve in a bucket or double old- fashioned glass.'
  },
  {
    drink_name: 'Negrita',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Pisco',
      '.5 ounce Coffee Liqueur',
      '.5 ounce Cold Espresso'
    ],
    instructions: 'Combine all the ingredients in a shot glass.'
  },
  {
    drink_name: 'Negroni',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Campari',
      '1 ounce Sweet Vermouth',
      '1 ounce Gin',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Combine all the ingredients in an iced old-fashioned glass and stir. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'New Amsterdam',
    source: 'PDT',
    specs: [
      '2 oz. Bols Genever',
      '1 oz. Clear Creek Kirschwasser',
      '1 barspoon Demerara Syrup',
      '2 dashes Peychaud\'s Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'New Orleans Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Bourbon Whiskey',
      '3 dashes Peychaud\'s Bitters',
      '2 dashes Curaçao',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice as you would a Martini and strain into a chilled martini glass. Garnish with the flamed lemon peel. Shake and strain over ice in a rocks glass.'
  },
  {
    drink_name: 'New York Flip',
    source: 'PDT',
    specs: [
      '1 oz. Elijah Craig 12-Year-Old Bourbon Whiskey',
      '5 oz. Heavy Cream',
      '.25 oz. Simple Syrup',
      '1 Egg Yolk',
      '.75 oz. Noval Black Port'
    ],
    instructions: 'Dry-shake, shake with ice, and strain into a chilled coupe. Top with .75 oz. Noval Black Port. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Newark',
    source: 'PDT',
    specs: [
      '2 oz. Laird\'s Bonded Apple Brandy',
      '1 oz. Vya Sweet Vermouth',
      '.25 oz. Fernet Branca',
      '.25 oz. Maraska Maraschino Liqueur'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Newfangled',
    source: 'PDT',
    specs: [
      '2 oz. Old Grand-Dad Bonded Bourbon Whiskey',
      '.25 oz. Simple Syrup',
      '2 dashes Angostura Bitters',
      'half a Wheel of Orange',
      '3 Brandied Cherry',
      '2 oz. Southampton Double White Ale'
    ],
    instructions: 'Muddle the orange and cherries. Add everything else, then shake with ice and fine-strain into a chilled coupe. Top with 2 oz. Southampton Double White Ale. No garnish.'
  },
  {
    drink_name: 'Nick And Nora Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Dry Vermouth',
      'Olive (Garnish)'
    ],
    instructions: 'Fill a mixing glass with ice, add spirit, and stir well. Strain into a chilled martini glass and garnish with an olive.'
  },
  {
    drink_name: 'Night Owl',
    source: 'Death & Co',
    specs: [
      '2 ounces Pierre Ferrand Ambre Cognac',
      '.5 ounce Punt E Mes',
      '.5 ounce Lustau East India Solera Sherry',
      '.25 ounce Van Oosten Batavia Arrack'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Night Watch',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Ransom Old Tom Gin',
      '.5 ounce Cruzan Black Strap Rum',
      '.75 ounce Lustau East India Solera Sherry',
      '1 teaspoon Simple Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir All The Ingredients Over Ice, Then Strain Into A Coupe. No Garnish.'
  },
  {
    drink_name: 'Nigori Milk Punch',
    source: 'PDT',
    specs: [
      '2 oz. Kamoizumi Nigori Sake',
      '1 oz. Hine V.S.O.P. Cognac',
      '.5 oz. Navan Vanilla Liqueur',
      '3 dashes Feldman\'s BarreleAged Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Nitty-Gritty',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Del Maguey Espadin Especial Mezcal',
      '1.5 ounces La Cigarrera Manzanilla Sherry',
      '.5 ounce Bénédictine',
      '.5 teaspoon Rothman & Winter Pear Liqueur',
      '.5 teaspoon Agave Nectar',
      '1 dash Bar Code Baked Apple Bitters',
      '1 dash Bitter Truth Aromatic Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Noce Royale',
    source: 'PDT',
    specs: [
      '1.5 oz. Beefeater Gin',
      '.5 oz. Plymouth Sloe Gin',
      '.25 oz. Monteverdi Nocino Walnut Liqueur',
      '2 oz. Moët Imperial Champagne'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Top with 2 oz. Moët Imperial Champagne. No garnish.'
  },
  {
    drink_name: 'Norman Inversion',
    source: 'PDT',
    specs: [
      '1 oz. Aviation Gin',
      '.5 oz. Schönauer Apple Schnapps',
      '.25 oz. Grapefruit Juice',
      '.25 oz. Simple Syrup',
      '1 dash Regan\'s Orange Bitters',
      '2 oz. Dupont Brut Sparkling Cider'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Top with 2 oz. Dupont Brut Sparkling Cider. No garnish.'
  },
  {
    drink_name: 'North By Northwest',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Aviation Gin',
      '.25 ounce St. George Absinthe',
      '.75 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      'Dry Champagne'
    ],
    instructions: 'Shake all the ingredients (except the champagne) with ice, then strain into a flute. Top with champagne. No garnish.'
  },
  {
    drink_name: 'North Garden',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Laird\'s Bonded Apple Brandy',
      '.75 ounce Buffalo Trace Bourbon',
      '.25 ounce Laphroaig 10-Year Scotch Whisky',
      '1 teaspoon Rich Demerara Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Not-Quite-Georgia Julep',
    source: 'Death & Co',
    specs: [
      '1 ounce Cognac',
      '1 ounce Laird\'s Bonded Apple Brandy',
      '1 teaspoon Massenez Crème De Pêche Peach Liqueur',
      '1 teaspoon Simple Syrup',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Put all the ingredients in a julep tin. Fill the tin halfway with crushed ice. Stir with a teaspoon, churning the ice as you go, for about 10 seconds, holding the tin by the rim so the entire tin can eventually frost up. Add more crushed ice to fill the tin two-thirds full and stir until the tin is completely frosted. Add more ice to form a cone above the rim. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Nouveau Carré',
    source: 'PDT',
    specs: [
      '1.5 oz. Ocho Añejo Tequila',
      '.75 oz. Lillet Blanc',
      '.25 oz. Bénédictine',
      '3 dashes Peychaud\'s Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Nouveau Sangaree',
    source: 'PDT',
    specs: [
      '2 oz. Beaujolais Nouveau',
      '1.5 oz. Laird\'s Bonded Apple Brandy',
      '.5 oz. Plymouth Sloe Gin',
      '.25 oz. Deep Mountain Grade B Maple Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an apple fan and grated cinnamon.'
  },
  {
    drink_name: 'Noval Cup',
    source: 'PDT',
    specs: [
      '2 oz. Noval Black Port',
      '.5 oz. Lemon Juice',
      '.5 oz. Simple Syrup',
      '1 Strawberry',
      '2 oz. Club Soda'
    ],
    instructions: 'Muddle the strawberry with the simple syrup. Add everything else, then shake with ice and finestrain into a chilled Collins glass filled with ice. Top with 2 oz. Club Soda. Garnish with a cucumber wheel.'
  },
  {
    drink_name: 'Nth Degree',
    source: 'PDT',
    specs: [
      '1 oz. Rhum Clément V.S.O.P.',
      '1 oz. Laird\'s Bonded Apple Brandy',
      '.5 oz. Green Chartreuse',
      '1 Cube Demerara Sugar',
      '2 dashes Fee Brothers Whiskey Barrel-Aged Bitters'
    ],
    instructions: 'Muddle the sugar cube and bitters. Add everything else, then stir with ice and strain over one large cube into a chilled rocks glass. Garnish with an orange and lemon twist.'
  },
  {
    drink_name: 'Oaxaca Old-Fashioned',
    source: 'Death & Co',
    specs: [
      '1.5 ounces El Tesoro Reposado Tequila',
      '.5 ounce Del Maguey San Luis Del Rio Mezcal',
      '1 teaspoon Agave Nectar',
      '2 dashes Angostura Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. To garnish, flame the orange twist over the drink, then drop it in.'
  },
  {
    drink_name: 'Occidental',
    source: 'PDT',
    specs: [
      'Fernet-Branca',
      '2 oz. Linie Aquavit',
      '.75 oz. Grand Marnier',
      '.5 oz. Amaro Nonino'
    ],
    instructions: 'Stir with ice and strain into a chilled, Fernet Branca-rinsed coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Old-Fashioned',
    source: 'Death & Co',
    specs: [
      '2 ounces Eagle Rare 10-Year Bourbon',
      '1 teaspoon Rich Demerara Syrup',
      '2 dashes Angostura Bitters',
      '1 dash Bitter Truth Aromatic Bitters',
      'Orange Peel (Garnish)',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the orange and lemon twists.'
  },
  {
    drink_name: 'Old-Fashioned Whiskey Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Wild Turkey Rye Whiskey',
      '1 Cube Demerara Sugar',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Muddle, stir with ice, and strain over one large cube into a chilled rocks glass. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Old Fashioned',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 teaspoon Sugar',
      '2 dashes Angostura Bitters',
      '2 slices Orange',
      '2 Maraschino Cherry',
      'Water Or Soda Water',
      '2 ounces Bourbon Whiskey'
    ],
    instructions: 'In the bottom of an old-fashioned glass, carefully muddle the sugar, Angostura, one orange slice, one cherry, and a splash of water or soda. Remove the orange rind and add the bourbon, ice, and water or soda. Garnish with the remaining orange slice and cherry.'
  },
  {
    drink_name: 'Old Flame',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Bombay Gin',
      '.5 ounce Martini & Rossi Sweet Vermouth',
      '.25 ounce Campari',
      '.5 ounce Cointreau',
      '1.5 ounces Orange Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well to chill and strain into a chilled 5.5- to 6-ounce martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Old Ironsides',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Scarlet Ibis Rum',
      '.5 ounce Cruzan Black Strap Rum',
      '1 ounce Dolin Rouge Vermouth',
      '1 teaspoon Lazzaroni Amaretto',
      '1 dash Fee Brothers Whiskey Barrel-Aged Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Old Maid',
    source: 'PDT',
    specs: [
      '2 oz. Plymouth Gin',
      '1 oz. Lime Juice',
      '.75 oz. Simple Syrup',
      '6 leaves Mint',
      '3 slices Cucumber',
      '1 sprig Mint (Garnish)',
      '1 slice of Cucumber (Garnish)'
    ],
    instructions: 'Muddle the cucumber and mint with simple syrup. Add everything else, then shake with ice and finestrain over one large cube into a chilled rocks glass. Garnish with a mint sprig poked through a slice of cucumber.'
  },
  {
    drink_name: 'Old Pal',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Rittenhouse 100 Rye Whiskey',
      '.75 ounce Campari',
      '.75 ounce Dolin Dry Vermouth',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'One, One, One',
    source: 'Death & Co',
    specs: [
      '1 ounce Krogstad Aquavit',
      '1 ounce Beefeater London Dry Gin',
      '1 ounce Dolin Blanc Vermouth',
      '1 dash Regans\' Orange Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'OP Smash',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 halved pieces of Lemon',
      '.75 ounce Simple Syrup',
      '.25 ounce Maraschino Liqueur',
      '1.5 ounces OP Flavored Vodka'
    ],
    instructions: 'Place the lemon pieces in the bottom of a mixing glass along with the simple syrup and maraschino liqueur; muddle well. Fill a rocks glass with ice, and add that ice to the mixing glass along with the vodka. Shake well for 10 seconds, and then pour the entire contents of mixing glass back into the rocks glass, lemon pieces and all. Top with additional cracked ice.'
  },
  {
    drink_name: 'Opera Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Plymouth Gin',
      '1 oz. Dubonnet Rouge',
      '.25 oz. Mandarine Napoléon Liqueur',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Orange Blossom',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '1.5 ounces Orange Juice',
      '.5 ounce Cointreau',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Orange Breeze',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Stolichnaya Ohranj Vodka',
      '1.5 ounces Cointreau',
      '3 ounces Orange Juice',
      '3 ounces Cranberry Juice',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Build in a large goblet with ice and stir. Garnish with an orange slice.'
  },
  {
    drink_name: 'Orgasm',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Amaretto',
      '1 ounce Kahlúa',
      '1 ounce Baileys Irish Cream',
      '1 ounce Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and serve over ice in a rocks glass. The Mud Slide can also be served as a frozen drink. Blend the four ingredients with three-quarters cup of ice and serve in a large goblet.'
  },
  {
    drink_name: 'Orkney Chapel',
    source: 'Death & Co',
    specs: [
      '2 ounces Highland Park 12-Year Scotch Whisky',
      '.5 ounce Dolin Dry Vermouth',
      '.25 ounce Lustau Amontillado Sherry',
      '.25 ounce Grand Marnier',
      '.25 ounce Rich Cane Sugar Syrup',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'Over And Out',
    source: 'Death & Co',
    specs: [
      '1 ounce Krogstad Aquavit',
      '1 ounce Ocho 2012 Plata Tequila',
      '.75 ounce Lime Juice',
      '.75 ounce Watermelon Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 dash Bitter Truth Celery Bitters',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a large coupe. No garnish.'
  },
  {
    drink_name: 'Overhead Smash',
    source: 'Death & Co',
    specs: [
      '0.5 Strawberry',
      '2 wheels of Cucumber',
      '1.5 ounces Tanqueray London Dry Gin',
      '.5 ounce Bonal Gentiane-Quina',
      '.5 ounce Carpano Antica Formula Vermouth',
      '.75 ounce Lemon Juice',
      '.25 ounce Orgeat',
      '.25 ounce Ginger Syrup',
      '1 dash Angostura Bitters',
      '1 dash House Orange Bitters',
      'Club Soda',
      'Ribbon of Cucumber (Garnish)',
      'Sprig of Mint (Garnish)',
      '1-2 drops Angostura Bitters (Garnish)'
    ],
    instructions: 'In a shaker, muddle the strawberry and cucumber wheels. Add the remaining ingredients (except the club soda) and short shake with ice, then strain into a highball glass filled with ice cubes. Top with club soda. Garnish with the cucumber ribbon and mint spring, then dash the bitters on the mint. Serve with a straw.'
  },
  {
    drink_name: 'Paddington',
    source: 'PDT',
    specs: [
      'St. George Absinthe',
      '1.5 oz. Banks 5 Island Rum',
      '.5 oz. Lillet Blanc',
      '.5 oz. Grapefruit Juice',
      '.5 oz. Lemon Juice',
      '1 barspoon Bonne Maman Orange Marmalade'
    ],
    instructions: 'Shake with ice and strain into a chilled, St. George Absinthe-rinsed coupe. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'Paddy Melt',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Knappogue Castle 12-Year Irish Whiskey',
      '.5 ounce Chamomile-Infused Old Overholt Rye Whiskey',
      '.5 ounce Amaro Meletti',
      '.75 ounce Lemon Juice',
      '.5 ounce Rich Cane Sugar Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a fancy fizz glass. No garnish.'
  },
  {
    drink_name: 'Paddy Wallbanger',
    source: 'PDT',
    specs: [
      '1.5 oz. Black Bush Irish Whiskey',
      '1.5 oz. Dolin Dry Vermouth',
      '.5 oz. Galliano L\'Autentico',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Paloma',
    source: 'Death & Co',
    specs: [
      'Rim with Kosher Salt (Garnish)',
      'half a Lime',
      '2 ounces El Tesoro Platinum Tequila',
      '.5 ounce Grapefruit Juice',
      '.5 ounce Simple Syrup',
      'San Pellegrino Pompelmo Grapefruit Soda',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Rim a highball glass with kosher salt. Squeeze the lime into a shaker and drop it in. Add the tequila, grapefruit juice, and simple syrup and short shake with 3 ice cubes. Strain into a highball glass filled with ice cubes and top with grapefruit soda. Garnish with the lime wheel and serve with a straw.'
  },
  {
    drink_name: 'Paradise Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '.75 ounce Marie Brizard Apry',
      '.75 ounce Orange Juice',
      '2 dashes Orange Bitters',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Paris',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Gin',
      '1 ounce Dry French Vermouth',
      '1 ounce Crème De Cassis',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Parisian Blond Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Rum',
      '1 ounce Curaçao',
      '1 ounce Heavy Cream',
      'Vanilla Extract (Garnish) (Optional)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. A drop or two of vanilla extract on the cream is an interesting garnish.'
  },
  {
    drink_name: 'Park Life Swizzle',
    source: 'Death & Co',
    specs: [
      '1 ounce Ransom Old Tom Gin',
      '1 ounce Lustau Amontillado Sherry',
      '.5 ounce Velvet Falernum',
      '.75 ounce Lime Juice',
      '.5 ounce Ginger Syrup',
      '6 dashes Angostura Bitters',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients (except the bitters), then dump into a pilsner glass filled with crushed ice. Top with the bitters. Garnish with the mint sprig, and serve with a straw.'
  },
  {
    drink_name: 'Parkside Fizz',
    source: 'PDT',
    specs: [
      '.75 oz. Lemon Juice',
      '.5 oz. Kassatly Chtaura Orgeat',
      '8 leaves of Mint',
      '1 oz. Club Soda',
      '1 sprig Mint (Garnish)'
    ],
    instructions: 'Muddle mint leaves with orgeat. Add everything else, then shake with ice and strain into a chilled rocks glass filled with ice. Top with 1 oz. Club Soda. Garnish with a mint sprig.'
  },
  {
    drink_name: 'Passing Aden',
    source: 'Death & Co',
    specs: [
      '2 ounces Van Oosten Batavia Arrack',
      '1 ounce Cinnamon Orange Tea-Infused Sweet Vermouth',
      '.25 ounce Rich Demerara Syrup',
      '2 dashes Bitter Truth Aromatic Bitters',
      '1 stick Cinnamon',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Passion Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Alizé Gold Passion',
      '.75 ounce Tequila',
      '1 ounce Cointreau',
      '.75 ounce Lime Juice',
      'Thin wheel of Lime (Garnish)',
      'Salt (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into chilled cocktail glass rimmed with coarse salt. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Patois Punch',
    source: 'Death & Co',
    specs: [
      '1 ounce Ron Del Barrilito 3-Star Rum',
      '1 ounce Busnel VSOP Calvados',
      '.5 teaspoon Donn\'s Spices #2',
      '.5 ounce Lemon Juice',
      '.5 ounce Maple Syrup',
      '1 teaspoon Pumpkin Purée'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Paul\'s Club Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Tanqueray Gin',
      '1 oz. Concord Shrub',
      '.25 oz. Simple Syrup',
      '.25 oz. Ricard Pastis'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Float .25 oz. of Ricard Pastis. No garnish.'
  },
  {
    drink_name: 'Peach Brandy Julep',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 tender sprigs of Mint',
      '.5 ounce Marie Brizard Peach Liqueur',
      '2 wedges Sweet Georgia Peach',
      '2 ounces VS Cognac'
    ],
    instructions: 'Strip the leaves from one sprig of mint and muddle them together with the peach brandy and peach wedges. Add the Cognac and shake. Strain into a highball glass filled with crushed ice and stir until the outside of the glass frosts, adding more crushed ice if necessary. Garnish with the second sprig of mint.'
  },
  {
    drink_name: 'Peach Melissa',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gosling\'s Dark Rum',
      '.5 ounce Simple Syrup',
      '1 ounce Orange Juice',
      '.25 ounce Lemon Juice',
      '1 ounce Peach Purée',
      'slice of Peach (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a cocktail glass. Garnish with a peach slice.'
  },
  {
    drink_name: 'Peachy Pachacuti',
    source: 'Death & Co',
    specs: [
      '3 slices of ripe Peach',
      '2 ounces Macchu Pisco',
      '.5 ounce Lime Juice',
      '.5 ounce Lemon Juice',
      '.75 ounce Acacia Honey Syrup',
      '1 teaspoon Greek Yogurt'
    ],
    instructions: 'In a shaker, muddle the peach slices. Add the remaining ingredients and shake with ice. Double strain into a snifter over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'Pearl Button',
    source: 'PDT',
    specs: [
      '2 oz. Mãe De Ouro Cachaça',
      '.75 oz. Lillet Blanc',
      '.5 oz. Lime Juice',
      '1.5 oz. San Pellegrino Limonata'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Top with 1.5 oz. of San Pellegrino Limonata. Garnish with half a grapefruit wheel.'
  },
  {
    drink_name: 'Pearl Of Puebla',
    source: 'PDT',
    specs: [
      '2 oz. Sombra Mezcal',
      '.75 oz. Yellow Chartreuse',
      '.75 oz. Lime Juice',
      '4 sprigs Oregano',
      '1 barspoon Ricard Pastis',
      '1 barspoon Agave Syrup'
    ],
    instructions: 'Muddle the oregano and agave nectar. Add everything else, then shake with ice and fine-strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Pearls Before Swine',
    source: 'Death & Co',
    specs: [
      '2 ounces Martin Miller\'s Westbourne-Strength Gin',
      '.5 ounce Lemon Juice',
      '.5 ounce Orgeat',
      '1 teaspoon Greek Yogurt',
      '1 teaspoon Lemon Curd',
      '3 drops Rose Water'
    ],
    instructions: 'Shake all the ingredients (except the rose water) with ice, then double strain into a coupe. Top with the rose water. No garnish.'
  },
  {
    drink_name: 'Pegu Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '4 wedges Lime',
      '.75 ounce Curaçao',
      '2 dashes Angostura Bitters',
      '2 ounces Gin',
      'Lime Peel (Garnish)'
    ],
    instructions: 'Muddle the lime pieces, curaçao, and bitters in the bottom of a mixing glass. Add the gin and ice and shake. Strain into a chilled cocktail glass. Garnish with a lime peel.'
  },
  {
    drink_name: 'Pelée\'s Blood',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Rhum Jm 100-Proof Agricole Blanc',
      '1.5 ounces Donn\'s Spices #2',
      '2 dashes Vieux Pontarlier Absinthe',
      '.75 ounce Lime Juice',
      '.5 ounce Grenadine',
      '1 teaspoon Rich Cane Sugar Syrup',
      'Wheel of Lime (Garnish)',
      'Flag with Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a double rocks glass filled with ice cubes. Garnish with the lime wheel and cherry flag.'
  },
  {
    drink_name: 'Pendennis Club Cocktail',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.75 ounce Pendennis Mix',
      '.75 ounce Lime Juice',
      '2 dashes House Peychaud\'s Bitters',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Perfect Crime',
    source: 'Death & Co',
    specs: [
      '1.75 ounces Sombra Mezcal',
      '.5 ounce Pasquet Marie-Framboise',
      '.5 ounce Amaro Averna',
      '1 teaspoon Vanilla Syrup',
      '2 dashes House Orange Bitters',
      '2 skewered Raspberry (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the raspberries.'
  },
  {
    drink_name: 'Perfect Pear',
    source: 'PDT',
    specs: [
      '2 oz. Clear Creek Pear Brandy',
      '.75 oz. Lemon Juice',
      '.5 oz. Orange Juice',
      '.5 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled, half sugar-rimmed coupe. No garnish.'
  },
  {
    drink_name: 'Persephone',
    source: 'PDT',
    specs: [
      '1 oz. Laird\'s Applejack',
      '.75 oz. Dolin Sweet Vermouth',
      '.5 oz. Plymouth Sloe Gin',
      '.5 oz. Lemon Juice',
      '.5 oz. Simple Syrup'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Pete\'s Word',
    source: 'Death & Co',
    specs: [
      '.75 ounce Laphroaig 10-Year Scotch Whisky',
      '.75 ounce Luxardo Maraschino Liqueur',
      '.75 ounce Green Chartreuse',
      '.75 ounce Lime Juice'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Petticoat',
    source: 'Death & Co',
    specs: [
      '2 ounces Szechuan Peppercorn-Infused Plymouth Gin',
      '.25 ounce Velvet Falernum',
      '.25 ounce Marie Brizard Apricot Liqueur',
      '.75 ounce Lime Juice',
      '.25 ounce Rich Cane Sugar Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Pharaoh Cooler',
    source: 'PDT',
    specs: [
      '1.5 oz. Partida Blanco Tequila',
      '1 oz. Watermelon Juice',
      '.75 oz. House Grenadine',
      '.5 oz. Lime Juice',
      '4 drops Marivani Rose Flower Water',
      '1 oz. Club Soda'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with ice. Top with 1 oz. Club Soda. No garnish.'
  },
  {
    drink_name: 'Phil\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Barbancourt White Rum',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Pica Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Cardenal Mendoza Brandy',
      '.25 ounce Galliano',
      '1.5 ounces Pineapple Juice',
      '2 dashes Grenadine',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Pour all the ingredients in the glass section of a Boston shaker. Fill with cubed ice and shake hard to a slow count of ten (or to the count of the first line of "Girl from Ipanema"). Strain into a chilled martini glass. Flame an orange peel over the surface of the drink and drop it into the glass.'
  },
  {
    drink_name: 'Picon Punch II',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Amer Picon',
      '.5 ounce Grenadine',
      '.5 ounce Brandy',
      '4 to 5 ounces Soda Water',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake the first three ingredients with ice and strain into an ice- filled highball glass. Top with soda and garnish with a lemon twist.'
  },
  {
    drink_name: 'Picon Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Amer Picon',
      '.5 ounce Lemon Juice',
      '.5 ounce Grenadine',
      'Soda Water',
      'Ginger Ale (Optional)',
      'Fruit (Garnish)'
    ],
    instructions: 'Shake the first three ingredients well with ice and strain into a highball glass filled with ice. Top with soda, or if you prefer a sweeter drink, top with ginger ale. Garnish generously with fresh seasonal fruits.'
  },
  {
    drink_name: 'Pilgrim Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Dark Rum',
      '.5 ounce Light Rum',
      '.5 ounce Curaçao',
      '2 ounces Orange Juice',
      'half a fruit of Lime Juice',
      '.25 ounce Pimento Liqueur',
      'dash Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients and strain into a cocktail glass. Can be served hot or cold.'
  },
  {
    drink_name: 'Pillow Talk',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Beefeater 24 Gin',
      '.25 ounce Plymouth Sloe Gin',
      '.25 ounce Crème Yvette',
      '.75 ounce Grapefruit Juice',
      '.5 teaspoon Vanilla Syrup',
      'Sparkling Rosé'
    ],
    instructions: 'Shake all the ingredients (except the sparkling rosé) with ice, then strain into a flute. Top with sparkling rosé. No garnish.'
  },
  {
    drink_name: 'Pimm\'s Cup',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Pimm\'s No. 1',
      '3 ounces Lemonade',
      'Soda Water',
      'English spear of Cucumber (Garnish)',
      'slice of Apple (Garnish)'
    ],
    instructions: 'Combine all the ingredients in a highball glass and garnish with the English cucumber and apple.'
  },
  {
    drink_name: 'Pimms Cup',
    source: 'PDT',
    specs: [
      '2 oz. Pimms No. 1 Cup',
      '.75 oz. Lemon Juice',
      '.5 oz. Simple Syrup',
      '2 slices of Cucumber',
      '1 oz. Fever Tree Ginger Ale',
      '1 slice of Cucumber (Garnish)'
    ],
    instructions: 'Muddle the cucumber and simple syrup. Add Pimms and lemon juice, then shake with ice and strain into a chilled Collins glass filled with ice. Top with 1 oz. Fever Tree Ginger Ale. Garnish with a cucumber wheel.'
  },
  {
    drink_name: 'Piña Colada Deconstruction',
    source: 'Death & Co',
    specs: [
      '2 ounces Pineapple-Infused Flor De Caña Extra-Dry White Rum',
      '1 teaspoon Kalani Ron De Coco Coconut Liqueur',
      '1.5 ounces Coconut Water',
      '.5 teaspoon Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Piña Colada',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Light Rum',
      '1 ounce Gosling\'s Or Myers\'s Dark Rum',
      '2 ounces Coco Lopez',
      '1 ounce Heavy Cream',
      '4 ounces Pineapple Juice',
      'dash Angostura Bitters',
      '1 cup Crushed Ice',
      'wedge of Pineapple (Garnish)',
      'Maraschino Cherry (Garnish)'
    ],
    instructions: 'Pour all the ingredients into a blender and blend for 15 seconds. Pour into a specialty glass like a poco-grande glass and garnish with the pineapple and cherry.'
  },
  {
    drink_name: 'Pinche Chivo',
    source: 'Death & Co',
    specs: [
      '3 wheels of Cucumber',
      '2 ounces Cabrito Blanco Tequila',
      '.75 ounce Sage-Infused Dolin Blanc Vermouth',
      '.75 ounce Lime Juice',
      '.5 ounce Acacia Honey Syrup',
      'Ribbon of Cucumber (Garnish)'
    ],
    instructions: 'In a shaker, muddle the cucumber wheels. Add the remaining ingredients and shake with ice, then strain into a coupe. Garnish with the cucumber ribbon on a cocktail pick.'
  },
  {
    drink_name: 'Pineapple Julep II',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '1 slice Pineapple',
      '2 ounces Orange Juice',
      '2 dashes Raspberry Syrup',
      'Champagne'
    ],
    instructions: 'Shake ingredients, strain  into an  iced goblet, and  top off with Champagne'
  },
  {
    drink_name: 'Pineapple Julep',
    source: 'The Craft of the Cocktail',
    specs: [
      'leaves of 2 tender sprigs of Mint',
      '3 wedges of ripe Pineapple',
      '1 ounce Simple Syrup',
      '2 ounces Bourbon Whiskey',
      '2 tender sprigs of Mint (Garnish)'
    ],
    instructions: 'In a mixing glass, muddle the mint leaves, pineapple wedges, and Simple Syrup. Add the bourbon and ice and shake well. Strain into a highball glass filled with crushed ice and stir well until the glass frosts. Garnish with the mint sprigs.'
  },
  {
    drink_name: 'Pineau Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces De Fussigny Pineau Des Charentes',
      '1 ounce Gin',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Assemble the ingredients in a mixing glass with ice and stir. Strain into a chilled martini glass and garnish with the Ramed orange peel.'
  },
  {
    drink_name: 'Ping-Pong Cocktail',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Sloe Gin',
      '.5 ounce Dolin Dry Vermouth',
      '.5 ounce Punt E Mes',
      '2 dashes House Orange Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Pink Coral',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '1 ounce Passoa Passion-fruit Liqueur',
      '3 ounces Pineapple Juice',
      '1 ounce Passion Fruit Juice',
      '1 ounce Guava Juice',
      '1 tablespoon Grenadine',
      '1 dash Angostura Bitters',
      'Tropical Fruit (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and serve in a large goblet. Decorate with tropical fruit if it is available.'
  },
  {
    drink_name: 'Pink Elephant',
    source: 'Death & Co',
    specs: [
      '2 ounces Tanqueray London Dry Gin',
      '1 teaspoon Luxardo Maraschino Liqueur',
      '1 teaspoon Massenez Crème De Mûre Blackberry Liqueur',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Lime Juice',
      '1 teaspoon Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Pink Flag',
    source: 'Death & Co',
    specs: [
      '2 leaves of Sage',
      '2 ounces Tanqueray London Dry Gin',
      '.25 ounce Crème Yvette',
      '.5 ounce Lemon Juice',
      '.5 ounce Pineapple Juice',
      '.5 ounce Orgeat'
    ],
    instructions: 'In a shaker, gently muddle the sage leaves. Add the remaining ingredients and shake with ice, then double strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Pink Gin',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '3 dashes Angostura Or Orange Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Combine in an old-fashioned glass over ice. Garnish with the lemon peel. Originally this drink was served without ice, but these days you won\'t find many takers for warm gin.'
  },
  {
    drink_name: 'Pink Lady',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.25 ounce Grenadine',
      '.75 ounce Simple Syrup',
      '1 ounce Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass.'
  },
  {
    drink_name: 'Pink Squirrel',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Crème De Noyaux',
      '.75 ounce White Crème De Cacao',
      '1.5 ounces Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass.'
  },
  {
    drink_name: 'Pisco Inferno',
    source: 'Death & Co',
    specs: [
      '2 ounces Campo De Encanto Acholado Pisco',
      '.5 ounce Ancho Chile-Infused Dolin Rouge Vermouth',
      '2.25 teaspoons Cherry Heering',
      '2.25 teaspoons Massenez Kirsch Vieux Cherry Brandy',
      '2 dashes Fee Brothers Whiskey Barrel-Aged Bitters',
      '1 dash House Orange Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'Pisco Sour',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Pisco',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '1 small Egg White',
      'Several drops Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass. Garnish with several drops of Angostura bitters on top of the foam.'
  },
  {
    drink_name: 'Pit Stop Flip',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Laird\'s Bonded Apple Brandy',
      '.5 ounce Sandeman Rainwater Madeira',
      '.5 ounce Maple Syrup',
      '1 Egg Yolk',
      '.5 ounce Heavy Cream',
      'Nutmeg (Garnish)',
      'Slice of Apple (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a coupe. Garnish with a few grates of nutmeg and rest the apple slice on the edge of the coupe.'
  },
  {
    drink_name: 'Planter\'s Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Dark Rum',
      '1 ounce Light Rum',
      '.5 ounce Curaçao',
      '2 ounces Orange Juice',
      '2 ounces Pineapple Juice',
      '.5 ounce Simple Syrup',
      '.25 ounce Lime Juice',
      'dash Grenadine',
      'dash Angostura Bitters',
      '2 ounces Soda Water (Optional)',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients except the soda with ice, strain into a collins glass three-quarters filled with ice, and top with soda, if using. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Plátanos En Mole Old Fashioned',
    source: 'PDT',
    specs: [
      '2 oz. Zacapa 23 Centenario Rum',
      '.25 oz. Marie Brizard Crème De Banane',
      '12 drops Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with a pinch of ground chili.'
  },
  {
    drink_name: 'Poinsettia',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Cranberry Juice',
      '4 ounces Champagne',
      '.5 ounce Cointreau'
    ],
    instructions: 'Pour cranberry juice into a champagne flute and fill with Champagne. Top with a float of Cointreau.'
  },
  {
    drink_name: 'Poire Man\'s Cobbler',
    source: 'Death & Co',
    specs: [
      'cubed quarter of Bartlett Pear',
      '2 ounces Busnel VSOP Calvados',
      '.25 ounce Bénédictine',
      '2 dashes House Peychaud\'s Bitters',
      'Slice of Bartlett Pear (Garnish)'
    ],
    instructions: 'In a shaker, muddle the pear. Add the remaining ingredients and shake with ice. Strain into a double rocks glass filled with crushed ice. Garnish with the pear slice.'
  },
  {
    drink_name: 'Pomegranate Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Citrus Vodka',
      '.5 ounce Lemon Juice',
      '.25 ounce Pomegranate Juice',
      '1 ounce Simple Syrup',
      'Dash Rose Water (Optional)',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Port Au Prince',
    source: 'Death & Co',
    specs: [
      '1 ounce Barbancourt 3-Star Rum',
      '1 ounce El Dorado 3-Year Rum',
      '.25 ounce Lemon Hart 151 Rum',
      '.75 ounce Velvet Falernum',
      '.75 ounce Lime Juice',
      '.5 ounce Pineapple Juice',
      '.25 ounce Grenadine',
      '1 teaspoon Ginger Syrup',
      '6 drops Bittermens \'Elemakule Tiki Bitters',
      'Pineapple (Garnish)',
      'Flag with Brandied Cherry (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Garnish with the pineapple and cherry flag.'
  },
  {
    drink_name: 'Port Authority',
    source: 'Death & Co',
    specs: [
      '4 Blackberry',
      '2 ounces Cognac',
      '.75 ounce Otima 10-Year Tawny Port',
      '.5 ounce Crème De Cassis',
      '.5 ounce Lemon Juice',
      '2 dashes Bittermens Xocolatl Mole Bitters',
      'Blackberry (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the blackberries. Add the remaining ingredients and shake with ice. Double strain into a coupe and garnish with the blackberry.'
  },
  {
    drink_name: 'Port Cobbler',
    source: 'The Craft of the Cocktail',
    specs: [
      '2  wedges Pineapple',
      '2 slices Orange',
      '2 wedges Lemon',
      '1?2 ounce Curaçao',
      '4 ounces Ruby Port'
    ],
    instructions: 'In the bottom of a bar glass, muddle the skinless pineapple wedge, 1 piece of orange, and 1 piece of lemon with the curaçao and 1 ounce of water. Add the port, shake with ice, and strain into a double old-fashioned glass filled with crushed ice. Garnish with the remaining pineapple wedge, an orange wedge, and a lemon wedge.'
  },
  {
    drink_name: 'Port Whiskey Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Jack Daniel\'s Tennessee Whiskey',
      '.75 ounce Lemon Juice',
      '1.5 ounces Orange Juice',
      '1.5 ounces Cranberry Juice',
      '1 ounce Simple Syrup',
      '1 ounce Ruby Port',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Shake the whiskey, juices, and syrup with ice and pour into a highball glass filled with ice. Top with the ruby port. Garnish with the orange slice.'
  },
  {
    drink_name: 'Pousse Café',
    source: 'The Craft of the Cocktail',
    specs: [
      '.25 ounce Grenadine',
      '.25 ounce Dark Crème De Cacao',
      '.25 ounce Maraschino Liqueur',
      '.25 ounce Curaçao',
      '.25 ounce Green Crème De Menthe',
      '.25 ounce Marie Brizard Parfait Amour',
      '.5 ounce Cognac'
    ],
    instructions: 'Pour each liqueur in the order they are listed, beginning with the grenadine, carefully down the inside of a Pousse café glass over the back of a teaspoon positioned down at an angle against the inside of the glass so that each layer floats on top of the previous layer.'
  },
  {
    drink_name: 'Prairie Oyster',
    source: 'The Craft of the Cocktail',
    specs: [
      'dash Malt Vinegar',
      'Whole of a small Egg Yolk',
      '.5 teaspoon Worcestershire Sauce',
      '.5 teaspoon Tomato Ketchup',
      '2 dashes Tabasco Sauce'
    ],
    instructions: 'Place all the ingredients in a small glass in the order listed. Take it down in one gulp and have a Bloody Mary!'
  },
  {
    drink_name: 'Preakness',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Old Grand-Dad 114 Bourbon',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Bénédictine',
      '1 dash Bitter Truth Aromatic Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Presbyterian',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bourbon Whiskey',
      '2.5 ounces Soda Water',
      '2.5 ounces 7-Up',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Build in a highball glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Presidente',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Light Rum',
      '.75 ounce Curaçao',
      '.75 ounce Dry Vermouth',
      'dash Grenadine'
    ],
    instructions: 'Shake with ice and strain into a small cocktail glass.'
  },
  {
    drink_name: 'Pressure Drop',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Ransom Old Tom Gin',
      '1 ounce Amaro Meletti',
      '.5 ounce Dolin Dry Vermouth',
      '1 teaspoon Clear Creek Pear Brandy',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Pretty Bird',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Bombay London Dry Gin',
      '.5 ounce Rhum Clément Créole Shrubb',
      '.75 ounce Grapefruit Juice',
      '.5 ounce Lime Juice',
      '.25 ounce Grenadine',
      '1 teaspoon Cinnamon Bark Syrup',
      'Wheel of Lime (Garnish)',
      'Flag with Cherry'
    ],
    instructions: 'Shake all the ingredients, then strain into a double rocks glass over 1 large ice cube. Garnish with the lime wheel and cherry flag.'
  },
  {
    drink_name: 'Prima China',
    source: 'Death & Co',
    specs: [
      '2 ounces Siembra Azul Añejo Tequila',
      '.75 ounce Earl Grey-Infused Dolin Blanc Vermouth',
      '.25 ounce Cynar',
      '1 teaspoon Marie Brizard White Crème De Cacao',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Primavera',
    source: 'PDT',
    specs: [
      'St. George Absinthe',
      '2 oz. Krogstad Aquavit',
      '.75 oz. Cointreau',
      '.75 oz. Lemon Juice',
      '2 1.5-inch tips of Asparagus',
      '1.25 inch slice of Fennel Bulb',
      '1 2-inch Stalk of Celery'
    ],
    instructions: 'Muddle the Cointreau and vegetables. Add everything else, then shake with ice and fine-strain into a chilled St. George Absinthe-rinsed coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Prince Edward',
    source: 'PDT',
    specs: [
      '2 oz. Compass Box Oak Cross Blended Malt Scotch Whisky',
      '.75 oz. Lillet Blanc',
      '.5 oz. Drambuie',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Prince Of Wales',
    source: 'PDT',
    specs: [
      '1 oz. Hine V.S.O.P. Cognac',
      '1 oz. Blandy\'s Sercial Madeira',
      '.25 oz. Grand Marnier',
      '1 dash Angostura Bitters',
      '1 oz. Moët Imperial Champagne'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Top with 1 oz. Moët Imperial Champagne. Garnish with an orange twist.'
  },
  {
    drink_name: 'Professor',
    source: 'PDT',
    specs: [
      '2 oz. Rhum Clément V.S.O.P',
      '.75 oz. Dow\'s Tawny Port',
      '.5 oz. Carpano Antica Sweet Vermouth',
      '1 dash Angostura Bitters',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Puerto Rican Racer',
    source: 'Death & Co',
    specs: [
      '2 ounces Ron Del Barrilito 3-Star Rum',
      '.5 ounce Laird\'s Bonded Apple Brandy',
      'Scant .5 ounce Yellow Chartreuse',
      '1 teaspoon Grenadine',
      '1 dash House Peychaud\'s Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'Pumpkin Toddy',
    source: 'PDT',
    specs: [
      '1 oz. Laird\'s Bonded Apple Brandy',
      '.5 oz. Rittenhouse Bonded Rye Whiskey',
      '.5 oz. Lemon Juice',
      '.5 oz. Deep Mountain Grade B Maple Syrup',
      '1 teaspoon Libby\'s Pumpkin Purée',
      '2 dashes Angostura Bitters',
      '5 oz. Hot Water'
    ],
    instructions: 'Add everything to a pre-heated heatproof mug and stir. Top with 5 oz. hot water and stir. Garnish with grated cinnamon.'
  },
  {
    drink_name: 'Punch And Plain',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 ounces Orange Juice',
      '3 ounces Pineapple Juice',
      '.25 ounce Grenadine',
      '.25 ounce Simple Syrup',
      'wedge of Lime',
      'wedge of Lemon',
      'Soda Water',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake the first four ingredients and strain into an ice-filled goblet. Squeeze in the lime wedge and lemon wedge and top with soda. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Punch And Sweet',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 ounces Orange Juice',
      '3 ounces Pineapple Juice',
      '.25 ounce Grenadine',
      '.25 ounce Simple Syrup',
      'Soda Water',
      '7-Up',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake the first four ingredients and strain into an ice-filled goblet. Squeeze in the lime wedge and lemon wedge and top with soda. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Queen Palm',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Plymouth Gin',
      '.5 ounce Donn\'s Spices #2',
      '3 dashes Kalani Ron De Coco Coconut Liqueur',
      '.5 ounce Grapefruit Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Coconut Water',
      '1 teaspoon Rich Cane Sugar Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Queen\'s Park Swizzle',
    source: 'Death & Co',
    specs: [
      '10 leaves of Mint',
      '.75 ounce Simple Syrup',
      '1 cube of White Sugar',
      '2 ounces Caña Brava Rum',
      '1 ounce Lime Juice',
      '4 dashes House Peychaud\'s Bitters',
      '4 dashes Angostura Bitters',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the mint with the simple syrup and sugar cube. Add the rum and lime juice and whip (shake with a few pieces of crushed ice just until the ingredients are incorporated). Dump into a pilsner glass filled with crushed ice. Swizzle until cold, then top with the bitters and swizzle them into the top of the drink. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Queens Park Swizzle',
    source: 'PDT',
    specs: [
      '2 oz. Barbancourt 8-Year-Old Rhum',
      '1 oz. Lime Juice',
      '.5 oz. Demerara Syrup',
      '8 Leaves of Mint',
      '1 sprig of Mint (Garnish)'
    ],
    instructions: 'Muddle mint leaves and demerara syrup in a chilled Collins glass. Add rhum, lime, and pebble ice, then swizzle and top with more pebble ice. Add 2 dashes Peychaud\'s Bitters and 2 dashes Angostura Bitters. Garnish with a mint sprig.'
  },
  {
    drink_name: 'Rack & Rye',
    source: 'PDT',
    specs: [
      '1.5 oz. Wild Turkey Russell\'s Reserve 6-Year-Old Rye Whiskey',
      '.75 oz. Van Oosten Batavia Arrack',
      '.25 oz. Demerara Syrup',
      '2 dashes Angostura Bitters',
      '2 dashes Angostura Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled rocks glass filled with ice. Twist an orange and lemon peel over the surface and discard. Garnish with a rock candy swizzle.'
  },
  {
    drink_name: 'Racketeer Julep',
    source: 'Death & Co',
    specs: [
      'Sprig of Mint',
      '2 ounces Bols Genever',
      '.5 ounce Smith & Cross Rum',
      '1 teaspoon Rich Demerara Syrup',
      '1 teaspoon Vanilla Syrup',
      '1 dash Bitter Truth Aromatic Bitters',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Rub the mint around the inside of a julep tin and discard. Put the remaining ingredients (except the bitters) in the tin. Fill the tin halfway with crushed ice. Stir with a teaspoon, churning the ice as you go, for about 10 seconds, holding the tin by the rim so the entire tin can eventually frost up. Add more crushed ice to fill the tin two-thirds full and stir until the tin is completely frosted. Add more ice to form a cone above the rim. Top with the bitters. Garnish with the mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Radio Days',
    source: 'Death & Co',
    specs: [
      'Crescent of Orange',
      '1 dash Angostura Bitters',
      '1 ounce Tanqueray London Dry Gin',
      '.75 ounce Salers Gentiane Aperitif',
      '.75 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      'Dry Champagne',
      'Crescent of Orange (Garnish)'
    ],
    instructions: 'In a shaker, muddle the orange crescent and bitters. Add the remaining ingredients (except the champagne) and shake with ice. Strain into a large coupe and top with champagne. Garnish with the orange crescent.'
  },
  {
    drink_name: 'Rainbow Julep',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 tender sprigs of Mint',
      '.5 ounce Marie Brizard Apry',
      '2 ounces Bourbon Whiskey'
    ],
    instructions: 'In the bottom of a mixing glass, muddle one sprig of mint with the Apry. Add the bourbon and strain into a highball glass filled with crushed ice. Swirl with a bar spoon until the outside of the glass frosts. Garnish with the remaining sprig of mint.'
  },
  {
    drink_name: 'Rainbow Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 ounces Orange Juice',
      '.5 ounce Lime Juice',
      '3 ounces Pineapple Juice',
      '.5 ounce Simple Syrup',
      '.25 ounce Grenadine',
      '2 dashes Angostura Bitters',
      'splash of Soda Water',
      'Cherry (Garnish)',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Shake all the ingredients except the soda, and strain into an iced- tea glass. Top with soda. Garnish with the cherry and orange slice.'
  },
  {
    drink_name: 'Rainbow Sour',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Pineau Des Charentes',
      '1 ounce Marie Brizard Apry',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      'Cherry',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and serve in a rocks glass. Garnish with the cherry and orange slice.'
  },
  {
    drink_name: 'Raisin Burn',
    source: 'Death & Co',
    specs: [
      '2 ounces Dried Currant-Infused Wild Turkey Rye Whiskey',
      '.75 ounce Lustau East India Solera Sherry',
      '1 whole Egg',
      '.5 ounce Heavy Cream',
      '1 dash Angostura Bitters',
      'Cinnamon (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then add 1 large ice cube and shake again. Double strain into a coupe. Garnish with a few grates of cinnamon.'
  },
  {
    drink_name: 'Ramble',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '1 ounce Lemon Juice',
      '1.25 ounces Simple Syrup',
      '3 Raspberry'
    ],
    instructions: 'In a shaker, combine the gin, lemon juice, and .75 ounce of the simple syrup. Short shake with 3 ice cubes, then strain into a highball glass filled with crushed ice. Empty the shaker, then add the raspberries and the remaining .5 ounce simple syrup. Gently muddle the raspberries, then pour over the top of the drink and serve with a straw.'
  },
  {
    drink_name: 'Ramos Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Lemon Juice',
      '.5 ounce Lime Juice',
      '1.25 ounces Simple Syrup',
      '2 ounces Milk',
      '1 small Egg White',
      '2 drops Orange Flower Water',
      '3 ounces Soda Water'
    ],
    instructions: 'Shake all the ingredients except the soda with ice and strain into a highball glass without ice. Top with club soda. No garnish.'
  },
  {
    drink_name: 'Ramos Gin Fizz',
    source: 'Death & Co',
    specs: [
      '2 ounces Plymouth Gin',
      '.5 ounce Lemon Juice',
      '.5 ounce Lime Juice',
      '1 ounce Simple Syrup',
      '1 ounce Heavy Cream',
      '1 Egg White',
      '6 drops Orange Flower Water',
      '2 ounces Club Soda'
    ],
    instructions: 'Dry shake all the ingredients (except the club soda), then fill the shaker with ice cubes and shake until the tin is almost too cold to hold. Double strain into a highball glass and let rest for 30 seconds, then slowly top with club soda. Serve with a straw. No garnish.'
  },
  {
    drink_name: 'Range Life',
    source: 'Death & Co',
    specs: [
      '2 ounces El Tesoro Reposado Tequila',
      '.5 ounce Campari',
      '.5 ounce Grand Marnier',
      '.5 ounce Punt E Mes'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Rapscallion',
    source: 'PDT',
    specs: [
      'St. George Absinthe',
      '2.25 oz. Talisker 10-Year-Old Single Malt Scotch Whisky',
      '.75 oz. Lustau Pedro Ximénez Sherry'
    ],
    instructions: 'Stir with ice and strain into a chilled, St. George Absinthe-rinsed coupe. Twist a lemon peel over the surface and discard. No garnish.'
  },
  {
    drink_name: 'Raspberries Reaching',
    source: 'PDT',
    specs: [
      '1.5 oz. Trimbach Framboise Brandy',
      '1 oz. Tokaji Aszú 5 Puttonyos "Red Label"',
      '.5 oz. Pama Pomegranate Liqueur',
      '3 drops Marivani Rose Flower Water'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a pink rose petal.'
  },
  {
    drink_name: 'Rattlesnake',
    source: 'PDT',
    specs: [
      'Vieux Pontarlier Absinthe',
      '2 oz. Rittenhouse Bonded Rye Whiskey',
      '1 oz. Lemon Juice',
      '.75 oz. Simple Syrup',
      '1 Egg White'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled Vieux Pontarlier Absinthe-rinsed egg coupe. No garnish.'
  },
  {
    drink_name: 'Ravi\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Flor De Caña Extra-Dry White Rum',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all ingredients with ice, then double strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Rebel Rebel',
    source: 'Death & Co',
    specs: [
      'Half a Cherry Tomato',
      '1 ounce Siete Leguas Blanco Tequila',
      '1.5 ounces Watermelon-Infused Dolin Dry Vermouth',
      '1 ounce Cocchi Americano Rosa',
      '.5 teaspoon Fusion Verjus Blanc',
      'Small pinch of Kosher Salt',
      '1 dash House Orange Bitters'
    ],
    instructions: 'In a mixing glass, muddle the cherry tomato. Add the remaining ingredients and stir over ice. Double strain into a Nick & Nora Glass. No garnish.'
  },
  {
    drink_name: 'Red Ant',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Rittenhouse 100 Rye Whiskey',
      '1 teaspoon Del Maguey Chichicapa Mezcal',
      '.5 ounce Massenez Kirsch Vieux Cherry Brandy',
      '.5 ounce Cherry Heering',
      '.5 teaspoon Cinnamon Bark Syrup',
      '2 dashes Bittermens Xocolatl Mole Bitters',
      '3 skewered Brandied Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. Garnish with the cherries.'
  },
  {
    drink_name: 'Red Beer',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Tomato Juice',
      'Lager'
    ],
    instructions: 'Add 2 ounces of tomato juice to a draft lager beer.'
  },
  {
    drink_name: 'Red Devil',
    source: 'PDT',
    specs: [
      '2 oz. Bols Genever',
      '1 oz. Jujube Tea-Infused Vya Sweet Vermouth',
      '3 slices Dried Persimmon',
      '2 dashes Fee Brothers Whiskey Barrel-Aged Bitters'
    ],
    instructions: 'Add the persimmon and vermouth to a mixing glass and muddle. Add everything else, then stir with ice and strain over one large cube into a chilled rocks glass. Garnish with a cinnamon stick.'
  },
  {
    drink_name: 'Red-Headed Saint',
    source: 'PDT',
    specs: [
      '2 oz. Beleza Pura Cachaça',
      '.75 oz. Lime Juice',
      '.5 oz. Agave Syrup',
      '.25 oz. Yellow Chartreuse',
      '4 dashes A.B. Smeby Verbena Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled Collins glass filled with pebble ice. Top with 4 dashes Peychaud\'s Bitters. No garnish.'
  },
  {
    drink_name: 'Red Lion',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Grand Marnier',
      '1 ounce Dry Gin',
      '.5 ounce Orange Juice',
      '.5 ounce Lemon Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake well with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Red Manhattan',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Absolut Kurant Vodka',
      '.75 ounce Saint-Raphaël Apértif De France',
      '2 dashes Angostura Bitters',
      'Cherry (Garnish)'
    ],
    instructions: 'Stir with ice to chill and strain into a chilled martini glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Red Snapper',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '2 dashes Worcestershire Sauce',
      '4 dashes Tabasco Sauce',
      'pinch of Salt',
      'pinch of Pepper',
      '.25 ounce Lemon Juice',
      '4 ounces Tomato Juice'
    ],
    instructions: 'Combine all the ingredients in a mixing glass and roll back and forth to mix. Strain into a large goblet or pint glass three quarters filled with ice. Garnish with the lemon and lime wedges on a side plate.'
  },
  {
    drink_name: 'Remember Maine',
    source: 'PDT',
    specs: [
      '2 oz. Rhum Clément V.S.O.P.',
      '1.5 oz. Red Jacket Orchard Apple Cider',
      '.25 oz. St. Elizabeth Allspice Dram',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with an apple fan sprinkled with sea salt.'
  },
  {
    drink_name: 'Remember The Maine',
    source: 'Death & Co',
    specs: [
      'Vieux Pontarlier Absinthe',
      '2 ounces Rittenhouse 100 Rye Whiskey',
      '.75 ounce Cocchi Vermouth Di Torino',
      '.25 ounce Cherry Heering',
      '.25 ounce Massenez Kirsch Vieux Cherry Brandy',
      '2 dashes Vieux Pontarlier Absinthe',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Rinse a Nick & Nora glass with absinthe and dump. Stir the remaining ingredients over ice, then strain into the glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Resting Point',
    source: 'PDT',
    specs: [
      '1.5 oz. Siete Leguas Reposado Tequila',
      '.5 oz. Yellow Chartreuse',
      '.5 oz. Punt E Mes',
      '.5 oz. Lemon Juice',
      '.5 oz. Agave Syrup',
      '1 Strawberry',
      'Strawberry (Garnish)'
    ],
    instructions: 'Muddle 1 strawberry. Add everything else, then shake with ice and finestrain into a chilled coupe. Garnish with a strawberry fan.'
  },
  {
    drink_name: 'Reverend Palmer',
    source: 'PDT',
    specs: [
      '2 oz. Black Tea-Infused Elijah Craig 12-Year-Old Bourbon Whiskey',
      '.5 oz. Lemon Cordial',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain over one large cube into a chilled rocks glass. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Rhubarbarita',
    source: 'PDT',
    specs: [
      '1.5 oz. Partida Blanco Tequila',
      '1 oz. Lemon Juice',
      '.75 oz. Grand Marnier',
      '.5 oz. Boiron Rhubarb Purée',
      '.5 oz. House Grenadine'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'Rhum Club',
    source: 'PDT',
    specs: [
      '2 oz. Banks 5 Island Rum',
      '.75 oz. Lime Juice',
      '.5 oz. Rhum Clément Creole Shrub',
      '.25 oz. Martinique Sugar Cane Syrup',
      '2 dashes Angostura Bitters',
      '1 dash Angostura Orange Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with an orange wedge.'
  },
  {
    drink_name: 'Ricard Tomate',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Ricard',
      '.25 ounce Grenadine',
      '4 to 5 ounces Water'
    ],
    instructions: 'Pour Ricard and grenadine into a highball glass. Add water and then the ice last to prevent a residue from forming on top of the drink.'
  },
  {
    drink_name: 'Rigadoon',
    source: 'Death & Co',
    specs: [
      '2 ounces Tanqueray London Dry Gin',
      '.75 ounce Boiron Kalamansi Purée',
      '.25 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '4 leaves Thai Basil',
      '1 leaf of Thai Basil (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then double strain into a coupe. Garnish with the basil leaf.'
  },
  {
    drink_name: 'Rio Bravo',
    source: 'PDT',
    specs: [
      '2 oz. Sagatiba Cachaça',
      '.75 oz. Lime Juice',
      '.5 oz. Kassatly Chtaura Orgeat',
      '3 quarter-sized slices Freshly-Peeled Ginger'
    ],
    instructions: 'Add the ginger and orgeat to a mixing glass and muddle. Add everything else, then shake with ice and fine-strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Rising Sun',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Brandy',
      '.5 ounce Maraschino Liqueur',
      '.5 ounce Pineapple Juice',
      '.5 ounce Curaçao',
      '2 dashes Angostura Bitters',
      'Lemon Peel (Garnish)',
      '1 Strawberry (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a martini glass. Garnish with the lemon peel and strawberry.'
  },
  {
    drink_name: 'Rite Of Spring',
    source: 'PDT',
    specs: [
      '2 oz. Tanqueray Gin',
      '.75 oz. Vya Dry Vermouth',
      '.25 oz. Pickled Ramp Brine'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a pickled ramp.'
  },
  {
    drink_name: 'Ritz Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Cognac',
      '.5 ounce Cointreau',
      '.25 ounce Maraschino Liqueur',
      '.25 ounce Lemon Juice',
      'Champagne',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Stir the first four ingredients in a mixing glass. Strain into a martini glass and fill with Champagne. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Roasted Almond',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Amaretto',
      '.75 ounce Kahlúa',
      '.75 ounce Vodka',
      '2 ounces Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass.'
  },
  {
    drink_name: 'Rob Roy',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Scotch Whisky',
      '1 ounce Sweet Italian Vermouth',
      'dash Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Pour all the ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass and garnish with the lemon peel.'
  },
  {
    drink_name: 'Robert Johnson Swizzle',
    source: 'Death & Co',
    specs: [
      '2 ounces Evan Williams Single-Barrel Bourbon',
      '.75 ounce Otima 10-Year Tawny Port',
      '.5 ounce Lemon Juice',
      '.75 ounce Vanilla Syrup',
      '2 dashes Fee Brothers Whiskey Barrel-Aged Bitters',
      '3 dashes House Peychaud\'s Bitters',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients (except the bitters), then dump into a pilsner glass filled with crushed ice. Swizzle until cold. Add the bitters and swizzle them into the top of the drink. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Rock, Paper, Scissors',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Zacapa 23-Year Rum',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.5 ounce Otima 10-Year Tawny Port',
      '2.5 teaspoons Marie Brizard White Crème De Cacao',
      '2.5 teaspoons Alchemia Chocolate Vodka',
      '1 dash Bittermens Xocolatl Mole Bitters',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. No garnish.'
  },
  {
    drink_name: 'Romeo Y Julieta',
    source: 'PDT',
    specs: [
      'Aftel Tobacco Essence',
      '2 oz. Ron Zacapa Centenario 23 Rum',
      '.5 oz. Carpano Antica Sweet Vermouth',
      '.5 oz. Campari'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe rinsed with 4 spritzes of diluted Aftel Tobacco Essence. No garnish.'
  },
  {
    drink_name: 'Rosarita Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Tequila',
      '.5 ounce Crème De Cassis',
      '.25 ounce Lime Juice',
      '4 ounces Ginger Ale',
      'slice of Cucumber (Garnish)'
    ],
    instructions: 'Shake the first three ingredients and strain into an ice-filled highball glass. Fill with ginger ale. Garnish with the slice of cucumber.'
  },
  {
    drink_name: 'Rosarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Triple Sec',
      '.75 ounce Alizé Red Passion',
      '.75 ounce Tequila'
    ],
    instructions: 'Prepare in a rocks glass three-quarters full of ice, using the layering spoon on the rim of the glass. Pour slowly and carefully to prevent the layers from mixing. The ingredients are listed in the order they should be poured, the bottom layer listed first.'
  },
  {
    drink_name: 'Rose',
    source: 'PDT',
    specs: [
      '2 oz. Noilly Prat Dry Vermouth',
      '1 oz. Clear Creek Kirschwasser',
      '1 barspoon Bonne Maman Raspberry Preserves'
    ],
    instructions: 'Stir with ice, then fine-strain into a chilled coupe. Garnish with three brandied cherries on a pick.'
  },
  {
    drink_name: 'Rosetta',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Stolichnaya Ohranj Vodka',
      '.5 ounce Cointreau',
      '.75 ounce Campari',
      '1 ounce Orange Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake well with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Rosita',
    source: 'PDT',
    specs: [
      '1.5 oz. Partida Reposado Tequila',
      '.5 oz. Martini Sweet Vermouth',
      '.5 oz. Dolin Dry Vermouth',
      '.5 oz. Campari',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Rosy Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Citrus Vodka',
      '.5 ounce Cointreau',
      '.5 ounce Red Dubonnet',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Royal Bermuda Yacht Club Cocktail',
    source: 'PDT',
    specs: [
      '2 oz. Mount Gay Eclipse Amber Rum',
      '1 oz. Lime Juice',
      '.5 oz. Cointreau',
      '.5 oz. John D. Taylor\'s Velvet Falernum'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lime wheel.'
  },
  {
    drink_name: 'Royal Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Dry Vermouth',
      '.75 ounce Peter Heering Cherry Heering',
      'Flamed Lemon Peel (Garnish)'
    ],
    instructions: 'Stir with ice and strain into a chilled martini glass. Garnish with the flamed lemon peel.'
  },
  {
    drink_name: 'Royal Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lemon Juice',
      '1.5 ounces Simple Syrup',
      '1 Egg',
      'Soda Water'
    ],
    instructions: 'Shake all the ingredients except the soda with ice long and hard to completely emulsify the egg. Strain into a fizz or highball glass without ice, and top with the club soda.'
  },
  {
    drink_name: 'Royal Hawaiian',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Lemon Juice',
      '1 ounce Pineapple Juice',
      '.25 ounce Orgeat'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass. No garnish.'
  },
  {
    drink_name: 'Royal Romance',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Grand Marnier',
      '1 ounce Passion Fruit Juice',
      '2 dashes Grenadine',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Rum Julep',
    source: 'Death & Co',
    specs: [
      '.75 ounce Lemon Hart 151 Rum',
      '.75 ounce Lemon Hart Original Rum',
      '.5 ounce Appleton Estate V/X Rum',
      '.25 ounce Velvet Falernum',
      '.25 ounce Donn\'s Spices #2',
      '.5 ounce Orange Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Acacia Honey Syrup',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a julep tin filled with crushed ice. Garnish with the mint bouquet.'
  },
  {
    drink_name: 'Rum Runner',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 piece of Lime',
      '1 ounce Light Rum',
      '1 ounce Gold Rum',
      '2 ounces Pineapple Juice',
      '.5 ounce Lime Juice',
      '1 ounce Simple Syrup',
      '1 small Egg White',
      'dash Peychaud\'s Bitters',
      'dash Angostura Bitters',
      'Tropical Fruit (Garnish)'
    ],
    instructions: 'Bruise the lime in the bottom of the mixing glass, add the remaining ingredients, and shake well with ice. Serve over ice in a tall or collins glass. Garnish with tropical fruits.'
  },
  {
    drink_name: 'Rum Swizzle',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Barbados Rum',
      '.75 ounce Lime Juice',
      '1 ounce Simple Syrup',
      'dash Falernum',
      '3 dashes Angostura Bitters',
      'wheel of Lime (Garnish)'
    ],
    instructions: 'Swizzle the ingredients in a highball glass filled with crushed ice until they foam. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Run For The Roses',
    source: 'Death & Co',
    specs: [
      '.5 ounce Knappogue Castle 12-Year Irish Whiskey',
      '2 ounces Rose-Infused Lillet Rosé',
      '.5 ounce Massenez Kirsch Vieux Cherry Brandy',
      '1 teaspoon Rich Cane Sugar Syrup',
      'Dry Champagne'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a coupe. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Rust Belt',
    source: 'PDT',
    specs: [
      '1.5 oz. Barbancourt 8-Year-Old Rhum',
      '.5 oz. Navan Vanilla Liqueur',
      '.5 oz. Lemon Juice',
      '.5 oz. Lime Juice',
      '.25 oz. Kassatly Chtaura Orgeat',
      '1 Egg White'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled egg coupe. Garnish with 2 spritzes of Angostura Bitters over a PDT stencil.'
  },
  {
    drink_name: 'Rusty Nail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Scotch Whisky',
      '.75 ounce Drambuie'
    ],
    instructions: 'Pour the scotch over ice and float the Drambuie on top. No garnish.'
  },
  {
    drink_name: 'Rye Club Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Old Potrero Rye Whiskey',
      '1 ounce Curaçao',
      'dash Orange Bitters (or Angostura Bitters)'
    ],
    instructions: 'Shake all the ingredients with ice and serve over shaved ice.'
  },
  {
    drink_name: 'Rye Witch',
    source: 'PDT',
    specs: [
      '2 oz. Rittenhouse Bonded Rye Whiskey',
      '.25 oz. Strega Liqueur',
      '.25 oz. Lustau Palo Cortado Sherry',
      '1 Cube Sugar',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Add the bitters and sugar cube to a mixing glass and muddle to a paste. Add everything else, then stir with ice and strain into a chilled rocks glass. Twist an orange peel over the surface and discard.'
  },
  {
    drink_name: 'Sade\'s Taboo',
    source: 'Death & Co',
    specs: [
      '2 ounces Hine H Cognac',
      '.75 ounce Cocchi Americano',
      '.75 ounce Dolin Rouge Vermouth',
      '1 dash Bittermens Hopped Grapefruit Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Sage Old Buck',
    source: 'PDT',
    specs: [
      '1.5 oz. Benromach 12-Year-Old Single Malt Scotch Whisky',
      '.75 oz. Lemon Juice',
      '.75 oz. House Ginger Beer',
      '.75 oz. Simple Syrup',
      '.5 oz. Belle De Brillet Pear Liqueur',
      '.25 oz. Eurovanille Vanilla Syrup',
      '8 Whole Black Peppercorn'
    ],
    instructions: 'Muddle the black peppercorns with the simple syrup. Add everything else, then shake with ice and finestrain into a chilled Collins glass filled with ice. Garnish with a smacked sage leaf.'
  },
  {
    drink_name: 'Sake-Tini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Gin',
      '.25 ounce Dry Sake',
      '.25 ounce Curaçao'
    ],
    instructions: 'Assemble the three ingredients in a mixing glass, Ill with ice. Stir and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Salt-And-Pepper Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '3 ounces Grapefruit Juice',
      '3 dashes Angostura Bitters'
    ],
    instructions: 'Rim a highball glass by rubbing the lemon or lime piece around the outside rim of the glass to dampen it and then dusting the rim with coarse salt. (Do not use table salt.) Fill a rimmed highball glass with ice. Shake all the ingredients with ice and strain into the prepared glass.'
  },
  {
    drink_name: 'Salt-And-Pepper Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lemon Juice',
      '.75 ounce Grapefruit Juice',
      '1 ounce Simple Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass rimmed with coarse salt.'
  },
  {
    drink_name: 'Salty Dog',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 piece of Lemon Or Lime',
      'Coarse Salt, For Rimming',
      '1.5 ounces Vodka',
      'Grapefruit Juice'
    ],
    instructions: 'Rim a highball glass by rubbing the lemon or lime piece around the outside rim of the glass to dampen it and then dusting the rim with coarse salt. (Do not use table salt.) Fill the glass with ice and build the drink. No garnish.'
  },
  {
    drink_name: 'San Salvador',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Dark Rum',
      '1 ounce Curaçao',
      '.5 ounce Lime Juice',
      '1.5 ounces Orange Juice',
      'slice of Orange (Garnish)',
      'slice of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into an ice-filled double old-fashioned glass. Garnish with the orange and lime.'
  },
  {
    drink_name: 'Sangria Swizzle',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Dried Currant-Infused Wild Turkey Rye Whiskey',
      '1 ounce Red Rioja Wine',
      '.75 ounce Cointreau',
      '.5 ounce Lime Juice',
      '1 teaspoon Simple Syrup',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Wheel of Orange (Garnish)'
    ],
    instructions: 'Combine all the ingredients in a pilsner glass and swizzle while adding crushed ice little by little. Garnish with the orange wheel and serve with a straw.'
  },
  {
    drink_name: 'Saramago',
    source: 'Death & Co',
    specs: [
      'Del Maguey Vida Mezcal',
      '2 ounces Siembra Azul Blanco Tequila',
      '.75 ounce Dolin Blanc Vermouth',
      '.5 ounce St-Germain',
      '1 dash House Orange Bitters',
      'Grapefruit Peel'
    ],
    instructions: 'Rinse a coupe with mezcal and dump. Stir the remaining ingredients (except the grapefruit twist) over ice, then strain into the coupe. Squeeze the grapefruit twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Saratoga Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 to 4 1-inch cubes of Pineapple',
      '2 Strawberry',
      '.25 ounce Maraschino Liqueur',
      '3 dashes Angostura Bitters',
      '.5 ounce Simple Syrup',
      '1.5 ounces Cognac',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Muddle the fruit in the bottom of a mixing glass with the maraschino liqueur, bitters, and syrup. Add the Cognac and ice cubes and shake well. Strain over ice into a stem glass with ice and top with Champagne. Garnish with lemon peel.'
  },
  {
    drink_name: 'Satan\'s Whiskers',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Gin',
      '.5 ounce Sweet Vermouth',
      '.5 ounce Dry Vermouth',
      '.5 ounce Grand Marnier',
      '1 ounce Orange Juice',
      'dash Angostura Or Orange Bitters',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Saturday Morning Flip',
    source: 'Death & Co',
    specs: [
      '1 ounce Appleton Estate V/X Rum',
      '1 ounce Gosling\'s Black Seal Rum',
      '.75 ounce Ruby Port',
      '1 teaspoon Espresso-Infused Demerara Syrup',
      '1 Egg Yolk',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Saz Who?',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Cruzan Single-Barrel Rum',
      '.5 ounce Clear Creek Pear Brandy',
      '2 dashes Vieux Pontarlier Absinthe',
      '1 teaspoon Rich Demerara Syrup',
      '4 dashes House Peychaud\'s Bitters',
      '1 dash Angostura Bitters',
      'Lemon Peel'
    ],
    instructions: 'Stir all the ingredients (except the lemon twist) over ice, then strain into a double rocks glass. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Sazerac',
    source: 'The Craft of the Cocktail',
    specs: [
      'splash of Ricard',
      '1 ounce VS Cognac',
      '1 ounce Rye Whiskey',
      '.5 ounce Simple Syrup',
      '2 dashes Peychaud\'s Bitters',
      '2 dashes Angostura Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Chill one rocks glass while preparing the drink in another. Splash the Ricard into the second glass and swirl it, then pour it out. Add the Cognac, rye, Simple Syrup, and the two kinds of bitters. Stir with ice cubes to chill. Strain into the chilled rocks glass and garnish with the lemon peel.'
  },
  {
    drink_name: 'Scarlett O\'Hara',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Southern Comfort',
      '.5 ounce Lime Juice',
      '1 ounce Cranberry Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass.'
  },
  {
    drink_name: 'Scarlett\'s Torch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Bourbon Whiskey',
      '.5 ounce Marie Brizard Peach Liqueur',
      '.25 ounce Simple Syrup',
      '.25 ounce Lemon Juice',
      '.5 ounce Cranberry Juice',
      '.5 ounce Orange Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Schuman\'s Alley',
    source: 'Death & Co',
    specs: [
      '.75 ounce Contratta Vermouth Bianco',
      '.75 ounce Dolin Dry Vermouth',
      '.75 ounce Cocchi Americano',
      '1 ounce Fords Gin',
      '.5 ounce Yellow Chartreuse',
      '1 dash Bittermens Hopped Grapefruit Bitters',
      '1 dash Dale Degroff\'s Pimento Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. To garnish, squeeze the lemon twist over the drink, then roll it up, skewer it on a cocktail pick, and drop it in the drink.'
  },
  {
    drink_name: 'Scofflaw',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Templeton Rye Whiskey',
      '.5 ounce Dolin Blanc Vermouth',
      '.5 ounce Dolin Dry Vermouth',
      '.5 ounce Lemon Juice',
      '.5 ounce Grenadine'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Scorpino',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Vodka',
      '2 ounces Heavy Cream',
      '1 ounce Cointreau',
      '1 big scoop of Lemon Italian Ice'
    ],
    instructions: 'Blend all the ingredients and serve.'
  },
  {
    drink_name: 'Scorpion',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 wedges of Pineapple',
      '2 Cherry',
      '1 ounce Rum',
      '1 ounce Brandy',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '1 ounce Orange Juice',
      '.5 ounce Orgeat'
    ],
    instructions: 'Bruise 1 pineapple wedge and 1 cherry in the bottom of a mixing glass, add the rest of the ingredients, and shake well with ice. Strain into an ice-filled bucket or double old-fashioned glass. Garnish with the remaining pineapple and cherry.'
  },
  {
    drink_name: 'Scotch Dram',
    source: 'Death & Co',
    specs: [
      '2 ounces Compass Box Asyla Scotch Whisky',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Drambuie',
      '1 dash House Peychaud\'s Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Scotch Lady',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Famous Grouse Scotch Whisky',
      '.5 ounce Laird\'s Bonded Apple Brandy',
      '.75 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '.25 ounce Grenadine',
      '1 Egg White',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a coupe and garnish with the cherry.'
  },
  {
    drink_name: 'Screaming Orgasm',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Vodka',
      '1 ounce Amaretto',
      '1 ounce Kahlúa',
      '1 ounce Baileys Irish Cream',
      '1 ounce Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and serve over ice in a rocks glass. The Mud Slide can also be served as a frozen drink. Blend the four ingredients with three-quarters cup of ice and serve in a large goblet.'
  },
  {
    drink_name: 'Screwdriver',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '5 ounces Orange Juice',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Build over ice in a highball glass. Garnish with the orange slice.'
  },
  {
    drink_name: 'Sea B3',
    source: 'Death & Co',
    specs: [
      '2 ounces Gosling\'s Black Seal Rum',
      '.5 ounce Lemon Juice',
      '.5 ounce Orange Juice',
      '.5 ounce Grenadine'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Sea Breeze',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '4 ounces Grapefruit Juice',
      '1.5 ounces Cranberry Juice',
      'wedge of Lime (Garnish)'
    ],
    instructions: 'Pour the vodka into an iced highball glass. Fill partially with the grapefruit juice and top with the cranberry juice. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Seda De Naranja',
    source: 'Death & Co',
    specs: [
      '.75 ounce El Tesoro Reposado Tequila',
      '.75 ounce Grand Marnier',
      '1 dash House Orange Bitters',
      'Dry Champagne'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a coupe. Top with champagne. No garnish.'
  },
  {
    drink_name: 'Seelbach Cocktail',
    source: 'PDT',
    specs: [
      '1 oz. Bulleit Bourbon Whiskey',
      '.5 oz. Cointreau',
      '3 dashes Peychaud\'s Bitters',
      '2 dashes Angostura Bitters',
      '2 oz. Moët Imperial Champagne'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Top with 2 oz. Moët Imperial Champagne. Garnish with an orange twist.'
  },
  {
    drink_name: 'Seersucker',
    source: 'Death & Co',
    specs: [
      '1 Strawberry',
      '2 ounces Flor De Caña Extra-Dry White Rum',
      '1 ounce Lemon Juice',
      '.5 ounce Cinnamon Bark Syrup',
      'Strawberry (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the strawberry. Add the remaining ingredients and short shake with 3 ice cubes. Strain into a pilsner glass filled with crushed ice. Garnish with the strawberry and serve with a straw.'
  },
  {
    drink_name: 'Sentimental Journey',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Tanqueray No. Ten Gin',
      '1 ounce Morro Bay Chardonnay',
      '.5 ounce Cinnamon Bark Syrup',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Sergio Leone',
    source: 'Death & Co',
    specs: [
      '2 ounces El Tesoro Reposado Tequila',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.25 ounce Solerno Blood Orange Liqueur',
      '1 dash Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Sevilla',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 ounces Stolichnaya Ohranj Vodka',
      '.75 ounce Lustau East India Solera Reserva Sherry',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Stir with ice to chill and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Sex On The Beach',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Vodka',
      '.5 ounce Peachtree Schnapps',
      '.25 ounce Chambord Raspberry Liqueur',
      '2 ounces Cranberry Juice',
      '2 ounces Pineapple Juice'
    ],
    instructions: 'Shake all the ingredients and strain into an iced highball glass.'
  },
  {
    drink_name: 'Sforzando',
    source: 'Death & Co',
    specs: [
      '1 ounce Rittenhouse 100 Rye Whiskey',
      '.75 ounce Del Maguey Chichicapa Mezcal',
      '.5 ounce Bénédictine',
      '.5 ounce Dolin Dry Vermouth',
      '2 dashes Bittermens Xocolatl Mole Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Shaddock Rose',
    source: 'PDT',
    specs: [
      '2 oz. El Tesoro Reposado Tequila',
      '.5 oz. Small Hand Foods Grapefruit Cordial',
      '1 dash Peychaud\'s Bitters',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Shandygaff',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 pint Ale',
      '.5 pint Ginger Beer',
      '1 ounce Curaçao',
      '.5 ounce Lemon Juice',
      '1 Lemon Zest (Garnish)'
    ],
    instructions: 'Build ingredients in a mug and garnish with the lemon zest.'
  },
  {
    drink_name: 'Shanty Town',
    source: 'Death & Co',
    specs: [
      '1 ounce Perry\'s Tot Navy-Strength Gin',
      'Doc\'s Hard Apple Cider'
    ],
    instructions: 'Fill a pilsner glass with ice cubes and add the gin. Top with cider and serve with a straw.'
  },
  {
    drink_name: 'Shattered Glasser',
    source: 'Death & Co',
    specs: [
      '1 ounce El Tesoro Reposado Tequila',
      '.5 ounce Los Amantes Joven Mezcal',
      '.75 ounce Carpano Antica Formula Vermouth',
      '.5 ounce Van Oosten Batavia Arrack',
      '.25 ounce St. Elizabeth Allspice Dram',
      '.25 ounce Bénédictine',
      '2 dashes Bittermens Xocolatl Mole Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Sherry Cobbler',
    source: 'The Craft of the Cocktail',
    specs: [
      '2  wedges Pineapple',
      '2 slices Orange',
      '2 wedges Lemon',
      '.5 ounce Maraschino Liqueur',
      '3 ounces Medium Sherry',
      '.5 ounce Lemon Juice',
      '2 ounces Orange Juice'
    ],
    instructions: 'In the bottom of a bar glass, muddle the skinless pineapple wedge, 1 piece of orange, and 1 piece of lemon with the maraschino liqueur. Add the sherry and the juices and shake well with ice. Strain into a goblet filled with crushed ice. Garnish with the remaining pineapple wedge, an orange wedge, and a lemon wedge.'
  },
  {
    drink_name: 'Sherry Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Fino Sherry',
      '.5 ounce Absinthe',
      '.5 ounce Maraschino Liqueur',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Shiso Delicious',
    source: 'PDT',
    specs: [
      '1.75 oz. Aviation Gin',
      '.75 oz. Lemon Juice',
      '.5 oz. Grapefruit Juice',
      '.25 oz. Martinique Sugar Cane Syrup',
      '2 Leaves of Shiso',
      '1 4-inch long slice Red Bell Pepper'
    ],
    instructions: 'Muddle the shiso, red bell pepper, and cane syrup. Add everything else, then shake and fine-strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Shiso Malt Sour',
    source: 'PDT',
    specs: [
      '2 oz. Yamazaki 12-Year-Old Japanese Single Malt Whisky',
      '.75 oz. Lime Juice',
      '.75 oz. Simple Syrup',
      '.25 oz. Vieux Pontarlier Absinthe',
      '2 Leaves of Shiso',
      '1 Egg White',
      '1 leaf of Shiso (Garnish)'
    ],
    instructions: 'Add the shiso and simple syrup to a mixing glass and muddle. Add everything else, then dry-shake. Shake with ice and fine-strain into a chilled egg coupe. Garnish with a shiso leaf.'
  },
  {
    drink_name: 'Shoots And Ladders',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Basil-Infused Dolin Blanc Vermouth',
      '1.5 ounces Lustau Amontillado Sherry',
      '.5 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.5 teaspoon Rich Cane Sugar Syrup'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a rocks glass. No garnish.'
  },
  {
    drink_name: 'Short Rib',
    source: 'Death & Co',
    specs: [
      '2 ounces Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.75 ounce Lime Juice',
      '1 ounce Simple Syrup',
      '.75 teaspoon Pomegranate Molasses'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Shruff\'s End',
    source: 'Death & Co',
    specs: [
      '1 ounce Laphroaig 10-Year Scotch Whisky',
      '1 ounce Laird\'s Bonded Apple Brandy',
      '.5 ounce Bénédictine',
      '2 dashes House Peychaud\'s Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Sidecar',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Brandy',
      '1 ounce Cointreau',
      '.75 ounce Lemon Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into an iced old- fashioned glass. Garnish with the flamed orange peel. Note: If served "up," strain into a small cocktail glass with a sugared rim.'
  },
  {
    drink_name: 'Sidewinder',
    source: 'Death & Co',
    specs: [
      '2 ounces Hine H Cognac',
      '.5 ounce Laird\'s Bonded Apple Brandy',
      '.25 ounce Bénédictine',
      '.25 ounce Yellow Chartreuse',
      '1 dash Vieux Pontarlier Absinthe',
      '1 dash House Peychaud\'s Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Siesta',
    source: 'PDT',
    specs: [
      '2 oz. El Tesoro Platinum Tequila',
      '.5 oz. Campari',
      '.5 oz. Lime Juice',
      '.5 oz. Grapefruit Juice',
      '.5 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a grapefruit twist.'
  },
  {
    drink_name: 'Silk Road',
    source: 'PDT',
    specs: [
      '2 oz. Black Sesame-Infused Krogstad Aquavit',
      '.25 oz. Caramelized Simple Syrup',
      '1 dash Angostura Bitters',
      '1 dash Peychaud\'s Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a flamed orange twist.'
  },
  {
    drink_name: 'Silver Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lemon Juice',
      '1.5 ounces Simple Syrup',
      '1 small Egg White',
      '3 ounces Soda Water'
    ],
    instructions: 'Shake all the ingredients except the soda with ice long and hard to completely emulsify the egg. Strain into a fizz or highball glass without ice and top with soda.'
  },
  {
    drink_name: 'Silver Lining',
    source: 'PDT',
    specs: [
      '1.5 oz. Old Overholt Rye Whiskey',
      '.75 oz. Licor 43',
      '.75 oz. Lemon Juice',
      '.25 oz. Simple Syrup',
      '1 Egg White',
      '1 oz. Club Soda'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled fizz glass. Top with 1 oz. club soda. No garnish.'
  },
  {
    drink_name: 'Silver Monk',
    source: 'Death & Co',
    specs: [
      '2 wheels of Cucumber',
      '8 leaves of Mint',
      'pinch of Kosher Salt',
      '2 ounces Siembra Azul Blanco Tequila',
      '.75 ounce Yellow Chartreuse',
      '.75 ounce Lime Juice',
      '.5 ounce Simple Syrup'
    ],
    instructions: 'In a shaker, muddle the cucumber wheels with the mint and salt. Add the remaining ingredients and shake with ice. Double strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Silver Root Beer Fizz',
    source: 'PDT',
    specs: [
      '1 oz. Mount Gay Eclipse White Rum',
      '1 oz. Smith & Cross Jamaican Rum',
      '.5 oz. Lemon Juice',
      '.5 oz. Pineapple Juice',
      '1 Egg White',
      '2 oz. Fitz\'s Root Beer'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled fizz glass. Top with 2 oz. Fitz\'s Root Beer. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Silver Sangaree',
    source: 'PDT',
    specs: [
      '1.5 oz. Paumanok Cabernet Franc',
      '.75 oz. Lemon Juice',
      '.5 oz. Famous Grouse Blended Scotch Whisky',
      '.5 oz. Dow\'s Ruby Port',
      '.5 oz. Clove Syrup',
      '4 Kirsch Brandied Cherry',
      '1 Egg White'
    ],
    instructions: 'Add the cherries and clove syrup to a mixing glass and muddle. Add everything else, then dry-shake. Shake with ice and strain into a chilled wine glass. Garnish with grated nutmeg.'
  },
  {
    drink_name: 'Singapore Sling',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Peter Heering Cherry Heering',
      '.25 ounce Cointreau',
      '.25 ounce Bénédictine',
      '2 ounces Pineapple Juice',
      'dash Angostura Bitters',
      '2 dashes Grenadine',
      '.5 ounce Lime Juice',
      'Soda Water (Optional)',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients except the soda with ice and strain into a highball glass. Top with soda. Garnish with the orange slice and cherry. Note: All fruit punch\u0096style drinks can be topped with soda as an option.'
  },
  {
    drink_name: 'Single Malt Sangaree',
    source: 'PDT',
    specs: [
      '2 oz. Paumanok Cabernet Franc',
      '1 oz. Oban 14-Year-Old Single Malt Scotch Whisky',
      '1 oz. Red Dubonnet',
      '.75 oz. Grand Marnier',
      '1 barspoon Demerara Syrup'
    ],
    instructions: 'Heat until steaming. Pour into a pre-heated heatproof mug. Twist an orange peel over the surface and discard. Garnish with a cinnamon stick.'
  },
  {
    drink_name: 'Single Origin',
    source: 'Death & Co',
    specs: [
      '2 ounces Cacao Nib-Infused Cabeza Blanco Tequila',
      '1 teaspoon Galliano Ristretto',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lemon Juice',
      '.5 ounce Rich Cane Sugar Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Slap \'n\' Pickle',
    source: 'Death & Co',
    specs: [
      '3 wheels of Cucumber',
      '2 ounces Krogstad Aquavit',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      '1 teaspoon Grenadine',
      '2 dashes Bitter Truth Celery Bitters',
      '1 spear Cucumber (Garnish)'
    ],
    instructions: 'In a shaker, muddle the cucumber wheels. Add the remaining ingredients and shake with ice, then double strain into a double rocks glass over 1 large ice cube. Garnish with the cucumber spear.'
  },
  {
    drink_name: 'Sleepy Hollow Fizz',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Flor De Caña 7-Year Rum',
      '.5 ounce El Dorado High-Strength 151 Rum',
      '.5 ounce Lemon Juice',
      '.5 ounce Maple Syrup',
      '1 Egg Yolk',
      '2 teaspoons Pumpkin Purée',
      'Club Soda'
    ],
    instructions: 'Dry shake all the ingredients (except the club soda), then shake again with ice. Strain into a fizz glass and top with club soda. No garnish.'
  },
  {
    drink_name: 'Sling Of Aphrodite',
    source: 'Death & Co',
    specs: [
      '2 ounces La Favorite Rhum Agricole Ambre',
      '.5 ounce Clear Creek Pear Brandy',
      '1 ounce Fuji Apple Juice',
      '.25 ounce Lemon Juice',
      '.5 ounce Cinnamon Bark Syrup',
      'Fan of Apple (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a highball glass filled with ice cubes. Garnish with the apple fan and serve with a straw.'
  },
  {
    drink_name: 'Slippery Nipple',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Baileys Irish Cream',
      '.75 ounce Sambuca',
      '.75 ounce Brandy'
    ],
    instructions: 'Layer in a cordial glass as listed.'
  },
  {
    drink_name: 'Sloe Comfortable Screw',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Sloe Gin',
      '1 ounce Southern Comfort',
      '4 ounces Orange Juice',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Build in a highball glass. Garnish with an orange slice.'
  },
  {
    drink_name: 'Sloe Gin Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Sloe Gin',
      '1 ounce Gin',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '3 to 4 ounces Soda Water',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake the first four ingredients with ice and strain into an ice- filled highball glass. Top with soda and garnish with the orange and cherry.'
  },
  {
    drink_name: 'Sloe Scobeyville Sling',
    source: 'Death & Co',
    specs: [
      '2 ounces Laird\'s Bonded Apple Brandy',
      '1 ounce Plymouth Sloe Gin',
      '.5 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '2 dashes Peychaud\'s Bitters',
      'Club Soda',
      'Slice of Fuji Apple (Garnish)'
    ],
    instructions: 'Short shake all the ingredients (except the club soda) with 3 ice cubes, then strain into a highball glass filled with ice cubes. Top with club soda. Garnish with the apple slice and serve with a straw.'
  },
  {
    drink_name: 'Smith And Kearns',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Kahlúa',
      '3 ounces Half-and-half',
      'Soda Water'
    ],
    instructions: 'Build  an  iced  highball  glass  and  top  with  soda.'
  },
  {
    drink_name: 'Smoked Horchata',
    source: 'Death & Co',
    specs: [
      '1 ounce Fortaleza Reposado Tequila',
      '1 ounce Del Maguey Crema De Mezcal',
      '.25 ounce Cinnamon Bark Syrup',
      '2 ounces House Horchata',
      '1 dash Angostura Bitters',
      '1 stick of Cinnamon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the cinnamon stick.'
  },
  {
    drink_name: 'Smoked Julep',
    source: 'Death & Co',
    specs: [
      '1 ounce Laphroaig 12-Year Scotch Whisky',
      '1 ounce Laird\'s Bonded Apple Brandy',
      '.25 ounce Maple Syrup',
      'Fan of Apple (Garnish)',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Put all the ingredients in a julep tin. Fill the tin halfway with crushed ice. Stir with a teaspoon, churning the ice as you go, for about 10 seconds, holding the tin by the rim so the entire tin can eventually frost up. Add more crushed ice to fill the tin two-thirds full and stir until the tin is completely frosted. Add more ice to form a cone above the rim. Garnish with the apple fan and mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Smoky Grove',
    source: 'PDT',
    specs: [
      '2 oz. Compass Box Peat Monster Blended Malt Scotch Whisky',
      '.5 oz. Carpano Antica Sweet Vermouth',
      '.5 oz. Dolin Dry Vermouth',
      '1 dash Angostura Bitters',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a flamed orange twist.'
  },
  {
    drink_name: 'Smoky Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Gin',
      'splash of Smoky Blended Scotch Whisky',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir both ingredients with ice to chill and garnish with the lemon twist.'
  },
  {
    drink_name: 'Snake Hips Swizzle',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hine H Cognac',
      '.25 ounce Grand Marnier',
      '.5 ounce Morenita Cream Sherry',
      '.5 ounce Lemon Juice',
      '.5 ounce Maple Syrup',
      '1 teaspoon Cinnamon Bark Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Dry shake all the ingredients (except the bitters), then dump into a pilsner glass filled with crushed ice. Swizzle the drink until cold. Add the bitters and swizzle them into the top of the drink. Serve with a straw. No garnish.'
  },
  {
    drink_name: 'Soho Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Vodka',
      '.5 ounce Stolichnaya Vanil Vodka',
      '.5 ounce Curaçao',
      'Dash Orange Bitters',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Solera Sidecar',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hine H Cognac',
      '.5 ounce East India Solera Sherry',
      '.25 ounce Grand Marnier',
      '.25 ounce Lazzaroni Amaretto',
      '.5 ounce Lemon Juice',
      '.25 ounce Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Solstice',
    source: 'PDT',
    specs: [
      '1.5 oz. Rittenhouse Bonded Rye Whiskey',
      '.5 oz. Laird\'s Bonded Apple Brandy',
      '.5 oz. Amaro Nonino',
      '.5 oz. Dubonnet Rouge',
      '.25 oz. House Grenadine'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Soul Clench',
    source: 'Death & Co',
    specs: [
      '2 ounces Waqar Pisco',
      '.75 ounce Dolin Dry Vermouth',
      '.5 ounce Combier Pamplemousse Rose Liqueur',
      '.5 ounce St-Germain',
      '.25 ounce Velvet Falernum',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Sour Apple Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Citrus Vodka',
      '.5 ounce Sour Apple Pucker',
      '.5 ounce Cointreau',
      '.75 ounce Lemon Juice',
      'Thin slice Granny Smith Apple (Garnish)'
    ],
    instructions: 'Assemble all the ingredients in a cocktail shaker and shake well with ice. Strain into a chilled martini glass and garnish with the apple slice.'
  },
  {
    drink_name: 'South Beach',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Campari',
      '.75 ounce Amaretto',
      '2 ounces Orange Juice',
      '.5 ounce Simple Syrup (Optional)',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'South Coast Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Full-bodied Scotch Whisky',
      '.5 ounce Curaçao',
      '.5 ounce Lemon Juice',
      '.25 ounce Simple Syrup',
      '2.5 ounces Soda Water',
      '2 Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Mix all the ingredients in a mixing glass with ice. Stir gently and strain into two chilled martini glasses. Garnish each with the flamed orange peel.'
  },
  {
    drink_name: 'South Of The Border',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Malibu Coconut Rum',
      '.5 ounce Amaretto',
      '5 ounces Pineapple Juice'
    ],
    instructions: 'Shake all the ingredients and strain into a martini glass.'
  },
  {
    drink_name: 'South Side',
    source: 'Death & Co',
    specs: [
      '5 leaves of Mint',
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters',
      '1 leaf Mint (Garnish)'
    ],
    instructions: 'In a cocktail shaker, gently muddle the mint. Add the remaining ingredients, shake with ice, and strain into a coupe. Garnish with a mint leaf.'
  },
  {
    drink_name: 'South Sider',
    source: 'Death & Co',
    specs: [
      '2 ounces El Dorado 12-Year Rum',
      '1 ounce Carpano Antica Formula Vermouth',
      '1 dash Angostura Bitters',
      '1 dash House Peychaud\'s Bitters',
      '.5 ounce Dry Champagne',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a coupe. Top with the champagne. Garnish with the orange twist.'
  },
  {
    drink_name: 'South Slope',
    source: 'PDT',
    specs: [
      '.75 oz. Beefeater Gin',
      '.75 oz. Aperol',
      '.75 oz. Lillet Blanc',
      '.5 oz. Marie Brizard Orange Curaçao',
      '.5 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Southern Exposure',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.5 ounce Los Amantes Joven Mezcal',
      '.5 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '.5 ounce Red Bell Pepper Purée',
      'pinch of Kosher Salt'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Southside',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 sprigs of Mint',
      '2 pieces Lime',
      '.75 ounce Lime Juice',
      '1 ounce Simple Syrup',
      '2 ounces Gin',
      '3 or 4 ounces Soda Water'
    ],
    instructions: 'Muddle 1 of the mint sprigs with the limes, lime juice, and Simple Syrup in the bottom of a bar glass. Add the gin and shake well. Pour into a goblet over crushed ice and stir until the outside of the glass frosts. Top with soda water and garnish with the remaining sprig of mint.'
  },
  {
    drink_name: 'Spaghetti Western',
    source: 'Death & Co',
    specs: [
      '1 ounce Siete Leguas Reposado Tequila',
      '.5 ounce Los Nahuales Mezcal',
      '.75 ounce Amaro Nonino',
      '1 dash House Orange Bitters',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into an old-fashioned glass over 1 large ice cube. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Spanish Caravan',
    source: 'Death & Co',
    specs: [
      '2 ounces Lapsang Souchong-Infused Siembra Azul Blanco Tequila',
      '.25 ounce Lazzaroni Amaretto',
      '.25 ounce Grand Marnier',
      '.25 ounce Bénédictine',
      '.25 ounce Cointreau',
      '1 dash Angostura Orange Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'Sparkling Hunt Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '.25 ounce Light Rum',
      '.5 ounce Amaretto Di Saronno',
      '.5 ounce Marie Brizard Cherry Liqueur',
      '1 ounce Orange Juice',
      '3 ounces Champagne'
    ],
    instructions: 'Chill the first four ingredients and strain into a champagne glass. Top with the Champagne. No garnish.'
  },
  {
    drink_name: 'Spice Market',
    source: 'PDT',
    specs: [
      '2 oz. Masumi Arabashiri Sake',
      '1 oz. Beefeater 24 Gin',
      '1 barspoon John D. Taylor\'s Velvet Falernum'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a spritz of diluted Aftel Clove Essence.'
  },
  {
    drink_name: 'Spicy Paloma',
    source: 'Death & Co',
    specs: [
      'Rim with Kosher Salt (Garnish)',
      '2 ounces Jalapeño-Infused Siembra Azul Blanco Tequila',
      '1 ounce Grapefruit Juice',
      '.75 ounce Lime Juice',
      '.5 ounce Simple Syrup',
      'Club Soda',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Rim a highball glass with kosher salt. Shake all the ingredients (except the club soda), then strain into a highball glass filled with ice cubes. Top with club soda. Garnish with the lime wheel and serve with a straw.'
  },
  {
    drink_name: 'St. Columbus Rill',
    source: 'Death & Co',
    specs: [
      '2 ounces Bushmills Irish Whiskey',
      '.75 ounce Dolin Blanc Vermouth',
      '.25 ounce Green Chartreuse',
      '.25 ounce Luxardo Maraschino Liqueur'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'St. James Infirmary',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Plantation Barbados 5-Year Rum',
      '.5 ounce St. James Royal Ambre Rhum Agricole',
      '.5 ounce Cocchi Vermouth Di Torino',
      '.5 ounce Morenita Cream Sherry',
      '1 teaspoon Simple Syrup',
      '2 dashes Bittermens \'Elemakule Tiki Bitters',
      '1 dash Bitter Truth Jerry Thomas\' Own Decanter Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the orange twist.'
  },
  {
    drink_name: 'St. Matilda',
    source: 'Death & Co',
    specs: [
      'cubed half of a Bartlett Pear',
      '2 ounces Siembra Azul Blanco Tequila',
      '.25 ounce Mathilde Poire Pear Liqueur',
      '.5 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      'Slice of Bartlett Pear (Garnish)'
    ],
    instructions: 'In a shaker, muddle the pear. Add the remaining ingredients and shake with ice. Double strain into a coupe. Garnish with the pear slice.'
  },
  {
    drink_name: 'St. Rita',
    source: 'PDT',
    specs: [
      '1.5 oz. Clear Creek Plum Brandy',
      '.75 oz. Lime Juice',
      '.5 oz. Zwack Liqueur',
      '.5 oz. Honey Syrup',
      '2 oz. Moët Imperial Champagne'
    ],
    instructions: 'Shake with ice and strain into a chilled egg coupe. Top with 2 oz. Moët Imperial Champagne. Garnish with a spritz of Marivani lavender essence and an edible orchid.'
  },
  {
    drink_name: 'Staggerac',
    source: 'PDT',
    specs: [
      '2 oz. George T. Stagg Bourbon Whiskey',
      '3 dashes Peychaud\'s Bitters',
      '2 dashes Angostura Bitters',
      '1 cube Sugar',
      'Edouard Absinthe'
    ],
    instructions: 'Muddle the sugar cube and bitters into a paste. Add everything else, then stir with ice and strain into a chilled, Edouard Absinthe-rinsed rocks glass. Twist a lemon peel over the surface of the drink and discard.'
  },
  {
    drink_name: 'Star Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Applejack',
      '1 ounce Sweet Italian Vermouth',
      '2 dashes Angostura Bitters',
      'Cherry (Garnish)'
    ],
    instructions: 'Pour all the ingredients over ice in a mixing glass and stir as you would a Martini. Strain into a chilled cocktail glass. Garnish with the cherry.'
  },
  {
    drink_name: 'Statesman',
    source: 'PDT',
    specs: [
      '2 oz. Beefeater 24 Gin',
      '.5 oz. Rothman & Winter Orchard Pear Liqueur',
      '1 barspoon Green Chartreuse',
      '1 dash Regan\'s Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Steeplechase',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 or 4 leaves of Mint',
      '.25 ounce Blackberry Brandy',
      '.25 ounce Curaçao',
      '2 ounces Bourbon Whiskey',
      '2 dashes Angostura Bitters',
      '2 ounces Orange Juice',
      '1 sprig of Mint (Garnish)'
    ],
    instructions: 'Muddle the mint leaves and the two liqueurs in the bottom of a mixing glass. Add the rest of the ingredients and shake with ice. Strain into a rocks glass and garnish with the sprig of mint.'
  },
  {
    drink_name: 'Stella\'s Rose',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Bourbon Whiskey',
      '2 dashes Grenadine',
      '2 dashes Peychaud\'s Bitters',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Stick The Landing',
    source: 'Death & Co',
    specs: [
      '1 ounce Louis Royer Force 53 Cognac',
      '1 ounce Redbreast 12-Year Irish Whiskey',
      '1 teaspoon Massenez Crème De Pêche Peach Liqueur',
      '.75 ounce Lemon Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Stilletto',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Amaretto',
      '.5 ounce Marie Brizard Banana Liqueur',
      '1 ounce Orange Juice',
      '1 ounce Pineapple Juice',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and serve up in a chilled cocktail glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Stinger',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Cognac',
      '1 ounce White Crème De Menthe'
    ],
    instructions: 'Shake both ingredients with ice and strain into an old-fashioned glass filled with crushed ice.'
  },
  {
    drink_name: 'Stolen Huffy',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Red Thai Chile-Infused Rittenhouse Rye Whiskey',
      '1 teaspoon Del Maguey Chichicapa Mezcal',
      '.75 ounce House Sweet Vermouth',
      '.5 ounce Pierre Ferrand Dry Curaçao',
      '1 teaspoon Rich Cane Sugar Syrup',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. No garnish.'
  },
  {
    drink_name: 'Stone Fence',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Maker\'s Mark Bourbon Whiskey',
      '5 ounces Apple Cider',
      '.5 ounce Lemon Juice',
      '3 dashes Simple Syrup (Optional)',
      'slice of Apple (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Build in a tumbler with ice. Garnish with an apple slice and Bourbon Cherries.'
  },
  {
    drink_name: 'Stone Rickey',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Lime Juice',
      '2 ounces Orange Juice',
      '1 ounce Simple Syrup',
      '3 ounces Soda Water',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Pour the gin, lime juice, orange juice, and Simple Syrup in a highball glass three-quarters filled with ice. Fill with club soda and stir. Garnish with the orange slice.'
  },
  {
    drink_name: 'Stone Sour',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Old Potrero Rye Whiskey',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '1 ounce Orange Juice',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and serve in a rocks glass over ice. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Stork Club Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.5 ounce Triple Sec',
      '.25 ounce Lime Juice',
      '1 ounce Orange Juice',
      'dash Angostura Bitters',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled martini glass. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Strange Brew',
    source: 'Death & Co',
    specs: [
      '2 ounces Tanqueray No. Ten Gin',
      '.75 ounce Velvet Falernum',
      '1 ounce Pineapple Juice',
      '.5 ounce Lemon Juice',
      'Green Flash IPA',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Short shake all the ingredients (except the IPA) with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Top with IPA. Garnish with the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Straw Dog',
    source: 'Death & Co',
    specs: [
      '1 Strawberry',
      '1.5 ounces Compass Box Asyla Scotch Whisky',
      '1 ounce Dolin Blanc Vermouth',
      '.75 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '1 dash Bittermens Hopped Grapefruit Bitters',
      '0.5 Strawberry (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the strawberry. Add the remaining ingredients and shake with ice, then strain into a coupe. Garnish with the strawberry half.'
  },
  {
    drink_name: 'Strawberry Cosmopolitan',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 to 4 (depending on size) Strawberry',
      '1 ounce Cointreau',
      '.25 ounce Lime Juice',
      '1.5 ounces Citrus Vodka'
    ],
    instructions: 'Use sweet strawberries. Halve one of the strawberries and reserve one half for garnish. In the bottom of a mixing glass, muddle the remaining strawberries with the Cointreau and lime juice. Add the vodka and ice and shake well to a ten count. Strain into a martini glass and garnish with the strawberry half.'
  },
  {
    drink_name: 'Stringer Bell',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Lustau Amontillado Sherry',
      '.5 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.25 ounce Cynar',
      '.75 ounce Lime Juice',
      '.5 ounce Celery Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'pinch of Kosher Salt',
      '1 stick of Celery (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the celery stick.'
  },
  {
    drink_name: 'Suffering Bastard',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Good Medium-bodied Rum',
      '1 ounce Overproof Rum, Such As Wray & Nephew Or Bacardi 151',
      '.75 ounce Curaçao',
      '.5 ounce Orgeat',
      '1 ounce Lime Juice',
      '2 ounces Orange Juice',
      'slice of Lime (Garnish)',
      'slice of Orange (Garnish)'
    ],
    instructions: 'Shake all the ingredients well and strain into an ice-filled double old-fashioned or Mai Tai glass. Garnish with the lime and orange slices.'
  },
  {
    drink_name: 'Summer Shack',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Martin Miller\'s Westbourne-Strength Gin',
      '.75 ounce Lillet Blanc',
      '.5 ounce Sauvignon Blanc',
      '.25 ounce St-Germain',
      '1 teaspoon Simple Syrup',
      'Orange Peel'
    ],
    instructions: 'Stir all the ingredients (except the orange twist) over ice, then strain into a coupe. Squeeze the orange twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Sundowner',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Malibu Coconut Rum',
      '5 ounces Pineapple Juice',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake all the ingredients and strain into a martini glass.'
  },
  {
    drink_name: 'Sunflower Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Absolut Vodka',
      '1 ounce Licor 43',
      '5 ounces Orange Juice',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Build over ice in a highball glass. Dust with the nutmeg.'
  },
  {
    drink_name: 'Sunset At Gowanus',
    source: 'Death & Co',
    specs: [
      '2 ounces Santa Teresa 1796 Rum',
      '.25 ounce Laird\'s Bonded Apple Brandy',
      '.25 ounce Yellow Chartreuse',
      '.75 ounce Lime Juice',
      '.5 ounce Grade B Maple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Sunset Breeze',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Absolut Vodka',
      '.5 ounce Absolut Citron Vodka',
      '1.5 ounces Bacardi Tropico',
      '.5 ounce Lime Juice',
      '.5 ounce Peter Heering Cherry Heering',
      '.5 ounce Simple Syrup',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a martini glass. Garnish with the orange peel.'
  },
  {
    drink_name: 'Sunset Gun',
    source: 'Death & Co',
    specs: [
      '2 fresh leaves of Kaffir Lime',
      '2 ounces Dorothy Parker Gin',
      '.25 ounce Velvet Falernum',
      '1 ounce Lime Juice',
      '.5 ounce Orgeat',
      'fresh leaf of Kaffir Lime (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the Kaffir lime leaves. Add the remaining ingredients and shake with ice. Double strain into a coupe and garnish with the Kaffir lime leaf.'
  },
  {
    drink_name: 'Suntory Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Absolut Citron Vodka',
      '1 ounce Midori',
      '1 ounce Grapefruit Juice'
    ],
    instructions: 'Shake and strain into an iced martini glass.'
  },
  {
    drink_name: 'Sure Shot',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Hayman\'s Old Tom Gin',
      '.5 ounce Bols Genever',
      '.75 ounce Ancho Chile-Infused Dolin Rouge Vermouth',
      '1 teaspoon Galliano Ristretto',
      '1 teaspoon Rich Demerara Syrup',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Susie Q',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Busnel VSOP Calvados',
      '.5 ounce Lemon Juice',
      '.25 ounce Cinnamon Bark Syrup',
      '.25 ounce Ginger Syrup',
      '.25 ounce Vanilla Syrup',
      '1 dash Angostura Bitters',
      'Sparkling Rosé'
    ],
    instructions: 'Shake all the ingredients (except the sparkling rosé) with ice, then strain into a flute. Top with sparkling rosé. No garnish.'
  },
  {
    drink_name: 'Swearengen Sling',
    source: 'Death & Co',
    specs: [
      '2 Brandied Cherry',
      '2 ounces Bulleit Bourbon',
      '.5 ounce Amaro Nonino',
      '.5 ounce Cherry Heering',
      '.5 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      'Brandied Cherry (Garnish)'
    ],
    instructions: 'In a shaker, muddle the cherries. Add the remaining ingredients and shake with ice. Strain into a highball glass filled with ice cubes. Garnish with the cherry on a cocktail pick and serve with a straw.'
  },
  {
    drink_name: 'Sweep The Leg',
    source: 'Death & Co',
    specs: [
      '2 ounces Suntory Hakushu 12-Year Japanese Whisky',
      '.75 ounce Orgeat',
      '.5 ounce Lustau Amontillado Sherry',
      '.5 ounce Lemon Juice',
      '.5 ounce Orange Juice',
      '.25 ounce Acacia Honey Syrup',
      '1 teaspoon Luxardo Amaro Abano',
      '1 dash Angostura Bitters',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Wheel of Lime (Garnish)',
      'Crescent of Orange (Garnish)',
      'Brandied Cherry (Garnish)',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Skewer the lime wheel, orange crescent, and cherry on a cocktail pick and insert into the ice along with a mint sprig.'
  },
  {
    drink_name: 'Sweet And Vicious',
    source: 'Death & Co',
    specs: [
      '2 slices of Fuji Apple',
      '2 ounces Old Overholt Rye Whiskey',
      '.5 ounce Dolin Dry Vermouth',
      '.5 ounce Amaro Nonino',
      '1 teaspoon Maple Syrup',
      'Fan of Apple (Garnish)'
    ],
    instructions: 'In a mixing glass, gently muddle the apple slices. Add the remaining ingredients and stir over ice. Double strain into a coupe and garnish with the apple fan.'
  },
  {
    drink_name: 'Sweet Hereafter',
    source: 'Death & Co',
    specs: [
      'Grapefruit Peel',
      '2 ounces Campo De Encanto Acholado Pisco',
      '.5 ounce Cocchi Americano',
      '.5 ounce Dolin Blanc Vermouth',
      '1 teaspoon St-Germain',
      '1 dash Bittermens Hopped Grapefruit Bitters'
    ],
    instructions: 'Squeeze the grapefruit twist over a mixing glass and discard. Add the remaining ingredients and stir over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Swiss Mist',
    source: 'PDT',
    specs: [
      '2 oz. Plymouth Gin',
      '.75 oz. Lemon Juice',
      '.75 oz. Grapefruit Cordial',
      '1 Egg White'
    ],
    instructions: 'Dry-shake, then shake with ice and strain into a chilled egg coupe. Garnish with a spritz of Kubler Absinthe.'
  },
  {
    drink_name: 'Swizzle',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Rum',
      '.25 ounce Falernum',
      '.5 ounce Lime Juice',
      '.5 ounce Simple Syrup',
      'dash Angostura Bitters',
      'piece of Lime (Garnish)'
    ],
    instructions: 'Place all the ingredients in a tall glass with crushed ice, swizzle, and garnish with the lime piece.'
  },
  {
    drink_name: 'Swollen Gland',
    source: 'PDT',
    specs: [
      'Vieux Pontarlier Absinthe',
      '2 oz. Berkshire Mountain Distillers\' Greylock Gin',
      '.5 oz. Orange Juice',
      '.25 oz. Yellow Chartreuse',
      '4 dashes Peychaud\'s Bitters'
    ],
    instructions: 'Shake with ice and fine-strain into a chilled, Vieux Pontarlier Absinthe-rinsed coupe. Garnish with a cucumber ribbon on a pick.'
  },
  {
    drink_name: 'T & T',
    source: 'PDT',
    specs: [
      '1.5 oz. Tamarind Purée',
      '1 oz. Siembra Azul Blanco Tequila',
      '1 oz. Sombra Mezcal',
      '.5 oz. Bénédictine',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Tailspin',
    source: 'Death & Co',
    specs: [
      'Campari',
      '1.5 ounces Beefeater London Dry Gin',
      '1 ounce Carpano Antica Formula Vermouth',
      '1 ounce Green Chartreuse',
      '1 dash House Orange Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Rinse a coupe with Campari and dump. Stir the remaining ingredients over ice, then strain into the coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Take Two',
    source: 'Death & Co',
    specs: [
      '1 ounce Ron Del Barrilito 3-Star Rum',
      '1 ounce Bergerac Mix',
      '1 dash Vieux Pontarlier Absinthe',
      '.75 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Talbott Leaf',
    source: 'PDT',
    specs: [
      '2 oz. Old Grand-Dad Bonded Bourbon Whiskey',
      '.75 oz. Lemon Juice',
      '.5 oz. Green Chartreuse',
      '.25 oz. Cynar',
      '1 barspoon Bonne Maman Strawberry Preserves',
      '6 Leaves of Mint',
      '1 leaf of Mint (Garnish)'
    ],
    instructions: 'Muddle 6 mint leaves and the Cynar. Add everything else, then shake with ice and fine-strain into a chilled coupe. Garnish with a mint leaf.'
  },
  {
    drink_name: 'Tangerine Margarita',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Sauza Conmemorativo Tequila',
      '1 ounce Cointreau',
      '.5 ounce Lime Juice',
      '.5 ounce Tangerine Juice',
      'Salt (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass with a salted rim.'
  },
  {
    drink_name: 'Tao Of Pooh',
    source: 'PDT',
    specs: [
      '2 oz. Liquiteria Coconut Water',
      '1.5 oz. 42 Below Manuka Honey Vodka',
      '.25 oz. Galliano L\'Autentico',
      '2 dashes The Bitter Truth Lemon Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Te Amo',
    source: 'Death & Co',
    specs: [
      '2 ounces El Tesoro Añejo Tequila',
      '.75 ounce Cocchi Vermouth Di Torino',
      '2 teaspoons Marie Brizard White Crème De Cacao',
      '1 teaspoon Cynar',
      '1 dash House Orange Bitters',
      '1 dash Bittermens Xocolatl Mole Bitters',
      '1 dash Bittermens Hellfire Habanero Shrub',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a martini glass. Garnish with the orange twist.'
  },
  {
    drink_name: 'Tea In The Sahara',
    source: 'Death & Co',
    specs: [
      'Coin, with pith, of Lemon',
      '2 ounces Coconut Green Tea-Infused Famous Grouse Scotch Whisky',
      '1 teaspoon Strega Liqueur',
      '1 teaspoon Acacia Honey Syrup'
    ],
    instructions: 'Squeeze the lemon over a mixing glass and drop it in. Add the remaining ingredients and stir with ice. Strain into a double rocks glass. No garnish.'
  },
  {
    drink_name: 'Tea Time At Guillermo\'s',
    source: 'Death & Co',
    specs: [
      '1 ounce Fortaleza Reposado Tequila',
      '1 ounce Scarlet Ibis Rum',
      '.5 ounce Queen Of Earl Tea-Infused Siembra Azul Reposado Tequila',
      '.5 ounce Drambuie',
      '1 teaspoon Maple Syrup',
      '1 dash House Orange Bitters',
      '1 dash Fee Brothers Whiskey Barrel-Aged Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into an old-fashioned glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'Tenement Yard',
    source: 'Death & Co',
    specs: [
      '2 ounces Sugar Snap Pea-Infused Plymouth Gin',
      '.5 ounce Dolin Génépy Des Alpes Liqueur',
      '.75 ounce Lemon Juice',
      '.5 ounce Orgeat'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a large coupe. No garnish.'
  },
  {
    drink_name: 'Tequila Sunrise',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces White Tequila',
      '4 or 5 ounces Orange Juice',
      'Grenadine'
    ],
    instructions: 'Ice a highball glass. Add the tequila, pour in fresh orange juice, and top off with a float of grenadine.'
  },
  {
    drink_name: 'Terrible Love',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Del Maguey Chichicapa Mezcal',
      '.75 ounce Suze Saveur D\'Autrefois Liqueur',
      '.5 ounce St-Germain',
      '1 dash House Orange Bitters',
      'Grapefruit Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into an old-fashioned glass over 1 large ice cube. Garnish with the grapefruit twist.'
  },
  {
    drink_name: 'Texas Tea',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Tequila',
      '.25 ounce Vodka',
      '.25 ounce White Rum',
      '.5 ounce Triple Sec',
      '1 ounce Lemon Juice',
      '3-4 ounces Coca-Cola',
      '.5 ounce Simple Syrup (Optional)',
      'Lemon (Garnish)'
    ],
    instructions: 'Shake all ingredients except the Coca-Cola with ice and strain into an ice tea or collins glass three-quarter filled with ice. Top with 3 or 4 ounces of Coca-Cola and stir. Garnish with the lemon wedge.'
  },
  {
    drink_name: 'The Bittenbender',
    source: 'Death & Co',
    specs: [
      '4 Raspberry',
      'Lemon Peel',
      'Orange Peel',
      '2 ounces Russell\'s Reserve 10-Year Bourbon',
      '.75 ounce Cacao Nib-Infused Campari',
      '.75 ounce Lemon Juice',
      '.75 ounce Ginger Syrup',
      '1 ounce Dry Champagne',
      'Wheel of Lemon (Garnish)'
    ],
    instructions: 'In a shaker, muddle the raspberries with the lemon and orange twists. Add the remaining ingredients (except the champagne) and shake with ice. Strain into a snifter over 1 large ice cube and top with the champagne. Garnish with the lemon wheel.'
  },
  {
    drink_name: 'The Black Prince',
    source: 'Death & Co',
    specs: [
      '2 ounces Zacapa 23-Year Rum',
      '.75 ounce Punt E Mes',
      '.5 ounce Amaro Averna',
      '1 dash House Orange Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'The Commandant',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Perry\'s Tot Navy-Strength Gin',
      '.5 ounce Kronan Swedish Punsch',
      '.25 ounce Velvet Falernum',
      '.75 ounce Lime Juice',
      '.5 ounce Coco Lopez',
      '1 small, fresh leaf of Kaffir Lime',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a coconut mug filled with crushed ice. Garnish with the lime wheel and serve with a straw.'
  },
  {
    drink_name: 'The Dangerous Summer',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Yamazaki 12-Year Japanese Whisky',
      '.75 ounce Dolin Rouge Vermouth',
      '.5 ounce Solerno Blood Orange Liqueur',
      '.5 ounce Massenez Kirsch Vieux Cherry Brandy',
      'Orange Peel'
    ],
    instructions: 'Stir all the ingredients (except the orange twist) over ice, then strain into a martini glass. Flame the orange twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'The Dorothy',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Light Rum',
      '.5 ounce Orange Juice',
      '.5 ounce Pineapple Juice',
      '.25 ounce Marie Brizard Apry'
    ],
    instructions: 'Shake all ingredients with ice, strain into a chilled martini glass, and garnish with a flamed orange peel.'
  },
  {
    drink_name: 'The Gift Shop',
    source: 'Death & Co',
    specs: [
      '3 wheels of Cucumber',
      '2 ounces Banks 5-Island White Rum',
      '.5 ounce Cardamaro',
      '.75 ounce Lime Juice',
      '.75 ounce Simple Syrup',
      '1 dash Angostura Bitters',
      '3 wheels of Cucumber (Garnish)'
    ],
    instructions: 'In a shaker, muddle the cucumber wheels. Add the remaining ingredients and shake with ice. Double strain into a double rocks glass over 1 large ice cube. Garnish with the cucumber wheels fanned on top of the drink.'
  },
  {
    drink_name: 'The Great Pretender',
    source: 'Death & Co',
    specs: [
      'Rim with Sugar (Garnish)',
      'Rim with Cinnamon (Garnish)',
      '2 ounces Smith & Cross Rum',
      '.5 ounce Pineapple Juice',
      '.5 ounce Lime Juice',
      '.5 ounce Vanilla Syrup',
      '1 teaspoon Cinnamon Bark Syrup'
    ],
    instructions: 'Rim a coupe with cinnamon-sugar. Shake the remaining ingredients with ice, then strain into the coupe. No garnish.'
  },
  {
    drink_name: 'The Green Mile',
    source: 'Death & Co',
    specs: [
      '2 ounces Barbancourt White Rum',
      '.5 ounce Green Chartreuse',
      '2 dashes Vieux Pontarlier Absinthe',
      '.75 ounce Lime Juice',
      '.5 ounce Simple Syrup',
      '4 leaves of Thai Basil',
      '1 leaf Thai Basil (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then double strain into a coupe. Garnish with the basil leaf.'
  },
  {
    drink_name: 'The Joy Division',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '1 ounce Dolin Dry Vermouth',
      '.5 ounce Cointreau',
      '3 dashes Vieux Pontarlier Absinthe',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the lemon twist.'
  },
  {
    drink_name: 'The Mary Pickford',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces White Rum',
      '1.5 ounces Pineapple Juice',
      '1 teaspoon Grenadine',
      '.25 ounce Maraschino Liqueur'
    ],
    instructions: 'Shake with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'The Monroe',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Anchor Junipero Gin',
      '.5 teaspoon Massenez Crème De Pêche Peach Liqueur',
      '.25 ounce Orgeat',
      '3 dashes House Peychaud\'s Bitters',
      '1 dash House Orange Bitters',
      '.5 ounce Club Soda'
    ],
    instructions: 'Stir all the ingredients (except the club soda) over ice, then strain into a double rocks glass over 1 large ice cube. Add the club soda. No garnish.'
  },
  {
    drink_name: 'The Risk Pool',
    source: 'Death & Co',
    specs: [
      '2 ounces Hayman\'s Old Tom Gin',
      '.25 ounce Rothman & Winter Crème De Violette',
      '.75 ounce Lime Juice',
      '.5 ounce Grapefruit Juice',
      '.75 ounce Simple Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'The Vanderbilt',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Laird\'s Bonded Apple Brandy',
      '1 ounce Gran Classico Bitter',
      '.75 ounce Mathilde Poire Pear Liqueur'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'The Vodkatini',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 ounces Vodka',
      'Pitted Cocktail Olive (Garnish)'
    ],
    instructions: 'Hold an open bottle of vermouth in front of a fan across the room. Stir the vodka with ice in a mixing glass (50 times if using large ice cubes, 30 times if using small cubes). Strain into a chilled martini glass. Garnish with the olive.'
  },
  {
    drink_name: 'There Will Be Blood',
    source: 'PDT',
    specs: [
      '2 oz. Old Grand-Dad Bonded Bourbon Whiskey',
      '.75 oz. Godiva Original Liqueur',
      '.75 oz. Blood Orange Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a flamed orange twist.'
  },
  {
    drink_name: 'Thomas\'s Daiquiri',
    source: 'Death & Co',
    specs: [
      '2 ounces Caña Brava Rum',
      '1 ounce Lime Juice',
      '.5 ounce Rich Cane Sugar Syrup',
      'Wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Ti-Punch',
    source: 'PDT',
    specs: [
      '2 oz. Neisson Rhum Réserve Spéciale',
      '1 barspoon Martinique Sugar Cane Syrup',
      '1 Disc of Lime'
    ],
    instructions: 'Squeeze the lime disc on both sides (to express the oil from the peel and juice from the flesh) into a chilled rocks glass. Add everything else and top with pebble ice. Swizzle, then top with more pebble ice and swizzle again. No garnish.'
  },
  {
    drink_name: 'Ti Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Rum',
      '.5 ounce Falernum',
      '.5 ounce Simple Syrup',
      '.75 ounce Lime Juice',
      'wedge of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients well and strain into an iced old- fashioned glass. Garnish with a squeeze of the lime.'
  },
  {
    drink_name: 'Tiki-Tiki Tom-Tom',
    source: 'Death & Co',
    specs: [
      '1.5 ounces El Dorado 15-Year Rum',
      '.5 ounce Scarlet Ibis Rum',
      '.5 ounce Drambuie',
      '1 teaspoon Strega Liqueur',
      '.5 teaspoon Acacia Honey Syrup'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. No garnish.'
  },
  {
    drink_name: 'Tipperary Cocktail',
    source: 'PDT',
    specs: [
      'Green Chartreuse',
      '2 oz. Black Bush Irish Whiskey',
      '1 oz. Carpano Antica Sweet Vermouth'
    ],
    instructions: 'Stir with ice and strain into a chilled, Green Chartreuse-rinsed coupe. No garnish.'
  },
  {
    drink_name: 'Toasted Almond',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Amaretto',
      '.75 ounce Kahlúa',
      '2 ounces Heavy Cream'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a small cocktail glass.'
  },
  {
    drink_name: 'Tom Bomb',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Ransom Old Tom Gin',
      '.25 ounce Donn\'s Spices #2',
      '.5 ounce Lemon Juice',
      '.5 ounce Pineapple Juice',
      '.25 ounce Orgeat',
      '.25 ounce Acacia Honey Syrup'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Tom Collins',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '4 ounces Soda Water',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake the first three ingredients with ice and strain into a collins glass. Add the soda and stir. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Tommy And The Ron-Dels',
    source: 'Death & Co',
    specs: [
      '.75 ounce El Tesoro Reposado Tequila',
      '.25 ounce Del Maguey Chichicapa Mezcal',
      '1 ounce Ron Del Barrilito 3-Star Rum',
      '.5 ounce Galliano L\'Autentico',
      '1 dash Vieux Pontarlier Absinthe',
      '1 ounce Lime Juice',
      '.5 ounce Agave Nectar',
      '1 dash Bittermens \'Elemakule Tiki Bitters',
      'Wheel of Lime (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into an old-fashioned glass over 1 large ice cube. Garnish with the lime wheel.'
  },
  {
    drink_name: 'Tommy\'s Margarita',
    source: 'PDT',
    specs: [
      '2 oz. L & J Blanco Tequila',
      '1 oz. Lime Juice',
      '1 oz. Agave Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled rocks glass filled with ice. No garnish.'
  },
  {
    drink_name: 'Toronto',
    source: 'Death & Co',
    specs: [
      '2 ounces Rittenhouse 100 Rye Whiskey',
      '.5 ounce Fernet-Branca',
      '1 teaspoon Rich Demerara Syrup',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a Nick & Nora glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Traditional Grog (Cold)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounce Heavy-bodied Rum',
      '1 ounce Honey Syrup',
      '.75 ounce Lemon Juice',
      '4 ounces Water',
      'Lemon (Garnish)'
    ],
    instructions: 'Shake the ingredients with ice and serve over ice in a rocks glass. Garnish with a lemon wedge.'
  },
  {
    drink_name: 'Traditional Grog (Hot)',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounce Heavy-bodied Rum',
      '1 ounce Honey Syrup',
      '.75 ounce Lemon Juice',
      '4 ounces Hot Water',
      'stick of Cinnamon (Garnish)'
    ],
    instructions: 'Mix all ingredients in a mug and stir. Garnish with a cinnamon stick.'
  },
  {
    drink_name: 'Trapeze',
    source: 'Death & Co',
    specs: [
      '.5 ounce Royal Combier Liqueur',
      '.5 ounce Yellow Chartreuse',
      '.5 ounce Campari',
      '1 dash Fee Brothers Whiskey Barrel-Aged Bitters',
      'Dry Champagne',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients (except the champagne) over ice, then strain into a flute. Top with champagne. Garnish with the orange twist.'
  },
  {
    drink_name: 'Trembling Bell',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Chamomile-Infused Old Overholt Rye Whiskey',
      '1 ounce Knappogue Castle 12-Year Irish Whiskey',
      '.75 ounce Cocchi Americano',
      '1 teaspoon Massenez Crème De Pêche Peach Liqueur',
      '.5 teaspoon Acacia Honey Syrup',
      'Lemon Peel'
    ],
    instructions: 'Stir all the ingredients (except the lemon twist) over ice, then strain into a coupe. Squeeze the lemon twist over the drink and discard. No garnish.'
  },
  {
    drink_name: 'Triborough',
    source: 'PDT',
    specs: [
      '2 oz. Wild Turkey Rye Whiskey',
      '.5 oz. Clear Creek Kirschwasser',
      '.5 oz. Punt E Mes',
      '.5 oz. Amaro Ciociaro',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled rocks glass. Garnish with an orange twist.'
  },
  {
    drink_name: 'Trident',
    source: 'PDT',
    specs: [
      '1.5 oz. Krogstad Aquavit',
      '1.5 oz. Lustau Manzanilla Sherry',
      '.75 oz. Cynar',
      '2 dashes Fee Brothers Peach Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Trinidad',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bacardi Rum',
      '4 dashes Angostura Bitters',
      '5 ounces Coca-Cola',
      'wedge of Lime (Garnish)'
    ],
    instructions: 'Build in a highball glass over ice and garnish with the lime wedge.'
  },
  {
    drink_name: 'Tropical Cocktail',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Light Rum',
      '.75 ounce Curaçao',
      '.5 ounce Lime Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Tropical Highball',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Mount Gay Rum',
      'dashes Angostura Bitters',
      '4 ounces Ginger Ale',
      'wedge of Lime (Garnish)'
    ],
    instructions: 'Build over ice in a highball glass. Garnish with the lime wedge.'
  },
  {
    drink_name: 'Tropical Whiskey Punch',
    source: 'The Craft of the Cocktail',
    specs: [
      '4 1-inch cubes of Mango',
      '1 wedge of Lemon',
      '2 wedges of Pineapple',
      '1 ounce Water',
      '.75 ounce Simple Syrup',
      '2 ounces Crown Royal Canadian Whiskey',
      'wedge of Pineapple (Garnish)',
      'wedge of Lemon (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Muddle all the ingredients except the whiskey in a bar glass. Add the whiskey and shake with ice. Strain into an ice-filled rocks glass and garnish with the pineapple, lemon, and cherry.'
  },
  {
    drink_name: 'Tuxedo',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '1 ounce Dry Vermouth',
      '2 dashes Maraschino Liqueur',
      '2 dashes Anisette'
    ],
    instructions: 'Stir the ingredients with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Twentieth Century',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Gin',
      '.25 ounce White Crème De Cacao',
      '.5 ounce Lille Blanc',
      '.25 ounce Lemon Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass.'
  },
  {
    drink_name: 'Ty Cobbler',
    source: 'Death & Co',
    specs: [
      '3 Brandied Cherry',
      '1 cube of White Sugar',
      '2 ounces Siete Leguas Blanco Tequila',
      '.5 ounce Cynar',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Wheel of Orange (Garnish)'
    ],
    instructions: 'In a shaker, muddle the cherries and sugar cube. Add the remaining ingredients and dry shake. Dump into a double rocks glass filled with crushed ice. Garnish with the orange wheel.'
  },
  {
    drink_name: 'Uno, Dos, Tres',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Siembra Azul Reposado Tequila',
      '.75 ounce Grapefruit-Infused Punt E Mes',
      '.5 ounce Campari',
      '.25 ounce Cynar',
      '1 dash Bittermens Xocolatl Mole Bitters',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. To garnish, flame the orange twist over the drink, then drop it in.'
  },
  {
    drink_name: 'Up To Date',
    source: 'PDT',
    specs: [
      '2 oz. Wild Turkey Rye Whiskey',
      '.75 oz. Lustau Manzanilla Sherry',
      '.5 oz. Grand Marnier',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Upside-Down Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '2.5 ounces Dry Vermouth',
      '1 ounce Gin',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Assemble gin and vermouth in a mixing glass Illed with ice and stir. Strain into a chilled martini glass and garnish with the lemon peel.'
  },
  {
    drink_name: 'Valencia II',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Apricot Brandy',
      '1 ounce Orange Juice',
      '2 dashes Orange Bitters',
      'Champagne Champagne',
      'Flamed Orange Peel (Garnish)'
    ],
    instructions: 'Shake the first three ingredients with ice and strain into a chilled champagne flute. Top with Champagne. Garnish with the flamed orange peel.'
  },
  {
    drink_name: 'Valencia',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Fino Sherry',
      'Several Orange Peel',
      '2.5 ounces Gin'
    ],
    instructions: 'Coat the inside of a chilled martini glass with fino sherry and toss out the excess. Flame several orange peels into the glass . Chill the gin and strain into the seasoned glass. Garnish with an orange peel.'
  },
  {
    drink_name: 'Vampire Blues',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Old Weller Antique 107 Bourbon',
      '.5 ounce East India Solera Sherry',
      '.5 ounce Lemon Juice',
      '.5 ounce Simple Syrup',
      '1 teaspoon Pumpkin Butter',
      '2 dashes Angostura Bitters',
      '1 stick of Cinnamon (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a double rocks glass filled with ice cubes. Garnish with a few grates of the cinnamon stick over the top, then garnish with the cinnamon stick and serve with a straw.'
  },
  {
    drink_name: 'Vauvert Slim',
    source: 'PDT',
    specs: [
      'Laphroaig 10-Year-Old Single Malt Scotch Whisky',
      '2 oz. Grapefruit Juice',
      '1 oz. Green Chartreuse',
      '.5 oz. Lime Juice',
      '7 Leaves of Mint',
      '1 Egg White'
    ],
    instructions: 'Muddle 6 mint leaves with the lime juice. Add everything else, then dry-shake. Shake with ice and fine-strain into a chilled, Laphroaig 10-Year-Old Single Malt Scotch-rinsed egg coupe. Garnish with a mint leaf.'
  },
  {
    drink_name: 'Vejk Sling',
    source: 'Death & Co',
    specs: [
      '2 ounces Compass Box Asyla Scotch Whisky',
      '1 ounce Chamomile-Infused Bianco Vermouth',
      '.5 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '1 dash House Orange Bitters',
      'Club Soda',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients (except the club soda) with ice, then strain into a highball glass filled with ice cubes. Top with club soda. Garnish with the lemon twist and serve with a straw.'
  },
  {
    drink_name: 'Velvet Club',
    source: 'PDT',
    specs: [
      '1 oz. Hine V.S.O.P. Cognac',
      '.5 oz. Lillet Blanc',
      '.5 oz. Marie Brizard White Crème De Cacao',
      '1 oz. Moët Imperial Champagne'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Top with 1 oz. Moët Imperial Champagne. No garnish.'
  },
  {
    drink_name: 'Velvet Hammer',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Triple Sec',
      '.75 ounce White Crème De Cacao',
      '2 ounces Heavy Cream',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled cocktail or martini glass. Dust with the nutmeg.'
  },
  {
    drink_name: 'Velvet Warhol',
    source: 'Death & Co',
    specs: [
      '2 ounces Banana Chip-Infused Gosling\'s Black Seal Rum',
      '.25 ounce Marie Brizard White Crème De Cacao',
      '2 dashes Bitter Truth Aromatic Bitters',
      '1 ounce Heavy Cream'
    ],
    instructions: 'Stir all the ingredients (except the cream) over ice, then strain into a coupe. Float the cream on top. No garnish.'
  },
  {
    drink_name: 'Vendome',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Red Dubonnet',
      '1 ounce Gin',
      '1 ounce Dry Vermouth',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients with ice and strain into a chilled cocktail glass. Garnish with the lemon peel.'
  },
  {
    drink_name: 'Vermouth Cassis',
    source: 'The Craft of the Cocktail',
    specs: [
      '.75 ounce Crème De Cassis',
      '4 ounces Dry Vermouth',
      'Twist of Lemon Peel (Garnish)'
    ],
    instructions: 'Fill a white-wine glass three-fourths full of ice. Pour in the cassis and fill with the vermouth. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Vesper',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 part Vodka',
      '3 parts Gin',
      '.25 ounce Lille Blanc',
      'Orange Peel (Garnish)'
    ],
    instructions: 'Shake with ice and strain into a martini glass. Garnish with the orange peel.'
  },
  {
    drink_name: 'Vieux Carré',
    source: 'Death & Co',
    specs: [
      '1 ounce Rittenhouse 100 Rye Whiskey',
      '1 ounce Pierre Ferrand Ambre Cognac',
      '1 ounce Carpano Antica Formula Vermouth',
      '1 teaspoon Bénédictine',
      '1 dash Angostura Bitters',
      '1 dash House Peychaud\'s Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Vieux Mot',
    source: 'PDT',
    specs: [
      '1.5 oz. Plymouth Gin',
      '.75 oz. Lemon Juice',
      '.5 oz. St. Germain Elderflower Liqueur',
      '.5 oz. Simple Syrup'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Village To Village',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Chinaco Verde Blanco Tequila',
      '.5 teaspoon St. Elizabeth Allspice Dram',
      '1.5 ounces Fuji Apple Juice',
      '.75 ounce Lemon Juice',
      '.5 ounce Acacia Honey Syrup',
      '.5 teaspoon Ginger Syrup',
      '2 dashes Angostura Bitters (Garnish)',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Short shake all the ingredients with 3 ice cubes, then strain into a pilsner glass filled with crushed ice. Garnish with the bitters and the mint sprig and serve with a straw.'
  },
  {
    drink_name: 'Vipera',
    source: 'Death & Co',
    specs: [
      '2 ounces Spiced Pear-Infused Siembra Azul Blanco Tequila',
      '.5 ounce Laird\'s Bonded Apple Brandy',
      '.5 ounce Yellow Chartreuse',
      'Slice of Anjou Pear (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the pear slice.'
  },
  {
    drink_name: 'Waldorf',
    source: 'The Craft of the Cocktail',
    specs: [
      '.25 ounce Ricard',
      '2 ounces Bourbon Or Rye Whiskey',
      '.75 ounce Sweet Vermouth',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Pour the Ricard into the mixing glass and swirl to coat the glass. Pour out the excess Ricard, then add the remaining ingredients over ice and stir. Strain into a chilled martini glass.'
  },
  {
    drink_name: 'Ward 8',
    source: 'Death & Co',
    specs: [
      '2 ounces Old Overholt Rye Whiskey',
      '.5 ounce Lemon Juice',
      '.5 ounce Orange Juice',
      '.5 ounce Simple Syrup',
      '1 teaspoon Pomegranate Molasses'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Ward Eight',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Bourbon Whiskey',
      '1 ounce Simple Syrup',
      '.75 ounce Lemon Juice',
      '.25 ounce Grenadine',
      'slice of Orange (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into an old-fashioned glass or a special sour glass. Garnish with the orange slice and cherry.'
  },
  {
    drink_name: 'Warehouse C',
    source: 'Death & Co',
    specs: [
      '1 Strawberry',
      '1.5 ounces Buffalo Trace Bourbon',
      '.75 ounce Lemon Juice',
      '.25 ounce Lime Juice',
      '.25 ounce Orgeat',
      '.25 ounce Cinnamon Bark Syrup',
      '.25 ounce Ginger Syrup',
      '1 dash Bitter Truth Aromatic Bitters'
    ],
    instructions: 'In a shaker, gently muddle the strawberry. Add the remaining ingredients and shake with ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Water Lily',
    source: 'PDT',
    specs: [
      '.75 oz. Plymouth Gin',
      '.75 oz. Rothman & Winter Crème De Violette',
      '.75 oz. Cointreau',
      '.75 oz. Lemon Juice'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Waterloo Sunset',
    source: 'Death & Co',
    specs: [
      '7 leaves of Mint',
      '.5 ounce Rich Cane Sugar Syrup',
      '1 ounce Szechuan Peppercorn-Infused Plymouth Gin',
      '1 ounce Beefeater London Dry Gin',
      '.5 ounce Dolin Blanc Vermouth',
      '1.5 ounces Watermelon Juice',
      '.75 ounce Lime Juice',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'In a shaker, gently muddle the mint leaves and syrup. Add the remaining ingredients and shake with ice, then double strain into a double rocks glass over 1 large ice cube. Garnish with the mint sprig.'
  },
  {
    drink_name: 'Watermelon Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Lemon Juice',
      '1 ounce Midori',
      '1 ounce Citrus Vodka',
      '1.5 ounces Watermelon Juice',
      'Sprigs of Mint (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled martini glass. Garnish with the mint.'
  },
  {
    drink_name: 'Weeski',
    source: 'PDT',
    specs: [
      '2 oz. Jameson 12-Year-Old Irish Whiskey',
      '.75 oz. Lillet Blanc',
      '.5 oz. Cointreau',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with an orange twist.'
  },
  {
    drink_name: 'Wellington Fizz',
    source: 'PDT',
    specs: [
      '2 oz. 42 Below Kiwi Vodka',
      '1 oz. Heavy Cream',
      '.75 oz. Lime Juice',
      '.5 oz. Boiron Passion Fruit Purée',
      '.5 oz. Kassatly Chtaura Orgeat',
      '1 Egg White',
      '1 oz. Club Soda'
    ],
    instructions: 'Dry shake, then shake with ice and strain into a chilled Collins glass. Top with 1 oz. club soda and garnish with 3 spritzes of diluted Aftel Bergamot Essence.'
  },
  {
    drink_name: 'Whirling Tiger',
    source: 'Death & Co',
    specs: [
      '2 ounces Buffalo Trace Bourbon',
      '1 ounce Fuji Apple Juice',
      '.75 ounce Lemon Juice',
      '.5 ounce Ginger Syrup',
      'Slice of Fuji Apple (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice, then strain into a highball glass filled with ice cubes. Garnish with the apple slice and serve with a straw.'
  },
  {
    drink_name: 'Whiskey Cobbler',
    source: 'The Craft of the Cocktail',
    specs: [
      '2  wedges Pineapple',
      '2 slices Orange',
      '2  wedges Lemon',
      '.75 ounce Curaçao',
      '2 ounces Whiskey'
    ],
    instructions: 'In the bottom of a bar glass, muddle the skinless pineapple wedge, 1 piece of orange, and 1 piece of lemon with the curaçao and 1 ounce of water. Add the whiskey and ice and shake well. Strain into a double old-fashioned glass filled with crushed ice. Garnish with the remaining pineapple wedge, an orange wedge, and a lemon wedge.'
  },
  {
    drink_name: 'Whiskey Daisy',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 wedge of Lime',
      'quartered half Lemon',
      '.75 ounce Simple Syrup',
      '.5 ounce Yellow Chartreuse',
      '1.5 ounces American Whiskey',
      'wedge of Lemon (Garnish)',
      'wedge of Lime (Garnish)',
      'Cherry (Garnish)'
    ],
    instructions: 'Muddle the first four ingredients in a mixing glass. Add the whiskey and shake well with ice. Strain into a highball glass filled with crushed ice. Garnish with the lemon, lime, and cherry.'
  },
  {
    drink_name: 'Whiskey Fizz',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces American Whiskey',
      '.75 ounce Lemon Juice',
      '1 ounce Simple Syrup',
      '3 ounces Lemon-Lime Soda'
    ],
    instructions: 'Shake the first three ingredients and strain into a highball glass filled with ice. Fill with the lemon-lime soda.'
  },
  {
    drink_name: 'Whiskey Peach Smash',
    source: 'The Craft of the Cocktail',
    specs: [
      '4 small quarters of Peach',
      '3 leaves of Mint',
      '2 pieces of Lemon',
      '1 ounce Water',
      '.5 ounce Simple Syrup',
      '2 ounces Canadian Whiskey',
      '1 sprig of Mint',
      'slice of Peach (Garnish)'
    ],
    instructions: 'Muddle all the ingredients except the whiskey in a bar glass. Add the whiskey and shake with ice. Strain into an ice-filled rocks glass and garnish with the sprig of mint and the peach slice.'
  },
  {
    drink_name: 'Whiskey Plush',
    source: 'The Craft of the Cocktail',
    specs: [
      '1 ounce Irish Whiskey',
      '1 ounce Baileys Irish Cream',
      '.5 ounce Simple Syrup',
      '4 ounces Milk Or Cream',
      '4 dashes Angostura Bitters',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Shake all the ingredients well with ice and strain into a chilled wineglass. Garnish with the grated nutmeg.'
  },
  {
    drink_name: 'Whiskey Smash',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 pieces Lemon',
      '2 to 3 leaves Mint',
      '.75 ounce Simple Syrup',
      '1.5 ounces Maker\'s Mark Bourbon Whiskey',
      '1 ounce Water',
      'Sprig of Mint'
    ],
    instructions: 'Muddle the lemon, mint leaves, water, and Simple Syrup in the bottom of a mixing glass. Add the bourbon and shake. Strain into an old-fashioned glass filled with crushed ice. Garnish with the mint sprig.'
  },
  {
    drink_name: 'Whiskey Sour',
    source: 'Death & Co',
    specs: [
      '2 ounces Buffalo Trace Bourbon',
      '.75 ounce Lemon Juice',
      '.75 ounce Simple Syrup',
      '1 Egg White',
      '1 dash Angostura Bitters (Garnish)',
      'Crescent of Orange (Garnish)',
      'Flag with Cherry (Garnish)'
    ],
    instructions: 'Dry shake all the ingredients, then shake again with ice. Double strain into a double rocks glass over 1 large ice cube. Add a dash of bitters on top and garnish with the orange and cherry flag.'
  },
  {
    drink_name: 'White Bat',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Bacardi Rum',
      '.5 ounce Kahlúa',
      '1.5 ounces Milk Or Half-and-half',
      '3 ounces Coca-Cola'
    ],
    instructions: 'Build all the ingredients in a tall glass over ice. Stir and serve with a straw.'
  },
  {
    drink_name: 'White Birch Fizz',
    source: 'PDT',
    specs: [
      '1.5 oz. Plymouth Gin',
      '.75 oz. Lemon Juice',
      '.5 oz. Strega Liqueur',
      '.5 oz. Rothman & Winter Orchard Apricot Liqueur',
      '1 Egg White',
      '2 oz. Club Soda'
    ],
    instructions: 'Dry-shake, then shake with ice. Strain into a chilled Collins glass. Top with 2 oz. club soda and garnish with a spritz of Suze.'
  },
  {
    drink_name: 'White Lady',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '1 ounce Lemon Juice',
      '1 ounce Cointreau'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a cocktail glass.'
  },
  {
    drink_name: 'White Negroni',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Fords Gin',
      '.75 ounce Dolin Blanc Vermouth',
      '.75 ounce Suze Saveur D\'Autrefois Liqueur',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a double rocks glass over 1 large ice cube. Garnish with the lemon twist.'
  },
  {
    drink_name: 'White Tiger\'s Milk',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Applejack Or Calvados',
      '2 ounces Marie Brizard Apry',
      '.5 teaspoon Angostura Bitters',
      '2 ounces Simple Syrup',
      '1 beaten stiff Egg White',
      '.5 pint Whole Milk',
      'Nutmeg (Garnish)'
    ],
    instructions: 'Combine all the ingredients in a pitcher and whisk to blend. Chill and serve dusted with the nutmeg.'
  },
  {
    drink_name: 'White Wine Spritzer',
    source: 'The Craft of the Cocktail',
    specs: [
      'White Wine',
      'Soda Water',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'White wine with ice and club soda. Garnish with lemon peel.'
  },
  {
    drink_name: 'Wicked Kiss',
    source: 'Death & Co',
    specs: [
      '1 ounce Rittenhouse 100 Rye Whiskey',
      '1 ounce Laird\'s Bonded Apple Brandy',
      '.25 ounce Yellow Chartreuse',
      '.25 ounce Bénédictine',
      '1 dash Angostura Bitters'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Widow\'s Kiss',
    source: 'PDT',
    specs: [
      '2 oz. Laird\'s Bonded Apple Brandy',
      '.25 oz. Yellow Chartreuse',
      '.25 oz. Bénédictine',
      '2 dashes Angostura Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. No garnish.'
  },
  {
    drink_name: 'Widow\'s Laurel',
    source: 'Death & Co',
    specs: [
      '2 ounces Busnel VSOP Calvados',
      '.5 ounce Drambuie',
      '.5 ounce Carpano Antica Formula Vermouth',
      '1 teaspoon St. Elizabeth Allspice Dram',
      '1 dash Angostura Bitters',
      '3 Brandied Cherry (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. Garnish with the cherries.'
  },
  {
    drink_name: 'Winston Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      'Dash Frangelico',
      '1 ounce Spiced Rum',
      '1 ounce Gin',
      'Scant dash Rose\'s Lime Juice',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Season a chilled mixing glass with the Frangelico. Stir the remaining ingredients in the glass and strain into a martini glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Witch\'s Kiss',
    source: 'PDT',
    specs: [
      '2 oz. José Cuervo Platino Tequila',
      '.75 oz. Lemon Juice',
      '.5 oz. Strega Liqueur',
      '1 barspoon Red Jacket Orchards Apple Butter'
    ],
    instructions: 'Shake with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Wonder Bra',
    source: 'The Craft of the Cocktail',
    specs: [
      '1.5 ounces Gin',
      '.75 ounce Cointreau',
      '1 ounce Pineapple Juice'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail glass.'
  },
  {
    drink_name: 'Wooden Ship',
    source: 'Death & Co',
    specs: [
      '1 ounce Tanqueray No. Ten Gin',
      '1 ounce Bols Genever',
      '.5 ounce Grand Marnier',
      '.5 teaspoon Rich Cane Sugar Syrup',
      '1 dash Fee Brothers Whiskey Barrel-Aged Bitters',
      'Lemon Peel (Garnish)'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a rocks glass. Garnish with the lemon twist.'
  },
  {
    drink_name: 'Woolworth',
    source: 'PDT',
    specs: [
      '2 oz. Compass Box Asyla Blended Scotch Whisky',
      '1 oz. Lustau Manzanilla Sherry',
      '.5 oz. Bénédictine',
      '2 dashes House Orange Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled coupe. Garnish with a lemon twist.'
  },
  {
    drink_name: 'Wrong Aisle',
    source: 'PDT',
    specs: [
      'St. Germain-Elderflower Liqueur',
      '2 oz. Laird\'s Bonded Apple Brandy',
      '1 oz. Lillet Rouge',
      '.25 oz. Quince Shrub (Huilerie Beaujolaise Vinaigre De Coing)',
      '1 dash Fee Brothers Whiskey Barrel-Aged Bitters'
    ],
    instructions: 'Stir with ice and strain into a chilled, St. Germain-Elderflower Liqueur rinsed coupe. Garnish with an apple fan dusted with nutmeg.'
  },
  {
    drink_name: 'Yama Blanca',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Centinela Reposado Tequila',
      '.5 ounce Jalapeño-Infused Siembra Azul Blanco Tequila',
      '.75 ounce Dolin Blanc Vermouth',
      '.25 ounce Velvet Falernum'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Yang Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 ounces Gin',
      '.5 ounce Sake',
      'two Olive (Garnish)'
    ],
    instructions: 'Pour both ingredients into a mixing glass with ice and stir to chill. Strain into a chilled martini glass. Garnish with olives.'
  },
  {
    drink_name: 'Yellow Bird',
    source: 'The Craft of the Cocktail',
    specs: [
      '2 ounces Rum',
      '.5 ounce Triple Sec',
      '.5 ounce Galliano',
      '.75 ounce Lime Juice',
      'Lime Peel (Garnish)'
    ],
    instructions: 'Shake all the ingredients with ice and strain into a chilled cocktail or martini glass. Garnish with the lime peel.'
  },
  {
    drink_name: 'Yeomen Warder',
    source: 'Death & Co',
    specs: [
      '2 ounces Beefeater London Dry Gin',
      '.75 ounce Dolin Dry Vermouth',
      '.25 ounce Cynar',
      '.25 ounce Luxardo Maraschino Liqueur'
    ],
    instructions: 'Stir all the ingredients over ice, then strain into a coupe. No garnish.'
  },
  {
    drink_name: 'Yin Martini',
    source: 'The Craft of the Cocktail',
    specs: [
      '3 ounces Sake',
      '.5 ounce Gin',
      'Oriental Fruit (Garnish) (Optional)',
      'Litchi Nut (Garnish) (Optional)'
    ],
    instructions: 'Pour both ingredients into a mixing glass with ice and stir to chill. Strain into a chilled martini glass. Garnish with an oriental fruit or litchi nut.'
  },
  {
    drink_name: 'Zihuatanejo Julep',
    source: 'Death & Co',
    specs: [
      'Sprig of Mint',
      '2 ounces El Tesoro Reposado Tequila',
      '1 teaspoon Rich Demerara Syrup',
      '.5 ounce Del Maguey Chichicapa Mezcal',
      '1 stick of Cinnamon (Garnish)',
      'Bouquet of Mint (Garnish)'
    ],
    instructions: 'Rub the mint around the inside of a julep tin and discard. Fill the tin with crushed ice and add the tequila and syrup. Swizzle briefly, then top with crushed ice. Float the mezcal on top. Grate the side of a cinnamon stick away from the drink to release its aromas, then place the cinnamon and mint bouquet in the center of the ice and serve with a straw.'
  },
  {
    drink_name: 'Zombie Punch',
    source: 'Death & Co',
    specs: [
      '1.5 ounces Appleton Estate V/X Rum',
      '1.5 ounces Ron Del Barrilito 3-Star Rum',
      '1 ounce Lemon Hart 151 Rum',
      '.75 ounce Zombie Mix',
      '.5 ounce Donn\'s Spices #2',
      '.75 ounce Lime Juice',
      '1 dash Angostura Bitters',
      'Sprig of Mint (Garnish)'
    ],
    instructions: 'Shake all the ingredients with 2 ice cubes, then strain into a tiki mug filled with crushed ice. Garnish with the mint sprig.'
  },
  {
    drink_name: 'Zombie',
    source: 'The Craft of the Cocktail',
    specs: [
      '.5 ounce Lime Juice',
      '.5 ounce Lemon Juice',
      '1.5 ounces Orange Juice',
      '1.5 ounces Passion Fruit Purée',
      '.25 ounce Grenadine',
      '1 ounce Curaçao',
      '1 ounce Apricot Brandy, In Lieu Of Curaçao (Optional)',
      '1 ounce Dark Rum',
      '1 ounce Light Rum',
      '2 dashes Angostura Bitters',
      'float of Overproof Rum (Optional)',
      'Sprig of Mint (Garnish)',
      'Fruit (Garnish)'
    ],
    instructions: 'Add all the ingredients into a mixing glass and shake. Strain into a large glass and add the mint and seasonal fruit.'
  }
]
