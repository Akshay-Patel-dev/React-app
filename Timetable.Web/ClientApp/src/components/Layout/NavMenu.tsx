import * as React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import ToggleButton from '../common/ToogleButton';

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    }
    
  
    public render() {
        const styles = {
            styles: {
              display: 'flex',
              justifyContent:'space-between',
             marginTop:'2px'
            },
            header: {
              marginTop: '10px',
            }
          };
          
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container style={styles.styles}>
                        <NavbarBrand tag={Link} to="/" style={styles.header}>Timetable</NavbarBrand>
                        <NavbarBrand> <ToggleButton /></NavbarBrand>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
