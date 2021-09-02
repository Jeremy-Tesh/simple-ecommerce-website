import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preiview-collection/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { collections: SHOP_DATA };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProperties }) => (
          <CollectionPreview key={id} {...otherCollectionProperties} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
