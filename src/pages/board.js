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
      <SEO title="Board" keywords={[`diverticullitis`]} />
      <div className="text-center">
        <h2 className="text-red-700 font-bold text-4xl">Board Members</h2>
      </div>

      <br></br>

      <Table>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>President</StyledTableCell>
            <StyledTableCell>Christine Joyce</StyledTableCell>
            <StyledTableCell align="right">(516) 429-2644</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>Vice President</StyledTableCell>
            <StyledTableCell>Tom Schiavone</StyledTableCell>
            <StyledTableCell align="right">(631) 813–6802</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>Secretary</StyledTableCell>
            <StyledTableCell>Laura Foscolo</StyledTableCell>
            <StyledTableCell align="right">(631) 325-1212</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>Treasurer</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>Immediate Past President</StyledTableCell>
            <StyledTableCell>Mike Scialabba</StyledTableCell>
            <StyledTableCell align="right">(631) 846-3074</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </Layout>
  );
}

export default MembersPage;
