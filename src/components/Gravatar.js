import React from "react";
import md5 from "md5";

//recibe props, porque vamos a querer leer el email de los props
function Gravatar(props) {
  const email = props.email;
  // al email le vamos a querer sacar el valor de md5
  const hash = md5(email);

  return (
    <img
      className={props.className}
      src={`https://gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
