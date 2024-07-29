import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from "./components/Common/Button";
import userEvent from '@testing-library/user-event'
import NavbarItem from "./components/Navbar/NavbarItem";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Navbar/Logo";
import SideBar from "./components/SideBar/SideBar";



describe('Button component', () => {
  it('renders the button with children', () => {
    render(<Button children={"Click Me"} />);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    render(<Button>Styled Button</Button>);
    const buttonElement = screen.getByText('Styled Button');
    expect(buttonElement).toHaveStyle({
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      backgroundColor: 'transparent',
      fontSize: '12px',
    });
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    userEvent.click(buttonElement);
    await screen.findByText('Click Me');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("Register button component", () => {
    it("renders the button with children", () => {
        render(<Button children={"Register"} />);
        const buttonElement = screen.getByText("Register");
        expect(buttonElement).toBeInTheDocument();
    });

    it("applies the correct styles", () => {
        render(<Button>Register</Button>);
        const buttonElement = screen.getByText("Register");
        expect(buttonElement).toHaveStyle({
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        backgroundColor: "transparent",
        fontSize: "12px",
        });
    });

    it("handles click events", async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Register</Button>);
        const buttonElement = screen.getByText("Register");
        userEvent.click(buttonElement);
        await screen.findByText("Register");
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

describe("NavbarItem component", () => {
  it('should be render navbar items', () => {
    render(
        <Router>
          <NavbarItem />
        </Router>
    )

    const items = ["About", "Features", "Pricing", "Gallery", "Team"].map((item) => screen.getByText(item));
    items.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});

describe('Navbar component', () => {
    it('renders the logo', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    it('renders all navbar items', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const items = ["About", "Features", "Pricing", "Gallery", "Team"];
        items.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('renders the register buttons', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        expect(screen.getByText('Log In')).toBeInTheDocument();
        expect(screen.getByText('Register')).toBeInTheDocument();
    });
});

describe('Logo component', () => {
    it('renders the logo image', () => {
        render(<Logo />);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    it('renders the logo text', () => {
        render(<Logo />);
        expect(screen.getByText('Bright Tax')).toBeInTheDocument();
    });
});

describe("Sidebar component" , () => {
    it('should  be render Sidebar component', () => {
        render(<Router><SideBar /></Router>);
        const items = ["Dashboard", "Orders", "Schedules", "Messages", "Inbox", "Analytics", "News", "Settings"].map((item) => screen.getByText(item));
        items.forEach((item) => {
            expect(item).toBeInTheDocument();
        });
    });
});

describe('sidebarItem component', () => {
    it('should render sidebar item', () => {
        render(
            <Router>
                <SideBar />
            </Router>
        );
        const items = ["Dashboard", "Orders", "Schedules", "Messages", "Inbox", "Analytics", "News", "Settings"];
        items.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it("should render sidebar item with button", () => {
        render(
            <Router>
                <SideBar />
            </Router>
        );
        const items = ["Dashboard", "Orders", "Schedules", "Messages", "Inbox", "Analytics", "News", "Settings"];
        items.forEach(item => {
            const buttonElement = screen.getByRole("button", { name: item });
            expect(buttonElement).toBeInTheDocument();
        });

    })
});