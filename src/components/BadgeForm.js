import React from "react";
import Swal from "sweetalert2/dist/sweetalert2";

class BadgeForm extends React.Component {
  // state = {};
  alertaFaltanDatos(faltantes) {
    Swal.fire({
      title: "Alto ahi!",
      text: `Te faltan campos por rellenar 🧐\n ${faltantes}`,
      icon: "error",
    });
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form was submitted");
  //   console.log(this.props.formValues);
  //   let datoFaltante = [];

  //   for (const propiedad in this.props.formValues) {
  //     if (this.props.formValues.hasOwnProperty(propiedad)) {
  //       const valor = this.props.formValues[propiedad];
  //       if (valor === "") {
  //         datoFaltante.push(propiedad);
  //       }
  //     }
  //   }

  //   if (
  //     this.props.formValues.firstName === "" ||
  //     this.props.formValues.lastName === "" ||
  //     this.props.formValues.email === "" ||
  //     this.props.formValues.jobTitle === "" ||
  //     this.props.formValues.twitter === ""
  //   ) {
  //     console.log("faltan datos");
  //     let camposFaltantes = datoFaltante.join(",");
  //     this.alertaFaltanDatos(camposFaltantes);
  //   }
  // };

  render() {
    return (
      <div className="mb-3">
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
