import React from "react";
import { api } from "../../services/api";
import { Card } from "../Card";
import "./styles.css";

export class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { piece: [] };
  }
  async componentDidMount() {
    const response = await api.get("data");
    const piecedata = response.data.map((piece) => {
      return {
        url: piece.url,
        description: piece.description,
        imagepath: piece.imagepath,
        sizes: piece.sizes.map((size) => {
          return size[0];
        }),
      };
    });
    this.setState({ piece: piecedata });
    console.log(piecedata);
  }

  render() {
    return (
      <div className="catalog-container pageBreakAfter">
        {this.state.piece.map((info) => {
          return (
            <Card
              key={info.imagepath}
              url={`/images/${info.imagepath}`}
              description={info.description}
              sizes={info.sizes}
              imagepath={info.imagepath}
            />
          );
        })}
      </div>
    );
  }
}
