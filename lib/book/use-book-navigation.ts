import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { clampPage, getPageFromQuery } from "@/lib/book/page-utils";

export function useBookNavigation(maxPages: number) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const page = getPageFromQuery(searchParams.get("page"), maxPages);
    setCurrentPage(page);
  }, [searchParams, maxPages]);

  const goToPage = (page: number) => {
    const validPage = clampPage(page, maxPages);
    if (validPage === currentPage) return;
    setCurrentPage(validPage);
    router.push(`/book?page=${validPage}`, { scroll: false });
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  return {
    currentPage,
    maxPages,
    isMounted,
    goToPage,
    nextPage,
    prevPage,
    canNext: currentPage < maxPages,
    canPrev: currentPage > 1
  };
}
