function genderTranslate (gender) {
    switch (gender){
        case 'male':
        return 'Masculino'
        break
        case 'female':
        return 'Femenino'
        break
        case 'n/a':
        return 'n/a'
        break
        default:
        return gender
        break
    }
     }
   
   var TRANSLATES = {
       ES: {
   blue: 'Azules',
   yellow: 'Amarillos',
   red: 'Rojos',
   orange: 'Naranjas',
   brown: 'Marrones',
   black: 'Negros',
   gold: 'Dorados',
   white: 'Blancos',
   green: 'Verdes',
   'blue-gray': 'Grisaceos',
   },
       EN: {
   blue: 'Blue',
   yellow: 'Amarillo',
   red: 'Red',
   orange: 'Orange',
   brown: 'Brown',
   black: 'Black',
   gold: 'Gold',
   white: 'White',
   green: 'Green',
   'blue-gray': 'Blue-gray',
       },
       PT: {
   blue: 'Azulciño',
   yellow: 'Amarilliño',
   red: 'Rojiziños',
   orange: 'Naranjiños',
   brown: 'Marronciños',
   black: 'Negriños',
   gold: 'Doradiños',
   white: 'Blanquiños',
   green: 'Verdeciños',
       }
   }
   
   function eyeTranslate(lang, eyeColor){
     return TRANSLATES [lang][eyeColor] || eyeColor
   }

   export{
       genderTranslate, eyeTranslate
   }