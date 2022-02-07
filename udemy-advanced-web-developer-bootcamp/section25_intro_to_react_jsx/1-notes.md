1. all react components extends the React.Component class
2. all react components have the render() { ... return ()}method
```
    render() { 
        ... 
        return (

        )
    }
```
3. functional components is declared like a funciton, no need to extend React.Component class and no need to have render() method
```
const Pet = () => {
    return <></>
}

function Welcome() {
    return <></>
}
```
4. react component can only return a single parent element, can use React fragment `<></>`
5. all JSX tags must be closed
```
    <img />
    <div></div>
    <Cat />
```
6. React components should be named in PascalCase
7. any html attributes that have clash with javascript keyword, we need to name differently, so <div class=""></div> becomes <div className=""></div>
8. inline style in react is not that too bad because everything is bundled into one when compiled
9. inline style in react
```
    const liStyle = {fontSize: '1.5em'}  // needs to be in the format of javascript object, not css syntax

    <li style={liStyle}>Sleep</li>    // use {} to indicate need to evaluate javascript inside JSX
```
10. when react renders an array of elements, each element should have a unique key
11. babel: translate es6 to es5, translate jsx component to vanila js
12. webpack: build tool, bundle multiple js files together, run babel before script is run on browser so it's faster for user, also bundles other assets like css, image, etc
13. create-react-app
- files under `public` are files that don't go through the webpack process
- in `package.json`, the dependency `react-scripts` is for webpack
14. export default
- when import no need to add curly braces like `{ App }`, can just use `import App from './App';`, and can call it any name e.g. `import Pizza from './App';`
15. export not as default
- have to use curly braces, `export { App };`
- when import also have to use curly braces, also can rename `import { App as Pizza }from './App';`
16. reinstall npm modules
```
cd react-app
rm package-lock.json
rm -rf node_modules/
npm install
```
17. elements from array must be identitied with a unique key, best practice is not to use index, but id of the object, because if index changes might mess up with state, but if index doesn't it's still fine to use index

