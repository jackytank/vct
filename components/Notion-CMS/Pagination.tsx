import { PaginationProps } from "@/types/notion-type";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex flex-row space-x-5 items-center justify-center">
      {currentPage > 1 && (
        <Link href={`/article?page=${currentPage - 1}`}>
          <Button variant="outlined" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <span>&larr; Previous</span>
          </Button>
        </Link>
      )}

      {currentPage < totalPages && (
        <Link href={`/article?page=${currentPage + 1}`}>
          <Button placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <span>Next &rarr;</span>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
