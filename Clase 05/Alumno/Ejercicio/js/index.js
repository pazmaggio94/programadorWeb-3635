console.log('Init app')

function Car (model, brand, year) {
  var id = Math.random()

  this.model = model

  this.brand = brand

  this.year = year

  this.getId = function () {
    return id
  }

  this.getCarName = function() {
    var textCarData = this.model + ', ' + this.brand + ', ' + this.year + ', '
    return textCarData
  }

}

var fordEcoSport = new Car('Suran', 'Volkswagen', 2016)

console.log(
  fordEcoSport.model,
  fordEcoSport.brand,
  fordEcoSport.year,
  fordEcoSport.getId()
)