import React from "react";
import { Route, Switch} from "react-router-dom";

import ClassList from "./ClassList";
import ClassAddForm from "./ClassAddForm";
import ClassEditForm from "./ClassEditForm";

const Class = ({ match }) => {
  const { path } = match;

  return (
    <Switch>
      <Route exact path={path} component={ClassList} />
      <Route path={`${path}/add`} component={ClassAddForm} />
      <Route path={`${path}/edit/:id`} component={ClassEditForm} />
    </Switch>
  );
};

export default Class;
