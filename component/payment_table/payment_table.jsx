import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import styles from "./payment_table.module.scss";

const PaymentTable = () => {
  return (
    <div className={styles.root}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Program</TableCell>
              <TableCell align="left">Order Id</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Method</TableCell>
              <TableCell align="left">Credit Balance</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                  <h1 className={styles.title}>Graduate Certification - Supply Chain</h1>
                <p>
                  Undergraduate, University of canada
                </p>
              </TableCell>
              <TableCell align="left">
                  <h3>5011108</h3>
              </TableCell>
              <TableCell align="left">
                <h1>10th June</h1>
                <p>
                  2021
                </p>
              </TableCell>
              <TableCell align="left"><h1>$120.00 USD</h1></TableCell>
              <TableCell align="left">
                <LocalAtmIcon className={styles.method}></LocalAtmIcon>
              </TableCell>
              <TableCell align="left"><h1>$120.00 USD</h1></TableCell>
              <TableCell align="left">
                <h4>View Details</h4>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div>
        <h1>Order Summery</h1>
      </div>
    </div>
  );
};

export default PaymentTable;
