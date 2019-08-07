Instructions for a consuming app will follow here.

1. npm config set '@bit:registry' https://node.bit.dev
2. npx create-react-app my-app --typescript
3. cd my-app
4. npm i @bit/COLLECTION_NAME.hello-world
5. Update App.tsx to import and use the HelloWorld component

ISSUE:
Failed to compile.

./node_modules/@bit/kramp.kramp-guide.hello-world/dist/HelloWorld.scss (./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./node_modules/@bit/kramp.kramp-guide.hello-world/dist/HelloWorld.scss)
To import Sass files, you first need to install node-sass.
Run `npm install node-sass` or `yarn add node-sass` inside your workspace.
