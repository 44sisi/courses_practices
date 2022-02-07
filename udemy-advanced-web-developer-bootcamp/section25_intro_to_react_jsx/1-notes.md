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