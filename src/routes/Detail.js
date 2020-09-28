import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { state } = this.props.location;
    if (state) {
      return (
        <div class="detail-wrapper">
          <img src={state.poster} title={state.title} alt={state.title} />
          <div class="detail">
            <div class="detail__title-wrapper">
              <span className="detail__title">{state.title}</span>
              <span className="detail__year">({state.year})</span>
            </div>
            <ul className="detail__genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="detail__genres_genre">
                  {genre}
                </li>
              ))}
            </ul>
            <span className="detail__summary">{state.summary}</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
