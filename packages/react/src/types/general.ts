/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FitViewParamsBase,
  FitViewOptionsBase,
  ZoomInOut,
  ZoomTo,
  SetViewport,
  GetZoom,
  GetViewport,
  SetCenter,
  FitBounds,
  XYPosition,
} from '@xyflow/system';

import type { NodeChange, EdgeChange, Node, Edge, ReactFlowInstance } from '.';

export type OnNodesChange = (changes: NodeChange[]) => void;
export type OnEdgesChange = (changes: EdgeChange[]) => void;

export type OnNodesDelete = (nodes: Node[]) => void;
export type OnEdgesDelete = (edges: Edge[]) => void;
export type OnDelete = (params: { nodes: Node[]; edges: Edge[] }) => void;

export type UnselectNodesAndEdgesParams = {
  nodes?: Node[];
  edges?: Edge[];
};

export type OnSelectionChangeParams = {
  nodes: Node[];
  edges: Edge[];
};

export type OnSelectionChangeFunc = (params: OnSelectionChangeParams) => void;

export type FitViewParams = FitViewParamsBase<Node>;
export type FitViewOptions = FitViewOptionsBase<Node>;
export type FitView = (fitViewOptions?: FitViewOptions) => boolean;
export type OnInit<NodeType extends Node = Node, EdgeType extends Edge = Edge> = (
  reactFlowInstance: ReactFlowInstance<NodeType, EdgeType>
) => void;

export type ViewportHelperFunctions = {
  zoomIn: ZoomInOut;
  zoomOut: ZoomInOut;
  zoomTo: ZoomTo;
  getZoom: GetZoom;
  setViewport: SetViewport;
  getViewport: GetViewport;
  fitView: FitView;
  setCenter: SetCenter;
  fitBounds: FitBounds;
  screenToFlowPosition: (position: XYPosition) => XYPosition;
  flowToScreenPosition: (position: XYPosition) => XYPosition;
  viewportInitialized: boolean;
};
