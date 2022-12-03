export type Props = Record<string, any>;

export type VNode = string | VElement;

export interface VElement {
  flag: Flags;
  tag: string;
  props?: Props;
  children?: VNode[];
  ref?: any;
  key?: string;
  dom?: HTMLElement;
  parent?: VElement;
}

export enum Flags {
  ELEMENT,
  ELEMENT_IGNORE,
  ELEMENT_FORCE_UPDATE,
  ELEMENT_NO_CHILDREN,
  ELEMENT_TEXT_CHILDREN,
  ELEMENT_KEYED_CHILDREN,
}

export type Delta = [DeltaTypes, number];

export const enum DeltaTypes {
  CREATE,
  UPDATE,
  REMOVE,
}

export const enum EditType {
  Attribute,
  Child,
}

export interface EditAttribute {
  type: EditType.Attribute;
  name: string;
  hole: string;
  lastValue?: any;
  lastEl?: HTMLElement;
}

export interface EditChild {
  type: EditType.Child;
  index: number;
  hole: string;
  lastValue?: any;
  lastEl?: HTMLElement;
}

export interface Edit {
  path: number[];
  edits: (EditAttribute | EditChild)[];
  el?: HTMLElement;
}
