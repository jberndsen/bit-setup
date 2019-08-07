# bit-setup

prereqs:

1. Have bit-bin npm package globally installed.
2. Have a bit.dev account and make sure you're logged in.

steps to reproduce:

1. npm install
2. bit init
3. bit add src/components/* --tests src/components/**/*.spec.tsx
4. bit import bit.envs/compilers/react-typescript --compiler
5. bit import bit.envs/testers/jest --tester
6. bit test

ISSUE: this yields the following error message, indicating that Jest does not understand a component which directly imports a SCSS file.

● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/jeroen/Develop/jberndsen/bit-setup/dist/src/components/HelloWorld/HelloWorld.scss:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){.ui-hello-world {
                                                                                             ^

    SyntaxError: Unexpected token .

7. bit tag --all 0.0.1 --force
8. bit export COLLECTION_NAME
