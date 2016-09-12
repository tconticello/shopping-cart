var Product= require('../models/product');

var mongoose= require('mongoose');
mongoose.connect('localhost:27017/shopping');
var products= [

new Product({
imagePath: 'http://mla-d2-p.mlstatic.com/dulce-de-membrillo-5-kg-caja-arcor-compra-mejor--558321-MLA20756251963_062016-O.webp?square=false',
title: 'Dulce Membrillo',
description: '1 kg',
price: 50

}),

new Product({
imagePath: 'http://mla-d1-p.mlstatic.com/dulce-de-leche-vacalin-x-10-kg-251311-MLA20523138921_122015-O.webp?square=false',
title: 'Dulce de Leche',
description: 'Carton de 5 Kg',
price: 350

}),

new Product({
imagePath: 'http://mla-d1-p.mlstatic.com/yerba-playadito-de-medio-kilo-vienen-10-unidades-196121-MLA20708416800_052016-O.webp?square=false',
title: 'Yerba Playadito',
description: '1 kg',
price: 350

})


];

var done=0;
for (var i=0; i< products.length; i++){
products[i].save(function(err,results){
		done++;
		if(done===products.lenght){
			exit();
		}


});
}

function exit(){
mongoose.disconnect();
}

