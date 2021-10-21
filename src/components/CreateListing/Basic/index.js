import React from "react";
import { Link } from "react-router-dom";
import { Field } from "formik";

import "./basicdetail.css"


function BasicPage() {

    return (
      <div className="fieldGroup">
        <div className="details_con">
          <div className="form-group">
            <label htmlFor="">Rent</label>
            <Field type="text" name="address" placeholder="Address" />
          </div>
        </div>
      </div>
    );

}

export default BasicPage;