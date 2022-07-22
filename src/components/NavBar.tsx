import React from "react";
import { Container, Button, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 300.005 300.005"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M149.354,146.641c-4.298,0-7.781,3.483-7.781,7.781v54.541c0,4.298,3.483,7.781,7.781,7.781
				c4.295,0,7.781-3.483,7.781-7.781v-54.541C157.135,150.124,153.648,146.641,149.354,146.641z"
                  />
                  <path
                    d="M111.7,146.641c-4.298,0-7.781,3.483-7.781,7.781v54.541c0,4.298,3.483,7.781,7.781,7.781
				c4.298,0,7.781-3.483,7.781-7.781v-54.541C119.481,150.124,115.997,146.641,111.7,146.641z"
                  />
                  <path
                    d="M187.005,146.641c-4.3,0-7.781,3.483-7.781,7.781v54.541c0,4.298,3.481,7.781,7.781,7.781
				c4.295,0,7.781-3.483,7.781-7.781v-54.541C194.786,150.124,191.301,146.641,187.005,146.641z"
                  />
                  <path
                    d="M150,0C67.159,0,0.002,67.162,0.002,150S67.159,300.005,150,300.005S300.003,232.841,300.003,150S232.841,0,150,0z
				 M231.341,153.208l-11.495,67.961c0,6.634-5.379,12.014-12.016,12.014H90.875c-6.634,0-12.014-5.379-12.014-12.014
				l-11.495-67.961c-4.451-3.582-7.358-9.005-7.358-15.157c0-10.312,8.001-18.736,18.127-19.452l33.087-48.389
				c2.425-3.545,7.262-4.458,10.815-2.031c3.548,2.428,4.456,7.267,2.031,10.815l-27.031,39.535h104.64l-27.036-39.535
				c-2.428-3.548-1.52-8.388,2.031-10.815c3.545-2.425,8.388-1.512,10.815,2.031l33.09,48.389
				c10.12,0.718,18.119,9.143,18.119,19.452C238.697,144.206,235.789,149.627,231.341,153.208z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavBarBs>
  );
}
