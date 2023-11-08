import{j as n}from"./jsx-runtime-9c4ae004.js";import{M as d}from"./index-99a68df1.js";import"./RadialMenu-2d829bd6.js";import"./index-1b03fe98.js";import{u as t}from"./index-2ef8b458.js";import"./iframe-9c67f57b.js";import"../sb-preview/runtime.js";import"./chunk-H6ZRF7XV-146ce0bc.js";import"./index-d475d2ea.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-7579bee9.js";import"./index-356e4a49.js";import"./index-27578f8f.esm-24d23efb.js";import"./client-449ccf6c.js";function o(s){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},t(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Docs/Advanced/Collapse"}),`
`,n.jsx(e.h1,{id:"collapse",children:"Collapse"}),`
`,n.jsx(e.p,{children:`reagraph supports the ability to expand and collapse nodes and edges.
To collapse a node and its edges, simply pass a array of node ids to
the graph component like:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const App = () => {
  const nodes = [];
  const edges = [];

  // List of node ids
  const [collapsed, setCollapsed] = useState<string[]>([]);

  return (
    <GraphCanvas
      collapsedNodeIds={collapsed}
      nodes={nodes}
      edges={edges}
    />
  );
};
`})}),`
`,n.jsxs(e.p,{children:["For more complex scenarios, you expose a ",n.jsx(e.code,{children:"useCollapse"})," hook:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`
const App = () => {
  const nodes = [];
  const edges = [];
  const [collapsedNodeIds, setCollapsedNodeIds] = useState<string[]>([]);

  // Helper hook
  const { getExpandPathIds } = useCollapse({
    collapsedNodeIds,
    nodes,
    edges
  });

  function onExpandClick() {
    // Use the helper method to determine the ids to expand
    setCollapsedNodeIds(getExpandPathIds('some node id'))
  }

  return (
    <>
      <button onClick={onExpandClick}>
        Expand Node
      </button>
      <GraphCanvas
        collapsedNodeIds={collapsedNodeIds}
        nodes={nodes}
        edges={edges}
      />
    </>
  );
};
`})})]})}function I(s={}){const{wrapper:e}=Object.assign({},t(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(o,s)})):o(s)}export{I as default};
//# sourceMappingURL=Collapse-bf033c5b.js.map
