import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>

    <div className="preview">
      {items
        .filter((x, i) => i < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
