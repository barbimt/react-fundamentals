import React from "react";

import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import Swal from "sweetalert2/dist/sweetalert2";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  // state = {};
  alertaFaltanDatos(faltantes) {
    Swal.fire({
      title: "Alto ahi!",
      text: `Te faltan campos por rellenar 🧐\n ${faltantes}`,
      icon: "error",
    });
  }

  handleChange = (e) => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
    let datoFaltante = [];

    for (const propiedad in this.state.form) {
      if (this.state.form.hasOwnProperty(propiedad)) {
        const valor = this.state.form[propiedad];
        if (valor === "") {
          datoFaltante.push(propiedad);
        }
      }
    }

    if (
      this.state.form.firstName === "" ||
      this.state.form.lastName === "" ||
      this.state.form.email === "" ||
      this.state.form.jobTitle === "" ||
      this.state.form.twitter === ""
    ) {
      console.log("faltan datos");
      let camposFaltantes = datoFaltante.join(",");
      console.log(camposFaltantes);
      this.alertaFaltanDatos(camposFaltantes);
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col p-2">
              <Badge
                firstName={this.state.form.firstName || "First_Name"}
                lastName={this.state.form.lastName || "Last_Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job_Title"}
                email={this.state.form.email || "Email"}
                avatarUrl="https://secure.gravatar.com/avatar/6f334768c1f0ad84f3a608bb79d32b9c"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;
