import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";

import Header from "../header/header";
import BasicPage from "./Basic/index";
import LocationPage from "./Location/index";
import { MultipleFileUploadField } from "./Images/index";

class ListingForm extends Component {
  render() {
    const handleSubmit = () => {
      console.log("Hii");
    };

    return (
      <div>
        <Prompt
          when={true}
          message={"Are you sure you want to navigate away?"}
        />
        <Formik
          initialValues={{
            property_name: "",
            onlyfor: "",
            images: [],
            rent: "",
            disc: "",
            no_rooms: "",
            max_student_per_room: "",
            coordinates: [],
            formattedAddress: "",
            facilitates: "",
          }}
          onSubmit={handleSubmit()}
        >
          <Form>
            <ToastContainer />
            <Header />
            <Switch>
              <Redirect from="/listing" exact to="/listing/location" />
              <Route path="/listing/location">
                <LocationPage
                  google={this.props.google}
                  center={{ lat: 18.5204, lng: 73.8567 }}
                  height="300px"
                  zoom={15}
                />
              </Route>
              <Route path="/listing/basic">
                <BasicPage />
              </Route>
              <Route path="/listing/submit">
                <MultipleFileUploadField name="images" />
              </Route>
            </Switch>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default ListingForm;
