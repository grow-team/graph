const gulp = require('gulp');
const rollup = require( 'rollup' );
const rollupTypescript = require('rollup-plugin-typescript');
const fs = require( 'fs' );
const commonjs = require( 'rollup-plugin-commonjs' );
const resolve = require( 'rollup-plugin-node-resolve' );

let cache;
let meduleName ='Graph';
let aimPatn = './dist/umd/';

gulp.task('build', function () {
    gulp.watch('./src/**/*.ts',['build']);
    rollup.rollup({
        entry: './src/graph.ts',
        plugins : [
            rollupTypescript(),
            resolve(),
            commonjs({
                include: 'node_modules/**',
                exclude: [],
                extensions: [ '.js', '.ts' ],
                ignoreGlobal: false
            })
        ],
        cache: cache
    }).then( function ( bundle ) {
        return bundle.generate({
            format: 'umd',
            moduleName: meduleName
        });
    }).then( function ( result ) {
        fs.exists(aimPatn, function( res ){
            res || fs.mkdirSync(aimPatn,7777);   
            fs.writeFileSync( aimPatn+'graph.js', result.code.replace(`global.${meduleName} = {}`,'global') );               
        })  
    }).catch(console.error); 
});
