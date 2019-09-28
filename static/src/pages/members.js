import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql } from "gatsby";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

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
            }
          }
        }
      }
    `
  );

  console.log(data);
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

      <Table>
        <TableBody>
          {data.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
}

export default MembersPage;
