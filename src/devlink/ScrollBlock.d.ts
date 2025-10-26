import * as React from "react";
import * as Types from "./types";

declare function ScrollBlock(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  number?: Types.Asset.Image;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
}): React.JSX.Element;
