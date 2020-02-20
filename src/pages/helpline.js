import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

import { withStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql } from "gatsby";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

function MembersPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMembersJson {
          edges {
            node {
              name
              hotline
              contact {
                email
                phone
              }
              surgeryType
            }
          }
        }
      }
    `
  );

  // const members = data.allMembersJson.edges;
  function checkHotline(item) {
    return item.hotline === true;
  }
  function getEmergencyContact(item) {
    return item.surgeryType === "emergency";
  }
  function getElectiveContact(item) {
    return item.surgeryType === "elective";
  }

  const members = data.allMembersJson.edges.map(item => item.node);
  const emergecyContactList = members.filter(getEmergencyContact);
  const electiveContactList = members.filter(getElectiveContact);
  // let members = data.allMembersJson.edges.filter(checkHotline);
  // members = members.map(item => item.node);
  // console.log(data.allMembersJson.edges);

  // let emergecyContactList = data.allMembersJson.edges.filter(getEmergencyContact)
  // console.log(emergecyContactList);
  // emergecyContactList = emergecyContactList.map(item => item.node);
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Members" keywords={[`diverticullitis`]} />
      <div className="text-center">
        <h2 className="text-red-700 font-bold text-4xl">Member Hotline</h2>

        <p>
          The members listed are willing to help you and your family. You may
          contact them with any questions or just to talk and get that much
          needed support.
        </p>
      </div>

      <br></br>
      <div className="text-center text-xl font-bold pb-4">
        <h1>Complicated Diverticulitis</h1>
      </div>

      <Table>
        <TableBody>
          {emergecyContactList.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.contact && row.contact.phone}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.contact && row.contact.email}
              </StyledTableCell>

              {/*
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={2} colSpan={3} align="center">
              <div className="text-center text-xl font-bold pb-4">
                <h1>Uncomplicated Diverticulitis</h1>
              </div>
            </TableCell>
          </TableRow>

          <TableRow></TableRow>
          {electiveContactList.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.contact && row.contact.phone}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.contact && row.contact.email}
              </StyledTableCell>
              {/*
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={2} colSpan={3} align="center">
              <div className="text-center text-xl font-bold pb-4">
                <h1>Nonoperative </h1>
              </div>
            </TableCell>
          </TableRow>
          <TableRow></TableRow>
          <StyledTableRow key="nonoperative">
            <StyledTableCell component="th" scope="row">
              Laura Foscolo
            </StyledTableCell>
            <StyledTableCell align="right">(631) 325-1212</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="nonoperative">
            <StyledTableCell component="th" scope="row">
              Camille Milo
            </StyledTableCell>
            <StyledTableCell align="right">(347) 637-0266</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </Layout>
  );
}

export default MembersPage;
