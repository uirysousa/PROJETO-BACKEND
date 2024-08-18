const connection = require("../config/database");

//desta forma ele ja puxa os model
require('../models/UsuarioModel');
require('../models/CategoriaModel');
require('../models/ProdutosModel');
require('../models/ProdutosImg');
require('../models/ProdutosOption');
require('../models/ProdutosCatModel');

connection.sync({force:true});