import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as m}from"./index-1b03fe98.js";import{G as d}from"./RadialMenu-2d829bd6.js";import{u as f}from"./useSelection-f5de580b.js";import{c as o,a as n}from"./demo-6642a2fc.js";import"./index-27578f8f.esm-24d23efb.js";import"./extends-98964cd2.js";import"./client-449ccf6c.js";import"./index-6fd5a17b.js";const A={title:"Demos/Selection/Lasso",component:d},p=()=>{const s=m.useRef(null),{actives:a,selections:t,onNodeClick:r,onCanvasClick:l,onLasso:c,onLassoEnd:i}=f({ref:s,nodes:o,edges:n,type:"multi"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{zIndex:9,userSelect:"none",position:"absolute",top:0,right:0,background:"rgba(0, 0, 0, .5)",color:"white"},children:e.jsx("h3",{style:{margin:5},children:"Hold Shift and Drag to Lasso"})}),e.jsx(d,{ref:s,nodes:o,edges:n,selections:t,actives:a,onNodeClick:r,onCanvasClick:l,lassoType:"all",onLasso:c,onLassoEnd:i})]})},g=()=>{const s=m.useRef(null),{actives:a,selections:t,onNodeClick:r,onCanvasClick:l,onLasso:c,onLassoEnd:i}=f({ref:s,nodes:o,edges:n,type:"multi"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{zIndex:9,userSelect:"none",position:"absolute",top:0,right:0,background:"rgba(0, 0, 0, .5)",color:"white"},children:e.jsx("h3",{style:{margin:5},children:"Hold Shift and Drag to Lasso"})}),e.jsx(d,{ref:s,nodes:o,edges:n,selections:t,actives:a,onNodeClick:r,onCanvasClick:l,lassoType:"node",onLasso:c,onLassoEnd:i})]})},u=()=>{const s=m.useRef(null),{actives:a,selections:t,onNodeClick:r,onCanvasClick:l,onLasso:c,onLassoEnd:i}=f({ref:s,nodes:o,edges:n,type:"multi"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{zIndex:9,userSelect:"none",position:"absolute",top:0,right:0,background:"rgba(0, 0, 0, .5)",color:"white"},children:e.jsx("h3",{style:{margin:5},children:"Hold Shift and Drag to Lasso"})}),e.jsx(d,{ref:s,nodes:o,draggable:!0,edges:n,selections:t,actives:a,onNodeClick:r,onCanvasClick:l,lassoType:"node",onLasso:c,onLassoEnd:i})]})},h=()=>{const s=m.useRef(null),{actives:a,selections:t,onNodeClick:r,onCanvasClick:l,onLasso:c,onLassoEnd:i}=f({ref:s,nodes:o,edges:n,type:"multi"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{zIndex:9,userSelect:"none",position:"absolute",top:0,right:0,background:"rgba(0, 0, 0, .5)",color:"white"},children:e.jsx("h3",{style:{margin:5},children:"Hold Shift and Drag to Lasso"})}),e.jsx(d,{ref:s,nodes:o,edges:n,selections:t,actives:a,onNodeClick:r,onCanvasClick:l,lassoType:"edge",onLasso:c,onLassoEnd:i})]})};var C,v,x;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    actives,
    selections,
    onNodeClick,
    onCanvasClick,
    onLasso,
    onLassoEnd
  } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    type: 'multi'
  });
  return <>
      <div style={{
      zIndex: 9,
      userSelect: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'rgba(0, 0, 0, .5)',
      color: 'white'
    }}>
        <h3 style={{
        margin: 5
      }}>Hold Shift and Drag to Lasso</h3>
      </div>
      <GraphCanvas ref={graphRef} nodes={complexNodes} edges={complexEdges} selections={selections} actives={actives} onNodeClick={onNodeClick} onCanvasClick={onCanvasClick} lassoType="all" onLasso={onLasso} onLassoEnd={onLassoEnd} />
    </>;
}`,...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var L,k,y;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    actives,
    selections,
    onNodeClick,
    onCanvasClick,
    onLasso,
    onLassoEnd
  } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    type: 'multi'
  });
  return <>
      <div style={{
      zIndex: 9,
      userSelect: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'rgba(0, 0, 0, .5)',
      color: 'white'
    }}>
        <h3 style={{
        margin: 5
      }}>Hold Shift and Drag to Lasso</h3>
      </div>
      <GraphCanvas ref={graphRef} nodes={complexNodes} edges={complexEdges} selections={selections} actives={actives} onNodeClick={onNodeClick} onCanvasClick={onCanvasClick} lassoType="node" onLasso={onLasso} onLassoEnd={onLassoEnd} />
    </>;
}`,...(y=(k=g.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var E,R,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    actives,
    selections,
    onNodeClick,
    onCanvasClick,
    onLasso,
    onLassoEnd
  } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    type: 'multi'
  });
  return <>
      <div style={{
      zIndex: 9,
      userSelect: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'rgba(0, 0, 0, .5)',
      color: 'white'
    }}>
        <h3 style={{
        margin: 5
      }}>Hold Shift and Drag to Lasso</h3>
      </div>
      <GraphCanvas ref={graphRef} nodes={complexNodes} draggable edges={complexEdges} selections={selections} actives={actives} onNodeClick={onNodeClick} onCanvasClick={onCanvasClick} lassoType="node" onLasso={onLasso} onLassoEnd={onLassoEnd} />
    </>;
}`,...(N=(R=u.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var b,S,j;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    actives,
    selections,
    onNodeClick,
    onCanvasClick,
    onLasso,
    onLassoEnd
  } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    type: 'multi'
  });
  return <>
      <div style={{
      zIndex: 9,
      userSelect: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'rgba(0, 0, 0, .5)',
      color: 'white'
    }}>
        <h3 style={{
        margin: 5
      }}>Hold Shift and Drag to Lasso</h3>
      </div>
      <GraphCanvas ref={graphRef} nodes={complexNodes} edges={complexEdges} selections={selections} actives={actives} onNodeClick={onNodeClick} onCanvasClick={onCanvasClick} lassoType="edge" onLasso={onLasso} onLassoEnd={onLassoEnd} />
    </>;
}`,...(j=(S=h.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};export{u as Dragging,h as EdgesOnly,p as NodesAndEdges,g as NodesOnly,A as default};
//# sourceMappingURL=Lasso.story-dab275f3.js.map
