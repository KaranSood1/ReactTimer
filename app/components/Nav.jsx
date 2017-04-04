var React = require ('react');

var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  render : function () {
    return  (
      <div className="top-bar">
  <div className="top-bar-left">
    <ul className="menu">
      <li className="menu-text">React Timer X
      </li>
      <li >
        <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight : 'bold'}}>Timer</IndexLink>
      </li>

      <li>
        <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight : 'bold'}}>Countdown</Link>
      </li>

      <li>
        <Link to="/about" activeClassName="active-link" activeStyle={{fontWeight : 'bold'}}>About</Link>
      </li>
    </ul>

  </div>
  <div className="top-bar-right">
    <form onSubmit={this.onSearch}>
      <ul className="menu">
        <li className="menu-text">
        Created By KS
        </li>
      </ul>
    </form>

  </div>
</div>

    )
  }
})

module.exports = Nav;
