import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />
          <div className="d-flex align-items-center">
            <img
              className="Img__twitter"
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            />
            <p className="Info__twitter">@{this.props.badge.twitter}</p>
          </div>
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  //el valor lo tenemos q guardar en algun sitio, que luego se pueda usar fuera de useMemo(), para esto, quitamos const filteredBadges y dejamos solo React.useMemo(), vamos a convertirlo en un estado. El valor inicial es la lista de badges. Entonces cuando ya tengamos ese resultado, lo tenemos q guardar.
  const [filteredBadges, setFilteredResults] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName}${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    //tenemos q guardar el valor
    setFilteredResults(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.reverse().map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                style={{ textDecoration: "none" }}
                className="text-muted"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
