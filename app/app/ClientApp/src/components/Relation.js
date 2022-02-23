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
    remove: (id) => cyRef.current.getElementById(id).remove(),
  }));

  useEffect(() => {
    cyRef.current.layout(layout).run();
  }, [nodes, edges]);

  const cyCallback = useCallback(
    (cy) => {
      if (cyRef.current) return;
      cyRef.current = cy;

      if (!eh) {
        setEh(
          cy.edgehandles({
            snap: true,
            snapThreshold: 20,
            noEdgeEventsInDraw: true,
            disableBrowserGestures: true,
          })
        );
      }

      cy.on("ehcomplete", (event, sourceNode, targetNode, addedEdge) => {
        const source = sourceNode.data();
        const target = targetNode.data();
        const id = addedEdge.id();
        setRelation({ source, target, id, newer: true });
      });

      cy.on("dbltap ", "edge", (event) => {
        const source = event.target.source().data();
        const target = event.target.target().data();
        const { id, idPrivacy, affinity } = event.target.data();
        setRelation({ source, target, id, idPrivacy, affinity });
      });
    },
    [setRelation, eh]
  );

  const data = CytoscapeComponent.normalizeElements({ nodes, edges });

  return (
    <CytoscapeComponent
      className="cy"
      elements={data}
      stylesheet={style}
      cy={cyCallback}
      minZoom={0.6}
      maxZoom={1.5}
    />
  );
};

export default forwardRef(Relation);
