import CytoscapeComponent from "react-cytoscapejs";
import edgehandles from "cytoscape-edgehandles";
import cytoscape from "cytoscape";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { layout, style } from "./Relation.config";
cytoscape.use(edgehandles);

const Relation = ({ edges, nodes }, ref) => {
  const cyRef = useRef(null);
  const [eh, setEh] = useState();

  useImperativeHandle(ref, () => ({
    disableDrawMode: () => {
      eh.disableDrawMode();
    },
    enableDrawMode: () => {
      eh.enableDrawMode();
    },
  }));

  useEffect(() => {
    if (cyRef.current !== null) {
      cyRef.current.layout(layout).run();
      cyRef.current.fit();
    }
  });

  const cyCallback = useCallback(
    (cy) => {
      if (cyRef.current) return;
      cyRef.current = cy;

      setEh(
        cy.edgehandles({
          snap: true,
          snapThreshold: 20,
        })
      );

      cy.on("dbltap ", "node", (event) => {
        console.dir(event.target.data());
      });

      cy.on("ehcomplete", (event, sourceNode, targetNode) => {
        const source = sourceNode.id();
        const target = targetNode.id();
        console.log("source : ", source);
        console.log("target : ", target);
      });

      //remove node on right click
      cy.on("cxttap", "node", (evt) => {
        const node = evt.target;
        console.log("tapped", node.id());
        cy.remove(node);
      });

      //remove edge on right click
      cy.on("cxttap", "edge", (evt) => {
        const edge = evt.target;
        console.log("tapped", edge.id());
        cy.remove(edge);
      });
    },
    [cyRef]
  );
  const data = CytoscapeComponent.normalizeElements({ nodes, edges });

  return (
    <CytoscapeComponent
      className="cy"
      elements={data}
      stylesheet={style}
      layout={layout}
      cy={cyCallback}
      minZoom={0.8}
      maxZoom={1.5}
    />
  );
};

export default forwardRef(Relation);
