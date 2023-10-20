import Link from "next/link";

const BookTableBtn = ({ backgroundColor, border, color }) => {
  return (
    <Link
      href="/"
      className="link__book-table"
      style={{
        backgroundColor,
        border,
        color,
      }}
    >
      Book A Table
    </Link>
  );
};

export default BookTableBtn;
