import React from "react";
import { withRouter } from "react-router-dom";

import PersonList from "../../components/person-list/person-list.component";
import Button from "../../components/button/button.component";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <PersonList />
        <Button onClick={() => this.props.history.push("/new")}>Nuevo</Button>
      </div>
    );
  }
}

export default withRouter(HomePage);
