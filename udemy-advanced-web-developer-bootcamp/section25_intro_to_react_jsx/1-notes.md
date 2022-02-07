1. all react components extends the React.Component class
2. all react components have the render() { ... return ()}method
```
    render() { 
        ... 
        return (

        )
    }
```
3. react component can only return a single parent element
4. all JSX tags must be closed
```
    <img />
    <div></div>
    <Cat />
```
5. React components should be named in PascalCase
6. any html attributes that have clash with javascript keyword, we need to name differently, so <div class=""></div> becomes <div className=""></div>
7. inline style in react is not that too bad because everything is bundled into one when compiled
8. inline style in react
```
    const liStyle = {fontSize: '1.5em'}  // needs to be in the format of javascript object, not css syntax

    <li style={liStyle}>Sleep</li>    // use {} to indicate need to evaluate javascript inside JSX
```
9. when react renders an array of elements, each element should have a unique key
10. babel: translate es6 to es5, translate jsx component to vanila js
11. webpack: build tool, bundle multiple js files together, run babel before script is run on browser so it's faster for user, also bundles other assets like css, image, etc
12. create-react-app
- files under `public` are files that don't go through the webpack process
- in `package.json`, the dependency `react-scripts` is for webpack
13. export default
- when import no need to add curly braces like `{ App }`, can just use `import App from './App';`, and can call it any name e.g. `import Pizza from './App';`
14. export not as default
- have to use curly braces, `export { App };`
- when import also have to use curly braces, also can rename `import { App as Pizza }from './App';`