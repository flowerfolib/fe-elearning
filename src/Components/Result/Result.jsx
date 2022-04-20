import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import styles from "./Result.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const columns = [
  { id: "name", label: "Họ và tên", minWidth: 170 },
  { id: "quiz", label: "Bài thi", minWidth: 100 },
  {
    id: "numberofquiz",
    label: "Số câu hỏi",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "numberOfCorrect",
    label: "Số câu đúng",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "total",
    label: "Điểm",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, quiz, numberofquiz, numberOfCorrect) {
  const total = (numberOfCorrect / numberofquiz) * 10;
  return { name, quiz, numberofquiz, numberOfCorrect, total };
}

const rows = [
  createData("Nguyễn Văn A", "IN", 6, 6),
  createData("Nguyễn Văn A", "CN", 6, 6),
  createData("Nguyễn Văn A", "IT", 6, 6),
  createData("Nguyễn Văn B", "US", 6, 6),
  createData("Nguyễn Văn A", "CA", 6, 6),
  createData("Nguyễn Văn A", "AU", 6, 6),
  createData("Nguyễn Văn A", "DE", 6, 6),
  createData("Nguyễn Văn A", "IE", 6, 6),
  createData("Nguyễn Văn A", "MX", 6, 6),
  createData("Nguyễn Văn A", "JP", 6, 6),
  createData("Nguyễn Văn A", "FR", 6, 6),
  createData("Nguyễn Văn B", "GB", 6, 6),
  createData("Nguyễn Văn A", "RU", 6, 6),
  createData("Nguyễn Văn A", "NG", 6, 6),
  createData("Nguyễn Văn A", "BR", 6, 6),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current
      .querySelectorAll("p")
      .forEach((item) => (item.style.margin = 0));
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Header />
      <Paper sx={{ width: "65%", margin: "10% auto 0" }}>
        <TableContainer className={styles.paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{
                    background: "green",
                    color: "white",
                  }}
                  colSpan={5}
                >
                  KẾT QUẢ THI
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ref={ref}
        />
      </Paper>
      <Link
        to="/"
        style={{ marginTop: "1rem" }}
        className="d-flex justify-content-center"
      >
        <Button className="btn-success">Về trang chủ</Button>
      </Link>
      <Footer />
    </>
  );
}
