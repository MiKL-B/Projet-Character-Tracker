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

const Relation = ({ edges, nodes, setRelation }, ref) => {
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
    if (cyRef.current) {
      cyRef.current.layout(layout).run();
      cyRef.current.fit();
    }
  }, [edges, nodes]);

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

      cy.on("render", () => {
        cy.edges().forEach((e) =>
          e.style(
            "line-color",
            e.data().affinity === 5
              ? "blue"
              : e.data().affinity > 5
              ? "green"
              : "red"
          )
        );
      });

      cy.on("dbltap ", "node", (event) => {
        console.dir(event.target.data());
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

  cyRef.current?.on(
    "ehcomplete",
    (event, sourceNode, targetNode, addedEdge) => {
      addedEdge.remove();
      const source = sourceNode.data();
      const target = targetNode.data();
      const id = addedEdge.id();
      setRelation({ source: source, target: target, addedEdge: id });
    }
  );

  const data = CytoscapeComponent.normalizeElements({ nodes, edges });
  console.log(edges.length);

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
