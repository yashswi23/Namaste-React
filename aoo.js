const heading = React.createElement("h1",{id: "head"},"Hello World from React");
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(heading);

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am a H1 tag")));
root.render(parent);