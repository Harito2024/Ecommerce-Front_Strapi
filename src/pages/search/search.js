import { BasicLayout } from "@/layouts";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import {
  GridGames,
  NoResult,
  Pagination,
  Separator,
} from "@/components/Shared";

import { useEffect } from "react";
export default function SearchPage(props) {
  const { games, pagination, searchText } = props;
  const hasResult = size(games) > 0;

  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />
          <h2>Buscando: {searchText}</h2>
          {hasResult ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult text="No se encotraron resultados con esa busqueda" />
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
