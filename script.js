const fs = require('fs');

const data = {
    "All Day Long": [
        ["Bananas Foster Brioche French Toast", 513.50, "Topped with fresh bananas caramelized in a classic buttery brown sugar sauce.", true],
        ["Dark Chocolate Milo Mousse Hotcakes", 492.70, "Four luscious chocolate hotcakes filled with chocolate chips and layered with creamy Belgian dark chocolate mousse, topped with more mousse and chocolate chips.", true],
        ["Honey Hotcakes", 323.70, "", true],
        ["Thick-Cut Brioche French Toast", 456.30, "Topped with whipped butter and dusted with powdered sugar", true]
    ],
    "Platters": [
        ["American Platter", 908.70, "", true],
        ["Metatherian Platter", 1168.70, "", true],
        ["Sydney Platter", 908.70, "", true]
    ],
    "Pizza": [
        ["Barbeque Pizza", 544.70, "Smoky toppings, a true Aussie BBQ flavor.", true],
        ["Florentine Pizza", 505.70, "Spinach and b", true],
        ["Garden Fresh Pizza", 479.70, "Seasonal vegetables on a tomato base.", true],
        ["Margherita Pizza", 492.70, "Fresh mozzarella, basil, and tomato sauce.", true],
        ["Mushroom Pizza", 453.70, "Juicy mushrooms with mozzarella.", true],
        ["Paneer Tikka Pizza", 518.70, "An Indo-Aussie fusion pizza with a bold twist", true],
        ["Turkish Pizza", 544.70, "A seasonal bread with its natural flavors.", true],
        ["Sabi-An Pizza", 648.70, "Dark and delicate flavor with burrata cheese.", true]
    ],
    "Burgers": [
        ["Chimi Churi With Sundried Tomato Burger", 505.70, "Aromatic and tangy with a hint of spice.", true],
        ["Classic American Cheeseburger", 453.70, "Juicy, cheesy and bold flavors.", true],
        ["Power Mexican Burger", 479.70, "A bold mix of Mexican spice with an Aussie twist.", true],
        ["Queensland Burger", 492.70, "A hearty burger inspired by sunny Queensland flavors", true],
        ["Ultimate Aussie Burger", 479.70, "Cafe-style stacked burger, a down-under classic", true]
    ],
    "Sandwiches": [
        ["Classic Caprese Panini", 427.70, "Grated Amul cheese, tomato slices, fresh basil finished with balsamic glaze.", true],
        ["Focaccia Grilled Vegetable & Pesto", 442.00, "Zucchini, eggplant, bell peppers, basil pesto, mozzarella, and lettuce.", true],
        ["Focaccia Mushroom & Caramelized Onion Melt", 455.00, "Caramelized onion, mushrooms shredded cheese, melted on fresh bread", true],
        ["Grilled Pesto Sandwich (Sourdough)", 455.00, "Cheese slices, zucchini, onion, red pepper and basil pesto", true],
        ["Roasted Red Pepper & Creamy Cheese Panini", 427.70, "Sliced roasted red peppers, creamy cheese, and crisp lettuce.", true],
        ["Ultimate Grilled Cheese (Sourdough)", 453.70, "Sliced cheese, mozzarella, shredded Amul toasted with butter.", true]
    ],
    "Pasta & Risotto": [
        ["Fettuccine Alfredo With Mushrooms", 518.70, "Creamy white sauce with saut", true],
        ["Fried Ravioli With Marinara Sauce", 544.70, "Crispy, juicy and cheesy pasta with flavorful sauce.", true],
        ["Mushroom Ravioli", 557.70, "Filled with mushrooms and herbs", true],
        ["Spaghetti With Broccoli & Bechamel", 518.70, "", true],
        ["Spinach & Ricotta Ravioli", 557.70, "Pasta pillows filled with spinach and ricotta.", true],
        ["Tetrazzini", 557.70, "Pasta with Dijon mustard, sundried tomato sauce, baked with mozzarella cheese.", true],
        ["Parmesan & Tomato Risotto", 557.70, "Tangy tomato and parmesan.", true],
        ["Wild Mushroom Risotto", 557.70, "Arborio rice cooked with earthy mushrooms.", true]
    ],
    "Fries": [
        ["Classic Fries Topped With Yellow Cheese Sauce", 258.70, "", true],
        ["Fries With Bbq Sauce And Cheese", 284.70, "", true],
        ["Fries With Chili And Garlic Seasoning", 284.70, "", true],
        ["Fries With Chipotle And Coriander", 284.70, "", true],
        ["Lotus Stem Chips", 388.70, "", true],
        ["Sweet Potato Fries", 414.70, "", true]
    ],
    "Nachos": [
        ["Baked Nachos With Yellow Cheese Sauce", 362.70, "", true],
        ["Nachos Topped With Bbq Sauce And Cottage Cheese", 388.70, "", true],
        ["Nachos Topped With Chili And Cheese", 362.70, "", true],
        ["Nachos Topped With Chipotle, Jalapeno, And Coriander", 375.70, "", true],
        ["Nachos Topped With Garlic Aioli And Seasoning", 375.70, "", true]
    ],
    "Bruschetta": [
        ["Avocado, Tomato & Onion Bruschetta", 440.70, "Creamy avocado smash, a true Australian brunch favorite", true],
        ["Exotic Vegetable & Olive Tapenade Bruschetta", 388.70, "Fresh vegetables with a coastal-style olive spread.", true],
        ["Tomato, Basil & Mozzarella Bruschetta", 362.70, "A Mediterranean classic loved in Aussie caf", true],
        ["Walnut, Feta And Beet Bruschetta", 453.70, "A nutty, salty, creamy and earthy flavored topping on nice crispy bread.", true],
        ["Chimi Churita And Italian Vegi Bruschetta", 414.70, "Jam packed with herbs and seasonal Italian vegetables", true]
    ],
    "Hot Coffee": [
        ["Almond Latte", 414.70, "Nutty sophistication", true],
        ["Americano", 193.70, "Refined espresso gently extended with hot water for a deep, balanced flavor.", true],
        ["Biscoff Latte", 362.70, "The warmth of espresso meets the spiced sweetness of Biscoff", true],
        ["Cafe Bombon", 284.70, "Spanish-style delight", true],
        ["Cafe Latte", 258.70, "Smooth and comforting", true],
        ["Cafe Mocha", 323.70, "Espresso mingled with rich chocolate and a touch of cream", true],
        ["Cappuccino", 232.70, "A velvety blend of espresso, steamed milk, and a delicate cloud of froth.", true],
        ["Caramel Latte", 336.70, "Smooth espresso blended with buttery caramel for a sweet finish", true],
        ["Coconut Latte", 466.70, "A tropical twist", true],
        ["Espresso", 154.70, "A bold shot of pure intensity, capturing the essence of true coffee craft.", true],
        ["Flat White", 284.70, "Creamy microfoam meets robust espresso in perfect harmony.", true],
        ["Irish Latte", 336.70, "Hints of Irish cream and caramel elevate this indulgent classic.", true],
        ["Nutella Latte", 336.70, "Hazelnut chocolate richness swirled into creamy perfection.", true],
        ["Rose Latte", 323.70, "A graceful infusion of rose essence blended with espresso and milk.", true],
        ["Vanilla Latte", 336.70, "A timeless favorite", true]
    ],
    "Cold Coffee": [
        ["Biscoff Frappe", 466.70, "A luxurious fusion of Biscoff and cold-brew elegance.", true],
        ["Brownie Frappe", 414.70, "Espresso blended with chunks of brownie", true],
        ["Caramel Frappe", 349.70, "Golden caramel drizzled through cool espresso delight", true],
        ["Choco Crumble Frappe", 375.70, "Crunchy chocolate bits meet a velvety coffee base.", true],
        ["Classic Cold Coffee", 258.70, "Smooth, refreshing, and eternally satisfying.", true],
        ["Hazelnut Frappe", 349.70, "A nutty, creamy frappe with a hint of roasted aroma.", true],
        ["Irish Frappe", 349.70, "Silky, cold espresso infused with Irish sweetness", true],
        ["Mocha Frappe", 323.70, "Chocolate and espresso blended into icy perfection.", true],
        ["Nutella Frappe", 388.70, "The decadence of Nutella meets chilled coffee bliss.", true]
    ],
    "Matcha Creations": [
        ["Hot Matcha Latte", 232.70, "Earthy matcha whisked into warm, velvety milk.", true],
        ["Iced Matcha Latte", 284.70, "Smooth, chilled matcha layered with ice and creamy milk", true],
        ["Iced Matcha Mango", 349.70, "A tropical balance of matcha and sun-ripened mango.", true],
        ["Spanish Matcha Latte", 323.70, "Matcha with a sweet Spanish twist", true]
    ],
    "Cold Brews": [
        ["Classic Cold Brew", 245.70, "Pure, smooth, and refreshingly strong", true],
        ["Coconut Cold Brew", 323.70, "Cold brew infused with creamy coconut for a mellow finish.", true],
        ["Cold Brew Lemonade", 271.70, "Bright, citrusy, and revitalizing", true],
        ["Cold Brew Tonic", 284.70, "Bold espresso meets sparkling tonic for a crisp contrast", true],
        ["Orange Cinnamon Cold Brew", 297.70, "Zesty orange and warm cinnamon uplift every sip.", true]
    ],
    "Iced Coffee": [
        ["Iced Americano", 180.70, "Pure espresso poured over ice for a clean, crisp taste.", true],
        ["Iced Cranberry Espresso", 232.70, "Espresso infused with cranberry", true],
        ["Iced Hazelnut Latte", 232.70, "A nutty, icy twist on the classic latte.", true],
        ["Iced Latte", 193.70, "Cool, creamy perfection with a gentle espresso base.", true],
        ["Iced Mint Espresso", 232.70, "Cool mint refreshes the bold espresso cor", true],
        ["Iced Mocha", 193.70, "A chilled harmony of chocolate and coffee", true],
        ["Iced Spanish Latte", 245.70, "Sweet, creamy, and perfectly refreshing.", true],
        ["Iced Strawberry Latte", 232.70, "Strawberry sweetness meets chilled espresso and milk.", true]
    ],
    "Ice Teas": [
        ["Black Currant Ice Tea", 232.70, "Deep berry tones with a tart finish.", true],
        ["Lemon Ice Tea", 206.70, "Crisp, zesty, and timelessly refreshing.", true],
        ["Lychee Ice Tea", 232.70, "Delicate floral sweetness and smooth chill.", true],
        ["Passionfruit Ice Tea", 232.70, "Tropical brightness with a gentle tang.", true],
        ["Peach Ice Tea", 219.70, "Sun-kissed peach in a soothing cold brew.", true],
        ["Redbull Ice Tea", 323.70, "A bold, energizing fusion of tea and vitality.", true],
        ["Strawberry Ice Tea", 232.70, "Sweet, fragrant strawberries in every sip.", true],
        ["Sydney Special Ice Tea", 349.70, "Our signature blend", true],
        ["Watermelon Ice Tea", 232.70, "Light, juicy, and perfectly summery.", true]
    ],
    "Hot Teas": [
        ["Chamomile Tea", 193.70, "Floral, calming, and caffeine-free.", true],
        ["Earl Grey Tea", 193.70, "Elegant black tea with hints of citrus and bergamot", true],
        ["Jasmine Tea", 193.70, "Lightly perfumed with jasmine blossoms", true],
        ["Peppermint Tea", 193.70, "Naturally refreshing and cooling.", true]
    ],
    "Hot Chocolate": [
        ["Classic European Hot Chocolate", 258.70, "Silky, indulgent, and timeless.", true],
        ["Frozen Nutella Cocoa", 258.70, "Chilled Nutella decadence with a cocoa finish", true],
        ["Hot Chocolate With Crozzo", 414.70, "A premium pairing", true],
        ["Hot Chocolate With Marshmallow", 336.70, "Classic comfort topped with fluffy melt-in-mouth marshmallows.", true],
        ["Mint Dark Chocolate Chip", 323.70, "Nutty richness blended with molten chocolate", true],
        ["Orange Zest Hot Chocolate", 310.70, "Citrus brightness in a smooth cocoa base", true],
        ["Peanut Butter Hot Choco", 323.70, "Nutty richness blended with molten chocolate", true],
        ["Rose White Hot Chocolate", 284.70, "Creamy white chocolate infused with rose petals.", true],
        ["Salted Caramel Hot Chocolate", 310.70, "Sweet meets salty in pure luxury", true],
        ["Spiced Mexican Hot Chocolate", 258.70, "Aromatic cocoa with a touch of warm spice.", true]
    ],
    "Mocktails": [
        ["Bondi Berry", 349.70, "Berry medley inspired by Bondi", true],
        ["Hazelnut Fizz", 323.70, "Sparkling soda meets mellow hazelnut sweetness.", true],
        ["Lavender Mist", 323.70, "Delicate floral notes with a cooling touch", true],
        ["Lime Glow", 258.70, "Zesty lime and cooling mint", true],
        ["Mango Melody", 323.70, "Lush mango blended into tropical harmony", true],
        ["Ocean Whisper", 323.70, "Refreshing blue citrus with ocean-inspired calm.", true],
        ["Pink Lady", 323.70, "A graceful pink fusion of berries and lemon zest", true],
        ["Sydney Sunrise", 349.70, "Layers of orange and grenadine evoke a perfect dawn.", true],
        ["Tropical Zing", 323.70, "A lively blend of exotic fruits and citrus sparkle", true]
    ],
    "Milk Shakes": [
        ["Banana Peanut Butter Shake", 336.70, "Protein-rich indulgence with nutty balance", true],
        ["Berry Cookies Shake", 336.70, "Cookie crunch with a fruity twist.", true],
        ["Biscoff Shake", 336.70, "Crisp Biscoff flavor meets creamy perfection", true],
        ["Black Currant Shake", 258.70, "Sweet-tart currants in a smooth creamy base.", true],
        ["Choco Nutella Shake", 323.70, "Silky Nutella decadence in liquid form.", true],
        ["Classic Chocolate Shake", 258.70, "Pure chocolate pleasure", true],
        ["Delicious Brownie Shake", 310.70, "Chocolate shake blended with fudgy brownie bits.", true],
        ["Kit Kat Shake", 310.70, "Classic crunch meets creamy chocolate delight.", true],
        ["Mango Magic Shake", 258.70, "Golden mangoes blended with cool milk and ice cream", true],
        ["Mixberry Melody Shake", 323.70, "A medley of berries swirled into frothy magic.", true],
        ["Oreo Delight Shake", 310.70, "Crushed Oreos blended into creamy bliss", true],
        ["Red Velvet Shake", 323.70, "Velvety smooth, rich, and elegantly sweet.", true],
        ["Strawberry Bless Shake", 258.70, "A burst of ripe strawberries in every sip.", true]
    ]
};

const images = [
    "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518557342795-a22627cbcae3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585409893049-74d6cce3f4dc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop"
];

const result = Object.entries(data).map(([cat, items], catIndex) => {
    return {
        category: cat,
        items: items.map((item, itemIndex) => {
            // Pick a semi-random image from the list based on indices so it is stable
            const imgIdx = (catIndex * 3 + itemIndex) % images.length;
            return {
                id: `${cat.slice(0, 3).toLowerCase()}-${itemIndex + 1}`,
                name: item[0],
                price: item[1],
                description: item[2],
                isVeg: item[3],
                image: images[imgIdx]
            };
        })
    };
});

fs.writeFileSync('c:/Users/Kundan/Desktop/sydney stories/src/data/menu.json', JSON.stringify(result, null, 2));
console.log('Done mapping menu.');
