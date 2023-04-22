import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

interface LayoutProps {
  children?: React.ReactNode;
}

export default class Layout extends React.PureComponent<LayoutProps> {
  public render() {
    return (
      <React.Fragment>
        <div className="menu-bar">
          <NavMenu />
          <Container>
            {this.props.children}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
