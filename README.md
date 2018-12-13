![Logo EDboilerplate](/public/assets/img/logo.png)

# LaCorazaFrontend

Es la parte visual del e-commerce LaCoraza.

## Características en el desarrollo del Frontend de LaCoraza:

* Se usa gulp para automatizar las tareas
* Se desarrolla con el uso de Sass, Pug y ES6.
* Compilando Sass con autoprefixer y muestra los cambios en tiempo real
* Compilando Pug y actualiza el navegador con cada cambio
* Compilando ES6 con soporte para módulos ES6 (importar y exportar modulos)
* Tiene una estructura de estilos (con Sass) basada en SMACSS y ITCSS
* Tiene una estructura para HTML (con Pug) que divide páginas e includes.
* Tiene una estructura para importar y exportar modulos ES6
* Se optimiza y comprime imágenes

## Modo de uso


1. Ejecute en terminal `npm install -g gulp-cli`
2. Ejecute `npm install` (asegurese de tener npm actualizado y Nodejs en v6 como minimo)
3. Se Ejecuta `gulp dev` para ver el trabajo en desarrollo
4. Se Ejecuta `gulp build` para compilar sus archivos para produccion


## Estructura

1. La carpeta **src** contiene la estructura de archivos con la que trabajará
2. La carpeta **public** contiene los archivos compilados que deberan llevarse a producción
3. Para Sass importe sus partials desde `styles.scss`, el orden está indicado en el mismo archivo
4. Para Pug, la carpeta `pages` contiene las paginas del proyecto y la carpeta `includes` los bloques.
5. Para Js, la carpeta `modules` contiene los módulos que serán importados desde `index.js`

Página creada desde cero sin ningún framwwork o librería de CSS
