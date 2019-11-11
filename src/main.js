class Dessert {
  constructor(type, calories) {
    this.type = type;
    this.year = calories;
    console.log('Bake')
  }
}

class Icecream extends Dessert {
  constructor(type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }

  includeSpoon() {
    console.log('Here is your spoon!');
  }

}
const vanillaIceCream = new Icecream('Ice Cream', 340, 'Vanilla', 3);
console.log(vanillaIceCream);
vanillaIceCream.includeSpoon();
