# webpack es ->
 module bundler for js app->
toma todos los file y los assetes -> 
los convierte en un solo fichero-->sass -js
la diferecnia con grunt- glup es que son task manager-->
se le dice que hacer y lo hace->
webpack realiza mas funciones under de hook--> por debajo-->
manageing al the dependecis-->
administra todas las dependencias->assetes y files-->


cd ..
para iniciar un webpack,js
--> npm init
agregar deoendencias con npm o con yarn
#        yar add -D webpack 
salve en las depencias es como 
#        npm --save --dev
se guarda en 
#   "devDependencies": {"webpack": "^4.1.0"}
        
se crea un carpeta 
src--> el cpodigo del pr
dist--> el compilado

crear un bundle dentre index.js->
el file de confirturacion como gulp.js es 
webpack.config.js-> en la raiz del proyecto

//es el file de entrada para webpack empieze a generar
#   module.exports = {
#        entry : './src/index.js',
#        path   : path.resolve(__dirname, 'dist')
#    }
esto es node asi se importan los modulos en node.
path es la libreria de node-- y se usa para indicar la salida, la carpeta donde
generará el codigo luego de procesarlo por webpack

hay que crear un script para poder lanzar webpack en package.json
#  "scripts": {
#    "build" : "webpack",
y se pude llamar desde yanr 
#   yarn run buid
o desde npm
#   npm run build
da este error--instalar
The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D
intala esto
#  "devDependencies": {
#       "webpack": "^4.1.0",
#       "webpack-cli": "^2.0.10"

# LOADERS-->
transforma el codigo de uno a otro empaqueteado
# yarn add -D style-loader css-loader
y añadir a webpack.config,js->
hasta ahora solo hay una entrada y salida ahora se añade unas reglas 
para crear un módulo donde colocar cualquier fichero que termine con css 
#    ,module:{
#        rules : [{test : /\.css$/,
#        use : ['style-loader','css-loader']}]}
asi que los preocesa con las lib sytle-loader y css-loader
#   yarn run build  
ok
para usarlo con sass
#yarn add -D  sass-loader node-sass

# sass-loader node-sass
y agreager otra regla para sass
#{
#                test: /\.scss$/,
#                use : [
#                    {loader: 'style-loader'},
#                    {loader: 'css-loader'},
 #                   {loader: 'sass-loader'}
 #               ]
 #           }

 