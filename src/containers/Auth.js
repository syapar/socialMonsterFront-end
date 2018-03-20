import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Button, FormGroup, ControlLabel, FormControl, Checkbox, Image, Glyphicon } from 'react-bootstrap';

import * as PageTypes from '../constants/PageTypes';
import * as UserProviderTypes from '../constants/UserProviderType';
import { signIn } from '../actions/userActions';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    };

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    onRegisterButtonClick = event => {
        event.preventDefault();

        this.props.history.replace(PageTypes.REGISTER);
    };

    onFacebookButtonClick = event => {
        event.preventDefault();

        const { signIn } = this.props;
        signIn(UserProviderTypes.FACEBOOK);
    };


    onTwitterButtonClick = event => {
        event.preventDefault();

        const { signIn } = this.props;
        signIn(UserProviderTypes.TWITTER);
    };


    render() {
        return (
            <div style={{maxWidth:'400px'}}>
                <Image style={{height:'100px'}} src="/icon.png" responsive />
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup controlId="rememberMeCheck" bsSize="large">
                        <Checkbox>Remember Me</Checkbox>
                    </FormGroup>

                    <Button
                        block
                        bsSize="lg"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
                <Button
                    block
                    bsSize="lg"
                    bsStyle="danger"
                    onClick={this.onRegisterButtonClick}
                >
                    Register
                </Button>
                <div>
                    <Button
                        bsSize="lg"
                        bsStyle="primary"
                        onClick={this.onFacebookButtonClick}
                    >
                        <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                        Login With Facebook
                    </Button>

                    <Button
                        bsSize="lg"
                        bsStyle="info"
                        onClick={this.onTwitterButtonClick}
                    >
                        <Glyphicon glyph="glyphicon glyphicon-retweet" /> Login With Twitter
                    </Button>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    signIn : bindActionCreators(signIn,dispatch),
});

Auth = connect(
    null,
    mapDispatchToProps
)(Auth);

export default withRouter(Auth);