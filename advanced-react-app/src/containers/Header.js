import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends React.Component {
    onClickAuthentication = () => {
        this.props.setAuthentication(!this.props.isLoggedIn);
    }

    renderAuthenticationLabel = () => {
        if (this.props.isLoggedIn) {
            return 'Déconnexion';
        } else {
            return 'Connexion';
        }
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs bg-primary">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Resources">Ressources</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={this.onClickAuthentication}>
                            {this.renderAuthenticationLabel()}
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentication.isLoggedIn
    };
}

export default connect(mapStateToProps, actions)(Header);