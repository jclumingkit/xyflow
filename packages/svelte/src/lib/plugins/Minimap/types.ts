import type { PanelPosition } from '@reactflow/system';

import type { Node } from '$lib/types';

export type GetMiniMapNodeAttribute = (node: Node) => string;

export type MiniMapProps = {
  bgColor?: string;
  nodeColor?: string | GetMiniMapNodeAttribute;
  nodeStrokeColor?: string | GetMiniMapNodeAttribute;
  nodeClassName?: string | GetMiniMapNodeAttribute;
  nodeBorderRadius?: number;
  nodeStrokeWidth?: number;
  maskColor?: string;
  maskStrokeColor?: string;
  maskStrokeWidth?: number;
  position?: PanelPosition;
  class?: string;
  style?: string;
  ariaLabel?: string | null;
  width?: number;
  height?: number;
  // onClick?: (event: MouseEvent, position: XYPosition) => void;
  // onNodeClick?: (event: MouseEvent, node: Node) => void;
  // pannable?: boolean;
  // zoomable?: boolean;
};
